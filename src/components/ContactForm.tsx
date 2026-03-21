"use client";

import React, { useState, useRef, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { motion, AnimatePresence } from 'framer-motion';

export const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const sendEmail = async (e: FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus('loading');

    try {
      const result = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ''
      );

      if (result.text === 'OK') {
        setStatus('success');
        formRef.current.reset();
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        throw new Error('Erro ao enviar mensagem.');
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section id="contacto-privado" className="py-16 lg:py-32 bg-forest text-off-white relative overflow-hidden [@media(max-height:800px)]:py-16">
      {/* Decorative background element */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-forest lg:h-full lg:w-1/2" />

      <div className="container mx-auto px-6 max-w-6xl relative flex flex-col lg:flex-row gap-16 lg:gap-24 items-center lg:items-start text-center lg:text-left">
        <div className="flex-1 w-full max-w-2xl">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-gold font-sans text-xs uppercase tracking-[0.5em] mb-6 block will-change-transform"
          >
            Contacto Privado
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl lg:text-7xl mb-8 leading-tight will-change-transform [@media(max-height:800px)]:text-5xl [@media(max-height:800px)]:mb-4"
          >
            Inicie a Sua Jornada <br />
            <span className="text-gold">com Exclusividade.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-off-white/70 font-sans text-lg lg:text-xl max-w-md mx-auto lg:mx-0 leading-relaxed will-change-transform [@media(max-height:800px)]:text-base"
          >
            A nossa equipa de consultores especializados está pronta para oferecer um serviço personalizado e discreto.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 w-full max-w-xl bg-deep-black p-8 lg:p-16 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border border-gold/10 relative z-10 will-change-transform [@media(max-height:800px)]:p-8"
        >
          <form ref={formRef} onSubmit={sendEmail} className="space-y-12">
            {[
              { id: 'user_name', label: 'Nome Completo', type: 'text' },
              { id: 'user_email', label: 'E-mail', type: 'email' },
              { id: 'subject', label: 'Assunto', type: 'text' },
            ].map((field) => (
              <div key={field.id} className="relative group">
                <input
                  required
                  name={field.id}
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
                name="message"
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

            <div className="space-y-4">
              <motion.button
                disabled={status === 'loading' || status === 'success'}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-6 bg-gold text-forest font-sans font-bold uppercase tracking-[0.3em] shadow-xl hover:bg-off-white transition-colors duration-300 disabled:opacity-50 will-change-transform"
              >
                {status === 'idle' ? 'Solicitar Consultoria Privada' :
                 status === 'loading' ? 'A enviar...' :
                 status === 'success' ? 'Mensagem Enviada' : 'Erro no Envio'}
              </motion.button>

              <AnimatePresence>
                {status === 'error' && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-red-400 text-xs uppercase tracking-widest text-center"
                  >
                    Ocorreu um erro. Tente novamente.
                  </motion.p>
                )}
                {status === 'success' && (
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-gold text-xs uppercase tracking-widest text-center"
                  >
                    Recebemos o seu contacto. Obrigado.
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
