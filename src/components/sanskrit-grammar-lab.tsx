"use client";

import { useState } from "react";
import type { GrammarTable } from "@/content/sanskrit-reading";

export function SanskritGrammarLab({ tables }: { tables: readonly GrammarTable[] }) {
  const [activeId, setActiveId] = useState(tables[0]?.id ?? "");
  const active = tables.find((table) => table.id === activeId) ?? tables[0];

  if (!active) return null;

  return (
    <div className="grid gap-6 lg:grid-cols-[280px_minmax(0,1fr)]">
      <nav aria-label="Cuadros gramaticales" className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible">
        {tables.map((table, index) => {
          const selected = table.id === active.id;
          return (
            <button
              key={table.id}
              type="button"
              aria-pressed={selected}
              onClick={() => setActiveId(table.id)}
              className={`min-w-56 rounded-2xl border p-4 text-left transition lg:min-w-0 ${
                selected
                  ? "border-amber-300/40 bg-amber-300/10 text-amber-50"
                  : "border-stone-800 bg-stone-900/45 text-stone-400 hover:border-stone-600"
              }`}
            >
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-amber-300/65">Regla {index + 1}</span>
              <span className="mt-2 block font-semibold">{table.title}</span>
              <span className="mt-1 block text-xs text-stone-500">{table.level}</span>
            </button>
          );
        })}
      </nav>

      <article className="min-w-0 rounded-3xl border border-amber-200/10 bg-stone-900/60 p-5 sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sky-300/70">{active.level}</p>
        <h3 className="mt-3 text-2xl font-semibold text-stone-100">{active.title}</h3>
        <p className="mt-3 max-w-3xl leading-7 text-stone-400">{active.purpose}</p>

        <div className="mt-7 overflow-x-auto rounded-2xl border border-stone-800">
          <table className="w-full min-w-[720px] border-collapse text-left text-sm">
            <thead className="bg-amber-300/[0.07] text-amber-100">
              <tr>{active.headers.map((header) => <th key={header} scope="col" className="border-b border-stone-700 px-4 py-3 font-semibold">{header}</th>)}</tr>
            </thead>
            <tbody>
              {active.rows.map((row, rowIndex) => (
                <tr key={`${active.id}-${rowIndex}`} className="border-b border-stone-800/80 last:border-0 odd:bg-black/10">
                  {row.map((cell, cellIndex) => (
                    <td key={`${cell}-${cellIndex}`} className={`px-4 py-3 align-top ${cellIndex === 0 ? "font-medium text-stone-200" : "text-stone-400"}`}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {active.notes.map((note) => (
            <p key={note} className="rounded-xl border border-sky-300/10 bg-sky-300/[0.025] px-4 py-3 text-sm leading-6 text-stone-400">
              <span className="mr-2 text-sky-300" aria-hidden="true">◆</span>{note}
            </p>
          ))}
        </div>
      </article>
    </div>
  );
}
