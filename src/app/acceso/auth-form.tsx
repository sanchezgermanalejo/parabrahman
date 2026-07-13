"use client";

import { useActionState } from "react";

import {
  signIn,
  signUp,
  type AuthState,
} from "./actions";

const initialAuthState: AuthState = { status: "idle" };

type AuthFormProps = {
  mode: "signin" | "signup";
};

export function AuthForm({ mode }: AuthFormProps) {
  const isSignup = mode === "signup";
  const action = isSignup ? signUp : signIn;
  const [state, formAction, pending] = useActionState<AuthState, FormData>(
    action,
    initialAuthState,
  );

  return (
    <form action={formAction} className="flex h-full flex-col gap-5">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-300/70">
          {isSignup ? "Primera vez" : "Ya tengo cuenta"}
        </p>
        <h2 className="mt-2 text-2xl font-semibold text-stone-50">
          {isSignup ? "Crear cuenta gratuita" : "Ingresar como alumno"}
        </h2>
        <p className="mt-2 text-sm leading-6 text-stone-400">
          {isSignup
            ? "La cuenta guarda tu progreso; el contenido seguirá siendo libre."
            : "Continúa tu recorrido desde donde lo dejaste."}
        </p>
      </div>

      <label className="grid gap-2 text-sm text-stone-300">
        Correo electrónico
        <input
          className="rounded-xl border border-stone-700 bg-black/35 px-4 py-3 text-stone-100 outline-none transition placeholder:text-stone-600 focus:border-amber-400/60 focus:ring-2 focus:ring-amber-400/10"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="tu@correo.com"
          required
          aria-invalid={Boolean(state.fieldErrors?.email)}
        />
        {state.fieldErrors?.email && (
          <span className="text-sm text-red-300">{state.fieldErrors.email}</span>
        )}
      </label>

      <label className="grid gap-2 text-sm text-stone-300">
        Contraseña
        <input
          className="rounded-xl border border-stone-700 bg-black/35 px-4 py-3 text-stone-100 outline-none transition placeholder:text-stone-600 focus:border-amber-400/60 focus:ring-2 focus:ring-amber-400/10"
          name="password"
          type="password"
          autoComplete={isSignup ? "new-password" : "current-password"}
          minLength={isSignup ? 8 : undefined}
          required
          aria-invalid={Boolean(state.fieldErrors?.password)}
        />
        {state.fieldErrors?.password && (
          <span className="text-sm text-red-300">
            {state.fieldErrors.password}
          </span>
        )}
      </label>

      {state.message && (
        <p
          className={`rounded-xl border px-4 py-3 text-sm leading-6 ${
            state.status === "success"
              ? "border-emerald-400/25 bg-emerald-400/10 text-emerald-200"
              : "border-red-400/25 bg-red-400/10 text-red-200"
          }`}
          role="status"
        >
          {state.message}
        </p>
      )}

      <button
        className="mt-auto rounded-xl bg-amber-300 px-5 py-3 font-semibold text-stone-950 transition hover:bg-amber-200 disabled:cursor-wait disabled:opacity-60"
        type="submit"
        disabled={pending}
      >
        {pending
          ? "Procesando…"
          : isSignup
            ? "Crear cuenta"
            : "Ingresar"}
      </button>
    </form>
  );
}
