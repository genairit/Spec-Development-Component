# Spec-Development-Component

Reusable components and project skeletons for specification-driven development.

## Available Components

- [Nest server skeleton](nest-server-skeleton/): a reusable NestJS starting point for server-side development.
- [React client skeleton](react-client-skeleton/): a reusable React, TypeScript, and Vite starting point for client-side development.

## Development Standards

Shared rules live in [rules/](rules/) and apply to every component in this repository.

- [Elegance & coding standards](rules/coding-standards.md): pyramid ordering, declarative and self-explaining code, and the refactoring patterns favored across the codebase.
- [Development workflow standards](rules/development-workflow-standards.md): the flow from a board task to a merge request — move the task to active, branch from `dev`, implement, pass the code review agent, attach proof, then open and link the merge request.
- [Close the feedback loop](rules/feedback-loops.md): how to verify work with real evidence — cURL for endpoints, unit tests for generic functions, component tests for complex server logic.
- [Migrations standards](rules/migrations-standards.md): when a schema or environment change requires a migration, and how to name and document it in the `migrations` folder.

## Skills

On-demand workflows live in [skills/](skills/).

- [Entity module](skills/entity-module.md): the canonical structure of a NestJS entity module — the folder tree, the boundaries between controller, service, repository and entity, the rules for each file, and the naming reference. Use it when creating a new entity, adding a file to an existing module, or deciding which layer a piece of server code belongs in.
- [Plan task](skills/plan-task.md): turn a referenced Trello card into a reviewable implementation plan. Resolves the card against the [Team's Goals](https://trello.com/b/0YGKf1tR/teams-goals) board, reads its description, checklists, comments and attachments, pulls any linked Figma designs, studies the codebase, then writes the plan. Implementation happens only when you ask for it.

## Agents

Agent definitions live in [agents/](agents/).

- [Code reviewer](agents/code-reviewer.md): the Smartbase code review agent — enforces the elegance standards in [rules/coding-standards.md](rules/coding-standards.md) through a mechanical Definition of Done. Mode A posts an inline review on a GitHub PR; Mode B reviews local changes and annotates them with `// CR:` comments. The development workflow runs Mode B after implementation; every finding must be fixed and re-reviewed, and only a review with no findings lets the task continue to proof and the merge request.

## Using These Standards With AI Agents

The rules are published in two formats so each toolchain picks them up on its own.

- **Claude** — [CLAUDE.md](CLAUDE.md) consolidates every file in [rules/](rules/) into one document that Claude Code loads as project-wide guidance. Drop it at the root of any repository that should follow these standards. Skills go to `.claude/skills/<name>/SKILL.md` with a `name` and `description`, so Claude Code can invoke them on demand. Agents go to `.claude/agents/<name>.md` with a `name`, `description` and `tools`, so Claude Code can run them as subagents.
- **Codex** — `AGENTS.md` points Codex at [rules/](rules/), and each skill and agent gets a thin adapter at `.agents/skills/<name>/SKILL.md` that references the canonical file. The code reviewer becomes the `code-review` skill.
- **GitHub Copilot** — copy each rule to `.github/instructions/<name>.instructions.md` with `applyTo` frontmatter, each skill to `.github/skills/<name>/SKILL.md` with a `name` and `description`, and each agent to `.github/agents/<name>.agent.md` with a `name`, `description` and `tools`. Copilot only auto-loads those paths, so a plain copy of `rules/`, `skills/` or `agents/` is silently ignored.

[rules/](rules/), [skills/](skills/) and [agents/](agents/) are the source of truth; `CLAUDE.md`, `AGENTS.md`, `.claude/`, `.agents/` and any `.github/` copies are derived from them and must be regenerated when a rule, skill or agent changes.
