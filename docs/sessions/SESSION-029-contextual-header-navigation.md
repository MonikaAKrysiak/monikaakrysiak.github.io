# Session 029 – Contextual Header Navigation

## Goal

Refactor the header so that navigation becomes page-specific instead of being hardcoded for the homepage.

The objective was to create a reusable architecture that allows every page (homepage, case studies, future hobby pages) to define its own navigation while keeping the header component generic.

---

# What we changed

## Contextual navigation

Introduced a shared `NavigationItem` type.

```ts
export interface NavigationItem {
	label: string;
	href: string;
}
```

Each page can now define its own navigation items and pass them to the layout.

---

## Layout API

Extended `Layout.astro` with a new optional prop:

```ts
navigationItems?: NavigationItem[];
```

The layout simply forwards the navigation to the header.

---

## Header simplification

`Header.astro` no longer decides whether the current page is the homepage.

Instead of checking the URL, it now renders navigation only when navigation items are provided.

Before:

- URL-based logic
- homepage-specific behavior

After:

- data-driven
- reusable
- page-agnostic

---

## Navigation component

`Navigation.astro` was refactored to render navigation from props instead of hardcoded links.

The component is now completely reusable.

---

## Homepage

The homepage now provides its own navigation:

- About
- Selected Work
- Hobbies
- Contact

These labels continue to come from the translation files.

---

## Portfolio case study

The Portfolio Website case study now defines its own local navigation:

- Overview
- Engineering Principles
- Design Decisions

The header automatically displays those items when the page is opened.

---

## Mobile navigation

Restored the mobile hamburger menu after the header refactor.

Implemented menu open/close behavior.

The menu now closes when:

- a navigation item is selected,
- the user clicks outside the header,
- the user presses `Escape`.

---

## Accessibility improvements

Improved mobile navigation accessibility.

Implemented:

- dynamic `aria-expanded`,
- dynamic `aria-label`,
- focus returned to the hamburger button after closing with `Escape`.

---

## Scrolling improvements

Added `scroll-margin-top` to case study sections.

This prevents sticky header overlap when navigating using anchor links.

---

# Architecture benefits

The header is now responsible only for presentation.

Navigation content is owned by each page.

Benefits:

- reusable architecture,
- easier future expansion,
- no homepage-specific logic inside the header,
- future hobby pages can define their own navigation without modifying shared components.

---

# Files modified

```
src/layouts/Layout.astro
src/components/Header.astro
src/components/Navigation.astro
src/pages/[lang]/index.astro
src/pages/[lang]/work/portfolio-website.astro
src/types/navigation.ts
src/styles/global.css
```

---

# Result

The website now supports contextual navigation while keeping the header generic.

Desktop and mobile navigation behave consistently, and the mobile menu follows common accessibility patterns.