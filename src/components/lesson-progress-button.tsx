"use client";

import { useSyncExternalStore } from "react";

import {
  getProgressSnapshot,
  getServerProgressSnapshot,
  readCompletedLessons,
  setLessonCompleted,
  subscribeToProgress,
} from "@/lib/progress/browser-progress";

type LessonProgressButtonProps = {
  lessonId: string;
};

export function LessonProgressButton({ lessonId }: LessonProgressButtonProps) {
  const snapshot = useSyncExternalStore(
    subscribeToProgress,
    getProgressSnapshot,
    getServerProgressSnapshot,
  );
  const completed = readCompletedLessons(snapshot).includes(lessonId);

  return (
    <button
      type="button"
      onClick={() => setLessonCompleted(lessonId, !completed)}
      className={`w-full rounded-xl px-5 py-3 font-semibold transition sm:w-auto ${
        completed
          ? "border border-emerald-300/30 bg-emerald-300/10 text-emerald-200"
          : "bg-amber-300 text-stone-950 hover:bg-amber-200"
      }`}
    >
      {completed ? "✓ Lección completada" : "Marcar como completada"}
    </button>
  );
}
