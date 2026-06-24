# Downloadable templates — how-to

**Audience:** Claude Code / any agent wiring up a downloadable activity (colouring sheet, maze, printable worksheet, recipe card). Read this before editing `src/data/activities.ts` or `ActivityCard`.

This is a static site on Cloudflare Pages — **no backend, no storage service, no env vars.** A downloadable template is just a file in `public/` plus an activity that points at it.

## TL;DR

1. Commit the file to **`public/downloads/`** — e.g. `public/downloads/colour-in-jack.pdf`.
2. In `src/data/activities.ts`, set the activity's `ctaAction: 'download'`, `ctaHref: '/downloads/colour-in-jack.pdf'`, and `comingSoon: false` (delete the `// TODO` line).
3. Make sure `ActivityCard` actually handles `'download'` — **it does not yet** (see [One-time code change](#one-time-code-change-implement-the-download-action)).

## Where files go

- Live under **`public/downloads/`**. Everything in `public/` is copied to the site root at build and served as-is by Cloudflare Pages.
- Reference them with a **leading-slash path**, matching the existing convention for `public/` assets. Compare `characters.ts`: `cardImage: '/characters/reggie-card.svg'`. So `public/downloads/colour-in-jack.pdf` is referenced as `/downloads/colour-in-jack.pdf`.
- **Filenames:** kebab-case, stable, ideally matching the activity `id` (`colour-in-jack` → `colour-in-jack.pdf`). Don't rename a file once it's live — printed sheets and shared links may point at it.

> **Base path note.** `vite.config.ts` sets `base: '/mascots/'`. Vite rewrites asset URLs in `index.html` and JS-imported assets to include that prefix, but **plain string paths in data are *not* rewritten** — they're used verbatim at runtime, exactly like the existing `/characters/*.svg` paths. Keep downloads on the same convention. If public-asset links ever need the `/mascots/` prefix in production, that is a **repo-wide** change (it affects character images too) — fix it once, in one place; don't special-case downloads.

## One-time code change: implement the `download` action

`Activity.ctaAction` already allows `'download'`, but `ActivityCard.handleCta` only handles `'link'` and `'alert'` today — so a `'download'` activity currently falls through to the "coming soon" alert. Wire it up **once**, then every future template is a pure data change.

Render the CTA as a real anchor when the action is a download (so right-click "Save as", middle-click, and keyboard users all work) instead of a `<button>` calling `window.open`:

```tsx
{activity.ctaAction === 'download' && activity.ctaHref ? (
  <a
    href={activity.ctaHref}
    download
    className={/* same classes as the existing button */}
    style={{ backgroundColor: '#0D4F2A' }}
    aria-label={`Download ${activity.title} (PDF)`}
  >
    {activity.ctaLabel}
  </a>
) : (
  <button onClick={handleCta} /* …existing button… */>
    {activity.ctaLabel}
  </button>
)}
```

The `download` attribute tells the browser to save the file rather than navigate to it. Because the file physically exists in the build output, **Cloudflare Pages serves it directly — the SPA / React-Router fallback never intercepts it.** Leave the existing `handleCta` in place for `'link'` and `'alert'`.

## Wiring an activity (data change)

Most printable activities in `activities.ts` are placeholders:

```ts
ctaLabel: 'Download PDF',
ctaAction: 'alert',
// TODO: PDF download — link needed
comingSoon: true,
```

To publish one once its PDF is ready:

```ts
ctaLabel: 'Download PDF',
ctaAction: 'download',
ctaHref: '/downloads/help-jack-maze.pdf',
comingSoon: false,
```

That's the whole change — `ActivityCard` renders the rest from the data.

## File guidance

- **Format:** PDF for anything meant to be printed (colouring sheets, mazes, worksheets). Single page, **A4**, portrait unless the artwork is landscape. Black line art on white for colouring-in.
- **Size:** keep under ~5 MB so it downloads fast on mobile data. Compress/flatten before committing.
- **Content:** club-approved artwork only, Australian English, and **nothing is private once merged** — these go public with the next deploy. Follow the `CLAUDE.md` golden rules (no invented facts, brand standards, accessibility).

## Cloudflare Pages specifics

- **Serving:** files in `public/` ship with the deploy and are served at their path. No configuration needed.
- **Force-download vs open-in-browser:** the `download` attribute covers the in-app click. A PDF reached by pasting its URL directly may still open inline — usually fine, since people often want to view/print. To force a download for *every* access, add a `public/_headers` file:
  ```
  /downloads/*
    Content-Disposition: attachment
  ```
- **Caching when replacing a file:** `public/` files are not content-hashed. Cloudflare purges its edge cache on each deploy, so a redeploy serves the new file — but a visitor's *browser* may still hold the old copy. If you need an instant, guaranteed refresh, publish under a new filename (e.g. `-v2`) and update `ctaHref`.

## Checklist

- [ ] File committed under `public/downloads/`, kebab-case name (ideally matching the activity `id`).
- [ ] `ActivityCard` handles `ctaAction: 'download'` (anchor with the `download` attribute).
- [ ] Activity updated: `ctaAction: 'download'`, `ctaHref` set, `comingSoon: false`, `// TODO` removed.
- [ ] `npm run build` and `npm run lint` pass locally.
- [ ] Opened the Cloudflare Pages **preview link** on the PR and confirmed the file downloads and (for PDFs) prints cleanly on A4.
- [ ] Link/`aria-label` says what it is and that it's a PDF (e.g. "Download Jack's colouring sheet (PDF)").

## Current status

These activities are placeholders waiting on artwork (`ctaAction: 'alert'`, `comingSoon: true`, `// TODO: PDF download — link needed`). Wire each up with the steps above as its PDF lands:

`design-your-jersey`, `which-one-sounds-like-you` (Jack + Ruby variants), `help-jack-maze`, `reggies-game-day-plate`, `pack-your-bag`, `rubys-team-of-the-day`, `how-are-you-feeling`, `scarletts-obstacle-course`, `olivers-bedtime-wind-down`.

The `colour-in-*` / `Start Colouring` activities use `ctaAction: 'link'` to the `/colouring` route instead — they are not downloads.
