"use server";

import { redirect } from "next/navigation";

import { hasSupabaseConfig } from "@/lib/supabase/config";
import { createClient } from "@/lib/supabase/server";

export type PasswordState = {
  status: "idle" | "error";
  message?: string;
  passwordError?: string;
};

export async function updatePassword(
  _previousState: PasswordState,
  formData: FormData,
): Promise<PasswordState> {
  if (!hasSupabaseConfig()) {
    return { status: "error", message: "Supabase no está configurado." };
  }

  const password = String(formData.get("password") ?? "");
  const confirmation = String(formData.get("confirmation") ?? "");

  if (password.length < 8) {
    return {
      status: "error",
      passwordError: "La contraseña debe tener al menos 8 caracteres.",
    };
  }

  if (password !== confirmation) {
    return {
      status: "error",
      passwordError: "Las contraseñas no coinciden.",
    };
  }

  const supabase = await createClient();
  const { error } = await supabase.auth.updateUser({ password });

  if (error) {
    return {
      status: "error",
      message:
        "El enlace no es válido o venció. Solicita una nueva recuperación.",
    };
  }

  redirect("/acceso?contrasena=actualizada");
}
