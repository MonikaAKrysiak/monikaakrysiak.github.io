# Session 021 – Localize the First Case Study

## Goal

Introduce the localization architecture for case study pages by migrating the Portfolio Website case study to language-specific content files.

---

## What we changed

### Localized routing

Created localized routes for the first case study:

- `/en/work/portfolio-website`
- `/pl/work/portfolio-website`

using Astro's dynamic language routing together with `getStaticPaths()`.

---

### Case study content structure

Introduced the first localized case study data module:

```text
src/data/
└── case-studies/
    └── portfolio-website/
        ├── en.ts
        ├── pl.ts
        └── index.ts
```

The page no longer contains hardcoded content.

Instead, it retrieves localized data through:

```ts
getPortfolioWebsite(lang)
```

---

### Structured content model

Instead of storing all properties in a flat object, the case study now mirrors the page structure.

```ts
portfolioWebsite = {
	header: { ... },
	overview: { ... },
	figures: { ... },
}
```

This makes future extensions straightforward while keeping the page component simple.

---

### Header localization

Moved the following content into localized data:

- title
- summary
- focus areas
- action button

The `CaseStudyHeader` component now receives all content through props.

---

### Overview localization

The Overview section was migrated into localized data.

Each language now defines:

- section title
- paragraphs

The page renders paragraphs dynamically.

---

### Figure localization

Moved image metadata into localized data:

- alt text
- caption

This ensures that both visible content and accessibility information are translated consistently.

---

## Architecture

The project now follows a consistent separation of responsibilities:

- `src/i18n` → interface translations
- `src/data` → localized content
- Components → presentation
- Pages → composition

---

## Benefits

- No hardcoded content inside page components.
- Easier maintenance.
- Better scalability for additional case studies.
- Accessibility metadata is localized together with content.
- Future languages can be added without changing components.

---

## Next steps

Apply the same localization architecture to the remaining case studies:

- Security Knowledge Base
- Beyond Testing
- Teaching & Knowledge Sharing

After all case studies are migrated, the entire portfolio will use one consistent localization model.