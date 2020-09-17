export const ACCEPTABLE_CALENDAR = [
  'buddhist',
  'chinese',
  'gregory',
  'hebrew',
  'indian',
  'islamic',
  'iso8601',
  'japanese',
]

export const FALLBACK_CALENDAR = 'gregory'

export const ensureValidCalendar = (calendarName: string): string => {
  const isValid = ACCEPTABLE_CALENDAR.includes(calendarName)
  return isValid ? calendarName : FALLBACK_CALENDAR
}
