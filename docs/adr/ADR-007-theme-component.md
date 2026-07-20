# ADR-007 – Use HTML Data Attributes and Design Tokens for Theme Management

## Status

Accepted

---

## Context

The portfolio needs dark and light themes.

The solution should:

- remain simple and understandable,
- avoid external theme libraries,
- preserve the existing design-token architecture,
- support a saved user preference,
- respect the operating system preference when no choice was saved,
- avoid a flash of the wrong theme during page loading,
- remain accessible,
- keep theme-specific styling out of individual components.

---

## Decision

The active theme is stored on the root HTML element using a `data-theme` attribute:

```html
<html data-theme="dark">
```

or:

```html
<html data-theme="light">
```

The dark theme remains the default in `:root`.

The light theme overrides the same semantic design tokens under:

```css
html[data-theme="light"] {
	/* light theme token values */
}
```

Components use semantic CSS custom properties such as:

```css
var(--color-background)
var(--color-surface)
var(--color-text)
var(--color-border)
```

They do not contain theme checks or theme-specific hardcoded colors.

The initial theme is resolved before the page is painted using this priority:

1. explicit choice saved in `localStorage`,
2. `prefers-color-scheme`,
3. dark fallback declared in HTML.

The inline initialization script lives in `Layout.astro`.

The interactive switcher lives in `ThemeSwitcher.astro` and is responsible for:

- changing `data-theme`,
- saving an explicit user choice,
- updating its accessible label,
- updating the browser `theme-color` value.

Both theme icons remain in the DOM, while CSS controls their visibility.

---

## Consequences

### Positive

- Theme state has one clear location.
- Components remain independent from theme logic.
- Existing design tokens are reused.
- Adding or changing colors requires editing CSS only.
- The chosen theme persists between visits.
- The system preference is respected for first-time visitors.
- The page does not visibly flash the wrong theme during loading.
- JavaScript does not need to manipulate decorative icons.
- The implementation uses no additional dependencies.
- The architecture can inspire the later language-switching solution.

### Negative

- A small inline script is required in the document head.
- `localStorage` and `window.matchMedia()` are browser APIs and therefore require client-side execution.
- The `theme-color` meta value must be synchronized after a user-triggered theme change.

---

## Alternatives considered

### Toggle classes on `<body>`

Rejected because the root HTML element is available earlier and provides a clearer global state for the whole document.

### Hardcode theme colors inside components

Rejected because it would duplicate values and couple components to individual themes.

### Manipulate SVG icons in JavaScript

Rejected because icon visibility is presentation logic and can be handled more simply in CSS.

### Use an external theme library

Rejected because the current requirements are small and can be implemented clearly with native browser APIs and CSS.