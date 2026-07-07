const diagrams = document.querySelectorAll<HTMLElement>('[data-mermaid="true"]');

if (diagrams.length > 0) {
  import('mermaid').then(({ default: mermaid }) => {
    mermaid.initialize({
      startOnLoad: false,
      theme: document.documentElement.classList.contains('dark') ? 'dark' : 'default'
    });
    mermaid.run({ nodes: [...diagrams] });
  });
}
