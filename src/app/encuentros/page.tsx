import { SiteHeader } from "@/components/site-header";
import { TodayMeetingCard, ZoomRecordingGrid } from "@/components/zoom-library";
import { getCurrentStudent } from "@/lib/auth/current-student";

export const metadata = {
  title: "Zoom y encuentros — Parabrahman",
  description:
    "Reuniones en vivo y archivo de conversaciones de Parabrahman.",
};

export default async function MeetingsPage() {
  const student = await getCurrentStudent();

  return (
    <main className="min-h-screen bg-[#03070d] text-stone-100">
      <SiteHeader student={student} />
      <section className="mx-auto max-w-7xl px-5 py-14 sm:px-8 sm:py-20">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-300/70">
              Personas y conversación
            </p>
            <h1 className="aurora-title mt-4 text-4xl font-semibold sm:text-5xl">
              Zoom y encuentros
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-stone-400">
              Un espacio para participar en reuniones en vivo y volver a mirar
              conversaciones anteriores según el tema que quieras explorar.
            </p>
          </div>
          <TodayMeetingCard compact />
        </div>

        <section className="mt-20">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-300/70">
            Reuniones grabadas
          </p>
          <h2 className="mt-3 text-3xl font-semibold">
            Archivo de encuentros
          </h2>
          <p className="mt-4 max-w-2xl leading-7 text-stone-400">
            Cada miniatura abrirá la grabación correspondiente. El archivo se
            mantendrá separado de las enseñanzas unipersonales de YouTube.
          </p>
          <div className="mt-9">
            <ZoomRecordingGrid />
          </div>
        </section>
      </section>
    </main>
  );
}
