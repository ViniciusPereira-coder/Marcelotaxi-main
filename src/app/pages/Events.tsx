import React from "react";
import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";
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
} from "lucide-react";
import { COMPANY_INFO, COMPANY_LINKS } from "@/app/config/company";
import { ImageWithFallback } from "@/shared/media/ImageWithFallback";

const EVENT_CONFIG = {
  title: "Eventos",
  highlight: "Lollapalooza Brasil",
  season: "Edição 2026",
  city: "São Paulo",
  location: "Autódromo de Interlagos - SP",
  dates: "20, 21 e 22 de março de 2026",
  opening: "Abertura de portas: 11h",
  lastEntry: "Última entrada: 22h30",
  endTime: "Encerramento do evento: 1h",
  summary:
    "Página preparada para conversão, com informações oficiais e foco em vendas de transporte de ida e volta para o Lolla.",
};

const OFFICIAL_LINKS = {
  home: "https://www.lollapaloozabr.com/",
  ingressos: "https://www.lollapaloozabr.com/ingressos",
  horarios: "https://www.lollapaloozabr.com/horarios",
  information: "https://www.lollapaloozabr.com/information",
  transportes: "https://www.lollapaloozabr.com/transportes",
  ticketmaster:
    "https://www.ticketmaster.com.br/event/lollapaloozabr?utm_campaign=ll-ingressos2026&utm_content=site_site_festival_header_ll-ingressos2026_botao_compreagora_contlol01090&utm_id=header&utm_medium=site_festival&utm_source=site&utm_term=botao_compreagora",
};

const FLYER_CONFIG = {
  title: "Flyer Lolla 2026",
  subtitle: "Área pronta para destaque visual do evento",
  image:
    "https://cdn.prod.website-files.com/646fa99d0892704eb2b38032/69a0cf5fdd13f7acfa1ebb1a_IG_FEED_LINEUP_DIA_25.02_PH_V20_02.webp",
  note: "Você pode trocar a imagem do flyer por um criativo próprio quando quiser.",
};

const eventDays = [
  {
    dayLabel: "Sexta",
    date: "20/03/2026",
    highlight: "Abertura oficial do festival",
  },
  {
    dayLabel: "Sábado",
    date: "21/03/2026",
    highlight: "Dia de maior fluxo",
  },
  {
    dayLabel: "Domingo",
    date: "22/03/2026",
    highlight: "Encerramento do festival",
  },
];

const pickupPoints = [
  "Aeroporto de Congonhas (CGH)",
  "Aeroporto de Guarulhos (GRU)",
  "Hotéis na Av. Paulista e Jardins",
  "Berrini, Vila Olímpia e Faria Lima",
  "Pinheiros, Itaim e Vila Madalena",
];

const packageOptions = [
  {
    name: "Pacote Ida",
    description: "Chegada planejada antes da abertura dos portões, sem correria.",
  },
  {
    name: "Pacote Ida e Volta",
    description: "Retorno seguro em ponto combinado após os shows.",
  },
  {
    name: "Pacote 3 Dias",
    description: "Operação completa para os 3 dias do festival, com prioridade de agenda.",
  },
];

const checklist = [
  "Roteiro alinhado com horário oficial de abertura e encerramento",
  "Ponto de embarque e ponto de retorno definidos com antecedência",
  "Atendimento no WhatsApp durante toda a operação",
  "Suporte para grupos e empresas com múltiplos carros",
];

const quickLinks = [
  { label: "Ingressos", href: OFFICIAL_LINKS.ingressos },
  { label: "Line-up e Horários", href: OFFICIAL_LINKS.horarios },
  { label: "FAQ Oficial", href: OFFICIAL_LINKS.information },
  { label: "Transportes Oficiais", href: OFFICIAL_LINKS.transportes },
];

const whatsappEventLink = `${COMPANY_LINKS.whatsapp}?text=${encodeURIComponent(
  "Oi! Quero reservar transporte para o Lollapalooza Brasil 2026."
)}`;

