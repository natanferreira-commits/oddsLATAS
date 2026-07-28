import type { Metadata } from "next";
import { Anton, Inter } from "next/font/google";
import "./globals.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap"
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Vitor ZZ · Grupo de Odds Altas",
  description:
    "Entre no grupo do Vitor ZZ. Análise diária, bilhete todo dia e comunidade forte que respira futebol.",
  robots: { index: false, follow: false }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${anton.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
