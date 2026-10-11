# SGPCC | Logo-derived Next.js brand redesign

This project uses Next.js App Router, Tailwind CSS 4, Motion, Plus Jakarta Sans, Inter, Noto Sans Devanagari, React Icons, Embla, React Hook Form, Zod and Sonner.

## Local setup

```bash
npm install
npm run dev
```

Open http://localhost:3001. The app is preconfigured to run development mode on port 3001.

```bash
npm run qa:static
npm run lint
npm run build
```

**Important:** `npm run qa:static` is a source integrity check, not a browser/Lighthouse test. Complete install/build and all five mobile-width tests on your local workstation before deploying.

## Single sources of truth

- `src/content/site.config.js`: all verified business information, office addresses, GSTINs, phone numbers, partner logos, map coordinates and canonical domain. Existing data preserved exactly.
- `src/lib/services.ts`: seven service routes, labels, icon map, brand category hues, featured flooring entry point.
- `src/lib/images.ts`: 12 local generated-photo paths with original SVG fallbacks and alt text. Add `public/images/generated/*.webp` when ready.
- `src/data/testimonials.ts`: typed, strictly placeholder sample entries. Hidden automatically in production if there are no genuine testimonials. Only non-placeholder entries with supplied ratings/dates are used for Review JSON-LD.
- `src/app/globals.css`: design tokens, Tailwind v4 theme mapping, scale, focus states and motion preferences.
- `public/patterns/pinwheel-pattern.svg`: logo-inspired low-contrast motif.

## Imagery

No commercial stock photographs or remote hosts are used by the new image config. Existing UltraTech assets and partner logos remain unchanged. Twelve original code-generated WebP concept illustrations are included. The `StockImage` component still falls back to original SVG artwork if any individual WebP is missing. These illustrations are not photographs of actual SGPCC projects. Refer to `SGPCC_12_IMAGE_PROMPTS.md` to create each one.

## Contact workflow

The quote form validates client-side and prepares a WhatsApp message. It does **not** send/store a lead in the backend. A `mailto:` fallback is included and the `/api/quote` route remains an unconfigured API stub.

## Icon/manifest assets

All favicon, Apple touch and manifest icons plus the 1200×630 Open Graph image are generated from the provided logo and included in `public/`. Do not change the official UltraTech logo assets.

## Remaining launch work

- Test `npm run build` and Lighthouse 90+ targets locally.
- Supply original SGPCC project photos and confirmed product specifications.
- Obtain client permission before activating testimonials and rating markup.
- Add verified webmaster verification token.
- Verify map coordinate accuracy if changes are desired. The existing coordinate values were not altered in this redesign.
