---
import { Icon } from 'astro-icon/components';
import { getLocalePath, locales, localeMeta, switchLocalePath, type Locale } from '../../config/i18n';
import { themes } from '../../config/theme';
import { useTranslations } from '../../i18n/utils';

interface Props {
  locale: Locale;
}

const { locale } = Astro.props;
const t = useTranslations(locale);
const labels = {
  back: t('dock.back'),
  home: t('dock.home'),
  language: t('nav.language'),
  search: t('nav.search'),
  theme: t('nav.theme'),
  colorMode: t('nav.colorMode'),
  top: t('dock.top')
};
const homeHref = getLocalePath(locale, '/');
const currentPath = Astro.url.pathname;
---

<div class="dock-shell fixed bottom-4 left-1/2 z-40 flex -translate-x-1/2 items-center gap-1 border p-1 shadow-[var(--surface-shadow-strong)]" data-reading-progress>
  <button type="button" data-history-back data-fallback={homeHref} class="dock-control grid h-10 w-10 place-items-center rounded-xl text-muted-foreground transition hover:bg-accent hover:text-accent-foreground" aria-label={labels.back} title={labels.back}>
    <Icon name="lucide:arrow-left" class="h-4 w-4" />
  </button>

  <button type="button" data-search-open class="dock-control grid h-10 w-10 place-items-center rounded-xl text-muted-foreground transition hover:bg-accent hover:text-accent-foreground" aria-label={labels.search} title={labels.search}>
    <Icon name="lucide:search" class="h-4 w-4" />
  </button>

  <div class="relative z-10">
    <button type="button" data-theme-menu class="dock-control grid h-10 w-10 place-items-center rounded-xl text-muted-foreground transition hover:bg-accent hover:text-accent-foreground" aria-label={labels.theme} title={labels.theme}>
      <Icon name="lucide:palette" class="h-4 w-4" />
    </button>
    <div data-theme-panel class="absolute bottom-full left-1/2 mb-2 hidden max-h-80 w-48 -translate-x-1/2 overflow-auto rounded-[var(--radius-panel)] border border-border bg-popover p-1 text-sm shadow-xl">
      {themes.map((theme) => (
        <button type="button" data-theme-value={theme.id} class="flex w-full items-center rounded-[var(--radius-control)] px-2 py-1.5 text-left hover:bg-accent">
          <span>{theme.name}</span>
        </button>
      ))}
    </div>
  </div>

  <span class="relative z-10 h-5 w-px bg-border/80" aria-hidden="true"></span>

  <a href={homeHref} class="dock-control grid h-10 w-10 place-items-center rounded-xl text-muted-foreground transition hover:bg-accent hover:text-accent-foreground" aria-label={labels.home} title={labels.home}>
    <Icon name="lucide:home" class="h-4 w-4" />
  </a>

  <span class="relative z-10 h-5 w-px bg-border/80" aria-hidden="true"></span>

  <button type="button" data-color-mode class="dock-control grid h-10 w-10 place-items-center rounded-xl text-muted-foreground transition hover:bg-accent hover:text-accent-foreground" aria-label={labels.colorMode} title={labels.colorMode}>
    <Icon name="lucide:sun-moon" class="h-4 w-4" />
  </button>

  <div class="relative z-10">
    <button type="button" data-lang-menu class="dock-control grid h-10 w-10 place-items-center rounded-xl text-muted-foreground transition hover:bg-accent hover:text-accent-foreground" aria-label={labels.language} title={labels.language}>
      <Icon name="lucide:languages" class="h-4 w-4" />
    </button>
    <div data-lang-panel class="absolute bottom-full left-1/2 mb-2 hidden w-36 -translate-x-1/2 rounded-[var(--radius-panel)] border border-border bg-popover p-1 text-sm shadow-xl">
      {locales.map((item) => (
        <a href={switchLocalePath(item, currentPath)} class="block rounded px-2 py-1.5 hover:bg-accent" aria-current={item === locale ? 'page' : undefined}>
          {localeMeta[item].label}
        </a>
      ))}
    </div>
  </div>

  <button type="button" data-back-top class="dock-control grid h-10 w-10 place-items-center rounded-xl text-muted-foreground transition hover:bg-accent hover:text-accent-foreground" aria-label={labels.top} title={labels.top}>
    <Icon name="lucide:arrow-up" class="h-4 w-4" />
  </button>
</div>
