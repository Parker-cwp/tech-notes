---
title: "Astro Narrow"
description: "受 Hugo Narrow 启发的 Astro 原生内容主题。"
pubDate: 2026-06-27
cover: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1600&q=80"
tags: ["Astro", "内容"]
featured: true
links:
  - label: "访问网站"
    url: "https://astro.build/"
    icon: "lucide:external-link"
    variant: "primary"
  - label: "GitHub"
    url: "https://github.com/"
    icon: "simple-icons:github"
toc: "center"
---

## 概览

Astro Narrow 使用 Astro 原生能力重建 Hugo Narrow 的体验。它保留简洁的内容
书写方式，但不保留 Hugo 主题 API，而是使用 typed config、content collections
和边界清晰的小组件。

## 目标

- 保持 Markdown 书写干净。
- 支持多语言内容。
- 提供稳定的默认排版。
- 使用 CSS 变量配置主题色。
- 用成熟库处理搜索、代码块和图库布局。

## 实现说明

项目使用 `astro-icon` 处理图标，`fuse.js` 处理搜索，`astro-expressive-code`
处理代码块，`smart-gallery` 处理图库布局。

## 路线

| 模块 | 状态 |
| --- | --- |
| 内容集合 | 已完成 |
| i18n | 已完成 |
| 图库 | 进行中 |
| 评论 | Provider 接口 |
| 统计 | Provider 接口 |
