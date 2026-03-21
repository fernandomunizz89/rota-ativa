"use client";

import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { motion, AnimatePresence } from 'framer-motion';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const menuItems = [
    { name: 'A Marca', href: '#a-marca' },
    { name: 'Sobre Nós', href: '#sobre-nos' },
    { name: 'A Curadoria', href: '#a-curadoria' },
    { name: 'Contacto Privado', href: '#contacto-privado' },
  ];

  const menuVariants = {
    closed: {
      x: "100%",
      opacity: 0,
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 40,
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    opened: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 400,
        damping: 40,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, x: 20 },
    opened: { opacity: 1, x: 0 }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 w-full z-[80] transition-all duration-500 will-change-transform ${isScrolled || isOpen 
          ? 'bg-forest/90 backdrop-blur-md py-2 lg:py-3 shadow-xl' 
          : 'bg-forest/5 backdrop-blur-sm py-3 lg:py-5 [@media(max-height:800px)]:py-3'
          }`}
      >
        <div className="container mx-auto px-6 md:px-8 flex items-center justify-between">
          <a
            href="#home"
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-3 lg:gap-4 cursor-pointer no-underline group"
          >
            <Logo className="w-14 h-14 lg:w-20 lg:h-20 transition-transform duration-300 group-hover:scale-105 [@media(max-height:800px)]:w-14 [@media(max-height:800px)]:h-14" />
            <div className="block">
              <h1 className="text-gold font-serif text-base lg:text-lg tracking-widest leading-none [@media(max-height:800px)]:text-base">ROTA ATIVA</h1>
              <p className="text-gold/80 font-sans text-[7px] lg:text-[9px] tracking-[0.3em] uppercase [@media(max-height:800px)]:text-[7px]">Mediação Imobiliária</p>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-6 xl:gap-12 [@media(max-height:800px)]:gap-6">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-off-white hover:text-gold transition-colors font-sans text-xs xl:text-sm uppercase tracking-widest [@media(max-height:800px)]:text-xs"
              >
                {item.name}
              </a>
            ))}
          </nav>

          <button
            className={`flex lg:hidden z-[70] relative items-center justify-center hamburger hamburger--spin ${isOpen ? 'is-active' : ''}`}
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-label="Abrir/Fechar Menu"
          >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop for closing the menu */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-deep-black/60 backdrop-blur-md z-[55] lg:hidden will-change-opacity"
            />

            <motion.div
              initial="closed"
              animate="opened"
              exit="closed"
              variants={menuVariants}
              className="fixed top-0 right-0 h-[100dvh] z-[60] w-full md:w-[450px] lg:hidden bg-forest/95 flex flex-col items-center justify-center overflow-hidden shadow-2xl border-l border-gold/10 will-change-transform"
            >
              {/* Decorative accent layer instead of heavy blur */}
              <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent -z-10" />

              <nav className="flex flex-col items-center gap-10 mt-10">
                {menuItems.map((item) => (
                  <motion.a
                    key={item.name}
                    variants={itemVariants}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-gold font-serif text-5xl hover:opacity-70 transition-all tracking-tight will-change-transform antialiased [backface-visibility:hidden] transform-gpu"
                  >
                    {item.name}
                  </motion.a>
                ))}

                <motion.button
                  variants={itemVariants}
                  className="mt-10 px-10 py-5 border border-gold/50 text-gold font-serif text-2xl hover:bg-gold hover:text-forest transition-all rounded-sm tracking-wide will-change-transform antialiased [backface-visibility:hidden] transform-gpu"
                  onClick={() => setIsOpen(false)}
                >
                  Agendamento
                </motion.button>
              </nav>

              <a
                href="#home"
                onClick={() => setIsOpen(false)}
                className="absolute bottom-12 flex flex-col items-center gap-2 cursor-pointer no-underline group"
              >
                <Logo className="w-12 h-12 opacity-30 transition-opacity duration-300 group-hover:opacity-100" />
                <p className="text-gold/30 font-sans text-[10px] tracking-[0.4em] uppercase group-hover:text-gold transition-colors duration-300">ROTA ATIVA</p>
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
