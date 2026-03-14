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
  Sparkles,
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
    <div className="min-h-screen bg-[#05080f] text-slate-100 selection:bg-[#D9B44A] selection:text-black">
      <Toaster position="top-center" />

      <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-[#05080f]/80 backdrop-blur-xl">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-[#442f00]/25" />
        <div className="container relative mx-auto flex h-[84px] items-center justify-between px-4">
          <Link to="/" className="group flex items-center gap-3">
            <div className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl border border-[#D9B44A]/60 bg-black">
              <span className="text-lg font-black text-[#D9B44A]">{COMPANY_INFO.brandInitials}</span>
              <div className="absolute top-1 right-1 h-1.5 w-1.5 rounded-full bg-[#D9B44A]" />
            </div>
            <div>
              <span className="block text-lg font-black leading-none tracking-[0.08em] text-white">
                {COMPANY_INFO.brandName}
              </span>
              {COMPANY_INFO.brandTagline ? (
                <span className="block text-[11px] font-semibold tracking-[0.24em] text-[#D9B44A]">
                  {COMPANY_INFO.brandTagline}
                </span>
              ) : null}
            </div>
          </Link>

          <nav className="hidden items-center gap-4 lg:flex">
            <div className="relative flex items-center rounded-full border border-white/15 bg-black/70 p-1 shadow-[0_14px_45px_rgba(0,0,0,0.48)] backdrop-blur-xl">
              <span className="pointer-events-none absolute inset-0 rounded-full bg-[radial-gradient(circle_at_20%_0%,rgba(255,255,255,0.16),transparent_48%),radial-gradient(circle_at_85%_100%,rgba(217,180,74,0.2),transparent_42%)]" />
              {NAV_LINKS.map((link) => (
                <NavLink key={link.path} to={link.path} className="relative z-10 rounded-full outline-none">
                  {({ isActive }) => (
                    <span className="relative block rounded-full px-3 py-2 text-[10px] font-black uppercase tracking-[0.1em] whitespace-nowrap xl:px-4 xl:text-[11px]">
                      {isActive ? (
                        <motion.span
                          layoutId="desktop-nav-active-pill"
                          transition={{ type: "spring", stiffness: 380, damping: 32 }}
                          className="absolute inset-0 rounded-full bg-gradient-to-r from-[#f6f6f6] via-[#ffffff] to-[#D9B44A]"
                        />
                      ) : null}
                      <span className={`relative z-10 transition-colors ${isActive ? "text-black" : "text-slate-200 hover:text-white"}`}>
                        {link.name}
                      </span>
                    </span>
                  )}
                </NavLink>
              ))}
            </div>

            <a
              href={COMPANY_LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-cta group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-[#D9B44A]/40 px-6 py-2.5 text-sm font-black text-black transition-transform hover:-translate-y-0.5"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#D9B44A] to-[#f0cd79]" />
              <span className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_15%_50%,rgba(255,255,255,0.45),transparent_40%)]" />
              <MessageCircle size={17} className="relative z-10" />
              <span className="relative z-10">WHATSAPP</span>
            </a>
          </nav>

          <button
            className="rounded-xl border border-white/15 bg-white/[0.03] p-2 text-white lg:hidden"
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? "Fechar menu principal" : "Abrir menu principal"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
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
            transition={{ type: "spring", damping: 26, stiffness: 220 }}
            className="fixed inset-0 z-40 border-l border-white/10 bg-[#070b16] px-6 pt-24 lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Menu principal"
          >
            <div className="glass-panel rounded-3xl p-6">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#D9B44A]/35 bg-[#D9B44A]/10 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#D9B44A]">
                <Sparkles size={14} />
                Navegação
              </div>
              <div className="flex flex-col gap-3">
                {NAV_LINKS.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    className={({ isActive }) =>
                      `rounded-xl border px-4 py-3 text-lg font-black uppercase tracking-[0.08em] transition-colors ${
                        isActive
                          ? "border-[#D9B44A]/50 bg-[#D9B44A]/15 text-[#D9B44A]"
                          : "border-white/10 bg-white/[0.02] text-white hover:bg-white/[0.06]"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}
              </div>
              <hr className="my-6 border-white/10" />
              <div className="flex flex-col gap-3">
                <a href={COMPANY_LINKS.phone} className="flex items-center gap-3 text-base font-semibold">
                  <Phone size={18} className="text-[#D9B44A]" />
                  {COMPANY_INFO.phoneDisplay}
                </a>
                <a
                  href={COMPANY_LINKS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whatsapp-cta flex w-full items-center justify-center gap-2 rounded-xl border border-transparent bg-[#D9B44A] py-3 text-center font-black text-black"
                >
                  <MessageCircle size={18} />
                  AGENDAR VIA WHATSAPP
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="relative pt-[84px]">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_0%,rgba(255,255,255,0.08),transparent_38%),radial-gradient(circle_at_90%_10%,rgba(217,180,74,0.2),transparent_35%)]" />
        <Outlet />
      </main>

      <footer className="border-t border-white/10 bg-[#050912] pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="mb-14 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4">
            <div className="glass-panel rounded-3xl p-6">
              <Link to="/" className="mb-4 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#D9B44A]/60 bg-black">
                  <span className="font-black text-[#D9B44A]">{COMPANY_INFO.brandInitials}</span>
                </div>
                <div>
                  <span className="block text-lg font-black leading-none tracking-[0.08em] text-white">
                    {COMPANY_INFO.brandName}
                  </span>
                  {COMPANY_INFO.brandTagline ? (
                    <span className="block text-[11px] font-semibold tracking-[0.2em] text-[#D9B44A]">
                      {COMPANY_INFO.brandTagline}
                    </span>
                  ) : null}
                </div>
              </Link>
              <p className="text-sm leading-relaxed text-slate-300">
                Transporte executivo em {COMPANY_INFO.city}, com tecnologia operacional, pontualidade e atendimento humano.
              </p>
              <div className="mt-5 flex gap-3">
                <a
                  href={COMPANY_LINKS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="rounded-xl border border-white/10 bg-white/5 p-2.5 transition-colors hover:border-[#D9B44A]/40 hover:text-[#D9B44A]"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href={COMPANY_LINKS.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="rounded-xl border border-white/10 bg-white/5 p-2.5 transition-colors hover:border-[#D9B44A]/40 hover:text-[#D9B44A]"
                >
                  <Facebook size={18} />
                </a>
                <a
                  href={COMPANY_LINKS.email}
                  aria-label="Enviar e-mail"
                  className="rounded-xl border border-white/10 bg-white/5 p-2.5 transition-colors hover:border-[#D9B44A]/40 hover:text-[#D9B44A]"
                >
                  <Mail size={18} />
                </a>
              </div>
            </div>

            <div className="glass-panel rounded-3xl p-6">
              <h4 className="mb-4 text-xs font-black uppercase tracking-[0.2em] text-[#D9B44A]">Serviços</h4>
              <ul className="space-y-3 text-sm text-slate-300">
                <li><Link to="/transfers" className="transition-colors hover:text-white">Traslados aeroportuários</Link></li>
                <li><Link to="/transfers" className="transition-colors hover:text-white">Transporte corporativo</Link></li>
                <li><Link to="/eventos" className="transition-colors hover:text-white">Logística de eventos</Link></li>
                <li><Link to="/fleet" className="transition-colors hover:text-white">Frota executiva</Link></li>
              </ul>
            </div>

            <div className="glass-panel rounded-3xl p-6">
              <h4 className="mb-4 text-xs font-black uppercase tracking-[0.2em] text-[#D9B44A]">Áreas atendidas</h4>
              <ul className="space-y-3 text-sm text-slate-300">
                <li className="flex items-start gap-2"><MapPin size={15} className="mt-0.5 shrink-0 text-[#D9B44A]" /> São Paulo (Capital)</li>
                <li className="flex items-start gap-2"><MapPin size={15} className="mt-0.5 shrink-0 text-[#D9B44A]" /> Aeroporto GRU</li>
                <li className="flex items-start gap-2"><MapPin size={15} className="mt-0.5 shrink-0 text-[#D9B44A]" /> Aeroporto CGH</li>
                <li className="flex items-start gap-2"><MapPin size={15} className="mt-0.5 shrink-0 text-[#D9B44A]" /> Aeroporto VCP</li>
              </ul>
            </div>

            <div className="glass-panel rounded-3xl p-6">
              <h4 className="mb-4 text-xs font-black uppercase tracking-[0.2em] text-[#D9B44A]">Contato rápido</h4>
              <div className="space-y-3 text-sm">
                <a href={COMPANY_LINKS.phone} className="flex items-center gap-3 text-white transition-colors hover:text-[#D9B44A]">
                  <Phone size={16} className="text-[#D9B44A]" />
                  {COMPANY_INFO.phoneDisplay}
                </a>
                <a
                  href={COMPANY_LINKS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white transition-colors hover:text-[#D9B44A]"
                >
                  <MessageCircle size={16} className="text-[#D9B44A]" />
                  Suporte via WhatsApp
                </a>
                <div className="flex items-center gap-3 text-slate-300">
                  <CheckCircle2 size={16} className="text-[#D9B44A]" />
                  Disponível 24/7
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-7 md:flex-row">
            <p className="text-xs text-slate-400">
              © {currentYear} {COMPANY_INFO.legalName}. Todos os direitos reservados.
            </p>
            <div className="flex gap-5 text-xs text-slate-400">
              <a href={COMPANY_LINKS.privacyPolicy} className="transition-colors hover:text-white">Política de Privacidade</a>
              <a href={COMPANY_LINKS.termsOfUse} className="transition-colors hover:text-white">Termos de Uso</a>
            </div>
          </div>
        </div>
      </footer>

      <div className="fixed right-5 bottom-5 z-50 flex flex-col gap-3">
        <a
          href={COMPANY_LINKS.phone}
          className="hidden items-center justify-center rounded-2xl border border-white/20 bg-white text-black shadow-xl transition-transform hover:scale-105 md:flex md:h-12 md:w-12"
          aria-label={`Ligar para ${COMPANY_INFO.phoneDisplay}`}
        >
          <Phone size={20} />
        </a>
        <a
          href={COMPANY_LINKS.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/20 bg-[#25D366] text-white shadow-xl transition-transform hover:scale-105"
          aria-label="Conversar no WhatsApp"
        >
          <MessageCircle size={26} fill="white" className="text-[#25D366]" />
        </a>
      </div>
    </div>
  );
}
