# Session 020 – Implement Dark and Light Theme System

## Goal

Complete the dark and light theme architecture for the portfolio while keeping the implementation accessible, maintainable and free from unnecessary dependencies.

---

## What we changed

### Theme state

The active theme is stored on the root HTML element:

```html
<html lang="en" data-theme="dark">
```

The `data-theme` attribute is the single source of truth for the active visual theme.

---

### Light theme tokens

The existing dark theme remains the default in `:root`.

A complete light theme palette was added using:

```css
html[data-theme="light"] {
	--color-background: #F4F1E8;
	--color-surface: #E8E3D8;
	--color-surface-hover: #DDD6C8;

	--color-text: #1E2320;
	--color-text-muted: #5F675F;

	--color-primary: #5F7F5A;
	--color-secondary: #8A6F2E;

	--color-border: #C8C0B2;
	--color-primary-hover: #4F6E4B;
}
```

Components continue to use design tokens and do not need to know which theme is active.

---

### Removed a hardcoded hover color

The hover background in `WorkCard.astro` used a fixed color value.

It was replaced with:

```css
background-color: var(--color-surface-hover);
```

This keeps component styling compatible with both themes.

---

### Theme switching

The theme switcher now:

- reads the active theme from `document.documentElement.dataset.theme`,
- changes between `dark` and `light`,
- stores the user's choice in `localStorage`,
- updates the accessible button label.

The label describes the action that will happen after activation:

- active dark theme → `Switch to light theme`,
- active light theme → `Switch to dark theme`.

---

### Initial theme resolution

The initial theme is resolved in `Layout.astro` before the page is painted.

The priority is:

1. saved user choice from `localStorage`,
2. operating system preference from `prefers-color-scheme`,
3. dark theme fallback from the HTML markup.

The initialization script is inline in the document head, which prevents a flash of the wrong theme during page refresh.

---

### Theme icons

Both theme icons are rendered in `ThemeSwitcher.astro`:

- sun icon,
- moon icon.

CSS decides which icon is visible based on `html[data-theme]`.

JavaScript does not manipulate the icons directly.

Both decorative SVGs use:

```html
aria-hidden="true"
```

because the button already has an accessible label.

---

### Browser theme color

Added:

```html
<meta name="theme-color" content="#1E2320" />
```

The value is updated when the theme changes.

JavaScript reads the current `--color-background` token using `getComputedStyle()` and applies it to the meta element.

This keeps the CSS design tokens as the source of truth and avoids duplicating theme colors in JavaScript.

---

## Accessibility

The theme control now includes:

- a semantic `<button>`,
- `type="button"`,
- a dynamic `aria-label`,
- decorative icons hidden from assistive technologies,
- unchanged keyboard support and focus styles.

The label communicates the available action rather than repeating the current state.

---

## Architecture

The final responsibility split is:

### `Layout.astro`

- initializes the theme,
- reads `localStorage`,
- checks `prefers-color-scheme`,
- prevents a flash of the wrong theme,
- provides the `theme-color` meta element.

### `ThemeSwitcher.astro`

- responds to user interaction,
- changes `data-theme`,
- stores the explicit user choice,
- updates the accessible label,
- updates the browser theme color.

### `global.css`

- defines dark and light design tokens,
- controls theme presentation,
- controls which theme icon is visible.

---

## Result

The portfolio now has a complete dark and light theme system with:

- persistent user preference,
- system preference fallback,
- no visible theme flash on refresh,
- accessible controls,
- CSS-driven icon switching,
- mobile browser theme color support,
- no external dependencies,
- no hardcoded component colors.

---

## Next step

Implement the PL/EN language architecture using the same general principles:

- one clear source of truth,
- persistent user choice,
- accessible switcher labels,
- separation between state, content and presentation.