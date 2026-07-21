# Session 023 – Progressive Enhancement for Language Switching

## Goal

Improve the language switcher so it preserves the currently viewed section when switching languages while keeping the solution fully compatible with Progressive Enhancement principles.

---

## What we changed

### First JavaScript enhancement

Introduced the first JavaScript into the project to enhance an existing HTML feature rather than replace it.

The language switcher continues to work as standard links without JavaScript.

When JavaScript is available, it now preserves the currently viewed section during language switching.

Examples:

- `/en#about` → `/pl#about`
- `/en#work` → `/pl#work`
- `/en#contact` → `/pl#contact`

The same mechanism now also works for case study pages.

---

### Progressive Enhancement

The implementation follows Progressive Enhancement principles.

Base functionality:

- standard HTML links
- fully functional without JavaScript

Enhanced behaviour:

- JavaScript detects the currently viewed section
- updates the destination URL with the appropriate fragment identifier
- allows the browser to perform normal navigation

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

### Responsive spacing refinement

Reduced vertical spacing between sections on smaller screens.

The shared `.section` spacing is now:

- `--space-xl` on mobile,
- `--space-2xl` from desktop breakpoint upward.

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

- Server-side rendering vs browser execution
- When Astro requires JavaScript
- Progressive Enhancement
- Browser-only APIs (`window`, `document`, `getBoundingClientRect()`)
- Dynamic DOM discovery using `data-*` attributes
- Loose coupling between reusable components
- Production build verification with `build` and `preview`