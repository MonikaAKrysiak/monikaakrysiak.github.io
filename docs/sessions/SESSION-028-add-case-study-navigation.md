# Session 028 – Add Case Study Navigation

## Goal

Improve navigation between case studies by introducing reusable previous/next navigation while keeping the architecture simple, accessible and scalable.

---

## What we changed

### New `CaseStudyNavigation` component

Created a reusable component displayed at the end of every case study.

The component provides:

- navigation to the previous case study,
- navigation to the next case study,
- a link back to the **Selected Work** section.

The component intentionally accepts only the data required for rendering.

```ts
interface NavigationLink {
	href: string;
	label: string;
}

interface Props {
	previous?: NavigationLink;
	next?: NavigationLink;
	allWork: NavigationLink;
}
```

This keeps the component independent from the internal `WorkItem` model.

---

### Adjacent navigation helper

Added a new helper:

```ts
getAdjacentWork(language, currentHref)
```

The helper determines the previous and next case study based on the order defined in the localized work data.

Navigation order is now maintained in a single place.

---

### Integration with case studies

Integrated `CaseStudyNavigation` into every case study page:

- Security Knowledge Base
- Beyond Testing
- Teaching & Knowledge Sharing
- Portfolio Website

Verified all navigation scenarios:

- only **Next**,
- **Previous + Next**,
- only **Previous**.

---

### Responsive layout

Designed the navigation to adapt naturally to different screen sizes.

#### Mobile

Navigation links are displayed vertically.

```text
← Previous

Next →

View all selected work
```

#### Desktop

Navigation links are displayed horizontally.

```text
← Previous                         Next →

      View all selected work
```

When only one navigation direction exists, the "View all selected work" link remains left-aligned.

---

### Accessibility

Improved accessibility by:

- wrapping navigation inside a semantic `<nav>` element,
- providing descriptive `aria-label` values for Previous and Next links,
- preserving a natural keyboard navigation order,
- avoiding unnecessary ARIA attributes where visible text already provides sufficient context.

---

### UX improvements

Added a dedicated section identifier:

```html
<section id="case-study-start" class="case-study case-study-page section">
```

This ensures that navigation consistently opens each case study from the beginning.

Improved keyboard focus appearance by preventing the "View all selected work" link from stretching across the entire container.

---

### Internationalization

Separated translations for:

- `BackLink`
- `CaseStudyNavigation`

Although both navigate to the same destination, they represent different user actions.

This avoids coupling unrelated UI elements while keeping translation keys semantically meaningful.

---

## Architecture review

After completing this session, the reusable case study platform consists of:

- BackLink
- CaseStudyHeader
- CaseStudySection
- CaseStudyContent
- CaseStudyFigure
- InteractiveFigure
- EngineeringPrincipleCard
- DesignDecisionCard
- CaseStudyEvidence
- CaseStudyNavigation

The architecture is now complete enough to support future case studies without introducing additional layout components.

---

## Lessons learned

Several small UX improvements emerged during implementation:

- navigation should adapt to both mobile and desktop layouts,
- keyboard focus should match the visible width of interactive elements,
- components should receive only the data they actually need,
- sharing translation keys is not always desirable—component intent is more important than destination.

---

## Result

The portfolio now provides a consistent navigation experience across all case studies.

Future projects can be added simply by extending the localized work data, with navigation being generated automatically by the existing architecture.