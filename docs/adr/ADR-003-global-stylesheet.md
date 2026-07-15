# ADR-0002: Introduce global stylesheet

## Status

Accepted

## Context

The project started with inline styles inside `Layout.astro`.

As the portfolio grows, global styles should be separated from layout structure to keep responsibilities clear and improve maintainability.

## Decision

A global stylesheet (`src/styles/global.css`) was introduced.

Global styles affecting the whole application (such as `html` and `body`) will be placed there.

Component-specific styles may remain inside Astro components when appropriate.

## Consequences

- Clear separation between structure and presentation.
- Better scalability as the project grows.
- Easier maintenance of shared styles.