# allc-dev.github.io

Site institucional de **André Costa · ALLC Dev**: arquitetura de software corporativo e vitrine dos 11 apps do ecossistema ALLC Apps na Google Play.

- Site: https://allc-dev.github.io/
- Política de privacidade dos apps: https://allc-dev.github.io/privacy-policy.html

## Stack

HTML, CSS e JavaScript puros, sem build. Publicado pelo GitHub Pages a partir do `master`.

- Bilíngue PT/EN em uma única página: textos marcados com `data-i18n` e traduzidos por `js/i18n.js`. O idioma vem do navegador ou da escolha salva no `localStorage`.
- PWA instalável no celular: `site.webmanifest` + service worker `sw.js` (abre offline).

## Estrutura

| Caminho | Conteúdo |
| --- | --- |
| `index.html` | Página principal |
| `privacy-policy.html` | Política de privacidade (autocontida) |
| `css/modern.css` | Estilos e breakpoints mobile |
| `js/i18n.js` | Dicionário de traduções PT/EN |
| `js/main.js` | Idioma, menu mobile, formulário de contato, registro do PWA |
| `sw.js` | Service worker: cache dos arquivos estáticos |
| `site.webmanifest` | Manifesto do PWA (nome, cores, ícones) |
| `imagens/` | Logo, favicons e ícones do PWA (inclui `maskable-512x512.png`) |
| `app-ads.txt` | Verificação de anúncios dos apps |
| `redirect.html` | Redireciona para o GitHub do perfil |

## Rodando localmente

O service worker não funciona via `file://`; use um servidor:

```bash
python -m http.server 8765
# abra http://localhost:8765
```

## Manutenção

- **Texto novo:** adicione `data-i18n="chave"` no HTML e a chave nos blocos `pt` e `en` de `js/i18n.js`.
- **Deploy que altera CSS, JS ou imagens:** incremente `CACHE_VERSION` em `sw.js` (`allc-v1` → `allc-v2`). Sem isso, quem já visitou continua vendo a versão antiga em cache.
- **Arquivo novo que deva abrir offline:** inclua o caminho na lista `PRECACHE` de `sw.js`.
- **Ícones:** gerados a partir de uma arte 512×512; o maskable tem margem de ~10% para o recorte circular do Android.
- **Instalabilidade:** confira em DevTools → Application → Manifest.
