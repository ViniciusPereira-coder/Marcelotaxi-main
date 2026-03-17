export type NavItem = {
  name: string;
  path: string;
};

export const NAV_LINKS: NavItem[] = [
  { name: "Início", path: "/" },
  { name: "Traslados", path: "/transfers" },
  { name: "Eventos", path: "/eventos" },
  { name: "Frota", path: "/fleet" },
  { name: "Serviços de Bordo", path: "/onboard" },
  { name: "Sobre", path: "/about" },
  { name: "Contato", path: "/contact" },
];
