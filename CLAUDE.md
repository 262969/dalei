# CLAUDE.md — Development Guidelines

## Project Overview
Demo Next.js 16 static site — software catalog UI pattern. Not affiliated with any real service.

## Key Conventions
- Use `output: 'export'` in `next.config.ts` — this is a static site
- All images use `unoptimized: true` (static export requirement)
- Data lives in `src/data/panel-data.ts` — modify there to change catalog content
- `DEMO_MODE = true` in `SoftwareAccordion.tsx` keeps links as placeholders
- Set `DEMO_MODE = false` to restore real CDN links (for private/local use only)

## Structure
- `src/app/` — Next.js App Router pages
- `src/components/` — UI components (header, footer, sidebar, accordion, search)
- `src/data/` — static catalog data
- `src/types/` — TypeScript interfaces
- `public/` — static assets

## Build & Deploy
```bash
npm run build    # generates ./out/
npm start        # serves ./out/
```
