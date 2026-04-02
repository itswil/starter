# Agent Instructions

## Commands

```bash
pnpm run dev      # Start dev server
pnpm run build    # Build for production
pnpm run preview  # Preview production build
pnpm run lint     # Lint with oxlint
pnpm run fmt      # Format with oxfmt
```

## Commit Messages

Use [Conventional Commits](https://www.conventionalcommits.org/):

- `feat(component): add new feature`
- `fix: resolve bug`
- `style: update styling`
- `perf: improve performance`
- `docs: update documentation`
- `refactor: restructure code`
- `test: add/update tests`
- `chore: maintenance tasks

Use `()` for scope (optional).

Add `!` before `:` for breaking changes (e.g., `feat!: breaking change` or `feat(component)!: breaking change`)

## Stack

- React 19 + TypeScript
- Vite
- TailwindCSS v4
- oxlint + oxfmt for linting/formatting
