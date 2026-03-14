import React from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router";
import {
  Phone,
  MessageCircle,
  Menu,
  X,
  Instagram,
  Facebook,
  Mail,
  MapPin,
  CheckCircle2,
} from "lucide-react";
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
    <div className="min-h-screen bg-black font-sans text-white selection:bg-[#D4AF37] selection:text-black">
      <Toaster position="top-center" />

      <header className="fixed top-0 left-0 z-50 w-full border-b border-[#D4AF37]/20 bg-black/90 backdrop-blur-md">
        <div className="container mx-auto flex h-20 items-center justify-between px-4">
          <Link to="/" className="group flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#D4AF37] transition-colors group-hover:bg-[#D4AF37]">
              <span className="font-bold text-[#D4AF37] transition-colors group-hover:text-black">
                {COMPANY_INFO.brandInitials}
              </span>
            </div>
            <div>
              <span className="block text-xl font-bold leading-none tracking-widest text-white">
                {COMPANY_INFO.brandName}
              </span>
              <span className="block text-xs font-medium tracking-[0.3em] text-[#D4AF37]">
                {COMPANY_INFO.brandTagline}
              </span>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `menu-link text-sm font-medium uppercase tracking-wide transition-colors ${
                    isActive ? "menu-link-active" : "text-gray-300"
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
              className="whatsapp-cta flex items-center gap-2 rounded-full border border-transparent bg-[#D4AF37] px-6 py-2 text-sm font-bold text-black transition-colors"
            >
              <MessageCircle size={18} />
              WHATSAPP
            </a>
          </nav>

          <button
            className="text-white lg:hidden"
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
            className="fixed inset-0 z-40 bg-black px-6 pt-24 lg:hidden"
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
                    `menu-link text-2xl font-bold uppercase transition-colors ${
                      isActive ? "menu-link-active" : "text-white"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <hr className="border-white/10" />
              <div className="flex flex-col gap-4">
                <a href={COMPANY_LINKS.phone} className="flex items-center gap-3 text-lg">
                  <Phone size={20} className="text-[#D4AF37]" />
                  {COMPANY_INFO.phoneDisplay}
                </a>
                <a
                  href={COMPANY_LINKS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whatsapp-cta flex w-full items-center justify-center gap-2 rounded-xl border border-transparent bg-[#D4AF37] py-4 text-center font-bold text-black transition-colors"
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

      <footer className="border-t border-[#D4AF37]/10 bg-[#0A0A0A] pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col gap-6">
              <Link to="/" className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#D4AF37]">
                  <span className="font-bold text-[#D4AF37]">{COMPANY_INFO.brandInitials}</span>
                </div>
                <div>
                  <span className="block text-xl font-bold leading-none tracking-widest text-white">
                    {COMPANY_INFO.brandName}
                  </span>
                  <span className="block text-xs font-medium tracking-[0.3em] text-[#D4AF37]">
                    {COMPANY_INFO.brandTagline}
                  </span>
                </div>
              </Link>
              <p className="text-sm leading-relaxed text-gray-400">
                Transporte executivo em {COMPANY_INFO.city}, com foco em conforto, pontualidade e atendimento profissional.
              </p>
              <div className="flex gap-4">
                <a
                  href={COMPANY_LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="rounded-full bg-white/5 p-2 transition-all hover:bg-[#D4AF37] hover:text-black"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href={COMPANY_LINKS.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="rounded-full bg-white/5 p-2 transition-all hover:bg-[#D4AF37] hover:text-black"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href={COMPANY_LINKS.email}
                  aria-label="Enviar e-mail"
                  className="rounded-full bg-white/5 p-2 transition-all hover:bg-[#D4AF37] hover:text-black"
                >
                  <Mail size={20} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="mb-6 text-sm font-bold uppercase tracking-wider text-[#D4AF37]">Serviços</h4>
              <ul className="flex flex-col gap-4 text-sm text-gray-400">
                <li><Link to="/transfers" className="transition-colors hover:text-white">Traslados Aeroportuários</Link></li>
                <li><Link to="/transfers" className="transition-colors hover:text-white">Transporte Corporativo</Link></li>
                <li><Link to="/transfers" className="transition-colors hover:text-white">Traslados para Praias</Link></li>
                <li><Link to="/transfers" className="transition-colors hover:text-white">Logística de Eventos</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="mb-6 text-sm font-bold uppercase tracking-wider text-[#D4AF37]">Áreas Atendidas</h4>
              <ul className="flex flex-col gap-4 text-sm text-gray-400">
                <li className="flex items-start gap-2"><MapPin size={16} className="shrink-0 text-[#D4AF37]" /> São Paulo (Capital)</li>
                <li className="flex items-start gap-2"><MapPin size={16} className="shrink-0 text-[#D4AF37]" /> Aeroporto GRU (Guarulhos)</li>
                <li className="flex items-start gap-2"><MapPin size={16} className="shrink-0 text-[#D4AF37]" /> Aeroporto CGH (Congonhas)</li>
                <li className="flex items-start gap-2"><MapPin size={16} className="shrink-0 text-[#D4AF37]" /> Aeroporto VCP (Viracopos)</li>
                <li className="flex items-start gap-2"><MapPin size={16} className="shrink-0 text-[#D4AF37]" /> Alphaville e região central</li>
              </ul>
            </div>

            <div>
              <h4 className="mb-6 text-sm font-bold uppercase tracking-wider text-[#D4AF37]">Contato Rápido</h4>
              <div className="flex flex-col gap-4 text-sm">
                <a href={COMPANY_LINKS.phone} className="flex items-center gap-3 text-white transition-colors hover:text-[#D4AF37]">
                  <Phone size={18} className="text-[#D4AF37]" />
                  {COMPANY_INFO.phoneDisplay}
                </a>
                <a
                  href={COMPANY_LINKS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white transition-colors hover:text-[#D4AF37]"
                >
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

          <div className="flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 md:flex-row">
            <p className="text-xs text-gray-500">
              © {currentYear} {COMPANY_INFO.legalName}. Todos os direitos reservados. CNPJ: {COMPANY_INFO.cnpj}
            </p>
            <div className="flex gap-6 text-xs text-gray-500">
              <a href={COMPANY_LINKS.privacyPolicy} className="transition-colors hover:text-white">Política de Privacidade</a>
              <a href={COMPANY_LINKS.termsOfUse} className="transition-colors hover:text-white">Termos de Uso</a>
            </div>
          </div>
        </div>
      </footer>

      <div className="fixed right-6 bottom-6 z-50 flex flex-col gap-3">
        <a
          href={COMPANY_LINKS.phone}
          className="hidden items-center justify-center rounded-full border border-black/10 bg-white p-4 text-black shadow-2xl transition-transform hover:scale-110 md:flex"
          aria-label={`Ligar para ${COMPANY_INFO.phoneDisplay}`}
        >
          <Phone size={24} />
        </a>
        <a
          href={COMPANY_LINKS.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center rounded-full bg-[#25D366] p-4 text-white shadow-2xl transition-transform hover:scale-110"
          aria-label="Conversar no WhatsApp"
        >
          <MessageCircle size={28} fill="white" className="text-[#25D366]" />
        </a>
      </div>
    </div>
  );
}
