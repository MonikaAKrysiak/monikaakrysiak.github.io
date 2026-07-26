# Session 033 – Knowledge Sharing Case Study

## Goal

Expand the "Teaching & Knowledge Sharing" case study into a complete project page and align it with the architecture used by the other case studies.

---

## Content architecture

Completed the remaining sections of the case study.

The page now consists of:

- Overview
- Audiences
- Examples
- Impact
- Learnings

Each section follows the same structure and visual language as the other case studies.

---

## Navigation

Added contextual navigation for the Knowledge Sharing case study.

The local navigation now links directly to:

- Overview
- Audiences
- Examples
- Impact
- Learnings

The navigation integrates with the global header introduced in previous sessions.

---

## Reflection section

Added the final **Learnings** section.

The content focuses on:

- making complex systems understandable,
- reducing onboarding time,
- designing documentation for different audiences,
- treating knowledge sharing as an engineering activity rather than an afterthought.

---

## Localisation

Completed both language versions.

Updated:

- `en.ts`
- `pl.ts`

including section titles and content for the reflection section.

---

## CV redesign

Redesigned the downloadable CV to match the portfolio visual identity.

Changes include:

- updated colour palette,
- improved typography,
- cleaner layout,
- stronger consistency with the website.

The updated PDF replaced:

```
public/cv/monika-krysiak-cv.pdf
```

---

## PDF investigation

While testing, the downloaded CV appeared blank.

Investigation included:

- verifying the file size,
- comparing SHA-256 hashes,
- confirming Astro served the correct file,
- eliminating application-related causes.

The issue was traced to a corrupted Canva export.

Re-exporting the PDF resolved the problem.

---

## Outcome

The Knowledge Sharing case study is now complete and follows the same architecture as the remaining case studies.

The downloadable CV is visually consistent with the portfolio and works correctly.