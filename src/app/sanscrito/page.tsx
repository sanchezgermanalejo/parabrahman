import { SanskritCareer } from "@/components/sanskrit-career";
import { SanskritGrammarLab } from "@/components/sanskrit-grammar-lab";
import { SanskritPractice } from "@/components/sanskrit-practice";
import { SanskritPronunciationLab } from "@/components/sanskrit-pronunciation-lab";
import { SanskritReadingLab } from "@/components/sanskrit-reading-lab";
import { SiteHeader } from "@/components/site-header";
import {
  devanagariRows,
  mahavakyas,
  sanskritCurriculum,
  sanskritProgram,
  sanskritPracticeItems,
  sanskritResources,
  vedantaVocabulary,
} from "@/content/sanskrit";
import { grammarTables, sanskritReadings, translationMethod } from "@/content/sanskrit-reading";
import { pronunciationExercises } from "@/content/sanskrit-pronunciation";
import { getCurrentStudent } from "@/lib/auth/current-student";

export const metadata = {
  title: "Sánscrito para Vedanta Advaita — Parabrahman",
  description: "Ruta progresiva para aprender escritura, pronunciación, gramática y lectura de sánscrito con enfoque vedántico.",
};

const studyCycle = [
  { time: "5 min", action: "Sonido", description: "Leer en voz lenta y distinguir longitud, aspiración y punto de articulación." },
  { time: "10 min", action: "Escritura", description: "Copiar pocas letras o palabras con atención a cada trazo y signo vocálico." },
  { time: "10 min", action: "Análisis", description: "Reconocer tema, terminación, sandhi y función antes de traducir." },
  { time: "5 min", action: "Vedanta", description: "Releer una expresión breve comprendiendo su construcción y contexto." },
] as const;

