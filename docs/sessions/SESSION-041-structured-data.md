# Session 041 – Structured Data

## Goal

Implement reusable structured data across the portfolio to improve SEO and help search engines better understand the website and its content.

---

## What was implemented

### Reusable JSON-LD generator

Created a central structured data generator in:

`src/data/structured-data.ts`

Instead of defining JSON-LD separately for every page, the entire website now uses a single reusable generator.

---

### Website schema

Implemented reusable support for:

- WebSite
- Person
- WebPage

Every entity is connected through stable `@id` references.

---

### TechArticle schema

Extended the generator with optional article metadata for case studies.

Case study pages now expose:

- TechArticle
- keywords
- about
- image
- author
- publisher
- mainEntityOfPage
- isPartOf

The implementation is reusable and requires only article-specific keywords on each page.

---

### Shared types

Created a shared:

`ArticleStructuredData`

interface exported directly from:

`src/data/structured-data.ts`

This removed duplicated type definitions from the layout and simplified maintenance.

---

### Layout integration

`Layout.astro` now automatically generates structured data for every page.

Pages only provide:

- SEO metadata
- optional article metadata

The JSON-LD graph is assembled automatically.

---

### Validation

Performed full validation using:

- Astro production build
- Schema Markup Validator

Verified:

Homepage

- WebSite
- Person
- WebPage

Case studies

- WebSite
- Person
- WebPage
- TechArticle

Validated:

- English pages
- Polish pages

Results:

- 0 Errors
- 0 Warnings

---

## Files modified

- `src/data/structured-data.ts`
- `src/layouts/Layout.astro`
- `src/pages/[lang]/index.astro`
- `src/pages/[lang]/work/portfolio-website.astro`
- `src/pages/[lang]/work/security-knowledge-base.astro`
- `src/pages/[lang]/work/beyond-testing.astro`
- `src/pages/[lang]/work/knowledge-sharing.astro`

---

## Result

The portfolio now exposes standards-compliant structured data using Schema.org.

The implementation is reusable, maintainable and easily extensible with additional schema types in the future.