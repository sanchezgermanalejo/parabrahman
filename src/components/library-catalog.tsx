"use client";

import { useMemo, useState } from "react";

import {
  getLibraryCategoryLabel,
  libraryBooks,
  libraryCategories,
  type LibraryCategory,
} from "@/content/library";

type CategoryFilter = LibraryCategory | "all";

function normalize(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLocaleLowerCase("es");
}

export function LibraryCatalog() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<CategoryFilter>("all");

  const filteredBooks = useMemo(() => {
    const normalizedQuery = normalize(query.trim());

    return libraryBooks.filter((book) => {
      const matchesCategory = category === "all" || book.category === category;
      const searchable = normalize(
        [
          book.title,
          book.originalTitle,
          book.author,
          book.summary,
          book.era,
          book.date,
          book.authorDates,
          book.language,
        ]
          .filter(Boolean)
          .join(" "),
      );

      return matchesCategory && searchable.includes(normalizedQuery);
    });
  }, [category, query]);

  return (
    <section aria-labelledby="catalog-title" className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-300/70">
            Catálogo inicial
          </p>
          <h2 id="catalog-title" className="mt-3 text-3xl font-semibold sm:text-4xl">
            Textos para leer y estudiar
          </h2>
          <p className="mt-4 max-w-3xl leading-7 text-stone-400">
            Una selección orientativa, no una lista cerrada. Buscá por título,
            autor, época o tema y elegí el nivel histórico que querés recorrer.
          </p>
        </div>
        <p aria-live="polite" className="text-sm text-stone-500">
          {filteredBooks.length} {filteredBooks.length === 1 ? "texto disponible" : "textos disponibles"}
        </p>
      </div>

      <div className="mt-9 rounded-3xl border border-amber-200/10 bg-stone-900/55 p-5 sm:p-6">
        <label htmlFor="library-search" className="text-sm font-medium text-stone-200">
          Buscar en la Biblioteca
        </label>
        <input
          id="library-search"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Ej.: Upaniṣads, Śaṅkara, Nisargadatta, conciencia…"
          className="mt-3 w-full rounded-2xl border border-stone-700 bg-black/25 px-4 py-3 text-stone-100 outline-none transition placeholder:text-stone-600 focus:border-amber-300/50 focus:ring-2 focus:ring-amber-300/10"
        />
        <div className="mt-5 flex flex-wrap gap-2" aria-label="Filtrar por etapa">
          {libraryCategories.map((item) => {
            const selected = category === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setCategory(item.id)}
                aria-pressed={selected}
                className={`rounded-full border px-4 py-2 text-sm transition ${
                  selected
                    ? "border-amber-300/55 bg-amber-300/12 text-amber-100"
                    : "border-stone-700 text-stone-400 hover:border-stone-500 hover:text-stone-200"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </div>

      {filteredBooks.length > 0 ? (
        <div className="mt-9 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filteredBooks.map((book) => (
            <article
              key={book.id}
              className="luminous-card group flex min-h-full flex-col rounded-3xl border border-amber-200/10 bg-stone-900/55 p-6"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="rounded-full border border-amber-300/20 bg-amber-300/[0.05] px-3 py-1 text-xs font-medium text-amber-200">
                  {getLibraryCategoryLabel(book.category)}
                </span>
                <span className="text-xs text-stone-600">{book.era}</span>
              </div>
              <h3 className="mt-5 font-serif text-2xl leading-tight text-stone-100 transition group-hover:text-amber-100">
                {book.title}
              </h3>
              {book.originalTitle && (
                <p className="mt-2 text-sm italic text-stone-500">{book.originalTitle}</p>
              )}
              <p className="mt-3 text-sm font-medium text-stone-300">{book.author}</p>
              {book.authorDates && (
                <p className="mt-1 text-xs leading-5 text-stone-500">{book.authorDates}</p>
              )}
              <p className="mt-4 flex-1 text-sm leading-6 text-stone-400">{book.summary}</p>

              <dl className="mt-6 grid grid-cols-2 gap-3 border-t border-stone-800 pt-5 text-xs">
                <div className="col-span-2 rounded-xl border border-amber-300/10 bg-amber-300/[0.035] px-3 py-2.5">
                  <dt className="text-amber-300/60">Fecha o período</dt>
                  <dd className="mt-1 font-medium leading-5 text-amber-100/90">{book.date}</dd>
                </div>
                <div>
                  <dt className="text-stone-600">Idioma</dt>
                  <dd className="mt-1 text-stone-300">{book.language}</dd>
                </div>
                <div>
                  <dt className="text-stone-600">Acceso</dt>
                  <dd className="mt-1 text-stone-300">{book.access}</dd>
                </div>
              </dl>

              <a
                href={book.url}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center justify-between rounded-2xl border border-amber-300/25 bg-amber-300/[0.06] px-4 py-3 text-sm font-semibold text-amber-100 transition hover:border-amber-300/55 hover:bg-amber-300/10"
              >
                <span>Leer en {book.source}</span>
                <span aria-hidden="true">↗</span>
              </a>
              {book.alternativeUrl && (
                <a
                  href={book.alternativeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-2 text-center text-xs text-sky-300/75 transition hover:text-sky-200"
                >
                  {book.alternativeLabel ?? "Ver acceso alternativo"} ↗
                </a>
              )}
              <p className="mt-4 text-xs leading-5 text-stone-600">{book.rightsNote}</p>
            </article>
          ))}
        </div>
      ) : (
        <div className="mt-9 rounded-3xl border border-stone-800 bg-stone-900/45 px-6 py-14 text-center">
          <p className="text-lg text-stone-300">No encontramos textos con esos filtros.</p>
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setCategory("all");
            }}
            className="mt-4 text-sm font-medium text-amber-200 hover:text-amber-100"
          >
            Limpiar búsqueda
          </button>
        </div>
      )}
    </section>
  );
}