export default async function SanskritPage() {
  const student = await getCurrentStudent();

  return (
    <main className="min-h-screen bg-[#03070d] text-stone-100">
      <SiteHeader student={student} />

      <section className="relative isolate overflow-hidden border-b border-amber-100/10">
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_50%_20%,rgba(251,191,36,0.15),transparent_27%),radial-gradient(circle_at_85%_60%,rgba(56,189,248,0.1),transparent_30%),#03070d]" />
        <div lang="sa" aria-hidden="true" className="absolute left-1/2 top-4 -z-10 -translate-x-1/2 select-none text-[18rem] leading-none text-amber-200/[0.025] sm:text-[28rem]">ॐ</div>
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300/75">संस्कृतम् · saṃskṛtam</p>
          <h1 className="aurora-title mt-5 max-w-5xl text-4xl font-semibold leading-tight sm:text-6xl">
            Sánscrito para comprender Vedanta Advaita
          </h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-stone-300">
            Aprende a reconocer los sonidos, leer devanāgarī, utilizar IAST, analizar formas gramaticales y acercarte progresivamente a las fuentes sin depender únicamente de una traducción.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a href="#carrera" className="rounded-xl bg-amber-300 px-5 py-3 font-semibold text-stone-950 transition hover:bg-amber-200">Comenzar carrera automatizada</a>
            <a href="#gramatica" className="rounded-xl border border-amber-300/30 px-5 py-3 font-semibold text-amber-100 transition hover:bg-amber-300/10">Cuadros gramaticales</a>
            <a href="#pronunciacion" className="rounded-xl border border-violet-300/30 px-5 py-3 font-semibold text-violet-100 transition hover:bg-violet-300/10">Escuchar y pronunciar</a>
            <a href="#textos" className="rounded-xl border border-sky-300/30 px-5 py-3 font-semibold text-sky-100 transition hover:bg-sky-300/10">Laboratorio de textos</a>
          </div>
        </div>
      </section>

      <section id="pronunciacion" className="scroll-mt-24 border-y border-violet-100/10 bg-stone-950/65">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-violet-300/70">Laboratorio oral · escucha y micrófono</p>
          <h2 className="mt-3 max-w-4xl text-3xl font-semibold sm:text-4xl">Escuchar, grabarse y recibir una orientación inmediata</h2>
          <p className="mt-4 max-w-4xl leading-7 text-stone-400">
            Practica contrastes decisivos como vocal breve y larga, aspiración, anusvāra, visarga y grupos consonánticos. La grabación permite comparar tu voz; el reconocimiento automático ofrece una señal orientativa cuando el navegador admite sánscrito, sin reemplazar la corrección de un docente ni un modelo fonético especializado.
          </p>
          <div className="mt-10">
            <SanskritPronunciationLab exercises={pronunciationExercises} />
          </div>
        </div>
      </section>

      <section id="gramatica" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-20 sm:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-300/70">Gramática sistemática · cuadros interactivos</p>
        <h2 className="mt-3 max-w-4xl text-3xl font-semibold sm:text-4xl">Las reglas que permiten analizar antes de traducir</h2>
        <p className="mt-4 max-w-4xl leading-7 text-stone-400">
          Los paradigmas reúnen casos, pronombres, verbos, sandhi y compuestos. El último cuadro compara el sánscrito védico con el clásico: la base clásica sirve como instrumento, pero cada texto arcaico exige reconocer sus propias formas y acentos.
        </p>
        <div className="mt-10">
          <SanskritGrammarLab tables={grammarTables} />
        </div>
      </section>

      <section className="border-y border-sky-100/10 bg-stone-950/65">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-300/70">Método de traducción</p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Seis operaciones, en el orden correcto</h2>
          <p className="mt-4 max-w-3xl leading-7 text-stone-400">Transliterar no es traducir, y traducir no es todavía interpretar. La ruta separa estas operaciones para que el alumno pueda justificar cada decisión.</p>
          <ol className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {translationMethod.map((item) => (
              <li key={item.step} className="rounded-2xl border border-sky-300/10 bg-sky-300/[0.025] p-5">
                <div className="flex items-center gap-3"><span className="grid size-9 place-items-center rounded-full border border-sky-300/25 font-serif text-sky-100">{item.step}</span><h3 className="font-semibold text-stone-100">{item.title}</h3></div>
                <p className="mt-3 text-sm leading-6 text-stone-400">{item.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="textos" className="mx-auto max-w-[90rem] scroll-mt-24 px-5 py-20 sm:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300/70">Corpus histórico · lectura asistida</p>
        <h2 className="mt-3 max-w-5xl text-3xl font-semibold sm:text-4xl">Del Ṛgveda a la enseñanza advaita moderna</h2>
        <p className="mt-4 max-w-4xl leading-7 text-stone-400">
          Cada módulo reúne el original en devanāgarī, su transliteración IAST, una traducción pedagógica y el análisis de formas decisivas. Puedes ocultar la traducción para resolver primero la gramática y abrir la fuente completa cuando necesites contexto.
        </p>
        <div className="mt-10">
          <SanskritReadingLab readings={sanskritReadings} />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <article className="luminous-card rounded-3xl border border-amber-200/10 bg-stone-900/60 p-7 sm:p-9">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-300/70">Objetivo realista</p>
            <h2 className="mt-3 text-3xl font-semibold">Leer con comprensión</h2>
            <p className="mt-4 leading-7 text-stone-400">La meta inicial no es hablar con fluidez ni memorizar todas las formas, sino poder reconocer cómo se construye un pasaje, consultar herramientas y seguir una explicación tradicional con mayor precisión.</p>
          </article>
          <article className="rounded-3xl border border-sky-200/10 bg-sky-300/[0.035] p-7 sm:p-9">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-300/70">Rutina sugerida · 30 minutos</p>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {studyCycle.map((step) => (
                <div key={step.action} className="rounded-2xl border border-stone-800 bg-black/20 p-4">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="font-semibold text-sky-100">{step.action}</h3>
                    <span className="text-xs text-stone-500">{step.time}</span>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-stone-400">{step.description}</p>
                </div>
              ))}
            </div>
          </article>
        </div>
      </section>

      <section id="carrera" className="scroll-mt-24 border-y border-amber-100/10 bg-stone-950/65">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-300/70">4 ciclos · 12 clases · avance secuencial</p>
          <h2 className="mt-3 max-w-4xl text-3xl font-semibold sm:text-4xl">Trayecto automatizado de Sánscrito para Vedanta Advaita</h2>
          <p className="mt-4 max-w-4xl leading-7 text-stone-400">
            Cada clase declara su clasificación, objetivo, contenidos y logro verificable. Una evaluación breve comprueba el concepto central y desbloquea la siguiente clase. La automatización organiza el estudio; la pronunciación, las traducciones complejas y la interpretación tradicional seguirán necesitando revisión humana competente.
          </p>
          <div className="mt-10">
            <SanskritCareer program={sanskritProgram} />
          </div>
        </div>
      </section>

      <section id="ruta" className="scroll-mt-24 border-y border-amber-100/10 bg-stone-950/65">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-300/70">Mapa académico de referencia</p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Ocho áreas que ordenan el aprendizaje</h2>
          <p className="mt-4 max-w-3xl leading-7 text-stone-400">Este mapa resume las capacidades acumulativas. La carrera automatizada anterior las distribuye en clases evaluables y logros de ciclo.</p>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {sanskritCurriculum.map((unit) => (
              <article key={unit.order} className="luminous-card grid gap-5 rounded-3xl border border-stone-800 bg-stone-900/55 p-6 sm:grid-cols-[54px_1fr] sm:p-7">
                <span className="grid size-12 place-items-center rounded-full border border-amber-300/25 font-serif text-xl text-amber-200">{unit.order}</span>
                <div>
                  <h3 className="text-xl font-semibold">{unit.title}</h3>
                  <p className="mt-3 leading-7 text-stone-400">{unit.objective}</p>
                  <p className="mt-4 text-sm leading-6 text-stone-500"><span className="text-amber-200/70">Práctica:</span> {unit.practice}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-300/70">Mapa inicial de escritura</p>
        <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Devanāgarī e IAST</h2>
        <p className="mt-4 max-w-3xl leading-7 text-stone-400">Cada consonante aislada incluye una <em>a</em> inherente: क se lee <em>ka</em>. Los signos vocálicos modifican esa vocal y el virāma la elimina. IAST conserva distinciones esenciales: ā no es a, ṭ no es t y ṣ no es ś.</p>
        <div className="mt-9 overflow-hidden rounded-3xl border border-stone-800">
          {devanagariRows.map((row) => (
            <div key={row.group} className="grid gap-4 border-b border-stone-800 bg-stone-900/45 p-5 last:border-0 sm:grid-cols-[150px_1fr] sm:p-6">
              <h3 className="font-semibold text-sky-100">{row.group}</h3>
              <div className="flex flex-wrap gap-3">
                {row.letters.map((letter) => <span key={letter} lang="sa" className="rounded-lg border border-stone-700 bg-black/25 px-3 py-2 text-lg text-stone-200">{letter}</span>)}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-emerald-100/10 bg-stone-950/65">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300/70">Lectura con contexto</p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Cuatro mahāvākyas</h2>
          <p className="mt-4 max-w-3xl leading-7 text-stone-400">Estas expresiones no se reducen a consignas. La lengua ayuda a reconocer sus términos; su enseñanza requiere contexto upaniṣádico y explicación competente.</p>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {mahavakyas.map((statement) => (
              <article key={statement.iast} className="rounded-3xl border border-emerald-200/10 bg-emerald-300/[0.03] p-7">
                <p lang="sa" className="text-3xl text-emerald-100 sm:text-4xl">{statement.devanagari}</p>
                <p className="mt-4 text-lg font-medium text-stone-200">{statement.iast}</p>
                <p className="mt-2 text-stone-400">{statement.meaning}</p>
                <p className="mt-4 text-xs uppercase tracking-[0.14em] text-stone-600">{statement.source}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="practica" className="mx-auto max-w-7xl scroll-mt-24 px-5 py-20 sm:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-300/70">Laboratorio inicial</p>
        <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">Practicar vocabulario y escritura</h2>
        <p className="mt-4 mb-9 max-w-3xl leading-7 text-stone-400">Las tarjetas introducen el significado contextual; el ejercicio comprueba reconocimiento, no comprensión filosófica completa.</p>
        <SanskritPractice vocabulary={vedantaVocabulary} questions={sanskritPracticeItems} />
      </section>

      <section className="border-t border-amber-100/10 bg-stone-950/65">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-sky-300/70">Herramientas externas</p>
          <h2 className="mt-3 text-3xl font-semibold">Recursos para estudiar con rigor</h2>
          <div className="mt-8 grid gap-4">
            {sanskritResources.map((resource) => (
              <a key={resource.url} href={resource.url} target="_blank" rel="noreferrer" className="rounded-2xl border border-stone-800 bg-stone-900/50 p-5 transition hover:border-sky-300/30 sm:p-6">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <h3 className="font-semibold text-stone-100">{resource.title}</h3>
                  <span className="text-sm text-stone-500">{resource.provider} ↗</span>
                </div>
                <p className="mt-3 text-sm leading-6 text-stone-400">{resource.use}</p>
              </a>
            ))}
          </div>
          <p className="mt-7 rounded-2xl border border-amber-300/15 bg-amber-300/5 px-5 py-4 text-sm leading-6 text-amber-100/75">Próximo incremento académico: sustituir progresivamente la voz sintética por audios humanos revisados, añadir ejercicios de escritura manuscrita, ampliar paradigmas y sincronizar el avance con la cuenta del alumno. La evaluación automática actual reconoce palabras; no certifica fonética ni recitación védica.</p>
        </div>
      </section>
    </main>
  );
}
