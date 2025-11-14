# ClassNova Redesign Implementation Plan

## Goals
- Rebuild the marketing site to match the comprehensive blueprint supplied for DIDAC India 2025.
- Use modular section components under `src/sections` for maintainability.
- Keep accessibility, responsiveness, and smooth scroll/animation hooks (Lenis + GSAP) in place.
- Allow placeholder imagery/video with TODO tags for future asset swaps.

## Section Breakdown & Files
| Order | Section | Component | Notes | Status |
| --- | --- | --- | --- | --- |
| 1 | Navigation (sticky) | `components/Navigation` | Existing component refreshed with anchor map + fixed positioning | ✅ |
| 2 | Hero + Stats + CTA | `src/sections/HeroSection.tsx` | Gradient background, placeholder 3D stack, CTA buttons | ✅ |
| 3 | Trust Banner | `src/sections/TrustBanner.tsx` | Logo marquee, placeholder logos | ✅ |
| 4 | Problem vs Solution | `src/sections/ProblemSolutionSection.tsx` | Two columns + comparison table | ✅ |
| 5 | Setup in 3 Steps | `src/sections/SetupStepsSection.tsx` | Horizontal timeline with dashed connectors | ✅ |
| 6 | Feature Grid (9 cards) | `src/sections/FeatureGridSection.tsx` | Replaces previous `FeaturesSection` | ✅ |
| 7 | Hardware Showcase | `src/sections/HardwareShowcaseSection.tsx` | Placeholder for 3D viewer + accessories + specs table | ✅ |
| 8 | Software Interface | `src/sections/SoftwareInterfaceSection.tsx` | Tabbed mockup (static images placeholders) | ✅ |
| 9 | Key Benefits | `src/sections/BenefitsSection.tsx` | 2x2 grid + status-aware stats | ✅ |
|10 | Pricing | `src/sections/PricingSection.tsx` | Access models + deposits | ✅ |
|11 | DIDAC 2025 Banner | `src/sections/DidacBannerSection.tsx` | Prototype booking stats | ✅ |
|12 | Educator Feedback | `src/sections/TestimonialsSection.tsx` | Interview snippets + consent notes | ✅ |
|13 | Impact Scenarios | `src/sections/CaseStudiesSection.tsx` | Hypothesis cards vs proof needed | ✅ |
|14 | Development Timeline | `src/sections/DevelopmentTimelineSection.tsx` | Milestone list with statuses | ✅ |
|15 | Team & Advisors | `src/sections/TeamSection.tsx` | Core build team + advisors | ✅ |
|16 | Transparency Dashboard | `src/sections/TransparencySection.tsx` | Metrics + risks | ✅ |
|17 | FAQ | `src/sections/FaqSection.tsx` | Prototype-specific Q&A | ✅ |
|18 | Partners & Collaborations | `src/sections/PartnersSection.tsx` | Logo grid + status chips | ✅ |
|19 | Comparison + Cost Calculator | `src/sections/ComparisonSection.tsx` | Honest table + TODO | ✅ |
|20 | Blog / Resources | `src/sections/ResourcesSection.tsx` | Briefings + subscription | ✅ |
|21 | Demo Request Form | `src/sections/DemoRequestSection.tsx` | Pilot queue form | ✅ |
|22 | Footer | `src/sections/FooterSection.tsx` | Multi-column + prototype disclaimer | ✅ |
|23 | Floating CTAs & Sticky Header | `src/sections/FloatingCtas.tsx` | WhatsApp, timeline, transparency links | ✅ |

## Implementation Phases
1. **Scaffold components** with placeholder data & TODO markers. ✅ Completed (all sections live in `src/sections/*`).
2. **Wire sections** into `pages/Index.tsx` in blueprint order. ✅ Completed via single-page composition.
3. **Enhance visuals** (gradients, animations, Lenis/GSAP hooks) iteratively. ⏳ Next iteration: add GSAP sequences + media swaps once assets arrive.
4. **Update navigation** (sticky header, anchor targets) and floating CTAs. ✅ Navigation anchor map + floating CTAs delivered.
5. **QA + Documentation** (README + design tokens). ✅ README + this plan updated; Tailwind tokens ready for future doc site.

## Dependencies & Notes
- Continue using Tailwind utilities; extend theme in `tailwind.config.ts` if needed.
- GSAP integration already available; add section-specific animations per component.
- Placeholder media stored under `public/placeholders/*` (TODO to replace with final assets).
- Keep forms accessible with labels, validation placeholders.

## Next Iteration Targets
- Swap placeholder cards/video boxes with final 3D renders and UI screenshots.
- Add GSAP timelines (e.g., hero stat counters, hardware cards) triggered via `useGsapScrollTrigger`.
- Connect demo request form to backend or marketing automation (HubSpot, Zoho, etc.).
- Add sticky-header state change (opaque background, progress) once scroll states are finalized.

## Prototype-Stage Honesty Updates (In Progress)
- **Benefits + Pricing** — Reword claims with real pilot data, add status badges, and highlight refundable deposits instead of full pricing.
- **DIDAC Banner + Floating CTAs** — Align CTAs with “experience the prototype” and cap slot counts transparently.
- **Educator Feedback & Impact Scenarios** — Replace testimonials/case studies with interview snippets and simulation data clearly labeled as “in validation”.
- **Development Timeline** — New section outlining completed, in-progress, and upcoming milestones through June 2025.
- **Team & Advisors** — Spotlight the 4-person build team plus advisors so buyers know who ships/supports pilots.
- **Transparency Dashboard** — New section showcasing current pilot count, hardware readiness, software modules %, and known risks.
- **FAQ + Partners + Comparison** — Update copy for prototype context, cite data sources, and remove overconfident metrics.
- **Resources + Demo Request + Footer** — Swap language to reflect preview kits, unsubscribe options, and compliance notes.
