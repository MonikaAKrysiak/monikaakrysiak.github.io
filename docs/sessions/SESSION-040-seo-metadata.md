# Session 040 – SEO Metadata Foundation

## Goal

Introduce a reusable SEO metadata system for the entire portfolio and apply it to the homepage and all case studies.

---

## Completed

### Layout

Extended `Layout.astro` with reusable SEO support.

Added:

- dynamic page title
- meta description
- canonical URL
- robots
- Open Graph metadata
- Twitter Cards
- configurable SEO props

Created sensible defaults while allowing individual pages to override metadata.

---

### SEO data

Created:

`src/data/seo.ts`

Centralised all page metadata in one place.

Implemented:

- homepage
- Portfolio Website
- OWASP ASVS Knowledge Base
- Beyond Testing
- Knowledge Sharing

Each page now exposes:

- title
- description

through dedicated helper functions.

---

### Homepage

Connected homepage SEO metadata.

Added:

- page title
- description

Passed metadata into the global layout.

---

### Case studies

Applied dedicated metadata to every case study.

Each page now has:

- unique title
- unique description
- canonical URL
- Open Graph title
- Open Graph description
- Twitter Card metadata

---

### Metadata improvements

Refined page titles for better browser usability.

Examples:

- Monika Krysiak – QA Engineer
- Portfolio Website – Monika Krysiak
- OWASP ASVS Knowledge Base – Monika Krysiak
- Beyond Testing – Monika Krysiak
- Knowledge Sharing – Monika Krysiak

Descriptions were rewritten to:

- avoid duplication,
- improve readability,
- better represent page content,
- include relevant keywords naturally.

---

### Verification

Verified in browser DevTools:

- title
- description
- canonical
- author
- robots
- Open Graph
- Twitter metadata

Confirmed metadata changes correctly between all pages.

---

## Files modified

- `src/layouts/Layout.astro`
- `src/data/seo.ts`
- `src/pages/[lang]/index.astro`
- `src/pages/[lang]/work/portfolio-website.astro`
- `src/pages/[lang]/work/security-knowledge-base.astro`
- `src/pages/[lang]/work/beyond-testing.astro`
- `src/pages/[lang]/work/knowledge-sharing.astro`

---

## Next session

Session 041 – Technical SEO

Planned work:

- robots.txt
- sitemap.xml
- favicon review
- Open Graph image