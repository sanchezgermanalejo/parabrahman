import Image from "next/image";
import Link from "next/link";

import emblem from "../../public/brand/parabrahman-emblem.png";
import type { CurrentStudent } from "@/lib/auth/current-student";

type SiteHeaderProps = {
  student: CurrentStudent | null;
};

export function SiteHeader({ student }: SiteHeaderProps) {
  return (
    <header className="site-header-glow sticky top-0 z-40 border-b border-amber-100/10 bg-[#03070d]/88 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-4 py-3 sm:px-8">
        <Link href="/" className="flex min-w-0 items-center gap-3">
          <Image
            src={emblem}
            alt="Emblema Om de Parabrahman"
            className="sacred-emblem size-11 shrink-0 rounded-full border border-amber-300/30 object-cover"
            sizes="44px"
          />
          <div className="min-w-0">
            <p className="truncate font-serif text-base tracking-[0.11em] text-amber-200 sm:text-lg">
              PARABRAHMAN
            </p>
            <p className="hidden text-xs text-stone-400 sm:block">
              Escuela de Vedanta Advaita
            </p>
          </div>
        </Link>

        <nav
          className="hidden items-center gap-3 text-sm text-stone-300 md:flex"
          aria-label="Navegación principal"
        >
          <Link href="/cursos" className="nav-glow transition hover:text-amber-200">
            Ruta de aprendizaje
          </Link>
          <Link href="/biblioteca" className="nav-glow transition hover:text-violet-200">
            Biblioteca
          </Link>
          <Link href="/tradicion" className="nav-glow transition hover:text-amber-200">
            Tradición
          </Link>
          <Link href="/metafisica" className="nav-glow transition hover:text-violet-200">
            Metafísica
          </Link>
          <Link href="/sanscrito" className="nav-glow transition hover:text-emerald-200">
            Sánscrito
          </Link>
          <Link href="/comunidad" className="nav-glow transition hover:text-sky-200">
            Comunidad
          </Link>
        </nav>

        <Link
          href={student ? "/cuenta" : "/acceso"}
          className="shrink-0 rounded-full border border-amber-300/30 px-3 py-2 text-sm text-amber-100 transition hover:border-amber-300/60 hover:bg-amber-300/10 sm:px-4"
        >
          {student
            ? student.fullName
              ? `Alumno ${student.fullName}`
              : "Completar perfil"
            : "Acceder"}
        </Link>
      </div>
      <nav
        className="mx-auto flex max-w-7xl justify-center gap-6 overflow-x-auto px-4 pb-3 text-xs text-stone-400 md:hidden"
        aria-label="Navegación móvil"
      >
        <Link href="/cursos">Ruta</Link>
        <Link href="/biblioteca" className="text-violet-200">Biblioteca</Link>
        <Link href="/tradicion" className="text-amber-200">Tradición</Link>
        <Link href="/metafisica" className="text-violet-200">Metafísica</Link>
        <Link href="/sanscrito" className="text-emerald-200">Sánscrito</Link>
        <Link href="/comunidad" className="text-sky-200">Comunidad</Link>
      </nav>
    </header>
  );
}
