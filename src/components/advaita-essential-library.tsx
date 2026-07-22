import {
  advaitaEssentialBooks,
  advaitaEssentialLevels,
} from "@/content/advaita-essential-books";

function sectionId(level: string) {
  return `level-${level
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")}`;
}

export function AdvaitaEssentialLibrary() {
  return (
    <section id="vedanta-advaita-esenciales" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-16 sm:px-8 sm:py-20">
      <div className="grid gap-8 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-violet-300/75">
            Biblioteca de Vedanta Advaita
          </p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-5xl">
            20 libros fundamentales
          </h2>
        </div>
        <div className="rounded-3xl border border-violet-300/15 bg-violet-300/[0.045] p-6">
          <p className="leading-7 text-stone-300">
            Un canon pedagógico curado para avanzar desde las fuentes hasta la
            recepción contemporánea. No pretende ser una lista universal ni
            equipara todos los textos con la autoridad de las Upaniṣads.
          </p>
          <p className="mt-3 text-sm leading-6 text-stone-500">
            Las fechas antiguas son aproximadas. Las atribuciones debatidas y
            los accesos parciales están señalados en cada ficha.
          </p>
        </div>
      </div>

      <div className="mt-12 space-y-12">
        {advaitaEssentialLevels.map((level) => {
          const books = advaitaEssentialBooks.filter((book) => book.level === level);
          const headingId = sectionId(level);

          return (
            <section key={level} aria-labelledby={headingId}>
              <div className="flex items-center gap-4">
                <h3 id={headingId} className="text-xl font-semibold text-violet-100">
                  {level}
                </h3>
                <span className="h-px flex-1 bg-gradient-to-r from-violet-300/25 to-transparent" />
              </div>
              <ol className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                {books.map((book) => (
                  <li key={book.id} className="luminous-card flex min-h-full flex-col rounded-3xl border border-violet-200/10 bg-stone-900/60 p-6">
                    <div className="flex items-center justify-between gap-3">
                      <span className="grid size-10 place-items-center rounded-full border border-violet-300/30 bg-violet-300/10 font-semibold text-violet-100">
                        {book.order}
                      </span>
                      <span className="text-right text-[11px] leading-4 text-stone-600">{book.date}</span>
                    </div>
                    <h4 className="mt-5 font-serif text-2xl leading-tight text-stone-100">{book.title}</h4>
                    {book.originalTitle && <p className="mt-2 text-xs italic leading-5 text-stone-500">{book.originalTitle}</p>}
                    <p className="mt-3 text-sm font-medium text-violet-100/80">{book.author}</p>
                    <p className="mt-4 flex-1 text-sm leading-6 text-stone-400">{book.purpose}</p>
                    {book.note && <p className="mt-4 border-l border-amber-300/30 pl-3 text-xs leading-5 text-amber-100/60">{book.note}</p>}
                    <a href={book.url} target="_blank" rel="noreferrer" className="mt-6 rounded-2xl border border-violet-300/25 bg-violet-300/[0.06] px-4 py-3 text-sm font-semibold text-violet-100 transition hover:border-violet-300/55 hover:bg-violet-300/10">
                      Leer en {book.source} ↗
                    </a>
                    <p className="mt-3 text-xs leading-5 text-stone-600">{book.access}</p>
                  </li>
                ))}
              </ol>
            </section>
          );
        })}
      </div>
    </section>
  );
}
