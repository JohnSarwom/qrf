# QRF Website Upgrade — Phase 2 Asset and Image Manifest

## Asset direction

The supplied reference establishes the correct visual language: deep navy, electric blue, strong white typography, blue-hour/night environments, telecommunications infrastructure, equipment cut-outs, subtle network paths and restrained technical grids.

The artwork folder is useful as a brand mood board and as a source of selected equipment/operations imagery. Many files contain embedded marketing text, unverified claims, client/project details or partner wording; those must not be used as website backgrounds or published directly.

## Required target structure

```text
public/assets/qrf/
├── logos/
├── hero/
├── isp/
├── starlink/
├── radio/
├── cctv/
├── networks/
├── industries/
├── projects/
├── team/
├── partners/
├── icons/
├── overlays/
├── backgrounds/
└── placeholders/
```

## Exact required web assets

| Target asset | Purpose | Source/status | Required action |
|---|---|---|---|
| `logos/qrf-horizontal-dark.svg` | Light surfaces | Missing master | Obtain approved vector export |
| `logos/qrf-horizontal-light.svg` | Dark header/footer | Missing master | Obtain approved reversed vector export |
| `logos/qrf-monogram-dark.svg` | Favicons/mobile | `QRF Logo.png` is a usable visual reference only | Export from master; do not trace/redraw |
| `logos/qrf-monogram-light.svg` | Dark surfaces | Missing | Obtain approved reversed export |
| `logos/qrf-monogram-512.png` | App/social fallback | Can derive from approved master | Export sharply with transparency |
| `hero/hero-desktop.webp` | Homepage 1600–2200px | Missing | Create/commission approved PNG/Port Moresby telecom scene |
| `hero/hero-tablet.webp` | Homepage tablet | Missing | Art-directed crop |
| `hero/hero-mobile.webp` | Homepage mobile | Missing | Vertical crop with clear text area |
| `hero/solutions-desktop.webp` | Solutions overview hero | Supplied reference is design-only | Produce clean background without text/UI |
| `isp/business-internet.webp` | Solution card/feature | No verified fit in folder | Source or create approved network/business scene |
| `starlink/remote-site.webp` | Solution card/feature | Missing | Source approved Starlink equipment image or create unbranded satellite-connectivity scene |
| `radio/motorola-radios.webp` | Radio solution | `ChatGPT Image Jul 6, 2026, 09_48_11 AM.png` or `09_50_22 AM.png` | Verify hardware accuracy and usage approval; optimise |
| `cctv/camera-cutout.webp` | CCTV solution | `ChatGPT Image Jul 6, 2026, 04_36_46 PM.png` | Use only if accepted as generic; avoid implying exact product |
| `cctv/avigilon-range.webp` | Technology section | `ChatGPT Image Jul 6, 2026, 11_14_12 AM.png` | Hold pending brand/product approval |
| `cctv/monitoring-centre.webp` | Operations section | `ChatGPT Image Jul 6, 2026, 11_24_48 AM.png` | Candidate; optimise and confirm it is conceptual |
| `networks/network-city.webp` | Connectivity feature | `ChatGPT Image Jul 6, 2026, 11_05_49 AM.png` or `11_12_24 AM.png` | Candidate mood only; verify location is not falsely presented as Port Moresby |
| `networks/tower-night.webp` | Telecom feature | `ChatGPT Image Jul 6, 2026, 09_40_01 AM.png` | Candidate; check landmark/location accuracy |
| `networks/tower-cutout.webp` | Supporting equipment | `ChatGPT Image Jul 6, 2026, 09_18_12 AM.png` | Candidate; remove/check background and hardware realism |
| `backgrounds/operations-centre.webp` | Integrated operations | Existing `public/qrf-command-capabilities.png` or supplied monitoring-centre artwork | Regrade to approved blue; optimise; mark as concept |
| `overlays/network-lines.svg` | Reusable overlay | Missing | Create a lightweight code/vector asset, not baked into every image |
| `overlays/network-nodes.svg` | Reusable overlay | Missing | Create subtle reusable overlay |
| `overlays/png-map.svg` | Built for PNG section | Missing | Use an accurate licensed/open map outline and verify geography |
| `icons/qrf-icons.*` | Consistent service/industry icon system | Lucide is available | Define a controlled subset and stroke/color rules |
| `partners/motorola.*` | Ecosystem | Badge at `10_18_29 AM.png` exists | Do not publish until relationship wording/logo use is approved |
| `partners/avigilon.*` | Ecosystem | No approved standalone logo supplied | Obtain official approved file |
| `partners/starlink.*` | Ecosystem | Not supplied | Obtain approved file only if relationship display is authorised |
| `social/og-home.jpg` | Link previews | Missing | Design after homepage is stable; no unverified claims |

