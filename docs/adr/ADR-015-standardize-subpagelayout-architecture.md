# ADR-015 – Standardize Subpage Layout Architecture

- Status: Accepted
- Date: 2026-08-01

## Context

Initially, every case study directly used `Layout.astro` and repeated the same page structure:

- `<main>`
- `.container`
- SEO props
- structured data
- accessibility attributes

As additional content sections (Photography, Travel, future hobbies and articles) were introduced, this duplication became unnecessary maintenance overhead.

## Decision

Introduce a dedicated `SubpageLayout` between page components and `Layout`.

Responsibilities:

- render the common `<main>` element
- render the shared `.container`
- provide `id="main-content"`
- provide `tabindex="-1"`
- forward `seo`
- forward `articleStructuredData`
- support optional page-specific CSS classes through `className`

All content-oriented pages should use `SubpageLayout`.

`Layout` remains responsible only for global page structure:

- HTML document
- metadata
- fonts
- scripts
- header
- footer

## Consequences

### Positive

- Single source of truth for subpage structure.
- Reduced duplicated markup.
- Easier maintenance.
- Consistent accessibility implementation.
- Consistent SEO handling.
- Simpler creation of future subpages.

### Negative

- One additional abstraction layer.

The trade-off is considered worthwhile because it significantly improves maintainability while introducing almost no complexity.

## Alternatives Considered

### Continue using `Layout` directly

Rejected.

Every new content page would duplicate:

- `<main>`
- `.container`
- accessibility attributes
- metadata forwarding

leading to repetitive code and a higher maintenance cost.

## Status

Accepted and implemented during Session 048.