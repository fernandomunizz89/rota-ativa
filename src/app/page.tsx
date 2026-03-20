"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Curadoria } from '@/components/Curadoria';
import { ContactForm } from '@/components/ContactForm';
import { FloatingActionHub } from '@/components/FloatingActionHub';
import { AboutUs } from '@/components/AboutUs';
import { PropertyModal } from '@/components/PropertyModal';
import { Logo } from '@/components/Logo';

export default function Home() {
  const [selectedProperty, setSelectedProperty] = useState<{ title: string, category: string, image: string, location: string, area: string } | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenProperty = (property: { title: string, category: string, image: string, location: string, area: string }) => {
    setSelectedProperty(property);
    setIsModalOpen(true);
  };

  return (
    <main className="relative min-h-screen bg-off-white selection:bg-gold selection:text-forest">
      <Header />

      <Hero />

      <section id="a-marca" className="py-32 bg-forest text-off-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gold/5 blur-[120px] rounded-full" />
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="aspect-[4/5] bg-deep-black overflow-hidden shadow-2xl relative">
              <Image
                src="/images/hero.png"
                alt="Rota Ativa - Excelência Imobiliária e Mediação personalizada em Portugal"
                fill
                className="object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-1000"
                priority
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 border border-gold/30 hidden md:block" />
          </div>

          <div>
            <span className="text-gold font-sans text-xs uppercase tracking-[0.5em] mb-6 block">A Nossa Identidade</span>
            <h2 className="font-serif text-5xl md:text-7xl mb-10 leading-tight">
              Excelência <br />
              <span className="text-gold">Imobiliária.</span>
            </h2>
            <div className="space-y-6 text-off-white/70 font-sans text-lg leading-relaxed max-w-xl">
              <p>
                A Rota Ativa nasceu da necessidade de elevar o padrão da mediação imobiliária em Portugal. Não somos apenas uma agência; somos curadores de estilo de vida.
              </p>
              <p>
                Nosso diferencial está no atendimento personalizado, pensado para entender e atender exatamente o que cada cliente precisa, sempre com discrição e uma sólida rede de contactos.
              </p>
              <p className="font-serif italic text-gold text-2xl pt-6">
                "Onde a exclusividade encontra a sua rota."
              </p>
            </div>
          </div>
        </div>
      </section>

      <AboutUs />

      {/* Wrapping Curadoria to handle clicks */}
      <div
        onClick={(e) => {
          const card = (e.target as HTMLElement).closest('[data-property]');
          if (card) {
            const title = card.getAttribute('data-title')!;
            const category = card.getAttribute('data-category')!;
            const image = card.getAttribute('data-image')!;
            const location = card.getAttribute('data-location')!;
            const area = card.getAttribute('data-area')!;
            handleOpenProperty({ title, category, image, location, area });
          }
        }}
        className="cursor-pointer relative"
      >
        <Curadoria />
      </div>

      <ContactForm />

      <footer className="bg-deep-black py-20 border-t border-gold/10">
        <div className="container mx-auto px-6 flex flex-col items-center">
          <Logo className="w-48 h-48 mb-8" />
          <div className="flex gap-10 mb-12">
            {[
              { name: 'Instagram', href: 'https://www.instagram.com/rotaativa.pt/' },
            ].map(social => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-off-white/40 hover:text-gold transition-colors font-sans text-xs uppercase tracking-widest"
              >
                {social.name}
              </a>
            ))}
          </div>
          <p className="text-off-white/40 font-sans text-xs uppercase tracking-widest text-center">
            © 2026 Rota Ativa Mediação Imobiliária. <br />
            Todos os direitos reservados.
          </p>
        </div>
      </footer>

      <FloatingActionHub />

      <PropertyModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        property={selectedProperty}
      />
    </main>
  );
}
