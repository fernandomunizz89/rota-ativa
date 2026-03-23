"use client";

import React from 'react';
import { motion } from 'framer-motion';

export const Partnerships = () => {
  return (
    <section id="parcerias" className="py-24 bg-off-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-forest/5 blur-[120px] rounded-full -translate-x-1/3 translate-y-1/3" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16 lg:mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-gold font-sans text-xs uppercase tracking-[0.5em] mb-6 block will-change-transform"
          >
            Sinergia e Valor
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-5xl md:text-7xl text-forest mb-8 leading-tight font-normal will-change-transform"
          >
            Parcerias de <span className="text-gold italic">Mercado</span>
          </motion.h2>
          
          <div className="w-24 h-[1px] bg-gold/30 mx-auto mb-12" />

          <div className="space-y-8 text-forest/80 font-sans text-lg md:text-xl leading-relaxed max-w-3xl mx-auto font-light">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="will-change-transform"
            >
              Acreditamos na força da colaboração. Por isso, mantemos parcerias ativas com diversas imobiliárias, tanto na comercialização de imóveis do mercado como dos imóveis que integram a nossa carteira.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="will-change-transform"
            >
              Este modelo permite oferecer ao cliente comprador acesso a mais oportunidades, sempre com total transparência e sem qualquer alteração nos valores dos imóveis. As comissões são partilhadas entre as imobiliárias envolvidas, sem impacto no preço final.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="will-change-transform"
            >
              Assim, garantimos um processo mais ágil, integrado e com acompanhamento centralizado, beneficiando todas as partes com profissionalismo, confiança e resultados.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-16 flex justify-center"
          >
            <motion.a
              href="#contacto-privado"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-gold text-forest font-sans uppercase tracking-[0.2em] text-sm font-bold shadow-2xl hover:bg-forest hover:text-gold transition-all duration-500 rounded-sm"
            >
              Seja nosso parceiro
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
