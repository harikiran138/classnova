# [P1] Update `DemoRequestSection` to progressive form with accessible errors & success flow

**Labels:** P1, forms, accessibility, ux
**Estimate:** 1d

## Description
Refactor `src/sections/DemoRequestSection.tsx` to use the `Input` primitive, React Hook Form + Zod validation, aria-live error messages, and a success state. Provide an example serverless endpoint for submissions.

## Acceptance criteria
- Form uses RHF + zod and displays inline errors with `aria-describedby`.
- There is an `aria-live` region announcing submission success/failure.
- A placeholder serverless function or mocked endpoint is included in `examples/` or `api/`.
- Toast shown on success via Sonner.

## Checklist
- [ ] Implement RHF form with zod schema.
- [ ] Add aria-live and inline error linking.
- [ ] Add mocked endpoint and success flow.
- [ ] Document local testing steps.
