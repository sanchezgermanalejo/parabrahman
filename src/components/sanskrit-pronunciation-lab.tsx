"use client";

import { useEffect, useRef, useState } from "react";
import type { PronunciationExercise } from "@/content/sanskrit-pronunciation";

type RecognitionResultEvent = Event & {
  results: ArrayLike<{ 0: { transcript: string; confidence: number } }>;
};

type RecognitionErrorEvent = Event & { error: string };

type RecognitionInstance = {
  lang: string;
  continuous: boolean;
  interimResults: boolean;
  maxAlternatives: number;
  start: () => void;
  stop: () => void;
  abort: () => void;
  onresult: ((event: RecognitionResultEvent) => void) | null;
  onerror: ((event: RecognitionErrorEvent) => void) | null;
  onend: (() => void) | null;
};

type RecognitionConstructor = new () => RecognitionInstance;

declare global {
  interface Window {
    SpeechRecognition?: RecognitionConstructor;
    webkitSpeechRecognition?: RecognitionConstructor;
  }
}

type Feedback = {
  transcript: string;
  confidence: number;
  score: number;
  message: string;
};

function normalize(value: string) {
  return value.normalize("NFKD").toLocaleLowerCase().replace(/[\u0300-\u036f\s.,;:!?।॥'’\-]/g, "");
}

function distance(a: string, b: string) {
  const previous = Array.from({ length: b.length + 1 }, (_, index) => index);
  for (let row = 1; row <= a.length; row += 1) {
    let diagonal = previous[0];
    previous[0] = row;
    for (let column = 1; column <= b.length; column += 1) {
      const above = previous[column];
      previous[column] = Math.min(
        previous[column] + 1,
        previous[column - 1] + 1,
        diagonal + (a[row - 1] === b[column - 1] ? 0 : 1),
      );
      diagonal = above;
    }
  }
  return previous[b.length];
}

function similarity(transcript: string, accepted: readonly string[]) {
  const heard = normalize(transcript);
  if (!heard) return 0;
  return Math.max(...accepted.map((candidate) => {
    const expected = normalize(candidate);
    return 1 - distance(heard, expected) / Math.max(heard.length, expected.length, 1);
  }));
}

export function SanskritPronunciationLab({ exercises }: { exercises: readonly PronunciationExercise[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [voiceLabel, setVoiceLabel] = useState("Voz del dispositivo");
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [isRecognizing, setIsRecognizing] = useState(false);
  const [audioUrl, setAudioUrl] = useState<string>();
  const [feedback, setFeedback] = useState<Feedback>();
  const [error, setError] = useState<string>();
  const recorderRef = useRef<MediaRecorder | null>(null);
  const streamRef = useRef<MediaStream | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const recognitionRef = useRef<RecognitionInstance | null>(null);
  const active = exercises[activeIndex];

  useEffect(() => () => {
    window.speechSynthesis?.cancel();
    recognitionRef.current?.abort();
    streamRef.current?.getTracks().forEach((track) => track.stop());
    if (audioUrl) URL.revokeObjectURL(audioUrl);
  }, [audioUrl]);

  function chooseExercise(index: number) {
    window.speechSynthesis?.cancel();
    recognitionRef.current?.abort();
    setActiveIndex(index);
    setFeedback(undefined);
    setError(undefined);
  }

  function listen() {
    setError(undefined);
    if (!("speechSynthesis" in window)) {
      setError("Este navegador no ofrece síntesis de voz.");
      return;
    }
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(active.devanagari);
    const voices = window.speechSynthesis.getVoices();
    const sanskritVoice = voices.find((voice) => voice.lang.toLowerCase().startsWith("sa"));
    const fallbackVoice = voices.find((voice) => voice.lang.toLowerCase().startsWith("hi"));
    const selected = sanskritVoice ?? fallbackVoice;
    if (selected) utterance.voice = selected;
    utterance.lang = sanskritVoice ? sanskritVoice.lang : "sa-IN";
    utterance.rate = 0.68;
    utterance.pitch = 1;
    utterance.onstart = () => {
      setVoiceLabel(selected ? `${selected.name} · ${selected.lang}${sanskritVoice ? "" : " · aproximación"}` : "Voz predeterminada · aproximación");
      setIsSpeaking(true);
    };
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => {
      setIsSpeaking(false);
      setError("La voz instalada no pudo leer este ejercicio. La disponibilidad depende del dispositivo.");
    };
    window.speechSynthesis.speak(utterance);
  }

  async function startRecording() {
    setError(undefined);
    setFeedback(undefined);
    if (!navigator.mediaDevices?.getUserMedia || !("MediaRecorder" in window)) {
      setError("Este navegador no permite grabar el micrófono desde la página.");
      return;
    }
    try {
      if (audioUrl) URL.revokeObjectURL(audioUrl);
      setAudioUrl(undefined);
      const stream = await navigator.mediaDevices.getUserMedia({ audio: { echoCancellation: true, noiseSuppression: true } });
      streamRef.current = stream;
      chunksRef.current = [];
      const recorder = new MediaRecorder(stream);
      recorderRef.current = recorder;
      recorder.ondataavailable = (event) => { if (event.data.size > 0) chunksRef.current.push(event.data); };
      recorder.onstop = () => {
        const blob = new Blob(chunksRef.current, { type: recorder.mimeType || "audio/webm" });
        setAudioUrl(URL.createObjectURL(blob));
        stream.getTracks().forEach((track) => track.stop());
        streamRef.current = null;
        setIsRecording(false);
      };
      recorder.start();
      setIsRecording(true);
    } catch {
      setError("No se pudo acceder al micrófono. Revisa el permiso del navegador y vuelve a intentarlo.");
    }
  }

  function stopRecording() {
    if (recorderRef.current?.state === "recording") recorderRef.current.stop();
  }

  function evaluate() {
    setError(undefined);
    setFeedback(undefined);
    const Constructor = window.SpeechRecognition ?? window.webkitSpeechRecognition;
    if (!Constructor) {
      setError("La evaluación automática no está disponible en este navegador. Aun puedes grabarte y comparar tu audio.");
      return;
    }
    const recognition = new Constructor();
    recognitionRef.current = recognition;
    recognition.lang = "sa-IN";
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
    recognition.onresult = (event) => {
      const result = event.results[0]?.[0];
      if (!result) return;
      const score = Math.round(similarity(result.transcript, active.accepted) * 100);
      const message = score >= 82
        ? "La frase fue reconocida con claridad. Ahora escucha tu grabación y revisa los detalles fonéticos."
        : score >= 58
          ? "La forma reconocida está cerca. Repite lentamente respetando el foco indicado."
          : "El sistema no reconoció suficientemente la frase. Escucha el modelo, divide en sílabas y vuelve a intentarlo.";
      setFeedback({ transcript: result.transcript, confidence: Math.round((result.confidence || 0) * 100), score, message });
    };
    recognition.onerror = (event) => {
      const message = event.error === "not-allowed"
        ? "El permiso del micrófono fue rechazado. Habilítalo en el navegador."
        : event.error === "language-not-supported"
          ? "El servicio de este navegador no reconoce sánscrito. Utiliza la grabación y comparación manual."
          : "No se pudo completar el reconocimiento. Puedes repetir o usar solo la grabación local.";
      setError(message);
      setIsRecognizing(false);
    };
    recognition.onend = () => setIsRecognizing(false);
    try {
      recognition.start();
      setIsRecognizing(true);
    } catch {
      setError("El reconocimiento ya estaba activo. Espera un momento y vuelve a intentar.");
      setIsRecognizing(false);
    }
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[280px_minmax(0,1fr)]">
      <nav aria-label="Ejercicios de pronunciación" className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible">
        {exercises.map((exercise, index) => (
          <button key={exercise.id} type="button" aria-pressed={index === activeIndex} onClick={() => chooseExercise(index)} className={`min-w-48 rounded-2xl border p-4 text-left transition lg:min-w-0 ${index === activeIndex ? "border-violet-300/40 bg-violet-300/10" : "border-stone-800 bg-stone-900/45 hover:border-stone-600"}`}>
            <span lang="sa" className="block text-2xl text-violet-100">{exercise.devanagari}</span>
            <span className="mt-2 block font-semibold text-stone-200">{exercise.iast}</span>
            <span className="mt-1 block text-xs text-stone-500">{exercise.focus}</span>
          </button>
        ))}
      </nav>

      <article className="rounded-3xl border border-violet-200/10 bg-stone-900/60 p-5 sm:p-8">
        <div className="grid gap-6 xl:grid-cols-[1fr_0.9fr]">
          <section>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-violet-300/70">Modelo y articulación</p>
            <p lang="sa" className="mt-5 text-5xl text-violet-100 sm:text-6xl">{active.devanagari}</p>
            <p className="mt-4 text-2xl font-semibold text-stone-100">{active.iast}</p>
            <p className="mt-2 text-sm tracking-[0.16em] text-stone-500">{active.syllables}</p>
            <div className="mt-6 rounded-2xl border border-amber-300/10 bg-amber-300/[0.025] p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-amber-300/70">Foco: {active.focus}</p>
              <p className="mt-2 text-sm leading-6 text-stone-400">{active.guidance}</p>
            </div>
            <button type="button" onClick={listen} disabled={isSpeaking} className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-violet-300 px-5 py-3 font-semibold text-stone-950 transition hover:bg-violet-200 disabled:opacity-60">
              <span aria-hidden="true">{isSpeaking ? "◉" : "▶"}</span>{isSpeaking ? "Escuchando…" : "Escuchar modelo lento"}
            </button>
            <p className="mt-2 text-xs text-stone-600">{voiceLabel}. La voz sintética es una ayuda de repetición, no un patrón tradicional certificado.</p>
          </section>

          <section className="rounded-2xl border border-sky-300/10 bg-sky-300/[0.025] p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-300/70">Tu micrófono</p>
            <h3 className="mt-2 text-xl font-semibold">Grábate, escucha y compara</h3>
            <p className="mt-3 text-sm leading-6 text-stone-500">La grabación permanece en la memoria de esta pestaña y no se sube a Parabrahman.</p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              <button type="button" onClick={isRecording ? stopRecording : startRecording} className={`rounded-xl border px-4 py-3 font-semibold transition ${isRecording ? "border-rose-300/45 bg-rose-300/10 text-rose-100" : "border-sky-300/30 text-sky-100 hover:bg-sky-300/10"}`}>
                {isRecording ? "■ Detener grabación" : "● Grabar mi voz"}
              </button>
              <button type="button" onClick={evaluate} disabled={isRecognizing || isRecording} className="rounded-xl border border-emerald-300/30 px-4 py-3 font-semibold text-emerald-100 transition hover:bg-emerald-300/10 disabled:opacity-50">
                {isRecognizing ? "Escuchando…" : "Micrófono + evaluación"}
              </button>
            </div>
            {audioUrl && <audio className="mt-5 w-full" controls src={audioUrl}>Tu navegador no puede reproducir la grabación.</audio>}

            {feedback && (
              <div className="mt-5 rounded-2xl border border-emerald-300/15 bg-emerald-300/[0.04] p-4" aria-live="polite">
                <div className="flex items-end justify-between gap-4"><div><p className="text-xs uppercase tracking-[0.13em] text-stone-500">El sistema reconoció</p><p className="mt-1 font-semibold text-stone-100">“{feedback.transcript}”</p></div><p className="text-3xl font-semibold text-emerald-200">{feedback.score}%</p></div>
                <div className="mt-3 h-2 overflow-hidden rounded-full bg-stone-800"><div className="h-full rounded-full bg-emerald-300" style={{ width: `${feedback.score}%` }} /></div>
                <p className="mt-3 text-sm leading-6 text-stone-400">{feedback.message}</p>
                {feedback.confidence > 0 && <p className="mt-2 text-xs text-stone-600">Confianza informada por el reconocedor: {feedback.confidence}%.</p>}
              </div>
            )}
            {error && <p className="mt-5 rounded-xl border border-rose-300/20 bg-rose-300/[0.05] p-4 text-sm leading-6 text-rose-100" role="alert">{error}</p>}
            <p className="mt-5 border-t border-stone-800 pt-4 text-xs leading-5 text-stone-600">Evaluación experimental: mide coincidencia con la transcripción producida por el navegador, no retroflexión, aspiración, acento védico ni calidad de recitación. En navegadores compatibles, el reconocimiento puede utilizar un servicio externo.</p>
          </section>
        </div>
      </article>
    </div>
  );
}
