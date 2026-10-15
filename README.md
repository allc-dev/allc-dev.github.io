# allc.dev

Site de André Costa, desenvolvedor solo dos apps allc.dev. Identidade Jade,
HTML/CSS/JavaScript sem build, dependências ou fontes remotas.

- https://allc.dev — site, catálogo e suporte.
- https://apps.allc.dev — redirecionamento existente para a loja Google Play.
- https://github.com/allc-dev — perfil e projetos.
- https://www.youtube.com/@allc-dev — demonstrações e novidades.

## Rodar

`python -m http.server 8765` na raiz, abrir http://localhost:8765.

## Estrutura e manutenção

index.html contém apresentação, catálogo dos 11 apps, autor, ALLC PRO e links.
apps/<app>/index.html contém produto, download pelo pacote publicado, capturas
e link de vídeo quando já disponível. privacy-policy.html e app-ads.txt são
preservados. css/modern.css define Jade e breakpoints; js/i18n.js contém PT/EN.
js/main.js aplica português para navegador pt*, inglês para qualquer outro;
a escolha manual EN/PT é salva em allc_lang e tem prioridade. A detecção
automática não grava preferência. Menu móvel com aria-expanded e Escape.

site.webmanifest mantém a identidade instalável. sw.js tem cache versionado:
aumentar CACHE_VERSION ao mudar estáticos. Página via rede primeiro; cache
para visitas offline. Cards/imagens não visitados não têm garantia offline.
Sitemap, robots e canonical usam allc.dev. A configuração do domínio é
externa ao repositório; não criar CNAME sem confirmar a hospedagem.

imagens/brand contém banner SVG e PNG social; avatar original preservado.
Fontes: Segoe UI, Roboto, Arial, sans-serif, sem download obrigatório.
GitHub Pages publica master; commit/push somente com ordem do allc.
