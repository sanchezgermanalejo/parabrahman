"use client";

import { useActionState } from "react";

import {
  publishDiscussion,
  type DiscussionState,
} from "@/app/aprender/fundamentos/bienvenida/actions";

const initialState: DiscussionState = { status: "idle" };

export function DiscussionForm({ lessonId }: { lessonId: string }) {
  const [state, formAction, pending] = useActionState(
    publishDiscussion,
    initialState,
  );

  return (
    <form action={formAction} className="mt-6 grid gap-5">
      <input type="hidden" name="lessonId" value={lessonId} />
      <fieldset className="flex flex-wrap gap-4 text-sm text-stone-300">
        <legend className="mb-2 font-medium">Tipo de aporte</legend>
        <label className="flex items-center gap-2">
          <input type="radio" name="kind" value="comment" defaultChecked />
          Comentario
        </label>
        <label className="flex items-center gap-2">
          <input type="radio" name="kind" value="question" />
          Pregunta
        </label>
      </fieldset>

      <fieldset>
        <legend className="mb-2 text-sm font-medium text-stone-300">
          Valoración
        </legend>
        <div className="flex flex-row-reverse justify-end gap-1">
          {[5, 4, 3, 2, 1].map((star) => (
            <label key={star} className="star-choice cursor-pointer text-3xl text-stone-700 transition hover:text-amber-300">
              <input
                className="peer sr-only"
                type="radio"
                name="rating"
                value={star}
                required
                aria-label={`${star} estrellas`}
              />
              <span aria-hidden="true">★</span>
            </label>
          ))}
        </div>
      </fieldset>

      <label className="grid gap-2 text-sm text-stone-300">
        Tu aporte público
        <textarea
          name="body"
          rows={5}
          minLength={3}
          maxLength={2000}
          required
          placeholder="Comparte una reflexión o formula una pregunta sobre la lección…"
          className="resize-y rounded-2xl border border-stone-700 bg-black/30 px-4 py-3 leading-7 text-stone-100 outline-none placeholder:text-stone-600 focus:border-amber-300/50"
        />
      </label>

      {state.message && (
        <p
          className={`rounded-xl border px-4 py-3 text-sm ${
            state.status === "success"
              ? "border-emerald-300/25 bg-emerald-300/10 text-emerald-200"
              : "border-red-300/25 bg-red-300/10 text-red-200"
          }`}
          role="status"
        >
          {state.message}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="rounded-xl bg-amber-300 px-5 py-3 font-semibold text-stone-950 transition hover:bg-amber-200 disabled:cursor-wait disabled:opacity-60"
      >
        {pending ? "Publicando…" : "Publicar aporte"}
      </button>
    </form>
  );
}
