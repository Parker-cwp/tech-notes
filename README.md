# Astro Narrow

[English](README.md) · [简体中文](README.zh-CN.md) · [Hugo Narrow](https://github.com/tom2almighty/hugo-narrow)

Astro Narrow is a content-focused Astro theme inspired by Hugo Narrow. It keeps a compact reading layout while using Astro-native building blocks: content collections, Astro routes, Astro components, and remark/rehype Markdown transforms.

English is the default language. Simplified Chinese is included as an example locale.

## Features

- Astro-native content collections for posts, projects, and pages.
- Configurable content types, card styles, list layouts, and home sections.
- Tags-only taxonomy.
- Markdown alerts, tabs, math, Mermaid, galleries, lightbox, and Expressive Code.
- Theme tokens, dark mode, search, dock, table of contents, RSS, and sitemap.
- GitHub Pages workflow for publishing an example site.

## Quick Start

```sh
pnpm install
pnpm dev
pnpm build
```

## Main Config Files

- `src/config/site.ts`: site metadata, author profile, navigation, layout width, comments, analytics, gallery, license.
- `src/config/content.ts`: content type labels, paths, card style, list layout, home sections.
- `src/config/i18n.ts`: locales and localized paths.
- `src/config/theme.ts`: theme switcher options.
- `src/content.config.ts`: Astro content collection schemas.

Navigation can use built-in keys or custom items:

```ts
nav: ['posts', 'projects', 'archives', 'tags'],
footerNav: ['archives', 'tags']
```

## Markdown Tabs

Tabs use `remark-directive` syntax. The outer container uses four colons because it contains nested directives.

````md
::::tabs
:::tab{title="site.ts"}
```ts
export const siteConfig = {
  contentWidth: '56rem'
}
```
:::

:::tab{title="content.ts"}
```ts
export const contentTypes = {
  posts: { listLayout: 'stack' }
}
```
:::
::::
````

## GitHub Pages

The example workflow is in `.github/workflows/deploy.yml`. Before the first deployment, open repository **Settings > Pages** and set **Build and deployment > Source** to **GitHub Actions**. Without this setting, `actions/deploy-pages` can fail with `HttpError: Not Found`.

The workflow sets `ASTRO_SITE` and `ASTRO_BASE` automatically for both user pages and project pages.

## Development Notes

- Keep changes Astro-native. Do not add Hugo compatibility layers.
- Prefer Markdown-native authoring and remark/rehype transforms over custom HTML snippets.
- Keep user-facing options in config files instead of requiring users to import internal code.
