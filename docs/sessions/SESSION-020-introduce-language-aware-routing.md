# Session 020 – Introduce Language-aware Routing

## Goal

Connect the existing internationalisation system to the application routing so the selected language is determined by the URL instead of being hardcoded.

---

## What we changed

### Language-aware routing

Introduced the first language-specific routes.

The application now supports:

```text
/
/en
/pl
```

Created a dynamic Astro route:

```text
src/pages/[lang]/index.astro
```

using `getStaticPaths()` to generate the supported language versions during build.

---

### Homepage refactoring

Extracted the homepage into a dedicated component.

Created:

```text
src/components/HomePage.astro
```

The homepage implementation now exists in a single place and is shared by every language route.

This separates:

- routing,
- layout,
- page content.

---

### Language propagation

Established a consistent language flow throughout the application.

```text
URL
    ↓
[lang]
    ↓
Layout
    ↓
Header
    ↓
Navigation
    ↓
HomePage
```

Language is now propagated using component props instead of hardcoded values.

---

### Navigation translations

The navigation now retrieves its labels from the translation system.

Translated items:

- About
- Selected Work
- Contact

---

### Hero translations

The Hero section now uses translated content for:

- role,
- statement,
- primary button,
- secondary button.

The same component is rendered for every language.

---

### About translations

The About section is now fully translated.

Instead of rendering four hardcoded paragraphs, the component now iterates over translated content:

```astro
{
	t.about.paragraphs.map((paragraph) => (
		<p class="section-text">
			{paragraph}
		</p>
	))
}
```

This cleanly separates layout from content and allows the number of paragraphs to evolve without modifying the component.

---

### Contact translations

The Contact section now uses translated:

- section heading,
- introductory text.

Static information remains language-independent:

- email address,
- LinkedIn,
- GitHub.

---

### Selected Work

Prepared the component for internationalisation.

The section heading is now translated.

The work cards themselves intentionally remain backed by static data.

This decision postpones content localisation until a dedicated data architecture is introduced.

---

## Architectural outcome

The project now has a clear separation of responsibilities.

```text
pages
    → routing

layouts
    → page layout

components
    → presentation

i18n
    → UI translations

data
    → content
```

This distinction prepares the project for scalable multilingual content while keeping the user interface independent from business data.

---

## Lessons learned

This session demonstrated that internationalisation is not only about translating strings.

A proper i18n architecture requires:

- URL-based routing,
- language propagation through the component tree,
- separation between UI translations and content,
- reusable page components without code duplication.

The project now follows this architecture consistently.

---

## Next steps

The next session will focus on translating portfolio content itself.

Planned work:

- move Selected Work content into language-specific data files,
- introduce `getWork(lang)`,
- render work cards from data,
- connect the language switcher with route changes,
- implement automatic language detection and redirect from `/`.