"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';
import { Property } from '@/data/properties';

interface PropertyModalProps {
  isOpen: boolean;
  onClose: () => void;
  property: Property | null;
}

export const PropertyModal = ({ isOpen, onClose, property }: PropertyModalProps) => {
  const [fullScreenIndex, setFullScreenIndex] = useState<number | null>(null);

  // Scroll Lock logic
  useEffect(() => {
    const isLocked = isOpen || fullScreenIndex !== null;
    
    if (isLocked) {
      // Calculate scrollbar width to prevent layout jump
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.paddingRight = `${scrollbarWidth}px`;
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
      document.body.style.paddingRight = '';
    }

    return () => {
      document.body.classList.remove('modal-open');
      document.body.style.paddingRight = '';
    };
  }, [isOpen, fullScreenIndex]);

  if (!property) return null;

  const allImages = [property.imagens.principal, ...property.imagens.internas];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          key="main-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-forest/90 backdrop-blur-xl p-4 md:p-10"
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.9, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 50 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="relative w-full max-w-7xl max-h-[90vh] bg-off-white dark:bg-deep-black overflow-hidden flex flex-col md:flex-row shadow-2xl will-change-transform"
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 z-10 p-2 bg-gold text-forest rounded-full hover:bg-off-white transition-colors"
            >
              <X size={24} />
            </button>

            {/* Massive Gallery Part */}
            <div className="flex-none h-[40vh] md:flex-[2] md:h-auto overflow-y-auto custom-scrollbar bg-off-white dark:bg-deep-black">
              <div className="grid grid-cols-1 gap-4 p-4">
                <div 
                  className="relative aspect-video w-full overflow-hidden cursor-pointer group"
                  onClick={() => setFullScreenIndex(0)}
                >
                  <Image 
                    src={property.imagens.principal} 
                    alt={`${property.titulo} em ${property.localizacao} - Rota Ativa | Mediação Imobiliária`}
                    fill
                    sizes="(max-width: 768px) 100vw, 80vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-700" 
                    priority
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/5 lg:bg-black/0 lg:group-hover:bg-black/20 transition-all opacity-100 lg:opacity-0 lg:group-hover:opacity-100 pointer-events-none">
                    <div className="p-3 bg-black/20 lg:bg-transparent rounded-full backdrop-blur-sm lg:backdrop-blur-none border border-white/10 lg:border-none">
                      <ZoomIn className="text-white drop-shadow-md" size={48} />
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {property.imagens.internas.map((img, idx) => (
                    <div 
                      key={idx} 
                      className="relative h-64 w-full overflow-hidden cursor-pointer group"
                      onClick={() => setFullScreenIndex(idx + 1)}
                    >
                      <Image 
                        src={img} 
                        alt={`${property.titulo} - Detalhe ${idx + 1}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 40vw"
                        className="object-cover group-hover:scale-110 transition-transform duration-700 will-change-transform" 
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/5 lg:bg-black/0 lg:group-hover:bg-black/20 transition-all opacity-100 lg:opacity-0 lg:group-hover:opacity-100 pointer-events-none">
                        <div className="p-2 bg-black/20 lg:bg-transparent rounded-full backdrop-blur-sm lg:backdrop-blur-none border border-white/10 lg:border-none">
                          <ZoomIn className="text-white drop-shadow-md" size={32} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-forest/5 p-12 border border-gold/10 flex flex-col items-center justify-center text-center">
                  <span className="text-gold font-serif italic text-lg mb-4">
                    Solicite o Dossier Completo
                  </span>
                  <p className="text-forest/60 dark:text-off-white/40 text-sm max-w-md">
                    Temos documentação técnica detalhada, plantas e fotografias adicionais de alta resolução disponíveis sob consulta direta.
                  </p>
                </div>
              </div>
            </div>

            {/* Details & Form Part */}
            <div className="flex-1 p-12 overflow-y-auto bg-forest text-off-white flex flex-col">
              <div className="mb-12">
                <span className="text-gold font-sans text-xs uppercase tracking-[0.4em] mb-4 block">
                  {property.tipo} | {property.classe}
                </span>
                <h2 className="font-serif text-4xl mb-8 leading-tight">
                  {property.titulo}
                </h2>
                
                <div className="flex gap-4 mb-8 flex-wrap">
                  {property.tags.map(tag => (
                    <span key={tag} className="text-[10px] uppercase tracking-widest border border-gold/30 px-3 py-1 text-gold/80">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="space-y-4 mb-10 font-sans text-off-white/80 border-l-2 border-gold/30 pl-6">
                  <p className="flex justify-between">
                    <span className="text-off-white/40">Localização</span>
                    <span>{property.localizacao}</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="text-off-white/40">Área Total</span>
                    <span>{property.area}</span>
                  </p>
                  <p className="flex justify-between text-gold font-semibold pt-2">
                    <span>Preço</span>
                    <span>Sob Consulta</span>
                  </p>
                </div>

                <div className="space-y-6 mb-12 text-off-white/70 leading-relaxed">
                  {property.descricao.map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>

                <div className="mb-12">
                  <h4 className="text-gold font-sans text-xs uppercase tracking-[0.2em] mb-6">Destaques do Imóvel</h4>
                  <ul className="space-y-3">
                    {property.caracteristicas.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-off-white/80">
                        <span className="text-gold mt-1">✦</span>
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-auto border-t border-gold/20 pt-12">
                <h3 className="font-serif text-2xl mb-6 text-gold">Pedido de Visita Privada</h3>
                <form className="space-y-6">
                  <input
                    type="text"
                    placeholder="Nome Completo"
                    className="w-full bg-transparent border-b border-off-white/20 py-3 outline-none focus:border-gold"
                  />
                  <input
                    type="tel"
                    placeholder="Telefone"
                    className="w-full bg-transparent border-b border-off-white/20 py-3 outline-none focus:border-gold"
                  />
                  <button className="w-full py-4 bg-gold text-forest font-bold uppercase tracking-widest text-sm hover:bg-off-white transition-colors">
                    Solicitar Agendamento
                  </button>
                </form>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Full-Screen Image Overlay */}
      {fullScreenIndex !== null && (
        <motion.div
          key="fullscreen-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-deep-black/95 backdrop-blur-md p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) setFullScreenIndex(null);
          }}
        >
          {/* Close Button */}
          <button
            onClick={() => setFullScreenIndex(null)}
            className="absolute top-6 right-6 z-20 p-3 bg-off-white/10 text-off-white rounded-full hover:bg-gold hover:text-deep-black transition-colors shadow-2xl backdrop-blur-md border border-off-white/20"
          >
            <X size={32} />
          </button>

          {/* Navigation Arrows */}
          {fullScreenIndex > 0 && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, x: [0, -5, 0] }}
              transition={{ x: { repeat: Infinity, duration: 2, ease: "easeInOut" } }}
              onClick={() => setFullScreenIndex(prev => prev !== null ? prev - 1 : prev)}
              className="absolute left-4 md:left-12 top-1/2 -translate-y-1/2 z-20 p-2 md:p-4 bg-off-white/10 text-gold rounded-full hover:bg-gold hover:text-deep-black transition-colors backdrop-blur-md flex items-center justify-center"
            >
              <ChevronLeft size={32} />
            </motion.button>
          )}

          {fullScreenIndex < allImages.length - 1 && (
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, x: [0, 5, 0] }}
              transition={{ x: { repeat: Infinity, duration: 2, ease: "easeInOut" } }}
              onClick={() => setFullScreenIndex(prev => prev !== null ? prev + 1 : prev)}
              className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 z-20 p-2 md:p-4 bg-off-white/10 text-gold rounded-full hover:bg-gold hover:text-deep-black transition-colors backdrop-blur-md flex items-center justify-center"
            >
              <ChevronRight size={32} />
            </motion.button>
          )}
          
          <motion.div 
            key={fullScreenIndex} // Forces re-render and re-animation on index change
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ type: "spring", stiffness: 80, damping: 20, mass: 1 }}
            className="relative w-full h-full max-w-7xl max-h-[90vh] cursor-grab active:cursor-grabbing will-change-transform"
            drag="x"
            dragMomentum={false}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = Math.abs(offset.x) * velocity.x;
              if (swipe < -10000 || offset.x < -100) {
                if (fullScreenIndex < allImages.length - 1) setFullScreenIndex(fullScreenIndex + 1);
              } else if (swipe > 10000 || offset.x > 100) {
                if (fullScreenIndex > 0) setFullScreenIndex(fullScreenIndex - 1);
              }
            }}
          >
            <Image
              src={allImages[fullScreenIndex]}
              alt={`Visualização ampliada da imagem ${fullScreenIndex + 1}`}
              fill
              className="object-contain"
              sizes="100vw"
              priority
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
