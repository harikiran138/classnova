# [P1] Add Axe/Playwright accessibility smoke test to CI

**Labels:** P1, accessibility, testing, ci
**Estimate:** 1d

## Description
Add a Playwright-based test that runs axe-core accessibility checks against the preview build and fails CI if critical issues are found. Store the results as artifacts.

## Acceptance criteria
- Playwright test script included in repo (e.g., `tests/a11y.spec.ts`).
- CI runs Playwright tests against preview server and fails on critical issues.
- Report is available as an artifact in workflow.

## Checklist
- [ ] Add Playwright + Axe dependency.
- [ ] Create test script.
- [ ] Add CI job and artifact upload.
- [ ] Update README for running locally.
