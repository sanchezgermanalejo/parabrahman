"use client";

import { useActionState } from "react";

import { requestPasswordReset, type RecoveryState } from "./actions";

const initialState: RecoveryState = { status: "idle" };

export function RecoveryForm() {
  const [state, formAction, pending] = useActionState(
    requestPasswordReset,
    initialState,
  );

  return (
    <form action={formAction} className="grid gap-5">
      <label className="grid gap-2 text-sm text-stone-300">
        Correo electrónico
        <input
          className="rounded-xl border border-stone-700 bg-black/35 px-4 py-3 text-stone-100 outline-none transition placeholder:text-stone-600 focus:border-amber-400/60 focus:ring-2 focus:ring-amber-400/10"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="tu@correo.com"
          required
          aria-invalid={Boolean(state.emailError)}
        />
        {state.emailError && (
          <span className="text-sm text-red-300">{state.emailError}</span>
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
        className="rounded-xl bg-amber-300 px-5 py-3 font-semibold text-stone-950 transition hover:bg-amber-200 disabled:cursor-wait disabled:opacity-60"
        type="submit"
        disabled={pending}
      >
        {pending ? "Enviando…" : "Enviar enlace seguro"}
      </button>
    </form>
  );
}
