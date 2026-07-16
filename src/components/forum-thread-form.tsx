"use client";

import { useActionState } from "react";

import {
  createForumThread,
  type ForumActionState,
} from "@/app/comunidad/actions";
import { forumCategories } from "@/content/forum";

const initialState: ForumActionState = { status: "idle" };

export function ForumThreadForm() {
  const [state, formAction, pending] = useActionState(createForumThread, initialState);

  return (
    <form action={formAction} className="mt-6 grid gap-5">
      <label className="grid gap-2 text-sm text-stone-300">
        Categoría
        <select
          name="category"
          required
          defaultValue="estudio"
          className="rounded-xl border border-stone-700 bg-[#090d13] px-4 py-3 text-stone-100 outline-none focus:border-amber-300/50"
        >
          {Object.entries(forumCategories).map(([value, label]) => (
            <option key={value} value={value}>{label}</option>
          ))}
        </select>
      </label>
      <label className="grid gap-2 text-sm text-stone-300">
        Título del tema
        <input
          name="title"
          minLength={5}
          maxLength={120}
          required
          placeholder="¿Qué te gustaría conversar con la comunidad?"
          className="rounded-xl border border-stone-700 bg-black/30 px-4 py-3 text-stone-100 outline-none placeholder:text-stone-600 focus:border-amber-300/50"
        />
      </label>
      <label className="grid gap-2 text-sm text-stone-300">
        Apertura
        <textarea
          name="body"
          rows={6}
          minLength={10}
          maxLength={4000}
          required
          placeholder="Explica el contexto, tu pregunta o la reflexión que deseas compartir…"
          className="resize-y rounded-2xl border border-stone-700 bg-black/30 px-4 py-3 leading-7 text-stone-100 outline-none placeholder:text-stone-600 focus:border-amber-300/50"
        />
      </label>
      {state.message && (
        <p className="rounded-xl border border-red-300/25 bg-red-300/10 px-4 py-3 text-sm text-red-200" role="status">
          {state.message}
        </p>
      )}
      <button
        type="submit"
        disabled={pending}
        className="rounded-xl bg-amber-300 px-5 py-3 font-semibold text-stone-950 transition hover:bg-amber-200 disabled:cursor-wait disabled:opacity-60"
      >
        {pending ? "Creando tema…" : "Iniciar conversación"}
      </button>
    </form>
  );
}
