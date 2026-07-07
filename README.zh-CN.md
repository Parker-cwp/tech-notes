# Astro Narrow

[English](README.md) · [简体中文](README.zh-CN.md) · [Hugo Narrow](https://github.com/tom2almighty/hugo-narrow)

Astro Narrow 是受 Hugo Narrow 启发的内容型 Astro 主题。它保留紧凑的阅读布局，但实现方式使用 Astro 原生能力：content collections、Astro 路由、Astro 组件和 remark/rehype Markdown 转换。

默认语言是英文，简体中文作为示例语言提供。

## 功能

- 使用 Astro content collections 管理文章、项目和页面。
- 可配置内容类型、卡片样式、列表布局和首页区块。
- 仅保留 tags 分类法。
- 支持 Markdown 提示块、tabs、数学公式、Mermaid、图库、lightbox 和 Expressive Code。
- 支持主题 token、深色模式、搜索、dock、目录、RSS 和 sitemap。
- 内置 GitHub Pages 示例站点部署 workflow。

## 快速开始

```sh
pnpm install
pnpm dev
pnpm build
```

## 主要配置文件

- `src/config/site.ts`：站点信息、作者信息、导航、布局宽度、评论、统计、图库、版权。
- `src/config/content.ts`：内容类型、路径、卡片样式、列表布局、首页区块。
- `src/config/i18n.ts`：多语言和本地化路径。
- `src/config/theme.ts`：主题列表。
- `src/content.config.ts`：Astro 内容集合 schema。

导航可以使用内置 key，也可以写自定义项：

```ts
nav: ['posts', 'projects', 'archives', 'tags'],
footerNav: ['archives', 'tags']
```

## Markdown Tabs

Tabs 使用 `remark-directive` 语法。外层容器使用四个冒号，因为内部还嵌套了 directive。

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

示例 workflow 位于 `.github/workflows/deploy.yml`。第一次部署前，先进入仓库 **Settings > Pages**，将 **Build and deployment > Source** 设置为 **GitHub Actions**。如果没有开启这个设置，`actions/deploy-pages` 可能会报 `HttpError: Not Found`。

workflow 会自动为用户页面和项目页面设置 `ASTRO_SITE` 与 `ASTRO_BASE`。

## 开发原则

- 使用 Astro-native 实现，不添加 Hugo 兼容层。
- 优先使用 Markdown 原生写法，通过 remark/rehype 做构建期转换。
- 用户可配置项应放在配置文件中，不要求用户导入内部代码。
