import { Temporal } from 'proposal-temporal'
import {
  INuxtContentIndexResult,
  INuxtContentIndexResultByYears,
} from './content'

export const CALENDAR = [
  'buddhist',
  'chinese',
  'gregory',
  'hebrew',
  'indian',
  'islamic',
  'iso8601',
  'japanese',
]

export type ICalendarName = typeof CALENDAR[number]

export const CALENDAR_NAMES = new Set(CALENDAR)

export const CALENDAR_NAME_FALLBACK = 'gregory'

export const isValidCalendar = (input: string): input is ICalendarName => {
  return CALENDAR_NAMES.has(input as any)
}

export const assertsValidCalendar = (
  input: string,
): asserts input is ICalendarName => {
  if (!isValidCalendar(input)) {
    const valid = CALENDAR.join(', ')
    const message = `Calendar name ${input} is not valid: ${valid}`
    throw new Error(message)
  }
}

export const ensureValidCalendar = (calendarName: string): ICalendarName => {
  const isValid = isValidCalendar(calendarName)
  return isValid ? calendarName : CALENDAR_NAME_FALLBACK
}

const extractYearFromDateString = (dateString: string | ''): number => {
  if (/\d{0,4}/.test(dateString || '')) {
    const year = dateString.split('-')[0]
    return Number(year)
  }
  const message = `Invalid date ${dateString}`
  throw new Error(message)
}

const getYear = (content: Record<'date' | 'createdAt', string>): number => {
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
  contents: INuxtContentIndexResult[],
): INuxtContentIndexResultByYears => {
  const out: INuxtContentIndexResultByYears = []
  for (const content of contents) {
    const year = getYear(content)
    let bucket = out.find(([y]) => y === year)
    if (!bucket) {
      out.push([year, []])
      bucket = out.find(([y]) => y === year)
    }
    const prettyfiedTemporalDate = getPrettyfiedTemporalDate(
      content,
      content.locale,
    )
    content.prettyfiedTemporalDate = prettyfiedTemporalDate
    bucket[1].push(content)
  }

  // Make sure it's sorted by year, chronologically
  out.sort((a, b) => b[0] - a[0])

  return out
}

export interface IPrettyfiedTemporalDate {
  prettified?: string
  temporalDate: Temporal.Date | null
}

export const getPrettyfiedTemporalDate = (
  content: Record<'date' | 'createdAt', string>,
  locale = 'fr-CA',
  calendar = 'gregory',
): IPrettyfiedTemporalDate => {
  const userPreferedCalendar = ensureValidCalendar(calendar)

  let temporalDate: Temporal.Date | '' = ''
  let prettified: string | '' = ''

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
  prettified = temporalDate.toLocaleString(locale, localeStringOptions)

  return {
    prettified,
    temporalDate,
  }
}

export type ITransformTemporalDate = Partial<
  Record<'year' | 'month' | 'day', string | number>
>

export const transformToPrettyfiedTemporalDate = (
  input: ITransformTemporalDate = {} as ITransformTemporalDate,
  locale?: string,
  dtfo?: Intl.DateTimeFormatOptions,
): IPrettyfiedTemporalDate => {
  const { year, month = '01', day = '01' } = input

  let temporalDate: Temporal.Date | null = null
  let prettified: string | undefined
  try {
    const attempt = Temporal.Date.from(`${year}-${month}-${day}`)
    temporalDate = attempt as Temporal.Date
    if (locale && dtfo) {
      const formatOptions: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'long',
        ...(dtfo || {}),
      }
      const maybe = temporalDate.toLocaleString(locale, formatOptions)
      prettified = maybe
    }
  } catch (_) {
    // ...
  }

  return {
    temporalDate,
    prettified,
  }
}
