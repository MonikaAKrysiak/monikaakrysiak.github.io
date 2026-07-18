# Session 07 – Responsive layout foundation

## Goal

Improve the Hero section for different screen sizes while building a scalable responsive typography system.

---

## Completed

### Hero layout

- introduced a dedicated `.hero-content` wrapper
- separated section responsibilities from content responsibilities
- limited content width using `max-width`
- centered content with `margin-inline: auto`

### Typography system

- moved typography values into design tokens
- introduced typography tokens:
  - `--font-size-display`
  - `--font-size-heading`
  - `--font-size-body-large`
  - `--font-size-button`
  - `--line-height-display`
  - `--line-height-body`
- updated Hero to use typography tokens instead of hardcoded values

### Responsive design

- introduced the first responsive breakpoint
- scaled typography using design tokens instead of component-specific styles
- verified layout at:
  - 320 px
  - 375 px
  - 768 px
  - 1440 px

### Buttons

- introduced button typography token
- improved visual balance between Hero typography and button labels

---

## Lessons learned

- Components should consume design tokens instead of hardcoded values.
- Responsive typography should be managed by the design system rather than individual components.
- `max-width` controls content width while allowing the section background to span the full viewport.
- `margin-inline: auto` is the modern way to horizontally center block elements.