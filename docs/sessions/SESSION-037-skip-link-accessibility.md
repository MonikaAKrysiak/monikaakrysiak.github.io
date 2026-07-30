# Session 037 – Skip Link Accessibility

## Goal

Improve keyboard accessibility by allowing users to skip repeated navigation and jump directly to the main page content.

---

## Changes

### Added Skip Link

Added a skip link before the site header in `Layout.astro`.

The link points to:

```html
#main-content
```

and is fully localized.

---

### Main landmark

Added

```html
id="main-content"
tabindex="-1"
```

to every `<main>` element.

This ensures keyboard focus moves correctly after activating the skip link.

---

### Styling

Added a visually hidden skip link that becomes visible when focused.

The component follows the existing design system and spacing tokens.

---

### Internationalization

Added translations:

- EN — "Skip to main content"
- PL — "Przejdź do głównej treści"

---

### Hero improvements

Updated the homepage hero so the second statement line is rendered only when it exists.

This removes the TypeScript error caused by different translation structures while keeping the component flexible.

---

## Accessibility improvements

Implemented:

- keyboard-accessible skip navigation
- correct focus management
- localized labels
- preserved semantic landmarks

---

## Verification

- TypeScript: ✅
- Build: ✅
- Keyboard navigation: ✅
- Skip Link: ✅