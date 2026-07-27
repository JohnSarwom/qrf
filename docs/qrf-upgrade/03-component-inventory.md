# QRF Website Upgrade — Component Inventory

## Active application components

| Component | Role | Current disposition |
|---|---|---|
| `App` | Providers and routes | Retain / simplify |
| `Index` | Homepage composition | Rewrite |
| `Navigation` | Sticky desktop/mobile nav | Replace with approved global shell |
| `Hero` | Homepage hero | Rewrite |
| `TrustStrip` | Five trust markers | Rewrite as core capability strip |
| `Services` | Security service selector/cards | Replace with featured solutions |
| `ResponseWorkflow` | Response process | Repurpose |
| `About` | Command-centre capability/proof | Rewrite as Why QRF / operations |
| `Solutions` | Specialist solutions section | Rewrite |
| `EnterpriseUseCases` | Industry cards | Rewrite |
| `FAQ` | Homepage FAQ | Retain pattern; replace content |
| `Contact` | Enquiry form and contact cards | Rewrite |
| `Footer` | Site footer | Replace |
| `NotFound` | 404 route | Improve |

## Present but not used by the homepage

- `AnimatedCounter`
- `BentoGrid`
- `FloatingElements`
- `ThemeToggle`

These should be classified during implementation as retain only if a real page needs them; otherwise remove to reduce maintenance and bundle surface.

## UI primitive layer

The repository contains a broad shadcn/Radix component set. Active page work currently uses only a subset, including Button, Sheet, Input, Textarea and Accordion. The unused primitive inventory should be trimmed after the target routes stabilise.

## Required reusable QRF components

### Global shell

- `AnnouncementBar`
- `SiteHeader`
- `DesktopNavigation`
- `MobileNavigation`
- `MegaMenu`
- `SiteFooter`
- `Breadcrumbs`

### Core content

- `PageHero`
- `HeroSection`
- `SectionHeader`
- `CapabilityStrip`
- `SolutionCard`
- `FeatureCard`
- `IndustryCard`
- `ProcessStep`
- `TrustPillar`
- `ImagePanel`
- `SplitContentSection`
- `TechnologyPartnerCard`
- `CoverageMap`
- `ProjectCard`
- `ContactCTA`

### Actions and forms

- `PrimaryButton`
- `SecondaryButton`
- `IconButton`
- `ContactForm`
- `FormStatus`

## Implementation guidance

- Do not duplicate global-shell markup between routes.
- Use links for navigation and route CTAs; reserve buttons for actions.
- Keep content in typed files under `src/content`.
- Keep official company/contact/relationship wording in one configuration object.
- Give every image component explicit intrinsic dimensions and responsive source behaviour.
- Use a single icon family and consistent stroke width.

