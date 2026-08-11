# Session 55 — AI disclosure in footer

## Goal

Add a subtle and accessible AI disclosure to the portfolio footer without expanding the footer layout or introducing a modal.

## Changes

- Added localized AI disclosure content:
  - PL: `Wykorzystanie AI`
  - EN: `AI disclosure`
- Added disclosure information explaining that AI is used as a supporting tool for:
  - selected illustrations,
  - anonymisation of materials presented in case studies.
- Clarified that the experience, projects and work described in the portfolio reflect actual activities.
- Added an accessible disclosure trigger next to the copyright information.
- Implemented disclosure interaction for:
  - mouse hover,
  - keyboard focus,
  - click/tap,
  - `Escape` to close,
  - click outside to close.
- Styled the disclosure as a small popover rather than a modal.
- Added light/dark theme-compatible styling using existing design tokens.
- Increased spacing between the copyright information and the AI disclosure.

## Files changed

- `src/components/Footer.astro`
- `src/i18n/...` — PL/EN translations
- `src/styles/global.css`

## Accessibility

The disclosure is not hover-only. It can also be accessed with the keyboard and on touch devices.

## Architecture

No architectural changes.

No ADR required.