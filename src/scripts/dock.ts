document.addEventListener('click', (event) => {
  const target = event.target as HTMLElement;

  if (target.closest('[data-history-back]')) {
    const button = target.closest<HTMLElement>('[data-history-back]');
    if (window.history.length > 1) {
      window.history.back();
    } else {
      window.location.href = button?.dataset.fallback || '/';
    }
  }

  if (target.closest('[data-back-top]')) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
});
