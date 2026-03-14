import React from "react";
import { motion } from "motion/react";
import { Phone, MessageCircle, Mail, MapPin, Clock, Send, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { COMPANY_INFO, COMPANY_LINKS } from "@/app/config/company";

export function Contact() {
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    service: "Traslado Aeroporto",
    message: ""
  });

  const buildWhatsappUrl = () => {
    const details = formData.message.trim();
    const text = [
      "Olá! Gostaria de solicitar um orçamento.",
      `Nome: ${formData.name.trim()}`,
      `E-mail: ${formData.email.trim()}`,
      `Telefone: ${formData.phone.trim()}`,
      `Serviço: ${formData.service}`,
      details ? `Detalhes: ${details}` : "",
    ]
      .filter(Boolean)
      .join("\n");

    return `${COMPANY_LINKS.whatsapp}?text=${encodeURIComponent(text)}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(buildWhatsappUrl(), "_blank", "noopener,noreferrer");
    toast.success("Abrimos o WhatsApp para você concluir o atendimento.");
    setFormData({ name: "", email: "", phone: "", service: "Traslado Aeroporto", message: "" });
  };

  return (
    <div className="flex flex-col">
      <section className="bg-black py-20 border-b border-[#D4AF37]/20">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Fale <span className="text-[#D4AF37]">Conosco</span>
          </motion.h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto">
            Estamos disponíveis 24/7 para reservas, orçamentos e atendimentos personalizados.
          </p>
        </div>
      </section>

      <section className="py-24 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-3xl font-bold mb-10">Informações de Contato</h2>
              <div className="space-y-8 mb-12">
                <a 
                  href={COMPANY_LINKS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-6 group"
                >
                  <div className="p-4 bg-[#D4AF37]/10 rounded-2xl text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-all">
                    <MessageCircle size={32} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">WhatsApp</h4>
                    <p className="text-gray-400 mb-1">Reservas e cotações com resposta rápida</p>
                    <p className="text-[#D4AF37] font-bold">{COMPANY_INFO.phoneDisplay}</p>
                  </div>
                </a>

                <a 
                  href={COMPANY_LINKS.phone}
                  className="flex items-start gap-6 group"
                >
                  <div className="p-4 bg-white/5 rounded-2xl text-white group-hover:bg-white group-hover:text-black transition-all">
                    <Phone size={32} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">Ligação Telefônica</h4>
                    <p className="text-gray-400 mb-1">Atendimento direto 24 horas por dia</p>
                    <p className="text-white font-bold">{COMPANY_INFO.phoneDisplay}</p>
                  </div>
                </a>

                <a
                  href={COMPANY_LINKS.email}
                  className="flex items-start gap-6 group"
                >
                  <div className="p-4 bg-white/5 rounded-2xl text-white group-hover:bg-white group-hover:text-black transition-all">
                    <Mail size={32} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">E-mail</h4>
                    <p className="text-gray-400 mb-1">Atendimento corporativo, eventos e demandas especiais</p>
                    <p className="text-white font-bold">{COMPANY_INFO.email}</p>
                  </div>
                </a>

                <div className="flex items-start gap-6">
                  <div className="p-4 bg-white/5 rounded-2xl text-white">
                    <Clock size={32} />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-1">Disponibilidade</h4>
                    <p className="text-gray-400 mb-1">Operamos todos os dias do ano</p>
                    <p className="text-white font-bold flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-[#D4AF37]" />
                      24 Horas / 7 Dias
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-10 bg-[#0A0A0A] border border-[#D4AF37]/20 rounded-[32px]">
                <h4 className="font-bold text-xl mb-6 flex items-center gap-2">
                  <MapPin className="text-[#D4AF37]" /> Áreas Atendidas
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-400">
                  <li>• Aeroporto GRU Guarulhos</li>
                  <li>• Aeroporto CGH Congonhas</li>
                  <li>• Aeroporto VCP Viracopos</li>
                  <li>• Centro de São Paulo</li>
                  <li>• Alphaville e Barueri</li>
                  <li>• Porto de Santos (Cruzeiros)</li>
                  <li>• Litoral Norte e Sul</li>
                  <li>• Interior do Estado de SP</li>
                </ul>
              </div>
            </div>

            <div className="bg-[#0A0A0A] p-10 md:p-16 rounded-[40px] border border-white/5">
              <h2 className="text-3xl font-bold mb-8">Envie uma Mensagem</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="contact-name" className="text-xs font-bold uppercase tracking-widest text-gray-500">Nome</label>
                    <input 
                      id="contact-name"
                      type="text" 
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:border-[#D4AF37] outline-none transition-colors"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="contact-email" className="text-xs font-bold uppercase tracking-widest text-gray-500">E-mail</label>
                    <input 
                      id="contact-email"
                      type="email" 
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:border-[#D4AF37] outline-none transition-colors"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="contact-phone" className="text-xs font-bold uppercase tracking-widest text-gray-500">Telefone</label>
                    <input 
                      id="contact-phone"
                      type="tel" 
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:border-[#D4AF37] outline-none transition-colors"
                      placeholder="+55 11 99999-9999"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="contact-service" className="text-xs font-bold uppercase tracking-widest text-gray-500">Serviço Desejado</label>
                    <select 
                      id="contact-service"
                      value={formData.service}
                      onChange={(e) => setFormData({...formData, service: e.target.value})}
                      className="bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:border-[#D4AF37] outline-none transition-colors appearance-none"
                    >
                      <option className="bg-black">Traslado Aeroporto</option>
                      <option className="bg-black">Transporte Corporativo</option>
                      <option className="bg-black">Viagem Litoral/Interior</option>
                      <option className="bg-black">Logística de Eventos</option>
                      <option className="bg-black">Outro atendimento</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="contact-message" className="text-xs font-bold uppercase tracking-widest text-gray-500">Mensagem / Detalhes da Viagem</label>
                  <textarea 
                    id="contact-message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:border-[#D4AF37] outline-none transition-colors resize-none"
                    placeholder="Informe voo, endereço, número de passageiros ou qualquer necessidade especial..."
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-[#D4AF37] text-black py-5 rounded-full font-bold text-lg flex items-center justify-center gap-3 hover:bg-[#B8860B] transition-all transform hover:-translate-y-1 shadow-xl shadow-[#D4AF37]/10"
                >
                  <Send size={20} />
                  ENVIAR MENSAGEM
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
