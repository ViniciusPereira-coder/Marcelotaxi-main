import React from "react";
import { motion } from "motion/react";
import { Shield, Target, Users2, Award, History, Building } from "lucide-react";
import { ImageWithFallback } from "@/shared/media/ImageWithFallback";
import mtPngPhoto from "@/app/assets/photos/MT PNG.png";

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
            Uma trajetória construída com excelência, profissionalismo e confiança no transporte executivo em São Paulo.
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
              <h2 className="text-4xl font-bold mb-8">Excelência em transporte executivo, todos os dias</h2>
              <p className="text-gray-400 text-lg mb-6 leading-relaxed">
                A MarceloTaxi nasceu da proposta de oferecer um atendimento verdadeiramente diferenciado, com foco em pontualidade, conforto e relacionamento próximo com cada cliente.
              </p>
              <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                Ao longo dos anos, consolidamos uma operação confiável para empresas, executivos, famílias e viajantes que esperam um serviço compatível com padrões internacionais de qualidade.
              </p>
              
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-4xl font-bold text-[#D4AF37] mb-2">15k+</div>
                  <div className="text-sm font-bold uppercase tracking-wider text-white">Viagens Concluídas</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-[#D4AF37] mb-2">100%</div>
                  <div className="text-sm font-bold uppercase tracking-wider text-white">Satisfação dos Clientes</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-[40px] overflow-hidden">
                <ImageWithFallback 
                  src={mtPngPhoto} 
                  className="w-full h-full object-cover" 
                  alt="Foto MT em PNG" 
                />
              </div>
              <div className="absolute -bottom-16 -left-6 bg-[#0A0A0A] p-6 border border-[#D4AF37]/20 rounded-3xl hidden md:block">
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
                title: "Segurança",
                desc: "Segurança é um princípio operacional. Da manutenção preventiva à condução responsável, cada detalhe é tratado com rigor."
              },
              {
                icon: <Target className="text-[#D4AF37]" size={40} />,
                title: "Pontualidade",
                desc: "Valorizamos seu tempo com planejamento, acompanhamento da agenda e compromisso com horários."
              },
              {
                icon: <Users2 className="text-[#D4AF37]" size={40} />,
                title: "Serviço Personalizado",
                desc: "Cada atendimento é ajustado à necessidade do cliente, com flexibilidade, atenção e foco nos detalhes."
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
                    Entregar um serviço de transporte executivo confiável, confortável e consistente, para que cada cliente viaje com tranquilidade do início ao fim.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <Building size={48} className="text-[#D4AF37] shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold mb-4">Nossa Visão</h3>
                  <p className="text-gray-400 leading-relaxed">
                    Ser referência em mobilidade executiva, reconhecida pela qualidade do atendimento, segurança operacional e excelência na experiência do cliente.
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
