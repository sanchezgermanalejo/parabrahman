import Link from "next/link";

import { RecoveryForm } from "./recovery-form";

export const metadata = {
  title: "Recuperar contraseña — Parabrahman",
};

export default function RecoveryPage() {
  return (
    <main className="grid min-h-screen place-items-center bg-[#03070d] px-4 py-10 text-stone-100">
      <section className="luminous-card w-full max-w-lg rounded-3xl border border-amber-100/10 bg-[radial-gradient(circle_at_top_right,rgba(217,160,85,0.12),transparent_45%),rgba(28,25,23,0.8)] p-7 shadow-2xl shadow-black/30 sm:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-300/70">
          Parabrahman
        </p>
        <h1 className="mt-3 text-3xl font-semibold">Recuperar contraseña</h1>
        <p className="mt-3 leading-7 text-stone-400">
          Te enviaremos un enlace de un solo uso. Por seguridad, el mensaje no
          revelará si el correo está registrado.
        </p>
        <div className="mt-8">
          <RecoveryForm />
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
