/* Fonte única de verdade do site. */

export const siteConfig = {
  name: "Valora Contabilidade Digital",
  shortName: "Valora",
  tagline: "Contabilidade digital",
  description:
    "Contabilidade digital para MEI, Simples Nacional e Lucro Presumido. Atendimento próximo, linguagem clara e rotina contábil em dia.",
  whatsappNumber: "5500000000000",
  email: "contato@valora.com.br",
  officeHours: "Segunda a sexta, das 9h às 18h (horário de Brasília)",
};

export type NavItem = { label: string; to: string };

export const navigation: NavItem[] = [
  { label: "Início", to: "/" },
  { label: "Serviços", to: "/servicos" },
  { label: "Sobre", to: "/sobre" },
  { label: "Contato", to: "/contato" },
];

export type ServiceCategory = {
  id: string;
  title: string;
  summary: string;
  items: string[];
};

export const serviceCategories: ServiceCategory[] = [
  {
    id: "mei",
    title: "MEI",
    summary: "Obrigações em dia para quem está começando sozinho.",
    items: [
      "Orientação sobre obrigações e regularização",
      "Apoio com DAS e declaração anual",
      "Orientação sobre emissão de notas fiscais",
    ],
  },
  {
    id: "simples-nacional",
    title: "Simples Nacional",
    summary: "A rotina contábil e fiscal da sua empresa organizada.",
    items: [
      "Rotinas contábeis e fiscais",
      "Apuração de impostos e obrigações acessórias",
      "Análise e planejamento tributário",
    ],
  },
  {
    id: "lucro-presumido",
    title: "Lucro Presumido",
    summary: "Escrituração, tributos e relatórios com acompanhamento técnico.",
    items: [
      "Escrituração contábil",
      "Entrega de obrigações acessórias",
      "Relatórios e demonstrações contábeis",
    ],
  },
];