import { Result } from '@nuxt/content'
import { Temporal } from 'proposal-temporal'
import { ensureValidCalendar } from '../../runtime/date'

export interface IBaseNuxtContentResult extends Result {
  dir: string
  path: string
  extension: string
  slug: string
  createdAt: string
  updatedAt: string
}

export interface INuxtContentResult extends IBaseNuxtContentResult {
  title: string
  tags: string[]
  categories: string[]
  locale: string
  oldArticle?: string
  cover?: string
  coverCaption?: string
  coverAlt?: string
  date: string
}

export type INuxtContentIndexResult = Pick<
  INuxtContentResult,
  'title' | 'date' | 'slug' | 'locale' | 'path' | 'createdAt'
>

export type INuxtContentByYears = [number, INuxtContentIndexResult[]][]

const extractYearFromDateString = (dateString: string | ''): number => {
  if (/\d{0,4}/.test(dateString || '')) {
    const year = dateString.split('-')[0]
    return Number(year)
  }
  const message = `Invalid date ${dateString}`
  throw new Error(message)
}

const getYear = (content: INuxtContentIndexResult): number => {
  let out: '' | number = ''

  const { date = '', createdAt = '' } = content

  if (date !== '') {
    out = extractYearFromDateString(date)
  }
  if (out === '' && createdAt !== '') {
    out = extractYearFromDateString(date)
  }
  if (typeof out !== 'number') {
    const message = `Could not extract year`
    throw new Error(message)
  }
  return out
}

export const breakIntoYears = (
  collection: INuxtContentIndexResult[],
): INuxtContentByYears => {
  const out: INuxtContentByYears = []
  for (const content of collection) {
    const year = getYear(content)
    let bucket = out.find(([y]) => y === year)
    if (!bucket) {
      out.push([year, []])
      bucket = out.find(([y]) => y === year)
    }
    bucket[1].push(content)
  }

  // Make sure it's sorted by year, chronologically
  out.sort((a, b) => b[0] - a[0])

  return out
}

export type IPrettyfiedTemporalDate = {
  formatted: string
  temporalDate: Temporal.Date
}

export const getPrettyfiedTemporalDate = (
  content: INuxtContentResult,
  locale = 'fr-CA',
  calendar = 'gregory',
): IPrettyfiedTemporalDate => {
  const userPreferedCalendar = ensureValidCalendar(calendar)

  let temporalDate: Temporal.Date | '' = ''
  let publishedAtString: string | '' = ''

  const { date = '', createdAt = '' } = content

  if (temporalDate !== '') {
    temporalDate = Temporal.Date.from(date)
  }
  if (temporalDate === '' && createdAt !== '') {
    temporalDate = Temporal.Date.from(date)
  }
  if (temporalDate === '') {
    const message = `Something went wrong`
    throw new Error(message)
  }

  const localeStringOptions: Intl.ResolvedDateTimeFormatOptions = {
    calendar: userPreferedCalendar,
    weekday: 'long',
    day: 'numeric',
    year: 'numeric',
    month: 'long',
    locale,
    numberingSystem: 'latn' /* default */,
    timeZone: 'America/New_York' /* default */,
  }
  publishedAtString = temporalDate.toLocaleString(locale, localeStringOptions)

  return {
    formatted: publishedAtString,
    temporalDate,
  }
}

export const typeGuardNuxtContentResult = (
  maybe: any,
): maybe is INuxtContentResult => {
  let outcome = false
  const hasTitle =
    Reflect.has(maybe, 'title') && typeof maybe.title === 'string'
  const hasLocale =
    Reflect.has(maybe, 'locale') && typeof maybe.locale === 'string'
  const hasTags = Reflect.has(maybe, 'tags') && Array.isArray(maybe.tags)
  if (maybe && hasTitle && hasLocale && hasTags) {
    outcome = true
  }
  return outcome
}
