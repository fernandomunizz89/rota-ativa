"use client";

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const PropertyCard = ({ image, title, category, location, area, index }: { image: string, title: string, category: string, location: string, area: string, index: number }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true }}
      className="group relative h-[600px] overflow-hidden cursor-pointer"
      data-property
      data-title={title}
      data-category={category}
      data-image={image}
      data-location={location}
      data-area={area}
    >
      <motion.div style={{ y }} className="absolute inset-0">
        <img
          src={image}
          alt={title}
          className="w-full h-[120%] object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-t from-forest via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

      <div className="absolute inset-0 flex flex-col justify-end p-12">
        <span className="text-gold font-sans text-xs uppercase tracking-[0.3em] mb-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
          {category}
        </span>
        <h3 className="text-off-white font-serif text-3xl mb-4">
          {title}
        </h3>
        <div className="w-12 h-1 bg-gold transition-all duration-500 group-hover:w-full" />
      </div>
    </motion.div>
  );
};

export const Curadoria = () => {
  const properties = [
    {
      title: "Penthouse Contemporânea",
      category: "Vida Urbana de Elite",
      image: "/images/penthouse.png",
      location: "Avenida da Liberdade, Lisboa",
      area: "280m²"
    },
    {
      title: "Quintas Históricas",
      category: "Património & Natureza",
      image: "/images/quinta.png",
      location: "Vale do Douro, Peso da Régua",
      area: "45.000m²"
    },
    {
      title: "Villas no Litoral",
      category: "Exclusividade Marítima",
      image: "/images/villa.png",
      location: "Vilamoura, Algarve",
      area: "650m²"
    },
    {
      title: "The Vila Nova Hotel & SPA",
      category: "Hospitalidade de Elite",
      image: "/images/hotel.png",
      location: "Vila Nova de Gaia, Portugal",
      area: "3.500m²"
    }
  ];

  return (
    <section id="a-curadoria" className="py-24 bg-off-white dark:bg-deep-black">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gold font-sans text-xs uppercase tracking-[0.4em] mb-4 block"
          >
            Nossa Curadoria
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-forest dark:text-off-white font-serif text-4xl md:text-6xl mb-6"
          >
            Propriedades que Contam Histórias.
          </motion.h2>
          <p className="text-forest/70 dark:text-off-white/60 font-sans text-lg">
            Abordamos a mediação imobiliária como uma curadoria de arte. Cada propriedade é selecionada pela sua singularidade, arquitetura e localização privilegiada.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {properties.map((prop, i) => (
            <PropertyCard key={i} {...prop} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};
