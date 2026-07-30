# ADR-010 – Present Engineering Principles as Reusable Cards

## Status

Accepted

---

## Context

The initial implementation displayed engineering principles as regular text sections.

Although technically correct, the content was difficult to scan and lacked visual distinction between individual principles.

The section also contained duplicated layout logic that would likely be reused by future case studies.

---

## Decision

Engineering principles are presented as reusable cards.

Each card contains:

- optional icon,
- title,
- content.

Icons are provided by the parent page rather than translation files.

Translation files continue to contain only textual content.

The layout adapts responsively:

- one column on mobile,
- two columns on larger screens.

---

## Consequences

### Advantages

- improved readability,
- clearer visual hierarchy,
- reusable component,
- separation between content and presentation,
- translation files remain language-only.

### Trade-offs

The page is responsible for mapping icons to engineering principles.

This introduces a small amount of presentation logic inside the Astro page, but avoids coupling translation data with UI components.

---

## Alternatives considered

### Store icons inside translation files

Rejected.

Translation files should describe content rather than presentation.

### Keep plain text sections

Rejected.

Cards significantly improve scanning, responsiveness and future extensibility.