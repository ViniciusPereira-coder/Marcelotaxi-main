import React from "react";
import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";
import {
  Coffee,
  Snowflake,
  BatteryCharging,
  Sparkles,
  ShieldCheck,
  Clock3,
  CheckCircle2,
  MessageCircle,
  Phone,
  Car,
  ArrowRight,
} from "lucide-react";
import { COMPANY_INFO, COMPANY_LINKS } from "@/app/config/company";
import { ImageWithFallback } from "@/shared/media/ImageWithFallback";
import servicoDeBordoPhoto from "@/app/assets/photos/Serviço de bordo 2.png";

type OnboardFeature = {
  title: string;
  description: string;
  icon: React.ReactNode;
  note?: string;
};

const onboardFeatures: OnboardFeature[] = [
  {
    title: "Atendimento personalizado",
    description: "Preferências de bordo alinhadas no agendamento para uma experiência mais sob medida.",
    icon: <Coffee size={20} />,
  },
  {
    title: "Ar-condicionado digital",
    description: "Climatização ajustada para manter uma viagem agradável em qualquer horário.",
    icon: <Snowflake size={20} />,
  },
  {
    title: "Água, sucos e bebidas",
    description: "Opções de bebidas disponíveis conforme categoria e disponibilidade no atendimento.",
    icon: <BatteryCharging size={20} />,
    note: "Itens confirmados no momento da reserva.",
  },
  {
    title: "Snacks e cereais a bordo",
    description: "Seleção de snacks para uma experiência de bordo mais completa.",
    icon: <Sparkles size={20} />,
  },
];

const serviceStandards = [
  "Atendimento profissional do início ao fim",
  "Pontualidade e comunicação clara",
  "Operação 24/7 para serviços agendados",
  "Apoio para passageiros com bagagem",
];

const byCategory = [
  {
    title: "Sedans Executivos",
    description: "Ideal para atendimento individual, casais e agendas corporativas.",
  },
  {
    title: "Carros de Maior Capacidade",
    description: "Mais espaço para famílias e pequenos grupos.",
  },
  {
    title: "Vans e Operações Especiais",
    description: "Atendimento sob consulta para grupos maiores e demandas específicas.",
  },
];

const whatsappOnboardLink = `${COMPANY_LINKS.whatsapp}?text=${encodeURIComponent(
  "Oi! Quero saber os serviços de bordo disponíveis para minha reserva."
)}`;

