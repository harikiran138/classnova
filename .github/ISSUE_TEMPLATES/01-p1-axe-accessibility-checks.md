# [P1] Add Axe accessibility checks to CI

**Labels:** P1, accessibility, ci, testing
**Estimate:** 0.5d

## Description
Add an automated accessibility check to CI (using axe-core with Playwright or pa11y) that scans the built site for critical/high issues. The CI job should fail for critical accessibility violations and upload the report as an artifact.

## Acceptance criteria
- A new GitHub Actions job runs after build and runs Axe/pa11y against the local preview.
- The job fails when critical/high issues are found.
- The job uploads a machine-readable report to the workflow artifacts.
- Documentation added to `README.md` explaining how to run locally.

## Checklist
- [ ] Choose tool (Playwright + axe, pa11y, or lighthouse-a11y).
- [ ] Add GitHub Actions workflow step.
- [ ] Generate report and upload as artifact.
- [ ] Add README instructions.
