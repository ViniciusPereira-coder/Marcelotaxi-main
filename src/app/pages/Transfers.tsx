import React from "react";
import { motion } from "motion/react";
import { Plane, Building2, Palmtree, Calendar, ArrowRight, CheckCircle2 } from "lucide-react";
import { COMPANY_LINKS } from "@/app/config/company";
import { ImageWithFallback } from "@/shared/media/ImageWithFallback";

export function Transfers() {
  const services = [
    {
      title: "Traslados de Aeroporto",
      subtitle: "Chegadas e Partidas",
      icon: <Plane size={32} />,
      image: "https://images.unsplash.com/photo-1620996149152-277fddb58133?crop=entropy&cs=tinysrgb&fit=max&fm=jpg",
      description: "Transporte sem preocupações de e para os principais aeroportos de São Paulo. Monitoramos seu voo para garantir que estaremos lá exatamente quando você pousar.",
      locations: ["Guarulhos (GRU)", "Congonhas (CGH)", "Viracopos (VCP)"],
      benefits: ["Recepção com placa de nome", "60 min de espera inclusos", "Monitoramento de atrasos", "Motorista bilíngue"]
    },
    {
      title: "Transporte Corporativo",
      subtitle: "Mobilidade Executiva",
      icon: <Building2 size={32} />,
      image: "https://images.unsplash.com/photo-1696992443043-7d63e521b91c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg",
      description: "Transporte confiável para reuniões de negócios, conferências e transferências entre escritórios. Motoristas profissionais que entendem o valor do seu tempo e discrição.",
      locations: ["Faria Lima", "Berrini", "Paulista", "Alphaville"],
      benefits: ["Serviço confidencial", "Faturamento mensal disponível", "Veículos discretos", "Pontualidade garantida"]
    },
    {
      title: "Traslados Litoral e Interior",
      subtitle: "Viagens de Lazer",
      icon: <Palmtree size={32} />,
      image: "https://images.unsplash.com/photo-1764089859665-7d417664c5de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg",
      description: "Viagens de longa distância confortáveis para a costa ou interior. Comece suas férias da maneira certa, sem o estresse de dirigir ou estacionar.",
      locations: ["Santos e Guarujá", "Ilhabela e São Sebastião", "Campos do Jordão", "Sorocaba"],
      benefits: ["Ampla capacidade de bagagem", "Paradas conforme solicitado", "Pedágios inclusos", "Serviço porta a porta"]
    },
    {
      title: "Eventos e Casamentos",
      subtitle: "Ocasiões Especiais",
      icon: <Calendar size={32} />,
      image: "https://images.unsplash.com/photo-1632931189735-8d63eed6f4cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg",
      description: "Coordenação completa para eventos especiais. Oferecemos transporte de luxo para noivos, famílias e convidados de alto perfil.",
      locations: ["Região Metropolitana de São Paulo"],
      benefits: ["Serviço de prontidão", "Coordenação de múltiplos veículos", "Modelos sedan premium", "Traje profissional"]
    }
  ];

  return (
    <div className="flex flex-col">
      <section className="bg-black py-20 border-b border-[#D4AF37]/20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Nossos <span className="text-[#D4AF37]">Serviços</span>
          </motion.h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Soluções abrangentes de transporte executivo personalizadas para suas necessidades específicas em São Paulo e região.
          </p>
        </div>
      </section>

      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-col gap-32">
            {services.map((service, index) => (
              <div 
                key={index} 
                className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <motion.div 
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="w-full lg:w-1/2"
                >
                  <div className="relative group">
                    <div className="absolute -inset-4 border-2 border-[#D4AF37]/10 rounded-3xl group-hover:border-[#D4AF37]/30 transition-colors"></div>
                    <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl">
                      <ImageWithFallback src={service.image} className="w-full h-full object-cover" alt={service.title} />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute bottom-8 left-8 p-4 bg-black/80 backdrop-blur-md rounded-xl border border-[#D4AF37]/30">
                        <div className="text-[#D4AF37] mb-2">{service.icon}</div>
                        <h4 className="font-bold text-lg">{service.subtitle}</h4>
                      </div>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="w-full lg:w-1/2"
                >
                  <h2 className="text-4xl font-bold mb-6 text-white">{service.title}</h2>
                  <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="mb-8">
                    <h5 className="text-[#D4AF37] font-bold uppercase text-sm tracking-widest mb-4">Principais Localidades</h5>
                    <div className="flex flex-wrap gap-3">
                      {service.locations.map((loc, i) => (
                        <span key={i} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-white">
                          {loc}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-10">
                    <h5 className="text-[#D4AF37] font-bold uppercase text-sm tracking-widest mb-4">O que está incluso</h5>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {service.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-300">
                          <CheckCircle2 size={18} className="text-[#D4AF37] shrink-0 mt-1" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <a
                    href={COMPANY_LINKS.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#D4AF37] text-black px-8 py-4 rounded-full font-bold hover:bg-[#B8860B] transition-all"
                  >
                    SOLICITAR ORÇAMENTO
                    <ArrowRight size={20} />
                  </a>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0A0A0A] border-t border-[#D4AF37]/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Não encontrou o que precisa?</h2>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto mb-12">
            Oferecemos logística personalizada para grupos, aluguéis de longo prazo e itinerários complexos.
          </p>
          <a
            href={COMPANY_LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-transparent border-2 border-[#D4AF37] text-[#D4AF37] px-10 py-5 rounded-full font-bold text-xl hover:bg-[#D4AF37] hover:text-black transition-all inline-flex items-center gap-3"
          >
            CONTATAR SUPORTE PERSONALIZADO
          </a>
        </div>
      </section>
    </div>
  );
}
