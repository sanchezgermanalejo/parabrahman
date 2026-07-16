"use client";

import { useActionState } from "react";

import { updatePassword, type PasswordState } from "./actions";

const initialState: PasswordState = { status: "idle" };

export function PasswordForm() {
  const [state, formAction, pending] = useActionState(
    updatePassword,
    initialState,
  );

  return (
    <form action={formAction} className="grid gap-5">
      <label className="grid gap-2 text-sm text-stone-300">
        Nueva contraseña
        <input
          className="rounded-xl border border-stone-700 bg-black/35 px-4 py-3 text-stone-100 outline-none focus:border-amber-400/60"
          name="password"
          type="password"
          autoComplete="new-password"
          minLength={8}
          required
        />
      </label>
      <label className="grid gap-2 text-sm text-stone-300">
        Repetir contraseña
        <input
          className="rounded-xl border border-stone-700 bg-black/35 px-4 py-3 text-stone-100 outline-none focus:border-amber-400/60"
          name="confirmation"
          type="password"
          autoComplete="new-password"
          minLength={8}
          required
        />
      </label>

      {(state.passwordError || state.message) && (
        <p
          className="rounded-xl border border-red-400/25 bg-red-400/10 px-4 py-3 text-sm text-red-200"
          role="alert"
        >
          {state.passwordError ?? state.message}
        </p>
      )}

      <button
        className="rounded-xl bg-amber-300 px-5 py-3 font-semibold text-stone-950 transition hover:bg-amber-200 disabled:cursor-wait disabled:opacity-60"
        type="submit"
        disabled={pending}
      >
        {pending ? "Guardando…" : "Guardar nueva contraseña"}
      </button>
    </form>
  );
}
