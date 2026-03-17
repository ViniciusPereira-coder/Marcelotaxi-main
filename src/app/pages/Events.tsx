import React from "react";
import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";
import {
  CalendarDays,
  Clock3,
  MapPin,
  Car,
  Music,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
  MessageCircle,
  Phone,
} from "lucide-react";
import { COMPANY_INFO, COMPANY_LINKS } from "@/app/config/company";
import { ImageWithFallback } from "@/shared/media/ImageWithFallback";

const EVENT_CONFIG = {
  name: "Lollapalooza Brasil",
  season: "Edição 2026",
  city: "São Paulo",
  venue: "Autódromo de Interlagos",
  dates: "20, 21 e 22 de março de 2026",
  description:
    "Atendimento dedicado para o Lollapalooza com reserva de ida, volta e pacote de 3 dias, incluindo suporte rápido no WhatsApp.",
};

const OFFICIAL_LINKS = {
  home: "https://www.lollapaloozabr.com/",
  ingressos: "https://www.lollapaloozabr.com/ingressos",
  horarios: "https://www.lollapaloozabr.com/horarios",
  information: "https://www.lollapaloozabr.com/information",
  transportes: "https://www.lollapaloozabr.com/transportes",
};

const FLYER_IMAGE =
  "https://cdn.prod.website-files.com/646fa99d0892704eb2b38032/69a0cf5fdd13f7acfa1ebb1a_IG_FEED_LINEUP_DIA_25.02_PH_V20_02.webp";

const eventDays = [
  { day: "Sexta", date: "20/03", focus: "Abertura oficial do festival", color: "from-[#16111f] to-[#3a294f]" },
  { day: "Sábado", date: "21/03", focus: "Maior fluxo de público", color: "from-[#2a1a3a] to-[#5c3f7b]" },
  { day: "Domingo", date: "22/03", focus: "Encerramento do evento", color: "from-[#3c2754] to-[#7f5ca6]" },
];

const packageOptions = [
  {
    title: "Pacote Ida",
    subtitle: "Chegada antecipada",
    description: "Rota planejada para chegada antes da abertura dos portões, sem correria.",
  },
  {
    title: "Pacote Ida e Volta",
    subtitle: "Operação completa no dia",
    description: "Retorno organizado no horário combinado para evitar filas e demora no fim dos shows.",
  },
  {
    title: "Pacote 3 Dias",
    subtitle: "Prioridade total de agenda",
    description: "Atendimento para os três dias com planejamento prévio e suporte contínuo.",
  },
];

const pickupPolicy = [
  "Ponto de embarque definido com você no WhatsApp, de acordo com região e horário",
  "Ponto de retorno combinado durante o evento para mais segurança",
  "Atendimento para individual, casal, família e grupos",
];

const suggestedRegions = [
  "Paulista e Jardins",
  "Pinheiros e Itaim",
  "Berrini e Faria Lima",
  "Centro e Zona Sul",
  "CGH e GRU",
];

const operationChecklist = [
  "Confirmação rápida no WhatsApp",
  "Roteiro alinhado com horário do evento",
  "Operação 24/7 nos dias do festival",
  "Suporte para grupos e empresas",
];

const quickLinks = [
  { label: "Site oficial", href: OFFICIAL_LINKS.home },
  { label: "Ingressos", href: OFFICIAL_LINKS.ingressos },
  { label: "Line-up e horários", href: OFFICIAL_LINKS.horarios },
  { label: "FAQ oficial", href: OFFICIAL_LINKS.information },
  { label: "Transportes oficiais", href: OFFICIAL_LINKS.transportes },
];

const whatsappEventLink = `${COMPANY_LINKS.whatsapp}?text=${encodeURIComponent(
  "Oi! Quero reservar transporte para o Lollapalooza Brasil."
)}`;

