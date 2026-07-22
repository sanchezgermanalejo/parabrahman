import Link from "next/link";

import { DiscussionForm } from "@/components/discussion-form";
import type { LessonDiscussionResult } from "@/lib/discussions";

type LessonDiscussionProps = {
  lessonId: string;
  lessonHref: string;
  discussion: LessonDiscussionResult;
  signedIn: boolean;
};

function formatDate(date: string) {
  return new Intl.DateTimeFormat("es-AR", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(date));
}

export function LessonDiscussion({
  lessonId,
  lessonHref,
  discussion,
  signedIn,
}: LessonDiscussionProps) {
  const rootComments = discussion.items.filter((item) => !item.parentId);
  const repliesByParent = new Map<string, typeof discussion.items>();
  for (const item of discussion.items) {
    if (!item.parentId) continue;
    repliesByParent.set(item.parentId, [
      ...(repliesByParent.get(item.parentId) ?? []),
      item,
    ]);
  }

  return (
    <section id="comentarios" className="mt-10 scroll-mt-28 rounded-3xl border border-sky-200/10 bg-stone-900/55 p-6 sm:p-8">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300/70">
        Conversación pública
      </p>
      <h2 className="mt-2 text-2xl font-semibold">Comentarios del video</h2>
      <p className="mt-3 max-w-3xl text-sm leading-6 text-stone-400">
        Todos pueden leer esta conversación. Para comentar o responder debes
        ingresar como alumno. Evita datos personales y participa con respeto.
      </p>

      {!discussion.available && (
        <p className="mt-6 rounded-2xl border border-sky-300/15 bg-sky-300/5 px-5 py-4 text-sm text-sky-100/75">
          La interfaz está lista. Falta aplicar la migración segura en Supabase
          para compartir aportes entre todos los alumnos.
        </p>
      )}

      {signedIn ? (
        <DiscussionForm lessonId={lessonId} />
      ) : (
        <Link
          href={`/acceso?next=${encodeURIComponent(lessonHref)}`}
          className="mt-6 inline-flex rounded-xl border border-amber-300/30 px-5 py-3 font-semibold text-amber-100 transition hover:bg-amber-300/10"
        >
          Ingresar para participar
        </Link>
      )}

      <div className="mt-10 grid gap-4">
        {rootComments.length === 0 ? (
          <p className="rounded-2xl border border-dashed border-stone-700 px-5 py-8 text-center text-stone-500">
            Todavía no hay aportes publicados en esta lección.
          </p>
        ) : (
          rootComments.map((item) => (
            <article key={item.id} className="rounded-2xl border border-stone-800 bg-black/25 p-5">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="font-medium text-stone-200">{item.authorName}</p>
                  <p className="mt-1 text-xs text-stone-500">
                    Comentario · {formatDate(item.createdAt)}
                  </p>
                </div>
              </div>
              <p className="mt-4 whitespace-pre-wrap leading-7 text-stone-300">{item.body}</p>

              {(repliesByParent.get(item.id) ?? []).map((reply) => (
                <div key={reply.id} className="ml-4 mt-4 border-l border-sky-300/20 pl-4 sm:ml-8">
                  <div className="flex flex-wrap items-center gap-2 text-xs text-stone-500">
                    <span className="font-medium text-sky-100/80">{reply.authorName}</span>
                    <span>·</span>
                    <span>{formatDate(reply.createdAt)}</span>
                  </div>
                  <p className="mt-2 whitespace-pre-wrap leading-7 text-stone-400">{reply.body}</p>
                </div>
              ))}

              {signedIn && (
                <details className="mt-4 rounded-xl border border-stone-800 px-4 py-3">
                  <summary className="cursor-pointer text-sm font-medium text-sky-200">
                    Responder
                  </summary>
                  <DiscussionForm lessonId={lessonId} parentId={item.id} compact />
                </details>
              )}
            </article>
          ))
        )}
      </div>
    </section>
  );
}
