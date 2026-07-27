# QRF Website Upgrade — Recommended Phased Roadmap

## Phase 1 — Audit

Status: complete.

Deliverables:

- Architecture and implementation audit.
- Route/page inventory.
- Component inventory.
- Content and claims audit.
- Technical risk register.
- Phased roadmap.

Approval checkpoint: confirm that the telecommunications-led positioning supersedes the current security-led site and identify any security services that remain in scope.

## Phase 2 — Assets and content foundations

1. Approve the asset manifest in `07-asset-image-manifest.md`.
2. Obtain master/vector logo exports.
3. Approve or reject partner relationship wording and logos.
4. Approve the company/contact configuration.
5. Create the prescribed `/public/assets/qrf/` structure.
6. Prepare responsive hero, solution and industry images.
7. Optimise to WebP/AVIF and record dimensions, origin and approval status.
8. Create typed `src/content` modules.

Checkpoint: asset and content approval before layout implementation.

## Phase 3 — Design system

- Implement the approved CSS tokens.
- Add Manrope/Inter or an approved equivalent.
- Build buttons, cards, section headers, image panels and layout primitives.
- Define focus, motion and reduced-motion behaviour.
- Create a component preview route or Storybook only if it improves approval speed.

Checkpoint: desktop/mobile component review.

## Phase 4 — Global shell and routing

- Add all primary and service routes.
- Build announcement bar, transparent/sticky header, menus, breadcrumbs and footer.
- Use semantic links and keyboard-accessible menus.
- Add route metadata architecture.

Checkpoint: navigation and responsive shell approval.

## Phase 5 — Homepage

- Implement the approved hero and core capability strip.
- Add featured solutions, Why QRF, operations, connectivity spotlight, industries, PNG section, ecosystem, projects preview and final CTA.
- Use safe copy and clearly label non-project concept imagery.

Checkpoint: visual, responsive, accessibility and performance review.

## Phase 6 — Solutions overview

- Implement `/solutions` against the approved reference structure.
- Include Assess/Design/Deploy/Support, solution cards, connectivity spotlight, integrated operations, support lifecycle and operating environments.

Checkpoint: solution taxonomy and CTA review.

## Phase 7 — Detailed service pages

- Build the seven prescribed service routes from a shared template.
- Ensure each page has distinct problem, capability, use-case and FAQ copy.

Checkpoint: technical-owner content review.

## Phase 8 — Industries, projects, about and support

- Build problem-led industry pages.
- Publish only approved project information.
- Add company overview, mission, values, leadership and quality/safety content when verified.

Checkpoint: legal/brand approval.

## Phase 9 — Contact, SEO and production integrations

- Implement secure server-side lead capture and spam protection.
- Add canonical URLs, sitemap, structured data, social card and internal links.
- Add analytics only with an approved privacy approach.

Checkpoint: end-to-end enquiry and metadata tests.

## Phase 10 — QA and launch

- Test 320, 375, 430, 768, 1024, 1280, 1440 and 1920px.
- Run lint, type checking, tests and production build.
- Run keyboard, screen-reader smoke, reduced-motion and contrast reviews.
- Run Lighthouse and optimise.
- Validate links, images, metadata, robots and sitemap.
- Deploy through the selected production workflow and confirm rollback.

Checkpoint: written launch approval.

