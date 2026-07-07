---
title: "我的第一个 AI 智能体：从零开始的探索"
description: "记录搭建第一个 AI Agent 的过程和心得"
pubDate: 2026-07-07
tags: ["AI", "智能体", "LLM"]
toc: true
---

## 为什么想做智能体？

最近 AI 智能体（Agent）的概念非常火。和普通的对话不同，智能体可以自主规划、调用工具、执行任务，甚至和其他智能体协作。这让我很好奇——自己动手做一个会是什么体验？

## 智能体的核心组成

一个基本的智能体通常包含以下几个部分：

- **大语言模型（LLM）**：作为"大脑"，负责理解和生成
- **提示词（Prompt）**：定义智能体的角色和行为规范
- **工具（Tools）**：让智能体能与外部世界交互，比如搜索、读写文件
- **记忆（Memory）**：让智能体能记住上下文和历史交互

## 动手实践

我选择了 Claude API 作为基础模型，配合一些简单的工具函数，搭建了一个能帮我整理笔记的智能体。

```python
from anthropic import Anthropic

client = Anthropic()

response = client.messages.create(
    model="claude-sonnet-4-20250514",
    max_tokens=1024,
    tools=[{
        "name": "search_notes",
        "description": "搜索笔记内容",
        "input_schema": {
            "type": "object",
            "properties": {
                "query": {"type": "string", "description": "搜索关键词"}
            },
            "required": ["query"]
        }
    }],
    messages=[{"role": "user", "content": "帮我找找关于 Transformer 的笔记"}]
)
```

## 踩过的坑

> [!WARNING]
> 工具调用的返回格式一定要严格遵循 API 规范，否则智能体会陷入无限重试。

1. **Token 消耗超预期** — 工具调用会多次往返，记得设好 `max_tokens`
2. **提示词要明确边界** — 不然智能体会"自作主张"
3. **错误处理很重要** — 工具调用失败时要有兜底逻辑

## 下一步计划

- 接入更多工具（文件系统、数据库、API）
- 尝试多智能体协作
- 探索长期记忆方案

:::tabs
:::tab{title="参考资源"}
- [Anthropic 文档](https://docs.anthropic.com)
- [LangChain](https://langchain.com)
- [CrewAI](https://crewai.com)
:::
:::tab{title="相关工具"}
- Claude API
- Python asyncio
- function calling
:::
::::

---

*这是我的第一篇博客，记录学习智能体的过程。后续会持续更新更多技术总结。*
