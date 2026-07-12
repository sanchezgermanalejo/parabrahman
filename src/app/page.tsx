const foundations = [
  "Base técnica lista",
  "Supabase preparado",
  "Acceso libre definido",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-950 px-6 py-8 text-stone-100 sm:px-10 lg:px-16">
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl flex-col rounded-[2rem] border border-amber-100/10 bg-[radial-gradient(circle_at_top_right,rgba(217,160,85,0.16),transparent_38%),linear-gradient(145deg,#1c1917,#0c0a09)] p-7 shadow-2xl shadow-black/40 sm:p-12 lg:p-16">
        <header className="flex flex-col gap-2 border-b border-amber-100/10 pb-7 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-amber-300/80">
              Parabrahman
            </p>
            <p className="mt-2 text-sm text-stone-400">
              Escuela de Vedanta Advaita
            </p>
          </div>
          <p className="mt-4 text-xs uppercase tracking-[0.22em] text-stone-500 sm:mt-0">
            MVP · En construcción
          </p>
        </header>

        <section className="flex flex-1 flex-col justify-center py-16 lg:max-w-4xl">
          <p className="mb-6 text-sm font-medium text-amber-200/70">
            Universidad online interactiva
          </p>
          <h1 className="max-w-4xl text-5xl font-semibold leading-[1.02] tracking-[-0.045em] text-stone-50 sm:text-6xl lg:text-7xl">
            Conocimiento abierto, enseñanza viva.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-stone-300 sm:text-xl">
            Estamos construyendo una experiencia educativa gratuita y centrada
            en video para estudiar Vedanta Advaita con claridad, continuidad y
            comunidad.
          </p>

          <div className="mt-12 flex flex-wrap gap-3">
            {foundations.map((foundation) => (
              <span
                key={foundation}
                className="rounded-full border border-stone-700 bg-stone-900/70 px-4 py-2 text-sm text-stone-300"
              >
                <span className="mr-2 text-amber-400">●</span>
                {foundation}
              </span>
            ))}
          </div>
        </section>

        <footer className="flex flex-col gap-2 border-t border-amber-100/10 pt-6 text-sm text-stone-500 sm:flex-row sm:items-center sm:justify-between">
          <p>Primer módulo: identidad y acceso del alumno</p>
          <p>Contenido libre y gratuito</p>
        </footer>
      </div>
    </main>
  );
}
