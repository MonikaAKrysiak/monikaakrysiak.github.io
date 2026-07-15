# ADR-002 – Initial Technology Stack

## Status

Accepted

---

## Context

The project requires a modern frontend stack suitable for a static portfolio website.

---

## Decision

The initial technology stack consists of:

- GitHub
- GitHub Pages
- Homebrew
- Node.js
- npm
- Astro
- Visual Studio Code
- Git

---

## Rationale

### GitHub

Source code hosting and future CI/CD.

### GitHub Pages

Simple, reliable and free hosting for a static website.

### Homebrew

Package manager for macOS.

### Node.js

Required to run Astro locally.

### npm

Dependency management.

Install scripts should always be reviewed before approval whenever possible.

### Astro

Selected because it offers:

- excellent performance,
- static-first architecture,
- minimal JavaScript,
- very good developer experience,
- excellent fit for portfolio websites.

### Visual Studio Code

Chosen as the primary development environment due to its ecosystem and excellent Astro support.

### Git

Used for version control, meaningful commits and future code review.

---

## Security considerations

Dependencies should remain minimal.

Every new dependency should have a clear purpose.

Install scripts should be consciously approved.

---

## Decision owner

Monika Krysiak

---

## Discussion

Technical mentoring provided by ChatGPT.