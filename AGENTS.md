# Project Standards & Agent Behavior
- **Primary Workflow:** We use the `tdd-flow` skill for all new feature development.
- **Test Style:** Focus on behavior-driven assertions. Avoid deep mocking unless necessary.
- **Anti-Pattern Guardrail:** Do not "hallucinate" implementation for skipped tests. If a test is ignored, the underlying code must remain untouched.
- **Language/Framework:** JavaScript/TypeScript using Playwright