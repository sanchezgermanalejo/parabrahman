"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { forumCategories, type ForumCategory } from "@/content/forum";
import { createClient } from "@/lib/supabase/server";

export type ForumActionState = {
  status: "idle" | "error" | "success";
  message?: string;
};

const threadIdPattern = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
const allowedAttachments: Record<string, string> = {
  "application/pdf": "pdf",
  "text/plain": "txt",
  "image/jpeg": "jpg",
  "image/png": "png",
  "image/webp": "webp",
};

function getAuthorName(metadata: unknown) {
  if (
    metadata &&
    typeof metadata === "object" &&
    "full_name" in metadata &&
    typeof metadata.full_name === "string"
  ) {
    return metadata.full_name.trim().slice(0, 80) || "Alumno de Parabrahman";
  }
  return "Alumno de Parabrahman";
}

export async function createForumThread(
  _previousState: ForumActionState,
  formData: FormData,
): Promise<ForumActionState> {
  const title = String(formData.get("title") ?? "").trim();
  const body = String(formData.get("body") ?? "").trim();
  const category = String(formData.get("category") ?? "") as ForumCategory;

  if (title.length < 5 || title.length > 120) {
    return { status: "error", message: "El título debe tener entre 5 y 120 caracteres." };
  }
  if (body.length < 10 || body.length > 4000) {
    return { status: "error", message: "La apertura debe tener entre 10 y 4000 caracteres." };
  }
  if (!(category in forumCategories)) {
    return { status: "error", message: "Selecciona una categoría válida." };
  }

  const supabase = await createClient();
  const { data: claimsData, error: claimsError } = await supabase.auth.getClaims();
  const claims = claimsData?.claims;
  if (claimsError || !claims || typeof claims.sub !== "string") {
    return { status: "error", message: "Debes ingresar como alumno para iniciar un tema." };
  }

  const { data, error } = await supabase
    .from("forum_threads")
    .insert({
      user_id: claims.sub,
      author_name: getAuthorName(claims.user_metadata),
      title,
      body,
      category,
      status: "published",
    })
    .select("id")
    .single();

  if (error || !data) {
    return {
      status: "error",
      message:
        error?.code === "42P01"
          ? "El foro está preparado, pero falta aplicar su migración en Supabase."
          : "No pudimos crear el tema. Inténtalo nuevamente.",
    };
  }

  revalidatePath("/comunidad");
  redirect(`/comunidad/${data.id}`);
}

export async function publishForumPost(
  _previousState: ForumActionState,
  formData: FormData,
): Promise<ForumActionState> {
  const threadId = String(formData.get("threadId") ?? "");
  const body = String(formData.get("body") ?? "").trim();
  const attachmentValue = formData.get("attachment");
  const attachment = attachmentValue instanceof File ? attachmentValue : undefined;

  if (!threadIdPattern.test(threadId)) {
    return { status: "error", message: "La conversación no es válida." };
  }
  if (body.length < 1 || body.length > 3000) {
    return { status: "error", message: "El mensaje debe tener entre 1 y 3000 caracteres." };
  }

  const supabase = await createClient();
  const { data: claimsData, error: claimsError } = await supabase.auth.getClaims();
  const claims = claimsData?.claims;
  if (claimsError || !claims || typeof claims.sub !== "string") {
    return { status: "error", message: "Debes ingresar como alumno para responder." };
  }

  const { data: thread, error: threadError } = await supabase
    .from("forum_threads")
    .select("id, status")
    .eq("id", threadId)
    .single();
  if (threadError || !thread || thread.status !== "published") {
    return { status: "error", message: "La conversación no existe o está cerrada." };
  }

  let uploadedPath: string | undefined;
  let attachmentData: {
    attachment_path: string;
    attachment_name: string;
    attachment_type: string;
    attachment_size: number;
  } | undefined;

  if (attachment && attachment.size > 0) {
    const extension = allowedAttachments[attachment.type];
    if (!extension || attachment.size > 5 * 1024 * 1024) {
      return {
        status: "error",
        message: "Adjunta PDF, TXT, JPG, PNG o WebP de hasta 5 MB.",
      };
    }

    uploadedPath = `${claims.sub}/${crypto.randomUUID()}.${extension}`;
    const { error: uploadError } = await supabase.storage
      .from("forum-attachments")
      .upload(uploadedPath, attachment, { contentType: attachment.type, upsert: false });
    if (uploadError) {
      return { status: "error", message: "No pudimos subir el archivo. Revisa el formato e inténtalo nuevamente." };
    }

    attachmentData = {
      attachment_path: uploadedPath,
      attachment_name: attachment.name.slice(0, 180),
      attachment_type: attachment.type,
      attachment_size: attachment.size,
    };
  }

  const { error } = await supabase.from("forum_posts").insert({
    thread_id: threadId,
    user_id: claims.sub,
    author_name: getAuthorName(claims.user_metadata),
    body,
    status: "published",
    ...attachmentData,
  });

  if (error) {
    if (uploadedPath) {
      await supabase.storage.from("forum-attachments").remove([uploadedPath]);
    }
    return {
      status: "error",
      message:
        error.code === "42P01"
          ? "El foro está preparado, pero falta aplicar su migración en Supabase."
          : "No pudimos publicar el mensaje. Inténtalo nuevamente.",
    };
  }

  revalidatePath("/comunidad");
  revalidatePath(`/comunidad/${threadId}`);
  return { status: "success", message: "Tu mensaje ya forma parte de la conversación." };
}
