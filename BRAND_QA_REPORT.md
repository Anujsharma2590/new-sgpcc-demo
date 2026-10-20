# SGPCC visual identity and QA notes

## Sampling method
512 × 512 PNG supplied by user. Measured RGB values using Pillow, FASTOCTREE cluster quantisation, with direct sampled pixel spot checks. Original extracted clusters: Indigo #444791; maroon #A1282F; crimson #EF2832; magenta #C82668; orange #FCA512; amber #FEC269; bright yellow #FCEC0B; lime #9BD424; green #11AA34; teal #32B088; sky blue #0C9AD3; royal blue #066EAF. Theme ink #22254E is a deliberately darkened derivative of sampled logo indigo, not an exact logo pixel.

## Contrast tokens (WCAG AA for regular text: 4.5:1)
| Foreground | Background | Ratio | Regular text |
|---|---|---:|---|
| ink #22254E | cream #FBFAF7 | 13.95:1 | PASS |
| ink #22254E | white #FFFFFF | 14.56:1 | PASS |
| slate #526073 | cream #FBFAF7 | 6.13:1 | PASS |
| maroon #A1282F | cream #FBFAF7 | 7.03:1 | PASS |
| white #FFFFFF | ink #22254E | 14.56:1 | PASS |
| ink #22254E | yellow #F6C100 | 8.70:1 | PASS |
| ink #22254E | wa #25D366 | 7.34:1 | PASS |
| white #FFFFFF | deepwa #075E54 | 7.67:1 | PASS |
| white #FFFFFF | wa #25D366 | 1.98:1 | FAIL |
| white #FFFFFF | ultra_navy #162C65 | 13.27:1 | PASS |
| ultra_navy #162C65 | ultra_yellow #FFE100 | 10.13:1 | PASS |
| white #FFFFFF | success #17633C | 7.28:1 | PASS |
| white #FFFFFF | error #A62232 | 7.25:1 | PASS |





White on WhatsApp green fails (1.98:1). UI uses dark indigo labels on the green button and places the official white WhatsApp glyph over a small dark-green #075E54 circle. The logo itself is an image and is not subject to ordinary text contrast rules.

## Approximate UltraTech partner-section colours
Yellow #FFE100 and dark blue #162C65 are design approximations based on the official brand’s yellow/dark-blue visual treatment, *not* official published RGB specifications. UltraTech logo and photography are existing local assets, not recreated. Official reference: https://www.ultratechcement.com/corporate/media/press-kit and https://www.ultratechcement.com/content/dam/ultratechcementwebsite/pdf/media/press-kit/ultratech-name-and-logo-usage-guidelines.pdf.

## Type scale
Plus Jakarta Sans headings; Inter body; Noto Sans Devanagari for Hindi. Fonts load through Next font with swap. Display clamp(2.65rem,5.5vw,5rem), H1 clamp(2.25rem,4.6vw,4.25rem), H2 clamp(1.85rem,3.2vw,3rem), H3 clamp(1.35rem,2vw,1.75rem), H4 clamp(1.125rem,1.5vw,1.375rem); body 1rem, small .875rem, overline .75rem.

## Manual browser QA, not yet tested
- [ ] `npm install`; `npm run build`; `npm run lint`.
- [ ] Audit layouts and overflow at 360/390/768/1024/1440px; target touch area 44px.
- [ ] Test mobile keyboard navigation, focus order, FAQ and Services accordion, close on Escape.
- [ ] Review image fallback by temporarily renaming one generated WebP, then restore it. Replace conceptual illustrations with approved original project photos or AI-rendered images when available.
- [ ] Test Windows/Android/iOS favicon, manifest and app icons.
- [ ] Run Lighthouse Mobile Performance, Accessibility, SEO and Best Practices, target 90+ (not guaranteed).
- [ ] Validate all contact numbers and GSTINs, preserve existing map coordinates exactly.
- [ ] Verify users understand that WhatsApp draft is not delivered until they click Send.
- [ ] Review Search Console rich-results and schema for review validity. No fabricated review markup.
- [ ] Validate real authorizations, original UltraTech imagery usage and project photos before production.

## Remaining facts to supply
[TODO: Verified response-time commitment], [TODO: real testimonials and consent], [TODO: genuine project photos], [TODO: technical product data and site-specific availability], [TODO: exact map coordinates if company wishes to update existing markers].

## Deployment notes
1. Replace prior project folder with ZIP contents; keep `.env` if used, not included.
2. `npm install` and `npm run dev` (port 3001) then verify locally.
3. Twelve code-generated conceptual WebP illustrations are included at public/images/generated. If a file is removed, the client image component automatically falls back to a source SVG illustration. Replace these with genuine photos or generated renders when approved.
4. The quote form opens WhatsApp and provides mailto fallback; `/api/quote` remains an unconfigured API stub and does not receive leads.
5. Original site data is preserved in `src/content/site.config.js`; do not change office coordinates without user confirmation.
6. `src/lib/services.ts` and `src/lib/images.ts` own service names and image paths.
7. No external stock image CDN or `remotePatterns` is needed for local image files.