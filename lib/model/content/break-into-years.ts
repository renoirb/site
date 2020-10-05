import { getPrettyfiedTemporalDate } from '../date'
import { INuxtContentIndexResult } from './model'

export type INuxtContentIndexResultByYears = [
  number,
  INuxtContentIndexResult[],
][]

export const extractYearFromDateString = (dateString: string | ''): number => {
  if (/\d{0,4}/.test(dateString || '')) {
    const year = dateString.split('-')[0]
    return Number(year)
  }
  const message = `Invalid date ${dateString}`
  throw new Error(message)
}

export const extractYearFromRecord = (
  content: Record<'date' | 'createdAt', string>,
): number => {
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
    const year = extractYearFromRecord(content)
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
