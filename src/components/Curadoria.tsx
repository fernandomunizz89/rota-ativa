"use client";

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { properties } from '@/data/properties';

const PropertyCard = ({ id, image, title, category, location, area, index }: { id: string, image: string, title: string, category: string, location: string, area: string, index: number }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <div ref={ref} className="relative h-[500px] md:h-[600px] overflow-hidden cursor-pointer group/card w-full property-card will-change-transform [@media(max-height:800px)]:h-[450px]">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full h-full will-change-transform"
        data-property
        data-id={id}
        data-title={title}
        data-category={category}
        data-image={image}
        data-location={location}
        data-area={area}
      >
        <motion.div style={{ y }} className="absolute inset-0 will-change-transform">
          <Image
            src={image}
            alt={`${title} em ${location} - Rota Ativa | Mediação Imobiliária`}
            fill
            priority={index < 4}
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
            className="object-cover transition-transform duration-700 scale-110 lg:scale-100 lg:group-hover/card:scale-110 will-change-transform"
          />
        </motion.div>
        
        {/* Base dark gradient layer for baseline text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-forest/80 via-forest/10 to-transparent opacity-60 transition-opacity duration-500" />

        {/* Dynamic Text Container (Shrinks to content height) */}
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 z-20 flex flex-col justify-end">
          
          {/* Glassmorphism Hover Overlay bound to text container height (extends slightly upwards via -top-16 for fade) */}
          <div 
            className="absolute -top-16 bottom-0 left-0 right-0 bg-black/10 backdrop-blur-md bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-100 lg:opacity-0 lg:group-hover/card:opacity-100 transition-all duration-500 pointer-events-none -z-10"
            style={{ 
              WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 25%)',
              maskImage: 'linear-gradient(to bottom, transparent, black 25%)'
            }} 
          />

          <span className="text-gold font-sans text-xs uppercase tracking-[0.3em] mb-2 translate-y-0 opacity-100 lg:translate-y-4 lg:opacity-0 lg:group-hover/card:translate-y-0 lg:group-hover/card:opacity-100 transition-all duration-500">
            {category}
          </span>
          <h3 className="text-off-white font-serif text-2xl md:text-3xl mb-4 leading-tight drop-shadow-sm">
            {title}
          </h3>
          <div className="w-full h-1 bg-gold origin-left transition-transform duration-500 scale-x-100 lg:scale-x-[0.15] lg:group-hover/card:scale-x-100 shadow-[0_0_10px_rgba(255,255,255,0.1)] will-change-transform" />
        </div>
      </motion.div>
    </div>
  );
};

