"use client";

import { useState, useSyncExternalStore } from "react";

const NOTES_EVENT = "parabrahman-notes-change";

function notesKey(lessonId: string) {
  return `parabrahman:lesson-notes:v1:${lessonId}`;
}

function subscribe(onStoreChange: () => void) {
  window.addEventListener("storage", onStoreChange);
  window.addEventListener(NOTES_EVENT, onStoreChange);
  return () => {
    window.removeEventListener("storage", onStoreChange);
    window.removeEventListener(NOTES_EVENT, onStoreChange);
  };
}

export function LessonNotes({ lessonId }: { lessonId: string }) {
  const [saved, setSaved] = useState(false);
  const snapshot = useSyncExternalStore(
    subscribe,
    () => window.localStorage.getItem(notesKey(lessonId)) ?? "",
    () => "",
  );

  function saveNotes(formData: FormData) {
    const notes = String(formData.get("notes") ?? "").slice(0, 5000);
    window.localStorage.setItem(notesKey(lessonId), notes);
    window.dispatchEvent(new Event(NOTES_EVENT));
    setSaved(true);
  }

  return (
    <section className="luminous-card mt-10 rounded-3xl border border-amber-100/10 bg-stone-900/60 p-6 sm:p-8">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-300/70">
        Cuaderno personal
      </p>
      <h2 className="mt-2 text-2xl font-semibold">Notas de esta lección</h2>
      <p className="mt-3 text-sm leading-6 text-stone-400">
        Registra preguntas, comprensiones o temas que quieras volver a mirar.
        Estas notas son privadas y permanecen en este navegador durante el MVP.
      </p>
      <form action={saveNotes} className="mt-6 grid gap-4">
        <textarea
          key={snapshot}
          name="notes"
          defaultValue={snapshot}
          onChange={() => setSaved(false)}
          maxLength={5000}
          rows={7}
          placeholder="¿Qué observaste? ¿Qué pregunta queda abierta?"
          className="w-full resize-y rounded-2xl border border-stone-700 bg-black/30 px-4 py-3 leading-7 text-stone-200 outline-none transition placeholder:text-stone-600 focus:border-amber-300/50 focus:ring-2 focus:ring-amber-300/10"
        />
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <button
            type="submit"
            className="rounded-xl border border-amber-300/30 px-5 py-3 font-semibold text-amber-100 transition hover:bg-amber-300/10"
          >
            Guardar notas
          </button>
          {saved && (
            <p className="text-sm text-emerald-300" role="status">
              Notas guardadas en este dispositivo.
            </p>
          )}
        </div>
      </form>
    </section>
  );
}
