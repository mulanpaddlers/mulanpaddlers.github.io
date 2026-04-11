# MulanPaddlers — Official Website

Official website for MulanPaddlers, an all-women dragon boat team in the Greater Toronto Area.

Live site: [www.mulanpaddlers.com](https://www.mulanpaddlers.com)

## Tech Stack

- [Next.js 15](https://nextjs.org/) (App Router, static export)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [next-intl](https://next-intl-docs.vercel.app/) — bilingual English / 中文

## Features

- Single-page panel-based navigation (Dimension-inspired)
- Fully bilingual (English / Chinese)
- Mobile-first responsive design
- Photo gallery with lightbox
- Contact links: Email, Instagram, WeChat, RedNote (小红书)
- Static export deployed to GitHub Pages

## Project Structure

```
src/
  app/               # Next.js App Router (root + [locale] layouts)
  components/
    sections/        # Page sections: Hero, About, Programs, Gallery, etc.
    shell/           # PanelShell, ActivePanel (navigation state)
    ui/              # Header, Footer, LanguageToggle
  i18n/              # next-intl routing and request config
messages/
  en.json            # English content
  zh.json            # Chinese content
public/
  assets/            # Images and logo
docs/                # Generated static output (deployed to GitHub Pages)
```

## Development

```bash
npm install
npm run dev
```

## Build & Deploy

```bash
npm run export    # builds and copies output to /docs
git push origin main
```

Deployment target is GitHub Pages from the `/docs` folder at the custom domain `www.mulanpaddlers.com`.
