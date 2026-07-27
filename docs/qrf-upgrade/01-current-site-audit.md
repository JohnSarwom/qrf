# QRF Website Upgrade — Current Site Audit

Audit date: 25 July 2026  
Scope: local workspace, current production site at `https://www.qrfpng.com/`, supplied rebrand brief, approved direction image, and the supplied QRF artwork folder.

## Executive summary

The codebase is a React 18 + TypeScript + Vite 5 single-page site. It builds successfully and the current local homepage is responsive at tablet size, but it is not yet the website described by the rebrand brief.

The central mismatch is positioning. Production and the local workspace present QRF primarily as a security-response organisation. The approved direction positions QRF as a Papua New Guinean telecommunications, ISP, Starlink, radio, CCTV, network-infrastructure and integrated-security provider. The local design also uses a pale page shell and cyan/teal accents instead of the approved deep-navy/electric-blue system.

No production redesign was made during this audit.

## Current architecture

| Area | Current implementation | Classification |
|---|---|---|
| Framework | React 18.3, TypeScript, Vite 5.4 | Retain / upgrade |
| Routing | `react-router-dom`; `/` and catch-all `*` only | Rewrite |
| Page structure | One long homepage assembled from section components | Improve |
| Styling | Tailwind CSS, shadcn/Radix primitives, global CSS utilities | Retain / rationalise |
| Theme | `next-themes`, forced light default; most page colours hard-coded | Rewrite |
| Content | Copy embedded in component files | Replace with typed content objects |
| Icons | Lucide React plus shadcn UI | Retain |
| Images | Large PNG files in `/public`; no responsive sources | Replace / optimise |
| Forms | Client-only success state; no transmission or persistence | Rewrite |
| Data/API | No website API, CMS, database or environment-variable use found | Verify future need |
| Analytics | None found | Add after consent/measurement decision |
| Hosting | No `.openai/hosting.json`, deployment adapter or documented production pipeline | Define |
| Tests | No unit, integration, accessibility or end-to-end tests | Add |

## Frontend structure

- `src/App.tsx` supplies Query Client, theme, tooltips, notifications and routing.
- `src/pages/Index.tsx` composes the homepage.
- `src/pages/NotFound.tsx` handles all unmatched routes.
- The live site and local workspace are both single-page experiences with section scrolling.
- Radix/shadcn components are broadly installed, but most are not used by the current page.
- `bun.lockb` and `package-lock.json` coexist. One package manager should be selected.

## Styling and theme audit

What works:

- Clear responsive spacing scale through Tailwind.
- Strong section hierarchy and readable body sizing.
- Consistent rounded cards and focus outline rule.
- Reduced-motion override is present.
- Dark hero imagery and operational visuals offer useful raw material.

What conflicts with the approved direction:

- The page background is predominantly `#eef3f7` / white.
- Accent colour is cyan/teal, while the approved reference uses electric royal blue.
- The official dark mission-critical system is not expressed as reusable `--qrf-*` tokens.
- Header is a light floating bar, not a transparent-to-solid navy global shell.
- The hero is a rounded dashboard-style panel rather than a full-width telecommunications environment.
- The current card language and imagery communicate security response more than connectivity and infrastructure.
- Typography is system Inter only; no heading/body pairing or deliberate font loading is configured.

## Responsive review

Reviewed at 1440, 768, 375 and 320 CSS pixels.

- 768px: layout stacks cleanly, mobile navigation appears, and no document-level horizontal overflow was measured.
- 375px: first viewport remains usable, but hero text and controls reach the clipped edge of the rounded hero panel.
- 320px: the hero grid keeps a roughly 317px minimum content width inside a 305px document client width. The H1, body copy and both hero buttons extend off-screen and are hidden by `overflow-hidden`.
- Mobile menu button is 40×40px, below the brief’s preferred 48px minimum target.
- Page height is approximately 18,339px at 375px, making the single-page information architecture unusually long.
- Desktop inspection did not reveal document-level overflow, but the current shell is visually dense and the navigation leaves little room for the required multi-route structure.

