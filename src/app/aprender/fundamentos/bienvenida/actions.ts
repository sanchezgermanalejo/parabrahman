"use server";

import { revalidatePath } from "next/cache";

import { availableLessonIds } from "@/content/academy";
import { createClient } from "@/lib/supabase/server";

export type DiscussionState = {
  status: "idle" | "error" | "success";
  message?: string;
};

export async function publishDiscussion(
  _previousState: DiscussionState,
  formData: FormData,
): Promise<DiscussionState> {
  const lessonId = String(formData.get("lessonId") ?? "");
  const kind = String(formData.get("kind") ?? "");
  const rating = Number(formData.get("rating"));
  const body = String(formData.get("body") ?? "").trim();

  if (!availableLessonIds.some((id) => id === lessonId)) {
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

  revalidatePath("/aprender/fundamentos/bienvenida");
  return { status: "success", message: "Tu aporte ya es público." };
}
