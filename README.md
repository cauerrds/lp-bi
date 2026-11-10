# Black Ice Security — reformulação

Nova versão responsiva do site institucional, desenvolvida em **HTML, CSS e JavaScript puro**, sem framework, dependências de execução ou etapa de build.

A abertura mantém a composição original da primeira proposta, com a arte abstrata Black Ice e Space Grotesk no título. Foi removido apenas o pequeno texto com ponto acima do título, conforme solicitado pelo usuário. O restante da página usa Manrope e apresenta soluções e serviços em listas com divisórias. A revisão de design e sua referência estão documentadas em [docs/IMPECCABLE.md](docs/IMPECCABLE.md).

## Visualizar

Abra `index.html` diretamente no navegador ou sirva esta pasta:

```bash
cd /home/cave/storm/blackice-security
python3 -m http.server 4173 --bind 127.0.0.1
```

Acesse [a prévia local](http://127.0.0.1:4173). Encerre o servidor com `Ctrl+C`.

## Organização

- `index.html`: conteúdo, navegação, dez soluções, SOC/NOC, EED/PED, história da empresa, perguntas frequentes e contato.
- `styles.css`: identidade visual, fontes locais, componentes e layouts responsivos.
- `hero.css`: composição original da abertura e seus ajustes responsivos; carregado depois de `styles.css`.
- `script.js`: menu mobile, indicação da seção atual, filtros de soluções e preparação do e-mail de contato.
- `assets/`: imagens, ícones, fontes e licenças servidos localmente.
- `docs/`: fontes do conteúdo, decisões da revisão de design e registro da verificação.
- `.history/before-impeccable.zip`: snapshot da versão anterior à revisão de design.
- `.history/before-hero-restore.zip`: fontes `index.html`, `styles.css` e `script.js` da versão intermediária, antes da restauração da abertura original.

## Contato

O formulário fica na própria seção Contato. Nome, e-mail e mensagem são obrigatórios; Empresa é opcional. Os links de apresentação do produto e dos serviços preenchem o assunto correspondente.

Ao selecionar “Preparar e-mail”, o formulário valida os campos e disponibiliza um link `mailto:` para `comercial@blackice-security.com.br`. O visitante abre o próprio aplicativo de e-mail, revisa a mensagem e conclui o envio. **Não há backend nem envio automático.** Os dados não são persistidos pelo site. Também há links diretos para e-mail, telefone e WhatsApp.

Para envio direto pelo site, será necessário conectar um endpoint de formulário ou serviço de e-mail, com validação no servidor e proteção contra spam. Não coloque credenciais de envio no JavaScript do navegador.

## Publicar

Copie `index.html`, `styles.css`, `hero.css`, `script.js` e os assets usados pela página para a raiz de uma hospedagem estática. Não é necessário Node.js, WordPress ou banco de dados em produção. A nova versão não substituiu o domínio existente.

A abertura carrega `assets/hero-blackice.webp` e `assets/fonts/space-grotesk-medium.ttf`; inclua esses arquivos na publicação. Os snapshots em `.history/` não precisam ser publicados.

## Editar

Textos e links ficam no HTML. As variáveis gerais de cores e tipografia estão no início de `styles.css`; a apresentação da abertura fica em `hero.css`. Cada solução usa `data-category`, que pode conter `detectar`, `responder` e/ou `gerenciar`; os botões usam `data-filter`. O endereço comercial também aparece na geração do rascunho em `script.js`.

Consulte [docs/FONTES.md](docs/FONTES.md) para a origem do conteúdo e dos assets e [docs/VERIFICACAO.md](docs/VERIFICACAO.md) para os cenários e limites das verificações registradas.
