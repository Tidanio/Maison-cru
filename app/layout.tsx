import type { Metadata } from "next";
import { Bodoni_Moda, Jost } from "next/font/google";
import "./globals.css";

// High-contrast didone display face — the couture/editorial voice.
const bodoni = Bodoni_Moda({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bodoni",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

// Clean geometric sans for UI, labels and body copy.
const jost = Jost({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-jost",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Maison Écru — Haute Couture, Quietly Stated",
  description:
    "Maison Écru is a high-end fashion house. Editorial silhouettes in a restrained palette of ink, écru and stone.",
  openGraph: {
    title: "Maison Écru",
    description: "Haute couture, quietly stated.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${bodoni.variable} ${jost.variable}`}>
      <body className="min-h-dvh antialiased">{children}</body>
    </html>
  );
}
