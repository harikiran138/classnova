# [P1] Ensure `use-gsap-scrolltrigger` unregisters on unmount and route-change

**Labels:** P1, animations, bug, code-quality
**Estimate:** 0.5d

## Description
Audit `use-gsap-scrolltrigger.ts` to ensure all ScrollTrigger instances are killed and event listeners removed on component unmount and when the router navigates. Prevent memory leaks and double-triggering.

## Acceptance criteria
- All ScrollTrigger instances call `.kill()` on cleanup.
- Lenis event listeners removed on unmount.
- No memory leaks observed in a multi-route navigation test.
- Unit or integration test that mounts/unmounts the hook and ensures cleanup.

## Checklist
- [ ] Inspect hook and add proper cleanup.
- [ ] Add unit/integration test for cleanup behavior.
- [ ] Test with route navigation.
