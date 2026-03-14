---
trigger: always_on
---

# TDD & Testing Rules
- **TDD Scope:** The Red-Green-Refactor protocol applies ONLY to source code files (e.g., `src/**/*.js`, `lib/**/*.js`).
- **Test File Mode:** When the active file is a test (e.g., `*.spec.js`, `*.test.js`):
  - **Disable TDD Protocol:** Do not wait for approval between steps. 
  - **Outline Implementation:** If I provide a test outline or comments, implement the full test logic in one go.
  - **Preserve Intent:** Keep my specific assertions and selectors; do not "hallucinate" extra checks.