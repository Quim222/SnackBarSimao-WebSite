# Verificação desta entrega

- Build de produção: `npm run build`, concluído sem erros.
- Navegador Chromium: página inicial e ementa renderizadas sem erros JavaScript.
- Navegação para ementa, contactos e menu móvel verificada.
- Larguras 320, 390, 768 e 1440 px: sem transbordo horizontal na página inicial; ementa verificada a 390 px.
- Relógio simulado no sábado: mostra Cabidela.
- Relógio do navegador na América/Los_Angeles, instante já segunda-feira em Lisboa: mostra Carne de porco à alentejana.
- Dia sem prato configurado: mostra mensagem para consultar o café.
- Capturas de computador e telemóvel incluídas em `preview/`; a ementa mostra um sábado simulado para demonstrar o destaque.
- Revisão visual das capturas da página inicial no computador e ementa no telemóvel.

Os controlos de navegação foram exercitados no build de produção. Não foi feita uma auditoria completa de acessibilidade, testes em Safari/iOS nem publicação num alojamento externo.

## Atualização da galeria e convívio

- Novo build de produção concluído.
- Navegação, ligações aos contactos, menu móvel e ausência de transbordo novamente verificados.
- Galeria testada com dois SVG de teste, retirados da configuração antes da entrega: anterior/seguinte, miniaturas, teclado com retorno ao início/fim e arrastar com rato passaram.
- Gesto táctil implementado com Pointer Events e `touch-action: pan-y`; não verificado num dispositivo físico.
- Fotografias reais pendentes de envio; a entrega não inclui fotografias extraídas da maquete.

## Integração das fotografias reais

- Cinco fotografias JPEG originais integradas; ficheiros preservados sem retoque.
- Build de produção concluído sem erros.
- Verificado carregamento das cinco fotografias na galeria e passagem sequencial pelas setas, incluindo regresso à primeira imagem.
- Capturas da página inicial e da ementa atualizadas; revisão visual em computador e telemóvel.
- Navegação, menu móvel e lógica do dia de Lisboa continuam a passar.
