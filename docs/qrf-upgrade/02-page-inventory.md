# QRF Website Upgrade — Page and Route Inventory

## Current local routes

| Route | Component | Status | Classification |
|---|---|---|---|
| `/` | `Index` | Long single-page homepage | Rewrite progressively |
| `*` | `NotFound` | Generic 404 | Improve |

## Current homepage sections

| Order | Anchor | Component | Current purpose | Decision |
|---:|---|---|---|---|
| 1 | `#home` | `Hero` | Security-response hero | Rewrite |
| 2 | — | `TrustStrip` | Security trust markers | Rewrite |
| 3 | `#services` | `Services` | Security-service tabs/cards | Replace |
| 4 | `#response-model` | `ResponseWorkflow` | Response workflow | Repurpose as Assess/Design/Deploy/Support |
| 5 | `#about` | `About` | Command-centre/security capability | Rewrite |
| 6 | `#solutions` | `Solutions` | Radio/command/safety solutions | Rewrite |
| 7 | `#industries` | `EnterpriseUseCases` | Security use cases | Rewrite |
| 8 | `#faq` | `FAQ` | Security FAQ | Replace |
| 9 | `#contact` | `Contact` | Client-only enquiry form | Rewrite |
| 10 | — | `Footer` | Security-focused footer | Replace |

## Current production page

The live site is also a one-page experience. Its content includes Home, About, Services, Solutions and Contact sections. It contains stronger but unverified claims and named client/partner references that must not be carried forward without approval.

## Required target routes

### Primary pages

- `/`
- `/solutions`
- `/industries`
- `/projects`
- `/about`
- `/support`
- `/contact`
- `/careers` only if approved content exists
- `/privacy`
- `/terms`
- `/disclaimer`

### Service pages

- `/solutions/isp-business-internet`
- `/solutions/starlink-connectivity`
- `/solutions/radio-communications`
- `/solutions/cctv-video-security`
- `/solutions/network-infrastructure`
- `/solutions/integrated-security`
- `/solutions/technical-support`

### Recommended industry pages

- `/industries/government`
- `/industries/mining-resources`
- `/industries/oil-gas`
- `/industries/banking-finance`
- `/industries/transport-logistics`
- `/industries/security-facilities`
- `/industries/corporate`
- `/industries/remote-operations`

## Route readiness rules

- Projects remain a non-claiming capability preview until approved case studies exist.
- Careers should not be linked unless there is a real vacancy or approved evergreen recruitment message.
- Support content must use “local technical support” until hours, coverage and escalation commitments are confirmed.
- Every internal route needs unique metadata, a canonical URL, breadcrumbs, real internal links and a route-aware active navigation state.

