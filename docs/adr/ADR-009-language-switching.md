# ADR-009 – Progressive Enhancement for Language Switching

## Status

Accepted

---

## Context

The portfolio supports multiple languages.

Users should remain in the currently viewed section when changing language.

This behaviour depends on browser state (current viewport position) and therefore cannot be determined during Astro's server-side rendering.

Keyboard users should also retain focus after navigation.

---

## Decision

Use Progressive Enhancement.

The base implementation consists of standard HTML links.

JavaScript enhances these links by:

- detecting the currently viewed section,
- appending the appropriate fragment identifier (`#section`) before navigation,
- restoring keyboard focus after the new page loads.

The browser continues to perform standard navigation.

Sections participating in this behaviour expose a shared semantic attribute:

```html
data-language-section
```

The language switcher discovers sections dynamically rather than maintaining hardcoded page-specific identifiers.

---

## Consequences

### Advantages

- Works without JavaScript.
- JavaScript enhances existing behaviour instead of replacing it.
- Language switcher remains reusable.
- New sections require no modifications to the switcher.
- Loose coupling between navigation and page structure.
- Keyboard navigation remains accessible.
- Scales naturally as additional pages are added.

### Trade-offs

- Requires a small browser-side script.
- Depends on browser APIs unavailable during server-side rendering.