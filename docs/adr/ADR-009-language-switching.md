# ADR-009 – Progressive Enhancement for Language Switching

## Status

Accepted

---

## Context

The portfolio supports multiple languages.

Users should remain in the currently viewed section when changing language.

This behaviour depends on browser state (current viewport position) and therefore cannot be determined during Astro's server-side rendering.

---

## Decision

Use Progressive Enhancement.

The base implementation consists of standard HTML links.

JavaScript enhances these links by detecting the currently visible section and appending the appropriate fragment identifier before navigation.

Sections participating in this behaviour expose a shared semantic attribute:

```html
data-language-section
```

The language switcher discovers sections dynamically rather than maintaining hardcoded page-specific identifiers.

---

## Consequences

### Advantages

- Works without JavaScript.
- Language switcher remains reusable.
- New sections require no modifications to the switcher.
- Loose coupling between navigation and page structure.
- Scales naturally as additional pages are added.

### Trade-offs

- Requires a small browser-side script.
- Depends on browser APIs unavailable during server-side rendering.