export function Onboard() {
  return (
    <div className="flex flex-col bg-[#05080f]">
      <Helmet>
        <title>Serviços de Bordo | MarceloTaxi</title>
        <meta
          name="description"
          content="Serviços de bordo da MarceloTaxi com foco em conforto, atendimento profissional e experiência executiva."
        />
      </Helmet>

      <section className="relative overflow-hidden border-b border-white/10 py-20 md:py-24">
        <ImageWithFallback
          src={servicoDeBordoPhoto}
          alt="Serviço executivo com conforto de bordo"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#05080f]/92 via-[#05080f]/78 to-[#05080f]/55" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#05080f]/84 via-transparent to-[#05080f]/35" />

        <div className="container relative z-10 mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
            className="max-w-4xl"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#D9B44A]/45 bg-[#D9B44A]/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-[#D9B44A]">
              <Sparkles size={14} />
              Experiência de bordo
            </div>
            <h1 className="mb-6 text-4xl font-black leading-tight md:text-6xl">
              Conforto, cuidado e
              <span className="block text-[#D9B44A]">padrão executivo em cada trajeto</span>
            </h1>
            <p className="mb-10 max-w-3xl text-lg text-slate-200 md:text-xl">
              Os serviços de bordo são pensados para elevar sua experiência de translado com praticidade, conforto e atenção aos detalhes.
            </p>

            <div className="mb-10 flex flex-col gap-4 sm:flex-row">
              <a
                href={whatsappOnboardLink}
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-cta inline-flex items-center justify-center gap-2 rounded-full border border-[#D9B44A] bg-[#D9B44A] px-8 py-4 text-sm font-black uppercase tracking-[0.08em] text-black transition-all hover:-translate-y-0.5 hover:bg-[#c79d36]"
              >
                <MessageCircle size={18} />
                Ver serviços de bordo
              </a>
              <a
                href={COMPANY_LINKS.phone}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-black uppercase tracking-[0.08em] text-white transition-colors hover:bg-white/10"
              >
                <Phone size={18} className="text-[#D9B44A]" />
                Ligar agora ({COMPANY_INFO.phoneDisplay})
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-3 text-xs font-black uppercase tracking-[0.2em] text-[#D9B44A]">Serviços</p>
              <h2 className="text-4xl font-black md:text-5xl">O que oferecemos a bordo</h2>
            </div>
            <p className="max-w-xl text-sm leading-relaxed text-slate-300 md:text-right">
              Cada item foi definido para melhorar a experiência do passageiro sem perder agilidade no atendimento.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {onboardFeatures.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="rounded-3xl border border-white/10 bg-[#0A0F19] p-7"
              >
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#D9B44A]/40 bg-[#D9B44A]/10 px-3 py-1.5 text-xs font-black uppercase tracking-[0.08em] text-[#D9B44A]">
                  {item.icon}
                  Serviço
                </div>
                <h3 className="mb-3 text-2xl font-black">{item.title}</h3>
                <p className="text-sm leading-relaxed text-slate-300">{item.description}</p>
                {item.note ? <p className="mt-3 text-xs text-slate-400">{item.note}</p> : null}
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#070d1a]/70 py-20">
        <div className="container mx-auto grid grid-cols-1 gap-8 px-4 lg:grid-cols-2">
          <div className="glass-panel rounded-3xl p-7">
            <h3 className="mb-5 flex items-center gap-2 text-2xl font-black">
              <ShieldCheck size={22} className="text-[#D9B44A]" />
              Padrão de Atendimento
            </h3>
            <p className="mb-6 text-sm leading-relaxed text-slate-300">
              Mantemos o mesmo nível de qualidade em qualquer categoria de veículo para garantir consistência na experiência.
            </p>
            <ul className="space-y-3">
              {serviceStandards.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-slate-200">
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-[#D9B44A]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="glass-panel rounded-3xl p-7">
            <h3 className="mb-5 flex items-center gap-2 text-2xl font-black">
              <Car size={22} className="text-[#D9B44A]" />
              Disponibilidade por Categoria
            </h3>
            <p className="mb-6 text-sm leading-relaxed text-slate-300">
              Itens de bordo podem variar de acordo com a categoria e a disponibilidade no momento da reserva.
            </p>
            <div className="space-y-4">
              {byCategory.map((item) => (
                <article key={item.title} className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                  <h4 className="mb-1.5 text-sm font-black uppercase tracking-[0.08em] text-[#D9B44A]">{item.title}</h4>
                  <p className="text-sm text-slate-200">{item.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4">
          <div className="relative overflow-hidden rounded-[2.2rem] border border-[#D9B44A]/30 bg-gradient-to-br from-[#D9B44A] via-[#e3c164] to-[#a57d21] p-8 text-black md:p-14">
            <div className="pointer-events-none absolute top-0 right-0 h-56 w-56 rounded-full bg-white/20 blur-3xl" />
            <div className="relative z-10 text-center">
              <h2 className="mb-6 text-4xl font-black leading-tight md:text-6xl">
                Pronto para reservar seu atendimento?
              </h2>
              <p className="mx-auto mb-10 max-w-3xl text-lg font-semibold opacity-90 md:text-xl">
                Chame no WhatsApp e confira quais itens de bordo estão disponíveis para sua viagem.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <a
                  href={whatsappOnboardLink}
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
              <a
                href={COMPANY_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-7 inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.08em] text-black/85"
              >
                Solicitar atendimento personalizado
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
