import Link from "next/link";
import { notFound } from "next/navigation";

import { ForumReplyForm } from "@/components/forum-reply-form";
import { SiteHeader } from "@/components/site-header";
import { forumCategories } from "@/content/forum";
import { getCurrentStudent } from "@/lib/auth/current-student";
import { getForumThread } from "@/lib/forum";

function formatDate(date: string) {
  return new Intl.DateTimeFormat("es-AR", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(date));
}

function formatSize(bytes: number) {
  return bytes < 1024 * 1024
    ? `${Math.ceil(bytes / 1024)} KB`
    : `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export default async function ForumThreadPage({
  params,
}: {
  params: Promise<{ threadId: string }>;
}) {
  const { threadId } = await params;
  const [student, result] = await Promise.all([
    getCurrentStudent(),
    getForumThread(threadId),
  ]);

  if (result.available && !result.thread) notFound();

  return (
    <main className="min-h-screen bg-[#03070d] text-stone-100">
      <SiteHeader student={student} />
      <section className="mx-auto max-w-4xl px-5 py-12 sm:px-8 sm:py-16">
        <Link href="/comunidad" className="text-sm font-semibold text-sky-200 transition hover:text-sky-100">
          ← Volver a la comunidad
        </Link>

        {!result.thread ? (
          <div className="mt-10 rounded-3xl border border-sky-300/15 bg-sky-300/5 p-8 text-sky-100/75">
            La conversación estará disponible después de aplicar la migración del foro en Supabase.
          </div>
        ) : (
          <>
            <article className="mt-8 rounded-3xl border border-amber-200/10 bg-[radial-gradient(circle_at_top_right,rgba(217,160,85,0.1),transparent_42%),rgba(28,25,23,0.72)] p-7 sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-300/70">
                {forumCategories[result.thread.category]}
              </p>
              <h1 className="mt-3 text-3xl font-semibold sm:text-4xl">{result.thread.title}</h1>
              <p className="mt-4 text-sm text-stone-500">{result.thread.authorName} · {formatDate(result.thread.createdAt)}</p>
              <p className="mt-7 whitespace-pre-wrap text-lg leading-8 text-stone-300">{result.thread.body}</p>
            </article>

            <section className="mt-10">
              <div className="flex items-end justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-300/70">Chat del tema</p>
                  <h2 className="mt-2 text-2xl font-semibold">Conversación</h2>
                </div>
                <span className="text-sm text-stone-500">{result.posts.length} respuestas</span>
              </div>
              <div className="mt-6 grid gap-4">
                {result.posts.length === 0 ? (
                  <p className="rounded-2xl border border-dashed border-stone-700 px-5 py-9 text-center text-stone-500">Todavía no hay respuestas.</p>
                ) : (
                  result.posts.map((post) => (
                    <article key={post.id} className="rounded-2xl border border-stone-800 bg-stone-900/55 p-5 sm:p-6">
                      <div className="flex flex-wrap items-center justify-between gap-3">
                        <p className="font-medium text-stone-200">{post.authorName}</p>
                        <p className="text-xs text-stone-500">{formatDate(post.createdAt)}</p>
                      </div>
                      <p className="mt-4 whitespace-pre-wrap leading-7 text-stone-300">{post.body}</p>
                      {post.attachment && (
                        <a
                          href={post.attachment.url}
                          target="_blank"
                          rel="noreferrer"
                          className="mt-5 flex items-center justify-between gap-4 rounded-xl border border-sky-300/15 bg-sky-300/5 px-4 py-3 text-sm text-sky-100 transition hover:border-sky-300/35"
                        >
                          <span className="truncate">📎 {post.attachment.name}</span>
                          <span className="shrink-0 text-xs text-stone-500">{formatSize(post.attachment.size)} ↗</span>
                        </a>
                      )}
                    </article>
                  ))
                )}
              </div>
            </section>

            <section className="mt-10 rounded-3xl border border-sky-200/10 bg-stone-900/55 p-6 sm:p-8">
              <h2 className="text-2xl font-semibold">Responder</h2>
              {result.thread.closed ? (
                <p className="mt-4 text-stone-400">Este tema está cerrado para nuevas respuestas.</p>
              ) : student ? (
                <div className="mt-6"><ForumReplyForm threadId={threadId} /></div>
              ) : (
                <div className="mt-5">
                  <p className="text-stone-400">Ingresa como alumno para participar en este diálogo.</p>
                  <Link href={`/acceso?next=/comunidad/${threadId}`} className="mt-5 inline-flex rounded-xl border border-amber-300/30 px-5 py-3 font-semibold text-amber-100 transition hover:bg-amber-300/10">
                    Ingresar para responder
                  </Link>
                </div>
              )}
            </section>
          </>
        )}
      </section>
    </main>
  );
}
