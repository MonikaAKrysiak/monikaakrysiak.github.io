# Session 013 – Contact Section

## Goal

Create a semantic and responsive contact section with direct links to email and professional profiles.

---

## What was implemented

### Contact section

Added a new `Contact` section containing:

- a section heading,
- a short introductory message,
- an email link,
- a LinkedIn link,
- a GitHub link.

The section uses the existing shared layout and typography styles.

### Semantic structure

The contact details are wrapped in an `<address>` element.

The links are presented as an unordered list because they form a group of related contact methods.

### Email link

The email address uses a `mailto:` link:

```astro
<a href="mailto:your-email@example.com">