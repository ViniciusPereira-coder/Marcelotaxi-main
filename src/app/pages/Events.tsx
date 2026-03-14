import React from "react";
import { motion } from "motion/react";
import {
  CalendarDays,
  MapPin,
  Music,
  Car,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  ExternalLink,
  Phone,
  Mail,
  Clock3,
  Sparkles,
  ShieldCheck,
  Users,
} from "lucide-react";
import { COMPANY_INFO, COMPANY_LINKS } from "@/app/config/company";
import { ImageWithFallback } from "@/shared/media/ImageWithFallback";

const EVENT_CONFIG = {
  title: "Transfer para Eventos",
  highlight: "Lollapalooza Brasil",
  season: "Edicao 2026",
  location: "Autodromo de Interlagos - SP",
  dates: "20, 21 e 22 de marco de 2026",
  opening: "Abertura de portas: 11h",
  lastEntry: "Ultima entrada: 22h30",
  endTime: "Encerramento do evento: 1h",
  summary:
    "Atendimento executivo para chegar com conforto, sem fila e com retorno seguro apos o festival.",
};

const OFFICIAL_LINKS = {
  home: "https://www.lollapaloozabr.com/",
  ingressos: "https://www.lollapaloozabr.com/ingressos",
  horarios: "https://www.lollapaloozabr.com/horarios",
  information: "https://www.lollapaloozabr.com/information",
  transportes: "https://www.lollapaloozabr.com/transportes",
};

const FLYER_CONFIG = {
  title: "Flyer Lolla 2026",
  subtitle: "Visual principal para venda de transporte",
  image:
    "https://cdn.prod.website-files.com/646fa99d0892704eb2b38032/69a0cf5fdd13f7acfa1ebb1a_IG_FEED_LINEUP_DIA_25.02_PH_V20_02.webp",
};

const eventDays = [
  { dayLabel: "Sexta", date: "20/03/2026", highlight: "Abertura oficial do festival" },
  { dayLabel: "Sabado", date: "21/03/2026", highlight: "Maior volume de publico" },
  { dayLabel: "Domingo", date: "22/03/2026", highlight: "Encerramento do festival" },
];

const pickupPoints = [
  "Aeroporto de Congonhas (CGH)",
  "Aeroporto de Guarulhos (GRU)",
  "Hoteis na Av. Paulista e Jardins",
  "Berrini, Vila Olimpia e Faria Lima",
  "Pinheiros, Itaim e Vila Madalena",
];

const packageOptions = [
  {
    name: "Pacote Ida",
    description: "Chegada planejada antes da abertura dos portoes, sem correria.",
  },
  {
    name: "Pacote Ida e Volta",
    description: "Retorno seguro em ponto combinado apos os shows.",
  },
  {
    name: "Pacote 3 Dias",
    description: "Operacao completa para os 3 dias do festival com prioridade de agenda.",
  },
];

const checklist = [
  "Roteiro alinhado com horario oficial de abertura e encerramento",
  "Ponto de embarque e retorno definido com antecedencia",
  "Atendimento no WhatsApp durante toda a operacao",
  "Suporte para grupos e empresas com multiplos carros",
];

const quickLinks = [
  { label: "Ingressos", href: OFFICIAL_LINKS.ingressos },
  { label: "Programacao e Horarios", href: OFFICIAL_LINKS.horarios },
  { label: "FAQ Oficial", href: OFFICIAL_LINKS.information },
  { label: "Transportes Oficiais", href: OFFICIAL_LINKS.transportes },
];

const whatsappEventLink = `${COMPANY_LINKS.whatsapp}?text=${encodeURIComponent(
  "Oi! Quero reservar transporte para o Lollapalooza Brasil 2026."
)}`;

const heroMetrics = [
  { icon: <CalendarDays size={16} />, label: "3 dias de festival" },
  { icon: <Clock3 size={16} />, label: "Entrada ate 22h30" },
  { icon: <ShieldCheck size={16} />, label: "Retorno seguro" },
];