export function Events() {
  return (
    <div className="flex flex-col bg-black">
      <Helmet>
        <title>Eventos | MarceloTaxi e Lollapalooza Brasil</title>
        <meta
          name="description"
          content="Landing de eventos MarceloTaxi com foco em Lollapalooza Brasil: transporte de ida e volta, pacotes e links oficiais."
        />
      </Helmet>

      <section className="border-b border-[#D4AF37]/20 bg-gradient-to-b from-[#111111] to-black py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-5xl"
          >
          
            <h1 className="mb-4 text-5xl font-bold md:text-6xl">
              {EVENT_CONFIG.title} <span className="text-[#D4AF37]">| {EVENT_CONFIG.highlight}</span>
            </h1>
            <p className="mb-2 text-xl font-semibold text-white">
              {EVENT_CONFIG.season} | {EVENT_CONFIG.dates}
            </p>
            <p className="mb-2 flex items-center gap-2 text-gray-300">
              <MapPin size={18} className="text-[#D4AF37]" />
              {EVENT_CONFIG.location}
            </p>
            <p className="mb-8 flex items-center gap-2 text-gray-400">
              <Clock3 size={18} className="text-[#D4AF37]" />
              {EVENT_CONFIG.opening} | {EVENT_CONFIG.lastEntry} | {EVENT_CONFIG.endTime}
            </p>
            <p className="mb-10 max-w-3xl text-lg leading-relaxed text-gray-400">{EVENT_CONFIG.summary}</p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <a
                href={whatsappEventLink}
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-cta inline-flex items-center justify-center gap-2 rounded-full bg-[#D4AF37] px-8 py-4 font-bold text-black transition-colors hover:bg-[#B8860B]"
              >
                <MessageCircle size={20} />
                RESERVAR LOLLABR
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
          </motion.div>
        </div>
      </section>

      <section className="border-b border-[#D4AF37]/10 py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
            <div>
              <h2 className="mb-4 text-3xl font-bold md:text-4xl">{FLYER_CONFIG.title}</h2>
              <p className="mb-4 text-lg text-gray-300">{FLYER_CONFIG.subtitle}</p>
              <p className="mb-6 text-gray-500">{FLYER_CONFIG.note}</p>
              <a
                href={OFFICIAL_LINKS.horarios}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-b-2 border-[#D4AF37] pb-1 font-bold text-[#D4AF37] transition-all hover:gap-3"
              >
                VER LINE-UP E HORÁRIOS OFICIAIS
                <ArrowRight size={18} />
              </a>
            </div>
            <div className="overflow-hidden rounded-3xl border border-[#D4AF37]/20 bg-white/[0.03]">
              <ImageWithFallback
                src={FLYER_CONFIG.image}
                alt="Flyer Lollapalooza Brasil 2026"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#D4AF37]/10 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-10 flex items-center gap-3">
            <CalendarDays className="text-[#D4AF37]" />
            <h2 className="text-3xl font-bold md:text-4xl">Programação por Dia</h2>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {eventDays.map((day, index) => (
              <motion.article
                key={day.dayLabel}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-6"
              >
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#D4AF37]">{day.dayLabel}</p>
                <h3 className="mb-2 text-2xl font-bold">{day.date}</h3>
                <p className="text-sm text-gray-300">{day.highlight}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-[#D4AF37]/10 py-20">
        <div className="container mx-auto grid grid-cols-1 gap-12 px-4 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 flex items-center gap-3 text-3xl font-bold md:text-4xl">
              <MapPin className="text-[#D4AF37]" />
              Pontos de Embarque
            </h2>
            <ul className="space-y-4">
              {pickupPoints.map((point) => (
                <li key={point} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-4 text-gray-300">
                  <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-[#D4AF37]" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-6 flex items-center gap-3 text-3xl font-bold md:text-4xl">
              <Car className="text-[#D4AF37]" />
              Pacotes de Transporte
            </h2>
            <div className="space-y-4">
              {packageOptions.map((option) => (
                <article key={option.name} className="rounded-2xl border border-[#D4AF37]/20 bg-[#D4AF37]/5 p-5">
                  <h3 className="mb-2 text-xl font-bold text-white">{option.name}</h3>
                  <p className="text-gray-300">{option.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#D4AF37]/10 py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-3xl font-bold md:text-4xl">Contate Agora</h2>
          <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-3">
            <a
              href={whatsappEventLink}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-cta flex items-center justify-center gap-2 rounded-2xl bg-[#D4AF37] px-6 py-5 text-center font-bold text-black transition-colors hover:bg-[#B8860B]"
            >
              <MessageCircle size={20} />
              WhatsApp Lolla
            </a>
            <a
              href={COMPANY_LINKS.phone}
              className="flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/[0.03] px-6 py-5 text-center font-bold text-white transition-colors hover:bg-white/10"
            >
              <Phone size={20} className="text-[#D4AF37]" />
              {COMPANY_INFO.phoneDisplay}
            </a>
            <a
              href={COMPANY_LINKS.email}
              className="flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/[0.03] px-6 py-5 text-center font-bold text-white transition-colors hover:bg-white/10"
            >
              <Mail size={20} className="text-[#D4AF37]" />
              Enviar E-mail
            </a>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
            <h3 className="mb-4 text-xl font-bold">Links Oficiais do Lolla</h3>
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
              {quickLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm font-semibold text-gray-200 transition-colors hover:border-[#D4AF37]/40 hover:text-white"
                >
                  {item.label}
                  <ExternalLink size={16} className="text-[#D4AF37]" />
                </a>
              ))}
            </div>
            <p className="mt-4 text-xs text-gray-500">
              Dados oficiais consultados em 14/03/2026 no site do Lollapalooza Brasil.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-3xl font-bold md:text-4xl">Checklist de Operação</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {checklist.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-black p-5">
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
