import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/content";

// Fonts are loaded via next/font so they're self-hosted, cached, and
// don't cause layout shift — same visual result as the original Google
// Fonts <link>, but optimized automatically by Next.js.
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-cormorant",
  display: "swap",
});

const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata: Metadata = {
  // metadataBase avoids a Next.js build warning about relative Open Graph
  // URLs; update this once the production domain is known.
  metadataBase: new URL("https://vionnetpaysage.com"),
  title: `${siteConfig.name} — ${siteConfig.tagline}`,
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${cormorant.variable} ${jost.variable}`}>
      <body className="font-sans text-ink bg-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