export function Events() {
  return (
    <div className="relative overflow-hidden bg-black">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-24 h-[420px] w-[420px] rounded-full bg-[#D4AF37]/12 blur-[110px]" />
        <div className="absolute top-[30%] -right-24 h-[360px] w-[360px] rounded-full bg-[#a56d00]/20 blur-[120px]" />
      </div>

      <section className="relative border-b border-[#D4AF37]/20 py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37]">
                <Music size={14} />
                Edicao oficial 2026
              </div>

              <h1 className="mb-5 text-5xl font-black leading-tight md:text-7xl">
                {EVENT_CONFIG.title}
                <span className="mt-2 block text-[#D4AF37]">{EVENT_CONFIG.highlight}</span>
              </h1>

              <p className="mb-4 text-xl font-semibold text-white">
                {EVENT_CONFIG.season} | {EVENT_CONFIG.dates}
              </p>
              <p className="mb-3 flex items-start gap-2 text-gray-300">
                <MapPin size={18} className="mt-0.5 shrink-0 text-[#D4AF37]" />
                {EVENT_CONFIG.location}
              </p>
              <p className="mb-8 flex items-start gap-2 text-gray-400">
                <Clock3 size={18} className="mt-0.5 shrink-0 text-[#D4AF37]" />
                {EVENT_CONFIG.opening} | {EVENT_CONFIG.lastEntry} | {EVENT_CONFIG.endTime}
              </p>

              <p className="mb-9 max-w-2xl text-lg leading-relaxed text-gray-300">{EVENT_CONFIG.summary}</p>

              <div className="mb-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href={whatsappEventLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whatsapp-cta inline-flex items-center justify-center gap-2 rounded-full bg-[#D4AF37] px-8 py-4 font-black text-black transition-all hover:-translate-y-0.5 hover:bg-[#B8860B]"
                >
                  <MessageCircle size={20} />
                  RESERVAR IDA E VOLTA
                </a>
                <a
                  href={OFFICIAL_LINKS.home}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 font-bold text-white transition-colors hover:bg-white/10"
                >
                  SITE OFICIAL
                  <ExternalLink size={18} />
                </a>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                {heroMetrics.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-semibold text-gray-200"
                  >
                    <span className="text-[#D4AF37]">{item.icon}</span>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="relative"
            >
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-[#D4AF37]/25 via-transparent to-[#D4AF37]/10 blur-xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-[#D4AF37]/30 bg-[#111111] p-3 shadow-2xl">
                <ImageWithFallback
                  src={FLYER_CONFIG.image}
                  alt="Flyer Lollapalooza Brasil 2026"
                  className="h-full w-full rounded-[1.5rem] object-cover"
                />
                <div className="absolute right-6 bottom-6 left-6 rounded-2xl border border-white/10 bg-black/70 p-4 backdrop-blur-md">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37]">{FLYER_CONFIG.title}</p>
                  <p className="mt-1 text-sm font-medium text-gray-200">{FLYER_CONFIG.subtitle}</p>
                </div>
              </div>
              <a
                href={OFFICIAL_LINKS.ingressos}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute -top-4 -left-4 inline-flex items-center gap-2 rounded-full border border-[#D4AF37]/40 bg-black/85 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#D4AF37]"
              >
                <Sparkles size={14} />
                Ingressos oficiais
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="relative border-b border-[#D4AF37]/10 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-10 flex items-center gap-3">
            <CalendarDays className="text-[#D4AF37]" />
            <h2 className="text-3xl font-bold md:text-4xl">Cronograma do Festival</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {eventDays.map((day, index) => (
              <motion.article
                key={day.dayLabel}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-7"
              >
                <span className="mb-5 inline-flex items-center rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#D4AF37]">
                  Dia {index + 1}
                </span>
                <h3 className="mb-2 text-2xl font-black">{day.dayLabel}</h3>
                <p className="mb-2 text-lg font-semibold text-white">{day.date}</p>
                <p className="text-sm text-gray-300">{day.highlight}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative border-b border-[#D4AF37]/10 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-10">
            <h2 className="mb-3 text-3xl font-bold md:text-4xl">Operacao de Transporte</h2>
            <p className="max-w-3xl text-gray-400">
              Estrutura pronta para publico individual, casais, grupos e corporativo durante os tres dias.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <article className="rounded-3xl border border-white/10 bg-white/[0.03] p-7">
              <h3 className="mb-6 flex items-center gap-3 text-2xl font-black">
                <MapPin className="text-[#D4AF37]" />
                Pontos de Embarque
              </h3>
              <ul className="space-y-3">
                {pickupPoints.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-3 rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-gray-300"
                  >
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-[#D4AF37]" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-3xl border border-[#D4AF37]/25 bg-gradient-to-br from-[#D4AF37]/12 to-[#D4AF37]/5 p-7">
              <h3 className="mb-6 flex items-center gap-3 text-2xl font-black">
                <Car className="text-[#D4AF37]" />
                Pacotes de Transporte
              </h3>
              <div className="space-y-4">
                {packageOptions.map((option) => (
                  <div key={option.name} className="rounded-xl border border-white/10 bg-black/40 p-4">
                    <p className="mb-1 text-lg font-bold text-white">{option.name}</p>
                    <p className="text-sm text-gray-300">{option.description}</p>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="relative border-b border-[#D4AF37]/10 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
            <div className="rounded-3xl border border-[#D4AF37]/30 bg-gradient-to-br from-[#D4AF37]/15 to-[#D4AF37]/5 p-8 lg:col-span-3">
              <h2 className="mb-4 text-3xl font-black md:text-4xl">Contate Agora</h2>
              <p className="mb-7 max-w-2xl text-gray-200">
                Reserve com antecedencia para garantir melhor janela de saida e retorno em seguranca.
              </p>
              <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
                <a
                  href={whatsappEventLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whatsapp-cta flex items-center justify-center gap-2 rounded-xl bg-[#D4AF37] px-5 py-4 text-center font-black text-black transition-colors hover:bg-[#B8860B]"
                >
                  <MessageCircle size={18} />
                  WhatsApp
                </a>
                <a
                  href={COMPANY_LINKS.phone}
                  className="flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-black/40 px-5 py-4 text-center font-semibold text-white transition-colors hover:bg-black/60"
                >
                  <Phone size={18} className="text-[#D4AF37]" />
                  {COMPANY_INFO.phoneDisplay}
                </a>
                <a
                  href={COMPANY_LINKS.email}
                  className="flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-black/40 px-5 py-4 text-center font-semibold text-white transition-colors hover:bg-black/60"
                >
                  <Mail size={18} className="text-[#D4AF37]" />
                  Enviar e-mail
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 lg:col-span-2">
              <h3 className="mb-4 flex items-center gap-2 text-xl font-black">
                <ExternalLink size={18} className="text-[#D4AF37]" />
                Links Oficiais do Lolla
              </h3>
              <div className="space-y-3">
                {quickLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-xl border border-white/10 bg-black/50 px-4 py-3 text-sm font-semibold text-gray-200 transition-colors hover:border-[#D4AF37]/40 hover:text-white"
                  >
                    {item.label}
                    <ArrowRight size={16} className="text-[#D4AF37]" />
                  </a>
                ))}
              </div>
              <p className="mt-5 text-xs text-gray-500">
                Dados oficiais consultados em 14/03/2026 no site do Lollapalooza Brasil.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex items-center gap-3">
            <Users className="text-[#D4AF37]" />
            <h2 className="text-3xl font-bold md:text-4xl">Checklist de Operacao</h2>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {checklist.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-black px-5 py-4"
              >
                <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-[#D4AF37]" />
                <p className="text-gray-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
