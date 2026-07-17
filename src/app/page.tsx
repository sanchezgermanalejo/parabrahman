import Image from "next/image";
import Link from "next/link";

import hero from "../../public/brand/parabrahman-hero.png";
import { SiteHeader } from "@/components/site-header";
import { TodayMeetingCard } from "@/components/zoom-library";
import { academyCourse, youtubeChannel } from "@/content/academy";
import { curriculumSummary } from "@/content/curriculum";
import { getCurrentStudent } from "@/lib/auth/current-student";

const principles = [
  {
    number: "01",
    title: "Enseñanza audiovisual",
    text: "El video es el punto de partida; cada recorrido aporta orden, contexto y continuidad.",
  },
  {
    number: "02",
    title: "Acceso verdaderamente libre",
    text: "Las enseñanzas esenciales permanecen gratuitas, con o sin una cuenta de alumno.",
  },
  {
    number: "03",
    title: "Aprendizaje a tu ritmo",
    text: "La cuenta permite construir un recorrido personal sin convertirlo en una barrera de entrada.",
  },
] as const;

const journeySignals = [
  { value: curriculumSummary.cycles, label: "ciclos progresivos" },
  { value: curriculumSummary.stages, label: "etapas de estudio" },
  { value: curriculumSummary.lessons, label: "videos balizados" },
  { value: "Libre", label: "acceso al conocimiento" },
] as const;

const portals = [
  {
    eyebrow: "Arquitectura conceptual",
    title: "Metafísica de las siete dimensiones",
    text: "Explora un mapa geométrico que relaciona dimensiones, kośas, guṇas, elementos, lokas, tattvas y chakras.",
    href: "/metafisica",
    action: "Abrir Metafísica",
    accent: "violet",
  },
  {
    eyebrow: "Contexto histórico y tradicional",
    title: "Del Ṛgveda al Vedanta contemporáneo",
    text: "Explora Vedas, Upaniṣads, maestros, literatura y regiones de India dentro de una cronología verificable.",
    href: "/tradicion",
    action: "Abrir Tradición",
    accent: "amber",
  },
  {
    eyebrow: "Sangha digital",
    title: "Foro de estudiantes",
    text: "Inicia temas, conversa con otros alumnos y comparte materiales dentro de un espacio organizado.",
    href: "/comunidad",
    action: "Entrar a la comunidad",
    accent: "sky",
  },
  {
    eyebrow: "संस्कृतम् · saṃskṛtam",
    title: "Sánscrito para Vedanta",
    text: "Aprende sonidos, devanāgarī, IAST, vocabulario y lectura guiada para acercarte a las fuentes.",
    href: "/sanscrito",
    action: "Comenzar sánscrito",
    accent: "emerald",
  },
] as const;

