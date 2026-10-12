# martuafernando.github.io

Personal portfolio of Martua Fernando — a bilingual (English / Indonesian), light-first static site with a dark theme, built with [Qwik City](https://qwik.dev/) and deployed to GitHub Pages.

## Run it

Requires Node 20.19+ (or 22.12+) and pnpm; the exact pnpm version is pinned in `package.json` (`packageManager`).

```bash
pnpm install
pnpm dev        # http://localhost:5173
pnpm build      # type check + lint + static build into ./dist
pnpm preview    # serve the production build
```

Copy `.env.example` to `.env.local` and set `GOOGLE_ANALYTICS_ID` if you want analytics locally.

## Editing content

Everything shown on the site is plain TypeScript under `src/data/` (profile and copy in `site.ts`, jobs in `experiences.ts`, one file per project in `projects/`). Each string has an English and an Indonesian version.

- **CV:** replace `public/files/martua-fernando-cv.pdf`.
- **Photo:** replace `public/images/about/martua.jpg`.
- **Add a project:** create `src/data/projects/<slug>.ts` and register it in `src/data/projects/index.ts`.

See [CLAUDE.md](./CLAUDE.md) for the architecture, conventions and formatting notes.

## Deployment

Pushes to `main` build and publish the site through `.github/workflows/deploy.yml`.
