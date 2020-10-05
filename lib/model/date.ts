import { Temporal } from 'proposal-temporal'
import { extractYearFromDateString } from './content'

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

export const isValidYear = (year: string): boolean => {
  let out = false
  try {
    const attempt = extractYearFromDateString(`${year}-01-01`)
    out = typeof attempt === 'number'
  } catch (e) {
    // ...
  }
  return out
}

export type IMonthNames = [string, string][]

/**
 * List month names in current locale or as per DateTimeFormatOptions
 */
export type IMonthNamesFn = (
  locale: string,
  options?: Intl.DateTimeFormatOptions,
) => IMonthNames

export const getMonthNames: IMonthNamesFn = (
  locale = 'en-CA',
  options?: Intl.DateTimeFormatOptions,
) => {
  const out: [string, string][] = []
  const formatOptions: Intl.DateTimeFormatOptions = {
    month: 'long',
    ...(options || {}),
  }

  const temporalDate = Temporal.now.date()
  // @ts-ignore — check if this is really there or not
  const { monthsInYear = 12 } = temporalDate
  const { year } = temporalDate.getFields()

  for (let month = 1; month <= monthsInYear; month++) {
    const thisMonth = temporalDate.with({ year, month })
    const formatted = thisMonth.toLocaleString(locale, formatOptions)
    out.push([String(month).padStart(2, '0'), formatted])
  }

  return out
}
