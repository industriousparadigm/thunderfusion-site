# Thunder Fusion Site — agent / contributor guide

Single-page marketing site for Thunder Fusion (creative + engineering studio).
Static, no auth, no DB, no backend. Deploys on Vercel from `main`.

## Stack

- **Next.js 16** (App Router, Turbopack dev)
- **React 19**
- **Framer Motion 12** for scroll-driven animations
- **CSS Modules** (no Tailwind) + design tokens in `globals.css`
- **Vitest 4 + happy-dom + @testing-library/react** for tests (sub-second)
- **ESLint 9 (flat config)** + **typescript-eslint** + **@next/eslint-plugin-next**
- **Lighthouse CI** in GitHub Actions
- **Vercel Analytics** + optional Google Analytics

## Commands

```bash
npm run dev          # start dev server (turbopack)
npm run build        # production build
npm run start        # serve production build locally
npm run lint         # eslint .
npm run typecheck    # tsc --noEmit
npm test             # vitest run (one-shot)
npm run test:watch   # vitest watch mode
```

## Where things live

```
src/app/
├── page.tsx              # ~22-line orchestrator: composes the sections
├── page.module.css       # only the page-root container
├── layout.tsx            # fonts, metadata, viewport, JSON-LD
├── globals.css           # design tokens (--pink, --cyan, ...) + global resets
├── data/                 # all content. Edit these to update copy/work/founders.
│   ├── films.ts          # the films on the page (videoId, title, client, src, alt)
│   ├── clients.ts        # marquee org names
│   ├── software.ts       # featured product + supporting items
│   ├── studio.ts         # founders (Mariana, Diogo) + accents + links
│   └── copy.ts           # hero, section headers, contact CTAs, footer
├── lib/
│   └── animations.ts     # shared EASE tuple + framer-motion variants
└── components/           # one .tsx + one .module.css per section
    ├── Header.tsx                  # sticky transparent-to-solid nav
    ├── Hero.tsx                    # tagline + showreel CTA (opens modal)
    ├── Marquee.tsx                 # single pink band of client names
    ├── Films.tsx                   # editorial list of featured films
    ├── Software.tsx                # pink slab, featured product + items
    ├── Studio.tsx                  # two-founder block with giant initials
    ├── Contact.tsx                 # two mailto cards routed to hi@
    ├── Footer.tsx
    ├── SectionHeader.tsx           # shared "01 Title meta" component
    ├── VideoModal.tsx              # a11y-correct modal + context provider
    └── Analytics.tsx               # GA + Vercel Analytics
```

## Common edits

| To change… | Edit |
|---|---|
| Hero tagline / subtitle / CTA label | `src/app/data/copy.ts` |
| Section headers (number/title/meta) | `src/app/data/copy.ts` → `sectionHeaders` |
| Add / remove / reorder a film | `src/app/data/films.ts` |
| Marquee client list | `src/app/data/clients.ts` |
| Featured software / Brainwave copy | `src/app/data/software.ts` |
| Founder bios / links / accents | `src/app/data/studio.ts` |
| Contact CTA text + subjects | `src/app/data/copy.ts` → `contactCtas` |
| Color tokens (pink, cyan, ...) | `src/app/globals.css` `:root` |
| A section's styles | `src/app/components/<Name>.module.css` |
| Motion timing / easing | `src/app/lib/animations.ts` |
| SEO metadata / OG tags | `src/app/layout.tsx` |
| Site-wide JSON-LD (Organization) | `src/app/layout.tsx` → `organizationJsonLd` |

## Conventions

- **Data, not components**, holds copy. Edit `data/*.ts` to update text.
- **Co-located CSS Modules.** Each `Foo.tsx` has a sibling `Foo.module.css`.
- **No `!important`.** If you need it, the selector is wrong.
- **Enumerated transitions only.** No `transition: all` — list the properties.
- **`prefers-reduced-motion`** is respected. New animations must add a reduced-motion fallback.
- **Focus-visible outlines** on every interactive element using `var(--cyan)`.
- **Nav uses real anchors** + native `scroll-behavior: smooth`. No JS scroll handlers.
- **Section IDs** match nav labels exactly: `#films`, `#software`, `#studio`, `#contact`.

## Non-negotiable: privacy-first contact

The site **must not expose personal email addresses** in source.
All CTAs route to `hi@thunderfusion.pt` with prefilled subjects.
This is asserted by `src/app/page.test.tsx` ("never exposes personal addresses…")
which checks both raw and URL-encoded forms across the entire rendered HTML
(including the JSON-LD in `layout.tsx`). If a test fails here, the regression
is a privacy bug — fix the code, not the test.

## VideoModal (a11y contract)

`<VideoModalProvider>` lives at the page root. Anything inside can call
`useVideoModal().open(videoId)` to play a film. The modal:

- traps focus between the close button and the iframe (Tab cycles)
- closes on **Escape**
- restores focus to the trigger on close
- locks body scroll while open
- has `aria-modal="true"` + `aria-labelledby` to a visually-hidden title
- validates `videoId` against `^[A-Za-z0-9_-]{11}$` (YouTube ID shape)
- iframe is sandboxed (`allow-scripts allow-same-origin allow-presentation`)

Don't change the modal without adding tests. The existing tests in
`page.test.tsx` cover all of the above.

## Design tokens

```
--pink:       #feaeb5   /* pale rose — the brand color, matches the logo */
--pink-light: #ffd4d8   /* hover highlight on dark */
--pink-deep:  #e91e63   /* reserved for moments needing extra pop (unused by default) */
--cyan:       #00bcd4   /* contrast accent, focus outlines, hover states */
--cyan-light: #bee8fa
--black:      #0a0f14   /* page background */
--black-soft: #1a232e   /* card surfaces */
```

`--pink-rgb` and `--cyan-rgb` exist for `rgba()` use (`rgba(var(--pink-rgb), 0.3)`).

## Testing

`src/app/page.test.tsx` is the single integration test file. It covers
rendering, anchor IDs, the privacy-first email contract, the showreel and
film modal flows, and a11y attributes. Tests run in <1s on happy-dom.

`vitest.setup.ts` stubs `IntersectionObserver` (for framer-motion's
`whileInView`), `scrollIntoView`, and `fetch` (so happy-dom iframes don't
emit cleanup noise).

The CI workflow runs lint → typecheck → test → build, then runs Lighthouse
in a separate job. Lighthouse hard-errors on accessibility <0.9 and SEO <0.95.

## Known gotchas

- **npm rollup binary on macOS**: vitest's vite dep needs
  `@rollup/rollup-darwin-arm64` which npm sometimes doesn't install
  (known npm bug, several years old). If `npm test` fails with
  "Cannot find module '@rollup/rollup-darwin-arm64'", run:
  `npm install @rollup/rollup-darwin-arm64 --no-save`. CI on Linux is unaffected.
- **eslint-config-next 16 + FlatCompat**: throws a circular-ref TypeError.
  We wire `@next/eslint-plugin-next` + `typescript-eslint` directly in
  `eslint.config.mjs` instead. Don't bring `eslint-config-next` back.
- **`next lint` deprecated** in Next 16. The `lint` script calls `eslint .`
  directly.

## Deployment

Vercel auto-deploys on push to `main`. The CI workflow runs in parallel.
Lighthouse uses `temporary-public-storage` (no token needed); for PR comments,
add `LHCI_GITHUB_APP_TOKEN` to repo secrets.
