import React from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";
import {
  Shield,
  Clock,
  Award,
  ChevronRight,
  Car,
  Briefcase,
  Plane,
  MessageCircle,
  Phone,
  CheckCircle2,
  Sparkles,
  Radar,
} from "lucide-react";
import { COMPANY_INFO, COMPANY_LINKS } from "@/app/config/company";
import { SITE_IMAGES } from "@/app/config/siteImages";
import { ImageWithFallback } from "@/shared/media/ImageWithFallback";

const features = [
  {
    icon: <Shield className="text-[#D9B44A]" />,
    title: "Segurança em primeiro lugar",
    desc: "Operação monitorada em tempo real com protocolos claros e rastreabilidade completa.",
  },
  {
    icon: <Clock className="text-white" />,
    title: "Precisão 24/7",
    desc: "Atendimento contínuo para aeroportos, agendas corporativas e eventos de alto fluxo.",
  },
  {
    icon: <Award className="text-[#D9B44A]" />,
    title: "Experiência de mercado",
    desc: "Mais de 20 anos atendendo com consistência, discrição e foco no detalhe.",
  },
  {
    icon: <Radar className="text-white" />,
    title: "Logística inteligente",
    desc: "Roteiros ajustados por horário, trânsito e prioridade de embarque.",
  },
];

const services = [
  {
    title: "Traslados Aeroportuários",
    icon: <Plane size={34} className="text-[#D9B44A]" />,
    img: SITE_IMAGES.airport,
    desc: "Atendimento em GRU, CGH e VCP para saídas e chegadas com previsibilidade e conforto.",
  },
  {
    title: "Mobilidade Corporativa",
    icon: <Briefcase size={34} className="text-white" />,
    img: SITE_IMAGES.corporate,
    desc: "Suporte para agendas executivas, reuniões, roadshows e eventos empresariais.",
  },
  {
    title: "Frota MarceloTaxi",
    icon: <Car size={34} className="text-[#D9B44A]" />,
    img: SITE_IMAGES.fleet,
    desc: "Veículos limpos, revisados e prontos para manter seu deslocamento em padrão profissional.",
  },
];

const comfortItems = [
  "Água cortesia",
  "Ar-condicionado digital",
  "Água, sucos e bebidas",
  "Snacks e cereais a bordo",
];

