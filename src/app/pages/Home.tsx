import React from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { Shield, Clock, Award, ChevronRight, Star, Car, Briefcase, Plane, MessageCircle, Phone, CheckCircle2 } from "lucide-react";
import { COMPANY_INFO, COMPANY_LINKS } from "@/app/config/company";
import { ImageWithFallback } from "@/shared/media/ImageWithFallback";

export function Home() {
  const features = [
    { icon: <Shield className="text-[#D4AF37]" />, title: "Viagem Segura", desc: "Protocolos rigorosos de segurança e rastreamento." },
    { icon: <Clock className="text-[#D4AF37]" />, title: "Serviço 24/7", desc: "Sempre disponível para seus voos matinais ou eventos tardios." },
    { icon: <Briefcase className="text-[#D4AF37]" />, title: "Transportamos o que é mais valioso", desc: "Seu tempo, sua segurança e sua tranquilidade em cada trajeto." },
    { icon: <Award className="text-[#D4AF37]" />, title: "Qualidade de Luxo", desc: "Pontualidade e serviço de bordo premium como padrão." },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1764089859665-7d417664c5de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGVjdXRpdmUlMjBzZWRhbiUyMGJsYWNrJTIwY2FyJTIwY2hhdWZmZXVyfGVufDF8fHx8MTc3MTY5NDEzMXww&ixlib=rb-4.1.0&q=80&w=1080"
            className="w-full h-full object-cover"
            alt="Carro Executivo de Luxo"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/30 text-[#D4AF37] text-xs font-bold tracking-widest uppercase mb-6">
              <Star size={14} className="fill-[#D4AF37]" />
              Serviço 5 Estrelas em São Paulo
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
              Traslado Particular <span className="text-[#D4AF37]">Executivo</span> em São Paulo
            </h1>
            <p className="text-xl text-gray-300 mb-10 leading-relaxed max-w-lg">
              Experimente o auge do conforto e segurança com nosso serviço premium de motorista. Aeroportos, eventos e transporte corporativo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={COMPANY_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#D4AF37] text-black px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:bg-[#B8860B] transition-all transform hover:-translate-y-1"
              >
                AGENDAR AGORA
                <ChevronRight size={20} />
              </a>
              <Link
                to="/transfers"
                className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center justify-center gap-2 hover:bg-white/20 transition-all"
              >
                NOSSOS SERVIÇOS
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-[#0A0A0A] py-12 border-y border-[#D4AF37]/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center text-center gap-3"
              >
                <div className="p-3 bg-white/5 rounded-2xl">
                  {React.cloneElement(f.icon as React.ReactElement, { size: 32 })}
                </div>
                <h3 className="font-bold text-lg">{f.title}</h3>
                <p className="text-sm text-gray-500 max-w-[200px]">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Services Preview */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h2 className="text-[#D4AF37] font-bold tracking-[0.2em] uppercase text-sm mb-4">Soluções Elite</h2>
              <h3 className="text-4xl md:text-5xl font-bold">Serviços Premium</h3>
            </div>
            <Link to="/transfers" className="text-[#D4AF37] font-bold flex items-center gap-2 group">
              VER TODOS OS SERVIÇOS <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: "Traslados Aeroporto", 
                icon: <Plane size={40} className="text-[#D4AF37]" />, 
                img: "https://images.unsplash.com/photo-1620996149152-277fddb58133?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYW8lMjBwYXVsbyUyMGNpdHlzY2FwZSUyMG5pZ2h0JTIwc2t5bGluZSUyMGx1eHVyeXxlbnwxfHx8fDE3NzE2OTQxMzJ8MA",
                desc: "Pickups pontuais em GRU, CGH e VCP com serviço de recepção." 
              },
              { 
                title: "Logística Corporativa", 
                icon: <Briefcase size={40} className="text-[#D4AF37]" />, 
                img: "https://images.unsplash.com/photo-1696992443043-7d63e521b91c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGF1ZmZldXIlMjBpbiUyMHN1aXQlMjBvcGVuaW5nJTIwY2FyJTIwZG9vciUyMGx1eHVyeSUyMHNlcnZpY2V8ZW58MXx8fHwxNzcxNjk0MTMyfDA",
                desc: "Transporte eficiente e discreto para executivos e convidados VIP." 
              },
              { 
                title: "Frota Executiva", 
                icon: <Car size={40} className="text-[#D4AF37]" />, 
                img: "https://images.unsplash.com/photo-1722816385770-8640d490117b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMGV4ZWN1dGl2ZSUyMG1pbml2YW4lMjB2LWNsYXNzJTIwbWVyY2VkZXN8ZW58MXx8fHwxNzcxNjk0MTM0fDA",
                desc: "Veículos modernos e meticulosamente mantidos para grupos e individuais." 
              }
            ].map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative h-[400px] overflow-hidden rounded-3xl"
              >
                <ImageWithFallback src={s.img} className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" alt={s.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="mb-4">{s.icon}</div>
                  <h4 className="text-2xl font-bold mb-2">{s.title}</h4>
                  <p className="text-gray-300 text-sm">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-24 bg-[#0A0A0A] relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden border-2 border-[#D4AF37]/20">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1632931189735-8d63eed6f4cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBjYXIlMjBpbnRlcmlvciUyMGxlYXRoZXIlMjBzZWF0cyUyMHdpZmklMjB3YXRlciUyMGJvdHRsZXxlbnwxfHx8fDE3NzE2OTQxMzJ8MA"
                  className="w-full h-full object-cover"
                  alt="Interior do Carro"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-[#D4AF37] text-black p-8 rounded-3xl shadow-2xl max-w-[240px]">
                <div className="text-4xl font-bold mb-1">15+</div>
                <div className="text-sm font-bold uppercase tracking-wider">Anos de Experiência</div>
              </div>
            </div>
            <div>
              <h2 className="text-[#D4AF37] font-bold tracking-[0.2em] uppercase text-sm mb-4">Conforto Absoluto</h2>
              <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">Experiência de Primeira Classe em Cada Viagem</h3>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Acreditamos que o transporte deve ser a parte mais livre de estresse da sua viagem. Nossos veículos são higienizados antes de cada corrida e equipados com amenidades premium para garantir seu conforto.
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {[
                  "Água Cortesia",
                  "Wi-Fi de Alta Velocidade",
                  "Carregadores de Celular",
                  "Ar Condicionado Digital",
                  "Cadeirinha Disponível",
                  "Monitoramento de Voos"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-white font-medium">
                    <CheckCircle2 size={18} className="text-[#D4AF37]" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                to="/onboard"
                className="inline-flex items-center gap-2 border-b-2 border-[#D4AF37] text-[#D4AF37] font-bold py-2 hover:gap-4 transition-all"
              >
                DESCUBRA OS SERVIÇOS DE BORDO
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="bg-[#D4AF37] rounded-[40px] p-8 md:p-16 text-center text-black flex flex-col items-center">
            <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight">Pronto para agendar seu <br />traslado premium?</h2>
            <p className="text-lg md:text-xl font-medium mb-12 max-w-2xl opacity-80">
              Solicite um orçamento instantâneo e reserve seu veículo via WhatsApp. Nossa equipe está disponível 24/7 para atendê-lo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={COMPANY_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-black text-[#D4AF37] border-2 border-black px-10 py-5 rounded-full font-bold text-xl flex items-center justify-center gap-3 hover:bg-black/90 transition-colors"
              >
                <MessageCircle size={24} />
                CHAT WHATSAPP
              </a>
              <a
                href={COMPANY_LINKS.phone}
                className="bg-transparent border-2 border-black text-black px-10 py-5 rounded-full font-bold text-xl flex items-center justify-center gap-3 hover:bg-black/10 transition-colors"
              >
                <Phone size={24} />
                LIGAR AGORA ({COMPANY_INFO.phoneDisplay})
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
