"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Curadoria } from '@/components/Curadoria';
import { ContactForm } from '@/components/ContactForm';
import { FloatingActionHub } from '@/components/FloatingActionHub';
import { AboutUs } from '@/components/AboutUs';
import { Partnerships } from '@/components/Partnerships';
import { PropertyModal } from '@/components/PropertyModal';
import { Logo } from '@/components/Logo';
import { Property, properties } from '@/data/properties';

export default function Home() {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenProperty = (propertyId: string) => {
    const property = properties.find(p => p.id === propertyId);
    if (property) {
      setSelectedProperty(property);
      setIsModalOpen(true);
    }
  };

  return (
    <main className="relative min-h-screen bg-off-white selection:bg-gold selection:text-forest">
      <Header />

      <Hero />

      <section id="a-marca" className="py-16 lg:py-32 bg-forest text-off-white relative overflow-hidden [@media(max-height:800px)]:py-16">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gold/5 blur-[120px] rounded-full" />
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative">
            <div className="aspect-[4/5] bg-deep-black overflow-hidden shadow-2xl relative [@media(max-height:800px)]:max-w-[70%] [@media(max-height:800px)]:mx-auto">
              <motion.div
                initial={{ filter: 'grayscale(100%)', opacity: 0.6 }}
                whileInView={{ 
                  filter: 'grayscale(0%)', 
                  opacity: 1,
                  transition: { duration: 5, ease: "easeOut" } 
                }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 1.5, ease: "easeIn" }}
                className="w-full h-full relative"
              >
                <Image
                  src="/images/hero.png"
                  alt="Rota Ativa - Excelência Imobiliária e Mediação personalizada em Portugal"
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
            </div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 border border-gold/30 hidden md:block [@media(max-height:800px)]:hidden" />
          </div>

          <div>
            <span className="text-gold font-sans text-[10px] sm:text-xs uppercase tracking-[0.5em] mb-4 lg:mb-6 block [@media(max-height:800px)]:mb-2">Quem Somos</span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-7xl mb-6 lg:mb-10 leading-tight [@media(max-height:800px)]:text-5xl [@media(max-height:800px)]:mb-4">
              Abordagem <br />
              <span className="text-gold">Estratégica.</span>
            </h2>
            <div className="space-y-4 lg:space-y-6 text-off-white/70 font-sans text-base lg:text-lg leading-relaxed max-w-xl [@media(max-height:800px)]:text-sm [@media(max-height:800px)]:space-y-2">
              <p>
                A Rota Ativa atua como uma estrutura de inteligência imobiliária. Com mais de uma década de know-how no Brasil e em Portugal, compreendemos em profundidade a diversidade de perfis e a dinâmica do mercado.
              </p>
              <p>
                Em vez de lidar com múltiplos consultores e propostas desalinhadas, centralizamos o seu processo. Filtramos desde residências ao off-market, passando por hotéis e terrenos, para lhe apresentar as propostas com mais assertividade.
              </p>
              <p className="font-serif italic text-gold text-2xl pt-6">
                "Mais conforto, total discrição e a oportunidade certa."
              </p>
            </div>
          </div>
        </div>
      </section>

      <AboutUs />
      
      <Partnerships />

      {/* Wrapping Curadoria to handle clicks */}
      <div
        onClick={(e) => {
          const card = (e.target as HTMLElement).closest('[data-property]');
          if (card) {
            const id = card.getAttribute('data-id');
            if (id) {
              handleOpenProperty(id);
            }
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

      {selectedProperty && (
        <PropertyModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          property={selectedProperty}
        />
      )}
    </main>
  );
}

