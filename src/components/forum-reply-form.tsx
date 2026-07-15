"use client";

import { useActionState } from "react";

import {
  publishForumPost,
  type ForumActionState,
} from "@/app/comunidad/actions";

const initialState: ForumActionState = { status: "idle" };

export function ForumReplyForm({ threadId }: { threadId: string }) {
  const [state, formAction, pending] = useActionState(publishForumPost, initialState);

  return (
    <form action={formAction} className="grid gap-5">
      <input type="hidden" name="threadId" value={threadId} />
      <label className="grid gap-2 text-sm text-stone-300">
        Tu mensaje
        <textarea
          name="body"
          rows={5}
          minLength={1}
          maxLength={3000}
          required
          placeholder="Responde con claridad, respeto y relación con el tema…"
          className="resize-y rounded-2xl border border-stone-700 bg-black/30 px-4 py-3 leading-7 text-stone-100 outline-none placeholder:text-stone-600 focus:border-sky-300/50"
        />
      </label>
      <label className="grid gap-2 text-sm text-stone-300">
        Archivo público opcional
        <input
          type="file"
          name="attachment"
          accept=".pdf,.txt,.jpg,.jpeg,.png,.webp,application/pdf,text/plain,image/jpeg,image/png,image/webp"
          className="rounded-xl border border-dashed border-stone-700 bg-black/20 px-4 py-3 file:mr-4 file:rounded-lg file:border-0 file:bg-sky-300/15 file:px-3 file:py-2 file:text-sky-100"
        />
        <span className="text-xs leading-5 text-stone-500">
          PDF, TXT, JPG, PNG o WebP · máximo 5 MB · será visible públicamente.
        </span>
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
        className="rounded-xl bg-sky-300 px-5 py-3 font-semibold text-stone-950 transition hover:bg-sky-200 disabled:cursor-wait disabled:opacity-60"
      >
        {pending ? "Publicando…" : "Enviar al foro"}
      </button>
    </form>
  );
}
