# Session 058 -- Tooling and Dependency Maintenance

## Goal

Perform a focused maintenance pass after the v1.1.0 release:
update project tooling and dependencies, resolve reported dependency
vulnerabilities, verify compatibility with the current Node.js and npm
toolchain, and deploy the updated project without introducing unrelated
application changes.

## Work completed

### GitHub Pages deployment action

Updated the GitHub Pages deployment workflow:

```text
actions/deploy-pages@v4 -> actions/deploy-pages@v5
```

The update removes the Node.js 20 deprecation warning previously reported
by GitHub Actions. The existing workflow architecture was preserved:
pull requests run the build job, while deployment runs only after a push
to `main`.

### Astro

Updated Astro:

```text
7.1.6 -> 7.2.1
```

The update remained within Astro 7 and required no application
architecture changes.

### Dependency security fixes

`npm audit` initially reported three vulnerabilities:

- `js-yaml` -- high
- `nanoid` -- high
- `postcss` -- moderate

Before applying fixes, `npm audit fix --dry-run` was used to verify the
proposed dependency changes.

The resulting transitive dependency updates were:

```text
postcss 8.5.19 -> 8.5.26
nanoid 3.3.16 -> 3.3.18
js-yaml 4.3.0 -> 4.3.1
```

After the update:

```text
npm audit
```

**Result:** 0 vulnerabilities.

### npm toolchain

Updated the local npm installation:

```text
11.17.0 -> 12.0.2
```

The existing Node.js version:

```text
v26.5.0
```

satisfies npm 12 requirements.

Running `npm install` with npm 12 did not introduce additional changes to
`package.json` or `package-lock.json`.

The `fsevents@2.3.3` install script remains unapproved because it is not
required for the project build. Installation and production builds
complete successfully without granting it additional script permissions.

## Verification

Verification included:

```text
npm install
npm audit
npm run build
```

Results:

- dependencies install successfully with npm 12.0.2
- `npm audit` reports 0 vulnerabilities
- production build completes successfully
- 19 static pages are generated
- sitemap is generated successfully
- npm 12 introduces no additional repository changes

The pull request build also completed successfully in GitHub Actions.

After merging to `main`, the GitHub Pages workflow completed successfully:

```text
build  -- success
deploy -- success
```

A production smoke test confirmed the deployed portfolio is working
correctly.

## Architecture decision

No new ADR is required.

This session updates tooling, framework dependencies and transitive
security fixes without changing the project's architectural contracts.
The GitHub Pages workflow retains its existing build/deploy structure,
and no new dependency-management or runtime architecture policy was
introduced.

## Result

The portfolio is deployed successfully with the updated maintenance
stack:

```text
Node.js 26.5.0
npm 12.0.2
Astro 7.2.1
actions/deploy-pages v5
```

Dependency audit is clean, the production build passes, and the deployed
site has passed a production smoke test.