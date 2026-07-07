# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Astro Narrow is a content-focused Astro 7 theme migrated from Hugo Narrow. It uses Astro-native building blocks — content collections, file-based routing, Astro components, and remark/rehype Markdown transforms. English is the default language; Simplified Chinese is included as a second locale.

## Commands

```sh
pnpm install          # install dependencies
pnpm dev              # start dev server
pnpm build            # production build
pnpm preview          # preview production build
```

When changes touch links, routing, navigation, search, RSS, sitemap, or locale switching, also verify with the GitHub Pages base path:

```sh
ASTRO_BASE=/astro-narrow/ pnpm build
```

## Architecture

### Tech Stack

- **Framework**: Astro 7 with file-based routing
- **Styling**: Tailwind CSS 4 via `@tailwindcss/vite` plugin; theme tokens in `src/styles/themes.css`
- **Icons**: `astro-icon` — use `lucide:*` for UI icons, `simple-icons:*` for brand icons
- **Markdown**: `@astrojs/markdown-remark` with custom remark/rehype plugins
- **Code blocks**: `astro-expressive-code` (configured in `ec.config.mjs`)
- **Search**: Client-side `fuse.js` fed by `src/pages/api/search.json.ts`
- **Gallery**: `smart-gallery` package

### Content Collections

Defined in `src/content.config.ts`. Three collections: `posts`, `projects`, `pages`. Content lives under `src/content/{collection}/{locale}/` (e.g. `src/content/posts/en/`). Taxonomy is tags-only — do not add categories or series.

### Configuration Files

- `src/config/site.ts` — site metadata, author profile, nav items, comments, analytics, gallery, lightbox, license
- `src/config/content.ts` — content type definitions: paths, labels, icons, card styles, list layouts, home sections
- `src/config/i18n.ts` — locale list, `getLocalePath()`, `switchLocalePath()`, and locale helpers
- `src/config/theme.ts` — theme switcher options
- `src/config/navigation.ts` — nav item resolution

### Routing & i18n

- Default locale (`en`) has no prefix; other locales are prefixed (e.g. `/zh-cn/posts/`)
- Pages under `src/pages/` serve the default locale; `src/pages/[locale]/` serves other locales
- Always use `getLocalePath(locale, path)` for internal links — never hardcode locale prefixes
- Use `switchLocalePath()` for language switcher links
- `ASTRO_BASE` env var sets the base path for GitHub Pages project sites; all internal links must respect it via `import.meta.env.BASE_URL`

### Markdown Plugins

Custom plugins in `src/lib/markdown/`:
- `remark-tabs.mjs` — tabbed content via `remark-directive` syntax (use 4 colons for outer container when nesting)
- `rehype-heading-anchors.mjs` — auto-generated heading anchors
- `rehype-alerts.mjs` — GitHub-style alerts
- `rehype-image-groups.mjs` — grouped images
- `rehype-mermaid.mjs` — Mermaid diagram rendering

Math: `remark-math` + `rehype-katex`. Code blocks: handled by Expressive Code, not custom plugins.

### Component Organization

- `src/components/layout/` — page skeleton (BaseLayout, Header, Footer)
- `src/components/content/` — content display (EntryCard, EntryList, PostMeta, TaxonomyLinks, Breadcrumbs, RelatedPosts, etc.)
- `src/components/features/` — functional widgets (SearchModal, Toc, Comments, Analytics)
- `src/components/ui/` — generic UI (Dock, ViewAll)
- `src/components/home/` — home page sections
- `src/scripts/` — client-side enhancement scripts (search, theme, TOC, dock, gallery, mermaid, tabs, reading progress)

### Content Query Utilities

`src/lib/content/entries.ts` provides helpers: `getLocalizedEntries()`, `localizedEntryPath()`, `entryLocale()`, `entrySlug()`, `uniqueTerms()`, `adjacentEntries()`, `relatedPosts()`, `formatDate()`.

## Development Rules

- Keep changes Astro-native. No Hugo compatibility layers, shortcode shims, or Hugo front matter aliases.
- Prefer Markdown-native authoring and remark/rehype build-time transforms over custom HTML.
- User-facing options belong in `src/config/*` — users should not need to modify internal components.
- Front matter schema changes require updating `src/content.config.ts` first, then component consumption logic.
- New features need both English and Chinese text (see `src/i18n/ui.ts`).
- After adding routes or internal links, verify with `ASTRO_BASE=/astro-narrow/ pnpm build` and check that generated paths include the correct base.
- Do not overwrite content files the user hasn't asked to change.
- Keep the compact reading layout: content-first, restrained layout, moderate reading density.
- New UI should reuse existing CSS variables and Tailwind utilities; do not introduce new UI frameworks.
