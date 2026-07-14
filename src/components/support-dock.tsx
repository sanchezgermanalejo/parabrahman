"use client";

import { useState } from "react";
import { AiSupportIcon, WhatsAppIcon } from "@/components/support-icons";

type ChatMessage = {
  id: number;
  role: "student" | "assistant";
  text: string;
};

const initialMessages: ChatMessage[] = [
  {
    id: 1,
    role: "assistant",
    text: "Namasté. Soy el asistente inicial de Parabrahman. Puedo orientarte sobre la escuela, el acceso, YouTube y los encuentros de Zoom. El tutor filosófico con fuentes todavía está en preparación.",
  },
];

function answerQuestion(question: string) {
  const normalized = question.toLocaleLowerCase("es");

  if (normalized.includes("gratis") || normalized.includes("precio")) {
    return "El acceso a las enseñanzas esenciales de Parabrahman es libre y gratuito. La sostenibilidad se proyecta mediante donaciones voluntarias y publicidad no invasiva.";
  }
  if (normalized.includes("cuenta") || normalized.includes("registro") || normalized.includes("acceso")) {
    return "Puedes explorar las enseñanzas sin registrarte. La cuenta de alumno sirve para conservar tu identidad, progreso y funciones personales.";
  }
  if (normalized.includes("youtube") || normalized.includes("video")) {
    return "Las enseñanzas audiovisuales unipersonales se publican en el canal oficial @parabrahmanyosoy. La escuela las organiza en rutas de aprendizaje con contexto y seguimiento.";
  }
  if (normalized.includes("zoom") || normalized.includes("reunión") || normalized.includes("encuentro")) {
    return "La sección Zoom y encuentros reúne las conversaciones con participantes, el próximo evento y el archivo de reuniones grabadas.";
  }
  if (normalized.includes("donar") || normalized.includes("donación")) {
    return "Las donaciones serán voluntarias y nunca desbloquearán ventajas académicas. El módulo de contribuciones todavía está en preparación.";
  }
  if (normalized.includes("parabrahman") || normalized.includes("escuela")) {
    return "Parabrahman — Escuela de Vedanta Advaita es una escuela virtual de autogestión para el autoconocimiento, centrada en video y encuentros. El nombre Parabrahman se presenta institucionalmente como «más allá de Brahman».";
  }
  if (normalized.includes("advaita") || normalized.includes("vedanta") || normalized.includes("metafísica") || normalized.includes("filosofía") || normalized.includes("consciencia")) {
    return "Esa es una consulta de conocimiento. Para responderla con rigor, el tutor necesita recuperar materiales autorizados y citar su fuente. Esa base todavía no está conectada; mientras tanto, te invito a consultar las rutas y el canal oficial.";
  }
  return "Todavía no tengo una respuesta verificada para esa pregunta. Prefiero reconocer el límite antes que inventar información. Puedes consultar las rutas, el canal oficial o escribir por WhatsApp cuando el número institucional esté conectado.";
}

