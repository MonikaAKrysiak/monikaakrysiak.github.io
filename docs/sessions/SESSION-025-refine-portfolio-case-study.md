# Session 025 – Refine Portfolio Website Case Study

## Goal

Improve the presentation of the "Portfolio Website" case study by making the engineering principles easier to scan, visually more engaging and consistent across desktop and mobile layouts.

---

## What we changed

### Project introduction

Refined the introduction layout by separating the project overview from the engineering-related content.

A horizontal divider now clearly separates:

- Project overview
- Engineering principles
- Design decisions

This improves readability and creates a more consistent visual rhythm throughout the page.

---

### Engineering Principles cards

Introduced a reusable `EngineeringPrincipleCard` component.

Each engineering principle is now displayed as an individual card instead of a continuous block of text.

Benefits:

- easier scanning,
- better visual hierarchy,
- reusable component for future case studies.

---

### Icons

Added dedicated local SVG icons for each engineering principle.

Icons are passed as component props instead of being embedded directly inside the component.

Current icon set:

- Security by Default
- Architecture Before Implementation
- Accessibility by Design
- Documentation as Part of Development

This keeps the component generic while allowing every page to decide which icon should be displayed.

---

### Responsive layout

Engineering principles are now displayed:

- one column on mobile,
- two-column grid on larger screens.

Spacing between cards was refined to improve vertical rhythm.

---

### Content refinement

Engineering principle descriptions were shortened in both languages.

Instead of two paragraphs per principle, every card now contains a single concise explanation.

Benefits:

- improved readability,
- more balanced card heights,
- better mobile experience.

---

### Visual polish

Improved card presentation by:

- placing icons next to section titles,
- refining spacing,
- introducing consistent separators between major sections.

The engineering section now visually matches the rest of the case study.

---

## Architecture decisions

The language files remain responsible only for textual content.

Icons are intentionally selected inside the Astro page rather than stored inside translation data.

This keeps translations independent from presentation concerns.

---

## Result

The "Portfolio Website" case study now presents the project's engineering principles in a much cleaner, more professional and easier-to-read way while keeping the architecture reusable for future case studies.