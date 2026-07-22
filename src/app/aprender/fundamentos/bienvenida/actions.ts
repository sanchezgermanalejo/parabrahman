"use server";

import { revalidatePath } from "next/cache";

import { academyCourse, availableLessonIds } from "@/content/academy";
import { createClient } from "@/lib/supabase/server";

export type DiscussionState = {
  status: "idle" | "error" | "success";
  message?: string;
};

export type LessonProgressState = {
  status: "idle" | "viewed" | "error";
  message?: string;
};

export async function markLessonViewed(
  _previousState: LessonProgressState,
  formData: FormData,
): Promise<LessonProgressState> {
  const lessonId = String(formData.get("lessonId") ?? "");
  const lesson = academyCourse.lessons.find((item) => item.id === lessonId);

  if (!lesson || !lesson.available) {
    return { status: "error", message: "La lección no es válida." };
  }

  const supabase = await createClient();
  const { data: claimsData, error: claimsError } = await supabase.auth.getClaims();
  const userId = claimsData?.claims?.sub;

  if (claimsError || typeof userId !== "string") {
    return {
      status: "error",
      message: "Ingresa como alumno para guardar esta lección en tu perfil.",
    };
  }

  const now = new Date().toISOString();
  const { error } = await supabase.from("lesson_progress").upsert(
    {
      user_id: userId,
      lesson_id: lessonId,
      score: 1,
      max_score: 1,
      completed_at: now,
      updated_at: now,
    },
    { onConflict: "user_id,lesson_id" },
  );

  if (error) {
    return {
      status: "error",
      message:
        error.code === "42P01"
          ? "Falta activar la tabla de progreso en Supabase."
          : "No pudimos guardar el avance ahora. Inténtalo nuevamente.",
    };
  }

  revalidatePath("/cursos");
  if (lesson.href.startsWith("/")) {
    revalidatePath(lesson.href);
  }
  return {
    status: "viewed",
    message: "Lección vista y guardada en tu perfil.",
  };
}

export async function publishDiscussion(
  _previousState: DiscussionState,
  formData: FormData,
): Promise<DiscussionState> {
  const lessonId = String(formData.get("lessonId") ?? "");
  const parentId = String(formData.get("parentId") ?? "").trim();
  const body = String(formData.get("body") ?? "").trim();
  const lesson = academyCourse.lessons.find((item) => item.id === lessonId);

  if (!lesson || !availableLessonIds.some((id) => id === lessonId)) {
    return { status: "error", message: "La lección no es válida." };
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

  if (parentId) {
    const { data: parent, error: parentError } = await supabase
      .from("lesson_discussions")
      .select("id")
      .eq("id", parentId)
      .eq("lesson_id", lessonId)
      .eq("status", "published")
      .single();

    if (parentError || !parent) {
      return { status: "error", message: "El comentario al que respondes ya no está disponible." };
    }
  }

  const payload: Record<string, string | number> = {
    lesson_id: lessonId,
    user_id: claims.sub,
    author_name: authorName.slice(0, 80),
    kind: "comment",
    rating: 5,
    body,
    status: "published",
  };
  if (parentId) payload.parent_id = parentId;

  const { error } = await supabase.from("lesson_discussions").insert(payload);

  if (error) {
    return {
      status: "error",
      message:
        error.code === "42703"
          ? "Falta activar la actualización de respuestas en Supabase."
          : error.code === "42P01"
          ? "La comunidad está preparada, pero falta activar su tabla en Supabase."
          : "No pudimos publicar ahora. Inténtalo nuevamente.",
    };
  }

  if (lesson.href.startsWith("/")) {
    revalidatePath(lesson.href);
  }
  revalidatePath("/cuenta");
  return { status: "success", message: parentId ? "Tu respuesta ya es pública." : "Tu comentario ya es público." };
}
