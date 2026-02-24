import React from "react";
import { motion } from "motion/react";
import { Star, Quote, CheckCircle } from "lucide-react";
import { ImageWithFallback } from "@/shared/media/ImageWithFallback";

export function Reviews() {
  const testimonials = [
    {
      name: "David Richardson",
      role: "CEO, Tech Horizon",
      location: "Reino Unido",
      rating: 5,
      comment: "Marcelo oferece um nível de serviço que não vi em outro lugar em São Paulo. Profissional, pontual e o carro estava impecável. Como viajante de negócios, isso é exatamente o que eu preciso.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
    },
    {
      name: "Ana Beatriz Costa",
      role: "Coordenadora de Eventos",
      location: "São Paulo, Brasil",
      rating: 5,
      comment: "Trabalho com o Marcelo há 5 anos para eventos corporativos. Ele é extremamente organizado e nunca nos deixou na mão. A frota é excelente e os motoristas muito educados.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
    },
    {
      name: "Michael Chen",
      role: "Turista Internacional",
      location: "EUA",
      rating: 5,
      comment: "Primeira vez no Brasil e estava preocupado com a segurança. Marcelo me deixou completamente à vontade. Ele me encontrou em GRU com uma placa e me levou direto para o meu hotel. Altamente recomendado!",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop"
    },
    {
      name: "Sophia Müller",
      role: "Enviada Diplomática",
      location: "Alemanha",
      rating: 5,
      comment: "Discrição e pontualidade são primordiais para o meu trabalho. A MarceloTaxi supera as expectativas todas as vezes. O Wi-Fi de bordo me permitiu trabalhar perfeitamente durante o trajeto.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
    },
    {
      name: "Roberto Silva",
      role: "Diretor Executivo",
      location: "Curitiba, Brasil",
      rating: 5,
      comment: "O melhor serviço de transfer em SP. Carros novos, higienizados e o atendimento pelo WhatsApp é muito rápido. Facilita muito a vida de quem viaja a trabalho.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
    },
    {
      name: "Elena Rossi",
      role: "Consultora de Moda",
      location: "Itália",
      rating: 5,
      comment: "Serviço muito elegante. O motorista foi prestativo com minhas muitas malas e conhecia a cidade perfeitamente, evitando o tráfego durante as horas de pico. Experiência fantástica.",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop"
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
            Veja o que nossos clientes corporativos e de lazer dizem sobre sua experiência com a MarceloTaxi.
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
            Junte-se a milhares de viajantes satisfeitos que confiam na MarceloTaxi para suas necessidades de mobilidade em São Paulo.
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
