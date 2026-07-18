# ADR-004 — Use Local Fonts

## Status

Accepted

---

## Context

The project requires a custom typography system while maintaining control over performance, privacy and future optimizations.

Google Fonts can be consumed through a CDN or hosted locally.

---

## Decision

The project will use locally hosted fonts.

Font files are stored inside:

src/assets/fonts/

Fonts are registered using `@font-face`.

Typography is exposed through Design Tokens instead of being referenced directly inside components.

---

## Consequences

### Advantages

- No dependency on external font providers.
- Better privacy.
- Full control over font loading.
- Easier future optimization (WOFF2, preload, caching).
- Consistent typography through Design Tokens.

### Disadvantages

- Font assets become part of the repository.
- Manual updates are required when changing fonts.

---

## Future work

- Convert fonts to WOFF2.
- Add preload where appropriate.
- Review font loading performance.