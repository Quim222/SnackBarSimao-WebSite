# Guia visual — Snack Bar Simão

Direção: café de bairro acolhedor, minimalista, com páginas distintas para apresentação do espaço e consulta da ementa. A página inicial apresenta o café; o prato de hoje tem destaque na ementa.

## Cores

| Token CSS     | Cor       | Aplicação                                    |
| ------------- | --------- | -------------------------------------------- |
| `--paper`     | `#FFFCF8` | Fundo branco quente                          |
| `--white`     | `#FFFFFF` | Superfícies e botões secundários             |
| `--ink`       | `#252321` | Títulos e texto principal                    |
| `--muted`     | `#6B625C` | Texto secundário                             |
| `--red`       | `#A61920` | Marca, botões e destaques                    |
| `--red-hover` | `#811319` | Botão primário ao passar o rato              |
| `--line`      | `#E9E2DA` | Separadores e contornos                      |
| `--tint`      | `#F7F1EA` | Fundo dos contactos e linha do prato de hoje |

Editar as variáveis em `src/styles.scss` altera o tema completo.

## Tipografia

- **Playfair Display 600**: títulos, frase do painel tipográfico.
- **Inter 400, 600 e 700**: texto, menu, botões e marca no cabeçalho.
- Fontes autoalojadas em WOFF2, com `font-display: swap`.
- Fallbacks: Georgia para títulos e Arial para texto.
- Texto base: 16 px, entrelinha 1,65.
- Título principal: adaptativo entre 40 e cerca de 66 px; 44,8 px em ecrãs pequenos.
- Títulos de secção: 30,4–40 px.
- Texto introdutório: 18 px.
- Botões: 14,4 px; altura mínima 48 px.
- Pequenas etiquetas: 12 px, maiúsculas e espaçamento entre letras. Não usar este tamanho em conteúdo longo.

## Composição

- Conteúdo central até 1180 px; ementa até 1000 px.
- Margens laterais 24 px; 20 px no telemóvel.
- Espaçamento de secções: 72 px no computador e cerca de 45 px no telemóvel.
- Cantos: 10 px nas superfícies e 8 px nos botões.
- Sem sombras pesadas. Separadores finos e vermelho usado pontualmente.
- Cabeçalho fixo ao deslocar, com menu expansível no telemóvel.
- A fotografia real da fachada ocupa o topo, com degradê claro atrás do texto.

## Marca e ícones

- `public/brand/logo.svg`: chávena + nome, fundo transparente, texto editável.
- `public/brand/cup.svg`: símbolo isolado, fundo transparente.
- `public/favicon.svg`: ícone do separador do navegador.
- `src/app/shared/icon.ts`: chávena, localização, relógio, seta, menu, fechar e refeição.
- Ícones de linha com espessura 1,6; base 24 × 24.
- Marca provisória criada para a implementação. Não depende de imagens geradas nem de serviços externos.

## Fotografias a pedir

1. Fachada, fotografada de frente, com o nome legível.
2. Interior, com boa luz.
3. Carne de porco à alentejana, sopa da pedra e cabidela (para evolução da ementa).

Licenças das fontes incluídas em `public/fonts/`. As fotografias adicionadas devem pertencer ao café ou ter autorização de utilização.

## Aproximação à primeira referência

Topo fotográfico com título sobreposto; faixa compacta de serviços; interior, apresentação e horário; especialidades; snooker, setas e esplanada; galeria com navegação manual. Mantêm-se as cores e fontes acima. A galeria utiliza cantos de 10 px e controlos de 48 px. Não há autoplay nem nova cor de destaque.

## Fotografias integradas

Cinco JPEG originais fornecidos pelo utilizador, sem retoques. Fachada com degradê claro no topo; interior na apresentação e no cabeçalho da ementa; cinco imagens na galeria. O degradê e o enquadramento são feitos em CSS, preservando os ficheiros originais. Paleta e fontes mantidas.
