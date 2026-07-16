"use client";

import { useState, useSyncExternalStore } from "react";

import { submitLessonQuiz } from "@/app/aprender/fundamentos/bienvenida/actions";

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
  initiallyPassed?: boolean;
};

type QuizResult = {
  score: number;
  passed: boolean;
} | null;

export function LessonQuiz({
  lessonId,
  passingScore,
  questions,
  initiallyPassed = false,
}: LessonQuizProps) {
  const [result, setResult] = useState<QuizResult>(null);
  const [message, setMessage] = useState<string>();
  const [pending, setPending] = useState(false);
  const snapshot = useSyncExternalStore(
    subscribeToProgress,
    getProgressSnapshot,
    getServerProgressSnapshot,
  );
  const alreadyPassed =
    initiallyPassed || readCompletedLessons(snapshot).includes(lessonId);

  async function evaluateQuiz(formData: FormData) {
    setPending(true);
    setMessage(undefined);
    const answers = Object.fromEntries(
      questions.map((question) => [
        question.id,
        Number(formData.get(`question-${question.id}`)),
      ]),
    );
    const submission = await submitLessonQuiz(lessonId, answers);
    const passed = submission.status === "passed" || submission.status === "local";

    if (passed) setLessonCompleted(lessonId, true);
    setResult({ score: submission.score, passed });
    setMessage(submission.message);
    setPending(false);
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
          ✓ Lección aprobada{initiallyPassed ? " y sincronizada" : ""}
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

          {result && message && (
            <p className={`rounded-xl border px-4 py-3 text-sm ${result.passed ? "border-emerald-300/25 bg-emerald-300/10 text-emerald-200" : "border-red-300/25 bg-red-300/10 text-red-200"}`} role="status">
              {message}
            </p>
          )}

          <button type="submit" disabled={pending} className="rounded-xl bg-amber-300 px-5 py-3 font-semibold text-stone-950 transition hover:bg-amber-200 disabled:cursor-wait disabled:opacity-60">
            {pending ? "Evaluando…" : "Evaluar y aprobar"}
          </button>
        </form>
      )}
    </section>
  );
}