export function SupportDock({ whatsappNumber }: { whatsappNumber?: string }) {
  const [panel, setPanel] = useState<"chat" | "whatsapp" | null>(null);
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);

  function sendQuestion(formData: FormData) {
    const question = String(formData.get("question") ?? "").trim().slice(0, 500);
    if (!question) return;

    const id = Date.now();
    setMessages((current) => [
      ...current,
      { id, role: "student", text: question },
      { id: id + 1, role: "assistant", text: answerQuestion(question) },
    ]);
  }

  const whatsappUrl = whatsappNumber
    ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hola, quisiera hacer una consulta sobre Parabrahman — Escuela de Vedanta Advaita.")}`
    : undefined;

  return (
    <div className="support-dock fixed right-4 bottom-4 z-50 flex flex-col items-end gap-3 sm:right-6 sm:bottom-6">
      {panel === "chat" && (
        <section className="support-panel luminous-card flex max-h-[min(620px,75vh)] w-[min(390px,calc(100vw-2rem))] flex-col overflow-hidden rounded-3xl border border-amber-200/20 bg-[#090d14]/96 shadow-2xl shadow-black/60 backdrop-blur-2xl" aria-label="Asistente de Parabrahman">
          <header className="flex items-start justify-between gap-4 border-b border-amber-100/10 bg-[radial-gradient(circle_at_top_right,rgba(245,199,107,0.14),transparent_50%)] p-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-300/70">Asistente inicial</p>
              <h2 className="mt-1 font-semibold text-stone-100">Consulta a Parabrahman</h2>
              <p className="mt-1 text-xs text-stone-500">Institucional · Base filosófica en preparación</p>
            </div>
            <button type="button" onClick={() => setPanel(null)} className="grid size-8 place-items-center rounded-full border border-stone-700 text-stone-400 transition hover:border-amber-300/40 hover:text-stone-100" aria-label="Cerrar asistente">×</button>
          </header>

          <div className="grid flex-1 gap-3 overflow-y-auto p-4" aria-live="polite">
            {messages.map((message) => (
              <p key={message.id} className={`max-w-[88%] rounded-2xl px-4 py-3 text-sm leading-6 ${message.role === "assistant" ? "justify-self-start border border-amber-100/10 bg-stone-900/90 text-stone-300" : "justify-self-end bg-amber-300 text-stone-950"}`}>
                {message.text}
              </p>
            ))}
          </div>

          <form action={sendQuestion} className="border-t border-amber-100/10 p-4">
            <label className="sr-only" htmlFor="support-question">Escribe tu consulta</label>
            <div className="flex gap-2">
              <input id="support-question" name="question" type="text" maxLength={500} required autoComplete="off" placeholder="Escribe tu consulta…" className="min-w-0 flex-1 rounded-xl border border-stone-700 bg-black/40 px-4 py-3 text-sm text-stone-100 outline-none placeholder:text-stone-600 focus:border-amber-300/50" />
              <button type="submit" className="rounded-xl bg-amber-300 px-4 font-semibold text-stone-950 transition hover:bg-amber-200" aria-label="Enviar consulta">↑</button>
            </div>
          </form>
        </section>
      )}

      {panel === "whatsapp" && !whatsappUrl && (
        <section className="support-panel luminous-card w-[min(340px,calc(100vw-2rem))] rounded-3xl border border-emerald-300/20 bg-[#07110d]/96 p-5 shadow-2xl shadow-black/60 backdrop-blur-2xl">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300/70">Consultas</p>
              <h2 className="mt-2 text-lg font-semibold">WhatsApp institucional</h2>
            </div>
            <button type="button" onClick={() => setPanel(null)} className="text-xl text-stone-500 hover:text-white" aria-label="Cerrar WhatsApp">×</button>
          </div>
          <p className="mt-4 text-sm leading-6 text-stone-400">El botón está preparado. Falta incorporar el número público de la escuela para iniciar conversaciones.</p>
        </section>
      )}

      <div className="flex items-center gap-3">
        {whatsappUrl ? (
          <a href={whatsappUrl} target="_blank" rel="noreferrer" className="support-button grid size-14 place-items-center rounded-full border border-emerald-200/30 bg-[#25d366] text-white shadow-lg shadow-emerald-900/40 transition hover:scale-105 hover:bg-[#20bd5a]" aria-label="Consultar por WhatsApp" title="Consultar por WhatsApp">
            <WhatsAppIcon className="size-8" />
          </a>
        ) : (
          <button type="button" onClick={() => setPanel(panel === "whatsapp" ? null : "whatsapp")} className="support-button grid size-14 place-items-center rounded-full border border-emerald-200/25 bg-[#25d366] text-white shadow-lg shadow-emerald-900/40 transition hover:scale-105 hover:bg-[#20bd5a]" aria-label="Configurar consultas por WhatsApp" title="WhatsApp institucional">
            <WhatsAppIcon className="size-8" />
          </button>
        )}
        <button type="button" onClick={() => setPanel(panel === "chat" ? null : "chat")} className="support-button sacred-emblem grid size-16 place-items-center overflow-hidden rounded-full border border-blue-200/40 bg-stone-950 shadow-xl shadow-blue-950/50 transition hover:scale-105" aria-label="Abrir asistente inteligente de atención al público" aria-expanded={panel === "chat"} title="Asistente inteligente de Parabrahman">
          <AiSupportIcon className="size-[3.65rem]" />
        </button>
      </div>
    </div>
  );
}
