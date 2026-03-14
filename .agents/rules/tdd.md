---
trigger: always_on
---

# TDD & Code Integrity Rules
- **Wait for Approval:** Never provide implementation code in the same turn as a new test. Stop after the test and wait for review.
- **Minimalist Assertions:** Only write assertions requested. Do not add "extra" safety checks or boilerplate edge cases unless specified.
- **Preservation Principle:** Never remove or modify existing implementation code when a test is @skipped or commented out. Logic is immutable unless a 'Refactor' is explicitly requested.
- **Context Awareness:** If the current file is a `*.test.*` or `*_test.*` file and I am typing manually, switch to "Passive Copilot" mode (no protocol, just autocomplete).