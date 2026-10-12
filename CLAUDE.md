# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev          # Dev server (vite --mode ssr)
pnpm build        # Full production build: client + static pre-render + type check + lint
pnpm preview      # Preview the production build locally
pnpm lint         # ESLint (src/**/*.ts*)
pnpm build.types  # TypeScript type check only
pnpm check.images # Fail if any file in public/images is over 300 KB
```

`pnpm build` is the one check that matters before opening a PR: `qwik build` runs the client build, the static-adapter pre-render (GitHub Pages), the type check and ESLint.

**Formatting:** Prettier is configured for the codebase's style (tabs in source; JSON, Markdown and YAML on spaces), so `pnpm fmt` and `pnpm fmt.check` are safe to use.

## Architecture

**Qwik + Qwik City** static site (SSG) deployed to `https://martuafernando.github.io` through `.github/workflows/deploy.yml`. Uses the static adapter in `adapters/static/vite.config.ts`.

### Routing

File-based routing under `src/routes/`:

- `index.tsx` — homepage: Hero, Work, About, Experience (section order matches the nav)
- `layout.tsx` — root layout: header, footer, cache control, language context, scroll effects
- `projects/[slug]/index.tsx` — project detail; pages are generated from `getProjects()` via `onStaticGenerate`
- `catat-uang/privacy-policy/` — standalone privacy-policy page
- `service-worker.ts` — Qwik City prefetching (not an offline cache)

### Data layer

All content is typed TypeScript, not MDX. Keep it as literal entries; components should never build or derive copy.

- `src/data/site.ts` — profile (email, CV path), nav, socials, hero copy and stats, the "Experience at" logo strip (`trusted`), About copy, tech stack and focus rows
- `src/data/experiences.ts` — experience timeline
- `src/data/projects/` — **one file per project**; `index.ts` lists them (that order is the display order) and exposes `getProjects`, `getProjectBySlug`, `getAdjacentProjects`
- `src/data/catat-uang-privacy.ts` — privacy-policy content
- Types live in `src/domain/` (`project.ts`, `experience.ts`, `site.ts`)

### i18n

`src/i18n/index.ts` defines `Localized<T>` (`{ en, id }`), `t(value, lang)`, the shared `ui` strings, and `LangContext` (provided in `layout.tsx`, persisted in `localStorage` as `fs-lang`). **Every user-facing string needs both `en` and `id`**; the Indonesian copy is casual ("bikin", "nggak", "Yuk").

### Styling

`src/global.css` imports the fonts, then the stylesheets in this order (the order is the cascade, so keep it):

- `styles/reset.css` — minimal reset (what Tailwind's Preflight used to provide), inside `@layer base` so every unlayered rule below overrides it
- `styles/color.css` — design tokens: colours, spacing, radii, shadows, fonts. Light is the default; dark is `[data-theme="dark"]` (set before paint by the inline script in `root.tsx`, stored as `fs-theme`)
- Section stylesheets: `base.css` (global elements, buttons, links), `header.css`, `hero.css` (incl. the logo marquee), `about.css`, `work.css`, `experience.css`, `footer.css`, `motion.css` (reveal / entrance), `project.css` (detail pages and project navigation)
- `responsive.css` — breakpoint overrides for every section, deliberately after the base rules
- `interactions.css` — shadows and hover lift for clickable surfaces

Add a rule to the stylesheet of the section it belongs to and edit an existing selector rather than appending an override. Tailwind was removed (no utility classes were in use). Path alias `~/*` maps to `src/*`.

- Fonts are self-hosted through Fontsource variable packages (imported in `src/global.css`; no Google Fonts requests): Plus Jakarta Sans for UI and headings, Source Serif 4 (`--font-prose`) **only** for case-study body text. Fontsource splits each family into `unicode-range` subsets, so a page only downloads what its text needs (home ≈ 27 KB, project pages ≈ 77 KB). `qwikVite({ disableFontPreload: true })` in `vite.config.ts` stops Qwik from preloading every subset; `src/root.tsx` preloads only the Latin UI font.

### Behaviour and performance

- **Motion:** hero entrance, scroll reveal and nav scrollspy live in `src/hooks/useScrollEffects.ts`. Content is visible by default; the hidden start state is only applied once the hook runs, and reduced-motion is respected.
- **Marquee** ("Experience at") is CSS-driven: four identical copies, shifted by 25% on a loop; it pauses on hover and has a pause/play button (WCAG 2.2.2) for keyboard and touch users, and is a static list for reduced motion. Only the button's state is JS.
- **Caching:** the root layout sets `cacheControl` (5s max-age, 7-day stale-while-revalidate).
- **Partytown:** Google Analytics runs off the main thread via `src/components/partytown/`.

## Things the owner replaces

- CV: overwrite `public/files/martua-fernando-cv.pdf` (path and download name are in `profile.cv`). It is currently a placeholder page.
- Portrait: `public/images/about/martua.jpg` (referenced by `about.photo`).
- Logos for the hero strip: add a `logo` to an entry in `trusted` and put the file in `public/images/logos/`; entries without one render the name as text.
- New project: add `src/data/projects/<slug>.ts`, then import it and add it to the list in `src/data/projects/index.ts`.

## Dependencies

Everything is a `devDependency` (the site is static; there are no runtime npm dependencies). Vite is on 7.x and ESLint on 9.x with a flat config in `eslint.config.js`. `pnpm-workspace.yaml` carries `overrides` that force patched versions of a few transitive packages (brace-expansion, flatted, shell-quote, svgo, valibot, sharp, …) so `pnpm audit` stays clean; each entry is commented and can be dropped once its parent requires the fixed version.

## Environment

Copy `.env.example` to `.env.local` and set `GOOGLE_ANALYTICS_ID` if you need analytics locally.
