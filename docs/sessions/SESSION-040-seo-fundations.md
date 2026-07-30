# Session 040 – SEO Foundation

## Goal

Build a complete SEO foundation for the portfolio by introducing reusable metadata, social sharing support and technical SEO configuration.

---

## Completed

### Reusable SEO architecture

Extended `Layout.astro` with reusable SEO support.

Added:

- dynamic page title
- meta description
- canonical URL
- robots directive
- Open Graph metadata
- Twitter Cards
- configurable SEO props

Created sensible defaults while allowing individual pages to override metadata.

---

### SEO data

Created:

`src/data/seo.ts`

Centralised SEO metadata for the entire portfolio.

Implemented metadata for:

- Homepage
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

Each page now provides:

- unique title
- unique description
- canonical URL
- Open Graph metadata
- Twitter Card metadata

---

### Metadata improvements

Refined page titles and descriptions to improve clarity, consistency and search engine visibility.

Descriptions were updated to:

- avoid duplication,
- better represent page content,
- naturally include relevant keywords,
- improve browser and search result presentation.

---

### XML Sitemap

Added the official Astro Sitemap integration.

Configured:

- `@astrojs/sitemap`
- `astro.config.mjs`

Verified generation of:

- `sitemap-index.xml`
- `sitemap-0.xml`

---

### robots.txt

Created:

`public/robots.txt`

Configured:

```text
User-agent: *
Allow: /

Sitemap: https://monikaakrysiak.github.io/sitemap-index.xml
```

---

### Favicon support

Reviewed the favicon configuration.

Confirmed support for:

- `favicon.svg`
- `favicon.ico`

Added an ICO fallback for improved browser compatibility.

---

### Social sharing

Verified complete support for:

- Open Graph
- Twitter Cards
- social preview image (`og-image.png`)
- localized Open Graph locale

---

### Verification

Verified using browser DevTools and a production build.

Confirmed:

- dynamic page titles
- descriptions
- canonical URLs
- author metadata
- robots directive
- Open Graph metadata
- Twitter Cards
- generated sitemap
- robots.txt

All metadata changes correctly between localized pages and case studies.

---

## Files modified

- `astro.config.mjs`
- `src/layouts/Layout.astro`
- `src/data/seo.ts`
- `src/pages/[lang]/index.astro`
- `src/pages/[lang]/work/portfolio-website.astro`
- `src/pages/[lang]/work/security-knowledge-base.astro`
- `src/pages/[lang]/work/beyond-testing.astro`
- `src/pages/[lang]/work/knowledge-sharing.astro`
- `public/robots.txt`

---

## Result

The portfolio now includes a complete SEO foundation:

- reusable metadata architecture,
- canonical URLs,
- Open Graph,
- Twitter Cards,
- XML sitemap,
- robots.txt,
- favicon support.

The website is ready for indexing and professional social sharing previews.

---

## Next session

Session 041 – Structured Data (JSON-LD)

Planned work:

- Person schema
- WebSite schema
- structured data validation
- schema review for case studies