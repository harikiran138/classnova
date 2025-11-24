# [P1] Add central motion config + enforce `prefers-reduced-motion`

**Labels:** P1, accessibility, animations
**Estimate:** 0.5d

## Description
Create `src/lib/motionConfig.ts` exporting motion settings and utility `shouldReduceMotion()` used by LenisProvider and GSAP hook. Ensure when reduced motion is requested, Lenis is disabled and animations are no-op.

## Acceptance criteria
- `motionConfig.ts` exists and is imported across lenis provider, GSAP hook, and components.
- Reduced-motion toggles animation behavior at runtime.
- Manual test demonstrates disabling/enabling motion via OS setting.

## Checklist
- [ ] Add `motionConfig.ts`.
- [ ] Update `lenis-provider.tsx` to consult config.
- [ ] Update `use-gsap-scrolltrigger.ts` to consult config.
- [ ] Document behavior.
