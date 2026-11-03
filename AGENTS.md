# Codex repository guidance

This repository is the canonical source for the shared GenAir development
workflows and agents. Read [the developer agent](agents/developer-agent.md)
for the numbered implementation standards and generic-component reuse.

- Use [the frontend workflow](rules/frontend-development-workflow-standards.md)
  for client work, after the [design agent](agents/design-agent.md) handoff.
- Use [the backend workflow](rules/backend-development-workflow-standards.md)
  for server work.
- Run [the code reviewer](agents/code-reviewer.md) after implementation, then
  [the QA agent](agents/qa-agent.md) as the applicable workflow requires.
- The `$developer` skill at `.agents/skills/developer/SKILL.md` is the Codex
  entry point for authorized implementation.
