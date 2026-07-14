import Link from "next/link";

import { DiscussionForm } from "@/components/discussion-form";
import type { LessonDiscussionResult } from "@/lib/discussions";

type LessonDiscussionProps = {
  lessonId: string;
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
  discussion,
  signedIn,
}: LessonDiscussionProps) {
  return (
    <section className="mt-10 rounded-3xl border border-sky-200/10 bg-stone-900/55 p-6 sm:p-8">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300/70">
        Comunidad pública
      </p>
      <h2 className="mt-2 text-2xl font-semibold">Comentarios y preguntas</h2>
      <p className="mt-3 max-w-3xl text-sm leading-6 text-stone-400">
        Los aportes son visibles para todos. Publica con respeto y evita datos
        personales; las contribuciones podrán moderarse cuando sea necesario.
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
          href={`/acceso?next=/aprender/fundamentos/bienvenida`}
          className="mt-6 inline-flex rounded-xl border border-amber-300/30 px-5 py-3 font-semibold text-amber-100 transition hover:bg-amber-300/10"
        >
          Ingresar para participar
        </Link>
      )}

      <div className="mt-10 grid gap-4">
        {discussion.items.length === 0 ? (
          <p className="rounded-2xl border border-dashed border-stone-700 px-5 py-8 text-center text-stone-500">
            Todavía no hay aportes publicados en esta lección.
          </p>
        ) : (
          discussion.items.map((item) => (
            <article key={item.id} className="rounded-2xl border border-stone-800 bg-black/25 p-5">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="font-medium text-stone-200">{item.authorName}</p>
                  <p className="mt-1 text-xs text-stone-500">
                    {item.kind === "question" ? "Pregunta" : "Comentario"} · {formatDate(item.createdAt)}
                  </p>
                </div>
                <p className="tracking-[0.12em] text-amber-300" aria-label={`${item.rating} de 5 estrellas`}>
                  {"★".repeat(item.rating)}
                  <span className="text-stone-700">{"★".repeat(5 - item.rating)}</span>
                </p>
              </div>
              <p className="mt-4 whitespace-pre-wrap leading-7 text-stone-300">{item.body}</p>
            </article>
          ))
        )}
      </div>
    </section>
  );
}
