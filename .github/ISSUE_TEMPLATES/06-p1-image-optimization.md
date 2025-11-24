# [P1] Add image optimization & responsive `picture`/srcset for LCP assets

**Labels:** P1, performance, content
**Estimate:** 1-2d

## Description
Identify LCP hero and major images, generate optimized AVIF/WebP/PNG fallbacks, add `<picture>` with `srcset` and sizes attributes, and ensure `loading="lazy"` is used for non-LCP images.

## Acceptance criteria
- Hero and LCP images served in AVIF/WebP with fallbacks.
- `<picture>` tags with `srcset` present for responsive breakpoints.
- Lighthouse LCP improved vs baseline.
- All non-LCP images use `loading="lazy"`.

## Checklist
- [ ] Audit images and identify LCP.
- [ ] Create optimized assets (or provide instructions).
- [ ] Update components to use `<picture>`.
- [ ] Test on mobile/desktop.
