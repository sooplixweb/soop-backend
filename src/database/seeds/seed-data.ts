import { CaseStudy } from '../../case-studies/case-study.entity';
import { Product } from '../../products/product.entity';
import { AgencyService } from '../../services/agency-service.entity';
import { Testimonial } from '../../testimonials/testimonial.entity';

export const productsSeed: Array<Omit<Product, 'id'>> = [
  {
    slug: 'landing-pages-profissionais',
    name: 'Landing Pages para Profissionais',
    tagline: 'Conversão para especialistas e negócios locais.',
    description:
      'Páginas de alta conversão para advogados, psicólogos, clínicas e escritórios de diversos segmentos, com design sob medida, copy persuasiva, SEO e performance.',
    category: 'Produto digital',
    priceFrom: 'Sob consulta',
    features: ['Copy orientada a conversão', 'Design responsivo', 'SEO técnico', 'Integração com WhatsApp e formulários'],
    highlight: true,
    order: 1,
  },
  {
    slug: 'identidade-branding',
    name: 'Identidade & Branding',
    tagline: 'Marca completa para posicionar com clareza.',
    description:
      'Construção de marca completa com logomarca, paleta, tipografia, linguagem visual e posicionamento para nichos diversos.',
    category: 'Marca',
    priceFrom: 'Sob consulta',
    features: ['Sistema visual', 'Manual de uso', 'Direção de marca', 'Aplicações digitais'],
    highlight: false,
    order: 2,
  },
  {
    slug: 'sites-institucionais',
    name: 'Sites Institucionais',
    tagline: 'Presença digital moderna, rápida e confiável.',
    description:
      'Sites profissionais, modernos e responsivos para empresas que precisam transmitir autoridade e transformar visitas em oportunidades.',
    category: 'Web',
    priceFrom: 'Sob consulta',
    features: ['Arquitetura clara', 'Performance', 'Conteúdo institucional', 'Deploy e analytics'],
    highlight: false,
    order: 3,
  },
  {
    slug: 'gestao-delivery-hamburguerias',
    name: 'Gestão de Delivery para Hamburguerias',
    tagline: 'Operação de delivery com excelência.',
    description:
      'Cardápio digital, pedidos, integração e gestão para hamburguerias que querem vender com mais controle e uma experiência de marca superior.',
    category: 'Delivery',
    priceFrom: 'Sob consulta',
    features: ['Cardápio digital', 'Pedidos online', 'Fluxo operacional', 'Painel de gestão'],
    highlight: true,
    order: 4,
  },
];

export const servicesSeed: Array<Omit<AgencyService, 'id'>> = [
  {
    slug: 'branding-identidade-visual',
    name: 'Branding & Identidade Visual',
    description: 'Construímos sistemas visuais consistentes para marcas que precisam parecer tão fortes quanto são.',
    icon: 'palette',
    order: 1,
  },
  {
    slug: 'web-design-ui',
    name: 'Web Design & UI',
    description: 'Interfaces com hierarquia, ritmo visual e acabamento para marcas digitais premium.',
    icon: 'layout',
    order: 2,
  },
  {
    slug: 'landing-pages-conversao',
    name: 'Landing Pages de Conversão',
    description: 'Páginas focadas em uma mensagem clara, prova, confiança e ação.',
    icon: 'rocket',
    order: 3,
  },
  {
    slug: 'sites-institucionais',
    name: 'Sites & Institucionais',
    description: 'Sites responsivos, rápidos e fáceis de evoluir conforme a empresa cresce.',
    icon: 'monitor',
    order: 4,
  },
  {
    slug: 'posicionamento-marca',
    name: 'Posicionamento de Marca',
    description: 'Organizamos promessa, narrativa e diferenciação para o seu nicho.',
    icon: 'compass',
    order: 5,
  },
  {
    slug: 'gestao-delivery',
    name: 'Gestão de Delivery',
    description: 'Experiências digitais para cardápio, pedidos e gestão de operações gastronômicas.',
    icon: 'shopping-bag',
    order: 6,
  },
];

export const caseStudiesSeed: Array<Omit<CaseStudy, 'id'>> = [
  {
    title: 'Mais Burguer',
    segment: 'Delivery / Hamburgueria',
    imageUrl: '/assets/mais-burguer.png',
    description:
      'Operação de delivery com cardápio digital, fluxo de pedidos e experiência visual alinhada à rotina de uma hamburgueria em crescimento.',
    order: 1,
  },
  {
    title: 'Advocacia Premium',
    segment: 'Advocacia',
    imageUrl: '',
    description:
      'Landing page institucional para escritório jurídico com narrativa de autoridade, prova social e contato direto.',
    order: 2,
  },
  {
    title: 'Clínica Essenza',
    segment: 'Clínica',
    imageUrl: '',
    description:
      'Presença digital para clínica com serviços organizados, tom acolhedor e fluxo de agendamento simplificado.',
    order: 3,
  },
  {
    title: 'Psicologia Clara',
    segment: 'Psicologia',
    imageUrl: '',
    description:
      'Página de conversão para profissional de psicologia com posicionamento humano, elegante e objetivo.',
    order: 4,
  },
];

export const testimonialsSeed: Array<Omit<Testimonial, 'id'>> = [
  {
    author: 'Marina Costa',
    role: 'Fundadora',
    company: 'Clínica Essenza',
    quote:
      'A staxsolutions traduziu nossa clínica em uma presença digital clara, bonita e muito mais fácil de apresentar aos pacientes.',
    order: 1,
  },
  {
    author: 'Rafael Almeida',
    role: 'Sócio',
    company: 'Advocacia Premium',
    quote:
      'O projeto elevou a percepção do escritório e organizou nossa comunicação para captar oportunidades melhores.',
    order: 2,
  },
  {
    author: 'Bruno Martins',
    role: 'Operador',
    company: 'Mais Burguer',
    quote:
      'O delivery ficou mais profissional, com uma experiência que combina com a qualidade do nosso produto.',
    order: 3,
  },
];
