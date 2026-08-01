# Session 048 – Adopt SubpageLayout in Case Studies

## Goal

Remove duplicated page structure from all case studies by introducing a shared `SubpageLayout`.

The objective was to make all content subpages use the same layout architecture while preserving existing functionality, SEO metadata and styling.

---

## Changes

### Extended `SubpageLayout`

The shared layout was enhanced to support:

- `seo`
- `articleStructuredData`
- optional `className`

`SubpageLayout` now forwards all metadata to `Layout` and renders a common page structure:

- `<main>`
- `.container`
- `id="main-content"`
- `tabindex="-1"`

---

### Migrated case studies

The following pages were migrated:

- Beyond Testing
- Knowledge Sharing
- Portfolio Website
- OWASP ASVS Knowledge Base

Each page now uses:

```astro
<SubpageLayout
	lang={language}
	navigationItems={navigationItems}
	seo={seo}
	articleStructuredData={articleStructuredData}
	className="case-study section"
>
```

instead of duplicating:

- `Layout`
- `<main>`
- `.container`

---

## Benefits

- Reduced duplicated page structure.
- Consistent architecture across all content pages.
- Easier maintenance.
- Easier creation of future subpages.
- Shared accessibility improvements in a single location.
- Shared SEO handling.

---

## Verification

Verified:

- all four case studies
- Photography page
- skip link
- section navigation
- SEO metadata
- successful production build

No visual changes were introduced.

---

## Result

All content subpages now share a single layout architecture.

`Layout` remains the global application layout.

`SubpageLayout` becomes the standard entry point for all internal content pages.