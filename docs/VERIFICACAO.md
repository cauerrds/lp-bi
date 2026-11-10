# Verificação da implementação

Data: 9 de novembro de 2026. Revisão Impeccable, seguida da restauração do hero a pedido do usuário.

## Alinhamento horizontal do hero

- Removidas as larguras independentes de `.hero-inner` e a margem negativa do `h1`; o hero passa a usar o mesmo `.container` das outras seções.
- Coordenadas do hero, título e seção Neuroscan iguais em 1440 px (88,5 px), 1120 px (56 px), 620 px (24 px) e 390 px (20 px), considerando a barra de rolagem do navegador usado.
- Sem transbordamento horizontal nos tamanhos conferidos.
- Importação `hero.css?v=2` para renovar o recurso em cache. Conteúdo, imagens, cores e tipografia preservados.
- Captura: `preview-alinhamento.jpg`.

## Ajuste mobile dos reconhecimentos

- Mudança exclusiva em `styles.css`, nas regras `.recognition-*` de `@media (max-width: 600px)`.
- Selo de 80 a 96 px ao lado do título; descrição em largura completa abaixo; separação discreta entre EED e PED.
- Conferência visual em 390 px e medição em 320 px: sem transbordamento horizontal.
- Comparação com `.history/before-seal-mobile-fix.zip`: HTML, hero, JavaScript e regras desktop inalterados.
- Captura: `preview-selos-mobile.jpg`.

## Aplicação dos selos EED e PED

- Selos originais aplicados nos respectivos reconhecimentos, com textos alternativos e dimensões declaradas.
- Conferência em 1440 px, 390 px e 320 px: proporção preservada e nenhum transbordamento horizontal. Em celular, cada selo fica ao lado do próprio título, com a descrição na linha seguinte.
- Carregamento dos dois arquivos confirmado no navegador.
- Comparação com `.history/before-seal-placement.zip`: hero e JavaScript preservados; alteração de HTML restrita à seção de reconhecimento.
- Captura: `preview-selos.jpg`.

## Imagem da aplicação fornecida pelo usuário

- `assets/dash.webp` copiado sem alterações; hash SHA-256 idêntico à origem.
- Dimensões reais e atributos HTML: 1797 × 1116.
- Carregamento confirmado no navegador; apresentação conferida em 1440 px e 390 px sem transbordamento horizontal.
- Comparação com `.history/before-product-image.zip`: hero HTML, `hero.css` e `script.js` idênticos. Apenas a figure na seção Neuroscan e seus três blocos CSS foram acrescentados.
- Captura: `preview-neuroscan.jpg`.

## Restauração do hero

- HTML do hero comparado com o snapshot original: idêntico, exceto pela remoção do parágrafo acima do título e seu ponto azul.
- HTML fora do hero comparado com a versão imediatamente anterior: inalterado, exceto pela importação de `hero.css`.
- Título, arte, cores, tipografia, descrição e links do hero restaurados. Estilos isolados em `hero.css`.
- Conferência visual em 1440 × 1000, 390 × 844 e 320 × 740; sem transbordamento horizontal.
- Links “Conheça o Neuroscan®” e “Explore as soluções” confirmados. Nenhum erro ou aviso no console.
- As duas abas da prévia foram recarregadas para mostrar a mesma versão atual.

## Verificações anteriores mantidas

Verificação executada no navegador integrado do Codex, com prévia HTTP local.

- Desktop em 1440 × 1000: composição inicial, soluções, SOC/NOC, história da empresa e contato; navegação por âncoras e indicação da seção atual.
- Tablet em 768 × 1024: serviços, menu e medição sem transbordamento horizontal.
- Celular em 390 × 844: composição inicial, abertura do menu, navegação e filtros.
- Tela estreita em 320 × 740: soluções, leitura e medição sem transbordamento horizontal.
- Paisagem em 568 × 320: menu limitado à altura disponível, com rolagem interna; link Contato acessível. Escape fecha o menu e devolve foco ao botão.
- Filtros: Todas = 10, Detectar = 5, Responder = 3 e Gerenciar = 3.
- Formulário vazio: três campos obrigatórios inválidos, sem gerar resultado. Empresa é opcional.
- Nome e mensagem contendo apenas espaços: rejeitados com mensagens de validação.
- Formulário válido sem empresa: geração do destinatário, assunto e corpo codificados no link de e-mail; foco transferido para o link do rascunho. Nenhuma mensagem enviada.
- Links contextuais: Consultar serviços seleciona “SOC e NOC”; Solicitar apresentação seleciona “Neuroscan” e limpa o resultado anterior.
- Perguntas frequentes: abertura nativa de `details` confirmada.
- Imagens carregadas após percorrer a página; nenhum erro ou aviso no console da prévia.

## Arquivos e acessibilidade

- `node --check script.js`: passou.
- Exatamente um `h1`, dez soluções e nenhum ID duplicado.
- As 16 referências a âncoras internas e os 14 assets locais referenciados resolvem.
- 1.091.444 bytes de assets referenciados; fontes e imagens locais, sem CDN obrigatória.
- Contraste calculado: botão branco/azul 5,87:1; texto secundário em fundo claro 5,86:1; texto secundário em fundo escuro 10,25:1.
- Conteúdo principal presente no HTML; labels explícitos, estados ARIA nos filtros e menu, resultado do formulário anunciado com `role="status"`, foco visível e respeito à preferência de movimento reduzido.
- Modal e animações de entrada removidos do código ativo. A arte e a composição originais do hero foram restauradas por orientação do usuário.
- Revisão independente identificou a altura do menu em paisagem; a correção foi aplicada e conferida no navegador.

## Limites

Não foi realizada auditoria completa WCAG nem teste em dispositivos físicos, leitores de tela, Safari ou Firefox. A prévia foi verificada no navegador disponível. Links de e-mail, telefone e WhatsApp foram conferidos; não foram enviadas mensagens nem realizadas chamadas. O formulário precisa do aplicativo de e-mail do visitante; não há serviço de envio no servidor. O domínio público original não foi modificado.

## Capturas atuais do hero restaurado

- `preview-desktop.jpg`
- `preview-mobile.jpg`

O pacote anterior está preservado em `.history/before-impeccable.zip`, fora do pacote de entrega atualizado.
