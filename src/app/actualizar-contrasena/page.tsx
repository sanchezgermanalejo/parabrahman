import Link from "next/link";

import { PasswordForm } from "./password-form";

export const metadata = {
  title: "Nueva contraseña — Parabrahman",
};

export default function UpdatePasswordPage() {
  return (
    <main className="grid min-h-screen place-items-center bg-[#03070d] px-4 py-10 text-stone-100">
      <section className="luminous-card w-full max-w-lg rounded-3xl border border-amber-100/10 bg-stone-900/80 p-7 shadow-2xl shadow-black/30 sm:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-300/70">
          Parabrahman
        </p>
        <h1 className="mt-3 text-3xl font-semibold">Crear nueva contraseña</h1>
        <p className="mt-3 leading-7 text-stone-400">
          Elige al menos 8 caracteres. La nueva contraseña se enviará de forma
          segura directamente a Supabase.
        </p>
        <div className="mt-8">
          <PasswordForm />
        </div>
        <Link
          href="/acceso"
          className="mt-6 inline-block text-sm text-stone-400 transition hover:text-amber-200"
        >
          Volver al acceso
        </Link>
      </section>
    </main>
  );
}
