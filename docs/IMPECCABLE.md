# Revisão de design com referência Impeccable

Data: 9 de novembro de 2026.

## Referência e forma de uso

Foi consultada a documentação oficial da skill [Impeccable 4.8.1](https://github.com/pbakaus/impeccable/tree/0fb9d01efd70c5dc0bc341f3baaa297444261f9a/.agents/skills/impeccable), fixada no commit `0fb9d01efd70c5dc0bc341f3baaa297444261f9a`.

Os documentos de referência foram lidos a partir de `/tmp/blackice-impeccable`: `SKILL.md`, `reference/distill.md`, `reference/polish.md` e `reference/craft-floor.md`. A pasta temporária não é uma dependência do site nem integra a publicação.

O loader da skill não estava instalado e não foi executado. A revisão utilizou o fallback de leitura direta da documentação e do contexto disponível no projeto. Este registro não representa uma instalação da skill ou a execução de seus detectores automáticos.

## Objetivo

Facilitar a compreensão do Neuroscan, das soluções e dos serviços SOC/NOC e levar o visitante ao contato comercial. O conteúdo institucional continua baseado no [site original da Black Ice Security](https://blackice-security.com.br/), com a procedência registrada em [FONTES.md](FONTES.md).

## Decisões aplicadas

A orientação `distill` conduziu a redução de elementos decorativos e de etapas desnecessárias. `polish` orientou os ajustes de consistência, hierarquia e interação. `craft-floor` forneceu os critérios de acabamento usados durante a implementação.

O usuário esclareceu que desejava manter a abertura original e retirar somente o pequeno texto com ponto acima do título. Esse pedido prevalece sobre as recomendações gerais da skill. A abertura foi restaurada; as demais seções mantêm os ajustes da revisão.

- A abertura usa novamente `assets/hero-blackice.webp`, com sua composição original, título, ações e elementos de apoio. Apenas o texto com ponto acima do título foi removido. Os estilos dessa seção ficam em `hero.css`.
- A imagem oficial do Neuroscan, usada na abertura intermediária, permanece localmente, mas não está referenciada no HTML atual.
- Nas demais seções, foram removidos os rótulos acima dos títulos, a numeração decorativa e os textos auxiliares redundantes.
- As soluções passaram a usar uma lista com divisórias; os serviços SOC e NOC são apresentados em linhas próprias. Os filtros por objetivo foram mantidos.
- A tipografia usa Manrope, com pesos 400 e 600, e Space Grotesk, peso 500, somente no título da abertura. Todas as fontes são locais. As demais seções usam superfícies claras e escuras, azul para ações e espaçamento para organizar a leitura.
- O formulário passou a ficar na seção Contato. O modal foi removido e o campo Empresa tornou-se opcional. Os links de produto e serviços preenchem o assunto do formulário.
- As animações de revelação ao rolar foram removidas. O conteúdo fica visível sem aguardar animações; permanecem transições pontuais dos controles e rolagem que respeita a preferência de movimento reduzido.
- Foram mantidos navegação móvel, indicação da seção ativa, perguntas frequentes, links comerciais, dez soluções e conteúdo institucional.

## Funcionamento do contato

Nome, e-mail e mensagem são obrigatórios. A ação “Preparar e-mail” valida os campos e cria um link com destinatário, assunto e corpo codificados. O visitante revisa e envia a mensagem em seu próprio aplicativo de e-mail. Não há envio automático, backend ou armazenamento dos dados pelo site.

## Histórico e verificação

O snapshot anterior à revisão está em `.history/before-impeccable.zip`. Os arquivos `index.html`, `styles.css` e `script.js` da versão intermediária, antes da restauração da abertura, estão em `.history/before-hero-restore.zip`. A arte `assets/hero-blackice.webp` participa da página atual; sua origem e seu prompt estão documentados em [FONTES.md](FONTES.md).

Os cenários e limites de testes efetivamente realizados devem ser consultados em [VERIFICACAO.md](VERIFICACAO.md). Este documento registra procedência e decisões de design; a consulta à skill, por si só, não atesta a aprovação de testes ou de uma auditoria completa de acessibilidade.
