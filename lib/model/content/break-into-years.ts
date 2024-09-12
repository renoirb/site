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
  content: Record<'created' | 'updated', string>,
): number => {
  let out: number = 0

  const { created = '', updated } = content

  if (created !== '') {
    out = extractYearFromDateString(created)
  }
  if (out === 0 && updated) {
    out = extractYearFromDateString(updated)
  }

  return out
}

export const breakIntoYears = (
  contents: INuxtContentIndexResult[],
): INuxtContentIndexResultByYears => {
  const out: INuxtContentIndexResultByYears = []
  for (const content of contents) {
    const year = extractYearFromRecord(content)
    let bucket = out.find(([y]) => y === year && year !== 0)
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
