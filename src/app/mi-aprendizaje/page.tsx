import { redirect } from "next/navigation";

import { LearningProgress } from "@/components/learning-progress";
import { SiteHeader } from "@/components/site-header";
import { getCurrentStudent } from "@/lib/auth/current-student";

export const metadata = {
  title: "Mi aprendizaje — Parabrahman",
};

export default async function LearningDashboardPage() {
  const student = await getCurrentStudent();

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
          <LearningProgress />
        </div>

        <p className="mt-6 text-sm leading-6 text-stone-500">
          Durante esta primera etapa el avance se conserva en este navegador.
          La sincronización entre dispositivos se añadirá con la tabla de
          progreso de Supabase en el siguiente incremento.
        </p>
      </section>
    </main>
  );
}
