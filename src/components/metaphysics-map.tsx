"use client";

import { useState } from "react";

import { dimensionLayers, type DimensionLayer } from "@/content/metaphysics";

const primaryCorrespondences: ReadonlyArray<[string, keyof DimensionLayer]> = [
  ["Kośa", "kosha"],
  ["Chakra", "chakra"],
  ["Loka", "loka"],
];

const structuralCorrespondences: ReadonlyArray<[string, keyof DimensionLayer]> = [
  ["Guṇa", "guna"],
  ["Elemento", "element"],
  ["Relación con los tattvas", "tattvaRelation"],
];

const symbolicCorrespondences: ReadonlyArray<[string, keyof DimensionLayer]> = [
  ["Color", "color"],
  ["Nota", "note"],
  ["Día", "day"],
];

export function MetaphysicsMap() {
  const [selectedId, setSelectedId] = useState(1);
  const selectedIndex = dimensionLayers.findIndex((layer) => layer.id === selectedId);
  const selected = dimensionLayers[selectedIndex] ?? dimensionLayers[0];
  const previous = selectedIndex > 0 ? dimensionLayers[selectedIndex - 1] : null;
  const next = selectedIndex < dimensionLayers.length - 1 ? dimensionLayers[selectedIndex + 1] : null;

  return (
    <section className={`metaphysics-workbench dimension-detail-${selected.id}`} aria-label="Explorador de las siete dimensiones">
      <header className="metaphysics-workbench-header">
        <div>
          <p>Recorrido interactivo</p>
          <h2>Explora los siete niveles</h2>
          <span>Elegí una dimensión y descubrí sus correspondencias en una sola ficha.</span>
        </div>
        <div className="metaphysics-origin" aria-label="Origen conceptual">
          <strong>ॐ</strong>
          <span>Prakṛti</span>
          <i aria-hidden="true">+</i>
          <span>Puruṣa</span>
        </div>
      </header>

      <nav className="dimension-journey" aria-label="Recorrido por las siete dimensiones">
        {dimensionLayers.map((layer) => (
          <button
            key={layer.id}
            type="button"
            onClick={() => setSelectedId(layer.id)}
            className={`metaphysics-node-${layer.id} ${selectedId === layer.id ? "is-selected" : ""}`}
            aria-current={selectedId === layer.id ? "step" : undefined}
          >
            <span>{layer.id}</span>
            <div>
              <small>Nivel {layer.id}</small>
              <strong>{layer.name}</strong>
            </div>
          </button>
        ))}
      </nav>

      <div className="metaphysics-level-progress" aria-label={`Nivel ${selected.id} de 7`}>
        <span style={{ width: `${(selected.id / dimensionLayers.length) * 100}%` }} />
      </div>

      <article className={`dimension-detail dimension-detail-${selected.id}`} aria-live="polite">
          <div className="dimension-detail-progress" aria-hidden="true">
            <span style={{ width: `${(selected.id / dimensionLayers.length) * 100}%` }} />
          </div>

          <header className="dimension-detail-header">
            <div>
              <p>Dimensión {selected.id} de 7</p>
              <h2>{selected.name}</h2>
              <span>{selected.plane}</span>
            </div>
            <div className="dimension-symbol">
              <small>{selected.color}</small>
              <strong>{selected.note}</strong>
            </div>
          </header>

          <p className="dimension-summary">{selected.description}</p>

          <section className="dimension-primary-grid" aria-label="Correspondencias principales">
            {primaryCorrespondences.map(([label, key]) => (
              <div key={key}>
                <p>{label}</p>
                <strong>{selected[key]}</strong>
              </div>
            ))}
          </section>

          <div className="dimension-accordions">
            <details open>
              <summary>
                <span>Estructura metafísica</span>
                <small>Guṇa · elemento · tattvas</small>
              </summary>
              <div className="dimension-correspondence-list">
                {structuralCorrespondences.map(([label, key]) => (
                  <div key={key}><span>{label}</span><p>{selected[key]}</p></div>
                ))}
              </div>
            </details>
            <details>
              <summary>
                <span>Correspondencias simbólicas</span>
                <small>Color · nota · día</small>
              </summary>
              <div className="dimension-symbolic-grid">
                {symbolicCorrespondences.map(([label, key]) => (
                  <div key={key}><span>{label}</span><strong>{selected[key]}</strong></div>
                ))}
              </div>
            </details>
          </div>

          <footer className="dimension-navigation">
            <button type="button" disabled={!previous} onClick={() => previous && setSelectedId(previous.id)}>
              <span aria-hidden="true">←</span>
              <small>{previous ? `Dimensión ${previous.id}` : "Inicio"}</small>
              <strong>{previous?.name ?? "Origen"}</strong>
            </button>
            <p>{selected.id}<span>/ 7</span></p>
            <button type="button" disabled={!next} onClick={() => next && setSelectedId(next.id)}>
              <small>{next ? `Dimensión ${next.id}` : "Recorrido"}</small>
              <strong>{next?.name ?? "Completado"}</strong>
              <span aria-hidden="true">→</span>
            </button>
          </footer>
      </article>
    </section>
  );
}
