import React from "react";
import { motion } from "motion/react";
import { Phone, MessageCircle, Mail, Clock, CheckCircle2, ArrowRight } from "lucide-react";
import { COMPANY_INFO, COMPANY_LINKS } from "@/app/config/company";

export function Contact() {
  return (
    <div className="flex flex-col">
      <section className="border-b border-[#D4AF37]/20 bg-black py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 text-5xl font-bold md:text-6xl"
          >
            Fale <span className="text-[#D4AF37]">Conosco</span>
          </motion.h1>
          <p className="mx-auto max-w-2xl text-xl text-gray-400">
            Estamos disponiveis 24/7 para reservas, orcamentos e atendimentos personalizados.
          </p>
        </div>
      </section>

      <section className="bg-black py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-20 lg:grid-cols-2 lg:items-start">
            <div>
              <h2 className="mb-10 text-3xl font-bold">Informacoes de Contato</h2>
              <div className="mb-12 space-y-8">
                <a href={COMPANY_LINKS.whatsapp} target="_blank" rel="noopener noreferrer" className="group flex items-start gap-6">
                  <div className="rounded-2xl bg-[#D4AF37]/10 p-4 text-[#D4AF37] transition-all group-hover:bg-[#D4AF37] group-hover:text-black">
                    <MessageCircle size={32} />
                  </div>
                  <div>
                    <h4 className="mb-1 text-xl font-bold">WhatsApp</h4>
                    <p className="mb-1 text-gray-400">Reservas e cotacoes com resposta rapida</p>
                    <p className="font-bold text-[#D4AF37]">{COMPANY_INFO.phoneDisplay}</p>
                  </div>
                </a>

                <a href={COMPANY_LINKS.phone} className="group flex items-start gap-6">
                  <div className="rounded-2xl bg-white/5 p-4 text-white transition-all group-hover:bg-white group-hover:text-black">
                    <Phone size={32} />
                  </div>
                  <div>
                    <h4 className="mb-1 text-xl font-bold">Ligacao Telefonica</h4>
                    <p className="mb-1 text-gray-400">Atendimento direto 24 horas por dia</p>
                    <p className="font-bold text-white">{COMPANY_INFO.phoneDisplay}</p>
                  </div>
                </a>

                <a href={COMPANY_LINKS.email} className="group flex items-start gap-6">
                  <div className="rounded-2xl bg-white/5 p-4 text-white transition-all group-hover:bg-white group-hover:text-black">
                    <Mail size={32} />
                  </div>
                  <div>
                    <h4 className="mb-1 text-xl font-bold">E-mail</h4>
                    <p className="mb-1 text-gray-400">Atendimento corporativo, eventos e demandas especiais</p>
                    <p className="font-bold text-white">{COMPANY_INFO.email}</p>
                  </div>
                </a>

                <div className="flex items-start gap-6">
                  <div className="rounded-2xl bg-white/5 p-4 text-white">
                    <Clock size={32} />
                  </div>
                  <div>
                    <h4 className="mb-1 text-xl font-bold">Disponibilidade</h4>
                    <p className="mb-1 text-gray-400">Operamos todos os dias do ano</p>
                    <p className="flex items-center gap-2 font-bold text-white">
                      <CheckCircle2 size={16} className="text-[#D4AF37]" />
                      24 Horas / 7 Dias
                    </p>
                  </div>
                </div>
              </div>

            </div>

            <div className="h-fit self-start rounded-[40px] border border-white/5 bg-[#0A0A0A] p-10 md:p-16">
              <h2 className="mb-6 text-3xl font-bold">Atendimento Imediato</h2>
              <p className="mb-8 text-gray-400">
                Para agilizar seu atendimento, fale direto no WhatsApp ou por ligacao. Assim alinhamos rota, horario e categoria ideal do servico.
              </p>

              <div className="space-y-4">
                <a
                  href={COMPANY_LINKS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whatsapp-cta flex w-full items-center justify-center gap-2 rounded-full bg-[#D4AF37] py-4 font-bold text-black transition-all hover:bg-[#B8860B]"
                >
                  <MessageCircle size={20} />
                  CHAMAR NO WHATSAPP
                  <ArrowRight size={18} />
                </a>

                <a
                  href={COMPANY_LINKS.phone}
                  className="flex w-full items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 py-4 font-bold transition-colors hover:bg-white/10"
                >
                  <Phone size={20} className="text-[#D4AF37]" />
                  LIGAR AGORA
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
