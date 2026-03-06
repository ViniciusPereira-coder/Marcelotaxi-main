import React from "react";
import { motion } from "motion/react";
import { Shield, Target, Users2, Award, History, Building } from "lucide-react";
import { ImageWithFallback } from "@/shared/media/ImageWithFallback";

export function About() {
  return (
    <div className="flex flex-col">
      <section className="bg-black py-20 border-b border-[#D4AF37]/20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Sobre a <span className="text-[#D4AF37]">MarceloTaxi</span>
          </motion.h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Experiência real de taxista em São Paulo, com atendimento particular para aeroporto, cidade e viagens.
          </p>
        </div>
      </section>

      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="inline-block px-4 py-1 bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-bold tracking-[0.2em] uppercase rounded-full mb-6">
                Nossa Herança
              </div>
              <h2 className="text-4xl font-bold mb-8">Sobre o Serviço de Táxi e Traslados Particulares</h2>
              <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                A MarceloTaxi nasceu com o trabalho diário nas ruas de São Paulo. O foco sempre foi simples: oferecer traslado e corridas de táxi com segurança, pontualidade e atenção ao cliente, seja para moradores, turistas ou empresas.
              </p>
              <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                Com conhecimento de rota, trânsito e horários da cidade, planejamos cada viagem para reduzir atrasos e garantir tranquilidade. Atendemos aeroportos, hotéis, eventos, consultas e deslocamentos intermunicipais com suporte direto no WhatsApp.
              </p>
              
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-4xl font-bold text-[#D4AF37] mb-2">15k+</div>
                  <div className="text-sm font-bold uppercase tracking-wider text-white">Viagens Concluídas</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#D4AF37] mb-2">99%</div>
                  <div className="text-sm font-bold uppercase tracking-wider text-white">Satisfação dos Clientes</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-[40px] overflow-hidden">
                <ImageWithFallback 
                  src="https://images.unsplash.com/photo-1549924231-f129b911e442?auto=format&fit=crop&w=1400&q=80" 
                  className="w-full h-full object-cover" 
                  alt="Chevrolet Spin branca usada no serviço de traslado" 
                />
              </div>
              <div className="absolute -bottom-10 -left-10 bg-[#0A0A0A] p-8 border border-[#D4AF37]/20 rounded-3xl hidden md:block">
                <Award size={48} className="text-[#D4AF37] mb-4" />
                <h4 className="font-bold text-xl mb-1">Top Rated</h4>
                <p className="text-sm text-gray-500">Certificado de Excelência 2024</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0A0A0A]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Nossos Valores Centrais</h2>
            <p className="text-gray-400 max-w-xl mx-auto">Os princípios que guiam cada pickup e cada quilômetro que percorremos.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: <Shield className="text-[#D4AF37]" size={40} />,
                title: "Segurança Primeiro",
                desc: "Nunca comprometemos a segurança. Da manutenção dos veículos à verificação de antecedentes dos motoristas, sua segurança é prioridade."
              },
              {
                icon: <Target className="text-[#D4AF37]" size={40} />,
                title: "Pontualidade Extrema",
                desc: "Respeitamos seu tempo. Nossos motoristas chegam 15 minutos antes para cada pickup agendado para garantir zero atrasos."
              },
              {
                icon: <Users2 className="text-[#D4AF37]" size={40} />,
                title: "Serviço Personalizado",
                desc: "Cada cliente tem necessidades diferentes. Adaptamos nosso serviço para atender às suas preferências específicas."
              }
            ].map((value, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="mb-6 p-6 bg-white/5 rounded-3xl">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="bg-[#111111] p-12 md:p-20 rounded-[40px] border border-white/5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
              <div className="flex gap-6">
                <History size={48} className="text-[#D4AF37] shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold mb-4">Nossa Missão</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Fornecer o transporte executivo mais confiável e confortável no Brasil, garantindo que cada passageiro chegue ao seu destino renovado e na hora certa.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <Building size={48} className="text-[#D4AF37] shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold mb-4">Nossa Visão</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Ser o padrão-ouro de mobilidade executiva na América Latina, reconhecido por nosso compromisso com a qualidade, segurança e inovação.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
