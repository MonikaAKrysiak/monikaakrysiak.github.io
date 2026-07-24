# ADR-009 – Contextual Header Navigation

## Status

Accepted

---

## Context

Initially, the header contained homepage-specific navigation links.

As the project gained multiple page types (homepage, case studies, future hobby pages), this approach would require the header to know which page was currently displayed.

That would tightly couple the header with page-specific logic.

---

## Decision

Navigation is now owned by each page.

A page provides an optional list of navigation items to the layout.

The layout forwards those items to the header.

The header simply renders navigation when items are available.

```
Page
    │
    ▼
Layout
    │
    ▼
Header
    │
    ▼
Navigation
```

---

## Consequences

### Advantages

- Header remains generic.
- No URL-based rendering logic.
- Navigation is reusable across page types.
- Future pages can define their own navigation independently.
- Easier maintenance and testing.

### Trade-offs

Each page is responsible for defining its own navigation items.

This introduces a small amount of duplication but keeps responsibilities well separated.

---

## Accessibility

The mobile navigation follows common accessibility practices:

- `aria-expanded` reflects menu state.
- `aria-label` changes between open and close states.
- `Escape` closes the menu.
- Focus returns to the hamburger button after closing.
- Clicking outside the navigation closes the menu.

---

## Rationale

Keeping navigation data close to the page that owns the content provides a more scalable architecture than centralizing navigation logic inside the header.

This approach aligns with the project's principles of component composition, separation of responsibilities, and long-term maintainability.