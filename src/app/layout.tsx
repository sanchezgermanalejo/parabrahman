import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Parabrahman — Escuela de Vedanta Advaita",
  description:
    "Universidad online interactiva, gratuita y centrada en enseñanza mediante video.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
