import Link from "next/link";

import {
  nextZoomMeeting,
  zoomRecordings,
  type ZoomMeeting,
} from "@/content/meetings";

function formatMeetingDate(startsAt: string) {
  return new Intl.DateTimeFormat("es-AR", {
    dateStyle: "full",
    timeStyle: "short",
    timeZone: "America/Argentina/Buenos_Aires",
  }).format(new Date(startsAt));
}

export function TodayMeetingCard({ compact = false }: { compact?: boolean }) {
  const meeting: ZoomMeeting | null = nextZoomMeeting;

  if (!meeting) {
    return (
      <article className="luminous-card rounded-3xl border border-sky-300/15 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.12),transparent_42%),rgba(12,18,27,0.86)] p-6 sm:p-8">
        <div className="flex items-center gap-3">
          <span className="status-pulse grid size-11 place-items-center rounded-2xl bg-sky-300/10 text-xl text-sky-200">
            ◉
          </span>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300/70">
              Próximo encuentro
            </p>
            <h3 className="mt-1 text-xl font-semibold">Agenda en preparación</h3>
          </div>
        </div>
        <p className="mt-5 max-w-2xl leading-7 text-stone-400">
          La sala está lista para recibir el enlace público, la fecha y el tema
          del próximo encuentro de Zoom.
        </p>
        {!compact && (
          <Link
            href="/encuentros"
            className="mt-6 inline-flex text-sm font-semibold text-sky-200 transition hover:text-sky-100"
          >
            Conocer el espacio de encuentros →
          </Link>
        )}
      </article>
    );
  }

  return (
    <article className="luminous-card rounded-3xl border border-sky-300/20 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.15),transparent_42%),rgba(12,18,27,0.9)] p-6 sm:p-8">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300/80">
        Próximo encuentro en vivo
      </p>
      <h3 className="mt-3 text-2xl font-semibold">{meeting.title}</h3>
      <p className="mt-3 capitalize text-sky-100/80">
        {formatMeetingDate(meeting.startsAt)} · Hora de Buenos Aires
      </p>
      <p className="mt-4 leading-7 text-stone-400">{meeting.description}</p>
      <a
        href={meeting.joinUrl}
        target="_blank"
        rel="noreferrer"
        className="mt-6 inline-flex rounded-xl bg-sky-300 px-5 py-3 font-semibold text-slate-950 transition hover:bg-sky-200"
      >
        Entrar a la sala de Zoom ↗
      </a>
    </article>
  );
}

export function ZoomRecordingGrid() {
  if (zoomRecordings.length === 0) {
    return (
      <div className="rounded-3xl border border-dashed border-stone-700 bg-stone-900/40 px-6 py-14 text-center">
        <p className="text-3xl" aria-hidden="true">
          ◫
        </p>
        <h3 className="mt-4 text-xl font-semibold">Archivo preparado</h3>
        <p className="mx-auto mt-3 max-w-xl leading-7 text-stone-400">
          Aquí aparecerán las reuniones grabadas como miniaturas, ordenadas por
          fecha y tema. Agregaremos cada encuentro cuando exista un enlace
          público verificado.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {zoomRecordings.map((recording) => (
        <article
          key={recording.id}
          className="luminous-card overflow-hidden rounded-3xl border border-sky-100/10 bg-stone-900/70"
        >
          <a
            href={recording.watchUrl}
            target="_blank"
            rel="noreferrer"
            className="group block"
          >
            <div
              className="relative grid aspect-video place-items-center bg-[radial-gradient(circle_at_top,#164e63,#0c0a09_70%)] bg-cover bg-center"
              style={
                recording.thumbnailUrl
                  ? { backgroundImage: `url(${recording.thumbnailUrl})` }
                  : undefined
              }
            >
              <span className="grid size-14 place-items-center rounded-full border border-white/30 bg-black/55 text-xl text-white transition group-hover:scale-105 group-hover:bg-sky-400 group-hover:text-slate-950">
                ▶
              </span>
            </div>
            <div className="p-5">
              <p className="text-xs uppercase tracking-[0.16em] text-sky-300/60">
                {recording.recordedAt}
                {recording.duration ? ` · ${recording.duration}` : ""}
              </p>
              <h3 className="mt-2 text-xl font-semibold text-stone-100">
                {recording.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-stone-400">
                {recording.description}
              </p>
            </div>
          </a>
        </article>
      ))}
    </div>
  );
}
