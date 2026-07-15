import Image from "next/image";
import Link from "next/link";

import hero from "../../public/brand/parabrahman-hero.png";
import { SiteHeader } from "@/components/site-header";
import { TodayMeetingCard } from "@/components/zoom-library";
import { academyCourse, youtubeChannel } from "@/content/academy";
import { getCurrentStudent } from "@/lib/auth/current-student";

const principles = [
  {
    title: "Enseñanza audiovisual",
    text: "El video es el punto de partida; cada recorrido aporta orden, contexto y continuidad.",
  },
  {
    title: "Acceso verdaderamente libre",
    text: "Las enseñanzas esenciales permanecen gratuitas, con o sin una cuenta de alumno.",
  },
  {
    title: "Aprendizaje a tu ritmo",
    text: "La cuenta permite construir un recorrido personal sin convertirlo en una barrera de entrada.",
  },
];

export default async function Home() {
  const student = await getCurrentStudent();

  return (
    <main className="min-h-screen bg-[#03070d] text-stone-100">
      <SiteHeader student={student} />

      <section className="relative isolate overflow-hidden border-b border-amber-100/10">
        <Image
          src={hero}
          alt="Paisaje institucional de Parabrahman con el lema Tat Tvam Asi"
          fill
          className="-z-20 object-cover object-center opacity-55"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(3,7,13,0.98)_0%,rgba(3,7,13,0.82)_48%,rgba(3,7,13,0.28)_100%),linear-gradient(0deg,#03070d_0%,transparent_45%)]" />
        <div className="mx-auto flex min-h-[640px] max-w-7xl items-center px-5 py-20 sm:px-8 lg:min-h-[700px]">
          <div className="enter-rise max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300/80">
              Escuela online de acceso libre
            </p>
            <h1 className="aurora-title mt-5 text-5xl font-semibold leading-[1.03] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
              Ver, comprender,
              <span className="block">profundizar.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-stone-300 sm:text-xl">
              Una escuela de Vedanta Advaita centrada en las enseñanzas en video
              de Parabrahman. Contenido gratuito, organizado en recorridos claros
              para acompañar tu estudio.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/aprender/fundamentos/bienvenida"
                className="rounded-xl bg-amber-300 px-6 py-3.5 text-center font-semibold text-stone-950 transition hover:bg-amber-200"
              >
                Comenzar a estudiar
              </Link>
              <a
                href={youtubeChannel.url}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-stone-500/50 bg-black/25 px-6 py-3.5 text-center font-semibold text-stone-100 backdrop-blur transition hover:border-amber-300/50 hover:text-amber-100"
              >
                Visitar el canal oficial ↗
              </a>
            </div>
            <p className="mt-5 text-sm text-stone-400">
              Sin pago obligatorio · Puedes explorar antes de crear una cuenta
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pt-16 sm:px-8 sm:pt-20">
        <div className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-300/70">
              Encuentros en comunidad
            </p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              La sala de Zoom de Parabrahman
            </h2>
          </div>
          <Link
            href="/encuentros"
            className="text-sm font-semibold text-sky-200 transition hover:text-sky-100"
          >
            Ver reuniones y grabaciones →
          </Link>
        </div>
        <TodayMeetingCard />
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-300/70">
              Primer recorrido
            </p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              {academyCourse.title}
            </h2>
            <p className="mt-4 max-w-2xl leading-7 text-stone-400">
              {academyCourse.description}
            </p>
          </div>
          <Link
            href="/cursos"
            className="text-sm font-semibold text-amber-200 transition hover:text-amber-100"
          >
            Ver el recorrido completo →
          </Link>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {academyCourse.lessons.map((lesson) => (
            <article
              key={lesson.id}
              className="luminous-card flex min-h-64 flex-col rounded-3xl border border-amber-100/10 bg-[linear-gradient(145deg,rgba(41,37,36,0.8),rgba(12,10,9,0.8))] p-6"
            >
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.16em] text-stone-500">
                <span>Lección {lesson.order}</span>
                <span>{lesson.duration}</span>
              </div>
              <h3 className="mt-7 text-2xl font-semibold">{lesson.title}</h3>
              <p className="mt-3 leading-7 text-stone-400">
                {lesson.description}
              </p>
              {lesson.available ? (
                <Link
                  href={lesson.href}
                  className="mt-auto pt-7 font-semibold text-amber-200"
                >
                  Ver lección →
                </Link>
              ) : (
                <p className="mt-auto pt-7 text-sm text-stone-500">
                  En preparación editorial
                </p>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-amber-100/10 bg-stone-950/70">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-300/70">
              Nuestro compromiso
            </p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              Profundidad sin barreras.
            </h2>
          </div>
          <div className="grid gap-7 sm:grid-cols-3">
            {principles.map((principle) => (
              <article
                key={principle.title}
                className="luminous-card rounded-2xl border border-transparent p-4"
              >
                <h3 className="font-semibold text-amber-100">
                  {principle.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-stone-400">
                  {principle.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <article className="luminous-card rounded-3xl border border-amber-200/10 bg-[radial-gradient(circle_at_top_right,rgba(251,191,36,0.12),transparent_40%),rgba(28,25,23,0.72)] p-8 sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-300/70">Contexto histórico y tradicional</p>
            <h2 className="mt-3 text-3xl font-semibold">Del Ṛgveda al Vedanta contemporáneo</h2>
            <p className="mt-4 max-w-xl leading-7 text-stone-400">Explora la relación entre Sanātana Dharma, los Vedas, las Upaniṣads, los maestros, la literatura y las regiones de India que sostuvieron esta tradición.</p>
            <Link href="/tradicion" className="mt-7 inline-flex rounded-xl bg-amber-300 px-5 py-3 font-semibold text-stone-950 transition hover:bg-amber-200">
              Abrir Tradición e historia
            </Link>
          </article>
          <article className="luminous-card rounded-3xl border border-sky-200/10 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.12),transparent_40%),rgba(28,25,23,0.72)] p-8 sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-300/70">Sangha digital</p>
            <h2 className="mt-3 text-3xl font-semibold">Foro de estudiantes</h2>
            <p className="mt-4 max-w-xl leading-7 text-stone-400">Inicia temas, conversa con otros alumnos y comparte documentos o imágenes públicas dentro de un espacio organizado y moderable.</p>
            <Link href="/comunidad" className="mt-7 inline-flex rounded-xl bg-sky-300 px-5 py-3 font-semibold text-stone-950 transition hover:bg-sky-200">
              Entrar a la comunidad
            </Link>
          </article>
        </div>
      </section>

      <footer className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-10 text-sm text-stone-500 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>Parabrahman — Escuela de Vedanta Advaita</p>
        <p>Contenido libre · Sostenimiento voluntario</p>
      </footer>
    </main>
  );
}
