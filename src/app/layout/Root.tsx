import React from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router";
import { Phone, MessageCircle, Menu, X, Instagram, Facebook, Mail, MapPin, CheckCircle2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Toaster } from "sonner";
import { COMPANY_INFO, COMPANY_LINKS } from "@/app/config/company";
import { NAV_LINKS } from "@/app/config/navigation";

export function Root() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { pathname } = useLocation();
  const currentYear = new Date().getFullYear();

  React.useEffect(() => {
    window.scrollTo(0, 0);
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-[#D4AF37] selection:text-black">
      <Toaster position="top-center" />
      
      <header className="fixed top-0 left-0 w-full z-50 bg-black/90 backdrop-blur-md border-b border-[#D4AF37]/20">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 border-2 border-[#D4AF37] rounded-full flex items-center justify-center group-hover:bg-[#D4AF37] transition-colors">
              <span className="text-[#D4AF37] font-bold group-hover:text-black transition-colors">{COMPANY_INFO.brandInitials}</span>
            </div>
            <div>
              <span className="text-xl font-bold tracking-widest text-white block leading-none">{COMPANY_INFO.brandName}</span>
              <span className="text-xs font-medium tracking-[0.3em] text-[#D4AF37] block">{COMPANY_INFO.brandTagline}</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium tracking-wide uppercase transition-colors hover:text-[#D4AF37] ${
                    isActive ? "text-[#D4AF37]" : "text-gray-300"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <a
              href={COMPANY_LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#D4AF37] text-black px-6 py-2 rounded-full text-sm font-bold flex items-center gap-2 hover:bg-[#B8860B] transition-colors"
            >
              <MessageCircle size={18} />
              WHATSAPP
            </a>
          </nav>

          <button
            className="lg:hidden text-white"
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "Fechar menu principal" : "Abrir menu principal"}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-black pt-24 px-6 lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Menu principal"
          >
            <div className="flex flex-col gap-6">
              {NAV_LINKS.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-2xl font-bold uppercase ${
                      isActive ? "text-[#D4AF37]" : "text-white"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <hr className="border-white/10" />
              <div className="flex flex-col gap-4">
                <a
                  href={COMPANY_LINKS.phone}
                  className="flex items-center gap-3 text-lg"
                >
                  <Phone size={20} className="text-[#D4AF37]" />
                  {COMPANY_INFO.phoneDisplay}
                </a>
                <a
                  href={COMPANY_LINKS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#D4AF37] text-black w-full py-4 rounded-xl text-center font-bold flex items-center justify-center gap-2"
                >
                  <MessageCircle size={20} />
                  AGENDAR VIA WHATSAPP
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="pt-20">
        <Outlet />
      </main>

      <footer className="bg-[#0A0A0A] pt-16 pb-8 border-t border-[#D4AF37]/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div className="flex flex-col gap-6">
              <Link to="/" className="flex items-center gap-2">
                <div className="w-10 h-10 border-2 border-[#D4AF37] rounded-full flex items-center justify-center">
                  <span className="text-[#D4AF37] font-bold">{COMPANY_INFO.brandInitials}</span>
                </div>
                <div>
                  <span className="text-xl font-bold tracking-widest text-white block leading-none">{COMPANY_INFO.brandName}</span>
                  <span className="text-xs font-medium tracking-[0.3em] text-[#D4AF37] block">{COMPANY_INFO.brandTagline}</span>
                </div>
              </Link>
              <p className="text-gray-400 text-sm leading-relaxed">
                Transporte executivo premium em {COMPANY_INFO.city}. Conforto, segurança e pontualidade para sua viagem.
              </p>
              <div className="flex gap-4">
                <a href={COMPANY_LINKS.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="p-2 bg-white/5 rounded-full hover:bg-[#D4AF37] hover:text-black transition-all">
                  <Instagram size={20} />
                </a>
                <a href={COMPANY_LINKS.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="p-2 bg-white/5 rounded-full hover:bg-[#D4AF37] hover:text-black transition-all">
                  <Facebook size={20} />
                </a>
                <a href={COMPANY_LINKS.email} aria-label="Enviar e-mail" className="p-2 bg-white/5 rounded-full hover:bg-[#D4AF37] hover:text-black transition-all">
                  <Mail size={20} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-[#D4AF37] font-bold mb-6 tracking-wider uppercase text-sm">Serviços</h4>
              <ul className="flex flex-col gap-4 text-sm text-gray-400">
                <li><Link to="/transfers" className="hover:text-white transition-colors">Traslados Aeroporto</Link></li>
                <li><Link to="/transfers" className="hover:text-white transition-colors">Transporte Corporativo</Link></li>
                <li><Link to="/transfers" className="hover:text-white transition-colors">Traslados para Praias</Link></li>
                <li><Link to="/transfers" className="hover:text-white transition-colors">Logística de Eventos</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-[#D4AF37] font-bold mb-6 tracking-wider uppercase text-sm">Áreas Atendidas</h4>
              <ul className="flex flex-col gap-4 text-sm text-gray-400">
                <li className="flex items-start gap-2"><MapPin size={16} className="text-[#D4AF37] shrink-0" /> São Paulo (Capital)</li>
                <li className="flex items-start gap-2"><MapPin size={16} className="text-[#D4AF37] shrink-0" /> Aeroporto GRU (Guarulhos)</li>
                <li className="flex items-start gap-2"><MapPin size={16} className="text-[#D4AF37] shrink-0" /> Aeroporto CGH (Congonhas)</li>
                <li className="flex items-start gap-2"><MapPin size={16} className="text-[#D4AF37] shrink-0" /> Aeroporto VCP (Viracopos)</li>
                <li className="flex items-start gap-2"><MapPin size={16} className="text-[#D4AF37] shrink-0" /> Santos & Litoral Norte</li>
              </ul>
            </div>

            <div>
              <h4 className="text-[#D4AF37] font-bold mb-6 tracking-wider uppercase text-sm">Contato Rápido</h4>
              <div className="flex flex-col gap-4 text-sm">
                <a href={COMPANY_LINKS.phone} className="flex items-center gap-3 text-white hover:text-[#D4AF37] transition-colors">
                  <Phone size={18} className="text-[#D4AF37]" />
                  {COMPANY_INFO.phoneDisplay}
                </a>
                <a href={COMPANY_LINKS.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-white hover:text-[#D4AF37] transition-colors">
                  <MessageCircle size={18} className="text-[#D4AF37]" />
                  Suporte via WhatsApp
                </a>
                <div className="flex items-center gap-3 text-gray-400">
                  <CheckCircle2 size={18} className="text-[#D4AF37]" />
                  Disponível 24/7
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-xs">
              © {currentYear} {COMPANY_INFO.legalName}. Todos os direitos reservados. CNPJ: {COMPANY_INFO.cnpj}
            </p>
            <div className="flex gap-6 text-xs text-gray-500">
              <a href={COMPANY_LINKS.privacyPolicy} className="hover:text-white transition-colors">Política de Privacidade</a>
              <a href={COMPANY_LINKS.termsOfUse} className="hover:text-white transition-colors">Termos de Uso</a>
            </div>
          </div>
        </div>
      </footer>

      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
        <a
          href={COMPANY_LINKS.phone}
          className="bg-white text-black p-4 rounded-full shadow-2xl hover:scale-110 transition-transform hidden md:flex items-center justify-center border border-black/10"
          aria-label={`Ligar para ${COMPANY_INFO.phoneDisplay}`}
        >
          <Phone size={24} />
        </a>
        <a
          href={COMPANY_LINKS.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center"
          aria-label="Conversar no WhatsApp"
        >
          <MessageCircle size={28} fill="white" className="text-[#25D366]" />
        </a>
      </div>
    </div>
  );
}
