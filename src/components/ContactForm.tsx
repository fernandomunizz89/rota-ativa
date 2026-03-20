"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const ContactForm = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => setStatus('success'), 1500);
  };

  return (
    <section id="contacto-privado" className="py-24 lg:py-48 bg-forest text-off-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-forest lg:h-full lg:w-1/2" />
      
      <div className="container mx-auto px-6 max-w-6xl relative flex flex-col lg:flex-row gap-16 lg:gap-24 items-center lg:items-start text-center lg:text-left">
        <div className="flex-1 w-full max-w-2xl">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-gold font-sans text-xs uppercase tracking-[0.5em] mb-6 block"
          >
            Contacto Privado
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl lg:text-7xl mb-8 leading-tight"
          >
            Inicie a Sua Jornada <br />
            <span className="text-gold">com Exclusividade.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-off-white/70 font-sans text-lg lg:text-xl max-w-md mx-auto lg:mx-0 leading-relaxed"
          >
            A nossa equipa de consultores especializados está pronta para oferecer um serviço personalizado e discreto.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-12 space-y-4 font-sans block"
          >
            <p className="text-gold text-sm tracking-widest uppercase">Office / Porto, Portugal</p>
            <p className="text-xl md:text-2xl font-light">Av. da Liberdade, 123</p>
            <div className="flex flex-col md:flex-row md:gap-8 justify-center lg:justify-start items-center">
              <p className="text-lg md:text-xl">+351 253 123 456</p>
              <p className="text-lg md:text-xl">concierge@rotaativa.pt</p>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 w-full max-w-xl bg-deep-black p-8 md:p-16 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border border-gold/10 relative z-10"
        >
          <form onSubmit={handleSubmit} className="space-y-12">
            {[
              { id: 'name', label: 'Nome Completo', type: 'text' },
              { id: 'phone', label: 'Telefone', type: 'tel' },
              { id: 'email', label: 'E-mail', type: 'email' },
            ].map((field) => (
              <div key={field.id} className="relative group">
                <input
                  required
                  type={field.type}
                  className="w-full bg-transparent border-b border-off-white/20 py-4 outline-none focus:border-gold transition-colors duration-300 peer placeholder-transparent"
                  placeholder={field.label}
                  id={field.id}
                />
                <label
                  htmlFor={field.id}
                  className="absolute left-0 -top-2 text-xs text-gold uppercase tracking-widest transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-off-white/40 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-gold"
                >
                  {field.label}
                </label>
              </div>
            ))}

            <div className="relative group">
              <textarea
                required
                rows={4}
                className="w-full bg-transparent border-b border-off-white/20 py-4 outline-none focus:border-gold transition-colors duration-300 peer placeholder-transparent resize-none"
                placeholder="Mensagem"
                id="message"
              />
              <label
                htmlFor="message"
                className="absolute left-0 -top-2 text-xs text-gold uppercase tracking-widest transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-off-white/40 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-gold"
              >
                Mensagem (Texto Livre)
              </label>
            </div>

            <motion.button
              disabled={status !== 'idle'}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-6 bg-gold text-forest font-sans font-bold uppercase tracking-[0.3em] shadow-xl hover:bg-off-white transition-colors duration-300 disabled:opacity-50"
            >
              {status === 'idle' ? 'Solicitar Consultoria Privada' : status === 'sending' ? 'A enviar...' : 'Mensagem Enviada'}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
