import Link from "next/link";

import { ForumThreadForm } from "@/components/forum-thread-form";
import { SiteHeader } from "@/components/site-header";
import { forumCategories } from "@/content/forum";
import { getCurrentStudent } from "@/lib/auth/current-student";
import { getForumThreads } from "@/lib/forum";

export const metadata = {
  title: "Comunidad de estudiantes — Parabrahman",
  description: "Foro público de estudio, práctica y encuentros de Parabrahman.",
};

function formatDate(date: string) {
  return new Intl.DateTimeFormat("es-AR", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(new Date(date));
}

export default async function CommunityPage() {
  const [student, forum] = await Promise.all([
    getCurrentStudent(),
    getForumThreads(),
  ]);

  return (
    <main className="min-h-screen bg-[#03070d] text-stone-100">
      <SiteHeader student={student} />
      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.7fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-300/70">
              Sangha digital
            </p>
            <h1 className="aurora-title mt-4 text-4xl font-semibold sm:text-5xl">
              Comunidad de estudiantes
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-stone-400">
              Conversaciones públicas para preguntar, compartir experiencias y profundizar el estudio. Funciona como un chat pausado: conserva el contexto y permite adjuntar fuentes sin exigir que todos estén conectados al mismo tiempo.
            </p>
            <div className="mt-7 flex flex-wrap gap-3 text-xs text-stone-400">
              <span className="rounded-full border border-sky-300/20 px-3 py-1.5">Lectura pública</span>
              <span className="rounded-full border border-sky-300/20 px-3 py-1.5">Publicación con cuenta</span>
              <span className="rounded-full border border-sky-300/20 px-3 py-1.5">Adjuntos moderables</span>
            </div>
          </div>

          <aside className="luminous-card rounded-3xl border border-amber-200/10 bg-stone-900/65 p-6 sm:p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-300/70">Convivencia</p>
            <h2 className="mt-2 text-xl font-semibold">Antes de participar</h2>
            <ul className="mt-4 grid gap-3 text-sm leading-6 text-stone-400">
              <li>• Dialogar sobre ideas sin atacar personas.</li>
              <li>• No publicar teléfonos, direcciones ni datos privados.</li>
              <li>• Indicar la fuente de textos o citas compartidas.</li>
              <li>• Los archivos son públicos y podrán moderarse.</li>
            </ul>
          </aside>
        </div>

        {!forum.available && (
          <p className="mt-10 rounded-2xl border border-sky-300/15 bg-sky-300/5 px-5 py-4 text-sm text-sky-100/75">
            El módulo está listo en el código. Falta aplicar la migración del foro en Supabase para compartir conversaciones y archivos entre alumnos.
          </p>
        )}

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_0.72fr]">
          <section>
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-300/70">Conversaciones</p>
                <h2 className="mt-2 text-3xl font-semibold">Temas recientes</h2>
              </div>
              <span className="text-sm text-stone-500">{forum.threads.length} temas</span>
            </div>
            <div className="mt-7 grid gap-4">
              {forum.threads.length === 0 ? (
                <p className="rounded-3xl border border-dashed border-stone-700 px-6 py-12 text-center text-stone-500">
                  Todavía no hay conversaciones. El primer alumno puede abrir el espacio.
                </p>
              ) : (
                forum.threads.map((thread) => (
                  <Link
                    key={thread.id}
                    href={`/comunidad/${thread.id}`}
                    className="luminous-card rounded-2xl border border-stone-800 bg-stone-900/55 p-6 transition hover:border-sky-300/25"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-stone-500">
                      <span className="uppercase tracking-[0.14em] text-sky-300/65">{forumCategories[thread.category]}</span>
                      <span>{thread.replyCount} respuestas</span>
                    </div>
                    <h3 className="mt-3 text-xl font-semibold text-stone-100">{thread.title}</h3>
                    <p className="mt-3 line-clamp-2 leading-7 text-stone-400">{thread.body}</p>
                    <p className="mt-4 text-xs text-stone-500">{thread.authorName} · {formatDate(thread.updatedAt)}</p>
                  </Link>
                ))
              )}
            </div>
          </section>

          <aside className="rounded-3xl border border-amber-200/10 bg-stone-900/50 p-6 sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-300/70">Nuevo tema</p>
            <h2 className="mt-2 text-2xl font-semibold">Iniciar conversación</h2>
            {student ? (
              <ForumThreadForm />
            ) : (
              <div className="mt-6">
                <p className="text-sm leading-6 text-stone-400">Puedes leer todo libremente. Para escribir, ingresa con tu cuenta de alumno.</p>
                <Link href="/acceso?next=/comunidad" className="mt-5 inline-flex rounded-xl border border-amber-300/30 px-5 py-3 font-semibold text-amber-100 transition hover:bg-amber-300/10">
                  Ingresar para participar
                </Link>
              </div>
            )}
          </aside>
        </div>
      </section>
    </main>
  );
}
