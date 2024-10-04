import { Temporal } from '@js-temporal/polyfill'
import { FALLBACK_LOCALE, FALLBACK_CALENDAR_NAME } from '../consts'
import { extractYearFromDateString } from './content'

const CALENDAR = [
  'buddhist',
  'chinese',
  'gregory' /* FALLBACK_CALENDAR_NAME */,
  'hebrew',
  'indian',
  'islamic',
  'iso8601',
  'japanese',
] as const

export type ICalendarName = typeof CALENDAR[number]

export interface IPrettyfiedTemporalDate {
  prettified?: string
  temporalDate: Temporal.PlainDate | ''
}

export type ITransformTemporalDate = Partial<
  Record<'year' | 'month' | 'day', string | number>
>

export const CALENDAR_NAMES: ReadonlySet<ICalendarName> = new Set([...CALENDAR])

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
  return isValid ? calendarName : FALLBACK_CALENDAR_NAME
}

export interface ITemporalFormat {
  locale?: string
  tz?: string
  format: Intl.DateTimeFormatOptions
}

export const formatTemporal = (
  temporal: Temporal.PlainDate,
  options: ITemporalFormat,
): string => {
  let out = ''
  const { format, locale = FALLBACK_LOCALE } = options
  const localeStringOptions: Intl.DateTimeFormatOptions = {
    calendar: FALLBACK_CALENDAR_NAME,
    ...(format ?? {}),
  }
  try {
    const formatted = temporal.toLocaleString(locale, localeStringOptions)
    out = formatted
  } catch {
    // Nothing to do
  }
  return out
}

export const getPrettyfiedTemporalDate = (
  content: Record<'created' | 'updated', string>,
  locale = 'fr-CA',
  format?: Intl.DateTimeFormatOptions,
): IPrettyfiedTemporalDate => {
  /**
   * Field is a date string.
   *
   * For now, just make sure contents is in the same format '2008-04-19T16:07:45-04:00'
   * and never in '2008-04-19T16:07:45.847Z'
   *
   * @TODO #23 It MUST be a string that has no Z in its notation.
   */
  let field = content?.date ?? content?.created ?? content?.updated ?? 0

  if (/\d\d\d\d-\d\d-\d\dT/.test(field)) {
    field = field.split('T')[0]
  } else if (/\d\d\d\d-\d\d-\d\d\s/.test(field)) {
    field = field.split(' ')[0]
  }

  if (field !== 0) {
    const temporalDate: Temporal.PlainDate = Temporal.PlainDate.from(field)

    const userPreferedCalendar = ensureValidCalendar(FALLBACK_CALENDAR_NAME)
    const localeStringOptions: Intl.DateTimeFormatOptions = {
      calendar: userPreferedCalendar,
      weekday: 'long',
      day: 'numeric',
      year: 'numeric',
      month: 'long',
      ...(format ?? {}),
      // numberingSystem: 'latn' /* default */,
      // timeZone: FALLBACK_TIME_ZONE_NAME,
    }

    const prettified: IPrettyfiedTemporalDate['prettified'] = temporalDate.toLocaleString(
      locale,
      localeStringOptions,
    )

    return {
      prettified,
      temporalDate,
    }
  }
  return {
    temporalDate: '',
  }
}

export const transformToPrettyfiedTemporalDate = (
  input: ITransformTemporalDate = {} as ITransformTemporalDate,
  locale?: string,
  dtfo?: Intl.DateTimeFormatOptions,
): IPrettyfiedTemporalDate => {
  const { year, month = '01', day = '01' } = input

  let temporalDate: Temporal.PlainDate | '' = ''
  let prettified: string = ''
  try {
    const attempt = Temporal.PlainDate.from(`${year}-${month}-${day}`)
    temporalDate = attempt.toPlainDateTime().toPlainDate()
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
  } catch {
    out = false
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

  const cal = Temporal.Calendar.from(FALLBACK_CALENDAR_NAME)
  const plainDate = Temporal.Now.plainDate(cal)
  const temporalDate = cal.dateFromFields({
    year: plainDate.year,
    month: plainDate.month,
    day: plainDate.day,
  })
  const formatOptions: Intl.DateTimeFormatOptions = {
    month: 'long',
    ...(options || {}),
  }
  for (let month = 1; month <= (temporalDate?.monthsInYear ?? 12); month++) {
    const thisMonth = temporalDate.with({ year: temporalDate.year, month })
    const formatted = thisMonth.toLocaleString(locale, formatOptions)
    out.push([String(month).padStart(2, '0'), formatted])
  }

  return out
}

export const fromDateToString = (d: Date): string => {
  if (!('toISOString' in d)) {
    const message = `Invalid argument for ${typeof d}`
    throw new Error(message)
  }
  return d.toISOString()?.split('T')?.[0] ?? ''
}
