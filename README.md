# Software Hub — Demo Project

A demo Next.js 16 static site showcasing a **collapsible software directory UI pattern** with side navigation, search bar, and cloud-drive download cards.

> **⚠️ This is a learning demo.** All download links are replaced with placeholders. No real files are distributed. This project demonstrates a software catalog UI architecture for educational purposes.

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | [Next.js 16](https://nextjs.org) (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 4 + inline styles (mimicking original design) |
| Linting | ESLint with `eslint-config-next` |
| Build | Static HTML export (`output: 'export'`) |

## What You Can Learn

- **Next.js Static Export** — how to configure `output: 'export'` for GitHub Pages deployment
- **App Router Architecture** — `layout.tsx`, `page.tsx`, component composition
- **Component Design** — sidebar navigation, collapsible accordion, search bar, footer
- **TypeScript Types** — strongly-typed data models for a software catalog
- **GitHub Pages Deployment** — push, build, serve static `out/` directory

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build for Production

```bash
npm run build    # generates ./out/ directory
npm start        # or serve ./out/ with any static server
```

## Project Structure

```
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── layout.tsx       # Root layout + metadata
│   │   ├── page.tsx         # Home page
│   │   └── globals.css      # Global styles + Tailwind
│   ├── components/          # Reusable UI components
│   │   ├── SiteHeader.tsx
│   │   ├── SiteFooter.tsx
│   │   ├── MenuSidebar.tsx    # Left navigation
│   │   ├── SearchBar.tsx      # Search input
│   │   └── SoftwareAccordion.tsx # Main catalog (accordion + download cards)
│   ├── data/                # Static catalog data (panel-data.ts)
│   └── types/               # TypeScript interfaces
├── public/                  # Static assets (icons, images)
└── next.config.ts           # Static export config
```

## Deployment

This project is configured for **GitHub Pages** static hosting:

1. Push to GitHub
2. In repo Settings → Pages → Source: deploy from `out/` branch or GitHub Actions
3. Or use [Vercel](https://vercel.com) for zero-config deployment

## License

MIT — for educational use only. This project is not affiliated with any software vendor or cloud drive provider.
