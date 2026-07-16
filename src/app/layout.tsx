import type { Metadata } from "next";

import { SupportDock } from "@/components/support-dock";

import "./globals.css";

export const metadata: Metadata = {
  title: "Parabrahman — Escuela de Vedanta Advaita",
  description:
    "Escuela online interactiva, gratuita y centrada en enseñanza mediante video.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(
    /\D/g,
    "",
  );

  return (
    <html lang="es" className="h-full antialiased">
      <body className="min-h-full flex flex-col">
        {children}
        <SupportDock whatsappNumber={whatsappNumber} />
      </body>
    </html>
  );
}
