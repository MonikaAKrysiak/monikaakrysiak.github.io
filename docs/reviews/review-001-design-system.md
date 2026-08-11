# CSS Refactoring Review

**Date:** 2026-07-27  
**Branch:** `feature/portfolio-case-study`  
**Scope:** Safe deduplication only — no renames, no HTML changes, no appearance changes  
**Build status:** ✅ `astro build` passed after every individual commit

---

## Goal

As this portfolio project grew incrementally across many development sessions, `global.css` accumulated organic duplication: declarations repeated in responsive overrides that the cascade was already satisfying, identical focus-visible rules written individually for each interactive element, and the same property values written as literals in component scoped styles even though equivalent design tokens already existed in `:root`.

None of these issues caused visible bugs, but they increased the maintenance surface: a change to the global focus style would need to be applied in multiple places, a responsive override could silently become a no-op and nobody would notice, and the relationship between values and their semantic meaning was partially obscured by literals.

This refactor addressed that accumulated debt with zero risk to users. Every change was mechanically verifiable: a declaration either matched its base value exactly (a no-op) or matched a token's value exactly (a safe substitution). No judgment calls were made about intent or design.

---

## Scope

### Included

- **Removing duplicate declarations** — properties repeated in a responsive override at the same value as the base rule, producing no effect on computed styles.
- **Consolidating repeated rule sets** — multiple `:focus-visible` rules with identical declaration blocks, merged into grouped selector lists.
- **Merging split rule blocks** — the same selector appearing in two `@media` blocks at the same breakpoint, where the second overrides the first; consolidated into one block with the final effective state.
- **Replacing hardcoded values with existing design tokens** — literal values in a component's scoped CSS that were numerically identical to tokens already defined in `:root`, with no new tokens introduced.

### Excluded

All of the following were out of scope and left untouched:

- **HTML structure changes** — no element, attribute, or class applied in markup was modified.
- **Astro component changes** — components were not restructured. The one component file touched (`WorkCard.astro`) received only a value substitution inside an existing CSS declaration.
- **Class renaming** — all public class names are unchanged.
- **CSS modularisation** — `global.css` remains a single file. Splitting it into domain-specific files was not part of this refactor.
- **Visual redesign** — no colour, spacing, typography, or layout value was changed. The site looks identical before and after.
- **Accessibility behaviour changes** — all focus indicators, ARIA attributes, and keyboard navigation are preserved. The focus-visible consolidation changed selector grouping only; the rendered outline is the same.
- **Adding new design tokens** — a handful of hardcoded literals could not be replaced because no matching token exists. Introducing new tokens was deferred as an architectural decision.

---

## Outcome

Seven commits were applied to two files. Each commit was followed by a full `astro build` run, which passed without errors or warnings every time.

The net result is approximately 34 lines removed from `src/styles/global.css` and three hardcoded values replaced with token references in `src/components/WorkCard.astro`. No declarations were invented or moved into a different cascade position — only exact duplicates were removed and identical blocks were merged.

The stylesheet is simpler in the following concrete ways:

- The focus-visible style for interactive elements is now defined in two places instead of nine. Any future change to the global focus ring (colour, width, or offset) requires editing one rule per group rather than hunting for every element that carries a focus style.
- Responsive overrides in `global.css` now contain only declarations that actually change something relative to the base rule. A reader can scan a breakpoint block and trust that every line represents a genuine override, not noise.
- `WorkCard.astro` now participates in the design token system for focus styles. If `--focus-outline-width` is updated globally, the work card link will update automatically alongside every other element in Group B.

No visual change was introduced. No behaviour was changed. The accessibility audit surface is unchanged.

---

## Changes applied

### Commit 1 — `f088168`
**Remove duplicate `display: flex` from `.hero-actions` mobile rule**

- **File:** `src/styles/global.css`
- **What:** The `@media (max-width: 767px)` block for `.hero-actions` contained `display: flex` and `flex-wrap: wrap`. The base rule (outside any media query) already declares `display: flex` unconditionally, so the mobile version only needs to add `flex-wrap: wrap`.
- **Why safe:** The cascade guarantees the base `display: flex` is already active when the mobile breakpoint applies. Removing the redundant declaration produces identical computed styles.

---

### Commit 2 — `f7f5744`
**Consolidate duplicate `focus-visible` outline rules into two selector groups**

- **File:** `src/styles/global.css`
- **What:** Nine separate `:focus-visible` rules across the file all produced one of two identical declaration blocks:

  **Group A — with `border-radius`** (6 selectors):
  ```css
  outline: var(--focus-outline-width) solid var(--color-secondary);
  outline-offset: var(--focus-outline-offset);
  border-radius: var(--focus-outline-radius);
  ```
  Selectors: `.site-logo`, `.site-navigation a`, `.language-option`, `.contact-list a`, `.case-study-back-link`, `.case-study-source`

  **Group B — without `border-radius`** (3 selectors):
  ```css
  outline: var(--focus-outline-width) solid var(--color-secondary);
  outline-offset: var(--focus-outline-offset);
  ```
  Selectors: `.navigation-toggle`, `.theme-switcher`, `.button`

  Both groups were merged into two combined selector rules in place of the six and three individual ones.

