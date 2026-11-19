# AGENTS.md

Static personal portfolio: React 19 + TypeScript + Vite 8 + Tailwind 4, deployed on Vercel. Single package, no backend. There is no test runner, CI workflow, pre-commit config, or task runner — don't spend time hunting for one.

## Verification

- `npm run lint` → oxlint (config `.oxlintrc.json`, not ESLint)
- `npm run typecheck` → `tsc -b`
- `npm run build` → `tsc -b && vite build`, so it already typechecks; output is `dist/`
- Node >= 20 required.

## Where changes must be mirrored

- All visible content lives in `src/data/profile.ts` (`as const`). `featured` only orders the single uniform grid in `Projects.tsx`; `image: null` renders a "Proyecto interno" strip instead of a screenshot, and `certifications[].file: null` renders a dash. UI copy and content are Spanish.
- SEO/social/contact data is duplicated in `index.html`: title, OG/Twitter tags, canonical URL, JSON-LD, and name/email/phone/socials. Editing `profile.ts` alone leaves stale metadata.
- Sections are composed in `src/App.tsx`; nav anchors are a separate hardcoded `links` array in `src/components/Navbar.tsx`. Adding/renaming a section means updating both. Keep `scroll-mt-20` on sections — the header is fixed.
- Brand SVG icons (GitHub, LinkedIn) are inline in `src/components/icons.tsx`; all other icons come from `lucide-react`. Don't add an icon dependency for brand marks.

## Toolchain quirks

- Tailwind 4 runs through `@tailwindcss/vite`; there is no `tailwind.config.js`. Theme tokens (`--color-bg`, `--color-accent`, …) live in `@theme` in `src/index.css` and are used as `bg-bg`, `text-text-secondary`, etc.
- TS has `verbatimModuleSyntax` + `erasableSyntaxOnly`: use `import type` for type-only imports and avoid enums/parameter properties. `allowImportingTsExtensions` is on, so `import App from './App.tsx'` is intentional — don't "fix" it.
- Asset URLs are root-absolute (`/cv/...`, `/img/...`, `/og.png`) and `index.html` hardcodes the production origin. A subpath deploy needs `base` in `vite.config.ts` plus path edits in both `profile.ts` and `index.html`.
- Downloadable certs go in `public/img/certs/` (directory does not exist yet) with `file: '/img/certs/...'` in `profile.ts`.

## Deploy

`vercel.json` sets build `npm run build` and output `dist`; `npx vercel` for a local deploy.
