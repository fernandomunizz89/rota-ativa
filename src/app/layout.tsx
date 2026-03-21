import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/JsonLd";

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://rotaativa.pt'),
  title: 'Rota Ativa | Mediação Imobiliária Personalizada e Curadoria de Imóveis',
  description: 'Abordagem exclusiva e consultoria dedicada na busca do seu imóvel. Na Rota Ativa, focamos na sua necessidade com um serviço de mediação sob medida.',
  keywords: ['boutique imobiliária', 'mediação imobiliária personalizada', 'curadoria de imóveis', 'Portugal', 'luxury real estate Portugal', 'atendimento exclusivo'],
  authors: [{ name: 'Rota Ativa' }],
  openGraph: {
    title: 'Rota Ativa | Mediação Imobiliária Personalizada',
    description: 'Abordagem exclusiva e consultoria dedicada na busca do seu imóvel. Descubra a nossa curadoria.',
    url: 'https://rotaativa.pt',
    siteName: 'Rota Ativa',
    images: [
      {
        url: '/images/hero.png',
        width: 1200,
        height: 630,
        alt: 'Rota Ativa - Mediação Imobiliária Personalizada',
      },
    ],
    locale: 'pt_PT',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-PT"
      className={`${playfair.variable} ${inter.variable} h-full antialiased relative`}
      suppressHydrationWarning={true}
    >
      <body className="min-h-full flex flex-col relative">
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
