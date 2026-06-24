# CLAUDE.md — Burrow Bunnies micro-site

Guidance for Claude Code (and any agent) working in this repo. Read this before making changes.

## What this is

A **customer-facing** micro-site for the South Sydney Rabbitohs "Burrow Bunnies" / Rabbit Family
mascot experience. It is a **static site** — there is no backend, no database, and no secrets.
It is built with **Vite + React 18 + TypeScript + Tailwind CSS v4** and deployed as static files.

Because it is public and represents the club, **brand and content correctness matter as much as code
correctness.** When in doubt, leave it for a human reviewer rather than guessing.

## Golden rules

1. **Never invent club facts.** Do not make up player names, sponsor names, statistics, event dates,
   prices, or quotes. If real content is needed and not supplied, leave a clearly-marked `TODO` and
   flag it in the PR description.
2. **Follow the club's brand standards.** Use the `rabbitohs-brand-voice` skill for any copy you write
   or edit, and `rabbitohs-brand-visual` for colours, logos, and visual choices. Australian English.
3. **No secrets in the repo, ever.** No API keys, tokens, or credentials in code or committed files.
   Configuration that must stay private goes in the host's environment variables.
4. **Keep it accessible.** This is a family/kids audience. Preserve alt text, skip links, heading order,
   colour contrast, and keyboard navigation. Run the `accessibility-review` skill on visual changes.
5. **Don't break the build.** `npm run build` and `npm run lint` must pass before a PR can merge (CI
   enforces this). Run them locally before opening a PR.

## How to make a change

```bash
npm install        # first time only
npm run dev        # local dev server with hot reload
npm run build      # production build (tsc -b && vite build) — must pass
npm run lint       # eslint — must pass
```

Work on a branch, never commit directly to `main`. See CONTRIBUTING.md for the full flow.

## Project structure

- `src/routes/` — page-level components, one per route. Routes are registered in `src/App.tsx`.
  - `src/routes/recipes/` — individual Healthy Living recipe pages.
- `src/components/` — reusable UI, grouped by area (`home/`, `character/`, `recipe/`, `layout/`,
  `shared/`).
- `src/data/` — site content as typed data: `characters.ts` (the mascot family) and `activities.ts`.
  **Prefer editing data here over hard-coding content into components.**
- `src/styles/globals.css` — global styles and Tailwind layer.
- `public/` — static assets (logos, icons, favicon) served as-is.
- `@/` is an alias for `src/` (see `vite.config.ts`).

## Content model

The mascot family lives in `src/data/characters.ts` as an array of `Character` objects. Reggie is the
lead character and is always listed first. To add or edit a character, change the data here; to add a
character *page*, add a route component under `src/routes/` and register it in `src/App.tsx`.

## Downloadable templates (colouring sheets, printables)

Static files served from `public/downloads/`, wired to an activity via `ctaAction: 'download'`. Read
**[docs/DOWNLOADABLE-TEMPLATES.md](docs/DOWNLOADABLE-TEMPLATES.md)** before adding or changing one — the
`download` action needs a one-time wire-up in `ActivityCard`, and there are base-path rules to follow.

## When you finish

Summarise what changed in plain English for a non-technical reviewer, call out anything you were unsure
about, and list any `TODO`s you left.
