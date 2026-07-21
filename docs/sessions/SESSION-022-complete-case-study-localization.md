# Session 022 – Complete Case Study Localization

## Goal

Finish the multilingual architecture by migrating all remaining case studies to the new localization system.

---

# What we changed

## Completed localization of all case studies

Migrated the remaining case studies:

- Beyond Testing
- Teaching & Knowledge Sharing

Each case study now follows exactly the same architecture.

```
src/data/
└── case-studies/
    └── <case-study>/
        ├── en.ts
        ├── pl.ts
        └── index.ts
```

Each page now loads its localized content through a dedicated data provider instead of embedding text directly inside Astro components.

---

## Localized page structure

Each localized page now:

- generates `/en/...` and `/pl/...` routes,
- loads content using `get<CaseStudy>()`,
- passes the current language to `Layout`,
- renders reusable presentation components using localized data.

The Astro pages now act primarily as composition layers.

---

## Localized header actions

Where appropriate, action buttons were moved into localized content.

Examples:

- GitHub repository
- Google Scholar profile

This keeps all user-facing text inside translation files instead of page components.

---

## Localized overview sections

Overview titles and paragraphs are now stored inside localized data.

The reusable rendering pattern became:

```astro
<CaseStudySection
	id="overview"
	title={caseStudy.overview.title}
>
	{caseStudy.overview.paragraphs.map((paragraph) => (
		<p class="case-study-text">
			{paragraph}
		</p>
	))}
</CaseStudySection>
```

---

## Language switcher

Refactored the language switcher from static buttons into navigation links.

The component now:

- preserves the current page,
- switches only the language prefix,
- highlights the active language,
- works consistently across homepage and case studies.

---

## Header improvements

Updated the header to:

- pass the current language into `LanguageSwitcher`,
- correctly recognize the homepage,
- preserve navigation behaviour after introducing localized routes.

---

# Result

The portfolio now uses one consistent multilingual architecture.

```
src/i18n
        ↓
UI translations

src/data/work
        ↓
Selected Work

src/data/case-studies
        ↓
Case study content

pages
        ↓
Composition only
```

Adding another language or another case study now requires minimal changes while keeping the existing architecture unchanged.

---

# Next steps

Planned improvements:

- automatic language detection (`Accept-Language`),
- redirect from `/` to `/en` or `/pl`,
- canonical URLs,
- SEO improvements.