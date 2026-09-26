# Snack Bar Simão — projeto Angular

Primeira versão funcional em Angular 22.2, TypeScript e SCSS. Só frontend: não precisa de backend, conta, chave API, secrets ou ficheiro `.env`.

## Arrancar

Foi validado com Node.js **24.19.0** e npm 11.9.0. Usa Node 24.19 ou uma versão compatível. A versão está também em `.nvmrc`.

```bash
cd snack-bar-simao
npm ci
npm start
```

Abrir http://localhost:4200. Se usares nvm: `nvm install` e `nvm use` antes dos comandos npm.

```bash
npm run build
```

A versão compilada fica em `dist/snack-bar-simao/browser`. Este ZIP contém o código-fonte e o lockfile, mas não `node_modules` nem o resultado compilado.

## O que está feito

- Página inicial focada em quem ainda não conhece o café.
- Página `/ementa`, separada, com pratos da semana e destaque do prato de hoje.
- Segunda: carne de porco à alentejana; sexta: sopa da pedra; sábado: cabidela.
- O dia é calculado em `Europe/Lisbon`, não no fuso do visitante. É atualizado a cada minuto enquanto a ementa está aberta.
- Dias sem prato definido mostram um convite a consultar o café, sem dizer que está encerrado.
- Navegação móvel, âncoras para contactos e pratos, títulos de página, descrição, foco visível e ligação para saltar para o conteúdo.
- Fontes locais: sem chamadas ao Google Fonts.
- Marca tipográfica, chávena e favicon em SVG. Os ícones são vetores simples criados para este projeto; não precisam de uma API ou biblioteca externa.
- Componentes standalone e páginas lazy-loaded.

## Editar a ementa e os dados

**`src/app/data/cafe.data.ts`** centraliza os dados:

- `CAFE`: apresentação, morada, telefone, mapa, horário e fotografias.
- `WEEKLY_SPECIALS`: pratos semanais. `day`: domingo = 0, segunda = 1, ..., sábado = 6.
- `MENU_CATEGORIES`: snacks, bebidas e sobremesas. Categorias vazias ficam escondidas.

Exemplo de prato com preço (exemplo de código, não é o preço real do café):

```typescript
{ day: 1, dayLabel: 'Segunda-feira', name: 'Carne de porco à alentejana', price: 9.50 }
```

Exemplo de produto para colocar em `items` da categoria certa:

```typescript
{ name: 'Tosta mista', description: 'Queijo e fiambre', price: 3.50 }
```

Os preços não foram preenchidos porque ainda não foram confirmados. O formato monetário é português. Não há gestão de stock ou esgotados; o destaque do dia é uma indicação da ementa habitual, não uma confirmação de disponibilidade em tempo real.

## Fotografias

Foram integradas as cinco fotografias reais enviadas: quatro da fachada e uma do interior. Os ficheiros JPEG foram copiados sem retoques nem alterações, com nomes simples.

1. Colocar `fachada.webp` e `interior.webp` em `public/images/`.
2. Em `CAFE`, definir `heroImage: 'images/fachada.webp'` e `interiorImage: 'images/interior.webp'`.
3. Ajustar os respetivos textos alternativos.

A imagem da fachada ocupa o topo com o título sobreposto num degradê claro, como na referência. A do interior aparece na apresentação do espaço. Ideal: WebP, até 1600 px de largura e ficheiros leves. Confirmar o recorte tanto em telemóvel como em computador.

## Morada, horário e contactos

Preencher os valores reais em `CAFE`. A morada e o horário ainda aparecem como disponíveis em breve; o telefone e o botão de mapa só aparecem depois de preenchidos. Nenhum contacto, horário ou localização do desenho foi assumido como real.

```typescript
hours: [
  // Substituir pelos dias e horas reais.
  { days: 'Segunda a sexta', time: '07:00–20:00' },
]
```

`mapsUrl` deve ser uma ligação HTTPS confirmada para o estabelecimento. O botão abre o mapa numa nova janela. `phone` deve incluir o indicativo, por exemplo +351 seguido do número verdadeiro.

## Identidade visual

