import React from "react";
import { motion } from "motion/react";
import { Wifi, Battery, Snowflake, Coffee, Music, Shield, CheckCircle2 } from "lucide-react";
import { COMPANY_LINKS } from "@/app/config/company";
import { SITE_IMAGES } from "@/app/config/siteImages";
import { ImageWithFallback } from "@/shared/media/ImageWithFallback";

export function Onboard() {
  const amenities = [
    {
      icon: <Wifi size={40} className="text-[#D4AF37]" />,
      title: "Wi-Fi de Alta Velocidade",
      description: "Conexão estável durante todo o trajeto, ideal para trabalho, comunicação e entretenimento."
    },
    {
      icon: <Snowflake size={40} className="text-[#D4AF37]" />,
      title: "Climatização Digital",
      description: "Climatização eficiente para manter o ambiente confortável em qualquer horário do dia."
    },
    {
      icon: <Battery size={40} className="text-[#D4AF37]" />,
      title: "Pontos de Carga",
      description: "Cabos e pontos de recarga disponíveis para que seus dispositivos acompanhem o ritmo da sua agenda."
    },
    {
      icon: <Coffee size={40} className="text-[#D4AF37]" />,
      title: "Água Cortesia",
      description: "Água mineral cortesia para tornar a experiência de bordo mais agradável."
    },
    {
      icon: <Music size={40} className="text-[#D4AF37]" />,
      title: "Som Premium",
      description: "Cabine silenciosa e sistema de som de qualidade para uma viagem mais confortável."
    },
    {
      icon: <Shield size={40} className="text-[#D4AF37]" />,
      title: "Veículo Higienizado",
      description: "Limpeza cuidadosa e protocolos de higiene aplicados entre os atendimentos."
    }
  ];

  return (
    <div className="flex flex-col">
      <section className="relative h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback 
            src={SITE_IMAGES.service} 
            className="w-full h-full object-cover" 
            alt="Taxi preto e branco em atendimento" 
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Experiência <span className="text-[#D4AF37]">de Bordo</span>
          </motion.h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Cada detalhe a bordo é pensado para oferecer conforto, praticidade e uma experiência de alto padrão.
          </p>
        </div>
      </section>

      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {amenities.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#0A0A0A] p-10 rounded-[32px] border border-white/5 hover:border-[#D4AF37]/40 transition-all group"
              >
                <div className="mb-8 transform group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0A0A0A]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl font-bold mb-8">Viajando com Tranquilidade</h2>
              <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                Além dos itens de conforto, você conta com um atendimento profissional, atencioso e preparado para tornar o trajeto mais leve e eficiente.
              </p>
              <div className="space-y-6">
                {[
                  { title: "Rastreamento de Voo", desc: "Acompanhamos seu pouso em tempo real para ajustar qualquer atraso." },
                  { title: "Assistência Porta a Porta", desc: "Ajuda com bagagens desde a sua porta até o porta-malas e vice-versa." },
                  { title: "Motoristas Bilíngues", desc: "Comunicação clara em Inglês para nossos clientes internacionais." },
                  { title: "Ambiente Sanitizado", desc: "Álcool em gel disponível para passageiros em todos os veículos." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="mt-1">
                      <CheckCircle2 className="text-[#D4AF37]" size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">{item.title}</h4>
                      <p className="text-gray-400 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="rounded-[40px] overflow-hidden border border-[#D4AF37]/20 shadow-2xl">
                <ImageWithFallback 
                  src={SITE_IMAGES.hero} 
                  className="w-full h-full object-cover" 
                  alt="Taxi executivo preto e branco" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-black">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-8">Experimente o Verdadeiro Transporte Executivo</h2>
            <p className="text-gray-400 text-xl mb-12">
              Reserve sua próxima viagem com a MarceloTaxi e descubra por que tantos clientes confiam em nosso atendimento executivo em São Paulo.
            </p>
            <a
              href={COMPANY_LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#D4AF37] text-black px-12 py-5 rounded-full font-bold text-xl inline-flex items-center gap-3 hover:scale-105 transition-transform"
            >
              RESERVAR MINHA VIAGEM AGORA
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
