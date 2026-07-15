"use client";

import { useEffect, useState } from "react";
import type { SanskritProgramLevel } from "@/content/sanskrit";

const storageKey = "parabrahman:sanskrit-program:v1";

export function SanskritCareer({ program }: { program: readonly SanskritProgramLevel[] }) {
  const courses = program.flatMap((level) => level.courses);
  const [completed, setCompleted] = useState<string[]>([]);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      try {
        const saved = window.localStorage.getItem(storageKey);
        if (saved) {
          const parsed: unknown = JSON.parse(saved);
          if (Array.isArray(parsed)) setCompleted(parsed.filter((item): item is string => typeof item === "string"));
        }
      } catch {
        // La ruta sigue disponible aunque el navegador bloquee almacenamiento local.
      }
      setHydrated(true);
    }, 0);

    return () => window.clearTimeout(timer);
  }, []);

  function save(next: string[]) {
    setCompleted(next);
    try {
      window.localStorage.setItem(storageKey, JSON.stringify(next));
    } catch {
      // El progreso queda activo durante la sesión si no puede persistirse.
    }
  }

  function approve(code: string) {
    if (!completed.includes(code)) save([...completed, code]);
  }

  function reset() {
    if (!window.confirm("¿Reiniciar todo el progreso local de la ruta de sánscrito?")) return;
    save([]);
    setAnswers({});
  }

  const percent = Math.round((completed.length / courses.length) * 100);

  return (
    <div>
      <section className="rounded-3xl border border-amber-300/15 bg-[radial-gradient(circle_at_15%_20%,rgba(251,191,36,0.09),transparent_35%),rgba(20,20,20,0.6)] p-6 sm:p-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-300/70">Panel de trayectoria</p>
            <h3 className="mt-3 text-2xl font-semibold">{hydrated ? `${completed.length} de ${courses.length} clases aprobadas` : "Cargando tu avance…"}</h3>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-stone-400">
              El avance se conserva en este navegador durante el MVP. Es un trayecto formativo de Parabrahman, no un título universitario ni una certificación oficial de dominio lingüístico.
            </p>
          </div>
          <button type="button" onClick={reset} className="self-start rounded-full border border-stone-700 px-4 py-2 text-sm text-stone-400 transition hover:border-rose-300/35 hover:text-rose-200 lg:self-auto">
            Reiniciar progreso
          </button>
        </div>
        <div className="mt-7 h-2 overflow-hidden rounded-full bg-stone-800" aria-label={`${percent}% completado`}>
          <div className="h-full rounded-full bg-gradient-to-r from-amber-300 via-sky-300 to-emerald-300 transition-[width] duration-500" style={{ width: `${percent}%` }} />
        </div>
        <div className="mt-3 flex items-center justify-between text-xs text-stone-500"><span>Inicio</span><span>{percent}% completado</span><span>Lectura integrada</span></div>
      </section>

      <div className="mt-10 grid gap-10">
        {program.map((level) => {
          const levelComplete = level.courses.every((course) => completed.includes(course.code));
          return (
            <section key={level.id} className="rounded-3xl border border-stone-800 bg-stone-900/35 p-5 sm:p-8">
              <div className="flex flex-col gap-5 border-b border-stone-800 pb-7 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.17em] text-sky-300/65">Ciclo {level.order} · {level.classification}</p>
                  <h3 className="mt-3 text-2xl font-semibold">{level.title}</h3>
                  <p className="mt-3 max-w-3xl leading-7 text-stone-400">{level.goal}</p>
                </div>
                <span className={`shrink-0 rounded-full border px-4 py-2 text-sm ${levelComplete ? "border-emerald-300/40 bg-emerald-300/10 text-emerald-100" : "border-stone-700 text-stone-500"}`}>
                  {levelComplete ? `Logro obtenido: ${level.badge}` : `Logro: ${level.badge}`}
                </span>
              </div>

              <div className="mt-7 grid gap-5">
                {level.courses.map((course) => {
                  const globalIndex = courses.findIndex((item) => item.code === course.code);
                  const previous = courses[globalIndex - 1];
                  const unlocked = globalIndex === 0 || completed.includes(previous.code);
                  const passed = completed.includes(course.code);
                  const selected = answers[course.code];
                  const correct = selected === course.assessment.answer;

                  return (
                    <article key={course.code} className={`rounded-2xl border p-5 sm:p-6 ${passed ? "border-emerald-300/25 bg-emerald-300/[0.035]" : unlocked ? "border-amber-300/15 bg-black/20" : "border-stone-800 bg-black/10 opacity-65"}`}>
                      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                        <div>
                          <div className="flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.14em]">
                            <span className="text-amber-300/70">{course.code}</span>
                            <span className="text-stone-700">·</span>
                            <span className="text-sky-300/60">{course.classification}</span>
                            <span className="text-stone-700">·</span>
                            <span className="text-stone-500">{course.duration}</span>
                          </div>
                          <h4 className="mt-3 text-xl font-semibold text-stone-100">{course.title}</h4>
                        </div>
                        <span className={`rounded-full px-3 py-1.5 text-xs font-medium ${passed ? "bg-emerald-300/12 text-emerald-200" : unlocked ? "bg-amber-300/10 text-amber-200" : "bg-stone-800 text-stone-500"}`}>
                          {passed ? "Aprobada" : unlocked ? "Disponible" : `Requiere ${previous.code}`}
                        </span>
                      </div>

                      <div className="mt-5 grid gap-4 lg:grid-cols-2">
                        <div className="rounded-xl border border-stone-800 p-4">
                          <p className="text-xs font-semibold uppercase tracking-[0.13em] text-stone-500">Objetivo</p>
                          <p className="mt-2 text-sm leading-6 text-stone-300">{course.objective}</p>
                        </div>
                        <div className="rounded-xl border border-stone-800 p-4">
                          <p className="text-xs font-semibold uppercase tracking-[0.13em] text-stone-500">Logro verificable</p>
                          <p className="mt-2 text-sm leading-6 text-stone-300">{course.achievement}</p>
                        </div>
                      </div>

                      <div className="mt-5">
                        <p className="text-xs font-semibold uppercase tracking-[0.13em] text-stone-500">Clases automatizadas</p>
                        <ol className="mt-3 grid gap-2 sm:grid-cols-2">
                          {course.lessons.map((lesson, index) => <li key={lesson} className="rounded-lg border border-stone-800 px-3 py-2 text-sm text-stone-400"><span className="mr-2 text-amber-300/60">{index + 1}.</span>{lesson}</li>)}
                        </ol>
                      </div>

                      {unlocked && !passed && (
                        <div className="mt-6 rounded-2xl border border-sky-300/15 bg-sky-300/[0.025] p-5">
                          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-sky-300/70">Evaluación de avance</p>
                          <p className="mt-3 font-medium text-stone-200">{course.assessment.prompt}</p>
                          <div className="mt-4 grid gap-2 sm:grid-cols-2">
                            {course.assessment.options.map((option) => (
                              <button key={option} type="button" disabled={Boolean(selected)} onClick={() => setAnswers((current) => ({ ...current, [course.code]: option }))} className={`rounded-xl border px-4 py-3 text-left text-sm transition ${selected === option ? correct ? "border-emerald-300/50 bg-emerald-300/10 text-emerald-100" : "border-rose-300/45 bg-rose-300/10 text-rose-100" : "border-stone-700 text-stone-400 hover:border-sky-300/35"}`}>
                                {option}
                              </button>
                            ))}
                          </div>
                          {selected && (
                            <div className="mt-4">
                              <p className={`text-sm font-semibold ${correct ? "text-emerald-200" : "text-rose-200"}`}>{correct ? "Respuesta correcta" : "Todavía no"}</p>
                              <p className="mt-2 text-sm leading-6 text-stone-400">{course.assessment.explanation}</p>
                              {correct ? (
                                <button type="button" onClick={() => approve(course.code)} className="mt-4 rounded-xl bg-emerald-300 px-4 py-2.5 text-sm font-semibold text-stone-950 transition hover:bg-emerald-200">Aprobar clase y desbloquear la siguiente</button>
                              ) : (
                                <button type="button" onClick={() => setAnswers((current) => ({ ...current, [course.code]: "" }))} className="mt-4 rounded-xl border border-stone-700 px-4 py-2.5 text-sm font-semibold text-stone-300 transition hover:border-stone-500">Reintentar</button>
                              )}
                            </div>
                          )}
                        </div>
                      )}
                    </article>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