Ver `DESIGN.md`. A marca inicial está em `public/brand/logo.svg` e o símbolo em `public/brand/cup.svg`. O componente da marca está em `src/app/shared/brand.ts`. É uma proposta inicial, não uma reprodução exata de um logótipo oficial existente. O SVG exportado usa texto editável com Arial; o cabeçalho do site usa Inter.

## Estrutura

```text
public/brand/             Logótipo e símbolo SVG
public/fonts/             Fontes WOFF2 e licenças
public/images/            Colocar fotografias aqui
src/app/data/             Conteúdo editável
src/app/pages/home.*      Página inicial
src/app/pages/menu.*      Ementa
src/app/shared/           Marca, ícones, contactos e relógio de Lisboa
src/app/app.routes.ts     Rotas
src/styles.scss          Cores, fontes e estilos comuns
```

## Publicação posterior

Esta entrega é um projeto para desenvolver localmente; não foi publicado. Ao alojar o resultado do build, configurar fallback das rotas para `index.html`, de modo que abrir `/ementa` diretamente funcione. Se for publicado numa subpasta, ajustar `base-href` e caminhos das fontes em `src/styles.scss` (atualmente absolutos à raiz).

É uma aplicação renderizada no navegador. Para uma futura publicação com maior foco em pesquisa e indexação local, considerar pré-renderização/SSR e acrescentar metadados locais apenas depois de confirmar os dados reais. Não existe integração de mapas incorporada, cookies de análise, reservas ou área de administração nesta versão.

## Antes de publicar

- Acrescentar fotografias da esplanada, dos jogos e dos pratos, quando disponíveis.
- Confirmar morada, telefone, horário, pratos e preços.
- Preencher produtos em falta.
- Confirmar visual e navegação no alojamento escolhido.

Compatibilidade oficial Angular: https://angular.dev/reference/versions

## Galeria e convívio — atualização

A página inicial inclui snooker, setas, esplanada e espaço de convívio. Para a galeria, preencher `GALLERY_PHOTOS` em `src/app/data/cafe.data.ts`:

```typescript
export const GALLERY_PHOTOS: CafePhoto[] = [
  { src: 'images/interior.webp', alt: 'Interior do Snack Bar Simão', caption: 'O nosso espaço' },
  { src: 'images/esplanada.webp', alt: 'Esplanada do Snack Bar Simão', caption: 'A esplanada' },
];
```

A galeria inclui anterior/seguinte, miniaturas, setas do teclado e arrastar com rato ou dedo. Não avança automaticamente. Com uma foto, esconde os controlos desnecessários. Sem fotos, mostra uma mensagem discreta. As cinco fotografias enviadas já estão configuradas. A fachada principal aparece no topo, o interior na apresentação e no cabeçalho da ementa, e todas estão na galeria. Fotografias da esplanada, snooker, setas e pratos podem ser acrescentadas mais tarde.

### Trocar as fotografias atuais

Os caminhos reais estão preenchidos em `CAFE.heroImage`, `CAFE.interiorImage` e `GALLERY_PHOTOS`. Podes substituir os ficheiros JPG existentes mantendo o nome, ou adicionar novos ficheiros e atualizar esses caminhos. Não é necessário mudar o HTML. A galeria não recorre a serviços externos.

## Português e inglês

O seletor **PT / EN** está no cabeçalho, tanto no computador como no telemóvel. A escolha fica guardada no navegador através de `localStorage`, por isso o idioma mantém-se quando o visitante volta ao site.

- `src/app/i18n/i18n.ts` contém os textos de interface em português e inglês.
- `public/assets/i18n/pt.json` e `public/assets/i18n/en.json` identificam os dois pacotes de idioma e ficam preparados para uma futura separação completa dos dicionários.
- Os nomes dos pratos e as descrições dos produtos continuam nos dados públicos (`src/app/data/cafe.data.ts`), porque são conteúdo do café. Quando tiveres a tradução dos pratos, podem receber campos `nameEn` e `descriptionEn`.
- As fotografias e os caminhos `public/images/` são partilhados pelas duas línguas.

Para acrescentar ou corrigir uma tradução, procura a chave correspondente no objeto `fallback` (português) e no objeto `english` (inglês). Por exemplo, `home.galleryTitle` controla o título da galeria. O idioma da página também muda para `pt-PT` ou `en` para acessibilidade e pesquisa.