export function Home() {
  return (
    <div className="flex flex-col">
      <Helmet>
        <title>MarceloTaxi | Transfer Executivo em São Paulo</title>
        <meta
          name="description"
          content="MarceloTaxi oferece transfer executivo em São Paulo com atendimento 24/7 para aeroportos, corporativo e eventos."
        />
      </Helmet>

      <section className="relative min-h-[88vh] overflow-hidden border-b border-white/10">
        <ImageWithFallback
          src={SITE_IMAGES.hero}
          className="absolute inset-0 h-full w-full object-cover object-[center_52%]"
          alt="Táxi com avião ao fundo"
          loading="eager"
          fetchPriority="high"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#04070f]/92 via-[#04070f]/75 to-[#04070f]/48" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#04070f]/70 via-transparent to-[#04070f]/20" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:42px_42px] opacity-30" />

        <div className="container relative z-10 mx-auto flex justify-center px-4 py-16 md:py-24 lg:py-28">
          <div className="w-full max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="glass-panel mx-auto w-full max-w-4xl rounded-3xl p-7 text-center md:p-12"
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-white">
                <Sparkles size={14} />
                Mais de 20 anos em São Paulo
              </div>
              <h1 className="mb-6 text-5xl font-black leading-[1.02] md:text-7xl">
                Táxi executivo com
                <span className="mt-2 block text-[#D9B44A]">
                  pontualidade e confiança
                </span>
              </h1>
              <p className="mx-auto mb-8 max-w-2xl rounded-2xl border border-[#D9B44A]/35 bg-black/40 px-5 py-4 text-lg font-extrabold uppercase leading-tight tracking-[0.08em] text-[#f7e5b6] drop-shadow-[0_2px_10px_rgba(217,180,74,0.25)] md:text-xl">
                Transportamos o que há de mais valioso
              </p>

              <div className="mb-8 flex flex-col justify-center gap-4 sm:flex-row">
                <a
                  href={COMPANY_LINKS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whatsapp-cta inline-flex items-center justify-center gap-2 rounded-full border border-[#D9B44A] bg-[#D9B44A] px-8 py-4 text-base font-black text-black transition-all hover:-translate-y-0.5 hover:bg-[#c79d36]"
                >
                  AGENDAR AGORA
                  <ChevronRight size={18} />
                </a>
              </div>

              <div className="grid grid-cols-1 gap-3 text-center sm:grid-cols-3">
                <div className="rounded-xl border border-white/10 bg-black/45 px-4 py-3 text-sm">
                  <p className="font-bold text-[#D9B44A]">20+ anos</p>
                  <p className="text-slate-300">Operação executiva</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-black/45 px-4 py-3 text-sm">
                  <p className="font-bold text-white">24/7</p>
                  <p className="text-slate-300">Atendimento ativo</p>
                </div>
                <div className="rounded-xl border border-white/10 bg-black/45 px-4 py-3 text-sm">
                  <p className="font-bold text-[#D9B44A]">SP + aeroportos</p>
                  <p className="text-slate-300">Cobertura estratégica</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#070d1a]/70 py-14">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-panel rounded-2xl p-5"
              >
                <div className="mb-3 inline-flex rounded-xl border border-white/10 bg-white/5 p-2.5">
                  {React.cloneElement(feature.icon as React.ReactElement, { size: 24 })}
                </div>
                <h3 className="mb-2 text-lg font-black">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-slate-300">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 flex flex-col items-start justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-xs font-black uppercase tracking-[0.2em] text-white">Arquitetura de serviços</p>
              <h2 className="text-4xl font-black md:text-5xl">Soluções de mobilidade</h2>
            </div>
            <Link to="/transfers" className="group inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.1em] text-[#D9B44A]">
              Ver todos os serviços
              <ChevronRight size={18} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-7 lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="group relative overflow-hidden rounded-3xl border border-white/10"
              >
                <ImageWithFallback
                  src={service.img}
                  className="h-[380px] w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  alt={service.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-7">
                  <div className="mb-4 inline-flex w-fit rounded-xl border border-white/20 bg-black/50 p-2">{service.icon}</div>
                  <h3 className="mb-2 text-2xl font-black">{service.title}</h3>
                  <p className="text-sm text-slate-200">{service.desc}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2.2rem] bg-gradient-to-br from-white/15 to-[#D9B44A]/15 blur-xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10">
                <ImageWithFallback
                  src={SITE_IMAGES.service}
                  className="h-full w-full object-cover"
                  alt="Táxi executivo em serviço"
                />
              </div>
              <div className="absolute right-5 bottom-5 rounded-2xl border border-[#D9B44A]/30 bg-black/75 px-5 py-4 backdrop-blur">
                <p className="text-3xl font-black text-[#D9B44A]">20+</p>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-200">Anos de experiência</p>
              </div>
            </div>

            <div>
              <p className="mb-3 text-xs font-black uppercase tracking-[0.2em] text-[#D9B44A]">Conforto e tecnologia</p>
              <h2 className="mb-6 text-4xl font-black leading-tight md:text-5xl">
                Deslocamento executivo do primeiro ao último minuto
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-slate-300">
                Da reserva ao desembarque, cada detalhe é pensado para reduzir atrito na sua rotina e elevar a experiência de transporte.
              </p>
              <ul className="mb-10 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {comfortItems.map((item) => (
                  <li key={item} className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-semibold text-slate-200">
                    <CheckCircle2 size={16} className="text-[#D9B44A]" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                to="/onboard"
                className="inline-flex items-center gap-2 rounded-full border border-[#D9B44A]/40 px-6 py-3 text-sm font-black uppercase tracking-[0.1em] text-[#D9B44A] transition-colors hover:bg-[#D9B44A] hover:text-black"
              >
                Serviços de bordo
                <ChevronRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="relative overflow-hidden rounded-[2.2rem] border border-[#D9B44A]/30 bg-gradient-to-br from-[#D9B44A] via-[#e3c164] to-[#a57d21] p-8 text-black md:p-14">
            <div className="pointer-events-none absolute top-0 right-0 h-56 w-56 rounded-full bg-white/20 blur-3xl" />
            <div className="relative z-10 text-center">
              <h2 className="mb-6 text-4xl font-black leading-tight md:text-6xl">Pronto para o próximo traslado?</h2>
              <p className="mx-auto mb-10 max-w-3xl text-lg font-semibold opacity-85 md:text-xl">
                Receba confirmação rápida no WhatsApp e reserve sua viagem com atendimento profissional em São Paulo.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <a
                  href={COMPANY_LINKS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whatsapp-cta inline-flex items-center justify-center gap-3 rounded-full border-2 border-black bg-white px-9 py-4 text-base font-black text-black transition-colors"
                >
                  <MessageCircle size={20} />
                  CHAT WHATSAPP
                </a>
                <a
                  href={COMPANY_LINKS.phone}
                  className="inline-flex items-center justify-center gap-3 rounded-full border-2 border-black bg-transparent px-9 py-4 text-base font-black text-black transition-colors hover:bg-black/10"
                >
                  <Phone size={20} />
                  LIGAR AGORA ({COMPANY_INFO.phoneDisplay})
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
