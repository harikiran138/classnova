# [P1] Lazy-load GSAP & ScrollTrigger and ensure dynamic import in hook

**Labels:** P1, performance, animations, code-quality
**Estimate:** 1d

## Description
Refactor `src/lib/use-gsap-scrolltrigger.ts` (and any GSAP usage) to dynamically import `gsap` and `ScrollTrigger` only when a scroll-triggered animation is about to run. Provide a fallback to CSS/IO for simple animations. Ensure imports are tree-shakeable and avoid bundling GSAP in the main chunk.

## Acceptance criteria
- GSAP & ScrollTrigger are imported via dynamic import() and not included in main bundle.
- ScrollTrigger initialization still works with Lenis proxy.
- No console warnings related to ScrollTrigger on navigation/unmount.
- A small demo section lazy-loading GSAP (e.g., `ScrollAnimationDemo.tsx`) shows success.

## Checklist
- [ ] Update hook to use dynamic import.
- [ ] Add guards for SSR/hydration and prefers-reduced-motion.
- [ ] Update demo component to lazy-load animation.
- [ ] Run bundle analyzer and confirm GSAP split.
