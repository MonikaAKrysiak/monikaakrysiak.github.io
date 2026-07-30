# Session 026 – Design Decisions Evidence

## Goal

Complete the "Design Decisions" section of the Portfolio Website case study by introducing technical evidence for every engineering decision while keeping the architecture fully data-driven.

---

## What we changed

### Expanded Design Decisions

Completed four engineering decision cards:

- Security by Default
- Architecture Before Implementation
- Accessibility by Design
- Documentation as Part of Engineering

Each card now contains:

- description,
- implemented practices,
- localized evidence metadata,
- supporting screenshots.

---

### Evidence architecture

Instead of embedding screenshots inside translation files, evidence images remain part of the presentation layer.

Translation files contain only:

- captions,
- alt texts.

The Astro page maps image assets using stable decision identifiers.

```ts
const designDecisionEvidenceImages = {
	...
};
```

This keeps content independent from implementation details.

---

### Accessibility evidence

Added evidence demonstrating accessibility practices.

Examples include:

- semantic HTML document structure,
- accessible mobile navigation controls using ARIA.

---

### Documentation evidence

Added engineering documentation examples.

Evidence includes:

- Architecture Decision Record,
- Development Session Log.

These demonstrate that documentation is treated as an engineering activity rather than an afterthought.

---

### Assets

Added new screenshots covering:

- project architecture,
- accessibility,
- documentation.

The asset naming follows a consistent convention.

---

## Result

The Portfolio Website case study now documents engineering decisions using concrete technical evidence instead of descriptive text alone.

Each design decision is supported by localized explanations and implementation examples while maintaining a clean separation between content and presentation.