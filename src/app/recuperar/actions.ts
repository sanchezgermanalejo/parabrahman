"use server";

import { headers } from "next/headers";

import { hasSupabaseConfig } from "@/lib/supabase/config";
import { createClient } from "@/lib/supabase/server";

export type RecoveryState = {
  status: "idle" | "error" | "success";
  message?: string;
  emailError?: string;
};

export async function requestPasswordReset(
  _previousState: RecoveryState,
  formData: FormData,
): Promise<RecoveryState> {
  if (!hasSupabaseConfig()) {
    return {
      status: "error",
      message: "Supabase todavía no está configurado en este equipo.",
    };
  }

  const email = String(formData.get("email") ?? "")
    .trim()
    .toLowerCase();

  if (!/^\S+@\S+\.\S+$/.test(email)) {
    return {
      status: "error",
      emailError: "Ingresa un correo electrónico válido.",
    };
  }

  const requestHeaders = await headers();
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ??
    requestHeaders.get("origin") ??
    "http://localhost:3000";
  const supabase = await createClient();
  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: `${siteUrl.replace(/\/$/, "")}/auth/confirm?next=/actualizar-contrasena`,
  });

  if (error) {
    return {
      status: "error",
      message:
        "No pudimos procesar la solicitud. Inténtalo nuevamente en unos minutos.",
    };
  }

  return {
    status: "success",
    message:
      "Si existe una cuenta con ese correo, recibirás un enlace para cambiar la contraseña.",
  };
}
