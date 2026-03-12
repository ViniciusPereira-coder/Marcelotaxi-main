export const COMPANY_INFO = {
  brandInitials: "MT",
  brandName: "MARCELO",
  brandTagline: "TAXI PREMIUM",
  legalName: "MarceloTaxi",
  city: "São Paulo",
  phoneDisplay: "+55 11 92206-1435",
  phoneDigits: "5511922061435",
  email: "contato@marcelotaxi.com.br",
  cnpj: "00.000.000/0001-00",
} as const;

export const COMPANY_LINKS = {
  whatsapp: `https://wa.me/${COMPANY_INFO.phoneDigits}`,
  phone: `tel:+${COMPANY_INFO.phoneDigits}`,
  email: `mailto:${COMPANY_INFO.email}`,
  instagram: "#",
  facebook: "#",
  privacyPolicy: "#",
  termsOfUse: "#",
} as const;