## Accessibility audit

Positive:

- One H1 on the homepage.
- Most major sections follow H2/H3 hierarchy.
- Form controls have explicit labels.
- Images in active sections have alt text.
- Global `:focus-visible` treatment exists.
- Reduced-motion preferences are respected.

Risks:

- Primary navigation uses buttons that scroll rather than real links. This weakens browser semantics, link affordance, copying/open-in-new-tab and crawlability.
- The clickable logo wrapper is a generic `div`, not a link or button.
- Trust-strip card titles are H2 elements despite being subordinate items, which dilutes the heading outline.
- Mobile menu trigger is undersized.
- The contact form lacks a consent checkbox and privacy notice link.
- No automated accessibility testing is configured.
- Link count on the local homepage is zero; all navigation and CTAs are buttons.

## Performance audit

- Production build succeeds.
- Generated entry bundle: about 400.20 kB JavaScript / 122.31 kB gzip.
- Generated CSS: about 81.66 kB / 14.13 kB gzip.
- Four active content images are PNGs of roughly 1.99–2.10 MB each; the logo image is about 0.93 MB.
- Images use no `srcset`, `<picture>`, explicit width/height, WebP/AVIF or lazy-loading attributes.
- The hero is an `<img>` rather than responsive background sources, so mobile still downloads the full portrait asset.
- The Browserslist database is approximately 21 months old.
- No Lighthouse or Web Vitals automation is present.

## SEO audit

Present:

- Title, meta description, author, Open Graph title/description/image and Twitter card tags.
- `robots.txt` and web manifest.
- Language declaration and responsive viewport.

Missing or incorrect for the approved site:

- Metadata positions QRF around security response, not the approved telecommunications offering.
- No canonical URL.
- No XML sitemap.
- No route-specific metadata.
- No Organisation, LocalBusiness or Service structured data.
- Open Graph image is a large square logo on white, not a social preview.
- Internal navigation is button-driven, so there are no crawlable service links.
- Planned routes do not exist.
- No breadcrumb component or markup.

## Forms, integrations and operations

- The contact form only calls `preventDefault()` and shows a success message.
- No email, CRM, secure intake, spam protection, server validation or persistence exists.
- No secrets are exposed because no backend integration exists.
- No analytics, CMS, database or API integration is present.
- No documented error monitoring, uptime monitoring or deployment rollback process exists.

## Security and dependency audit

`npm audit --omit=dev` reported 12 known vulnerabilities: 9 high and 3 moderate. Notable findings include React Router/open-redirect XSS, PostCSS issues, glob/minimatch/brace-expansion denial-of-service risks, lodash prototype-pollution/code-injection advisories, and a Babel runtime advisory.

The app does not currently process sensitive data server-side, but the planned contact form will. Before launch it needs server-side validation, rate limiting/spam protection, safe logging, consent handling and a defined retention path.

## Quality checks

| Check | Result |
|---|---|
| TypeScript (`tsc --noEmit`) | Pass |
| Production build | Pass |
| ESLint | Fail: 3 errors, 8 warnings |
| Console review | No QRF-page-specific console failure observed |
| Automated tests | Not configured |

ESLint errors are in two generated UI interfaces and the Tailwind CommonJS plugin import. Warnings are Fast Refresh export warnings.

## High-priority findings

1. Replace unverified claims before any rebrand launch.
2. Reposition all core copy from security response to the approved connectivity/communications/security portfolio.
3. Establish typed company/contact/partner configuration before page implementation.
4. Build the approved dark QRF design tokens and global shell.
5. Create real routes and crawlable links before detailed page work.
6. Correct 320px hero clipping and 40px mobile menu target.
7. Optimise all imagery and introduce responsive formats.
8. Implement a real, secure contact-processing path.
9. Upgrade vulnerable dependencies and make lint pass.
10. Define deployment, rollback, monitoring and content-approval ownership.

