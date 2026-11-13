# Portfólio — Nzinga Eduardo

Portfólio de desenvolvedor web responsivo, feito apenas com HTML, CSS e JavaScript (sem dependências).

## Estrutura

```
portfolio-nzinga-eduardo/
├── index.html
├── css/style.css
├── js/main.js
├── assets/favicon.svg
├── projects/
│   ├── comicweb/            (site ComicWeb)
│   └── sistemas-web/        (comum/ + 8 sistemas, cada um com index.html)
├── .gitignore
└── README.md
```

## Como usar

1. Abra `index.html` no navegador (ou use a extensão Live Server do VS Code).
2. Edite em `index.html`: competências e links do GitHub/LinkedIn. Cada projeto abre a partir de `projects/`.
3. Em `js/main.js`, troque a constante `EMAIL` pelo seu email real.

## Publicar no GitHub Pages

1. Crie um repositório e envie os ficheiros:
   ```bash
   git init && git add . && git commit -m "Portfólio inicial"
   git branch -M main
   git remote add origin https://github.com/SEU-UTILIZADOR/portfolio.git
   git push -u origin main
   ```
2. No GitHub: **Settings → Pages → Deploy from a branch → main / root**.

## Destaques técnicos

- Mobile-first, com CSS Grid, Flexbox e *container queries* (usadas na demonstração do topo)
- Tema claro/escuro automático (`prefers-color-scheme`)
- Acessibilidade: link de salto, foco visível, `aria-*` no menu, movimento reduzido respeitado
