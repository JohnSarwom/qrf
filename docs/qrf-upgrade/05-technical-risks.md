# QRF Website Upgrade — Technical Risks and Dependencies

## Risk register

| Priority | Risk | Impact | Mitigation |
|---|---|---|---|
| Critical | Unverified public claims and client/partner references | Legal, trust and procurement risk | Central approval register and safe fallback wording |
| Critical | Contact form has no backend despite showing success | Lost enquiries and misleading UX | Implement server-side processing, delivery monitoring and failure states |
| High | 9 high and 3 moderate dependency vulnerabilities | Security and maintenance risk | Upgrade dependencies, retest, rerun audit |
| High | 320px hero content is clipped by an oversized grid track | Accessibility and conversion failure | Rebuild mobile hero with `min-width: 0`, mobile-first sizing and no hidden overflow dependency |
| High | No route architecture for required pages | SEO and content scalability failure | Implement real routes and shared layouts |
| High | Large unoptimised PNG assets | Slow mobile load and poor Core Web Vitals | WebP/AVIF, responsive sources, explicit dimensions, lazy loading |
| High | No deployment configuration or rollback documentation | Launch and recovery risk | Select hosting target and document immutable build/deploy/rollback flow |
| High | No automated tests | Regression risk across many routes | Add route smoke, accessibility and responsive tests |
| Medium | Navigation and CTAs are button-only | SEO and accessibility weakness | Use semantic links and route-aware navigation |
| Medium | Mixed package-manager lockfiles | Non-reproducible installs | Standardise on npm or Bun and remove the unused lockfile after approval |
| Medium | Hard-coded content throughout components | Accuracy drift | Typed content modules and a central company configuration |
| Medium | Broad unused UI/dependency surface | Bundle and upgrade burden | Remove unused primitives after route implementation |
| Medium | ESLint fails | Quality gate cannot pass | Fix three errors and refresh warnings policy |
| Medium | Browserslist data is stale | Outdated compatibility transforms | Update during dependency maintenance |
| Low | Existing visual-audit documents describe an earlier security design | Confusion during implementation | Treat the master brief and new audit package as controlling documents |

## External dependencies

- Approval of official company and contact details.
- Written relationship wording for Motorola, Avigilon and Starlink.
- ISP licence wording.
- Approved vector/master logo files.
- Approved project/client list and media permissions.
- Approved privacy, terms and disclaimer copy.
- Selected form destination (email, CRM or ticketing system).
- Hosting and domain/DNS ownership.
- Analytics and cookie-consent decision.

## Launch blockers

Do not launch the rebrand until:

1. Critical claims are verified or replaced.
2. Contact delivery is tested end to end.
3. Dependency audit and lint gates pass.
4. Required routes, metadata, sitemap and canonical URLs exist.
5. Mobile layouts pass at 320, 375 and 430px.
6. Images are optimised and licensing/approval is recorded.
7. Accessibility smoke tests and keyboard navigation pass.
8. Deployment rollback and monitoring are defined.

