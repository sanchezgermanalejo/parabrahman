import type { EmailOtpType } from "@supabase/supabase-js";
import { type NextRequest, NextResponse } from "next/server";

import { hasSupabaseConfig } from "@/lib/supabase/config";
import { createClient } from "@/lib/supabase/server";

const emailOtpTypes: EmailOtpType[] = [
  "signup",
  "invite",
  "magiclink",
  "recovery",
  "email_change",
  "email",
];

function isEmailOtpType(value: string | null): value is EmailOtpType {
  return Boolean(value && emailOtpTypes.includes(value as EmailOtpType));
}

export async function GET(request: NextRequest) {
  const requestedNext = request.nextUrl.searchParams.get("next");
  const nextPath =
    requestedNext?.startsWith("/") && !requestedNext.startsWith("//")
      ? requestedNext
      : "/acceso";
  const destination = new URL(nextPath, request.url);

  if (!hasSupabaseConfig()) {
    destination.searchParams.set("error", "configuracion");
    return NextResponse.redirect(destination);
  }

  const code = request.nextUrl.searchParams.get("code");
  const tokenHash = request.nextUrl.searchParams.get("token_hash");
  const type = request.nextUrl.searchParams.get("type");
  const supabase = await createClient();

  if (code) {
    const { error } = await supabase.auth.exchangeCodeForSession(code);
    if (!error) {
      if (nextPath === "/acceso") {
        destination.searchParams.set("confirmado", "1");
      }
      return NextResponse.redirect(destination);
    }
  }

  if (tokenHash && isEmailOtpType(type)) {
    const { error } = await supabase.auth.verifyOtp({
      token_hash: tokenHash,
      type,
    });
    if (!error) {
      if (nextPath === "/acceso") {
        destination.searchParams.set("confirmado", "1");
      }
      return NextResponse.redirect(destination);
    }
  }

  const errorDestination = new URL("/acceso", request.url);
  errorDestination.searchParams.set("error", "confirmacion");
  return NextResponse.redirect(errorDestination);
}
