# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

The **Quarto static website for brainworkup.org** — Dr. Joey Trampush's Los Angeles
neuropsychology practice (BrainWorkup Neuropsychology, LLC). It is a content/marketing
site: condition & service landing pages, an About/CV, Contact, FAQ, and a (currently
unpublished) blog. It is **not** an application or data pipeline.

> A higher-level `~/Documents/CLAUDE.md` describes a Python "neuropsych_agent /
> neuropsych-rag" LangGraph pipeline. **That project does not exist in this repo** —
> ignore it here. This file is authoritative for this directory.

## Stack

- **Quarto** website (`_quarto.yml`); theme = `cosmo` + `theme.scss`; builds to `_site/`.
- **Hosting:** Netlify (`netlify.toml`) — static only, **no server runtime** (PHP files do not execute).
- Algolia search, Google Analytics, Botpress chat (lazy-loaded), PWA manifest.
- Content: `.qmd` pages, one per directory (`adhd/`, `autism/`, `dyslexia/`, `forensic-neuropsychology/`, …).
- Build helpers (Node, run via Netlify / Quarto post-render): `post-render.js` (adds `defer`),
  `generate-sitemap.js`, and runtime SEO JSON-LD in `header-enhanced.js`.

## Commands

```sh
quarto preview            # local dev server
quarto render             # build the whole site to _site/
quarto render index.qmd   # render a single page
npm run generate-sitemap  # node generate-sitemap.js (sitemap.xml; Netlify also runs @netlify/plugin-sitemap)
```

No test or lint suite exists; verify changes by rendering and viewing the page. Under the
Claude Code sandbox, `quarto render` needs the sandbox disabled (it writes a cache dir).

## Gotchas

- **Stylesheet wiring is easy to get wrong.** Only `theme.scss`, `styles.css`, `index.css` are
  active. Stale blue rules in `styles.css` / `styles.min.css` (`--primary-blue`, global
  `.btn-primary`) previously overrode the teal CTA — check the served CSS before blaming theme.scss.
  `css/`, `styles/`, and root `styles.min.css` are unreferenced leftovers (pending deletion).
- `_site/` is tracked in git here despite the "do not commit" rule above; leave `_site/` diffs
  out of commits you author unless asked.
- Other copilot/agent conventions live in `.github/copilot-instructions.md` and `new_28.md`.
- Stray scratch files at the repo root (`_mockups/`, `*.bk`, `text.txt`, `cf-2fa-verify_backup_codes.txt`)
  are not part of the site; never publish or copy them (the 2FA codes file is sensitive).

## Brand palette — single source of truth is `theme.scss`

"Warm gold + charcoal, teal CTA":

- Charcoal `#34373f`, deep charcoal `#26282e`, and logo yellow `#f4e30c`
- Active Quarto themes: `theme-yellow-light.scss` and `theme-yellow-dark.scss`
- Light cards use warm paper `#fbfaf3`; dark cards use `#3b3e46`

Define new colors here, not per page. The only active stylesheets are `theme.scss`,
`styles.css`, and `index.css` (homepage only).

## Conventions

- Each content page: SEO frontmatter (`title-meta`, `description`, `keywords`, `tags`) +
  a `canonical-<slug>.html` head include + a markdown body.
- Underscore-prefixed dirs/files (`_blog/`, `_notes/`, `_site/`) are not rendered/published.
- Do **not** commit `_site/`. Do **not** put PHI or real patient data anywhere in the repo.
- The contact flow is a Motion booking iframe + a Google Form — there is no server-side form handling.
