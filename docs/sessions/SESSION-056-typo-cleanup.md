# Session 56 — Typography cleanup across the portfolio

## Goal

Improve text wrapping across the portfolio by preventing short words from being left alone at the end of lines in both Polish and English content.

## Changes

- Extended the shared `formatTypography()` helper for both PL and EN.
- Added support for Polish short words and conjunctions such as:
  - `a`, `i`, `w`, `z`
  - `do`, `na`, `po`, `od`
  - `że`, `się`, `nie`, `ale`
  - and other frequently occurring short words.
- Added English short-word handling for words such as:
  - `a`, `an`, `and`
  - `in`, `of`, `on`, `to`
  - `the`, `for`, `I`
  - and other short connectors.
- Updated the Polish regex to use Unicode-aware word detection so words containing Polish characters, such as `że`, are handled correctly.
- Applied typography formatting to:
  - homepage hero and About section,
  - Selected Work cards,
  - Hobbies cards,
  - Work case studies,
  - Travel page,
  - DIY page,
  - Tabletop Games page,
  - Photography page,
  - AI disclosure tooltip.
- Added formatting to nested content such as:
  - story titles and summaries,
  - paragraphs,
  - highlight cards,
  - quotes,
  - gallery introductions,
  - external descriptions.
- Improved long card-title wrapping in `KnowledgeEcosystem` using `text-wrap: balance`.
- Adjusted desktop positioning of knowledge-card headers to give long Polish titles more breathing room.
- Replaced em dashes (`—`) with hyphens (`-`) across `src`.

## Accessibility

Typography formatting is applied only to visible text content.

Accessibility labels, image alt text, navigation labels and ARIA text were intentionally left unchanged unless they were already part of visible content.

## Architecture

No architectural changes.

No ADR required.