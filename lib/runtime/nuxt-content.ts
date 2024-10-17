import { extractFrontMatterTagsAndNormalize } from '..'
import type { INuxtOptionsHooks } from '..'
import { extractVueTreeLinks } from './nuxt-content-links'

const allPages = new Map<string, Record<string, string | string[]>>()
const allLinks: string[] = []

export const getNuxtContentAllPages = (): Record<
  string,
  string | string[]
>[] => {
  const pages: Record<string, string | string[]>[] = []
  for (const [, data] of allPages) {
    pages.push(data)
  }
  return pages
}

export const getNuxtContentAllLinks = (): string[] => {
  return allLinks
}

/**
 * nuxt/content's
 * - `'content:file:beforeParse ?`
 * - `'content:file:beforeInsert': async (document, database) => {}`
 * - `'content:options ?`
 * - `'content:ready': ($content) => {}`
 *
 * Probably the best place to do AppVeryOldArticle
 *
 * Bookmarks:
 * - https://content.nuxt.com/v1/getting-started/advanced#contentfilebeforeparse
 */
export const nuxtContentHooks: INuxtOptionsHooks = {
  'content:file:beforeInsert': async (document) => {
    await Promise.resolve()
    /**
     * Reminder
     * This is a hook that runs before the content is inserted
     * for every page.
     *
     * What's also available here
     *
     * - `process.client`
     */
    const {
      description = '',
      excerpt = '',
      extension,
      locale,
      path = '',
      redirect = '',
      title,
    } = document
    const item = {
      path,
      slug: document.slug,
      file: path + extension,
      title,
      locale,
      description,
      excerpt,
    }

    if (!allPages.has(path) && redirect === '') {
      allPages.set(path, item)
    }

    // Normalize tags from the source so we can have articles
    // with same word, different CaSiNg (e.g. Foo and foo) as the same
    const tags = extractFrontMatterTagsAndNormalize('tags', document)
    Reflect.set(document, 'tags', tags)
    const categories = extractFrontMatterTagsAndNormalize(
      'categories',
      document,
    )
    Reflect.set(document, 'categories', categories)

    let category = '' // 'uncategorized'
    if (categories && categories.length > 0) {
      category = categories[0]
    }
    Reflect.set(document, 'category', category)

    const links = extractVueTreeLinks(document)
    if (links.length > 0) {
      allLinks.push(...links)
    }
  },
}
