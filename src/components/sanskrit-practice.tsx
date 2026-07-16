"use client";

import { useState } from "react";

type PracticeItem = {
  prompt: string;
  answer: string;
  options: readonly string[];
};

type VocabularyItem = {
  devanagari: string;
  iast: string;
  meaning: string;
  note: string;
};

export function SanskritPractice({
  vocabulary,
  questions,
}: {
  vocabulary: readonly VocabularyItem[];
  questions: readonly PracticeItem[];
}) {
  const [cardIndex, setCardIndex] = useState(0);
  const [revealed, setRevealed] = useState(false);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [selected, setSelected] = useState<string>();
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const card = vocabulary[cardIndex];
  const question = questions[questionIndex];

  function nextCard() {
    setCardIndex((current) => (current + 1) % vocabulary.length);
    setRevealed(false);
  }

  function answer(option: string) {
    if (selected) return;
    setSelected(option);
    if (option === question.answer) setScore((current) => current + 1);
  }

  function nextQuestion() {
    if (questionIndex === questions.length - 1) {
      setFinished(true);
      return;
    }
    setQuestionIndex((current) => current + 1);
    setSelected(undefined);
  }

  function restart() {
    setQuestionIndex(0);
    setSelected(undefined);
    setScore(0);
    setFinished(false);
  }

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <section className="rounded-3xl border border-amber-200/10 bg-stone-900/65 p-6 sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-300/70">Tarjetas de vocabulario</p>
        <p className="mt-2 text-sm text-stone-500">{cardIndex + 1} de {vocabulary.length}</p>
        <button
          type="button"
          onClick={() => setRevealed((current) => !current)}
          className="mt-6 flex min-h-64 w-full flex-col items-center justify-center rounded-2xl border border-amber-300/15 bg-[radial-gradient(circle,rgba(251,191,36,0.08),transparent_65%)] px-5 text-center transition hover:border-amber-300/35"
        >
          <span lang="sa" className="text-5xl text-amber-100 sm:text-6xl">{card.devanagari}</span>
          {revealed ? (
            <span className="mt-6">
              <span className="block text-xl font-semibold text-stone-100">{card.iast}</span>
              <span className="mt-2 block text-stone-300">{card.meaning}</span>
              <span className="mt-3 block text-sm leading-6 text-stone-500">{card.note}</span>
            </span>
          ) : (
            <span className="mt-6 text-sm text-stone-500">Toca para revelar IAST y significado</span>
          )}
        </button>
        <button type="button" onClick={nextCard} className="mt-4 w-full rounded-xl border border-amber-300/25 px-5 py-3 font-semibold text-amber-100 transition hover:bg-amber-300/10">
          Siguiente tarjeta
        </button>
      </section>

      <section className="rounded-3xl border border-sky-200/10 bg-stone-900/65 p-6 sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-300/70">Reconocimiento de escritura</p>
        {finished ? (
          <div className="flex min-h-[355px] flex-col items-center justify-center text-center">
            <p className="text-5xl font-semibold text-sky-100">{score}/{questions.length}</p>
            <p className="mt-4 max-w-sm leading-7 text-stone-400">
              {score === questions.length
                ? "Reconocimiento completo. Continúa con lectura y análisis."
                : "Repasa las tarjetas y vuelve a intentarlo sin adivinar por semejanza visual."}
            </p>
            <button type="button" onClick={restart} className="mt-7 rounded-xl bg-sky-300 px-5 py-3 font-semibold text-stone-950 transition hover:bg-sky-200">Repetir práctica</button>
          </div>
        ) : (
          <>
            <p className="mt-2 text-sm text-stone-500">Pregunta {questionIndex + 1} de {questions.length}</p>
            <p lang="sa" className="mt-9 text-center text-5xl text-sky-100 sm:text-6xl">{question.prompt}</p>
            <p className="mt-4 text-center text-sm text-stone-500">Selecciona la transliteración IAST correcta.</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {question.options.map((option) => {
                const isCorrect = selected && option === question.answer;
                const isWrong = selected === option && option !== question.answer;
                return (
                  <button
                    key={option}
                    type="button"
                    onClick={() => answer(option)}
                    className={`rounded-xl border px-4 py-3 text-left transition ${
                      isCorrect
                        ? "border-emerald-300/50 bg-emerald-300/10 text-emerald-100"
                        : isWrong
                          ? "border-red-300/50 bg-red-300/10 text-red-100"
                          : "border-stone-700 text-stone-300 hover:border-sky-300/40"
                    }`}
                  >
                    {option}
                  </button>
                );
              })}
            </div>
            {selected && (
              <button type="button" onClick={nextQuestion} className="mt-6 w-full rounded-xl bg-sky-300 px-5 py-3 font-semibold text-stone-950 transition hover:bg-sky-200">
                {questionIndex === questions.length - 1 ? "Ver resultado" : "Siguiente pregunta"}
              </button>
            )}
          </>
        )}
      </section>
    </div>
  );
}
