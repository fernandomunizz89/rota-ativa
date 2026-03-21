"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-[100svh] w-full flex flex-col items-center justify-center overflow-hidden pt-24 pb-20 lg:pt-32 lg:pb-24">
      {/* Background Image / Video Fallback */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="w-full h-full relative will-change-transform"
        >
          <Image
            src="/images/hero.png"
            alt="Rota Ativa - Mediação Imobiliária personalizada e Curadoria de Imóveis em Portugal"
            fill
            priority
            sizes="100vw"
            className="object-cover brightness-50"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-forest/30 via-transparent to-forest/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="will-change-transform bg-forest/20 backdrop-blur-xl rounded-[2rem] md:rounded-[3rem] p-8 md:p-12 lg:p-16 border border-white/5 shadow-2xl"
        >
          <span className="text-gold font-sans text-[10px] sm:text-xs lg:text-sm uppercase tracking-[0.5em] mb-2 lg:mb-4 block [@media(max-height:800px)]:mb-2">
            Inteligência Imobiliária
          </span>
          <h1 className="text-off-white font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl mb-4 lg:mb-8 leading-tight [@media(max-height:800px)]:text-5xl [@media(max-height:800px)]:mb-4">
            Rota Ativa.<br />
            <span className="text-gold">A Sua Procura. Centralizada.</span>
          </h1>
          <p className="text-off-white/80 font-sans text-sm sm:text-base lg:text-lg xl:text-xl max-w-2xl mx-auto mb-6 lg:mb-10 leading-relaxed font-light [@media(max-height:800px)]:text-sm [@media(max-height:800px)]:mb-6">
            Mais do que uma imobiliária tradicional, oferecemos uma procura ativa e altamente personalizada, focada em encontrar as melhores oportunidades de acordo com o seu perfil.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
            <motion.a
              href="#a-curadoria"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-4 md:px-10 md:py-5 bg-gold text-forest font-sans uppercase tracking-widest text-xs md:text-sm font-bold shadow-2xl hover:bg-off-white transition-colors duration-300 w-full sm:w-auto [@media(max-height:800px)]:px-6 [@media(max-height:800px)]:py-3"
            >
              Explorar Curadoria
            </motion.a>
            <motion.a
              href="#contacto-privado"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-4 md:px-10 md:py-5 border border-gold text-gold font-sans uppercase tracking-widest text-xs md:text-sm font-bold hover:bg-gold hover:text-forest transition-all duration-300 w-full sm:w-auto [@media(max-height:800px)]:px-6 [@media(max-height:800px)]:py-3"
            >
              Consulta Privada
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 will-change-transform"
      >
        <span className="text-gold/50 font-sans text-[10px] uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-gold to-transparent" />
      </motion.div>
    </section>
  );
};
