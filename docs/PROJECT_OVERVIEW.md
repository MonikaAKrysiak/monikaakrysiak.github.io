# Portfolio Project

## Purpose

This repository contains my personal portfolio website.

The project has two equally important goals:

1. Build a professional portfolio presenting my experience as a QA Engineer with a strong focus on Application Security.
2. Learn modern frontend development by understanding every decision instead of following tutorials blindly.

This project is intentionally developed in small iterations and is expected to evolve over time.

---

# Development approach

The project follows several principles.

## Learn by understanding

Every technology, dependency and architectural decision should be understood before it is used.

## Security by default

Security is considered from the very beginning instead of being added later.

Examples include:

- reviewing dependencies,
- approving install scripts consciously,
- avoiding unnecessary libraries,
- keeping dependencies up to date.

## Quality over speed

The objective is not to finish the website as quickly as possible.

The objective is to understand how and why everything works.

## Small iterations

Each development session should focus on one small topic.

The project should grow gradually.

---

# Long-term vision

The website should become:

- professional portfolio,
- engineering showcase,
- learning journal,
- long-term project.

Future versions may include:

- conference talks,
- publications,
- articles,
- selected personal projects,
- carefully chosen personal interests.

---

## Current architecture

The project currently includes:

- Astro
- Design Tokens (colors and typography)
- Reusable button component
- Custom local font system

---

### Responsive typography

Typography is controlled through design tokens.

Responsive font scaling is implemented by updating token values inside media queries instead of modifying individual components.

This keeps components independent from viewport-specific styling.