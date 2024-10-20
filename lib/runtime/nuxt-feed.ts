import type { FeedOptions, Author, Feed, Item } from 'feed'
import type { contentFunc } from '@nuxt/content'
import { Temporal } from '@js-temporal/polyfill'
import type { IAppIdentity } from '../types'
import type { INuxtContentResult } from '../model'
import { findExcludingRedirectPredicate } from '../index'

// eslint-disable-next-line
const EXAMPLE_NUXT_CONTENT_RESULT: Partial<INuxtContentResult>[] = [
  {
    title:
      'Things I’ve worked on in the last two years while maintaining WebPlatform.org',
    locale: 'en-CA',
    createdAt: '2017-02-09T00:00:00.000Z',
    updatedAt: '2023-11-20T00:00:00.000Z',
    dir: '/blog/2017/02',
    path: '/blog/2017/02/things-i-ve-worked-on-while-maintaining-webplatform-org',
    slug: 'things-i-ve-worked-on-while-maintaining-webplatform-org',
  },
]

export interface NuxtFeedCreateData {
  BASE_PATH: string
  appIdentity: IAppIdentity
}

const baseUrlNoTrailingSlash = (u: string): string => {
  if (!u.startsWith('http')) {
    const message = `Invalid URL "${u}", must start by http`
    throw new Error(message)
  }
  return u.replace(/\/$/, '')
}

let failedDatesOnce = false

const dateStringToDateObject = (createdAt, tz) => {
  // #TODO Make sure we return with proper time offset for Montreal, not UTC
  const createdAtNormalized =
    !!createdAt && !createdAt.includes('T')
      ? createdAt + 'T00:00:00.000Z'
      : createdAt
  let published: Date | undefined
  let instant
  try {
    instant = Temporal.Instant.from(createdAtNormalized)
    instant = instant.toZonedDateTimeISO(tz)
    published = new Date(instant.epochMilliseconds)
  } catch {
    // Nothing
  }

  return published
}

/**
 *
 * Bookmarks:
 * - https://www.npmjs.com/package/@nuxtjs/feed
 * - https://github.com/nuxt/content/blob/v1-dev/docs/content/en/integrations.md#nuxtjsfeed
 * - https://github.com/nuxt-community/feed-module?tab=readme-ov-file
 * - https://www.npmjs.com/package/feed
 * - https://github.com/jpmonette/feed/tree/4.2.0
 */
export const createNuxtFeedCreate =
  ($content: contentFunc) => async (feed: Feed, data: NuxtFeedCreateData) => {
    // eslint-disable-next-line no-console
    console.log('nuxtFeedCreate data', data)

    await Promise.resolve(undefined)

    const { BASE_PATH } = data
    const { email, name, description, homepage, timeZone } = data.appIdentity

    const authorName = name
    const authorEmail = email
    const baseUrl = baseUrlNoTrailingSlash(
      baseUrlNoTrailingSlash(homepage) + BASE_PATH,
    )

    const author: Author = {
      name: authorName,
      email: authorEmail,
      link: baseUrl,
    }

    const options: Partial<FeedOptions> = {
      title: authorName,
      updated: new Date(),
      copyright: `All rights reserved 2002-${new Date().getFullYear()}, ${authorName}`,
      link: homepage,
      description,
      author,
    }

    Reflect.set(feed, 'options', options)
    feed.addContributor(author)

    const all = [] as INuxtContentResult[]

    // Yes, this is ugly. That’ll do for now.

    // ------ BEGIN [ /blog ] ------------------------------
    const ds1 = $content('blog', { deep: true })
      .sortBy('createdAt', 'desc')
      .only([
        'categories',
        'createdAt',
        'description',
        'dir',
        'excerpt',
        'locale',
        'path',
        'redirect',
        'slug',
        'tags',
        'title',
        'updatedAt',
      ])
    const p1 = (await ds1.fetch()) as INuxtContentResult[]
    all.push(
      ...p1.filter((a) =>
        findExcludingRedirectPredicate(a as INuxtContentResult),
      ),
    )
    // ------ END   [ /blog ] ------------------------------

    // ------ BEGIN [ /code-review ] ------------------------------
    const ds2 = $content('code-review', { deep: true })
      .sortBy('createdAt', 'desc')
      .only([
        'createdAt',
        'description',
        'excerpt',
        'locale',
        'path',
        'dir',
        'slug',
        'tags',
        'title',
        'updatedAt',
      ])
    const p2 = (await ds2.fetch()) as INuxtContentResult[]
    all.push(...p2)
    // ------ END   [ /code-review ] ------------------------------

    // ------ BEGIN [ /glossary ] ------------------------------
    const ds3 = $content('glossary', { deep: true })
      .sortBy('createdAt', 'desc')
      .only([
        'createdAt',
        'description',
        'excerpt',
        'locale',
        'path',
        'dir',
        'slug',
        'tags',
        'title',
        'updatedAt',
      ])
    const p3 = (await ds3.fetch()) as INuxtContentResult[]
    all.push(...p3)
    // ------ END   [ /glossary ] ------------------------------

    const failedDates: Record<string, unknown>[] = []

    all.forEach((article) => {
      const link = `${baseUrl}${article.path}`
      const item = {
        title: article.title,
        id: link,
        link,
      }
      /*
      // #TODO Add feed tags and category
      if (categories && categories.length === 1) {
        const name = categories[0]
        const category: Category = {
          name,
          term: name,
        }
        Reflect.set(item, 'category', category)
      }
      */

      const published = dateStringToDateObject(article.createdAt, timeZone)
      if (published) {
        Reflect.set(item, 'published', published)
      } else {
        failedDates.push({
          path: article.path,
          propertyName: 'article.createdAt',
          value: article.createdAt,
        })
      }
      const updated = dateStringToDateObject(article.updatedAt, timeZone)
      if (updated) {
        // Because "date" field is for updated
        Reflect.set(item, 'date', updated)
      } else {
        failedDates.push({
          path: article.path,
          propertyName: 'article.updated',
          value: article.updatedAt,
        })
      }

      feed.addItem(item as Item)
      if (!failedDatesOnce) {
        // eslint-disable-next-line no-console
        console.debug(article.path, {
          published,
          updated,
        })
      }
    })

    if (failedDates.length > 0 && !failedDatesOnce) {
      const message = 'Could not get page’s created date'
      // eslint-disable-next-line no-console
      failedDates.map((i) => console.log(message, i))
      failedDatesOnce = true
    }
  }
