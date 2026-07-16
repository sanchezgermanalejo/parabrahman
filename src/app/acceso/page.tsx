import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";

import emblem from "../../../public/brand/parabrahman-emblem.png";
import { getCurrentStudent } from "@/lib/auth/current-student";
import { hasSupabaseConfig } from "@/lib/supabase/config";

import { AuthForm } from "./auth-form";

export const metadata = {
  title: "Acceso de alumnos — Parabrahman",
};

type AccessPageProps = {
  searchParams: Promise<{
    confirmado?: string;
    contrasena?: string;
    error?: string;
    next?: string;
  }>;
};

export default async function AccessPage({ searchParams }: AccessPageProps) {
  const configured = hasSupabaseConfig();
  const query = await searchParams;
  const student = await getCurrentStudent();
  const nextPath =
    query.next?.startsWith("/") && !query.next.startsWith("//")
      ? query.next
      : "/";

  if (student) redirect(nextPath);

  return (
    <main className="min-h-screen bg-[#03070d] px-4 py-8 text-stone-100 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <header className="flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src={emblem}
              alt=""
              className="size-12 rounded-full border border-amber-300/30 object-cover"
              sizes="48px"
            />
            <div>
              <p className="font-serif tracking-[0.12em] text-amber-200">
                PARABRAHMAN
              </p>
              <p className="text-xs text-stone-500">
                Escuela de Vedanta Advaita
              </p>
            </div>
          </Link>
          <Link
            href="/"
            className="text-sm text-stone-400 transition hover:text-amber-200"
          >
            Volver al inicio
          </Link>
        </header>

        <section className="py-12 text-center sm:py-16">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-amber-300/70">
            Identidad y acceso
          </p>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Tu recorrido, siempre contigo.
          </h1>
          <p className="mx-auto mt-5 max-w-2xl leading-7 text-stone-400">
            Estudiar es gratuito y no exige una cuenta. Registrarte permitirá
            conservar avances y participar en las funciones personales.
          </p>
        </section>

        {!configured && (
          <div className="mb-6 rounded-2xl border border-amber-300/25 bg-amber-300/10 px-5 py-4 text-sm leading-6 text-amber-100">
            Interfaz lista para probar. Falta agregar localmente la URL y la
            clave publicable del proyecto Supabase; ninguna clave se guardará
            en GitHub.
          </div>
        )}

        {query.confirmado === "1" && (
          <div className="mb-6 rounded-2xl border border-emerald-300/25 bg-emerald-300/10 px-5 py-4 text-sm leading-6 text-emerald-100">
            Correo confirmado correctamente. Ya puedes continuar tu recorrido.
          </div>
        )}

        {query.contrasena === "actualizada" && (
          <div className="mb-6 rounded-2xl border border-emerald-300/25 bg-emerald-300/10 px-5 py-4 text-sm leading-6 text-emerald-100">
            Contraseña actualizada correctamente. Ya puedes ingresar.
          </div>
        )}

        {query.error === "confirmacion" && (
          <div className="mb-6 rounded-2xl border border-red-300/25 bg-red-300/10 px-5 py-4 text-sm leading-6 text-red-100">
            El enlace de confirmación no es válido o ya venció. Solicita uno
            nuevo desde Supabase antes de volver a intentarlo.
          </div>
        )}

        <section className="grid gap-5 md:grid-cols-2">
          <article className="luminous-card rounded-3xl border border-amber-100/10 bg-stone-900/70 p-6 shadow-xl shadow-black/20 sm:p-8">
            <AuthForm mode="signin" nextPath={nextPath} />
          </article>
          <article className="luminous-card rounded-3xl border border-amber-100/10 bg-[radial-gradient(circle_at_top_right,rgba(217,160,85,0.12),transparent_45%),rgba(28,25,23,0.72)] p-6 shadow-xl shadow-black/20 sm:p-8">
            <AuthForm mode="signup" nextPath={nextPath} />
          </article>
        </section>
      </div>
    </main>
  );
}
