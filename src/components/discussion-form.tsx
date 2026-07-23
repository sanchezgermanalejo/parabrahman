"use client";

import { useActionState } from "react";

import {
  publishDiscussion,
  type DiscussionState,
} from "@/app/aprender/fundamentos/bienvenida/actions";

const initialState: DiscussionState = { status: "idle" };

type DiscussionFormProps = {
  lessonId: string;
  parentId?: string;
  compact?: boolean;
};

export function DiscussionForm({
  lessonId,
  parentId,
  compact = false,
}: DiscussionFormProps) {
  const [state, formAction, pending] = useActionState(
    publishDiscussion,
    initialState,
  );

  return (
    <form action={formAction} className={`${compact ? "mt-4" : "mt-6"} grid gap-4`}>
      <input type="hidden" name="lessonId" value={lessonId} />
      {parentId && <input type="hidden" name="parentId" value={parentId} />}

      <label className="grid gap-2 text-sm text-stone-300">
        {parentId ? "Tu respuesta pública" : "Tu comentario público"}
        <textarea
          name="body"
          rows={compact ? 3 : 5}
          minLength={3}
          maxLength={2000}
          required
          placeholder={parentId ? "Escribe una respuesta respetuosa…" : "Comparte una reflexión sobre el video…"}
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
        {pending ? "Publicando…" : parentId ? "Publicar respuesta" : "Publicar comentario"}
      </button>
    </form>
  );
}
