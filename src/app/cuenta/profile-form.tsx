"use client";

import { useActionState } from "react";

import { updateProfile, type ProfileState } from "./actions";

const initialState: ProfileState = { status: "idle" };

type ProfileFormProps = {
  defaultName?: string;
};

export function ProfileForm({ defaultName }: ProfileFormProps) {
  const [state, formAction, pending] = useActionState(
    updateProfile,
    initialState,
  );

  return (
    <form action={formAction} className="grid gap-5">
      <label className="grid gap-2 text-sm text-stone-300">
        Nombre y apellido
        <input
          className="rounded-xl border border-stone-700 bg-black/35 px-4 py-3 text-stone-100 outline-none transition focus:border-amber-400/60 focus:ring-2 focus:ring-amber-400/10"
          name="fullName"
          type="text"
          autoComplete="name"
          defaultValue={defaultName}
          placeholder="Germán Sánchez"
          minLength={2}
          maxLength={80}
          required
        />
      </label>

      {state.message && (
        <p
          className="rounded-xl border border-red-400/25 bg-red-400/10 px-4 py-3 text-sm text-red-200"
          role="alert"
        >
          {state.message}
        </p>
      )}

      <button
        className="rounded-xl bg-amber-300 px-5 py-3 font-semibold text-stone-950 transition hover:bg-amber-200 disabled:cursor-wait disabled:opacity-60"
        type="submit"
        disabled={pending}
      >
        {pending ? "Guardando…" : "Guardar nombre"}
      </button>
    </form>
  );
}
