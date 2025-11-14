# ClassNova Redesign Implementation Plan

## Goals
- Rebuild the marketing site to match the comprehensive blueprint supplied for DIDAC India 2025.
- Use modular section components under `src/sections` for maintainability.
- Keep accessibility, responsiveness, and smooth scroll/animation hooks (Lenis + GSAP) in place.
- Allow placeholder imagery/video with TODO tags for future asset swaps.

## Section Breakdown & Files
| Order | Section | Component | Notes |
| --- | --- | --- | --- |
| 1 | Navigation (sticky) | `components/Navigation` (update later) | Keep existing for now; add sticky behavior pass later |
| 2 | Hero + Stats + CTA | `src/sections/HeroSection.tsx` | Gradient background, placeholder 3D stack, CTA buttons |
| 3 | Trust Banner | `src/sections/TrustBanner.tsx` | Logo marquee, placeholder logos |
| 4 | Problem vs Solution | `src/sections/ProblemSolutionSection.tsx` | Two columns + comparison table |
| 5 | Setup in 3 Steps | `src/sections/SetupStepsSection.tsx` | Horizontal timeline with dashed connectors |
| 6 | Feature Grid (9 cards) | `src/sections/FeatureGridSection.tsx` | Replaces previous `FeaturesSection` |
| 7 | Hardware Showcase | `src/sections/HardwareShowcaseSection.tsx` | Placeholder for 3D viewer + accessories + specs table |
| 8 | Software Interface | `src/sections/SoftwareInterfaceSection.tsx` | Tabbed mockup (static images placeholders) |
| 9 | Key Benefits | `src/sections/BenefitsSection.tsx` | 2x2 grid + stats bar |
|10 | Pricing | `src/sections/PricingSection.tsx` | 3-tier cards, additional info |
|11 | DIDAC 2025 Banner | `src/sections/DidacBannerSection.tsx` | Countdown placeholder, gallery |
|12 | Testimonials | `src/sections/TestimonialsSection.tsx` | Carousel placeholder + videos |
|13 | Success Stories | `src/sections/CaseStudiesSection.tsx` | Before/after cards |
|14 | FAQ | `src/sections/FaqSection.tsx` | Accordion by categories |
|15 | Partners & Collaborations | `src/sections/PartnersSection.tsx` | Logo grid |
|16 | Comparison + Cost Calculator | `src/sections/ComparisonSection.tsx` | Interactive table placeholder |
|17 | Blog / Resources | `src/sections/ResourcesSection.tsx` | Card grid + newsletter |
|18 | Demo Request Form | `src/sections/DemoRequestSection.tsx` | Two-column layout |
|19 | Footer | `src/sections/FooterSection.tsx` or enhance existing `components/Footer` | Multi-column + badges |
|20 | Floating CTAs & Sticky Header | `src/sections/FloatingCtas.tsx` | WhatsApp, Demo, Callback, progress bar |

## Implementation Phases
1. **Scaffold components** with placeholder data & TODO markers.
2. **Wire sections** into `pages/Index.tsx` in blueprint order.
3. **Enhance visuals** (gradients, animations, Lenis/GSAP hooks) iteratively.
4. **Update navigation** (sticky header, anchor targets) and floating CTAs.
5. **QA + Documentation** (README + design tokens).

## Dependencies & Notes
- Continue using Tailwind utilities; extend theme in `tailwind.config.ts` if needed.
- GSAP integration already available; add section-specific animations per component.
- Placeholder media stored under `public/placeholders/*` (TODO to replace with final assets).
- Keep forms accessible with labels, validation placeholders.
