import Link from "next/link";
import { redirect } from "next/navigation";

import { getCurrentStudent } from "@/lib/auth/current-student";

import { signOutFromAccount } from "./actions";
import { ProfileForm } from "./profile-form";

export const metadata = {
  title: "Mi cuenta — Parabrahman",
};

export default async function AccountPage() {
  const student = await getCurrentStudent();

  if (!student) redirect("/acceso");

  return (
    <main className="grid min-h-screen place-items-center bg-[#03070d] px-4 py-10 text-stone-100">
      <section className="luminous-card w-full max-w-lg rounded-3xl border border-amber-100/10 bg-[radial-gradient(circle_at_top_right,rgba(217,160,85,0.12),transparent_45%),rgba(28,25,23,0.82)] p-7 shadow-2xl shadow-black/30 sm:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-300/70">
          Mi cuenta
        </p>
        <h1 className="mt-3 text-3xl font-semibold">Perfil del alumno</h1>
        <p className="mt-3 text-sm text-stone-400">{student.email}</p>
        <p className="mt-4 leading-7 text-stone-400">
          Este nombre aparecerá en la cabecera y en tu futuro panel de estudio.
        </p>

        <div className="mt-8">
          <ProfileForm defaultName={student.fullName} />
        </div>

        <div className="mt-7 flex items-center justify-between gap-4 border-t border-stone-800 pt-6">
          <Link
            href="/"
            className="text-sm text-stone-400 transition hover:text-amber-200"
          >
            Volver al inicio
          </Link>
          <form action={signOutFromAccount}>
            <button
              className="text-sm text-red-300/80 transition hover:text-red-200"
              type="submit"
            >
              Cerrar sesión
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
