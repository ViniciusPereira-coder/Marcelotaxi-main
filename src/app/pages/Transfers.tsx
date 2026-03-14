import React from "react";
import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";
import {
  Plane,
  Building2,
  Palmtree,
  CalendarDays,
  Clock3,
  CheckCircle2,
  ArrowRight,
  MapPin,
  ShieldCheck,
  MessageCircle,
  Phone,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { COMPANY_INFO, COMPANY_LINKS } from "@/app/config/company";
import { SITE_IMAGES } from "@/app/config/siteImages";
import { ImageWithFallback } from "@/shared/media/ImageWithFallback";

type TransferService = {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  icon: LucideIcon;
  tags: string[];
  benefits: string[];
};

const transferServices: TransferService[] = [
  {
    title: "Traslados de Aeroporto",
    subtitle: "Chegadas e partidas com monitoramento de voo",
    description:
      "Operacao organizada para GRU, CGH e VCP com acompanhamento em tempo real, recepcao alinhada ao horario do voo e embarque sem correria.",
    image: SITE_IMAGES.airport,
    icon: Plane,
    tags: ["Guarulhos (GRU)", "Congonhas (CGH)", "Viracopos (VCP)"],
    benefits: ["Recepcao com placa", "Janela de espera inclusa", "Roteiro otimizado", "Motorista profissional"],
  },
  {
    title: "Mobilidade Corporativa",
    subtitle: "Agenda executiva com previsibilidade",
    description:
      "Atendimento para reunioes, roadshows e compromissos estrategicos, com pontualidade e suporte para rotas multiplas no mesmo dia.",
    image: SITE_IMAGES.corporate,
    icon: Building2,
    tags: ["Faria Lima", "Berrini", "Paulista", "Alphaville"],
    benefits: ["Atendimento profissional", "Faturamento mensal", "Veiculos executivos", "Planejamento de agenda"],
  },
  {
    title: "Litoral e Interior",
    subtitle: "Viagens longas com conforto",
    description:
      "Deslocamentos para litoral e interior com operacao porta a porta, conforto de bordo e foco em seguranca durante todo o trajeto.",
    image: SITE_IMAGES.fleet,
    icon: Palmtree,
    tags: ["Santos e Guaruja", "Ilhabela", "Campos do Jordao", "Sorocaba"],
    benefits: ["Capacidade para bagagem", "Paradas programadas", "Pedagios no planejamento", "Conducao segura"],
  },
  {
    title: "Eventos e Datas Especiais",
    subtitle: "Logistica completa para grupos e familias",
    description:
      "Coordenacao de transporte para eventos sociais e corporativos com embarque organizado, ponto de retorno definido e atendimento continuo.",
    image: SITE_IMAGES.service,
    icon: CalendarDays,
    tags: ["Sao Paulo Capital", "Regiao Metropolitana", "Interior proximo"],
    benefits: ["Equipe em prontidao", "Multiplos veiculos", "Pontos de encontro definidos", "Suporte no WhatsApp"],
  },
];

const operationPillars = [
  "Confirmacao rapida do atendimento",
  "Operacao 24/7 para viagens agendadas",
  "Acompanhamento de transito e voo",
  "Padrao visual e profissional da frota",
];

const coverageAreas = [
  "Sao Paulo (capital)",
  "Aeroportos GRU, CGH e VCP",
  "Bairros corporativos e hoteis",
  "Litoral norte, litoral sul e interior",
];

export function Transfers() {
  return (
    <div className="flex flex-col bg-[#05080f]">
      <Helmet>
        <title>Traslados | MarceloTaxi</title>
        <meta
          name="description"
          content="Traslados executivos em Sao Paulo com operacao profissional para aeroportos, corporativo, litoral, interior e eventos."
        />
      </Helmet>

      <section className="relative overflow-hidden border-b border-white/10 py-20 md:py-24">
        <ImageWithFallback
          src={SITE_IMAGES.airport}
          alt="Traslado executivo em Sao Paulo"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#05080f]/92 via-[#05080f]/78 to-[#05080f]/55" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#05080f]/80 via-transparent to-[#05080f]/30" />

        <div className="container relative z-10 mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
            className="max-w-4xl"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#D9B44A]/45 bg-[#D9B44A]/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-[#D9B44A]">
              <Clock3 size={14} />
              Operacao Profissional 24/7
            </div>
            <h1 className="mb-6 text-4xl font-black leading-tight md:text-6xl">
              Traslados executivos com
              <span className="block text-[#D9B44A]">pontualidade, conforto e controle de rota</span>
            </h1>
            <p className="mb-10 max-w-3xl text-lg text-slate-200 md:text-xl">
              Atendemos aeroportos, compromissos corporativos, viagens para litoral/interior e eventos com um padrao unico de atendimento.
            </p>

            <div className="mb-10 flex flex-col gap-4 sm:flex-row">
              <a
                href={COMPANY_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-cta inline-flex items-center justify-center gap-2 rounded-full border border-[#D9B44A] bg-[#D9B44A] px-8 py-4 text-sm font-black uppercase tracking-[0.08em] text-black transition-all hover:-translate-y-0.5 hover:bg-[#c79d36]"
              >
                <MessageCircle size={18} />
                Agendar no WhatsApp
              </a>
              <a
                href={COMPANY_LINKS.phone}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-black uppercase tracking-[0.08em] text-white transition-colors hover:bg-white/10"
              >
                <Phone size={18} className="text-[#D9B44A]" />
                Ligar agora ({COMPANY_INFO.phoneDisplay})
              </a>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              <div className="rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm">
                <p className="font-black text-[#D9B44A]">Aeroportos</p>
                <p className="text-slate-300">GRU, CGH e VCP</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm">
                <p className="font-black text-white">Corporativo</p>
                <p className="text-slate-300">Rotas e agendas multiplas</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm">
                <p className="font-black text-[#D9B44A]">Eventos</p>
                <p className="text-slate-300">Ponto de retorno definido</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-3 text-xs font-black uppercase tracking-[0.2em] text-[#D9B44A]">Nossos Servicos</p>
              <h2 className="text-4xl font-black md:text-5xl">Cards de atendimento por perfil</h2>
            </div>
            <p className="max-w-xl text-sm leading-relaxed text-slate-300 md:text-right">
              Cada servico foi desenhado para acelerar a decisao de compra: escopo claro, beneficios objetivos e acionamento imediato.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-7 lg:grid-cols-2">
            {transferServices.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.article
                  key={service.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="group overflow-hidden rounded-3xl border border-white/10 bg-[#0A0F19]"
                >
                  <div className="relative h-56 overflow-hidden">
                    <ImageWithFallback
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />
                    <div className="absolute left-5 bottom-5 inline-flex items-center gap-2 rounded-full border border-[#D9B44A]/40 bg-black/65 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.1em] text-[#D9B44A]">
                      <Icon size={14} />
                      {service.subtitle}
                    </div>
                  </div>

                  <div className="p-6 md:p-7">
                    <h3 className="mb-3 text-2xl font-black">{service.title}</h3>
                    <p className="mb-5 text-sm leading-relaxed text-slate-300">{service.description}</p>

                    <div className="mb-5 flex flex-wrap gap-2">
                      {service.tags.map((tag) => (
                        <span key={tag} className="rounded-full border border-white/15 bg-white/[0.03] px-3 py-1 text-xs font-semibold text-slate-200">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <ul className="mb-7 grid grid-cols-1 gap-2 text-sm text-slate-200 sm:grid-cols-2">
                      {service.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-start gap-2">
                          <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-[#D9B44A]" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>

                    <a
                      href={COMPANY_LINKS.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.08em] text-[#D9B44A] transition-colors hover:text-[#f1cd74]"
                    >
                      Solicitar esse traslado
                      <ArrowRight size={16} />
                    </a>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#070d1a]/70 py-20">
        <div className="container mx-auto grid grid-cols-1 gap-8 px-4 lg:grid-cols-2">
          <div className="glass-panel rounded-3xl p-7">
            <h3 className="mb-5 flex items-center gap-2 text-2xl font-black">
              <MapPin size={22} className="text-[#D9B44A]" />
              Cobertura de Operacao
            </h3>
            <p className="mb-6 text-sm leading-relaxed text-slate-300">
              Atendimento em Sao Paulo e regiao com rotas planejadas para reduzir atrasos e manter previsibilidade de chegada.
            </p>
            <ul className="space-y-3">
              {coverageAreas.map((area) => (
                <li key={area} className="flex items-start gap-2 text-sm text-slate-200">
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-[#D9B44A]" />
                  <span>{area}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="glass-panel rounded-3xl p-7">
            <h3 className="mb-5 flex items-center gap-2 text-2xl font-black">
              <ShieldCheck size={22} className="text-[#D9B44A]" />
              Padrao de Atendimento
            </h3>
            <p className="mb-6 text-sm leading-relaxed text-slate-300">
              Linguagem comercial objetiva, fluxo simples e foco total em conversao para atendimento imediato.
            </p>
            <ul className="space-y-3">
              {operationPillars.map((pillar) => (
                <li key={pillar} className="flex items-start gap-2 text-sm text-slate-200">
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-[#D9B44A]" />
                  <span>{pillar}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4">
          <div className="relative overflow-hidden rounded-[2.2rem] border border-[#D9B44A]/30 bg-gradient-to-br from-[#D9B44A] via-[#e3c164] to-[#a57d21] p-8 text-black md:p-14">
            <div className="pointer-events-none absolute top-0 right-0 h-56 w-56 rounded-full bg-white/20 blur-3xl" />
            <div className="relative z-10 text-center">
              <h2 className="mb-6 text-4xl font-black leading-tight md:text-6xl">
                Pronto para confirmar seu traslado?
              </h2>
              <p className="mx-auto mb-10 max-w-3xl text-lg font-semibold opacity-90 md:text-xl">
                Receba retorno rapido no WhatsApp, valide a rota ideal e reserve seu transporte com atendimento profissional.
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