export function Events() {
  return (
    <div className="flex flex-col bg-[linear-gradient(180deg,#eddcf5_0%,#e5cfee_44%,#ead8f1_100%)] text-[#16111f]">
      <Helmet>
        <title>Eventos | Lollapalooza Brasil | MarceloTaxi</title>
        <meta
          name="description"
          content="Página de transporte para o Lollapalooza Brasil com reserva de ida, volta e pacote de 3 dias."
        />
      </Helmet>

      <section className="relative overflow-hidden border-b border-black/15 py-16 md:py-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_14%,rgba(0,0,0,0.44),transparent_36%),radial-gradient(circle_at_89%_18%,rgba(255,95,164,0.38),transparent_34%),radial-gradient(circle_at_88%_84%,rgba(0,0,0,0.3),transparent_44%),linear-gradient(120deg,rgba(237,218,247,0.98),rgba(214,173,236,0.96))]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-14 bg-gradient-to-b from-black/60 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/45 to-transparent" />
        <div className="pointer-events-none absolute left-0 right-0 top-[68%] h-2.5 bg-[#ddf22a]/95" />

        <div className="container relative z-10 mx-auto px-4">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-black/25 bg-black px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-[#dff22e] shadow-[0_8px_24px_rgba(0,0,0,0.25)]">
                <Music size={14} />
                Página exclusiva do evento
              </div>

              <h1 className="mb-5 text-4xl font-black leading-tight md:text-6xl">
                <span className="bg-gradient-to-r from-[#111111] via-[#2b1e3f] to-[#4b2e66] bg-clip-text text-transparent">{EVENT_CONFIG.name}</span>
                <span className="mt-2 block text-[#2a1a3a]">Transporte premium para o festival</span>
              </h1>

              <p className="mb-7 max-w-3xl text-base leading-relaxed text-[#241835] md:text-lg">{EVENT_CONFIG.description}</p>

              <div className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-black/15 bg-white/72 px-4 py-3 shadow-[0_10px_30px_rgba(33,19,49,0.14)] backdrop-blur-sm">
                  <p className="text-[11px] font-black uppercase tracking-[0.18em] text-[#5b3b7d]">Edição</p>
                  <p className="mt-1 text-sm font-semibold">{EVENT_CONFIG.season}</p>
                </div>
                <div className="rounded-2xl border border-black/15 bg-white/72 px-4 py-3 shadow-[0_10px_30px_rgba(33,19,49,0.14)] backdrop-blur-sm">
                  <p className="text-[11px] font-black uppercase tracking-[0.18em] text-[#5b3b7d]">Cidade</p>
                  <p className="mt-1 text-sm font-semibold">{EVENT_CONFIG.city}</p>
                </div>
                <div className="rounded-2xl border border-black/15 bg-white/72 px-4 py-3 shadow-[0_10px_30px_rgba(33,19,49,0.14)] backdrop-blur-sm">
                  <p className="text-[11px] font-black uppercase tracking-[0.18em] text-[#5b3b7d]">Datas</p>
                  <p className="mt-1 text-sm font-semibold">{EVENT_CONFIG.dates}</p>
                </div>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href={whatsappEventLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whatsapp-cta inline-flex items-center justify-center gap-2 rounded-full border-2 border-black bg-[#ddf22a] px-8 py-4 text-sm font-black uppercase tracking-[0.08em] text-black shadow-[0_14px_30px_rgba(44,51,5,0.3)] transition-all hover:-translate-y-0.5 hover:bg-[#cfe21f]"
                >
                  <MessageCircle size={18} />
                  Reservar no WhatsApp
                </a>
                <a
                  href={OFFICIAL_LINKS.home}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#ffffff" }}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-black/25 bg-black px-8 py-4 text-sm font-black uppercase tracking-[0.08em] !text-white transition-colors hover:bg-black/85 visited:!text-white"
                >
                  Site oficial
                  <ExternalLink size={16} className="!text-white" />
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08, duration: 0.75 }}
              className="relative"
            >
              <div className="absolute -top-6 -left-6 h-24 w-24 rounded-full bg-black/25 blur-3xl" />
              <div className="absolute -right-4 -bottom-6 h-28 w-28 rounded-full bg-[#d7eb21]/35 blur-3xl" />
              <div className="overflow-hidden rounded-3xl border-2 border-black/20 bg-black/80 shadow-[0_24px_60px_rgba(26,15,39,0.45)]">
                <ImageWithFallback
                  src={FLYER_IMAGE}
                  alt="Flyer Lollapalooza Brasil"
                  className="h-[430px] w-full object-cover object-top"
                />
                <div className="space-y-3 border-t border-white/15 bg-[linear-gradient(180deg,#0f0b16,#1b1230)] p-5 text-white">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-[#d7eb21]">Informações principais</p>
                  <p className="flex items-center gap-2 text-sm text-slate-200">
                    <MapPin size={16} className="text-[#d7eb21]" />
                    {EVENT_CONFIG.venue}
                  </p>
                  <p className="flex items-center gap-2 text-sm text-slate-200">
                    <Clock3 size={16} className="text-[#d7eb21]" />
                    Horários e line-up no link oficial
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/12 bg-[linear-gradient(180deg,#ebdcf2_0%,#e6d3ef_100%)] py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mb-9 flex items-center gap-3">
            <CalendarDays size={24} className="text-[#2a1a3a]" />
            <h2 className="text-3xl font-black md:text-4xl">Programacao por dia</h2>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {eventDays.map((day, index) => (
              <motion.article
                key={day.day}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="group overflow-hidden rounded-3xl border border-black/12 bg-white/80 shadow-[0_16px_34px_rgba(33,19,49,0.12)] transition-transform hover:-translate-y-1"
              >
                <div className={`h-1.5 w-full bg-gradient-to-r ${day.color}`} />
                <div className="p-6">
                  <p className="mb-2 text-xs font-black uppercase tracking-[0.2em] text-[#4c3566]">{day.day}</p>
                  <h3 className="mb-3 text-3xl font-black">{day.date}</h3>
                  <p className="text-sm text-[#3f2c56]">{day.focus}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-black/12 bg-[linear-gradient(180deg,#e6d2ec_0%,#ddc2e7_100%)] py-16 md:py-20">
        <div className="container mx-auto grid grid-cols-1 gap-8 px-4 xl:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-3xl border border-black/15 bg-[linear-gradient(145deg,#09070e,#1c1230)] p-7 text-white shadow-[0_20px_42px_rgba(23,12,37,0.4)]">
            <h3 className="mb-5 flex items-center gap-2 text-2xl font-black">
              <Car size={22} className="text-[#d7eb21]" />
              Pacotes de transporte
            </h3>
            <div className="space-y-4">
              {packageOptions.map((option) => (
                <article key={option.title} className="rounded-2xl border border-white/20 bg-[linear-gradient(145deg,rgba(255,255,255,0.09),rgba(255,255,255,0.03))] p-5">
                  <p className="mb-2 text-xs font-black uppercase tracking-[0.18em] text-[#d7eb21]">{option.subtitle}</p>
                  <h4 className="mb-2 text-xl font-black">{option.title}</h4>
                  <p className="text-sm leading-relaxed text-slate-300">{option.description}</p>
                </article>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="rounded-3xl border border-black/15 bg-white/80 p-7 shadow-[0_14px_30px_rgba(33,19,49,0.12)]">
            <h3 className="mb-2 flex items-center gap-2 text-2xl font-black">
              <MapPin size={22} className="text-[#2a1a3a]" />
              Embarque e retorno flexíveis
            </h3>
            <p className="mb-5 text-sm leading-relaxed text-[#3f2c56]">
                Os pontos de embarque e retorno são definidos na hora do atendimento no WhatsApp, de acordo com sua região e horário.
            </p>
              <ul className="space-y-3">
                {pickupPolicy.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[#2f2344]">
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-[#5b3b7d]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-black/15 bg-white/80 p-7 shadow-[0_14px_30px_rgba(33,19,49,0.12)]">
              <h3 className="mb-4 flex items-center gap-2 text-2xl font-black">
                <ShieldCheck size={22} className="text-[#2a1a3a]" />
                Regiões mais solicitadas
              </h3>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-[#5b3b7d]">Referência, não limitado a estes pontos</p>
              <div className="flex flex-wrap gap-2">
                {suggestedRegions.map((region) => (
                  <span key={region} className="rounded-full border border-black/15 bg-[#f3ebf7] px-3 py-1 text-xs font-semibold text-[#2f2344]">
                    {region}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/12 bg-[linear-gradient(180deg,#ebdcf2_0%,#e4d1ed_100%)] py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex items-center gap-3">
            <CheckCircle2 size={22} className="text-[#2a1a3a]" />
            <h2 className="text-3xl font-black md:text-4xl">Checklist da operação</h2>
          </div>
          <div className="mb-10 grid grid-cols-1 gap-4 md:grid-cols-2">
            {operationChecklist.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-2xl border border-black/15 bg-white/80 p-5 shadow-[0_12px_24px_rgba(33,19,49,0.1)]">
                <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-[#5b3b7d]" />
                <p className="text-sm text-[#2f2344]">{item}</p>
              </div>
            ))}
          </div>

          <div className="mb-8 flex items-center gap-3">
            <ExternalLink size={22} className="text-[#2a1a3a]" />
            <h2 className="text-3xl font-black md:text-4xl">Links oficiais do evento</h2>
          </div>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
            {quickLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-between rounded-2xl border border-black/15 bg-white/80 px-5 py-4 text-sm font-bold text-[#221832] shadow-[0_10px_22px_rgba(33,19,49,0.09)] transition-all hover:-translate-y-0.5 hover:border-[#2a1a3a] hover:bg-white"
              >
                {item.label}
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
              </a>
            ))}
          </div>
          <p className="mt-4 text-xs text-[#4b3665]">
            Informações oficiais devem ser conferidas no site do Lollapalooza antes da compra.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="relative overflow-hidden rounded-[2.1rem] border-2 border-black/20 bg-[linear-gradient(135deg,#08060d,#1b1130_48%,#2d1841_100%)] p-8 text-white shadow-[0_30px_70px_rgba(27,15,42,0.45)] md:p-12">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_16%_20%,rgba(215,235,33,0.3),transparent_34%),radial-gradient(circle_at_90%_78%,rgba(185,127,236,0.4),transparent_42%)]" />
            <div className="relative z-10 text-center">
              <h2 className="mb-4 text-3xl font-black leading-tight md:text-5xl">Pronto para fechar seu transporte no Lolla?</h2>
              <p className="mx-auto mb-9 max-w-3xl text-base font-semibold text-slate-200 md:text-lg">
                Chame no WhatsApp e combinamos embarque, retorno e melhor pacote para seu perfil.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <a
                  href={whatsappEventLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whatsapp-cta inline-flex items-center justify-center gap-2 rounded-full border-2 border-black bg-[#ddf22a] px-9 py-4 text-sm font-black uppercase tracking-[0.08em] text-black shadow-[0_14px_28px_rgba(44,51,5,0.3)] transition-colors hover:bg-[#cfe21f]"
                >
                  <MessageCircle size={18} />
                  Reservar no WhatsApp
                </a>
                <a
                  href={COMPANY_LINKS.phone}
                  className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/35 bg-transparent px-9 py-4 text-sm font-black uppercase tracking-[0.08em] text-white transition-colors hover:bg-white/10"
                >
                  <Phone size={18} />
                  Ligar agora ({COMPANY_INFO.phoneDisplay})
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
