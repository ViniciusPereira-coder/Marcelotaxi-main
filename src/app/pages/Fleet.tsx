import React from "react";
import { motion } from "motion/react";
import { Helmet } from "react-helmet-async";
import {
  Car,
  Users,
  Briefcase,
  ShieldCheck,
  Clock3,
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  Phone,
  Info,
} from "lucide-react";
import { COMPANY_INFO, COMPANY_LINKS } from "@/app/config/company";
import { SITE_IMAGES } from "@/app/config/siteImages";
import { ImageWithFallback } from "@/shared/media/ImageWithFallback";
import spinPhoto from "@/app/assets/photos/Foto spin na estrada.png";
import frotaOutraFoto from "@/app/assets/photos/FROTA OUTRA FOTO.png";
import vansPremiumPhoto from "@/app/assets/photos/frota-premium-aluguel-de-van-carros-executivos-locadora-pazuti.webp";

type FleetCategory = {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  imageAlt?: string;
  passengers: string;
  luggage: string;
  tags: string[];
  highlights: string[];
  note: string;
};

const fleetCategories: FleetCategory[] = [
  {
    title: "Sedan Executivo",
    subtitle: "Atendimento urbano e aeroportuario com conforto",
    description:
      "Categoria ideal para viagens individuais, casais e agendas corporativas com foco em pontualidade e conforto.",
    image: frotaOutraFoto,
    passengers: "Ate 4 passageiros",
    luggage: "Ate 2 malas",
    tags: ["Aeroportos", "Corporativo", "Reunioes", "Hotel"],
    highlights: ["Ar-condicionado", "Motorista profissional", "Rota otimizada", "Conforto no deslocamento"],
    note: "Modelo exato confirmado no WhatsApp conforme disponibilidade.",
  },
  {
    title: "Veiculos de Maior Capacidade",
    subtitle: "Categoria para familias e pequenos grupos",
    description:
      "Opcao com maior capacidade de passageiros e bagagem, incluindo carros amplos como Spin e similares, conforme disponibilidade.",
    image: spinPhoto,
    imageAlt: "Foto de Spin gerada por IA, referenciada por mim e baseada em fato real",
    passengers: "Ate 6 passageiros",
    luggage: "Ate 4/5 malas",
    tags: ["Familias", "Grupos", "Aeroporto", "Eventos"],
    highlights: ["Espaco interno amplo", "Boa capacidade de bagagem", "Conforto para trajetos longos", "Ideal para grupos"],
    note: "Configuracao interna pode variar conforme o veiculo disponivel.",
  },
  {
    title: "Veiculos Maiores",
    subtitle: "Atendimento sob consulta para demandas especiais",
    description:
      "Categoria para vans e veiculos maiores, com avaliacao da melhor configuracao conforme data, rota e quantidade de pessoas.",
    image: vansPremiumPhoto,
    passengers: "Capacidade sob consulta",
    luggage: "Bagagem sob consulta",
    tags: ["Grupos maiores", "Eventos", "Empresas", "Outros estados"],
    highlights: ["Planejamento personalizado", "Atendimento para operacoes especiais", "Suporte dedicado", "Viabilidade por agenda"],
    note: "Disponibilidade e categoria confirmadas no atendimento.",
  },
];

const qualityPillars = [
  "Confirmacao rapida no WhatsApp",
  "Operacao 24/7 para servicos agendados",
  "Padrao profissional de atendimento",
  "Categoria do veiculo validada antes da reserva",
];

const whatsappFleetLink = `${COMPANY_LINKS.whatsapp}?text=${encodeURIComponent(
  "Oi! Quero saber qual categoria de veiculo e ideal para meu atendimento."
)}`;