- **Why safe:** Selector lists are equivalent to separate rules with identical declarations — computed styles are unchanged. All nine selectors are still present in the stylesheet.
- **Not touched:** `.interactive-figure-button:focus-visible { outline: none }` and `.interactive-figure-dialog-close:focus-visible` use custom box-shadow focus styles intentionally — kept as-is.

---

### Commit 3 — `cce7a50`
**Merge duplicate `.documentation-showcase-outcome` rules into a single `@media (min-width: 768px)` block**

- **File:** `src/styles/global.css`
- **What:** The rule `.documentation-showcase-outcome` was declared in two separate `@media (min-width: 768px)` blocks. The first set `margin-top: 0; padding-left: var(--space-xl); border-left: 1px solid var(--color-border)`. The second set `padding-top: 0; padding-left: var(--space-xl); border-top: none; border-left: 1px solid var(--color-border)`. Because both applied at the same breakpoint, the second always overrode the first. The two were merged into one complete rule in the first block, and the redundant second declaration was removed.
- **Why safe:** Same breakpoint, same selector — the net computed result is identical.

---

### Commit 4 — `52e14aa`
**Replace hardcoded focus values in `WorkCard.astro` with design tokens**

- **File:** `src/components/WorkCard.astro`
- **What:** The scoped `.work-card-link:focus-visible` rule used literal values:
  ```css
  outline: 2px solid var(--color-secondary);
  outline-offset: 0.25rem;
  border-radius: 0.25rem;
  ```
  These match the project's existing focus tokens exactly:
  - `2px` → `--focus-outline-width`
  - `0.25rem` (offset) → `--focus-outline-offset`
  - `0.25rem` (radius) → `--focus-outline-radius`

  Replaced with token references.

- **Why safe:** The token values equal the hardcoded values — no visual change. Token usage ensures any future global focus style update applies here automatically.

---

### Commit 5 — `935be7d`
**Remove duplicate `position: sticky` from `.site-header` mobile breakpoint**

- **File:** `src/styles/global.css`
- **What:** The base `.site-header` rule (outside any media query) declares `position: sticky` unconditionally. The `@media (max-width: 1023px)` block repeated `position: sticky` alongside `padding-block: var(--space-md)`. The repeat was removed; `padding-block` remains.
- **Why safe:** `position: sticky` is already established by the base rule and cannot be un-set by a narrower-viewport breakpoint that repeats the same value. The mobile header is sticky before and after.

---

### Commit 6 — `d06761d`
**Remove duplicate `color` declaration from `.impact-story-meta-title` in 768px block**

- **File:** `src/styles/global.css`
- **What:** The base `.impact-story-meta-title` rule sets `color: var(--color-text-muted)`. The `@media (min-width: 768px)` override for the same selector repeated `color: var(--color-text-muted)` unchanged, alongside the legitimate `font-size: 0.8rem` and `line-height: 1.3` overrides. The duplicate `color` declaration was removed.
- **Why safe:** The responsive block does not change the color — removing the repeat leaves the base value in effect, which is identical.

---

### Commit 7 — `70f4e19`
**Remove duplicate `padding-bottom` from `.documentation-showcase-details` in 768px block**

- **File:** `src/styles/global.css`
- **What:** The base `.documentation-showcase-details` rule sets `padding-bottom: var(--space-2xl)`. The `@media (min-width: 768px)` block repeated `padding-bottom: var(--space-2xl)` without change, alongside the legitimate `grid-template-columns`, `column-gap`, and `align-items` overrides. The duplicate was removed.
- **Why safe:** The responsive block does not change `padding-bottom` — removing the repeat leaves the base value in effect, which is identical.

---

## Summary

| # | Commit | File | Lines removed | Type |
|---|--------|------|---------------|------|
| 1 | f088168 | `src/styles/global.css` | 1 | Duplicate declaration in mobile breakpoint |
| 2 | f7f5744 | `src/styles/global.css` | 23 | Duplicate declaration blocks across 9 rules |
| 3 | cce7a50 | `src/styles/global.css` | 5 | Duplicate rule in second 768px block |
| 4 | 52e14aa | `src/components/WorkCard.astro` | 0 (values replaced) | Hardcoded values → design tokens |
| 5 | 935be7d | `src/styles/global.css` | 1 | Duplicate declaration in mobile breakpoint |
| 6 | d06761d | `src/styles/global.css` | 2 | Duplicate declaration in responsive override |
| 7 | 70f4e19 | `src/styles/global.css` | 2 | Duplicate declaration in responsive override |

