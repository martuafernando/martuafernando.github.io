# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev          # Start dev server (client-only rendering)
pnpm build        # Full production build (type-check + SSG)
pnpm preview      # Preview the production build locally
pnpm lint         # Run ESLint
pnpm fmt          # Format with Prettier
pnpm fmt.check    # Check formatting without writing
pnpm build.types  # TypeScript type check only
```

The `build` command runs `build.client` then `build.server` (static adapter pre-rendering for GitHub Pages).

## Architecture

**Qwik + QwikCity** static site (SSG) deployed to `https://martuafernando.github.io`. Uses the static adapter in `adapters/static/vite.config.ts`.

### Routing

File-based routing under `src/routes/`. Key routes:
- `src/routes/index.tsx` — homepage
- `src/routes/layout.tsx` — root layout (header, footer, tab bar, cache control)
- `src/routes/experiences/` — experience pages (MDX content)
- `src/routes/projects/(project)/` — project pages (MDX content, optional catch-all)

### Data Layer

Content lives as MDX files inside `src/routes/`. Repositories in `src/repositories/` load them via Vite's `import.meta.glob()` with eager loading:

```ts
import.meta.glob('/src/routes/**/*.mdx', { eager: true, query: '?jsx' })
```

`getProjects()` and `getExperiences()` parse frontmatter from these MDX files. Pages fetch data with `useResource$()` and render it with `<Resource>`.

### Domains & Types

TypeScript interfaces for `Project`, `Experience`, and `Position` are in `src/domains/`.

### Styling

Tailwind CSS 4 with custom CSS variables in `src/styles/` (`color.css`, `animation.css`, `layout.css`). Path alias `~/*` maps to `src/*`.

### Performance Patterns

- **Caching**: Root layout sets `cacheControl` with 5s max-age and 7-day stale-while-revalidate.
- **Partytown**: Google Analytics runs off the main thread via `src/components/partytown/`.
- **Service worker**: Registered on non-dev builds for offline caching.
- **Scroll-aware UI**: Header and TabBar hide on scroll-down using `useOnWindow` + `useDebouncer` hook.

## Environment

Copy `.env.example` to `.env.local` and set `GOOGLE_ANALYTICS_ID` before running locally if you need analytics to work.
