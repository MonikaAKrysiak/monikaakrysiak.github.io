# ADR-014 – Introduce Subpage Layout

## Status

Accepted

---

## Context

Case studies and hobby pages shared the same overall structure:

- Header
- Main content
- Footer

Each page repeatedly implemented:

- `<main>`
- container
- skip-link target
- navigation forwarding
- spacing below the sticky header

This duplicated layout logic across multiple pages.

---

## Decision

Introduce a reusable `SubpageLayout` component.

Responsibilities:

- wrap `Layout`,
- render `<main id="main-content">`,
- provide the standard container,
- forward `navigationItems` to the global Header,
- apply consistent spacing for all subpages.

Individual pages now focus only on their content.

---

## Consequences

### Advantages

- less duplicated markup,
- consistent page structure,
- easier maintenance,
- reusable across all content pages,
- easier future changes (spacing, container, navigation).

### Trade-offs

Introduces one additional layout component.

This is acceptable because every subpage now shares the same structure.

---

## Alternatives considered

### Keeping duplicated markup

Pros

- no extra component

Cons

- repeated code
- inconsistent spacing
- harder maintenance
- more opportunities for layout divergence

Rejected.

---

## Outcome

All hobby pages and future content pages should use `SubpageLayout`.

This layout becomes the standard entry point for content pages throughout the portfolio.