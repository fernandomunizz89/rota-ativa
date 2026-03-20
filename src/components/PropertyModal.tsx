"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface PropertyModalProps {
  isOpen: boolean;
  onClose: () => void;
  property: {
    title: string;
    category: string;
    image: string;
    location: string;
    area: string;
  } | null;
}

export const PropertyModal = ({ isOpen, onClose, property }: PropertyModalProps) => {
  if (!property) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-forest/90 backdrop-blur-xl p-4 md:p-10"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 50 }}
            className="relative w-full max-w-7xl max-h-[90vh] bg-off-white dark:bg-deep-black overflow-hidden flex flex-col md:flex-row shadow-2xl"
          >
            <button
              onClick={onClose}
              className="absolute top-6 right-6 z-10 p-2 bg-gold text-forest rounded-full hover:bg-off-white transition-colors"
            >
              <X size={24} />
            </button>

            {/* Massive Gallery Part */}
            <div className="flex-[2] h-[400px] md:h-auto overflow-y-auto custom-scrollbar">
              <div className="grid grid-cols-1 gap-4 p-4">
                <img src={property.image} alt={property.title} className="w-full h-auto object-cover" />
                <div className="grid grid-cols-2 gap-4">
                  <div className="h-64 bg-forest/10 animate-pulse" />
                  <div className="h-64 bg-forest/10 animate-pulse" />
                </div>
                <div className="h-[600px] bg-forest/5 flex items-center justify-center border-2 border-dashed border-gold/20">
                  <span className="text-gold font-serif italic text-lg text-center px-12">
                    Espaço para fotografia adicional de altíssima resolução (WebP Optimized)
                  </span>
                </div>
              </div>
            </div>

            {/* Details & Form Part */}
            <div className="flex-1 p-12 overflow-y-auto bg-forest text-off-white">
              <span className="text-gold font-sans text-xs uppercase tracking-[0.4em] mb-4 block">
                {property.category}
              </span>
              <h2 className="font-serif text-4xl mb-8 leading-tight">
                {property.title}
              </h2>
              <div className="space-y-6 mb-12 font-sans text-off-white/70">
                <p>Localização: {property.location}</p>
                <p>Área: {property.area}</p>
                <p>Preço sob consulta</p>
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
    </AnimatePresence>
  );
};
