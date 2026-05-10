# Thunder Fusion

Marketing site for [Thunder Fusion](https://thunderfusion.pt) — a creative +
engineering studio producing humanitarian films and shipping product software.

## Development

```bash
npm install
npm run dev          # http://localhost:3000
```

For the full developer guide — file structure, where to edit copy, conventions,
a11y contracts, gotchas — read **`CLAUDE.md`** in this directory.

## Scripts

```bash
npm run dev          # dev server (turbopack)
npm run build        # production build
npm run start        # serve production build
npm run lint         # eslint .
npm run typecheck    # tsc --noEmit
npm test             # vitest run
npm run test:watch   # vitest watch mode
```

## CI / Deployment

- GitHub Actions runs lint → typecheck → test → build → Lighthouse on every
  push to `main` and every PR (see `.github/workflows/ci.yml`).
- Vercel auto-deploys from `main`.

## Tech

Next.js 16 (App Router), React 19, Framer Motion, CSS Modules, Vitest, happy-dom.
