# ADR-006 – Compose Header from Dedicated UI Components

## Status

Accepted

---

## Context

The global header originally contained multiple responsibilities:

- branding,
- primary navigation,
- future language controls,
- future theme controls.

As additional functionality was planned, the component would become increasingly difficult to maintain and evolve.

---

## Decision

The header is responsible only for composing the global layout.

Individual responsibilities are extracted into dedicated reusable components:

- `Navigation.astro`
- `LanguageSwitcher.astro`
- `ThemeSwitcher.astro`

Each component owns its own markup and styling while remaining independent from the others.

SVG icons used by the switchers are imported as Astro components, allowing them to inherit colors through `currentColor`.

---

## Consequences

### Advantages

- Smaller and easier-to-read `Header.astro`.
- Better separation of concerns.
- Components can evolve independently.
- Theme and language functionality can be implemented without modifying the header structure.
- Consistent SVG handling across the project.

### Trade-offs

- Introduces several additional components.
- Requires a few more imports.
- Slightly increases project structure complexity in exchange for significantly better maintainability.

---

## Alternatives considered

### Keep everything inside `Header.astro`

Rejected.

Although simpler initially, this approach would make the component increasingly difficult to maintain as language switching, theme switching and responsive navigation are introduced.

### Group switchers inside a single `HeaderControls` component

Rejected.

At the current project size this would introduce an unnecessary abstraction. Keeping the switchers as separate components follows the YAGNI principle while maintaining clear responsibilities.

---

## Decision outcome

The header now acts as a composition component, while navigation and UI controls are implemented as dedicated reusable components.

This architecture provides a clean foundation for implementing dark/light mode and multilingual support in future iterations.