import React from "react";
import { motion } from "motion/react";
import { Users, Briefcase, ShieldCheck, Snowflake, Wifi, Info, ArrowRight } from "lucide-react";
import { COMPANY_LINKS } from "@/app/config/company";
import { SITE_IMAGES } from "@/app/config/siteImages";
import { ImageWithFallback } from "@/shared/media/ImageWithFallback";

export function Fleet() {
  const categories = [
    {
      name: "Sedan Executivo Nacional",
      model: "Toyota Corolla, Chevrolet Onix Plus ou similar (frota brasileira)",
      capacity: "3 Passageiros",
      luggage: "2 Malas Grandes",
      image: SITE_IMAGES.corporate,
      features: ["Cabine silenciosa", "Ar-condicionado digital", "Carregador USB", "Motorista profissional"],
      bestFor: "Executivos, casais e passageiros que buscam deslocamentos urbanos e aeroportuários com conforto."
    },
    {
      name: "Spin Táxi Executivo (Principal)",
      model: "Chevrolet Spin 1.8 - versão brasileira para transporte executivo",
      capacity: "6-7 Passageiros",
      luggage: "5 Malas Grandes",
      image: SITE_IMAGES.fleet,
      features: ["Interior espaçoso", "Grande capacidade de bagagem", "Assentos confortáveis", "Ideal para grupos"],
      bestFor: "Famílias, pequenos grupos e equipes corporativas com maior volume de bagagem."
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
            Nossa <span className="text-[#D4AF37]">Frota</span>
          </motion.h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Veículos executivos selecionados para oferecer conforto, apresentação impecável e segurança em qualquer trajeto.
          </p>
        </div>
      </section>

      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {categories.map((cat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-[#0A0A0A] rounded-[40px] overflow-hidden border border-white/5 group hover:border-[#D4AF37]/30 transition-all"
              >
                <div className="h-[350px] overflow-hidden">
                  <ImageWithFallback 
                    src={cat.image} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                    alt={cat.name} 
                  />
                </div>
                <div className="p-8 md:p-12">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h2 className="text-3xl font-bold mb-2">{cat.name}</h2>
                      <p className="text-[#D4AF37] font-medium">{cat.model}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-6 mb-10">
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-white/5 rounded-xl text-[#D4AF37]">
                        <Users size={24} />
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 uppercase tracking-widest">Capacidade</div>
                        <div className="font-bold">{cat.capacity}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="p-3 bg-white/5 rounded-xl text-[#D4AF37]">
                        <Briefcase size={24} />
                      </div>
                      <div>
                        <div className="text-xs text-gray-500 uppercase tracking-widest">Bagagem</div>
                        <div className="font-bold">{cat.luggage}</div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-10">
                    <h4 className="text-sm font-bold uppercase tracking-widest text-gray-500 mb-4">Destaques</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {cat.features.map((feat, i) => (
                        <div key={i} className="flex items-center gap-2 text-white">
                          <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></div>
                          {feat}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-6 bg-white/5 rounded-2xl mb-10">
                    <div className="flex gap-3">
                      <Info size={20} className="text-[#D4AF37] shrink-0" />
                      <div>
                        <h5 className="font-bold text-sm mb-1 uppercase tracking-wider">Ideal Para</h5>
                        <p className="text-sm text-gray-400">{cat.bestFor}</p>
                      </div>
                    </div>
                  </div>

                  <a
                    href={COMPANY_LINKS.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#D4AF37] text-black py-4 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-[#B8860B] transition-all"
                  >
                    RESERVAR ESTA CATEGORIA
                    <ArrowRight size={20} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0A0A0A] border-y border-[#D4AF37]/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Nossos Padrões de Qualidade</h2>
            <p className="text-gray-400">Em todas as categorias, seguimos o mesmo padrão de qualidade, conservação e atendimento.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                icon: <ShieldCheck size={32} className="text-[#D4AF37]" />, 
                title: "Inspeção de Segurança", 
                desc: "Os veículos passam por inspeções técnicas regulares e manutenção preventiva." 
              },
              { 
                icon: <Snowflake size={32} className="text-[#D4AF37]" />, 
                title: "Higienização Profunda", 
                desc: "Cada veículo é sanitizado e aspirado antes de cada novo atendimento." 
              },
              { 
                icon: <Wifi size={32} className="text-[#D4AF37]" />, 
                title: "Totalmente Equipados", 
                desc: "Equipados com rastreamento GPS e amenidades para uma jornada conectada." 
              }
            ].map((s, i) => (
              <div key={i} className="text-center p-8 bg-black border border-white/5 rounded-3xl">
                <div className="flex justify-center mb-6">{s.icon}</div>
                <h3 className="text-xl font-bold mb-4">{s.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
