import React from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import {
  Shield,
  Clock,
  Award,
  ChevronRight,
  Star,
  Car,
  Briefcase,
  Plane,
  MessageCircle,
  Phone,
  CheckCircle2,
} from "lucide-react";
import { COMPANY_INFO, COMPANY_LINKS } from "@/app/config/company";
import { ImageWithFallback } from "@/shared/media/ImageWithFallback";

const features = [
  {
    icon: <Shield className="text-[#D4AF37]" />,
    title: "Viagem Segura",
    desc: "Protocolos rigorosos de seguranca e rastreamento.",
  },
  {
    icon: <Clock className="text-[#D4AF37]" />,
    title: "Servico 24/7",
    desc: "Sempre disponivel para voos, eventos e traslados em qualquer horario.",
  },
  {
    icon: <Award className="text-[#D4AF37]" />,
    title: "+20 Anos de Experiencia",
    desc: "Atendimento profissional e pontual em cada traslado.",
  },
  {
    icon: <Car className="text-[#D4AF37]" />,
    title: "Taxi Executivo",
    desc: "Taxis brancos e pretos para viagens urbanas, corporativas e aeroporto.",
  },
];

const services = [
  {
    title: "Traslados Aeroporto",
    icon: <Plane size={40} className="text-[#D4AF37]" />,
    img: "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    desc: "Atendimento em GRU, CGH e VCP, com saidas para Capital, Paulista, Faria Lima, Itaim, Moema e Alphaville.",
  },
  {
    title: "Logistica Corporativa",
    icon: <Briefcase size={40} className="text-[#D4AF37]" />,
    img: "https://images.unsplash.com/photo-1517026575980-3e1e2dedeab4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    desc: "Corridas e disposicoes para reunioes e hoteis em Pinheiros, Jardins, Berrini, Vila Olimpia e regiao central de SP.",
  },
  {
    title: "Frota Executiva",
    icon: <Car size={40} className="text-[#D4AF37]" />,
    img: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    desc: "Taxis brancos e pretos, sempre limpos e revisados, para traslados individuais e atendimento corporativo em Sao Paulo.",
  },
];

const comfortItems = [
  "Agua cortesia",
  "Wi-Fi de alta velocidade",
  "Carregadores de celular",
  "Ar condicionado digital",
];

export function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative flex h-[90vh] items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1517026575980-3e1e2dedeab4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
            className="h-full w-full object-cover"
            alt="Taxi preto executivo"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/20 px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
              <Star size={14} className="fill-[#D4AF37]" />
              Servico 5 estrelas em Sao Paulo
            </div>
            <h1 className="mb-6 text-5xl font-bold leading-tight md:text-7xl">
              Traslado Particular <span className="text-[#D4AF37]">Executivo</span> em Sao Paulo
            </h1>
            <p className="mb-10 max-w-lg text-xl leading-relaxed text-gray-300">
              Atendimento com conforto, seguranca e pontualidade para aeroportos, eventos e transporte corporativo em Sao Paulo.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href={COMPANY_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full bg-[#D4AF37] px-8 py-4 text-lg font-bold text-black transition-all hover:-translate-y-1 hover:bg-[#B8860B]"
              >
                AGENDAR AGORA
                <ChevronRight size={20} />
              </a>
              <Link
                to="/transfers"
                className="flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-8 py-4 text-lg font-bold text-white backdrop-blur-md transition-all hover:bg-white/20"
              >
                NOSSOS SERVICOS
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-[#D4AF37]/10 bg-[#0A0A0A] py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center gap-3 text-center"
              >
                <div className="rounded-2xl bg-white/5 p-3">
                  {React.cloneElement(feature.icon as React.ReactElement, { size: 32 })}
                </div>
                <h3 className="text-lg font-bold">{feature.title}</h3>
                <p className="max-w-[200px] text-sm text-gray-500">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black py-24">
        <div className="container mx-auto px-4">
          <div className="mb-16 flex flex-col items-end justify-between gap-6 md:flex-row">
            <div>
              <h2 className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#D4AF37]">Solucoes em SP</h2>
              <h3 className="text-4xl font-bold md:text-5xl">Servicos</h3>
            </div>
            <Link to="/transfers" className="group flex items-center gap-2 font-bold text-[#D4AF37]">
              VER TODOS OS SERVICOS
              <ChevronRight size={20} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative h-[400px] overflow-hidden rounded-3xl"
              >
                <ImageWithFallback
                  src={service.img}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  alt={service.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <div className="mb-4">{service.icon}</div>
                  <h4 className="mb-2 text-2xl font-bold">{service.title}</h4>
                  <p className="text-sm text-gray-300">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#0A0A0A] py-24">
        <div className="container relative z-10 mx-auto px-4">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <div className="relative">
              <div className="aspect-square overflow-hidden rounded-3xl border-2 border-[#D4AF37]/20">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1502877338535-766e1452684a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  className="h-full w-full object-cover"
                  alt="Taxi branco em servico"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 max-w-[240px] rounded-3xl bg-[#D4AF37] p-8 text-black shadow-2xl">
                <div className="mb-1 text-4xl font-bold">20+</div>
                <div className="text-sm font-bold uppercase tracking-wider">Anos de Experiencia</div>
              </div>
            </div>
            <div>
              <h2 className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[#D4AF37]">Conforto Absoluto</h2>
              <h3 className="mb-8 text-4xl font-bold leading-tight md:text-5xl">
                Mais de 20 anos de experiencia em cada viagem
              </h3>
              <p className="mb-8 text-lg leading-relaxed text-gray-400">
                Acreditamos que o transporte deve ser a parte mais tranquila da sua viagem. Nossos taxis sao higienizados antes de cada corrida e preparados para atender com conforto e pontualidade em Sao Paulo.
              </p>
              <ul className="mb-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {comfortItems.map((item) => (
                  <li key={item} className="flex items-center gap-3 font-medium text-white">
                    <CheckCircle2 size={18} className="text-[#D4AF37]" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                to="/onboard"
                className="inline-flex items-center gap-2 border-b-2 border-[#D4AF37] py-2 font-bold text-[#D4AF37] transition-all hover:gap-4"
              >
                DESCUBRA OS SERVICOS DE BORDO
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center rounded-[40px] bg-[#D4AF37] p-8 text-center text-black md:p-16">
            <h2 className="mb-8 text-4xl font-black leading-tight md:text-6xl">
              Pronto para agendar seu <br />
              traslado?
            </h2>
            <p className="mb-12 max-w-2xl text-lg font-medium opacity-80 md:text-xl">
              Solicite um orcamento instantaneo e reserve seu veiculo via WhatsApp. Nossa equipe esta disponivel 24/7 para atende-lo.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href={COMPANY_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 rounded-full border-2 border-black bg-white px-10 py-5 text-xl font-bold text-black transition-colors hover:bg-black hover:text-[#D4AF37]"
              >
                <MessageCircle size={24} />
                CHAT WHATSAPP
              </a>
              <a
                href={COMPANY_LINKS.phone}
                className="flex items-center justify-center gap-3 rounded-full border-2 border-black bg-transparent px-10 py-5 text-xl font-bold text-black transition-colors hover:bg-black/10"
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
