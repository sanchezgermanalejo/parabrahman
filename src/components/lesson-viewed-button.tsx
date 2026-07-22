"use client";

import Link from "next/link";
import { useActionState } from "react";

import {
  markLessonViewed,
  type LessonProgressState,
} from "@/app/aprender/fundamentos/bienvenida/actions";

type LessonViewedButtonProps = {
  lessonId: string;
  lessonHref: string;
  signedIn: boolean;
  initiallyViewed: boolean;
};

export function LessonViewedButton({
  lessonId,
  lessonHref,
  signedIn,
  initiallyViewed,
}: LessonViewedButtonProps) {
  const initialState: LessonProgressState = initiallyViewed
    ? { status: "viewed", message: "Esta lección ya está guardada en tu perfil." }
    : { status: "idle" };
  const [state, formAction, pending] = useActionState(
    markLessonViewed,
    initialState,
  );

  if (!signedIn) {
    return (
      <Link
        href={`/acceso?next=${encodeURIComponent(lessonHref)}`}
        className="inline-flex rounded-xl border border-sky-300/30 px-5 py-3 text-center font-semibold text-sky-100 transition hover:bg-sky-300/10"
      >
        Ingresar para guardar mi avance
      </Link>
    );
  }

  const viewed = state.status === "viewed";

  return (
    <form action={formAction} className="grid gap-2 sm:justify-items-start">
      <input type="hidden" name="lessonId" value={lessonId} />
      <button
        type="submit"
        disabled={pending || viewed}
        className={`rounded-xl px-5 py-3 font-semibold transition ${
          viewed
            ? "border border-emerald-300/30 bg-emerald-300/10 text-emerald-200"
            : "bg-amber-300 text-stone-950 hover:bg-amber-200"
        } disabled:cursor-default`}
      >
        {pending
          ? "Guardando…"
          : viewed
            ? "✓ Lección vista"
            : "Marcar como vista"}
      </button>
      {state.message && (
        <p className={`text-xs ${state.status === "error" ? "text-red-300" : "text-stone-500"}`}>
          {state.message}
        </p>
      )}
    </form>
  );
}
