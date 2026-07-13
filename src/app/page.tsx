import Image from "next/image";
import emblem from "../../public/brand/parabrahman-emblem.png";
import hero from "../../public/brand/parabrahman-hero.png";

const foundations = [
  "Base técnica lista",
  "Supabase preparado",
  "Acceso libre definido",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#03070d] px-4 py-4 text-stone-100 sm:px-8 sm:py-8 lg:px-12">
      <div className="mx-auto flex min-h-[calc(100vh-2rem)] max-w-7xl flex-col overflow-hidden rounded-[1.75rem] border border-amber-300/20 bg-[radial-gradient(circle_at_top,rgba(24,67,111,0.22),transparent_40%),linear-gradient(145deg,#10151d,#050608)] shadow-2xl shadow-black/60 sm:min-h-[calc(100vh-4rem)]">
        <header className="flex items-center justify-between gap-4 border-b border-amber-100/10 px-5 py-4 sm:px-8">
          <div className="flex items-center gap-3">
            <Image
              src={emblem}
              alt="Emblema Om dorado de Parabrahman"
              className="size-12 rounded-full border border-amber-300/30 object-cover shadow-lg shadow-amber-500/10 sm:size-14"
              sizes="(min-width: 640px) 56px, 48px"
            />
            <div>
              <p className="font-serif text-lg tracking-[0.12em] text-amber-200 sm:text-xl">
                PARABRAHMAN
              </p>
              <p className="mt-0.5 text-xs text-stone-400">
                Escuela de Vedanta Advaita
              </p>
            </div>
          </div>
          <p className="hidden text-xs uppercase tracking-[0.22em] text-stone-500 sm:block">
            MVP · En construcción
          </p>
        </header>

        <section className="border-b border-amber-100/10 bg-black">
          <Image
            src={hero}
            alt="Portada institucional de Parabrahman con el mantra Tat Tvam Asi, Tú eres Eso"
            className="hidden h-auto w-full sm:block"
            sizes="(min-width: 1280px) 1216px, 100vw"
            preload
          />
          <div className="relative mx-auto aspect-square max-w-md sm:hidden">
            <Image
              src={emblem}
              alt="Símbolo Om dorado, emblema de Parabrahman"
              fill
              className="object-cover"
              sizes="100vw"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/70 to-transparent px-6 pb-6 pt-24 text-center">
              <p className="font-serif text-3xl tracking-[0.14em] text-amber-100">
                PARABRAHMAN
              </p>
              <p className="mt-2 text-sm tracking-wide text-amber-200/80">
                Escuela de Vedanta Advaita
              </p>
            </div>
          </div>
        </section>

        <section className="grid flex-1 gap-10 px-6 py-10 sm:px-10 lg:grid-cols-[1fr_auto] lg:items-end lg:px-14 lg:py-12">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-amber-300/70">
              Universidad online interactiva
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold leading-tight tracking-[-0.035em] text-stone-50 sm:text-5xl">
              Conocimiento abierto, enseñanza viva.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-stone-300 sm:text-lg">
              Una experiencia educativa gratuita y centrada en video para
              estudiar Vedanta Advaita con claridad, continuidad y comunidad.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 lg:max-w-sm lg:justify-end">
            {foundations.map((foundation) => (
              <span
                key={foundation}
                className="rounded-full border border-amber-200/15 bg-black/30 px-4 py-2 text-sm text-stone-300"
              >
                <span className="mr-2 text-amber-400" aria-hidden="true">
                  ●
                </span>
                {foundation}
              </span>
            ))}
          </div>
        </section>

        <footer className="flex flex-col gap-2 border-t border-amber-100/10 px-6 py-5 text-sm text-stone-500 sm:flex-row sm:items-center sm:justify-between sm:px-10 lg:px-14">
          <p>Primer módulo: identidad y acceso del alumno</p>
          <p>Contenido libre y gratuito</p>
        </footer>
      </div>
    </main>
  );
}
