# Portfolio Project

## Purpose

This repository contains my personal portfolio website.

The project has two equally important goals:

1.  Build a professional portfolio presenting my experience as a QA
    Engineer with a strong focus on Application Security.
2.  Learn modern frontend development by understanding every decision
    instead of following tutorials blindly.

The project is intentionally developed in small iterations and is
expected to evolve over time.

## Development approach

### Learn by understanding

Every technology, dependency and architectural decision should be
understood before it is used.

### Security by default

Security is considered from the beginning: dependencies are reviewed,
install scripts are approved consciously, unnecessary libraries are
avoided, assets are self-hosted where appropriate and dependencies are
kept up to date.

### Quality over speed

The objective is to understand how and why everything works and to keep
changes reviewable and maintainable, rather than finish as quickly as
possible.

### Small iterations

Each development session focuses on a small, well-defined topic. Changes
remain easy to understand, test and document.

### Documentation as part of engineering

Architecture decisions, development sessions and focused reviews are
documented alongside the code so both implementation and reasoning
remain visible over time.

## Current architecture

The project currently includes:

-   Astro with static generation,
-   TypeScript content models,
-   semantic design tokens for colour, spacing, typography and focus
    styles,
-   reusable layout/container primitives and global header/footer,
-   contextual navigation for homepage, work case studies and hobby
    pages,
-   reusable case-study and hobby-page components,
-   component-scoped styles for component-specific presentation,
-   local fonts,
-   responsive typography and layouts,
-   light/dark themes with `data-theme`, `localStorage` persistence and
    `prefers-color-scheme`,
-   Polish and English localization,
-   localized SEO metadata and structured data,
-   semantic HTML and accessibility-focused interaction patterns,
-   reusable interactive images using native `<dialog>`,
-   Astro image handling,
-   ADRs, session logs and focused code reviews.

### Design system

Components consume semantic tokens rather than theme-specific values.
Each hobby can expose its own accent colour while still participating in
the shared token system.

### Responsive design

Responsive behaviour uses a small set of established breakpoints and
reusable layout patterns. Additional breakpoints are introduced only
when a concrete layout problem requires them.

### Component architecture

Reusable components encapsulate markup, presentation and narrowly scoped
behaviour. Shared design rules remain global while component-specific
styles stay with their components. Page-specific content remains outside
components whenever practical.

### Accessibility

Accessibility is part of implementation: semantic HTML,
keyboard-accessible controls, skip links, descriptive ARIA labels,
`aria-current`, visible tokenized focus states, decorative-icon
handling, native dialog previews, focus restoration, responsive readable
layouts and contrast checks across themes.

### Internationalization

UI translations live in `src/i18n`; page/case-study content lives in
`src/data`; components receive localized typed data; routes use
`[lang]`; language switching preserves relevant context where supported.

### Page composition and routing

The portfolio is statically generated with language-prefixed routes.
Homepage, work case studies and hobby pages share the global layout
while providing context-appropriate navigation. No client-side framework
or unnecessary runtime state is required.

## Engineering documentation

The repository uses three complementary forms of documentation:

-   **ADRs** for durable architectural choices and consequences,
-   **session logs** for incremental implementation history and
    verification,
-   **focused reviews** for design-system, architecture, CSS and quality
    assessments.

An ADR is created only when a durable architectural decision is made.
Bug fixes, visual polish and restoration of an existing contract belong
in session/review notes instead.

## Current project state

The portfolio includes completed work case studies and a bilingual hobby
section with responsive layouts. Recent review work focused on
maintainability, component reuse, responsive behaviour, theme
consistency and regression testing. The latest quick regression covered
desktop/mobile, Polish/English, homepage/subpages and light/dark themes.
Issues found were corrected and the final production build completed
successfully.

The current implementation is ready for deployment unless a new concrete
issue is identified.

## Long-term vision

The website should remain a professional portfolio, engineering
showcase, learning journal and long-term project that can evolve without
requiring a rewrite. Future additions may include new case studies,
conference talks, publications, articles and selected community
activities when there is meaningful content to present.
