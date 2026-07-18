# ADR-005 — Keep Component Styles Close to Their Components

## Status

Accepted

---

## Context

As the portfolio grows, more reusable Astro components are introduced.

Keeping all styles inside `global.css` would gradually create a large stylesheet containing rules for unrelated components, making maintenance more difficult and reducing component portability.

---

## Decision

Shared styles remain in `global.css`.

Component-specific styles are colocated with the component that owns them.

Examples:

- `Projects.astro` contains styles responsible for the projects section layout.
- `ProjectCard.astro` contains styles responsible for the appearance of a project card.

---

## Consequences

### Advantages

- Better separation of responsibilities.
- Components become self-contained and easier to reuse.
- Smaller and more maintainable global stylesheet.
- Easier navigation between markup and styles.
- Improved scalability as the project grows.

### Disadvantages

- Styles are distributed across multiple files.
- Some styling decisions require navigating between parent and child components.

---

## Future work

- Continue following the same approach for new reusable components.
- Review shared patterns periodically to determine whether they belong in the Design System.