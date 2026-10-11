# Fix: Next.js “The PNG is not in RGBA format!”

The previous `src/app/favicon.ico` contained PNG colour type **2 (RGB)** inside the ICO file. Next.js 16 can fail while decoding these entries. Both favicon copies now contain PNG colour type **6 (RGBA)** at 16, 32, 48, 64, 128 and 256px.

## Files fixed

- `src/app/favicon.ico` (App Router metadata image)
- `public/favicon.ico` (public legacy favicon URL)

Both were generated from the original `public/logo.png` and checked to be identical. Other business and site information was not changed.

## Use locally

1. Replace your existing project folder with the updated project from the new ZIP, or copy the two `.ico` files to the paths above.
2. Stop your local Next.js server (Ctrl+C).
3. Remove the `.next` build cache. In Windows PowerShell: `Remove-Item -Recurse -Force .next -ErrorAction SilentlyContinue` (run from `sfcc-workspace`). In macOS/Linux: `rm -rf .next`.
4. Run `npm run qa:icons`, then `npm run dev`.
5. Open `http://localhost:3001`, refresh, and if the browser retains the old icon, do a hard reload or use a private window.

`npm run qa:static` now includes the favicon validation. `scripts/rebuild-favicon.py` can regenerate the ICO assets from the logo (requires Pillow only for regeneration, not for the website).

**Verification limits:** The favicon files decode as RGBA ICO and pass static validation. A full Next.js build still needs `npm install` in an environment with access to npm.
