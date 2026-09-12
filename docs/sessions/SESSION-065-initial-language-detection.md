# Session 065 – Initial language detection

## Goal

Improve the first visit to the portfolio root URL by detecting the browser language and removing the visible flash caused by the previous redirect page.

## Problem

The root page previously used Astro's redirect:

    ---
    return Astro.redirect("/en/", 301);
    ---

For the static GitHub Pages build, Astro generated a small HTML document using `meta refresh`.

Before redirecting to `/en/`, the browser briefly rendered this intermediate document with its default background, causing a visible white flash.

The root URL also always redirected to the English version and did not detect the visitor's preferred browser language.

## Changes

Updated:

    src/pages/index.astro

The root page now:

- reads the preferred browser language using `navigator.languages`, with `navigator.language` as a fallback,
- redirects Polish users to `/pl/`,
- redirects users with other browser languages to `/en/`,
- uses `window.location.replace()` so `/` does not remain as an extra entry in browser history,
- uses an empty intermediate document instead of rendering redirect content,
- sets the initial background according to `prefers-color-scheme` to avoid the visible white flash during navigation.

No additional dependencies or abstractions were introduced.

## Verification

Verified the production build with:

    npm run build

Inspected the generated root page with:

    cat dist/index.html

Confirmed that the generated page no longer contains Astro's `meta refresh` redirect.

Verified locally with:

    npm run preview

Browser checks confirmed:

- `/` redirects according to the browser language,
- Polish browser language redirects to `/pl/`,
- English or other browser languages redirect to `/en/`,
- the previous white flash is no longer visible during the initial redirect,
- the intermediate background respects the system light/dark preference.

## Architecture decision

No ADR was created.

The change is local to the root entry point and does not introduce a new architectural pattern, dependency, or difficult-to-reverse decision.

## Remaining work

After merge and deployment:

- verify `/` on the production GitHub Pages site,
- confirm the correct `/pl/` or `/en/` redirect,
- confirm that no visible flash occurs on the production deployment.