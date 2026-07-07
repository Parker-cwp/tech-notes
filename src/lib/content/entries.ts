import { getCollection, type CollectionEntry } from 'astro:content';
import { getLocaleFromId, getLocalePath, stripLocaleFromId, type Locale } from '../../config/i18n';

export type ContentType = 'posts' | 'projects' | 'pages';

export function entryLocale(entry: CollectionEntry<ContentType>) {
  return entry.data.lang || getLocaleFromId(entry.id);
}

export function entrySlug(entry: CollectionEntry<ContentType>) {
  return stripLocaleFromId(entry.id).replace(/\/index$/, '');
}

export function entryDate(entry: CollectionEntry<ContentType>) {
  return entry.data.pubDate || entry.data.updatedDate || new Date(0);
}

export function isPublished(entry: CollectionEntry<ContentType>) {
  return !entry.data.draft;
}

export async function getLocalizedEntries<T extends ContentType>(collection: T, locale: Locale) {
  const entries = await getCollection(collection, ({ data }) => !data.draft);
  return entries
    .filter((entry) => entryLocale(entry as CollectionEntry<ContentType>) === locale)
    .sort((a, b) => entryDate(b as CollectionEntry<ContentType>).getTime() - entryDate(a as CollectionEntry<ContentType>).getTime());
}

export function localizedEntryPath(collection: ContentType, entry: CollectionEntry<ContentType>) {
  const slug = entrySlug(entry);
  const locale = entryLocale(entry);
  const base = collection === 'pages' ? '' : `/${collection}`;
  const path = `${base}/${slug}/`.replace(/\/+/g, '/');
  return getLocalePath(locale, path);
}

export function formatDate(date: Date | undefined, locale: Locale) {
  if (!date) return '';
  return new Intl.DateTimeFormat(locale === 'zh-cn' ? 'zh-CN' : 'en', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date);
}

export function uniqueTerms(entries: Array<CollectionEntry<'posts'>>, field: 'tags') {
  const terms = new Map<string, number>();
  for (const entry of entries) {
    for (const term of entry.data[field] || []) {
      terms.set(term, (terms.get(term) || 0) + 1);
    }
  }
  return [...terms.entries()]
    .map(([name, count]) => ({ name, count, slug: slugTerm(name) }))
    .sort((a, b) => a.name.localeCompare(b.name));
}

export function adjacentEntries<T extends ContentType>(entries: Array<CollectionEntry<T>>, current: CollectionEntry<T>) {
  const index = entries.findIndex((entry) => entry.id === current.id);
  return {
    previous: index >= 0 ? entries[index + 1] : undefined,
    next: index > 0 ? entries[index - 1] : undefined
  };
}

export function relatedPosts(posts: Array<CollectionEntry<'posts'>>, current: CollectionEntry<'posts'>, limit = 3) {
  const currentTerms = new Set(current.data.tags || []);

  return posts
    .filter((entry) => entry.id !== current.id)
    .map((entry) => {
      const score = (entry.data.tags || []).filter((term) => currentTerms.has(term)).length;

      return { entry, score };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score || entryDate(b.entry as any).getTime() - entryDate(a.entry as any).getTime())
    .slice(0, limit)
    .map((item) => item.entry);
}

export function slugTerm(value: string) {
  return value
    .trim()
    .toLowerCase()
    .replace(/[^\p{L}\p{N}]+/gu, '-')
    .replace(/^-|-$/g, '');
}
