import { MetaphysicsMap } from "@/components/metaphysics-map";
import { SiteHeader } from "@/components/site-header";
import { dimensionLayers, sankhyaTattvaGroups } from "@/content/metaphysics";
import { getCurrentStudent } from "@/lib/auth/current-student";

export const metadata = {
  title: "Metafísica conceptual — Parabrahman",
  description: "Mapa pedagógico de las siete dimensiones y sus relaciones con kośas, guṇas, elementos, lokas, tattvas y chakras.",
};

const studyAxes = [
  { title: "Cinco kośas", text: "Capas de experiencia utilizadas para discernir lo conocido de quien conoce." },
  { title: "Tres guṇas", text: "Tamas, rajas y sattva como tendencias de Prakṛti, no como identidades permanentes." },
  { title: "Cinco elementos", text: "Tierra, agua, fuego, aire y espacio como progresión pedagógica de lo denso a lo sutil." },
  { title: "Siete lokas", text: "Mundos tradicionales vinculados aquí como eje contemplativo de la síntesis de la escuela." },
  { title: "Veinticinco tattvas", text: "Despliegue Sāṃkhya de Prakṛti y discernimiento de Puruṣa como principio consciente." },
  { title: "Sistema septenario", text: "Chakras, días, colores y notas como lenguaje comparativo para recordar la secuencia." },
] as const;

export default async function MetaphysicsPage() {
  const student = await getCurrentStudent();

  return (
    <main className="min-h-screen bg-[#02050a] text-stone-100">
      <SiteHeader student={student} />

      <section className="metaphysics-hero relative isolate overflow-hidden border-b border-violet-100/10">
        <div className="metaphysics-hero-grid absolute inset-0 -z-20" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_35%,rgba(167,139,250,0.2),transparent_25%),radial-gradient(circle_at_16%_30%,rgba(251,191,36,0.12),transparent_25%),radial-gradient(circle_at_84%_40%,rgba(56,189,248,0.13),transparent_28%)]" />
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-violet-200/80">ॐ · Arquitectura conceptual</p>
          <h1 className="aurora-title mt-5 max-w-5xl text-4xl font-semibold leading-[1.05] sm:text-6xl lg:text-7xl">
            Metafísica de las siete dimensiones
          </h1>
          <p className="mt-7 max-w-4xl text-lg leading-8 text-stone-300 sm:text-xl">
            Un mapa modular para contemplar el despliegue desde OM, la polaridad pedagógica de Prakṛti y Puruṣa, y la relación entre materia, vida, mente, causalidad, Ātman y Brahman.
          </p>
          <div className="mt-8 max-w-4xl rounded-2xl border border-amber-200/15 bg-amber-200/[0.055] p-5 text-sm leading-7 text-amber-50/75">
            <strong className="text-amber-100">Criterio de lectura:</strong> este diagrama es una síntesis pedagógica propia de Parabrahman. Vincula modelos de distintas procedencias para el estudio comparativo; no afirma que exista una equivalencia canónica única entre dimensiones, lokas, chakras, días, colores y notas.
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-24">
        <MetaphysicsMap />
      </section>

      <section className="border-y border-violet-100/10 bg-[#060914]">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-violet-300/70">Ejes de correspondencia</p>
          <h2 className="mt-3 max-w-4xl text-3xl font-semibold sm:text-5xl">Una estructura para relacionar sin confundir.</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {studyAxes.map((axis, index) => (
              <article key={axis.title} className="luminous-card rounded-3xl border border-violet-100/10 bg-stone-950/55 p-7">
                <span className="text-xs font-bold tracking-[0.2em] text-violet-300/50">EJE {String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-4 text-2xl font-semibold">{axis.title}</h3>
                <p className="mt-4 leading-7 text-stone-400">{axis.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-300/70">Prakṛti · Puruṣa</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-5xl">Los 25 tattvas como árbol conceptual.</h2>
            <p className="mt-5 leading-8 text-stone-400">
              La cuenta pertenece al marco Sāṃkhya: veinticuatro principios de Prakṛti y Puruṣa como principio consciente. En esta página funciona como apoyo al discernimiento; Brahman no se reduce a un tattva adicional.
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {sankhyaTattvaGroups.map((group) => (
              <article key={group.label} className="tattva-module rounded-2xl border border-sky-200/10 bg-sky-200/[0.035] p-5">
                <span className="grid size-9 place-items-center rounded-full border border-sky-200/20 bg-sky-200/10 text-sm font-bold text-sky-100">{group.count}</span>
                <h3 className="mt-4 font-semibold text-white">{group.label}</h3>
                <p className="mt-2 text-sm leading-6 text-stone-500">{group.detail}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-stone-800 bg-black/25">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
          <p className="text-sm text-stone-500">El recorrido contiene {dimensionLayers.length} dimensiones seleccionables dentro de una única interfaz. En escritorio y celular se mantiene el mismo orden, la misma ficha activa y la misma navegación progresiva.</p>
        </div>
      </section>
    </main>
  );
}
