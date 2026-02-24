import React from "react";
import { motion } from "motion/react";
import { Wifi, Battery, Snowflake, Coffee, Music, Shield, CheckCircle2 } from "lucide-react";
import { COMPANY_LINKS } from "@/app/config/company";
import { ImageWithFallback } from "@/shared/media/ImageWithFallback";

export function Onboard() {
  const amenities = [
    {
      icon: <Wifi size={40} className="text-[#D4AF37]" />,
      title: "Wi-Fi de Alta Velocidade",
      description: "Mantenha-se conectado durante toda a jornada. Perfeito para checar e-mails entre reuniões ou ouvir sua música favorita."
    },
    {
      icon: <Snowflake size={40} className="text-[#D4AF37]" />,
      title: "Climatização Digital",
      description: "Nossos veículos possuem ar-condicionado multi-zona, garantindo que você viaje na sua temperatura preferida."
    },
    {
      icon: <Battery size={40} className="text-[#D4AF37]" />,
      title: "Pontos de Carga",
      description: "Cabos de carregamento universais para dispositivos Android e iPhone estão disponíveis em todos os veículos."
    },
    {
      icon: <Coffee size={40} className="text-[#D4AF37]" />,
      title: "Água Cortesia",
      description: "Água mineral gelada é fornecida para todos os passageiros em cada viagem para mantê-lo hidratado."
    },
    {
      icon: <Music size={40} className="text-[#D4AF37]" />,
      title: "Som Premium",
      description: "Desfrute de uma cabine silenciosa ou ouça seu áudio preferido através de nossos sistemas de som de alta qualidade."
    },
    {
      icon: <Shield size={40} className="text-[#D4AF37]" />,
      title: "Veículo Higienizado",
      description: "Seguimos protocolos rigorosos de higiene, sanitizando todos os pontos de contato entre cada atendimento."
    }
  ];

  return (
    <div className="flex flex-col">
      <section className="relative h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1632931189735-8d63eed6f4cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg" 
            className="w-full h-full object-cover" 
            alt="Interior de Luxo" 
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
            Cuidamos de cada detalhe para garantir que sua jornada conosco seja o mais confortável e produtiva possível.
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
                Além das amenidades físicas, nosso serviço de bordo inclui o profissionalismo de nossos motoristas. Eles são treinados para proporcionar um ambiente discreto, prestativo e seguro.
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
                  src="https://images.unsplash.com/photo-1696992443043-7d63e521b91c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg" 
                  className="w-full h-full object-cover" 
                  alt="Serviço Profissional" 
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
              Reserve sua próxima viagem com a MarceloTaxi e descubra por que somos a escolha preferida de executivos em São Paulo.
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
