import React from "react";
import { motion } from "motion/react";
import { Star, Quote, CheckCircle } from "lucide-react";
import { ImageWithFallback } from "@/shared/media/ImageWithFallback";
import avatarAna from "@/app/assets/avatars/avatar-ana.svg";
import avatarDavid from "@/app/assets/avatars/avatar-david.svg";
import avatarElena from "@/app/assets/avatars/avatar-elena.svg";
import avatarMichael from "@/app/assets/avatars/avatar-michael.svg";
import avatarRoberto from "@/app/assets/avatars/avatar-roberto.svg";
import avatarSophia from "@/app/assets/avatars/avatar-sophia.svg";

export function Reviews() {
  const testimonials = [
    {
      name: "David Richardson",
      role: "CEO, Tech Horizon",
      location: "Reino Unido",
      rating: 5,
      comment: "Marcelo oferece um nível de serviço raro em São Paulo. Sempre profissional, pontual e com o veículo impecável. Para quem viaja a negócios, faz toda a diferença.",
      avatar: avatarDavid
    },
    {
      name: "Ana Beatriz Costa",
      role: "Coordenadora de Eventos",
      location: "São Paulo, Brasil",
      rating: 5,
      comment: "Trabalho com o Marcelo há cinco anos em eventos corporativos. O atendimento é extremamente organizado, a frota é excelente e a equipe sempre muito educada.",
      avatar: avatarAna
    },
    {
      name: "Michael Chen",
      role: "Turista Internacional",
      location: "EUA",
      rating: 5,
      comment: "Era minha primeira vez no Brasil e eu estava preocupado com a segurança. Marcelo me deixou totalmente à vontade, me recebeu em GRU com placa e me levou direto ao hotel. Recomendo sem hesitar.",
      avatar: avatarMichael
    },
    {
      name: "Sophia Müller",
      role: "Enviada Diplomática",
      location: "Alemanha",
      rating: 5,
      comment: "Discrição e pontualidade são essenciais no meu trabalho, e a MarceloTaxi sempre supera as expectativas. O Wi-Fi de bordo me permite trabalhar normalmente durante o trajeto.",
      avatar: avatarSophia
    },
    {
      name: "Roberto Silva",
      role: "Diretor Executivo",
      location: "Curitiba, Brasil",
      rating: 5,
      comment: "Um dos melhores serviços de transfer em São Paulo. Carros novos, higienizados e atendimento rápido pelo WhatsApp. Facilita muito a rotina de quem viaja a trabalho.",
      avatar: avatarRoberto
    },
    {
      name: "Elena Rossi",
      role: "Consultora de Moda",
      location: "Itália",
      rating: 5,
      comment: "Um serviço elegante e muito eficiente. O motorista foi prestativo com minhas malas e conduziu o trajeto com ótimo conhecimento da cidade, evitando o trânsito nos horários de pico.",
      avatar: avatarElena
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
            Depoimentos de <span className="text-[#D4AF37]">Clientes</span>
          </motion.h1>
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} size={24} className="fill-[#D4AF37] text-[#D4AF37]" />
              ))}
            </div>
            <span className="text-xl font-bold">Avaliação Média 4.9/5</span>
          </div>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Veja como clientes corporativos e particulares avaliam a experiência de viajar com a MarceloTaxi.
          </p>
        </div>
      </section>

      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#0A0A0A] p-10 rounded-[40px] border border-white/5 flex flex-col relative"
              >
                <Quote size={40} className="text-[#D4AF37]/20 absolute top-8 right-8" />
                <div className="flex mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={16} className="fill-[#D4AF37] text-[#D4AF37]" />
                  ))}
                </div>
                <p className="text-gray-300 text-lg mb-8 italic leading-relaxed">
                  "{review.comment}"
                </p>
                <div className="mt-auto flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden border border-[#D4AF37]/30">
                    <ImageWithFallback src={review.avatar} className="w-full h-full object-cover" alt={review.name} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white flex items-center gap-2">
                      {review.name}
                      <CheckCircle size={14} className="text-blue-400" />
                    </h4>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">{review.role} • {review.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0A0A0A] border-y border-[#D4AF37]/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8">Viaje com Confiança</h2>
          <p className="text-gray-400 text-xl mb-12 max-w-2xl mx-auto">
            Junte-se aos clientes que escolhem a MarceloTaxi para se deslocar com segurança, conforto e previsibilidade em São Paulo.
          </p>
          <div className="flex flex-wrap justify-center gap-12 grayscale opacity-50">
            <div className="text-2xl font-bold tracking-widest uppercase">TripAdvisor</div>
            <div className="text-2xl font-bold tracking-widest uppercase">Google</div>
            <div className="text-2xl font-bold tracking-widest uppercase">Trustpilot</div>
          </div>
        </div>
      </section>
    </div>
  );
}
