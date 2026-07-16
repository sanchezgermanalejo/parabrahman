import { redirect } from "next/navigation";

import { LearningProgress } from "@/components/learning-progress";
import { SiteHeader } from "@/components/site-header";
import { getCurrentStudent } from "@/lib/auth/current-student";
import { getStudentProgress } from "@/lib/progress/server-progress";

export const metadata = {
  title: "Mi aprendizaje — Parabrahman",
};

export default async function LearningDashboardPage() {
  const [student, progress] = await Promise.all([
    getCurrentStudent(),
    getStudentProgress(),
  ]);

  if (!student) redirect("/acceso?next=/mi-aprendizaje");

  const firstName = student.fullName?.split(" ")[0];

  return (
    <main className="min-h-screen bg-[#03070d] text-stone-100">
      <SiteHeader student={student} />
      <section className="mx-auto max-w-6xl px-5 py-14 sm:px-8 sm:py-20">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-300/70">
          Panel del alumno
        </p>
        <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">
          {firstName ? `Bienvenido, ${firstName}` : "Mi aprendizaje"}
        </h1>
        <p className="mt-5 max-w-2xl text-lg leading-8 text-stone-400">
          Aquí encontrarás tus recorridos, el avance registrado y la próxima
          enseñanza para continuar.
        </p>

        <div className="mt-12">
          <LearningProgress
            initialCompleted={progress.completedLessonIds}
            synchronized={progress.available}
            lastCompletedLessonId={progress.lastCompletedLessonId}
            lastCompletedAt={progress.lastCompletedAt}
          />
        </div>

        <p className="mt-6 text-sm leading-6 text-stone-500">
          El avance aprobado se sincroniza con tu cuenta cuando la tabla de
          progreso está activa. El navegador conserva una copia de respaldo
          durante la transición.
        </p>
      </section>
    </main>
  );
}
