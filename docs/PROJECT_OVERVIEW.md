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

Each development session focuses on one small, well-defined topic.

The project grows incrementally while keeping every change easy to understand, review and maintain.

---

# Long-term vision

The website should become:

- professional portfolio,
- engineering showcase,
- learning journal,
- long-term project.

Future versions may also include:

- detailed case studies,
- conference talks,
- publications,
- articles,
- selected community activities.

---

# Current architecture

The project currently includes:

- Astro
- Design Tokens (colors, spacing and typography)
- Reusable layout system
- Reusable button component
- Reusable navigation and header components
- Reusable case study layout
- Component-scoped styles
- Custom local font system
- Responsive typography based on design tokens
- Light and dark theme support
- Theme persistence using `localStorage`
- Automatic system theme detection (`prefers-color-scheme`)
- CSS variable-based theming using `data-theme`
- Semantic HTML and accessibility-focused components

---

## Design system

The website uses Design Tokens to define colors, typography and spacing.

Components consume tokens instead of hardcoded values, allowing the entire visual system to evolve from a single source of truth.

Theme switching is implemented by changing the `data-theme` attribute on the root `<html>` element. Individual components remain completely independent of the active theme.

---

## Responsive typography

Typography is controlled through design tokens.

Responsive font scaling is implemented by updating token values inside media queries instead of modifying individual components.

This keeps components independent from viewport-specific styling.

---

## Component architecture

Reusable components encapsulate both their markup and presentation.

Shared design rules remain in the global stylesheet, while component-specific styles stay close to the components that own them.

This approach improves maintainability, portability and scalability as the project grows.

The project currently includes reusable components for navigation, buttons, language and theme switching, reusable layouts and structured engineering case studies.

---

## Accessibility

Accessibility is considered throughout the project rather than being added afterwards.

Current practices include:

- semantic HTML,
- keyboard-accessible navigation,
- descriptive ARIA labels,
- visible focus states,
- decorative icons hidden from assistive technologies,
- responsive layouts,
- reusable accessible UI components.

## Internationalization

The project uses a structured localization approach.

- User interface translations are stored in `src/i18n`.
- Reusable content (for example work cards and case studies) is stored in `src/data`.
- Components remain presentation-only and receive localized content through typed data objects.

This separation keeps presentation, content and translations independent while making future languages easy to add.

## Page composition and routing.

This architecture makes adding new languages and new case studies straightforward while keeping components reusable.

### Design Decisions completed

The Portfolio Website case study now includes four engineering decision cards supported by localized technical evidence and screenshots.

The implementation keeps content, presentation and assets clearly separated while allowing additional evidence to be added without changing the page structure.