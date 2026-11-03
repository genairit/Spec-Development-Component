# Spec-Development-Component

Reusable components and project skeletons for specification-driven development.

## Available Components

- [Nest server skeleton](nest-server-skeleton/): a reusable NestJS starting point for server-side development.
- [React client skeleton](react-client-skeleton/): a reusable React, TypeScript, and Vite starting point for client-side development.

## Development Standards

The [developer agent](agents/developer-agent.md) owns the implementation standards.
Select the frontend or backend workflow in [rules/](rules/) for the repository.

- [Frontend development workflow](rules/frontend-development-workflow-standards.md): reads the task, obtains the design agent's style handoff, then implements, reviews, verifies, and opens the merge request.
- [Backend development workflow](rules/backend-development-workflow-standards.md): reads the task, then implements, reviews, verifies, and opens the merge request. Its planning stage can be extended when the backend architecture agent is defined.
- [Close the feedback loop](rules/feedback-loops.md): how to verify work with real evidence — cURL for endpoints, unit tests for generic functions, component tests for complex server logic.
- [Migrations standards](rules/migrations-standards.md): when a schema or environment change requires a migration, and how to name and document it in the `migrations` folder.

## Skills

On-demand workflows live in [skills/](skills/).

- [Entity module](skills/entity-module.md): the canonical structure of a NestJS entity module — the folder tree, the boundaries between controller, service, repository and entity, the rules for each file, and the naming reference. Use it when creating a new entity, adding a file to an existing module, or deciding which layer a piece of server code belongs in.
- [Plan task](skills/plan-task.md): turn a referenced Trello card into a reviewable implementation plan. Resolves the card against the [Team's Goals](https://trello.com/b/0YGKf1tR/teams-goals) board, reads its description, checklists, comments and attachments, pulls any linked Figma designs, studies the codebase, then writes the plan. Implementation happens only when you ask for it.

## Agents

Agent definitions live in [agents/](agents/).

- [Developer agent](agents/developer-agent.md): implements requirements using the extracted standards; for UI work it follows the design handoff and reuses existing generic components as much as possible.
- [Design agent](agents/design-agent.md): reads task requirements and the client's current design language, defines a coherent style and interaction direction, and hands a structured specification to the development agent before client-facing UI implementation.
- [Code reviewer](agents/code-reviewer.md): the code review agent — enforces the numbered standards in [the developer agent](agents/developer-agent.md) through a mechanical Definition of Done. Mode A posts an inline review on a GitHub PR; Mode B reviews local changes and annotates them with `// CR:` comments. The development workflow runs Mode B after implementation; every finding must be fixed and re-reviewed, and only a review with no findings lets the task continue to proof and the merge request.

- [QA agent](agents/qa-agent.md): maintains feature coverage in Gen-Air-Automation, runs targeted and full regression against exact feature revisions, publishes the Automation PR, and returns a structured PASSED/FAILED handoff before proof and feature PRs. Application fixes belong to the development agent and require another clean code review.

## Using These Standards With AI Agents

The canonical workflows and agents have tool-specific entry points.

- **Claude** — [CLAUDE.md](CLAUDE.md) consolidates the workflows and links the developer agent that Claude Code loads as project-wide guidance. Drop it at the root of any repository that should follow these standards. Skills go to `.claude/skills/<name>/SKILL.md` with a `name` and `description`, so Claude Code can invoke them on demand. Agents go to `.claude/agents/<name>.md` with a `name`, `description` and `tools`, so Claude Code can run them as subagents.
- **Codex** — `AGENTS.md` points Codex at [rules/](rules/), and each skill and agent gets a thin adapter at `.agents/skills/<name>/SKILL.md` that references the canonical file. The developer agent becomes the `developer` skill, the design agent becomes `design`, the code reviewer becomes `code-review`, and the QA agent becomes `qa`.
- **GitHub Copilot** — install workflows as `.github/instructions/<name>.instructions.md` with `applyTo` frontmatter, each skill to `.github/skills/<name>/SKILL.md` with a `name` and `description`, and each agent to `.github/agents/<name>.agent.md` with a `name`, `description` and `tools`. Copilot only auto-loads those paths, so a plain copy of `rules/`, `skills/` or `agents/` is silently ignored.

[rules/](rules/), [skills/](skills/) and [agents/](agents/) are the source of truth; `CLAUDE.md`, `AGENTS.md`, `.claude/`, `.agents/` and any `.github/` copies are derived from them and must be regenerated when a rule, skill or agent changes.
