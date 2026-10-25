/* Fonte única de verdade do site. */
import {
  BadgeCheck,
  CalendarCheck,
  FolderOpen,
  MessageSquare,
  ScrollText,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

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

export type Faq = { question: string; answer: string };

export const faq: Faq[] = [
  {
    question: "Preciso trocar de contabilidade para conversar com a Valora?",
    answer: "Não. Podemos conversar primeiro, entender o seu momento e explicar como funciona a transição, com os prazos e documentos necessários para uma troca tranquila.",
  },
  {
  question: "Vocês atendem MEI?",
    answer:
      "Sim. Acompanhamos as obrigações do MEI, o DAS, a declaração anual e a emissão de notas fiscais, além de orientar sobre desenquadramento quando o seu negócio cresce.",
  },
  {
    question: "O atendimento é presencial ou remoto?",
    answer:
      "O atendimento é remoto, com reuniões on-line e envio digital de documentos, o que permite acompanhar empresas de diferentes cidades.",
  },
  {
    question: "Como funcionam os honorários?",
    answer:
      "Cada empresa tem uma rotina diferente, por isso não publicamos tabela fixa. Depois de entender o seu caso, enviamos uma proposta com escopo e valor definidos com clareza.",
  },
  {
    question: "Vocês garantem redução de impostos?",
    answer:
      "Não trabalhamos com promessa de economia. Analisamos o seu enquadramento para mostrar as possibilidades previstas na legislação, com os riscos e as responsabilidades de cada cenário.",
  },
  {
    question: "Em quanto tempo vocês respondem?",
    answer: `Respondemos dentro do horário de atendimento: ${siteConfig.officeHours}. O WhatsApp costuma ser o caminho mais rápido para o primeiro contato.`,
  },
];

export type Benefit = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const benefits: Benefit[] = [
  {
    title: "Atendimento direto com quem cuida do seu caso",
    description:
      "Você fala com as contadoras que conhecem a sua empresa, sem passar por várias pessoas até chegar a uma resposta.",
    icon: MessageSquare,
  },
  {
    title: "Comunicação sem contabilês",
    description:
      "Explicamos obrigações, impostos e prazos em linguagem simples, para você decidir com segurança.",
    icon: ScrollText,
  },
  {
    title: "Prazos acompanhados mês a mês",
    description:
      "Um calendário de obrigações acompanhado por nós, com aviso antes de cada vencimento importante.",
    icon: CalendarCheck,
  },
  {
    title: "Documentos organizados em um só lugar",
    description:
      "Um canal único e definido para enviar notas e documentos, sem acúmulo e sem retrabalho.",
    icon: FolderOpen,
  },
  {
    title: "Planejamento tributário dentro da lei",
    description:
      "Analisamos o seu enquadramento e as possibilidades legais de organização fiscal, com clareza sobre cada cenário.",
    icon: Sparkles,
  },
  {
    title: "Registro e organização profissional",
    description:
      "Trabalho técnico conduzido por profissionais registradas no Conselho Regional de Contabilidade, com sigilo das suas informações.",
    icon: BadgeCheck,
  },
];

export type Founder ={
  name: string;
  role: string;
  initials: string;
  bio: string;
};

// Dados provisórios: trocar pelos nomes, registros e textos reais antes de publicar.
export const founders: Founder[] = [
  {
    name: "Nome da fundadora 1",
    role: "Contadora responsável",
    initials: "F1",
    bio: "Texto provisório. Aqui entram a formação, a experiência e o jeito de atender de cada fundadora",
  },
  {
    name: "Nome da fundadora 2",
    role: "Contadora responsável",
    initials: "F2",
    bio: "Texto provisório. Aqui entram a formação, a experiência e o jeito de atender de cada fundadora.",
  },
];
