import Link from "next/link";

import { LibraryCatalog } from "@/components/library-catalog";
import { SiteHeader } from "@/components/site-header";
import { libraryBooks, vedicTextSequence } from "@/content/library";
import { getCurrentStudent } from "@/lib/auth/current-student";

export const metadata = {
  title: "Biblioteca de Vedanta Advaita — Parabrahman",
  description:
    "Textos fundamentales del Sanātana Dharma y el Vedanta Advaita con accesos legales para leer en línea.",
};

export default async function LibraryPage() {
  const student = await getCurrentStudent();
  const fullAccessCount = libraryBooks.filter(
    (book) =>
      book.access.includes("completa") ||
      book.access.includes("dominio público") ||
      book.access.includes("Descarga oficial"),
  ).length;

  return (
    <main className="min-h-screen bg-[#03070d] text-stone-100">
      <SiteHeader student={student} />

      <section className="relative overflow-hidden border-b border-amber-100/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_15%,rgba(251,191,36,0.14),transparent_28%),radial-gradient(circle_at_82%_32%,rgba(99,102,241,0.12),transparent_30%)]" />
        <div className="absolute left-1/2 top-12 size-80 -translate-x-1/2 rounded-full border border-amber-300/[0.06] shadow-[0_0_100px_rgba(251,191,36,0.07)]" />
        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-300/75">
            Biblioteca · conocimiento abierto y responsable
          </p>
          <h1 className="aurora-title mt-5 max-w-5xl text-4xl font-semibold leading-tight sm:text-6xl">
            De los Vedas a «Yo soy Eso»
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-stone-300">
            Una biblioteca guiada para recorrer los textos fundamentales del
            Sanātana Dharma, el canon del Vedanta, los maestros del Advaita y la
            transmisión contemporánea de la no dualidad.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#catalogo"
              className="rounded-full border border-amber-300/35 bg-amber-300/10 px-5 py-3 text-sm font-semibold text-amber-100 transition hover:border-amber-300/60 hover:bg-amber-300/15"
            >
              Explorar {libraryBooks.length} textos ↓
            </a>
            <Link
              href="/tradicion"
              className="rounded-full border border-sky-300/25 px-5 py-3 text-sm font-semibold text-sky-100 transition hover:border-sky-300/50 hover:bg-sky-300/10"
            >
              Ver contexto histórico →
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pt-16 sm:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-300/70">
          Secuencia del corpus védico
        </p>
        <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
          De los Vedas a las Upaniṣads
        </h2>
        <p className="mt-4 max-w-4xl leading-7 text-stone-400">
          Este es un orden textual y pedagógico. Las fechas son aproximadas, los
          estratos se superponen y algunos textos forman parte de más de una categoría.
        </p>
        <ol className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {vedicTextSequence.map((item) => (
            <li key={item.title} className="relative overflow-hidden rounded-3xl border border-amber-200/10 bg-stone-900/55 p-6">
              <span className="grid size-10 place-items-center rounded-full border border-amber-300/30 bg-amber-300/10 font-semibold text-amber-100">
                {item.order}
              </span>
              <h3 className="mt-5 font-serif text-2xl text-stone-100">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-stone-400">{item.description}</p>
              <a href={item.url} target="_blank" rel="noreferrer" className="mt-5 inline-flex text-sm font-semibold text-sky-200 transition hover:text-sky-100">
                Consultar fuente ↗
              </a>
            </li>
          ))}
        </ol>
      </section>

      <section className="mx-auto max-w-7xl px-5 pt-16 sm:px-8">
        <div className="grid gap-5 md:grid-cols-3">
          <article className="luminous-card rounded-3xl border border-amber-200/10 bg-stone-900/55 p-6">
            <p className="text-3xl font-semibold text-amber-200">{libraryBooks.length}</p>
            <h2 className="mt-2 font-medium text-stone-200">Obras y colecciones</h2>
            <p className="mt-3 text-sm leading-6 text-stone-500">
              Selección inicial que crecerá con revisión académica y editorial.
            </p>
          </article>
          <article className="luminous-card rounded-3xl border border-emerald-200/10 bg-stone-900/55 p-6">
            <p className="text-3xl font-semibold text-emerald-200">{fullAccessCount}</p>
            <h2 className="mt-2 font-medium text-stone-200">Lecturas completas u oficiales</h2>
            <p className="mt-3 text-sm leading-6 text-stone-500">
              Textos abiertos, de dominio público o publicados por su institución.
            </p>
          </article>
          <article className="luminous-card rounded-3xl border border-sky-200/10 bg-stone-900/55 p-6">
            <p className="text-3xl font-semibold text-sky-200">5</p>
            <h2 className="mt-2 font-medium text-stone-200">Etapas de estudio</h2>
            <p className="mt-3 text-sm leading-6 text-stone-500">
              Desde el marco amplio del Dharma hasta los maestros contemporáneos.
            </p>
          </article>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pt-8 sm:px-8">
        <div className="rounded-3xl border border-sky-300/15 bg-sky-300/[0.045] p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-300/75">
            Criterio de acceso
          </p>
          <h2 className="mt-3 text-2xl font-semibold">Leer sin vulnerar derechos de autor</h2>
          <p className="mt-4 max-w-4xl leading-7 text-stone-400">
            Parabrahman enlaza portales oficiales, ediciones de dominio público,
            vistas previas legales y préstamos digitales. No alojamos copias no
            autorizadas. Por eso una obra moderna como <em>Yo soy Eso</em> abre un
            préstamo controlado o su ficha editorial, mientras los textos antiguos
            pueden ofrecer lectura completa cuando la edición lo permite.
          </p>
        </div>
      </section>

      <div id="catalogo" className="scroll-mt-20">
        <LibraryCatalog />
      </div>
    </main>
  );
}