export function Fleet() {
  return (
    <div className="flex flex-col bg-[#05080f]">
      <Helmet>
        <title>Frota | MarceloTaxi</title>
        <meta
          name="description"
          content="Categorias de frota executiva em Sao Paulo: sedans, carros amplos e vans sob consulta."
        />
      </Helmet>

      <section className="relative overflow-hidden border-b border-white/10 py-20 md:py-24">
        <ImageWithFallback
          src={SITE_IMAGES.fleet}
          alt="Frota executiva em Sao Paulo"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#05080f]/92 via-[#05080f]/78 to-[#05080f]/58" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#05080f]/85 via-transparent to-[#05080f]/35" />

        <div className="container relative z-10 mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
            className="max-w-4xl"
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#D9B44A]/45 bg-[#D9B44A]/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-[#D9B44A]">
              <Car size={14} />
              Frota por categoria
            </div>

            <h1 className="mb-6 text-4xl font-black leading-tight md:text-6xl">
              Veiculo certo para cada perfil
              <span className="block text-[#D9B44A]">com confirmacao rapida no WhatsApp</span>
            </h1>

            <p className="mb-8 max-w-3xl text-lg text-slate-200 md:text-xl">
              Trabalhamos com categorias para garantir flexibilidade de agenda: sedans, carros amplos e vans sob consulta.
            </p>

            <div className="rounded-2xl border border-[#D9B44A]/35 bg-black/45 p-4 md:p-5">
              <p className="text-sm leading-relaxed text-slate-200">
                <span className="font-black text-[#D9B44A]">Importante:</span> o modelo exato do carro pode variar. Sempre confirmamos a categoria e capacidade antes da reserva.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href={whatsappFleetLink}
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-cta inline-flex items-center justify-center gap-2 rounded-full border border-[#D9B44A] bg-[#D9B44A] px-8 py-4 text-sm font-black uppercase tracking-[0.08em] text-black transition-all hover:-translate-y-0.5 hover:bg-[#c79d36]"
              >
                <MessageCircle size={18} />
                Ver categoria ideal
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
              <p className="mb-3 text-xs font-black uppercase tracking-[0.2em] text-[#D9B44A]">Categorias</p>
              <h2 className="text-4xl font-black md:text-5xl">Como organizamos a frota</h2>
            </div>
            <p className="max-w-xl text-sm leading-relaxed text-slate-300 md:text-right">
              Em vez de prometer modelo fixo, confirmamos a categoria ideal para seu atendimento com clareza e antecedencia.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-7 lg:grid-cols-3">
            {fleetCategories.map((category, index) => (
              <motion.article
                key={category.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-[#0A0F19]"
              >
                <div className="relative h-52 overflow-hidden">
                  <ImageWithFallback
                    src={category.image}
                    alt={category.imageAlt ?? category.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  <div className="absolute left-4 bottom-4 inline-flex items-center gap-2 rounded-full border border-[#D9B44A]/40 bg-black/70 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.08em] text-[#D9B44A]">
                    <Car size={13} />
                    {category.subtitle}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="mb-3 text-2xl font-black">{category.title}</h3>
                  <p className="mb-5 text-sm leading-relaxed text-slate-300">{category.description}</p>

                  <div className="mb-5 grid grid-cols-2 gap-3 text-sm">
                    <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
                      <p className="mb-1 flex items-center gap-1.5 text-xs font-black uppercase tracking-[0.14em] text-[#D9B44A]">
                        <Users size={13} />
                        Capacidade
                      </p>
                      <p className="text-slate-200">{category.passengers}</p>
                    </div>
                    <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3">
                      <p className="mb-1 flex items-center gap-1.5 text-xs font-black uppercase tracking-[0.14em] text-[#D9B44A]">
                        <Briefcase size={13} />
                        Bagagem
                      </p>
                      <p className="text-slate-200">{category.luggage}</p>
                    </div>
                  </div>

                  <div className="mb-5 flex flex-wrap gap-2">
                    {category.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-white/15 bg-white/[0.03] px-3 py-1 text-xs font-semibold text-slate-200">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <ul className="mb-5 space-y-2 text-sm text-slate-200">
                    {category.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-[#D9B44A]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mb-6 rounded-xl border border-[#D9B44A]/25 bg-[#D9B44A]/10 p-3.5">
                    <p className="flex items-start gap-2 text-xs leading-relaxed text-slate-200">
                      <Info size={15} className="mt-0.5 shrink-0 text-[#D9B44A]" />
                      <span>{category.note}</span>
                    </p>
                  </div>

                  <a
                    href={whatsappFleetLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.08em] text-[#D9B44A] transition-colors hover:text-[#f1cd74]"
                  >
                    Solicitar esta categoria
                    <ArrowRight size={16} />
                  </a>
                </div>
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
              Padrao de Atendimento
            </h3>
            <p className="mb-6 text-sm leading-relaxed text-slate-300">
              Em qualquer categoria, seguimos o mesmo padrao de atendimento profissional para garantir previsibilidade e conforto.
            </p>
            <ul className="space-y-3">
              {qualityPillars.map((pillar) => (
                <li key={pillar} className="flex items-start gap-2 text-sm text-slate-200">
                  <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-[#D9B44A]" />
                  <span>{pillar}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="glass-panel rounded-3xl p-7">
            <h3 className="mb-5 flex items-center gap-2 text-2xl font-black">
              <Clock3 size={22} className="text-[#D9B44A]" />
              Como Funciona
            </h3>
            <p className="mb-6 text-sm leading-relaxed text-slate-300">
              O processo e simples: voce informa o atendimento e nos indicamos a melhor categoria para o seu perfil.
            </p>
            <ul className="space-y-3 text-sm text-slate-200">
              <li className="flex items-start gap-2">
                <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-[#D9B44A]" />
                <span>Envie data, horario, origem e destino no WhatsApp</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-[#D9B44A]" />
                <span>Validamos quantidade de passageiros e bagagem</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-[#D9B44A]" />
                <span>Confirmamos a categoria e finalizamos a reserva</span>
              </li>
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
                Pronto para confirmar seu atendimento?
              </h2>
              <p className="mx-auto mb-10 max-w-3xl text-lg font-semibold opacity-90 md:text-xl">
                Chame no WhatsApp, conte sua necessidade e receba a melhor categoria de frota para sua viagem.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <a
                  href={whatsappFleetLink}
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
