"use client";

import React from 'react';
import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image / Video Fallback */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="w-full h-full"
        >
          <img
            src="/images/hero.png"
            alt="Mediação Imobiliária"
            className="w-full h-full object-cover brightness-50"
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
        >
          <span className="text-gold font-sans text-sm md:text-base uppercase tracking-[0.5em] mb-4 block">
            Exclusividade em Cada Detalhe
          </span>
          <h1 className="text-off-white font-serif text-5xl md:text-8xl mb-8 leading-tight">
            Rota Ativa.<br />
            <span className="text-gold">Descubra a Excelência.</span>
          </h1>
          <p className="text-off-white/80 font-sans text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light">
            Mediação imobiliária em Porto e arredores. Uma curadoria editorial das propriedades mais exclusivas de Portugal.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <motion.a
              href="#a-curadoria"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-gold text-forest font-sans uppercase tracking-widest text-sm font-bold shadow-2xl hover:bg-off-white transition-colors duration-300"
            >
              Explorar Curadoria
            </motion.a>
            <motion.a
              href="#contacto-privado"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 border border-gold text-gold font-sans uppercase tracking-widest text-sm font-bold hover:bg-gold hover:text-forest transition-all duration-300"
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
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-gold/50 font-sans text-[10px] uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-gold to-transparent" />
      </motion.div>
    </section>
  );
};
