# Postal Wiki | Homepage

The landing page for [postal.wiki](https://postal.wiki) — a bilingual (简体中文 / English)
search portal for the Postal Wiki. Built with [Astro](https://astro.build) and Tailwind CSS,
fully static.

## Quick Start

```bash
# Install dependencies
bun install

# Run development server (http://localhost:4321)
bun run dev
```

## Scripts

| Command           | Action                                 |
| ----------------- | -------------------------------------- |
| `bun run dev`     | Start the local dev server             |
| `bun run build`   | Build the static site to `dist/`       |
| `bun run preview` | Preview the production build locally   |
| `bun run check`     | Type-check the project (`astro check`) |
| `bun run typecheck` | Alias of `check` (used by CI)          |
| `bun run lint`      | Lint with ESLint                       |

## Localization

Locales live in [`src/i18n/ui.ts`](src/i18n/ui.ts). Routes are prefixed per locale
(`/en/`, `/zh-cn/`); the root `/` redirects to the default locale.
