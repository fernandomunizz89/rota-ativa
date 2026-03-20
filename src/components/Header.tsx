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
        className={`fixed top-0 left-0 w-full z-[80] transition-all duration-500 ${isScrolled || isOpen ? 'bg-forest/90 backdrop-blur-md py-4 shadow-xl' : 'bg-transparent py-8'
          }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <a 
            href="#home" 
            onClick={() => setIsOpen(false)}
            className="flex items-center gap-4 cursor-pointer no-underline group"
          >
            <Logo className="w-16 h-16 transition-transform duration-300 group-hover:scale-110" />
            <div className="block">
              <h1 className="text-gold font-serif text-xl tracking-widest leading-none">ROTA ATIVA</h1>
              <p className="text-gold/80 font-sans text-[10px] tracking-[0.3em] uppercase">Mediação Imobiliária</p>
            </div>
          </a>

          <nav className="hidden md:flex items-center gap-12">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-off-white hover:text-gold transition-colors font-sans text-sm uppercase tracking-widest"
              >
                {item.name}
              </a>
            ))}
          </nav>

          <button
            className={`flex md:hidden z-[70] relative items-center justify-center hamburger hamburger--spin ${isOpen ? 'is-active' : ''}`}
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
          <motion.div
            initial="closed"
            animate="opened"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 z-[60] md:hidden bg-forest flex flex-col items-center justify-center overflow-hidden"
          >
            {/* Backdrop Blur effect layer */}
            <div className="absolute inset-0 bg-forest/40 backdrop-blur-xl -z-10" />

            <nav className="flex flex-col items-center gap-10 mt-10">
              {menuItems.map((item) => (
                <motion.a
                  key={item.name}
                  variants={itemVariants}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-gold font-serif text-5xl hover:opacity-70 transition-all tracking-tight"
                >
                  {item.name}
                </motion.a>
              ))}

              <motion.button
                variants={itemVariants}
                className="mt-10 px-10 py-5 border border-gold/50 text-gold font-serif text-2xl hover:bg-gold hover:text-forest transition-all rounded-sm tracking-wide"
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
        )}
      </AnimatePresence>
    </>
  );
};
