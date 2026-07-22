"use server";

import { revalidatePath } from "next/cache";

import { academyCourse, availableLessonIds } from "@/content/academy";
import { createClient } from "@/lib/supabase/server";

export type DiscussionState = {
  status: "idle" | "error" | "success";
  message?: string;
};

export type QuizSubmissionResult = {
  status: "passed" | "failed" | "local" | "error";
  score: number;
  maxScore: number;
  message: string;
};

export async function submitLessonQuiz(
  lessonId: string,
  answers: Record<string, number>,
): Promise<QuizSubmissionResult> {
  const lesson = academyCourse.lessons.find((item) => item.id === lessonId);

  if (!lesson || !("quiz" in lesson)) {
    return { status: "error", score: 0, maxScore: 0, message: "La lección no es válida." };
  }

  const maxScore = lesson.quiz.questions.length;
  const score = lesson.quiz.questions.reduce(
    (total, question) => total + (answers[question.id] === question.correctOption ? 1 : 0),
    0,
  );

  if (score < lesson.quiz.passingScore) {
    return {
      status: "failed",
      score,
      maxScore,
      message: `Obtuviste ${score} de ${maxScore}. Revisa la lección y vuelve a intentarlo.`,
    };
  }

  const supabase = await createClient();
  const { data: claimsData, error: claimsError } = await supabase.auth.getClaims();
  const userId = claimsData?.claims?.sub;

  if (claimsError || typeof userId !== "string") {
    return {
      status: "local",
      score,
      maxScore,
      message: "Lección aprobada en este dispositivo. Ingresa para sincronizarla entre dispositivos.",
    };
  }

  const { error } = await supabase.from("lesson_progress").upsert(
    {
      user_id: userId,
      lesson_id: lessonId,
      score,
      max_score: maxScore,
      completed_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    },
    { onConflict: "user_id,lesson_id" },
  );

  if (error) {
    return {
      status: "local",
      score,
      maxScore,
      message:
        error.code === "42P01"
          ? "Lección aprobada localmente. Falta activar la tabla de progreso en Supabase."
          : "Lección aprobada localmente; no pudimos sincronizarla ahora.",
    };
  }

  revalidatePath("/cursos");
  if (lesson.href.startsWith("/")) {
    revalidatePath(lesson.href);
  }
  return {
    status: "passed",
    score,
    maxScore,
    message: "Lección aprobada y sincronizada con tu cuenta.",
  };
}

export async function publishDiscussion(
  _previousState: DiscussionState,
  formData: FormData,
): Promise<DiscussionState> {
  const lessonId = String(formData.get("lessonId") ?? "");
  const kind = String(formData.get("kind") ?? "");
  const rating = Number(formData.get("rating"));
  const body = String(formData.get("body") ?? "").trim();
  const lesson = academyCourse.lessons.find((item) => item.id === lessonId);

  if (!lesson || !availableLessonIds.some((id) => id === lessonId)) {
    return { status: "error", message: "La lección no es válida." };
  }
  if (kind !== "comment" && kind !== "question") {
    return { status: "error", message: "Selecciona comentario o pregunta." };
  }
  if (!Number.isInteger(rating) || rating < 1 || rating > 5) {
    return { status: "error", message: "Selecciona una valoración de 1 a 5 estrellas." };
  }
  if (body.length < 3 || body.length > 2000) {
    return { status: "error", message: "El texto debe tener entre 3 y 2000 caracteres." };
  }

  const supabase = await createClient();
  const { data: claimsData, error: claimsError } = await supabase.auth.getClaims();
  const claims = claimsData?.claims;

  if (claimsError || !claims || typeof claims.sub !== "string") {
    return { status: "error", message: "Debes ingresar como alumno para publicar." };
  }

  const metadata = claims.user_metadata;
  const authorName =
    metadata &&
    typeof metadata === "object" &&
    "full_name" in metadata &&
    typeof metadata.full_name === "string"
      ? metadata.full_name.trim()
      : "Alumno de Parabrahman";

  const { error } = await supabase.from("lesson_discussions").insert({
    lesson_id: lessonId,
    user_id: claims.sub,
    author_name: authorName.slice(0, 80),
    kind,
    rating,
    body,
    status: "published",
  });

  if (error) {
    return {
      status: "error",
      message:
        error.code === "42P01"
          ? "La comunidad está preparada, pero falta activar su tabla en Supabase."
          : "No pudimos publicar ahora. Inténtalo nuevamente.",
    };
  }

  if (lesson.href.startsWith("/")) {
    revalidatePath(lesson.href);
  }
  return { status: "success", message: "Tu aporte ya es público." };
}
