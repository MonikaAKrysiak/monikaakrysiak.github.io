# ADR-012: Shared Contract for Navigable Sections

## Status

Accepted

---

## Context

Case study pages contain sections rendered in two different ways:

1. through the shared `CaseStudySection` component,
2. through specialised section components such as:

- DocumentationShowcase
- KnowledgeEcosystem
- ExampleResources
- KnowledgeInPractice
- WhatILearned

The portfolio provides:

- contextual section navigation,
- language switching that preserves the current section,
- sticky-header aware scrolling.

Previously only `CaseStudySection` consistently exposed all required metadata.

As a result, behaviour differed between pages.

---

## Decision

Every section referenced by `navigationItems` must expose:

```astro
<section
	id="section-id"
	data-language-section
>
```

The section `id` must match the navigation fragment:

```ts
{
	label: "...",
	href: "#section-id",
}
```

Shared scroll positioning is now implemented through:

```css
[data-language-section] {
	scroll-margin-top: calc(
		var(--header-height) + var(--space-md)
	);
}
```

Component-specific classes remain responsible only for layout and spacing.

---

## Rationale

The attribute creates a single contract shared by:

- contextual navigation,
- language switching,
- sticky-header scroll positioning.

This removes behavioural differences between generic and custom section components.

---

## Consequences

### Positive

- Consistent navigation across all case studies.
- Language switching preserves every navigable section.
- New section components automatically participate by following one rule.
- Scroll behaviour is independent of visual component classes.

### Negative

Developers must remember to expose:

- a stable section `id`,
- the `data-language-section` attribute.

---

## Implementation Rule

Every section referenced in `navigationItems` must render:

```astro
<section
	id="matching-navigation-fragment"
	data-language-section
>
```

When reviewing a new case study, verify that:

1. every navigation fragment points to an existing section,
2. every navigable section exposes `data-language-section`,
3. section IDs remain stable across languages,
4. section headings remain visible below the sticky header.