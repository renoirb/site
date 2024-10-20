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
  content: Record<'createdAt' | 'updatedAt', string>,
): number => {
  let out: number = 0

  const { createdAt = '', updatedAt } = content

  if (createdAt !== '') {
    out = extractYearFromDateString(createdAt)
  }
  if (out === 0 && updatedAt) {
    out = extractYearFromDateString(updatedAt)
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
      // Something fishy here, unfinished stuff I haven’t touched in 4 years.
      // That'll probably be done differently.
      bucket = out.find(([y]) => y === year)
    }
    const prettyfiedTemporalDate = getPrettyfiedTemporalDate(
      content,
      content.locale,
    )
    content.prettyfiedTemporalDate = prettyfiedTemporalDate
    // Mutating bucket after the fact. Something’s unfinished here, and I forgot what.
    // eslint-disable-next-line
    bucket?.[1].push(content)
  }

  // Make sure it's sorted by year, chronologically
  return out.filter(([y]) => y !== 0).sort((a, b) => b[0] - a[0])
  //                         ^^^^^^^
  //                         | We set all with no createdAt date into a bucket aside and don't display them.
}
