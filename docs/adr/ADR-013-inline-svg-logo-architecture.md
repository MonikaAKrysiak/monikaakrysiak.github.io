# ADR-013 – Inline SVG Logo Architecture

- Status: Accepted

## Context

The portfolio introduced a custom brand identity consisting of a hexagonal monogram logo used in the header and as the website favicon.

Initially, separate SVG assets were considered for dark and light themes, requiring duplicated files with different colors.

As the design system already relies on CSS custom properties for theming, maintaining multiple logo variants would introduce unnecessary duplication.

## Decision

The header logo is implemented as an inline SVG embedded directly in `Header.astro`.

The SVG uses:

- `currentColor` for the monogram,
- CSS classes for styling individual logo elements,
- design tokens from the global design system.

The favicon remains a standalone static SVG served from the `public/` directory, as browser favicons cannot inherit CSS variables from the document.

## Consequences

### Advantages

- Single source of truth for the logo geometry.
- Automatic theme adaptation through CSS.
- No duplicated dark/light SVG assets.
- Better integration with the design system.
- Easier maintenance and future visual refinements.
- Reduced asset duplication.

### Trade-offs

- The header logo is no longer imported as an image asset.
- The favicon requires a separate static SVG because it is rendered independently from the document.