export const COMPANY_INFO = {
  brandInitials: "MT",
  brandName: "MARCELO",
  brandTagline: "TAXI PREMIUM",
  legalName: "MarceloTaxi",
  city: "São Paulo",
  phoneDisplay: "+55 11 99999-9999",
  phoneDigits: "5511999999999",
  email: "contato@marcelotaxi.com.br",
  cnpj: "00.000.000/0001-00",
} as const;

export const COMPANY_LINKS = {
  whatsapp: `https://api.whatsapp.com/send?phone=${COMPANY_INFO.phoneDigits}`,
  phone: `tel:+${COMPANY_INFO.phoneDigits}`,
  email: `mailto:${COMPANY_INFO.email}`,
  instagram: "#",
  facebook: "#",
  privacyPolicy: "#",
  termsOfUse: "#",
} as const;
