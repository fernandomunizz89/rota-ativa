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
    <section id="contacto-privado" className="py-32 bg-forest text-off-white">
      <div className="container mx-auto px-6 max-w-6xl flex flex-col md:flex-row gap-20">
        <div className="flex-1">
          <span className="text-gold font-sans text-xs uppercase tracking-[0.5em] mb-6 block">
            Contacto Privado
          </span>
          <h2 className="font-serif text-5xl md:text-7xl mb-8 leading-tight">
            Inicie a Sua Joranada <br />
            <span className="text-gold">com Exclusividade.</span>
          </h2>
          <p className="text-off-white/70 font-sans text-lg lg:text-xl max-w-md leading-relaxed">
            A nossa equipa de consultores especializados está pronta para oferecer um serviço personalizado e discreto.
          </p>

          <div className="mt-12 space-y-4 font-sans">
            <p className="text-gold text-sm tracking-widest uppercase">Office / Porto, Portugal</p>
            <p className="text-2xl font-light">Av. da Liberdade, 123</p>
            <p className="text-xl">+351 253 123 456</p>
            <p className="text-xl">concierge@rotaativa.pt</p>
          </div>
        </div>

        <div className="flex-1 bg-[#0a261d] p-12 shadow-2xl">
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
        </div>
      </div>
    </section>
  );
};
