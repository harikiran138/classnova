# [P1] Create `ui/Button` primitive and replace global button instances

**Labels:** P1, ui, code-quality
**Estimate:** 1d

## Description
Add a robust `src/components/ui/button.tsx` with variants (primary, secondary, ghost), sizes, and accessibility features (aria-disabled support, keyboard focus styling). Replace all direct button markup in the repo with the new primitive.

## Acceptance criteria
- `Button` primitive implemented with typed props.
- All existing buttons replaced or mapped to the new `Button`.
- Visual parity maintained and accessibility checks pass (focus outline, aria-disabled).

## Checklist
- [ ] Implement `Button` primitive.
- [ ] Search & replace button usages.
- [ ] Run visual & accessibility checks.
