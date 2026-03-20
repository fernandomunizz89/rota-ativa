"use client";

import React from 'react';
import { motion } from 'framer-motion';

const commitments = [
  {
    title: "Prioridade ao Cliente",
    description: "Colocamos você no centro de tudo. Seu perfil, suas necessidades, sua busca.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    title: "Eliminação de Barreiras",
    description: "Diga adeus às ligações indesejadas e visitas sem propósito. Nosso foco é oferecer opções alinhadas ao que você realmente deseja.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728L5.636 5.636" />
      </svg>
    ),
  },
  {
    title: "Transparência e Economia",
    description: "Nossos serviços não têm custo para você. A remuneração é garantida pelos vendedores, assegurando uma parceria transparente e vantajosa.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "Experiência sem Estresse",
    description: "A jornada até o lar dos seus sonhos deve ser emocionante, não estressante. Estamos aqui para garantir que seja exatamente assim.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export const AboutUs = () => {
  return (
    <section id="sobre-nos" className="py-24 bg-off-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gold/5 blur-[100px] rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-forest/5 blur-[120px] rounded-full translate-x-1/3 translate-y-1/3" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-gold font-sans text-xs uppercase tracking-[0.5em] mb-6 block"
          >
            A Nossa Essência
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-5xl md:text-7xl text-forest mb-8 leading-tight"
          >
            SOBRE A <span className="text-gold">ROTA ATIVA</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-forest/80 font-sans text-xl md:text-2xl leading-relaxed font-light"
          >
            Bem-vindo à Rota Ativa, a inovação no universo imobiliário! Estamos aqui para redefinir a sua experiência na busca pelo imóvel ideal. Ao contrário do convencional, concentramos nosso compromisso exclusivamente nos clientes compradores.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-forest p-12 shadow-2xl relative group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 blur-3xl group-hover:bg-gold/20 transition-all duration-700" />
            {/* <span className="text-gold font-sans text-xs uppercase tracking-widest mb-6 block opacity-70">Subtítulo 1</span> */}
            <h3 className="font-serif text-4xl text-off-white mb-6">Quem Somos</h3>
            <p className="text-off-white/70 font-sans text-lg leading-relaxed">
              Somos mais do que uma imobiliária, somos a Rota Ativa, dedicados a proporcionar uma jornada única e sem contratempos na realização da aquisição do seu imóvel.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            {/* <span className="text-gold font-sans text-xs uppercase tracking-widest mb-6 block">Subtítulo 2</span> */}
            <h3 className="font-serif text-4xl text-forest mb-8">Nosso Compromisso</h3>
            <div className="w-20 h-1 bg-gold mb-8" />
            <p className="text-forest/70 font-sans text-lg leading-relaxed">
              Acreditamos que a exclusividade deve ser acompanhada de transparência e eficiência. Cada pilar do nosso compromisso foi desenhado para proteger os seus interesses.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {commitments.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 border border-forest/5 hover:border-gold/30 transition-all duration-300 group"
            >
              <div className="w-12 h-12 bg-forest text-gold flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                {item.icon}
              </div>
              <h4 className="font-serif text-xl text-forest mb-4 group-hover:text-gold transition-colors">{item.title}</h4>
              <p className="text-forest/60 font-sans text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
