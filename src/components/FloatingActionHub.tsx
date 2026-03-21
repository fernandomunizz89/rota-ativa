"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Phone, Calendar, FileText, X, ChevronUp } from 'lucide-react';

const actions = [
  {
    icon: <MessageSquare size={18} />,
    label: 'Conversa Exclusiva',
    subLabel: 'WhatsApp Privado',
    href: 'https://wa.me/351936765705?text=Olá!%0A%0AEncontrei%20o%20vosso%20site%20e%20tenho%20interesse%20em%20perceber%20melhor%20como%20trabalham%20na%20mediação%20imobiliária.%20Podemos%20falar?',
    type: 'link'
  },
  {
    icon: <Phone size={18} />,
    label: '+351 936 765 705',
    subLabel: 'Contacto Telefónico',
    href: 'tel:+351936765705',
    type: 'link'
  },
  {
    icon: <Calendar size={18} />,
    label: 'Reserva de Horário (15min)',
    subLabel: 'Agendar Reunião',
    href: 'https://calendly.com/rota-ativa', // Placeholder link
    type: 'link'
  },
  {
    icon: <FileText size={18} />,
    label: 'Receber Portfólio PDF',
    subLabel: 'Brochura Digital',
    href: '#',
    type: 'download'
  }
];

export const FloatingActionHub = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-4 font-sans">
      <AnimatePresence>
        {isOpen && (isVisible) && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
            className="flex flex-col gap-2 mb-2 will-change-transform"
          >
            {/* Backdrop-blur menu */}
            <div className="bg-forest/90 backdrop-blur-xl border border-gold/20 p-2 rounded-2xl shadow-2xl min-w-[240px]">
              {actions.map((action, index) => (
                <motion.a
                  key={index}
                  href={action.href}
                  target={action.type === 'link' ? '_blank' : undefined}
                  rel={action.type === 'link' ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 + 0.1 }}
                  whileHover={{ x: 4, backgroundColor: 'rgba(193, 154, 91, 0.1)' }}
                  className="flex items-center gap-4 p-3 rounded-xl transition-colors group will-change-transform"
                >
                  <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-forest transition-all duration-300">
                    {action.icon}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-off-white text-[13px] font-medium tracking-wide">
                      {action.label}
                    </span>
                    <span className="text-gold/60 text-[10px] uppercase tracking-widest font-semibold">
                      {action.subLabel}
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className={`
              w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 will-change-transform
              ${isOpen ? 'bg-off-white text-forest rotate-90' : 'bg-forest text-gold border border-gold/30 hover:border-gold'}
            `}
          >
            {isOpen ? <X size={24} /> : (
              <div className="relative">
                <MessageSquare size={28} />
                <span className="absolute -top-1 -right-1 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-gold"></span>
                </span>
              </div>
            )}
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};
