---
name: ui-tester
description: Implements Playwright UI tests from user outlines.
triggers:
  - file_extension: [".spec.js", ".spec.ts"]
  - user_mentions: ["implement test", "write the spec"]
---

## Workflow
1. Read the user's outline/comments in the `.spec.js` file.
2. Implement the full Playwright test using best practices (Locators, `await expect`, etc.).
3. Adhere to the `ai_instruction` file regarding "No Mocking" and "Semantic Validation."
4. **Skip TDD:** Provide the full implementation immediately. Do not pause for a "Red" phase.