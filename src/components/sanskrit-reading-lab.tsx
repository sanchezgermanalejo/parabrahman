"use client";

import { useState } from "react";
import type { SanskritReading } from "@/content/sanskrit-reading";

type Layer = "devanagari" | "iast" | "translation";

export function SanskritReadingLab({ readings }: { readings: readonly SanskritReading[] }) {
  const [activeId, setActiveId] = useState(readings[0]?.id ?? "");
  const [layers, setLayers] = useState<Record<Layer, boolean>>({ devanagari: true, iast: true, translation: false });
  const [tokenIndex, setTokenIndex] = useState(0);
  const active = readings.find((reading) => reading.id === activeId) ?? readings[0];

  if (!active) return null;
  const token = active.tokens[Math.min(tokenIndex, active.tokens.length - 1)];

  function selectReading(id: string) {
    setActiveId(id);
    setTokenIndex(0);
    setLayers({ devanagari: true, iast: true, translation: false });
  }

  function toggle(layer: Layer) {
    setLayers((current) => ({ ...current, [layer]: !current[layer] }));
  }

  return (
    <div className="grid gap-6 xl:grid-cols-[310px_minmax(0,1fr)]">
      <aside className="rounded-3xl border border-stone-800 bg-stone-900/45 p-3 sm:p-4">
        <p className="px-3 pb-3 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-300/70">Del Veda al Advaita moderno</p>
        <div className="flex gap-2 overflow-x-auto pb-2 xl:flex-col xl:overflow-visible">
          {readings.map((reading, index) => {
            const selected = reading.id === active.id;
            return (
              <button
                key={reading.id}
                type="button"
                aria-pressed={selected}
                onClick={() => selectReading(reading.id)}
                className={`min-w-64 rounded-2xl border p-4 text-left transition xl:min-w-0 ${selected ? "border-emerald-300/35 bg-emerald-300/[0.08]" : "border-transparent bg-black/15 hover:border-stone-700"}`}
              >
                <span className="text-xs text-stone-500">{index + 1}. {reading.period}</span>
                <span className="mt-1 block font-semibold text-stone-100">{reading.collection}</span>
                <span className="mt-1 block text-sm text-stone-400">{reading.reference}</span>
              </button>
            );
          })}
        </div>
      </aside>

      <article className="min-w-0 rounded-3xl border border-emerald-200/10 bg-stone-900/60 p-5 sm:p-8">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-300/70">{active.period} · {active.collection}</p>
            <h3 className="mt-3 text-2xl font-semibold text-stone-100">{active.title}</h3>
            <p className="mt-2 text-sm text-stone-500">{active.reference}</p>
          </div>
          <div className="flex flex-wrap gap-2" aria-label="Capas de lectura">
            {([
              ["devanagari", "Devanāgarī"],
              ["iast", "IAST"],
              ["translation", "Traducción"],
            ] as const).map(([key, label]) => (
              <button key={key} type="button" aria-pressed={layers[key]} onClick={() => toggle(key)} className={`rounded-full border px-3 py-2 text-xs font-semibold transition ${layers[key] ? "border-emerald-300/40 bg-emerald-300/10 text-emerald-100" : "border-stone-700 text-stone-500"}`}>{label}</button>
            ))}
          </div>
        </div>

        <div className="mt-7 space-y-4 rounded-2xl border border-stone-800 bg-black/20 p-5 sm:p-7">
          {layers.devanagari && <p lang="sa" className="text-2xl leading-relaxed text-amber-100 sm:text-3xl">{active.devanagari}</p>}
          {layers.iast && <p className="border-t border-stone-800 pt-4 text-lg leading-8 text-sky-100">{active.iast}</p>}
          {layers.translation && <p className="border-t border-stone-800 pt-4 leading-7 text-stone-300">{active.translation}</p>}
          {!layers.devanagari && !layers.iast && !layers.translation && <p className="text-sm text-stone-500">Activa al menos una capa de lectura.</p>}
        </div>

        <div className="mt-7 grid gap-5 lg:grid-cols-[1fr_0.85fr]">
          <section className="rounded-2xl border border-sky-300/10 bg-sky-300/[0.025] p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-sky-300/70">Análisis palabra por palabra</p>
            <p className="mt-2 text-sm leading-6 text-stone-500">Selecciona una forma para revelar su lema y función. Primero analiza; después activa la traducción completa.</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {active.tokens.map((item, index) => (
                <button key={`${active.id}-${item.form}`} type="button" aria-pressed={index === tokenIndex} onClick={() => setTokenIndex(index)} className={`rounded-lg border px-3 py-2 font-medium transition ${index === tokenIndex ? "border-sky-300/45 bg-sky-300/10 text-sky-100" : "border-stone-700 text-stone-400 hover:border-stone-500"}`}>{item.form}</button>
              ))}
            </div>
            {token && (
              <div className="mt-5 grid gap-3 rounded-xl border border-stone-800 bg-black/20 p-4 sm:grid-cols-2">
                <div><span className="text-xs uppercase tracking-[0.12em] text-stone-600">Lema</span><p className="mt-1 font-semibold text-stone-100">{token.lemma}</p></div>
                <div><span className="text-xs uppercase tracking-[0.12em] text-stone-600">Sentido</span><p className="mt-1 text-stone-200">{token.meaning}</p></div>
                <div className="sm:col-span-2"><span className="text-xs uppercase tracking-[0.12em] text-stone-600">Análisis</span><p className="mt-1 text-sm text-stone-300">{token.grammar}</p></div>
              </div>
            )}
          </section>

          <section className="rounded-2xl border border-amber-300/10 bg-amber-300/[0.025] p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-amber-300/70">Foco de la lección</p>
            <p className="mt-3 leading-7 text-stone-300">{active.focus}</p>
            {active.caution && <p className="mt-4 border-t border-stone-800 pt-4 text-sm leading-6 text-stone-500">Criterio: {active.caution}</p>}
            <a href={active.sourceUrl} target="_blank" rel="noreferrer" className="mt-5 inline-flex rounded-xl border border-amber-300/25 px-4 py-2.5 text-sm font-semibold text-amber-100 transition hover:bg-amber-300/10">Consultar texto fuente ↗</a>
            <p className="mt-2 text-xs text-stone-600">{active.sourceLabel}</p>
          </section>
        </div>
      </article>
    </div>
  );
}
