import Link from "next/link";

import { LessonDiscussion } from "@/components/lesson-discussion";
import { LessonNotes } from "@/components/lesson-notes";
import { LessonQuiz } from "@/components/lesson-quiz";
import { SiteHeader } from "@/components/site-header";
import { academyCourse, youtubeChannel } from "@/content/academy";
import { getCurrentStudent } from "@/lib/auth/current-student";
import { getLessonDiscussions } from "@/lib/discussions";
import { getStudentProgress } from "@/lib/progress/server-progress";

export const metadata = {
  title: "Bienvenida al recorrido — Parabrahman",
  description: "Primera aula audiovisual de Parabrahman.",
};

export default async function WelcomeLessonPage() {
  const lesson = academyCourse.lessons[0];
  const [student, discussion, progress] = await Promise.all([
    getCurrentStudent(),
    getLessonDiscussions(lesson.id),
    getStudentProgress(),
  ]);

  return (
    <main className="min-h-screen bg-[#03070d] text-stone-100">
      <SiteHeader student={student} />

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-8 sm:py-12">
        <nav className="text-sm text-stone-500" aria-label="Ruta de navegación">
          <Link href="/cursos" className="transition hover:text-amber-200">
            Recorridos
          </Link>
          <span className="mx-2">/</span>
          <span>{academyCourse.title}</span>
        </nav>

        <div className="mt-6 grid gap-8 lg:grid-cols-[minmax(0,1fr)_340px]">
          <article>
            <div className="video-frame aspect-video overflow-hidden rounded-2xl border border-amber-100/15 bg-black shadow-2xl shadow-black/40">
              <iframe
                className="h-full w-full"
                src={lesson.video.embedUrl}
                title={`${lesson.title} — Parabrahman`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>

            <div className="py-8">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-300/70">
                Lección {lesson.order} · {lesson.duration}
              </p>
              <h1 className="mt-3 text-3xl font-semibold sm:text-4xl">
                {lesson.title}
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-stone-400">
                Esta primera aula presenta el modelo de estudio: mirar la
                enseñanza en el canal oficial, registrar el avance y continuar
                luego dentro de un recorrido académico ordenado.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  href={lesson.video.watchUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-amber-300/35 bg-amber-300/10 px-5 py-3 text-center font-semibold text-amber-100 transition hover:border-amber-300/60 hover:bg-amber-300/15"
                >
                  Ver este video en YouTube ↗
                </a>
                <a
                  href={youtubeChannel.url}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-xl border border-stone-700 px-5 py-3 text-center font-semibold text-stone-300 transition hover:border-amber-300/40 hover:text-amber-100"
                >
                  Abrir canal en YouTube ↗
                </a>
              </div>

              <aside className="mt-8 rounded-2xl border border-sky-300/15 bg-sky-300/5 p-5 text-sm leading-6 text-stone-400">
                <strong className="text-stone-200">Primera unidad audiovisual:</strong>{" "}
                esta lección ya está vinculada a su video específico del canal
                oficial. El reproductor utiliza el modo de privacidad mejorada
                de YouTube y conserva el formato académico de la ruta.
              </aside>

              <LessonNotes lessonId={lesson.id} />

              <LessonQuiz
                lessonId={lesson.id}
                passingScore={lesson.quiz.passingScore}
                questions={lesson.quiz.questions}
                initiallyPassed={progress.completedLessonIds.includes(lesson.id)}
              />

              <LessonDiscussion
                lessonId={lesson.id}
                discussion={discussion}
                signedIn={Boolean(student)}
              />
            </div>
          </article>

          <aside className="luminous-card h-fit rounded-3xl border border-amber-100/10 bg-stone-900/70 p-5 lg:sticky lg:top-28">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-300/70">
              Contenido del recorrido
            </p>
            <div className="mt-5 grid gap-3">
              {academyCourse.lessons.map((item) => (
                <div
                  key={item.id}
                  className={`rounded-2xl border p-4 ${
                    item.id === lesson.id
                      ? "border-amber-300/30 bg-amber-300/10"
                      : "border-stone-800 bg-black/20"
                  }`}
                >
                  <p className="text-xs text-stone-500">
                    Lección {item.order}
                  </p>
                  <p className="mt-1 font-medium text-stone-200">
                    {item.title}
                  </p>
                  {!item.available && (
                    <p className="mt-2 text-xs text-stone-600">Próximamente</p>
                  )}
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
