import Image from "next/image";
import Link from "next/link";

import { LearningProgress } from "@/components/learning-progress";
import { SiteHeader } from "@/components/site-header";
import { academyCourse } from "@/content/academy";
import {
  curriculumCycles,
  curriculumLessons,
  curriculumSummary,
} from "@/content/curriculum";
import { getCurrentStudent } from "@/lib/auth/current-student";
import { getStudentProgress } from "@/lib/progress/server-progress";

export const metadata = {
  title: "Ruta de aprendizaje — Parabrahman",
  description:
    "Mapa curricular progresivo de Vedanta Advaita de Parabrahman — Escuela de Vedanta Advaita.",
};

export default async function CoursesPage() {
  const [student, progress] = await Promise.all([
    getCurrentStudent(),
    getStudentProgress(),
  ]);
  const completedLessonIds = new Set(progress.completedLessonIds);
  const lessonIndex = new Map(
    curriculumLessons.map((lesson, index) => [lesson.id, index]),
  );
  const nextLessonIndex = curriculumLessons.findIndex(
    (lesson) => !completedLessonIds.has(lesson.id),
  );
  const firstName = student?.fullName?.split(" ")[0];
  const academyLessonById = new Map<
    string,
    (typeof academyCourse.lessons)[number]
  >(
    academyCourse.lessons.map((lesson) => [lesson.id, lesson]),
  );

  function getLessonState(lessonId: string) {
    if (!student) return "public" as const;
    if (completedLessonIds.has(lessonId)) return "completed" as const;
    if (lessonIndex.get(lessonId) === nextLessonIndex) return "current" as const;
    return "locked" as const;
  }

  function getStageState(lessonIds: readonly string[]) {
    if (!student) return "public" as const;
    if (lessonIds.every((id) => completedLessonIds.has(id))) {
      return "completed" as const;
    }
    if (lessonIds.some((id) => lessonIndex.get(id) === nextLessonIndex)) {
      return "current" as const;
    }
    return "locked" as const;
  }

  return (
    <main className="min-h-screen bg-[#03070d] text-stone-100">
      <SiteHeader student={student} />

      <section className="relative overflow-hidden border-b border-amber-100/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(251,191,36,0.14),transparent_27%),radial-gradient(circle_at_82%_28%,rgba(99,102,241,0.12),transparent_30%)]" />
        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300/75">
            Mapa completo · aprendizaje progresivo
          </p>
          <h1 className="aurora-title mt-5 max-w-5xl text-4xl font-semibold leading-tight sm:text-6xl">
            Ruta de aprendizaje de Vedanta Advaita
          </h1>
          <p className="mt-7 max-w-4xl text-lg leading-8 text-stone-300">
            Un balizado académico de largo recorrido: comienza con orientación y
            fundamentos, investiga persona, mente y universo, profundiza en
            Brahman y culmina en método, textos e integración.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#mapa-curricular"
              className="rounded-full bg-amber-300 px-5 py-3 text-sm font-semibold text-stone-950 transition hover:bg-amber-200"
            >
              Explorar la ruta ↓
            </a>
            {!student && (
              <Link
                href="/acceso?next=/cursos"
                className="rounded-full border border-sky-300/25 px-5 py-3 text-sm font-semibold text-sky-100 transition hover:border-sky-300/50 hover:bg-sky-300/10"
              >
                Acceder para guardar mi avance →
              </Link>
            )}
          </div>

          <dl className="mt-12 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              [curriculumSummary.cycles, "ciclos"],
              [curriculumSummary.stages, "etapas"],
              [curriculumSummary.lessons, "videos balizados"],
              [curriculumSummary.published, "lección publicada"],
            ].map(([value, label]) => (
              <div key={label} className="rounded-2xl border border-amber-200/10 bg-black/20 p-4 backdrop-blur-sm">
                <dt className="text-xs uppercase tracking-[0.14em] text-stone-500">{label}</dt>
                <dd className="mt-2 text-3xl font-semibold text-amber-100">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {student && (
        <section className="mx-auto max-w-7xl px-5 pt-14 sm:px-8 sm:pt-16">
          <div className="mb-7">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-300/70">
              Seguimiento personal activo
            </p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              {firstName ? `${firstName}, continuá desde donde llegaste` : "Continuá desde donde llegaste"}
            </h2>
          </div>
          <LearningProgress
            initialCompleted={progress.completedLessonIds}
            synchronized={progress.available}
            lastCompletedLessonId={progress.lastCompletedLessonId}
            lastCompletedAt={progress.lastCompletedAt}
          />
        </section>
      )}

      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8">
        <div className="grid gap-5 lg:grid-cols-3">
          <article className="luminous-card rounded-3xl border border-amber-200/10 bg-stone-900/55 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-300/70">01 · Progresión</p>
            <h2 className="mt-3 text-xl font-semibold">Cada etapa prepara la siguiente</h2>
            <p className="mt-3 text-sm leading-6 text-stone-400">
              Los títulos fijan el orden editorial de los videos. Una lección podrá publicarse sin cambiar la arquitectura completa.
            </p>
          </article>
          <article className="luminous-card rounded-3xl border border-sky-200/10 bg-stone-900/55 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-300/70">02 · Una sola ruta</p>
            <h2 className="mt-3 text-xl font-semibold">El mapa incorpora tu avance</h2>
            <p className="mt-3 text-sm leading-6 text-stone-400">
              Al iniciar sesión, esta misma pantalla recuerda tu última tarea, destaca el próximo paso y señala con candados lo que aún no desbloqueaste.
            </p>
          </article>
          <article className="luminous-card rounded-3xl border border-violet-200/10 bg-stone-900/55 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-violet-300/70">03 · Rigor</p>
            <h2 className="mt-3 text-xl font-semibold">Núcleo y comparación diferenciados</h2>
            <p className="mt-3 text-sm leading-6 text-stone-400">
              El Advaita clásico guía la ruta. Los siete centros y niveles forman una especialización comparativa, no una equivalencia doctrinal automática.
            </p>
          </article>
        </div>
      </section>

      <nav className="border-y border-stone-800 bg-stone-950/70" aria-label="Ciclos de la ruta">
        <div className="mx-auto flex max-w-7xl gap-3 overflow-x-auto px-5 py-4 sm:px-8">
          {curriculumCycles.map((cycle) => (
            <a
              key={cycle.id}
              href={`#${cycle.id}`}
              className="shrink-0 rounded-full border border-stone-700 px-4 py-2 text-sm text-stone-300 transition hover:border-amber-300/40 hover:text-amber-100"
            >
              {String(cycle.order).padStart(2, "0")} · {cycle.title}
            </a>
          ))}
        </div>
      </nav>

      <section id="mapa-curricular" className="scroll-mt-24">
        {curriculumCycles.map((cycle, cycleIndex) => (
          <div
            key={cycle.id}
            id={cycle.id}
            className="scroll-mt-24 border-b border-amber-100/10 py-16 even:bg-stone-950/45 sm:py-20"
          >
            <div className="mx-auto max-w-7xl px-5 sm:px-8">
              <div className="grid gap-6 lg:grid-cols-[170px_1fr]">
                <div>
                  <p className="font-serif text-7xl text-amber-200/15">
                    {String(cycle.order).padStart(2, "0")}
                  </p>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-[0.18em] text-amber-300/65">
                    Ciclo {cycle.order}
                  </p>
                </div>
                <div>
                  <h2 className="text-3xl font-semibold sm:text-4xl">{cycle.title}</h2>
                  <p className="mt-4 max-w-3xl leading-7 text-stone-400">{cycle.description}</p>
                </div>
              </div>

              <div className="mt-10 grid gap-5">
                {cycle.stages.map((stage, stageIndex) => {
                  const stageState = getStageState(stage.lessons.map((lesson) => lesson.id));

                  return (
                    <details
                    key={stage.id}
                    open={student ? stageState === "current" : cycleIndex === 0 && stageIndex === 0}
                    className={`group overflow-hidden rounded-3xl border bg-stone-900/60 ${
                      stage.track === "comparative"
                        ? "border-violet-300/20"
                        : "border-amber-200/10"
                    } ${stageState === "locked" ? "opacity-65" : ""}`}
                  >
                    <summary className="cursor-pointer list-none p-6 sm:p-8">
                      <div className="grid gap-5 sm:grid-cols-[70px_1fr_auto] sm:items-center">
                        <p className="font-serif text-4xl text-amber-200/30">
                          {String(stage.order).padStart(2, "0")}
                        </p>
                        <div>
                          <div className="flex flex-wrap items-center gap-2">
                            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-300/65">
                              Etapa {stage.order}
                            </p>
                            {stage.track === "comparative" && (
                              <span className="rounded-full border border-violet-300/25 bg-violet-300/[0.06] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-violet-200">
                                Especialización comparativa
                              </span>
                            )}
                            {student && stageState === "completed" && (
                              <span className="rounded-full border border-emerald-300/25 bg-emerald-300/[0.08] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-emerald-200">
                                ✓ Completada
                              </span>
                            )}
                            {student && stageState === "current" && (
                              <span className="rounded-full border border-sky-300/25 bg-sky-300/[0.08] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-sky-200">
                                Etapa actual
                              </span>
                            )}
                            {student && stageState === "locked" && (
                              <span className="rounded-full border border-stone-600 bg-black/20 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-stone-500">
                                🔒 Bloqueada
                              </span>
                            )}
                          </div>
                          <h3 className="mt-2 text-2xl font-semibold">{stage.title}</h3>
                          <p className="mt-2 text-sm text-stone-500">{stage.subtitle}</p>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-stone-500">
                          <span>{stage.lessons.length} videos</span>
                          <span className="text-xl transition group-open:rotate-45" aria-hidden="true">+</span>
                        </div>
                      </div>
                    </summary>

                    <div className="border-t border-stone-800 px-6 py-7 sm:px-8 sm:py-9">
                      {stage.track === "comparative" && (
                        <div className="mb-7 rounded-2xl border border-violet-300/15 bg-violet-300/[0.04] p-5 text-sm leading-6 text-violet-100/75">
                          Este bloque integra un modelo pedagógico solicitado por Parabrahman. Debe revisarse académicamente y permanece separado del análisis de los cuatro pādas de la Māṇḍūkya Upaniṣad.
                        </div>
                      )}

                      <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
                        <div>
                          <h4 className="text-sm font-semibold uppercase tracking-[0.14em] text-stone-300">Propósito</h4>
                          <p className="mt-3 leading-7 text-stone-400">{stage.purpose}</p>

                          <h4 className="mt-7 text-sm font-semibold uppercase tracking-[0.14em] text-stone-300">Al completar la etapa</h4>
                          <ul className="mt-3 grid gap-2 text-sm leading-6 text-stone-400">
                            {stage.outcomes.map((outcome) => (
                              <li key={outcome} className="flex gap-3">
                                <span className="text-amber-300/60" aria-hidden="true">✓</span>
                                <span>{outcome}</span>
                              </li>
                            ))}
                          </ul>

                          <div className="mt-7 flex flex-wrap gap-2">
                            {stage.concepts.map((concept) => (
                              <span key={concept} className="rounded-full border border-stone-700 px-3 py-1.5 text-xs text-stone-400">
                                {concept}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="text-sm font-semibold uppercase tracking-[0.14em] text-stone-300">Balizado de videos</h4>
                          <ol className="mt-4 grid gap-3">
                            {stage.lessons.map((lesson, lessonIndex) => {
                              const lessonState = getLessonState(lesson.id);
                              const isLocked = lessonState === "locked";
                              const academyLesson = academyLessonById.get(lesson.id);
                              const youtubeId =
                                academyLesson && "video" in academyLesson
                                  ? academyLesson.video.youtubeId
                                  : null;

                              return (
                              <li key={lesson.id} className={`rounded-2xl border bg-black/20 p-4 ${isLocked ? "border-stone-900 opacity-55" : "border-stone-800"}`}>
                                <div className="grid gap-4 sm:grid-cols-[180px_minmax(0,1fr)] sm:items-start">
                                  <div className="relative aspect-video overflow-hidden rounded-xl border border-stone-700/80 bg-[radial-gradient(circle_at_50%_35%,rgba(251,191,36,0.14),transparent_50%),#080b10]">
                                    {youtubeId ? (
                                      <>
                                        <Image
                                          src={`https://i.ytimg.com/vi/${youtubeId}/hqdefault.jpg`}
                                          alt={`Miniatura del video ${lesson.title}`}
                                          fill
                                          unoptimized
                                          sizes="(max-width: 639px) calc(100vw - 74px), 180px"
                                          className="object-cover transition duration-500 hover:scale-[1.03]"
                                        />
                                        <span className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/10" />
                                        <span className="absolute left-3 top-3 grid size-8 place-items-center rounded-full border border-white/25 bg-black/65 text-xs text-white backdrop-blur-sm">
                                          {isLocked ? "🔒" : lessonState === "completed" ? "✓" : lessonIndex + 1}
                                        </span>
                                        <span className="absolute inset-0 grid place-items-center" aria-hidden="true">
                                          <span className="grid size-11 place-items-center rounded-full border border-white/25 bg-black/65 text-base text-white shadow-xl backdrop-blur-sm">
                                            ▶
                                          </span>
                                        </span>
                                      </>
                                    ) : (
                                      <div className="absolute inset-0 grid place-items-center p-4 text-center">
                                        <div>
                                          <span className="mx-auto grid size-9 place-items-center rounded-full border border-amber-200/20 text-xs text-amber-100/70">
                                            {isLocked ? "🔒" : lessonIndex + 1}
                                          </span>
                                          <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-stone-500">
                                            Video próximamente
                                          </p>
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                  <div className="min-w-0 flex-1">
                                    <div className="flex flex-wrap items-center justify-between gap-2">
                                      <p className="font-medium text-stone-200">{lesson.title}</p>
                                      <span className={`rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] ${
                                        lessonState === "completed"
                                          ? "bg-emerald-300/10 text-emerald-200"
                                          : lessonState === "current"
                                            ? "bg-sky-300/10 text-sky-200"
                                            : "bg-stone-800 text-stone-500"
                                      }`}>
                                        {lessonState === "completed"
                                          ? "Completada"
                                          : lessonState === "current"
                                            ? lesson.status === "published" ? "Disponible ahora" : "Próxima · video pendiente"
                                            : lessonState === "locked"
                                              ? "No desbloqueada"
                                              : lesson.status === "published" ? "Publicada" : "Video pendiente"}
                                      </span>
                                    </div>
                                    <p className="mt-2 text-sm leading-6 text-stone-500">{lesson.focus}</p>
                                    {lesson.status === "published" && lesson.href && !isLocked && (
                                      <Link href={lesson.href} className="mt-3 inline-flex text-sm font-medium text-amber-200 hover:text-amber-100">
                                        Abrir lección →
                                      </Link>
                                    )}
                                  </div>
                                </div>
                              </li>
                              );
                            })}
                          </ol>
                        </div>
                      </div>
                    </div>
                  </details>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </section>

      {!student && (
        <section className="mx-auto max-w-5xl px-5 py-20 text-center sm:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-300/70">Seguimiento opcional</p>
          <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">El mapa es común; el avance es tuyo</h2>
          <p className="mx-auto mt-5 max-w-2xl leading-7 text-stone-400">
            Iniciá sesión para que esta misma ruta recuerde las lecciones vistas, muestre tu próximo paso y sincronice el avance en tu perfil.
          </p>
          <Link
            href="/acceso?next=/cursos"
            className="mt-8 inline-flex rounded-xl bg-sky-300 px-6 py-3 font-semibold text-stone-950 transition hover:bg-sky-200"
          >
            Acceder para guardar mi avance
          </Link>
        </section>
      )}
    </main>
  );
}