export const Curadoria = () => {
  const sortedProperties = [...properties].sort((a, b) => a.priority - b.priority);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(4);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { amount: 0.1 });

  // Responsive items per page
  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth < 768) setItemsPerPage(1);
      else if (window.innerWidth < 1024) setItemsPerPage(2);
      else if (window.innerWidth < 1280) setItemsPerPage(3);
      else setItemsPerPage(4);
    };

    updateItemsPerPage();
    window.addEventListener('resize', updateItemsPerPage);
    return () => window.removeEventListener('resize', updateItemsPerPage);
  }, []);

  // Use Math.ceil para calcular as páginas totais
  const totalPages = Math.ceil(sortedProperties.length / itemsPerPage);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) >= totalPages ? 0 : prev + 1);
  }, [totalPages]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1) < 0 ? totalPages - 1 : prev - 1);
  };

  const startTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(nextSlide, 5000); // Timer resets completely
  }, [nextSlide]);

  const clearTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
  }, []);

  // Smart Auto-play effect
  useEffect(() => {
    if (isInView && !isPaused) {
      startTimer();
    } else {
      clearTimer();
    }
    return () => clearTimer(); // Limpa no unmount
  }, [isInView, isPaused, startTimer, clearTimer, currentIndex]);

  // Calcula o índice de itens que deve estar visível no "start" do slide atual,
  // permitindo ancorar ao fim da array na última página evitando espaços brancos
  const getSlideStartIndex = (pageIndex: number) => {
    if (pageIndex === totalPages - 1) {
      return Math.max(0, sortedProperties.length - itemsPerPage);
    }
    return pageIndex * itemsPerPage;
  };

  const startIndex = getSlideStartIndex(currentIndex);

  return (
    <section ref={sectionRef} id="a-curadoria" className="py-24 bg-off-white relative overflow-hidden">
      <div className="container mx-auto px-6 relative">
        <div className="max-w-3xl mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gold font-sans text-xs uppercase tracking-[0.4em] mb-4 block"
          >
            O Nosso Portfólio
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-forest font-serif text-4xl md:text-6xl mb-6 [@media(max-height:800px)]:text-4xl [@media(max-height:800px)]:mb-4"
          >
            Oportunidades Únicas e Preservadas.
          </motion.h2>
          <p className="text-forest/70 font-sans text-lg">
            Temos acesso a imóveis exclusivos, muitos deles em regime off-market. Apresentamos oportunidades apenas mediante consulta, garantindo a privacidade dos nossos clientes e parceiros ao longo de toda a negociação.
          </p>
        </div>

        <div 
          className="relative group/carousel px-4"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Controls - Visíveis apenas no Desktop (> lg) */}
          <button 
            onClick={prevSlide}
            className="hidden lg:flex absolute -left-4 md:-left-12 lg:-left-20 top-1/2 -translate-y-1/2 z-20 bg-forest/80 text-gold p-4 opacity-0 group-hover/carousel:opacity-100 group-has-[.property-card:hover]/carousel:opacity-0 hover:!opacity-100 transition-all duration-300 hover:bg-gold hover:text-forest backdrop-blur-sm shadow-xl items-center justify-center cursor-pointer"
            aria-label="Anterior"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={nextSlide}
            className="hidden lg:flex absolute -right-4 md:-right-12 lg:-right-20 top-1/2 -translate-y-1/2 z-20 bg-forest/80 text-gold p-4 opacity-0 group-hover/carousel:opacity-100 group-has-[.property-card:hover]/carousel:opacity-0 hover:!opacity-100 transition-all duration-300 hover:bg-gold hover:text-forest backdrop-blur-sm shadow-xl items-center justify-center cursor-pointer"
            aria-label="Próximo"
          >
            <ChevronRight size={24} />
          </button>

          {/* Carousel Viewport (Touch Swipe Enabled) */}
          <div className="overflow-hidden -mx-4">
            <motion.div 
              className="flex cursor-grab active:cursor-grabbing will-change-transform"
              animate={{ x: `-${(startIndex / sortedProperties.length) * 100}%` }}
              transition={{ type: "spring", stiffness: 80, damping: 20, mass: 1 }}
              style={{ width: `${(sortedProperties.length / itemsPerPage) * 100}%` }}
              drag="x"
              dragMomentum={false}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = Math.abs(offset.x) * velocity.x;
                if (swipe < -10000 || offset.x < -100) {
                  nextSlide();
                } else if (swipe > 10000 || offset.x > 100) {
                  prevSlide();
                }
              }}
            >
              {sortedProperties.map((prop, i) => (
                <div 
                  key={prop.id} 
                  style={{ width: `${100 / sortedProperties.length}%` }}
                  className="flex-shrink-0 px-4"
                >
                  <PropertyCard 
                    id={prop.id}
                    title={prop.titulo}
                    category={prop.tipo}
                    image={prop.imagens.principal}
                    location={prop.localizacao}
                    area={prop.area}
                    index={i} 
                  />
                </div>
              ))}
            </motion.div>
          </div>

          {/* Pagination Indicators */}
          <div className="flex justify-center gap-4 mt-12">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-12 h-1 transition-all duration-500 ${i === currentIndex ? 'bg-gold' : 'bg-forest/20'}`}
                aria-label={`Ir para slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

