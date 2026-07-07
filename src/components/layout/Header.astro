---
import { Icon } from 'astro-icon/components';
import { getLocalePath, type Locale } from '../../config/i18n';
import { getNavigation } from '../../config/navigation';
import { siteConfig } from '../../config/site';
import { useTranslations } from '../../i18n/utils';

interface Props {
  locale: Locale;
}

const { locale } = Astro.props;
const navigation = getNavigation(locale);
const currentPath = Astro.url.pathname;
const t = useTranslations(locale);
const headerClass = siteConfig.ui.navbar.sticky ? 'sticky top-5' : 'relative';

function isActive(href: string) {
  if (href === '/') return currentPath === href;
  return currentPath === href || currentPath.startsWith(href);
}
---

<header class:list={[headerClass, 'z-30 mt-5 mb-6']}>
  <div class="nav-shell flex min-h-16 items-center justify-between gap-3 border px-4 shadow-[var(--surface-shadow)]">
    <a href={getLocalePath(locale, '/')} class="flex min-w-0 items-center gap-2 font-semibold">
      <span class="grid h-8 w-8 shrink-0 place-items-center rounded-md bg-primary text-primary-foreground">
        {siteConfig.name.slice(0, 1)}
      </span>
      <span class="truncate">{siteConfig.name}</span>
    </a>

    <nav class="hidden items-center gap-1 md:flex" aria-label="Primary">
      {navigation.map((item) => (
        <a
          class:list={[
            'nav-item inline-flex items-center gap-1.5 rounded-[var(--radius-control)] px-3 py-2 text-sm transition-colors duration-200',
            isActive(item.href)
              ? 'bg-accent text-accent-foreground'
              : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
          ]}
          href={item.href}
        >
          <Icon name={item.icon} class="h-4 w-4" />
          {item.label}
        </a>
      ))}
    </nav>

    <div class="flex items-center gap-1 md:hidden">
      <button type="button" data-mobile-menu class="grid h-9 w-9 place-items-center rounded-[var(--radius-control)] hover:bg-accent md:hidden" aria-label={t('nav.menu')}>
        <Icon name="lucide:menu" class="h-4 w-4" />
      </button>
    </div>
  </div>
  <nav data-mobile-panel class="mt-2 hidden rounded-[var(--radius-card)] border border-border bg-popover p-2 shadow-[var(--surface-shadow-strong)] md:hidden" aria-label="Mobile primary">
    {navigation.map((item) => (
      <a class:list={['flex items-center gap-2 rounded-[var(--radius-control)] px-3 py-2 text-sm', isActive(item.href) ? 'bg-accent text-accent-foreground ring-1 ring-primary/35' : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground']} href={item.href}>
        <Icon name={item.icon} class="h-4 w-4" />
        {item.label}
      </a>
    ))}
  </nav>
</header>
