# Session 027 – Introduce Reusable InteractiveFigure Component

## Goal

Improve the presentation of screenshots by introducing a reusable image component with a native lightbox while keeping the implementation accessible, dependency-free and reusable across the entire portfolio.

---

## What we changed

### Introduced `InteractiveFigure`

Created a new reusable component:

```
src/components/InteractiveFigure.astro
```

The component encapsulates:

- semantic `<figure>`
- optional `<figcaption>`
- native `<dialog>` lightbox
- accessibility attributes
- localized labels

Its public API intentionally remains small:

```astro
<InteractiveFigure
	lang={language}
	src={image}
	alt="..."
	caption="..."
/>
```

---

### Native image lightbox

Implemented image preview using the HTML `<dialog>` element instead of a third-party library.

Supported interactions include:

- opening the preview by clicking the image,
- closing with the close button,
- closing with the Escape key,
- closing by clicking outside the dialog content.

Using the native dialog keeps the implementation lightweight while providing good browser accessibility support.

---

### Improved accessibility

Added accessibility features to improve both keyboard and screen reader support.

The component now includes:

- `aria-haspopup="dialog"`
- localized `aria-label` values
- `aria-describedby` for image captions
- automatic keyboard focus restoration after closing the dialog

This ensures that keyboard users return to the image they originally opened.

---

### Extracted client-side behaviour

Moved all dialog logic into a dedicated script:

```
src/scripts/image-lightbox.ts
```

The script is responsible for:

- opening dialogs,
- closing dialogs,
- backdrop click handling,
- keyboard focus restoration.

Keeping JavaScript separate from the Astro component makes the markup easier to read and the behaviour reusable.

---

### Generalized the component

The original component:

```
CaseStudyFigure
```

was renamed to:

```
InteractiveFigure
```

This makes it independent from case study pages and ready for reuse across future portfolio sections, including:

- Travel
- DIY
- Photography
- Tabletop Games

without requiring any additional implementation.

---

### CSS refactoring

Renamed all component-specific CSS classes from:

```
case-study-figure-*
```

to:

```
interactive-figure-*
```

The styling now reflects the component's generic purpose rather than a specific page type.

The dialog sizing was also improved so backdrop clicks behave naturally regardless of image dimensions.

---

### Replaced existing implementations

Updated existing portfolio screenshots to use the new reusable component.

Both the main case study screenshot and evidence images now share the same implementation, ensuring a consistent user experience throughout the project.

---

## Result

The portfolio now provides a reusable, accessible and dependency-free solution for interactive images.

The implementation combines semantic HTML, native browser capabilities and a small public API, making the component easy to reuse throughout the website while keeping maintenance simple.