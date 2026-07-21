# Session 023 – Progressive Enhancement for Language Switching

## Goal

Improve the language switcher so it preserves the currently viewed section when switching languages while keeping the solution fully compatible with Progressive Enhancement principles.

---

## What we changed

### First JavaScript enhancement

Introduced the first JavaScript into the project to enhance an existing HTML feature rather than replace it.

The language switcher continues to work as standard links without JavaScript.

When JavaScript is available, it now:

- preserves the currently viewed section,
- restores keyboard focus after navigation.

Examples:

- `/en#about` → `/pl#about`
- `/en#work` → `/pl#work`
- `/en#contact` → `/pl#contact`
- `/pl/work/...#overview` → `/en/work/...#overview`

The same mechanism now also works for case study pages.

---

### Progressive Enhancement

The implementation follows Progressive Enhancement principles.

Base functionality:

- standard HTML links,
- fully functional without JavaScript.

Enhanced behaviour:

- JavaScript detects the currently viewed section,
- updates the destination URL with the appropriate fragment identifier,
- restores focus to the active language after navigation,
- allows the browser to perform normal navigation.

The application remains fully usable even if JavaScript is unavailable.

---

### Decoupled architecture

The language switcher no longer contains hardcoded knowledge about page structure.

Instead of maintaining a list such as:

```ts
["about", "work", "contact"]
```

it now discovers navigable sections dynamically using:

```html
data-language-section
```

Any section that should preserve its position between languages simply exposes this attribute.

This removes the need to modify the language switcher whenever new sections are added.

---

### CaseStudySection improvements

The reusable `CaseStudySection` component now:

- exposes its own `id`,
- renders the `data-language-section` attribute,
- automatically participates in language-aware navigation.

Every case study benefits from this behaviour without additional code.

---

### Accessibility improvements

Improved keyboard navigation after changing the language.

The language switcher now restores focus to the active language using:

- `sessionStorage`,
- `focus({ preventScroll: true })`.

Keyboard users remain in context after the page reloads instead of losing their place.

---

### Language switcher refinement

Simplified the visual indication of the active language.

Removed the underline from the active language label while keeping:

- highlighted container,
- stronger font weight,
- `aria-current="page"`.

The result is cleaner and avoids redundant visual indicators.

---

### Responsive spacing refinement

Reduced vertical spacing between sections on smaller screens.

The shared `.section` spacing is now:

- `--space-xl` on mobile,
- `--space-2xl` from the desktop breakpoint upward.

This improves information density while preserving the existing desktop layout.

---

### Production verification

Verified the implementation using:

```bash
npm run build
npm run preview
```

During verification a prerendering error was discovered:

```text
ReferenceError: securityKnowledgeBase is not defined
```

The issue originated from an outdated variable name left after refactoring and was corrected.

This reinforced the importance of validating production builds before committing changes.

---

## Concepts learned

- Progressive Enhancement
- Browser-only APIs (`window`, `document`, `getBoundingClientRect()`)
- Preserving URL fragments (`#section`) during navigation
- Keyboard focus management
- `sessionStorage`
- Dynamic DOM discovery using `data-*` attributes
- Loose coupling between reusable components
- Production build verification with `build` and `preview`