# Session 016 – Build Initial Case Study Pages

## Goal

Expand the **Selected Work** section into a collection of structured case studies while establishing a consistent foundation for future project pages.

---

## What we changed

### New case study pages

Created three new case study pages:

- `security-knowledge-base.astro`
- `beyond-testing.astro`
- `knowledge-sharing.astro`

Each page follows the same structure as the existing Portfolio Website case study, providing a consistent reading experience across the portfolio.

---

### Initial case study content

Prepared the first version of the content for each case study.

#### OWASP ASVS Knowledge Base

Introduced a case study describing an internal security initiative focused on making OWASP ASVS practical for QA engineers and development teams.

Focus areas:

- practical security guidance,
- onboarding materials,
- internal documentation,
- knowledge sharing,
- application security.

---

#### Beyond Testing

Created a case study presenting responsibilities extending beyond traditional QA activities.

Focus areas:

- quality engineering,
- business analysis,
- product thinking,
- cross-functional collaboration,
- improving software quality before implementation.

---

#### Teaching & Knowledge Sharing

Added a case study highlighting educational and community activities.

Focus areas:

- onboarding,
- documentation,
- conference talks,
- mentoring,
- knowledge sharing.

---

### CaseStudyHeader improvements

Refactored the component to support an optional action.

Instead of assuming every case study links to a GitHub repository, the component can now:

- display an external resource,
- or omit the action entirely.

This makes the component reusable for both public and internal projects.

---

### Layout refinements

Improved the presentation of focus areas.

Changes include:

- limiting the maximum width of the list,
- reducing spacing between wrapped rows,
- creating a more compact visual layout on larger screens.

---

### CSS cleanup

Performed several small refactors to improve maintainability.

Changes include:

- grouping shared selectors,
- removing duplicated declarations,
- simplifying spacing rules,
- improving naming consistency.

---

## Decisions

- Treat case studies as independent professional stories rather than technical projects.
- Allow case studies to expose an optional action instead of requiring a GitHub repository.
- Keep the same visual structure across all case studies.
- Present focus areas as concepts instead of technologies where appropriate.

---

## Result

The portfolio now contains four structured case studies representing different aspects of professional experience:

- Portfolio Website
- OWASP ASVS Knowledge Base
- Beyond Testing
- Teaching & Knowledge Sharing

The project now moves beyond a simple portfolio website and begins presenting a broader engineering profile through consistent, reusable case studies.