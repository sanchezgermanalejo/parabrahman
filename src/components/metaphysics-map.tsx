"use client";

import { useState, type CSSProperties } from "react";

import { dimensionLayers } from "@/content/metaphysics";

const correspondenceLabels = [
  ["Kośa", "kosha"],
  ["Guṇa", "guna"],
  ["Elemento", "element"],
  ["Loka", "loka"],
  ["Tattvas", "tattvaRelation"],
  ["Chakra", "chakra"],
  ["Color", "color"],
  ["Nota", "note"],
  ["Día", "day"],
] as const;

export function MetaphysicsMap() {
  const [selectedId, setSelectedId] = useState(7);
  const selected = dimensionLayers.find((layer) => layer.id === selectedId) ?? dimensionLayers[6];

  return (
    <div className="grid items-start gap-8 xl:grid-cols-[minmax(560px,0.95fr)_minmax(0,1.05fr)]">
      <div className="metaphysics-mandala-shell">
        <div className="metaphysics-mandala" aria-label="Mapa geométrico de las siete dimensiones">
          <div className="metaphysics-ring ring-1" />
          <div className="metaphysics-ring ring-2" />
          <div className="metaphysics-ring ring-3" />
          <div className="metaphysics-axis" />
          <div className="metaphysics-core" aria-hidden="true">
            <span className="text-4xl sm:text-6xl">ॐ</span>
            <small>Origen</small>
          </div>
          <div className="metaphysics-pole metaphysics-pole-purusha">
            <strong>Puruṣa</strong>
            <span>Consciencia</span>
          </div>
          <div className="metaphysics-pole metaphysics-pole-prakriti">
            <strong>Prakṛti</strong>
            <span>Manifestación</span>
          </div>
          <div className="metaphysics-nodes">
            {dimensionLayers.map((layer, index) => (
              <button
                key={layer.id}
                type="button"
                className={`metaphysics-node metaphysics-node-${layer.id} ${selectedId === layer.id ? "is-selected" : ""}`}
                style={{ "--node-index": index } as CSSProperties}
                onClick={() => setSelectedId(layer.id)}
                aria-pressed={selectedId === layer.id}
                aria-label={`Dimensión ${layer.id}: ${layer.name}`}
              >
                <span>{layer.id}</span>
              </button>
            ))}
          </div>
        </div>
        <p className="mt-5 text-center text-xs uppercase tracking-[0.16em] text-stone-500">
          Geometría fija · selecciona un número para explorar
        </p>
      </div>

      <article className={`dimension-detail dimension-detail-${selected.id} rounded-[2rem] border bg-[#07101a]/90 p-6 shadow-2xl backdrop-blur-xl sm:p-9`} aria-live="polite">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-400">Dimensión {selected.id} de 7</p>
          <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-stone-300">{selected.color} · {selected.note}</span>
        </div>
        <h2 className="mt-5 text-3xl font-semibold leading-tight text-white sm:text-5xl">{selected.name}</h2>
        <p className="mt-3 text-sm font-semibold uppercase tracking-[0.16em] text-amber-200/75">{selected.plane}</p>
        <p className="mt-6 text-lg leading-8 text-stone-300">{selected.description}</p>

        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {correspondenceLabels.map(([label, key]) => (
            <div key={key} className="rounded-2xl border border-white/[0.08] bg-white/[0.035] p-4">
              <p className="text-[0.68rem] font-bold uppercase tracking-[0.17em] text-stone-500">{label}</p>
              <p className="mt-2 text-sm leading-6 text-stone-200">{selected[key]}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex gap-2" aria-label="Seleccionar dimensión">
          {dimensionLayers.map((layer) => (
            <button
              key={layer.id}
              type="button"
              onClick={() => setSelectedId(layer.id)}
              className={`grid size-10 place-items-center rounded-full border text-sm font-bold transition ${selectedId === layer.id ? "border-amber-200 bg-amber-200 text-stone-950" : "border-white/10 text-stone-400 hover:border-white/30 hover:text-white"}`}
              aria-label={`Ver dimensión ${layer.id}`}
              aria-current={selectedId === layer.id ? "true" : undefined}
            >
              {layer.id}
            </button>
          ))}
        </div>
      </article>
    </div>
  );
}
