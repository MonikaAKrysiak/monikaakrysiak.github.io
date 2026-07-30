# Session 044 – Lighthouse & Performance Audit

## Goal

Perform a full Lighthouse audit across the entire portfolio and resolve the remaining performance issues while preserving accessibility, maintainability and simplicity.

---

## Completed work

### Global improvements

- Added preload for locally hosted Manrope fonts.
- Kept `font-display: swap`.
- Eliminated layout shifts caused by delayed font loading.
- Improved mobile CLS.

### Layout

- Added font preloads in `Layout.astro`.
- Verified correct loading of hashed Astro assets.

### Portfolio Website

- Restored the missing repository link label next to the GitHub icon.
- Reviewed Lighthouse recommendations regarding:
  - image delivery,
  - render-blocking CSS,
  - LCP discovery,
  - layout shifts.

The remaining recommendations were evaluated and intentionally left unchanged because the implementation already represents the best trade-off between performance, readability and maintainability.

---

## Lighthouse results

### Homepage

Desktop

- Performance: 100
- Accessibility: 100
- Best Practices: 100
- SEO: 100

Mobile

- Performance: 100
- Accessibility: 100
- Best Practices: 100
- SEO: 100

---

### Portfolio Website

Desktop

- PL Light: 100 / 100 / 100 / 100
- PL Dark: 100 / 100 / 100 / 100
- EN Light: 100 / 100 / 100 / 100
- EN Dark: 97 / 100 / 100 / 100

Mobile

- All language/theme combinations:
  100 / 100 / 100 / 100

---

### Security Knowledge Base

Desktop

- All language/theme combinations:
  100 / 100 / 100 / 100

Mobile

- All language/theme combinations:
  100 / 100 / 100 / 100

---

### Beyond Testing

Desktop

- All language/theme combinations:
  100 / 100 / 100 / 100

Mobile

- All language/theme combinations:
  100 / 100 / 100 / 100

---

### Knowledge Sharing

Desktop

- All language/theme combinations:
  100 / 100 / 100 / 100

Mobile

- All language/theme combinations:
  100 / 100 / 100 / 100

---

## Decisions

### Font loading

Preloading local WOFF2 fonts provided a measurable Lighthouse improvement while preserving `font-display: swap`.

### Performance trade-offs

The remaining Lighthouse recommendations were intentionally not implemented because they would increase project complexity without providing meaningful user benefit.

Examples include:

- generating additional image variants solely for Lighthouse,
- inlining small CSS bundles,
- optimizing already negligible critical request chains.

The project continues to prioritize maintainability over micro-optimizations.

---

## Result

The portfolio now achieves consistent Lighthouse scores close to or equal to 100 across all pages, languages, themes and viewport sizes while keeping the architecture simple and maintainable.

---

## Next session

Session 045 – Final Accessibility Audit

Focus areas:

- keyboard navigation
- landmarks
- heading hierarchy
- ARIA review
- reduced motion
- screen reader verification
- Axe
- WAVE