import Link from "next/link";

import { SiteHeader } from "@/components/site-header";
import { academyCourse, learningPaths } from "@/content/academy";
import { getCurrentStudent } from "@/lib/auth/current-student";

export const metadata = {
  title: "Rutas de aprendizaje — Parabrahman",
  description: "Rutas audiovisuales de la Escuela de Vedanta Advaita.",
};

export default async function CoursesPage() {
  const student = await getCurrentStudent();

  return (
    <main className="min-h-screen bg-[#03070d] text-stone-100">
      <SiteHeader student={student} />
      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-300/70">
          Mapa de autogestión
        </p>
        <h1 className="aurora-title mt-4 text-4xl font-semibold sm:text-5xl">
          Rutas de aprendizaje
        </h1>
        <p className="mt-5 max-w-3xl text-lg leading-8 text-stone-400">
          Una estructura para avanzar con orientación sin perder libertad. Cada
          ruta combinará enseñanzas en video, preguntas de reflexión, notas y
          recursos complementarios.
        </p>

        <div className="mt-12 grid gap-5">
          {learningPaths.map((path) => {
            const available = path.status === "available";
            return (
              <article
                key={path.id}
                className="luminous-card grid gap-6 rounded-3xl border border-amber-200/10 bg-[radial-gradient(circle_at_top_right,rgba(217,160,85,0.1),transparent_40%),rgba(28,25,23,0.72)] p-7 sm:p-9 lg:grid-cols-[90px_1fr_auto] lg:items-center"
              >
                <p className="font-serif text-5xl text-amber-200/25">
                  {String(path.order).padStart(2, "0")}
                </p>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-300/60">
                    {available ? "Disponible" : "En preparación editorial"}
                  </p>
                  <h2 className="mt-2 text-2xl font-semibold">{path.title}</h2>
                  <p className="mt-3 max-w-2xl leading-7 text-stone-400">
                    {path.description}
                  </p>
                  {path.id === "fundamentos" && (
                    <p className="mt-4 text-sm text-stone-500">
                      {academyCourse.lessons.length} unidades planificadas
                    </p>
                  )}
                </div>
                {available ? (
                  <Link
                    href={path.href}
                    className="rounded-xl bg-amber-300 px-6 py-3 text-center font-semibold text-stone-950 transition hover:bg-amber-200"
                  >
                    Abrir ruta
                  </Link>
                ) : (
                  <span className="rounded-xl border border-stone-700 px-5 py-3 text-center text-sm text-stone-500">
                    Próximamente
                  </span>
                )}
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}
