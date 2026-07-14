"use client";

import { useState, useSyncExternalStore } from "react";

import {
  getProgressSnapshot,
  getServerProgressSnapshot,
  readCompletedLessons,
  setLessonCompleted,
  subscribeToProgress,
} from "@/lib/progress/browser-progress";

type QuizQuestion = {
  id: string;
  prompt: string;
  options: readonly string[];
  correctOption: number;
};

type LessonQuizProps = {
  lessonId: string;
  passingScore: number;
  questions: readonly QuizQuestion[];
};

type QuizResult = {
  score: number;
  passed: boolean;
} | null;

export function LessonQuiz({
  lessonId,
  passingScore,
  questions,
}: LessonQuizProps) {
  const [result, setResult] = useState<QuizResult>(null);
  const snapshot = useSyncExternalStore(
    subscribeToProgress,
    getProgressSnapshot,
    getServerProgressSnapshot,
  );
  const alreadyPassed = readCompletedLessons(snapshot).includes(lessonId);

  function evaluateQuiz(formData: FormData) {
    const score = questions.reduce((total, question) => {
      const answer = Number(formData.get(`question-${question.id}`));
      return total + (answer === question.correctOption ? 1 : 0);
    }, 0);
    const passed = score >= passingScore;

    if (passed) setLessonCompleted(lessonId, true);
    setResult({ score, passed });
  }

  return (
    <section className="luminous-card mt-10 rounded-3xl border border-amber-200/15 bg-[radial-gradient(circle_at_top_right,rgba(245,199,107,0.1),transparent_45%),rgba(28,25,23,0.7)] p-6 sm:p-8">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-300/70">
        Aprobación de la lección
      </p>
      <h2 className="mt-2 text-2xl font-semibold">Cuestionario de comprensión</h2>
      <p className="mt-3 text-sm leading-6 text-stone-400">
        Responde correctamente al menos {passingScore} de {questions.length} preguntas.
        La lección se aprueba únicamente al superar este cuestionario.
      </p>

      {alreadyPassed ? (
        <div className="mt-6 rounded-2xl border border-emerald-300/25 bg-emerald-300/10 px-5 py-4 text-emerald-200">
          ✓ Lección aprobada
        </div>
      ) : (
        <form action={evaluateQuiz} className="mt-7 grid gap-7">
          {questions.map((question, questionIndex) => (
            <fieldset key={question.id} className="grid gap-3">
              <legend className="font-medium leading-7 text-stone-200">
                {questionIndex + 1}. {question.prompt}
              </legend>
              {question.options.map((option, optionIndex) => (
                <label key={option} className="flex cursor-pointer items-start gap-3 rounded-xl border border-stone-800 bg-black/20 px-4 py-3 text-sm text-stone-300 transition hover:border-amber-300/25">
                  <input
                    type="radio"
                    name={`question-${question.id}`}
                    value={optionIndex}
                    required
                    className="mt-1"
                  />
                  {option}
                </label>
              ))}
            </fieldset>
          ))}

          {result && !result.passed && (
            <p className="rounded-xl border border-red-300/25 bg-red-300/10 px-4 py-3 text-sm text-red-200" role="status">
              Obtuviste {result.score} de {questions.length}. Revisa la lección y vuelve a intentarlo.
            </p>
          )}

          <button type="submit" className="rounded-xl bg-amber-300 px-5 py-3 font-semibold text-stone-950 transition hover:bg-amber-200">
            Evaluar y aprobar
          </button>
        </form>
      )}
    </section>
  );
}
