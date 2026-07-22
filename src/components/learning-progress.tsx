"use client";

import Link from "next/link";
import { useSyncExternalStore } from "react";

import { academyCourse, availableLessonIds } from "@/content/academy";
import {
  curriculumLessons,
  curriculumSummary,
  findCurriculumLesson,
} from "@/content/curriculum";
import {
  getProgressSnapshot,
  getServerProgressSnapshot,
  readCompletedLessons,
  subscribeToProgress,
} from "@/lib/progress/browser-progress";

type LearningProgressProps = {
  initialCompleted?: string[];
  synchronized?: boolean;
  lastCompletedLessonId?: string;
  lastCompletedAt?: string;
};

function formatCompletionDate(value: string | undefined) {
  if (!value) return undefined;
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return undefined;
  return new Intl.DateTimeFormat("es-AR", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "America/Argentina/Buenos_Aires",
  }).format(date);
}

export function LearningProgress({
  initialCompleted = [],
  synchronized = false,
  lastCompletedLessonId,
  lastCompletedAt,
}: LearningProgressProps) {
  const snapshot = useSyncExternalStore(
    subscribeToProgress,
    getProgressSnapshot,
    getServerProgressSnapshot,
  );
  const completed = [
    ...new Set([...initialCompleted, ...readCompletedLessons(snapshot)]),
  ].filter((lessonId) =>
    availableLessonIds.includes(
      lessonId as (typeof availableLessonIds)[number],
    ),
  );
  const completedSet = new Set(completed);
  const publishedPercent = Math.round(
    (completed.length / Math.max(availableLessonIds.length, 1)) * 100,
  );
  const roadmapPercent = Math.round(
    (completed.length / Math.max(curriculumSummary.lessons, 1)) * 100,
  );

  const serverLastCompleted = findCurriculumLesson(lastCompletedLessonId);
  const fallbackLastCompleted = [...curriculumLessons]
    .reverse()
    .find((lesson) => completedSet.has(lesson.id));
  const lastCompleted = serverLastCompleted ?? fallbackLastCompleted;
  const nextLesson = curriculumLessons.find(
    (lesson) => !completedSet.has(lesson.id),
  );
  const currentStageTitle = nextLesson?.stageTitle ?? "Ruta completada";
  const completionDate = formatCompletionDate(lastCompletedAt);

  return (
    <div className="grid gap-6">
      <section className="relative overflow-hidden rounded-3xl border border-amber-300/20 bg-[radial-gradient(circle_at_top_right,rgba(251,191,36,0.14),transparent_38%),rgba(28,25,23,0.78)] p-6 sm:p-8">
        <div className="absolute right-6 top-6 size-24 rounded-full border border-amber-300/[0.08] shadow-[0_0_60px_rgba(251,191,36,0.08)]" />
        <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-300/70">
              Tu punto actual
            </p>
            <p className="mt-4 text-sm text-stone-500">
              Etapa {nextLesson?.stageOrder ?? curriculumSummary.stages} de {curriculumSummary.stages}
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-amber-50 sm:text-4xl">
              {currentStageTitle}
            </h2>
            {nextLesson && (
              <div className="mt-5 rounded-2xl border border-amber-300/15 bg-black/20 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-stone-500">
                  Tu próxima tarea
                </p>
                <p className="mt-2 text-lg font-medium text-stone-100">{nextLesson.title}</p>
                <p className="mt-2 text-sm leading-6 text-stone-400">{nextLesson.focus}</p>
                <p className="mt-3 text-xs text-stone-600">
                  {nextLesson.status === "published"
                    ? "Disponible para continuar ahora."
                    : "Título balizado; el video todavía está en preparación editorial."}
                </p>
              </div>
            )}
          </div>

          <div className="flex flex-wrap gap-3 lg:flex-col">
            {nextLesson?.status === "published" && nextLesson.href ? (
              <Link
                href={nextLesson.href}
                className="rounded-xl bg-amber-300 px-6 py-3 text-center font-semibold text-stone-950 transition hover:bg-amber-200"
              >
                Continuar ahora
              </Link>
            ) : (
              <span className="rounded-xl border border-stone-700 px-6 py-3 text-center text-sm text-stone-400">
                Próxima lección en preparación
              </span>
            )}
            <Link
              href="#mapa-curricular"
              className="rounded-xl border border-sky-300/25 px-6 py-3 text-center text-sm font-semibold text-sky-100 transition hover:border-sky-300/50 hover:bg-sky-300/10"
            >
              Ver mapa completo
            </Link>
          </div>
        </div>
      </section>

      <section className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
        <article className="luminous-card rounded-3xl border border-sky-200/10 bg-stone-900/70 p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-300/70">
            Última lección vista
          </p>
          {lastCompleted ? (
            <>
              <p className="mt-4 text-sm text-stone-500">Etapa {lastCompleted.stageOrder} · {lastCompleted.stageTitle}</p>
              <h3 className="mt-2 text-2xl font-semibold">{lastCompleted.title}</h3>
              <p className="mt-3 leading-7 text-stone-400">{lastCompleted.focus}</p>
              {completionDate && <p className="mt-4 text-xs text-stone-600">Completada el {completionDate}</p>}
              {lastCompleted.href && (
                <Link href={lastCompleted.href} className="mt-5 inline-flex text-sm font-semibold text-sky-200 hover:text-sky-100">
                  Repasar la lección →
                </Link>
              )}
            </>
          ) : (
            <>
              <h3 className="mt-4 text-2xl font-semibold">Todavía no completaste una tarea</h3>
              <p className="mt-3 leading-7 text-stone-400">
                Comenzá por la bienvenida y marcala como vista para registrar tu primer avance.
              </p>
              <Link
                href={academyCourse.lessons[0].href}
                className="mt-5 inline-flex text-sm font-semibold text-sky-200 hover:text-sky-100"
              >
                Comenzar la primera lección →
              </Link>
            </>
          )}
        </article>

        <article className="luminous-card rounded-3xl border border-amber-100/10 bg-stone-900/70 p-6 sm:p-8">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-300/70">Avance publicado</p>
              <p className="mt-2 text-sm text-stone-400">
                {completed.length} de {availableLessonIds.length} lecciones disponibles
              </p>
            </div>
            <p className="text-3xl font-semibold text-amber-200">{publishedPercent}%</p>
          </div>
          <div className="mt-5 h-2 overflow-hidden rounded-full bg-stone-800">
            <div
              className="h-full rounded-full bg-gradient-to-r from-amber-500 to-amber-200 transition-all"
              style={{ width: `${publishedPercent}%` }}
            />
          </div>

          <div className="mt-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-violet-300/70">Ruta total balizada</p>
              <p className="mt-2 text-sm text-stone-400">
                {completed.length} de {curriculumSummary.lessons} enseñanzas
              </p>
            </div>
            <p className="text-2xl font-semibold text-violet-200">{roadmapPercent}%</p>
          </div>
          <div className="mt-5 h-2 overflow-hidden rounded-full bg-stone-800">
            <div
              className="h-full rounded-full bg-gradient-to-r from-violet-600 to-violet-300 transition-all"
              style={{ width: `${roadmapPercent}%` }}
            />
          </div>

          <p className="mt-6 text-xs leading-5 text-stone-600">
            {synchronized
              ? "Progreso sincronizado con tu cuenta mediante Supabase."
              : "Progreso local disponible; activa la tabla de Supabase para sincronizarlo entre dispositivos."}
          </p>
        </article>
      </section>
    </div>
  );
}
