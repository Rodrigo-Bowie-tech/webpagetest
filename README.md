# webpagetest

Uma página web simples, feita só com HTML, CSS e JavaScript (nada para instalar), pronta para ser hospedada de graça no GitHub Pages.

## Arquivos

| Arquivo | Para que serve |
| --- | --- |
| `index.html` | O conteúdo e a estrutura da página |
| `style.css` | O visual: cores, fontes e layout (as cores ficam no começo do arquivo) |
| `script.js` | O botão que troca a saudação e o ano no rodapé |
| `.nojekyll` | Arquivo vazio que faz o GitHub Pages publicar os arquivos exatamente como estão |

## Ver a página no seu computador

Baixe os arquivos (**Code → Download ZIP**), descompacte e abra o `index.html` com dois cliques: ele abre direto no navegador.

## Publicar no GitHub Pages (grátis)

1. No GitHub, abra o repositório e vá em **Settings → Pages**.
2. Em **Build and deployment → Source**, escolha **Deploy from a branch**.
3. Em **Branch**, escolha o branch com estes arquivos e a pasta **/ (root)**. Clique em **Save**.
4. Espere um ou dois minutos e recarregue a página. O endereço do site aparece no topo:
   `https://rodrigo-bowie-tech.github.io/webpagetest/`

Depois disso, cada commit nesse branch publica a nova versão sozinho.

O GitHub Pages é grátis para repositórios públicos. Em repositórios privados, ele só funciona nos planos pagos do GitHub.

## Outras opções grátis

Netlify, Vercel e Cloudflare também hospedam sites estáticos de graça. Você entra com a conta do GitHub, escolhe este repositório, e cada commit publica uma nova versão.

## Dica

Use caminhos relativos nos links e nas imagens (`style.css`, e não `/style.css`). No GitHub Pages o site fica em `/webpagetest/`, e não na raiz do endereço.