**Total net reduction:** ~34 lines of CSS removed, 0 behaviour changes.

---

## Recommendations intentionally skipped

The following were identified but deliberately not changed because they do not qualify as safe mechanical deduplication under the session rules.

### 1. `.documentation-showcase-meta-title` has no `color` in its 768px override
The base rule sets `color: var(--color-text-muted)`. The responsive block does not repeat it — no duplication exists here. Nothing to do.

### 2. Hardcoded `2rem` values for `row-gap` in `.hero-content`
`row-gap: 2rem` appears in both the base and mobile grid rules. `2rem` equals `--space-xl`, but the project mixes literal and token values for `row-gap` throughout. Replacing it would be a semantic improvement, not a pure deduplication, and was not in scope.

### 3. `0.75rem` border-radius values on `.content-card`, `.knowledge-card`, etc.
Several components use `border-radius: 0.75rem` as a literal value. There is no `--border-radius-card` or equivalent token defined in `:root`. Extracting this would require adding a new token, which is an architectural change beyond deduplication.

### 4. Scoped CSS in `KnowledgeEcosystem.astro` and `ExampleResources.astro`
Both components contain self-contained `<style>` blocks with no overlap with global.css classes. No duplication exists between them and the global stylesheet — nothing to merge.

### 5. `font-size: 0.95rem` and `font-size: 0.8rem` literals
These appear in responsive overrides for focus areas and meta titles. No design token covers sub-body font scale steps. Extracting these would require new token definitions — architectural work.

### 6. Duplicate `display: flex; flex-direction: column` in `ExampleResources.astro`
The `@media (max-width: 47.99rem)` block re-declares `display: flex; flex-direction: column` on `.example-resource`, which the base rule already sets. This is the same pattern as commit 1. It was identified but lives in a component's scoped `<style>` — skipped to stay within the "do not modify Astro components unless absolutely necessary" constraint, since this component is not global CSS.

---

## Future Opportunities

The following improvements were identified during this refactor but intentionally deferred. They are genuine opportunities, not speculative improvements. Each would require a deliberate decision rather than a mechanical operation.

### Split `global.css` into smaller files

`global.css` is currently a single file of ~1,100 lines covering reset rules, design tokens, layout primitives, every section's styles, and interactive component styles. It is readable but monolithic. A future session could split it into domain-specific files (tokens, layout, typography, components, case-study) imported from a single entry point. This would improve navigability without changing any selector or value. It is an organisational change rather than a CSS change, and deserves its own session.

### Reduce media query repetition

Several selectors appear in multiple `@media` blocks at the same breakpoint (e.g. two separate `@media (min-width: 768px)` blocks for case study and documentation showcase styles). This refactor addressed cases where the repetition produced duplicated declarations, but left the block structure intact. Consolidating breakpoint blocks — grouping all 768px rules into one block, all 1024px rules into another — would make the responsive behaviour easier to read as a whole. This is a safe but non-trivial reorganisation that warrants its own review.

### Introduce additional design tokens for recurring literals

A small set of hardcoded values appear multiple times across the stylesheet but have no corresponding token:

- `border-radius: 0.75rem` — used on `.content-card`, `.work-card`, `.knowledge-card`, `.interactive-figure-image`, and others. A `--radius-card` token would allow global rounding to be adjusted in one place.
- `border-radius: 0.5rem` — used on `.button`, `.navigation-toggle`, `.theme-switcher`, `.skip-link`. A `--radius-control` token would serve the same purpose for interactive controls.
- `font-size: 0.875rem` — appears in captions, footer text, and focus area labels. Whether this warrants a token depends on whether it carries consistent semantic meaning across those contexts.

Introducing tokens for these values requires a design decision about whether the sameness is intentional (the same semantic unit expressed in different places) or coincidental (values that happen to match today but could diverge). That decision should precede the code change.

### Replace remaining hardcoded spacing values in media queries

`row-gap: 2rem` appears in `.hero-content` base and mobile rules. `2rem` is numerically equal to `--space-xl`. The project already uses `--space-xl` elsewhere for equivalent spacing, but mixes literals and tokens for `row-gap`. A targeted pass to audit and align spacing in layout rules — replacing `2rem` and similar literals with their token equivalents — would complete the design token coverage started in commit 4.

### Address the `ExampleResources.astro` duplicate in a component refactor session

The `@media (max-width: 47.99rem)` block in `ExampleResources.astro` re-declares `display: flex; flex-direction: column` on `.example-resource`, which the base rule in the same `<style>` block already sets. This is the same pattern corrected in commit 1, but in a scoped component style. It was excluded from this session to avoid unnecessary component changes. It can be cleaned up in a future session that also reviews component-level CSS hygiene more broadly.
