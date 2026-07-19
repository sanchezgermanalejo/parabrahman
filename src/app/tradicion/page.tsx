import { SiteHeader } from "@/components/site-header";
import {
  primaryPassages,
  textFamilies,
  traditionPeriods,
  traditionPlaces,
  traditionSources,
} from "@/content/vedanta-tradition";
import { getCurrentStudent } from "@/lib/auth/current-student";

export const metadata = {
  title: "Tradición e historia del Vedanta Advaita — Parabrahman",
  description: "Mapa histórico y tradicional desde el corpus védico hasta la transmisión contemporánea del Vedanta Advaita.",
};

export default async function TraditionPage() {
  const student = await getCurrentStudent();

  return (
    <main className="min-h-screen bg-[#03070d] text-stone-100">
      <SiteHeader student={student} />
      <section className="relative overflow-hidden border-b border-amber-100/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(251,191,36,0.12),transparent_28%),radial-gradient(circle_at_80%_35%,rgba(56,189,248,0.1),transparent_30%)]" />
        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300/75">Sanātana Dharma · contexto y tradición</p>
          <h1 className="aurora-title mt-5 max-w-5xl text-4xl font-semibold leading-tight sm:text-6xl">
            Literatura e historia del Vedanta Advaita
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-stone-300">
            Un mapa para comprender cómo la enseñanza no dual se relaciona con el corpus védico, las Upaniṣads, las escuelas de Vedanta, los ācāryas y los territorios de India, hasta su transmisión universal contemporánea.
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-6 text-stone-400">
            Cada etapa y cada texto conduce a una fuente de estudio seleccionada. En geografía distinguimos el contexto histórico de la ubicación física para no confundir investigación con turismo.
          </p>
          <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <a href="#cronologia" className="rounded-2xl border border-amber-300/20 bg-amber-300/5 px-5 py-4 text-amber-100 transition hover:border-amber-300/40">Cronología esencial ↓</a>
            <a href="#literatura" className="rounded-2xl border border-sky-300/20 bg-sky-300/5 px-5 py-4 text-sky-100 transition hover:border-sky-300/40">Literatura y libros ↓</a>
            <a href="#pasajes" className="rounded-2xl border border-violet-300/20 bg-violet-300/5 px-5 py-4 text-violet-100 transition hover:border-violet-300/40">Pasajes comentados ↓</a>
            <a href="#geografia" className="rounded-2xl border border-emerald-300/20 bg-emerald-300/5 px-5 py-4 text-emerald-100 transition hover:border-emerald-300/40">Geografía de India ↓</a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          <article className="luminous-card rounded-3xl border border-amber-200/10 bg-stone-900/60 p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-300/70">Marco amplio</p>
            <h2 className="mt-3 text-2xl font-semibold">Sanātana Dharma</h2>
            <p className="mt-4 leading-7 text-stone-400">Nombre tradicional para un orden y una forma de vida de múltiples escrituras, prácticas, deidades, escuelas y linajes. No posee un único fundador ni se reduce al Advaita.</p>
          </article>
          <article className="luminous-card rounded-3xl border border-sky-200/10 bg-stone-900/60 p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-300/70">Familia filosófica</p>
            <h2 className="mt-3 text-2xl font-semibold">Vedanta</h2>
            <p className="mt-4 leading-7 text-stone-400">Conjunto de escuelas que interpretan las Upaniṣads, la Bhagavad Gītā y los Brahma Sūtras. Incluye lecturas no duales, cualificadas y duales.</p>
          </article>
          <article className="luminous-card rounded-3xl border border-emerald-200/10 bg-stone-900/60 p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300/70">Foco de la escuela</p>
            <h2 className="mt-3 text-2xl font-semibold">Advaita Vedanta</h2>
            <p className="mt-4 leading-7 text-stone-400">Tradición de enseñanza no dual que orienta al reconocimiento de la identidad fundamental entre ātman y Brahman mediante conocimiento y discernimiento.</p>
          </article>
        </div>
      </section>

      <section id="cronologia" className="border-y border-amber-100/10 bg-stone-950/65 scroll-mt-24">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-300/70">Continuidad y transformación</p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Cronología esencial</h2>
          <p className="mt-4 max-w-3xl leading-7 text-stone-400">Las fechas son herramientas históricas aproximadas. No sustituyen la comprensión tradicional ni convierten debates académicos en certezas.</p>

          <div className="relative mt-12 grid gap-6 before:absolute before:bottom-4 before:left-[11px] before:top-4 before:w-px before:bg-gradient-to-b before:from-amber-300/60 before:via-sky-300/30 before:to-transparent sm:before:left-[19px]">
            {traditionPeriods.map((period, index) => (
              <article key={period.id} className="relative pl-10 sm:pl-16">
                <span className="absolute left-0 top-6 grid size-6 place-items-center rounded-full border border-amber-300/40 bg-[#090d13] text-[10px] text-amber-200 sm:size-10">{index + 1}</span>
                <div className="rounded-3xl border border-stone-800 bg-stone-900/60 p-6 sm:p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-amber-300/65">{period.period}</p>
                  <h3 className="mt-2 text-2xl font-semibold">{period.title}</h3>
                  <p className="mt-4 leading-7 text-stone-400">{period.summary}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {period.focus.map((item) => <span key={item} className="rounded-full border border-stone-700 px-3 py-1.5 text-xs text-stone-400">{item}</span>)}
                  </div>
                  <div className="mt-6 flex flex-wrap gap-3">
                    {period.resources.map((resource) => (
                      <a key={resource.url} href={resource.url} target="_blank" rel="noreferrer" className="rounded-full border border-amber-300/25 bg-amber-300/[0.06] px-4 py-2 text-sm font-medium text-amber-100 transition hover:border-amber-300/55 hover:bg-amber-300/10">
                        {resource.label} ↗
                      </a>
                    ))}
                  </div>
                  {period.datingNote && <p className="mt-5 border-l-2 border-sky-300/30 pl-4 text-sm leading-6 text-stone-500">{period.datingNote}</p>}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="literatura" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-20 sm:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-300/70">Biblioteca orientada</p>
        <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Literatura y familias de textos</h2>
        <p className="mt-4 max-w-3xl leading-7 text-stone-400">Este mapa indica función y relación. Cada título abre el portal académico u oficial más adecuado disponible; no ofrecemos copias sin verificar derechos. La futura biblioteca distinguirá texto fuente, traducción, comentario tradicional y estudio contemporáneo.</p>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {textFamilies.map((family) => (
            <article key={family.title} className="luminous-card rounded-3xl border border-sky-200/10 bg-stone-900/60 p-7">
              <p className="text-xs uppercase tracking-[0.16em] text-sky-300/65">{family.role}</p>
              <h3 className="mt-3 text-2xl font-semibold">{family.title}</h3>
              <ul className="mt-5 grid gap-3 text-stone-400">
                {family.items.map((item) => (
                  <li key={item.label} className="border-b border-stone-800 pb-3 last:border-0">
                    <a href={item.url} target="_blank" rel="noreferrer" className="group flex items-center justify-between gap-4 transition hover:text-sky-100">
                      <span className="grid gap-1"><strong className="font-medium text-stone-300 group-hover:text-sky-100">{item.label}</strong><small className="text-xs text-stone-600">{item.date}</small></span>
                      <span aria-hidden="true" className="text-sky-300/60 transition group-hover:text-sky-200">↗</span>
                    </a>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section id="pasajes" className="scroll-mt-24 border-y border-violet-100/10 bg-stone-950/65">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-violet-300/70">Texto · palabra · contexto</p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Pasajes fundamentales con lectura literal</h2>
          <p className="mt-4 max-w-4xl leading-7 text-stone-400">
            Presentamos fragmentos breves del original sánscrito, un desglose pedagógico y una síntesis propia. La lectura literal ayuda a ver la construcción, pero no reemplaza el contexto completo, los comentarios tradicionales ni una traducción crítica.
          </p>

          <div className="mt-10 grid gap-6">
            {primaryPassages.map((passage, index) => (
              <article key={passage.id} className="overflow-hidden rounded-3xl border border-violet-200/10 bg-stone-900/55">
                <div className="grid gap-7 p-6 sm:p-8 lg:grid-cols-[0.9fr_1.1fr]">
                  <div>
                    <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.14em] text-violet-300/70">
                      <span>Lectura {index + 1}</span>
                      <span className="text-stone-700">·</span>
                      <span>{passage.source} · {passage.reference}</span>
                      <span className="text-stone-500">· {passage.date}</span>
                    </div>
                    <blockquote lang="sa" className="mt-6 border-l-2 border-violet-300/40 pl-5 text-2xl leading-relaxed text-violet-100 sm:text-3xl">
                      {passage.devanagari}
                    </blockquote>
                    <p lang="sa-Latn" className="mt-4 font-serif text-lg italic leading-8 text-stone-300">{passage.iast}</p>
                    <a href={passage.sourceUrl} target="_blank" rel="noreferrer" className="mt-6 inline-flex rounded-full border border-violet-300/25 px-4 py-2 text-sm font-medium text-violet-100 transition hover:border-violet-300/55">
                      Abrir texto fuente ↗
                    </a>
                  </div>

                  <div className="grid gap-5">
                    <div>
                      <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-sky-300/70">Lectura palabra por palabra</h3>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {passage.literal.map((part) => (
                          <span key={part.term} className="rounded-xl border border-sky-300/15 bg-sky-300/[0.035] px-3 py-2 text-sm text-stone-300">
                            <strong className="font-medium text-sky-100">{part.term}</strong> · {part.meaning}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="rounded-2xl border border-amber-300/12 bg-amber-300/[0.035] p-5">
                      <h3 className="text-sm font-semibold text-amber-100">Síntesis para comprender</h3>
                      <p className="mt-2 leading-7 text-stone-400">{passage.synthesis}</p>
                    </div>
                    <div className="rounded-2xl border border-stone-800 bg-black/20 p-5">
                      <h3 className="text-sm font-semibold text-stone-200">Contexto y límite de lectura</h3>
                      <p className="mt-2 text-sm leading-6 text-stone-500">{passage.context}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="geografia" className="border-y border-emerald-100/10 bg-stone-950/65 scroll-mt-24">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300/70">Territorio y transmisión</p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Geografía esencial de India</h2>
          <p className="mt-4 max-w-3xl leading-7 text-stone-400">“Conocer el contexto” abre una fuente de estudio. “Ver ubicación” abre el lugar en el mapa; las regiones amplias o históricamente discutidas no reciben una coordenada artificial.</p>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {traditionPlaces.map((place) => (
              <article key={place.region} className="rounded-2xl border border-emerald-200/10 bg-emerald-300/[0.03] p-6">
                <h3 className="font-semibold text-emerald-100">{place.region}</h3>
                <p className="mt-3 text-sm leading-6 text-stone-400">{place.significance}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {"studyUrl" in place && place.studyUrl && (
                    <a href={place.studyUrl} target="_blank" rel="noreferrer" className="rounded-full border border-sky-300/20 px-3 py-1.5 text-xs font-medium text-sky-100 transition hover:border-sky-300/50">Conocer el contexto ↗</a>
                  )}
                  {"mapUrl" in place && place.mapUrl && (
                    <a href={place.mapUrl} target="_blank" rel="noreferrer" className="rounded-full border border-emerald-300/25 px-3 py-1.5 text-xs font-medium text-emerald-100 transition hover:border-emerald-300/55">Ver ubicación ↗</a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-300/70">Fuentes de orientación</p>
        <h2 className="mt-3 text-3xl font-semibold">Lecturas verificables</h2>
        <p className="mt-4 max-w-3xl leading-7 text-stone-400">La selección inicial combina un portal patrimonial del Gobierno de India y enciclopedias académicas. Se ampliará con ediciones autorizadas y materiales propios de Parabrahman.</p>
        <div className="mt-8 grid gap-4">
          {traditionSources.map((source) => (
            <a key={source.url} href={source.url} target="_blank" rel="noreferrer" className="flex flex-col gap-2 rounded-2xl border border-stone-800 bg-stone-900/50 p-5 transition hover:border-amber-300/25 sm:flex-row sm:items-center sm:justify-between">
              <span className="font-medium text-stone-200">{source.title}</span>
              <span className="text-sm text-stone-500">{source.publisher} ↗</span>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
