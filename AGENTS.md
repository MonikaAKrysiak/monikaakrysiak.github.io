# Project Guidelines

This repository contains the source code for my personal portfolio website.

The project is intentionally developed in small, well-documented iterations with a strong focus on engineering quality, accessibility, security, and long-term maintainability.

---

## Development Principles

Follow these principles when proposing changes:

- Prefer small, incremental changes.
- Explain architectural decisions before implementation.
- Avoid unnecessary complexity (YAGNI).
- Prioritize readability and maintainability.
- Reuse existing components whenever possible.
- Preserve backward compatibility unless explicitly requested.

---

## Accessibility

Accessibility is a core project requirement.

Always prefer:

- semantic HTML,
- keyboard accessibility,
- visible focus indicators,
- reduced motion support,
- native browser behaviour over custom JavaScript,
- minimal and meaningful ARIA.

---

## Styling

The design system is based on reusable design tokens.

When modifying styles:

- use existing CSS variables,
- avoid hardcoded colors and spacing,
- keep shared rules in the global stylesheet,
- keep component-specific styles close to the component.

---

## Internationalization

The portfolio supports English and Polish.

Rules:

- UI translations belong in `src/i18n/`.
- Localized content belongs in `src/data/`.
- Components should remain presentation-only whenever possible.

---

## Architecture

Before introducing new components:

- check whether an existing component can be extended,
- keep component APIs small and focused,
- favour composition over duplication.

---

## Documentation

Significant changes should be documented.

Depending on the scope, update:

- Architecture Decision Records (`docs/adr/`)
- Session Logs (`docs/sessions/`)
- Project Overview (`docs/PROJECT_OVERVIEW.md`)

---

## Project Philosophy

This project follows:

- Learn by Understanding
- Security by Default
- Accessibility First
- Small Iterations
- Quality over Speed

---

## Workflow

When implementing changes:

- work in small, reviewable steps,
- modify as few files as necessary,
- explain the reasoning before introducing architectural changes,
- keep documentation in sync with implementation.