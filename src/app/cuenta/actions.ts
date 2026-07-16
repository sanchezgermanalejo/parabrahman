"use server";

import { redirect } from "next/navigation";

import { createClient } from "@/lib/supabase/server";

export type ProfileState = {
  status: "idle" | "error";
  message?: string;
};

export async function updateProfile(
  _previousState: ProfileState,
  formData: FormData,
): Promise<ProfileState> {
  const fullName = String(formData.get("fullName") ?? "")
    .trim()
    .replace(/\s+/g, " ");

  if (fullName.length < 2 || fullName.length > 80) {
    return {
      status: "error",
      message: "El nombre debe tener entre 2 y 80 caracteres.",
    };
  }

  const supabase = await createClient();
  const { data: claimsData, error: claimsError } =
    await supabase.auth.getClaims();

  if (claimsError || !claimsData?.claims) {
    return {
      status: "error",
      message: "La sesión venció. Vuelve a ingresar antes de guardar.",
    };
  }

  const { error } = await supabase.auth.updateUser({
    data: { full_name: fullName },
  });

  if (error) {
    return {
      status: "error",
      message: "No pudimos guardar el nombre. Inténtalo nuevamente.",
    };
  }

  await supabase.auth.refreshSession();
  redirect("/");
}

export async function signOutFromAccount() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect("/");
}
