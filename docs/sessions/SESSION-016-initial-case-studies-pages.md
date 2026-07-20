# Session 017 – Build Initial Case Study Pages
## Goal

Expand the "Selected Work" section into a collection of reusable case studies while establishing a consistent structure for future project pages.

## What we changed
New case study pages

Created three new case study pages:

security-knowledge-base.astro
beyond-testing.astro
knowledge-sharing.astro

Each page follows the same structure as the existing Portfolio Website case study, making the experience consistent across the portfolio.

## Content

### Prepared the initial content for each case study.

### OWASP ASVS Knowledge Base

Introduced a case study describing an internal security initiative focused on making OWASP ASVS practical for QA engineers and development teams.

Topics include:

practical security guidance,
onboarding materials,
internal documentation,
knowledge sharing,
application security.
Beyond Testing

### Created a case study focused on responsibilities extending beyond traditional QA.

Topics include:

quality engineering,
business analysis,
product thinking,
collaboration,
improving software quality before implementation.
Teaching & Knowledge Sharing

### Added a case study presenting educational and community activities.

Topics include:

onboarding,
documentation,
conference talks,
mentoring,
knowledge sharing.
CaseStudyHeader improvements

## Refactored the component to support an optional secondary action.

Instead of assuming every project exposes a GitHub repository, the component now allows a case study to:

display an external resource,
or omit the action entirely.

This makes the component reusable for both public and internal projects.

Layout refinements

Improved the presentation of focus areas.

## Changes include:

limiting the maximum width of the list,
reducing vertical spacing between wrapped rows,
creating a more compact visual grouping on larger screens.
CSS cleanup

## Performed several small refactors:

grouped shared selectors,
removed duplicated declarations,
simplified spacing rules,
improved overall consistency.
Decisions
Treat case studies as independent stories rather than technical projects.
Allow case studies to have an optional secondary action instead of requiring a GitHub repository.
Keep the same visual structure across all case studies to improve consistency.
Present focus areas as concepts rather than technologies when appropriate.
Result

The portfolio now contains four consistent case studies representing different aspects of professional experience:

Building This Portfolio
OWASP ASVS Knowledge Base
Beyond Testing
Teaching & Knowledge Sharing

The project now moves beyond a simple portfolio website and starts presenting a broader engineering profile through structured case studies.