"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";

import { academyCourse, availableLessonIds } from "@/content/academy";
import {
  getProgressSnapshot,
  getServerProgressSnapshot,
  readCompletedLessons,
  subscribeToProgress,
} from "@/lib/progress/browser-progress";

export function LearningProgress({
  initialCompleted = [],
  synchronized = false,
}: {
  initialCompleted?: string[];
  synchronized?: boolean;
}) {
  const snapshot = useSyncExternalStore(
    subscribeToProgress,
    getProgressSnapshot,
    getServerProgressSnapshot,
  );
  const completed = [...new Set([...initialCompleted, ...readCompletedLessons(snapshot)])].filter(
    (lessonId) =>
      availableLessonIds.includes(
        lessonId as (typeof availableLessonIds)[number],
      ),
  );
  const percent = Math.round(
    (completed.length / Math.max(availableLessonIds.length, 1)) * 100,
  );
  const firstLesson = academyCourse.lessons[0];

  return (
    <section className="luminous-card rounded-3xl border border-amber-100/10 bg-stone-900/70 p-6 sm:p-8">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-300/70">
            Recorrido activo
          </p>
          <h2 className="mt-2 text-2xl font-semibold">{academyCourse.title}</h2>
          <p className="mt-2 text-sm text-stone-400">
            {completed.length} de {availableLessonIds.length} lecciones disponibles
          </p>
        </div>
        <p className="text-3xl font-semibold text-amber-200">{percent}%</p>
      </div>

      <div className="mt-6 h-2 overflow-hidden rounded-full bg-stone-800">
        <div
          className="h-full rounded-full bg-gradient-to-r from-amber-500 to-amber-200 transition-all"
          style={{ width: `${percent}%` }}
        />
      </div>

      <p className="mt-4 text-xs text-stone-500">
        {synchronized
          ? "Progreso sincronizado con tu cuenta."
          : "Progreso local disponible; activa la tabla de Supabase para sincronizarlo."}
      </p>

      <Link
        href={firstLesson.href}
        className="mt-7 inline-flex rounded-xl bg-amber-300 px-5 py-3 font-semibold text-stone-950 transition hover:bg-amber-200"
      >
        {completed.includes(firstLesson.id) ? "Volver a la lección" : "Comenzar ahora"}
      </Link>
    </section>
  );
}