export default async function Home() {
  const student = await getCurrentStudent();

  return (
    <main className="min-h-screen bg-[#03070d] text-stone-100">
      <SiteHeader student={student} />

      <section className="home-hero relative isolate overflow-hidden border-b border-amber-100/10">
        <Image
          src={hero}
          alt="Paisaje institucional de Parabrahman con el lema Tat Tvam Asi"
          fill
          className="home-hero-image -z-30 object-cover object-center"
          sizes="100vw"
          priority
        />
        <div className="home-hero-vignette absolute inset-0 -z-20" />
        <div className="home-hero-grid absolute inset-0 -z-10" aria-hidden="true" />
        <div className="hero-orbit hero-orbit-gold" aria-hidden="true" />
        <div className="hero-orbit hero-orbit-blue" aria-hidden="true" />

        <div className="mx-auto flex min-h-[calc(100svh-72px)] max-w-7xl items-end px-5 pb-16 pt-28 sm:px-8 sm:pb-20 lg:min-h-[790px] lg:pb-24">
          <div className="grid w-full items-end gap-6 lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-10">
            <div className="hero-glass enter-rise max-w-3xl rounded-[2rem] p-6 sm:p-8 lg:p-10">
              <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-amber-200 sm:text-sm">
                <span className="status-pulse size-2 rounded-full bg-emerald-300 text-emerald-300" />
                Escuela audiovisual de acceso libre
              </p>
              <h1 className="aurora-title mt-5 text-4xl font-semibold leading-[1.02] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
                Vedanta Advaita para
                <span className="block">ver, comprender y profundizar.</span>
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-stone-200 sm:text-xl sm:leading-8">
                Bienvenidos al camino del Autoconocimiento y la Realización del Sí
                Mismo. Nos adentramos en la esencia del Vedanta Advaita, una
                filosofía milenaria que enseña mediante el YO SOY: la Unidad entre
                el Atman (Ser), el Brahmán (la Consciencia Impersonal) Y Parabrahmán
                (El Absoluto).
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/aprender/fundamentos/bienvenida"
                  className="hero-primary-cta group inline-flex items-center justify-center gap-3 rounded-2xl bg-amber-300 px-6 py-4 text-center font-bold text-stone-950 shadow-[0_16px_50px_-18px_rgba(251,191,36,0.95)] transition hover:bg-amber-200"
                >
                  Comenzar ahora
                  <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
                </Link>
                <Link
                  href="/cursos#mapa-curricular"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/20 bg-black/30 px-6 py-4 text-center font-semibold text-white backdrop-blur-md transition hover:border-sky-200/50 hover:bg-sky-200/10"
                >
                  Explorar la ruta completa
                </Link>
              </div>
              <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-xs font-medium text-stone-300 sm:text-sm">
                <span>Sin pago obligatorio</span>
                <span className="text-amber-300/50" aria-hidden="true">◆</span>
                <span>Sin cuenta para explorar</span>
                <span className="text-sky-300/50" aria-hidden="true">◆</span>
                <span>Centrado en video</span>
              </div>
            </div>

            <aside className="hero-next-step reveal-on-scroll rounded-[1.75rem] border border-white/15 bg-[#06111d]/75 p-6 shadow-[0_24px_90px_-35px_rgba(56,189,248,0.72)] backdrop-blur-xl lg:mb-3">
              <div className="flex items-center justify-between gap-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-200/80">Tu puerta de entrada</p>
                <span className="rounded-full border border-emerald-300/25 bg-emerald-300/10 px-2.5 py-1 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-emerald-200">Disponible</span>
              </div>
              <p className="mt-5 text-sm text-stone-400">Lección 01</p>
              <h2 className="mt-2 text-2xl font-semibold leading-tight text-white">Bienvenida al recorrido</h2>
              <p className="mt-3 text-sm leading-6 text-stone-300">
                Descubre cómo estudiar con el canal oficial como centro de la experiencia.
              </p>
              <Link
                href="/aprender/fundamentos/bienvenida"
                className="group mt-6 flex items-center justify-between rounded-2xl border border-sky-200/20 bg-sky-300/10 px-4 py-3.5 font-semibold text-sky-100 transition hover:border-sky-200/45 hover:bg-sky-300/15"
              >
                Abrir primera lección
                <span className="grid size-8 place-items-center rounded-full bg-sky-200 text-slate-950 transition group-hover:translate-x-1" aria-hidden="true">→</span>
              </Link>
              <a href={youtubeChannel.url} target="_blank" rel="noreferrer" className="mt-4 inline-flex text-sm font-semibold text-stone-300 transition hover:text-amber-200">
                Ver canal oficial en YouTube ↗
              </a>
            </aside>
          </div>
        </div>

        <a href="#experiencia" className="hero-scroll-cue" aria-label="Descubrir la experiencia">
          <span>Descubrir</span>
          <span className="hero-scroll-line" aria-hidden="true" />
        </a>
      </section>

      <section id="experiencia" className="relative z-10 mx-auto -mt-8 max-w-7xl px-5 sm:px-8">
        <div className="engagement-band grid overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#07101a]/90 shadow-[0_24px_80px_-42px_rgba(56,189,248,0.8)] backdrop-blur-xl sm:grid-cols-2 lg:grid-cols-4">
          {journeySignals.map((signal) => (
            <article key={signal.label} className="engagement-stat px-6 py-5 sm:px-7 sm:py-6">
              <p className="text-3xl font-semibold tracking-tight text-white">{signal.value}</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-stone-400">{signal.label}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="reveal-on-scroll mx-auto max-w-7xl px-5 pb-20 pt-24 sm:px-8 sm:pt-28">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-300/70">Empieza por aquí</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-5xl">{academyCourse.title}</h2>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-stone-400">{academyCourse.description}</p>
          </div>
          <Link href="/cursos" className="text-sm font-semibold text-amber-200 transition hover:text-amber-100">Ver recorrido completo →</Link>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {academyCourse.lessons.map((lesson) => (
            <article key={lesson.id} className="luminous-card lesson-card flex min-h-72 flex-col rounded-3xl border border-amber-100/10 bg-[linear-gradient(145deg,rgba(41,37,36,0.82),rgba(7,12,20,0.88))] p-6">
              <div className="flex items-center justify-between text-xs uppercase tracking-[0.16em] text-stone-500">
                <span>Lección {String(lesson.order).padStart(2, "0")}</span>
                <span>{lesson.duration}</span>
              </div>
              <div className="mt-8 h-px w-14 bg-gradient-to-r from-amber-300 to-transparent" />
              <h3 className="mt-5 text-2xl font-semibold">{lesson.title}</h3>
              <p className="mt-3 leading-7 text-stone-400">{lesson.description}</p>
              {lesson.available ? (
                <Link href={lesson.href} className="group mt-auto flex items-center justify-between pt-7 font-semibold text-amber-200">
                  Ver lección <span className="transition group-hover:translate-x-1">→</span>
                </Link>
              ) : (
                <p className="mt-auto pt-7 text-sm text-stone-500">En preparación editorial</p>
              )}
            </article>
          ))}
        </div>
      </section>

      <section className="reveal-on-scroll border-y border-sky-100/10 bg-[linear-gradient(180deg,rgba(4,14,25,0.78),rgba(3,7,13,0.95))]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
          <div className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-300/70">Encuentros en comunidad</p>
              <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">La sala de Zoom de Parabrahman</h2>
            </div>
            <Link href="/encuentros" className="text-sm font-semibold text-sky-200 transition hover:text-sky-100">Ver reuniones y grabaciones →</Link>
          </div>
          <TodayMeetingCard />
        </div>
      </section>

      <section className="reveal-on-scroll mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="mb-10 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-300/70">Una escuela, múltiples accesos</p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-5xl">Profundiza desde diferentes dimensiones.</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {portals.map((portal) => (
            <article key={portal.href} className={`portal-card portal-card-${portal.accent} luminous-card flex min-h-96 flex-col rounded-[2rem] border p-8 sm:p-10`}>
              <p className="text-xs font-semibold uppercase tracking-[0.18em]">{portal.eyebrow}</p>
              <h3 className="mt-4 text-3xl font-semibold leading-tight">{portal.title}</h3>
              <p className="mt-5 leading-7 text-stone-400">{portal.text}</p>
              <Link href={portal.href} className="mt-auto pt-8 font-semibold">{portal.action} →</Link>
            </article>
          ))}
        </div>
      </section>

      <section className="reveal-on-scroll border-y border-amber-100/10 bg-stone-950/70">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.75fr_1.25fr] lg:py-24">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-300/70">Nuestro compromiso</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-5xl">Profundidad sin barreras.</h2>
            <p className="mt-5 max-w-md leading-7 text-stone-400">Tecnología al servicio de una enseñanza clara, abierta y rigurosa.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {principles.map((principle) => (
              <article key={principle.title} className="luminous-card rounded-3xl border border-white/5 bg-white/[0.025] p-6">
                <p className="font-mono text-xs text-amber-300/60">{principle.number}</p>
                <h3 className="mt-8 font-semibold text-amber-100">{principle.title}</h3>
                <p className="mt-3 text-sm leading-6 text-stone-400">{principle.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <footer className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-10 text-sm text-stone-500 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>Parabrahman — Escuela de Vedanta Advaita</p>
        <p>Contenido libre · Sostenimiento voluntario</p>
      </footer>
    </main>
  );
}