## Supplied artwork classification

### Suitable as brand references

- `Business Card Sample 3.png`
- `Business Card Sample 4.png`
- `ChatGPT Image Jul 3, 2026, 03_49_40 PM.png`
- `ChatGPT Image Jul 3, 2026, 03_49_48 PM.png`
- `ChatGPT Image Jul 3, 2026, 03_50_07 PM.png`
- `Header and footer.png`
- `QRF Communications Pull Up Banner 1.jpg`

These establish navy/blue/white palette, curved brand shapes, network motifs and icon treatment. Do not publish them as page imagery because text and layout are embedded.

### Candidate equipment or environment assets

- `ChatGPT Image Jul 6, 2026, 04_36_46 PM.png` — generic CCTV camera.
- `ChatGPT Image Jul 6, 2026, 09_18_12 AM.png` — tower cut-out.
- `ChatGPT Image Jul 6, 2026, 09_40_01 AM.png` — night tower/network scene.
- `ChatGPT Image Jul 6, 2026, 09_48_11 AM.png` — Motorola radio group.
- `ChatGPT Image Jul 6, 2026, 09_50_22 AM.png` — Motorola radio group.
- `ChatGPT Image Jul 6, 2026, 11_05_49 AM.png` — networked city concept.
- `ChatGPT Image Jul 6, 2026, 11_12_24 AM.png` — networked coastal city concept.
- `ChatGPT Image Jul 6, 2026, 11_14_12 AM.png` — Avigilon camera range.
- `ChatGPT Image Jul 6, 2026, 11_24_48 AM.png` — monitoring-centre concept.

Every candidate requires technical accuracy, brand permission, location-truth and concept-label review before use.

### Hold — verification required

- `ChatGPT Image Jul 6, 2026, 10_18_29 AM.png` — “Authorised Motorola Solutions Partner” badge.
- `ChatGPT Image Jul 6, 2026, 10_05_03 AM.png` — includes “Nationwide Coverage” and experience claims.
- `ChatGPT Image Jul 6, 2026, 10_08_47 AM.png` — includes phone/email/website details that require confirmation.
- `ChatGPT Image Jul 6, 2026, 11_25_35 AM.png`
- `ChatGPT Image Jun 30, 2026, 08_50_16 PM.png`
- `ChatGPT Image Jun 30, 2026, 09_07_43 PM.png`
- `ChatGPT Image Jun 30, 2026, 09_25_27 PM.png`
- `ChatGPT Image Jun 30, 2026, 09_35_53 PM.png`

The last group contains project names, counts, team structures, partner wording or operational details. It must not be exposed publicly without explicit approval.

### Not suitable as finished web imagery

- Images containing large embedded headings, QR codes, proposal text or business-card content.
- Artificial city imagery presented as Port Moresby without verification.
- Generated branded hardware with unreadable or inaccurate product markings.
- Concept scenes presented as completed QRF projects.
- White-background logo PNGs used directly over dark navigation.

## Optimisation specification

- Hero desktop: target 180–350 kB WebP/AVIF; maximum displayed width approximately 2200px.
- Hero tablet/mobile: art-directed files, not only CSS crops of the desktop file.
- Card imagery: target 80–180 kB at 800–1200px source width.
- Equipment cut-outs: transparent WebP/PNG only where transparency is essential.
- Supply `width` and `height` for all `<img>` elements.
- Use `<picture>`/`srcset` and `sizes`.
- Lazy-load below-the-fold images.
- Preserve one colour grade: deep navy, controlled blue highlights and realistic skin/equipment tones.
- Record source, licence/permission, approver and approval date for every final asset.

## Phase 2 approval checklist

- [ ] Official vector logos received.
- [ ] Company and contact details confirmed.
- [ ] Partner wording and logo permissions confirmed.
- [ ] ISP licence wording confirmed.
- [ ] Hero location and infrastructure accuracy approved.
- [ ] Project/client media permissions approved.
- [ ] Candidate hardware images technically reviewed.
- [ ] All final files optimised and named.
- [ ] Alt text drafted.
- [ ] Asset origin and approval register completed.

