import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rota Ativa | Mediação Imobiliária",
  description: "Descubra a excelência em mediação imobiliária com a Rota Ativa. Propriedades exclusivas, branding editorial e atendimento de elite.",
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
      <body className="min-h-full flex flex-col relative">{children}</body>
    </html>
  );
}
