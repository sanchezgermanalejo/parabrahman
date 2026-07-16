"use server";

import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { hasSupabaseConfig } from "@/lib/supabase/config";
import { createClient } from "@/lib/supabase/server";

export type AuthState = {
  status: "idle" | "error" | "success";
  message?: string;
  fieldErrors?: {
    fullName?: string;
    email?: string;
    password?: string;
  };
};

function readCredentials(formData: FormData) {
  return {
    fullName: String(formData.get("fullName") ?? "")
      .trim()
      .replace(/\s+/g, " "),
    email: String(formData.get("email") ?? "")
      .trim()
      .toLowerCase(),
    password: String(formData.get("password") ?? ""),
  };
}

function readNextPath(formData: FormData) {
  const value = String(formData.get("next") ?? "");
  return value.startsWith("/") && !value.startsWith("//") ? value : "/";
}

function validateCredentials(
  fullName: string,
  email: string,
  password: string,
  signup: boolean,
) {
  const fieldErrors: AuthState["fieldErrors"] = {};

  if (signup && (fullName.length < 2 || fullName.length > 80)) {
    fieldErrors.fullName = "Ingresa un nombre de entre 2 y 80 caracteres.";
  }

  if (!/^\S+@\S+\.\S+$/.test(email)) {
    fieldErrors.email = "Ingresa un correo electrónico válido.";
  }

  if (signup && password.length < 8) {
    fieldErrors.password = "La contraseña debe tener al menos 8 caracteres.";
  } else if (!password) {
    fieldErrors.password = "Ingresa tu contraseña.";
  }

  return fieldErrors;
}

function configurationError(): AuthState {
  return {
    status: "error",
    message:
      "La conexión segura con Supabase todavía no está configurada en este equipo.",
  };
}

export async function signIn(
  _previousState: AuthState,
  formData: FormData,
): Promise<AuthState> {
  if (!hasSupabaseConfig()) return configurationError();

  const { fullName, email, password } = readCredentials(formData);
  const nextPath = readNextPath(formData);
  const fieldErrors = validateCredentials(fullName, email, password, false);

  if (Object.keys(fieldErrors).length > 0) {
    return { status: "error", fieldErrors };
  }

  const supabase = await createClient();
  const { error } = await supabase.auth.signInWithPassword({ email, password });

  if (error) {
    return {
      status: "error",
      message: "No pudimos iniciar sesión. Revisa el correo y la contraseña.",
    };
  }

  redirect(nextPath);
}

export async function signUp(
  _previousState: AuthState,
  formData: FormData,
): Promise<AuthState> {
  if (!hasSupabaseConfig()) return configurationError();

  const { fullName, email, password } = readCredentials(formData);
  const nextPath = readNextPath(formData);
  const fieldErrors = validateCredentials(fullName, email, password, true);

  if (Object.keys(fieldErrors).length > 0) {
    return { status: "error", fieldErrors };
  }

  const requestHeaders = await headers();
  const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ??
    requestHeaders.get("origin") ??
    "http://localhost:3000";
  const supabase = await createClient();
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { full_name: fullName },
      emailRedirectTo: `${siteUrl.replace(/\/$/, "")}/auth/confirm`,
    },
  });

  if (error) {
    return {
      status: "error",
      message:
        "No pudimos crear la cuenta. Revisa los datos o inténtalo nuevamente.",
    };
  }

  if (data.session) redirect(nextPath);

  return {
    status: "success",
    message:
      "Cuenta creada. Revisa tu correo y confirma la dirección para poder ingresar.",
  };
}

export async function signOut() {
  if (hasSupabaseConfig()) {
    const supabase = await createClient();
    await supabase.auth.signOut();
  }

  redirect("/");
}
