export interface MenuItem {
  name: string;
  description?: string;
  price?: number; // Euros. Deixar vazio até confirmar o preço real.
}
export interface WeeklySpecial extends MenuItem {
  day: number; // 0 = domingo; 1 = segunda; ... 6 = sábado
  dayLabel: string;
}
export interface MenuCategory {
  id: string;
  label: string;
  items: MenuItem[];
}

// Único local para editar os dados públicos do café.
export const CAFE = {
  name: 'Snack Bar Simão',
  introduction: 'Café, snacks e comida caseira. Um lugar para fazer uma pausa e sentar-se à mesa.',
  address: 'Largo do Moinho Lote 7 Loja D Lagos',
  phone: '+351 282 762 014', // Exemplo de formato: +351 seguido do número real.
  mapsUrl:
    'https://www.google.com/maps/place//data=!4m2!3m1!1s0xd1b31c97660d5b3:0xa8a3c4f87b97d6f5?sa=X&ved=1t:8290&ictx=111', // Colar a ligação confirmada do Google Maps.
  hours: [
    { days: 'Segunda', time: '07:00–23:00' },
    { days: 'Terça', time: '—' },
    { days: 'Quarta a Sexta', time: '07:00–23:00' },
    { days: 'Sábado', time: '08:00–23:00' },
    { days: 'Domingo', time: '08:00–23:00' },
  ],
  heroImage: 'images/fachada-principal.jpg', // Ex.: 'images/fachada.webp'; colocar o ficheiro em public/images/.
  heroImageAlt: 'Fachada do Snack Bar Simão',
  interiorImage: 'images/interior.jpg',
  interiorImageAlt: 'Interior do Snack Bar Simão',
};

export const WEEKLY_SPECIALS: WeeklySpecial[] = [
  { day: 1, dayLabel: 'Segunda-feira', name: 'Carne de porco à alentejana' },
  { day: 5, dayLabel: 'Sexta-feira', name: 'Sopa da pedra' },
  { day: 6, dayLabel: 'Sábado', name: 'Cabidela' },
];

// Não se pressupõe que os dias em falta sejam dias de encerramento.
// Acrescentar produtos e preços confirmados. Categorias vazias não aparecem.
export const MENU_CATEGORIES: MenuCategory[] = [
  { id: 'snacks', label: 'Snacks', items: [] },
  { id: 'bebidas', label: 'Bebidas', items: [] },
  { id: 'sobremesas', label: 'Sobremesas', items: [] },
];

export interface CafePhoto {
  src: string;
  alt: string;
  caption: string;
}
// Colocar as fotografias em public/images e adicionar entradas aqui.
// Ex.: { src: 'images/esplanada.webp', alt: 'Esplanada do Snack Bar Simão', caption: 'A nossa esplanada' }
export const GALLERY_PHOTOS: CafePhoto[] = [
  {
    src: 'images/interior.jpg',
    alt: 'Balcão e mesas no interior do Snack Bar Simão',
    caption: 'O nosso espaço',
  },
  {
    src: 'images/fachada-principal.jpg',
    alt: 'Fachada do café vista da rua, com a entrada à direita',
    caption: 'Bem-vindo ao Snack Bar Simão',
  },
  {
    src: 'images/entrada.jpg',
    alt: 'Entrada do café e toldo com o nome Snack Bar Simão',
    caption: 'A nossa entrada',
  },
  {
    src: 'images/fachada-ampla.jpg',
    alt: 'Vista ampla da fachada e da rua junto ao café',
    caption: 'Visto da rua',
  },
  {
    src: 'images/fachada-frontal.jpg',
    alt: 'Fachada com os letreiros Jogos, Refeições e Snack Bar Simão',
    caption: 'Um lugar para voltar',
  },
];
