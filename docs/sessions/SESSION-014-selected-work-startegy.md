# Session 014 — Selected Work Strategy

## Goal

Transform the portfolio from a collection of example projects into a collection of meaningful case studies representing key areas of expertise.

---

## What was implemented

### Section redesign

The previous **Projects** section was redesigned into **Selected Work**.

The new section presents four major areas of professional experience instead of example projects.

Current cards:

- Bringing Security into Everyday QA
- Beyond Testing
- Teaching & Knowledge Sharing
- Building This Portfolio

---

### Component refactoring

The data model evolved to better reflect the new purpose.

Changes:

- `technologies` → `focusAreas`
- "View project" → "Read case study"

The terminology now better represents professional domains instead of software technologies.

---

### Component naming

Initial refactoring started:

- `Projects.astro` → `SelectedWork.astro`

The project terminology now matches the portfolio structure.

---

## Design decisions

A portfolio should not simply list projects.

Instead, it should communicate the areas where I provide the greatest value.

The Selected Work section is organised around four stories:

1. Bringing Security into Everyday QA
2. Beyond Testing
3. Teaching & Knowledge Sharing
4. Building This Portfolio

Each card will eventually lead to a dedicated case study page.

---

## Outcome

The portfolio now better reflects my professional identity instead of presenting generic example projects.

This session established the long-term information architecture for the Work section.