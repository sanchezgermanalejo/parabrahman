import Link from "next/link";
import { redirect } from "next/navigation";

import { SiteHeader } from "@/components/site-header";
import { curriculumLessons, findCurriculumLesson } from "@/content/curriculum";
import { getCurrentStudent } from "@/lib/auth/current-student";
import { getStudentProgress } from "@/lib/progress/server-progress";
import { getStudentActivity } from "@/lib/student-activity";

import { markActivityReviewed, signOutFromAccount } from "./actions";
import { ProfileForm } from "./profile-form";

export const metadata = {
  title: "Mi perfil — Parabrahman",
  description: "Progreso, mensajes y agenda personal del alumno de Parabrahman.",
};

function formatDate(value: string) {
  return new Intl.DateTimeFormat("es-AR", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "America/Argentina/Buenos_Aires",
  }).format(new Date(value));
}

export default async function AccountPage() {
  const student = await getCurrentStudent();
  if (!student) redirect("/acceso?next=/cuenta");

  const [progress, activity] = await Promise.all([
    getStudentProgress(),
    getStudentActivity(),
  ]);
  const completed = new Set(progress.completedLessonIds);
  const nextLesson = curriculumLessons.find((lesson) => !completed.has(lesson.id));
  const lastLesson = findCurriculumLesson(progress.lastCompletedLessonId);
  const publishedTotal = curriculumLessons.filter((lesson) => lesson.status === "published").length;
  const progressPercent = Math.round(
    (progress.completedLessonIds.length / Math.max(publishedTotal, 1)) * 100,
  );

  return (
    <main className="min-h-screen bg-[#03070d] text-stone-100">
      <SiteHeader student={student} />

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-8 sm:py-14">
        <div className="flex flex-col gap-5 border-b border-stone-800 pb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-300/70">
              Mi perfil de alumno
            </p>
            <h1 className="mt-3 text-3xl font-semibold sm:text-5xl">
              Hola, {student.fullName?.split(" ")[0] ?? "estudiante"}
            </h1>
            <p className="mt-3 text-stone-400">{student.email}</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/cursos" className="rounded-xl bg-amber-300 px-5 py-3 font-semibold text-stone-950 hover:bg-amber-200">
              Continuar mi ruta
            </Link>
            <Link href="/comunidad" className="rounded-xl border border-sky-300/25 px-5 py-3 font-semibold text-sky-100 hover:bg-sky-300/10">
              Ir a la comunidad
            </Link>
          </div>
        </div>

        <section className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <article className="luminous-card rounded-3xl border border-amber-300/15 bg-stone-900/70 p-6 sm:p-8">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-300/70">Mi recorrido</p>
                <h2 className="mt-2 text-2xl font-semibold">Ruta de Aprendizaje</h2>
              </div>
              <span className="text-3xl font-semibold text-amber-200">{progressPercent}%</span>
            </div>
            <div className="mt-5 h-2 overflow-hidden rounded-full bg-stone-800">
              <div className="h-full rounded-full bg-gradient-to-r from-amber-500 to-amber-200" style={{ width: `${progressPercent}%` }} />
            </div>
            <p className="mt-3 text-sm text-stone-500">
              {progress.completedLessonIds.length} de {publishedTotal} lecciones publicadas vistas
            </p>

            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-stone-800 bg-black/20 p-5">
                <p className="text-xs uppercase tracking-[0.14em] text-stone-500">Última lección</p>
                <p className="mt-2 font-medium">{lastLesson?.title ?? "Aún no registraste una lección"}</p>
                {lastLesson?.href && <Link href={lastLesson.href} className="mt-3 inline-flex text-sm text-sky-200">Repasar →</Link>}
              </div>
              <div className="rounded-2xl border border-stone-800 bg-black/20 p-5">
                <p className="text-xs uppercase tracking-[0.14em] text-stone-500">Próximo paso</p>
                <p className="mt-2 font-medium">{nextLesson?.title ?? "Ruta completada"}</p>
                {nextLesson?.status === "published" && nextLesson.href ? (
                  <Link href={nextLesson.href} className="mt-3 inline-flex text-sm text-amber-200">Abrir lección →</Link>
                ) : (
                  <p className="mt-3 text-xs text-stone-600">Video en preparación editorial</p>
                )}
              </div>
            </div>
          </article>

          <article className="luminous-card rounded-3xl border border-sky-300/15 bg-stone-900/70 p-6 sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-300/70">Centro de actividad</p>
                <h2 className="mt-2 text-2xl font-semibold">Mensajes y respuestas</h2>
              </div>
              <span className="rounded-full bg-sky-300/10 px-3 py-1 text-sm font-semibold text-sky-200">
                {activity.pendingCount} pendientes
              </span>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-stone-800 bg-black/20 p-4">
                <p className="text-2xl font-semibold">{activity.ownVideoComments}</p>
                <p className="mt-1 text-xs text-stone-500">comentarios en videos</p>
              </div>
              <div className="rounded-2xl border border-stone-800 bg-black/20 p-4">
                <p className="text-2xl font-semibold">{activity.communityConversations}</p>
                <p className="mt-1 text-xs text-stone-500">conversaciones del foro</p>
              </div>
            </div>
            {!activity.available && (
              <p className="mt-5 rounded-xl border border-sky-300/15 bg-sky-300/5 p-4 text-sm text-sky-100/70">
                El panel está preparado. Falta aplicar la migración de actividad en Supabase para activar respuestas pendientes.
              </p>
            )}
          </article>
        </section>

        <section className="mt-6 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <article className="rounded-3xl border border-stone-800 bg-stone-900/55 p-6 sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-violet-300/70">Bandeja personal</p>
                <h2 className="mt-2 text-2xl font-semibold">Actividad reciente</h2>
              </div>
              {activity.pendingCount > 0 && (
                <form action={markActivityReviewed}>
                  <button className="rounded-xl border border-violet-300/25 px-4 py-2 text-sm text-violet-100 hover:bg-violet-300/10" type="submit">
                    Marcar todo como revisado
                  </button>
                </form>
              )}
            </div>

            <div className="mt-6 grid gap-3">
              {activity.items.length === 0 ? (
                <p className="rounded-2xl border border-dashed border-stone-700 px-5 py-8 text-center text-stone-500">
                  Todavía no hay respuestas nuevas a tus comentarios o conversaciones.
                </p>
              ) : activity.items.map((item) => (
                <Link key={item.id} href={item.href} className="rounded-2xl border border-stone-800 bg-black/20 p-5 transition hover:border-sky-300/25">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <p className="font-medium text-stone-200">{item.title}</p>
                    {item.pending && <span className="rounded-full bg-sky-300/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-sky-200">Nuevo</span>}
                  </div>
                  <p className="mt-2 line-clamp-2 text-sm leading-6 text-stone-400">{item.body}</p>
                  <p className="mt-3 text-xs text-stone-600">{item.authorName} · {formatDate(item.createdAt)}</p>
                </Link>
              ))}
            </div>
          </article>

          <div className="grid gap-6">
            <article className="rounded-3xl border border-sky-300/15 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.12),transparent_45%),rgba(28,25,23,0.72)] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-300/70">Agenda Zoom</p>
              {activity.meeting ? (
                <>
                  <h2 className="mt-3 text-xl font-semibold">{activity.meeting.title}</h2>
                  <p className="mt-2 text-sm text-stone-400">{formatDate(activity.meeting.startsAt)}</p>
                  <a href={activity.meeting.joinUrl} target="_blank" rel="noreferrer" className="mt-5 inline-flex rounded-xl bg-sky-300 px-5 py-3 font-semibold text-stone-950">Ingresar a Zoom ↗</a>
                </>
              ) : (
                <>
                  <h2 className="mt-3 text-xl font-semibold">Sin reuniones programadas</h2>
                  <p className="mt-2 text-sm leading-6 text-stone-400">Cuando se publique una fecha, aparecerá aquí como aviso personal.</p>
                  <Link href="/encuentros" className="mt-5 inline-flex text-sm font-semibold text-sky-200">Ver agenda y grabaciones →</Link>
                </>
              )}
            </article>

            <article className="rounded-3xl border border-stone-800 bg-stone-900/55 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-stone-500">Datos del perfil</p>
              <div className="mt-5"><ProfileForm defaultName={student.fullName} /></div>
            </article>
          </div>
        </section>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-stone-800 pt-6">
          <Link href="/" className="text-sm text-stone-400 hover:text-amber-200">Volver al inicio</Link>
          <form action={signOutFromAccount}>
            <button className="text-sm text-red-300/80 hover:text-red-200" type="submit">Cerrar sesión</button>
          </form>
        </div>
      </section>
    </main>
  );
}
