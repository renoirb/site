import type { INuxtContentResult } from '../model'
import { isObject } from '../runtime'
import type { ITaxonomyItem, ITaxonomyHuman } from './taxonomy'
import { isTaxonomyHuman, toTaxonomyItemCollection } from './taxonomy'

export type ITaxonomyFilterPredicate = (keys: string[]) => ITaxonomyItem[]

export type ITaxonomyHumanLookup = (key: string) => ITaxonomyHuman | undefined

export type ITaxonomyHumanLookupFactory = (
  items: ITaxonomyHuman[],
) => ITaxonomyHumanLookup

export const createTaxonomyHumanLookup = (
  items: ITaxonomyHuman[],
): ITaxonomyHumanLookup => (key: string) => {
  let out: ITaxonomyHuman | undefined
  const filtered = items.filter((i) => i.key === key)
  if (filtered.length > 0) {
    if (filtered.length === 1) {
      const item = filtered[0]
      out = { ...item }
    }
  }

  return out
}

export const hydrateTaxonomyCollection = (
  items: ITaxonomyItem[],
  human: ITaxonomyHuman[],
): ITaxonomyItem[] => {
  const out: ITaxonomyItem[] = []
  const humanLookup = createTaxonomyHumanLookup(human)
  for (const item of items) {
    const copy = { ...item }
    const human = humanLookup(item.key)
    if (human) {
      Object.assign(copy, { human })
    }
    out.push(copy)
  }

  return out
}

export const createTaxonomyItemLookup = (items: ITaxonomyItem[]) => {
  return (keys: string[]): ITaxonomyItem[] => {
    const out: ITaxonomyItem[] = []
    const predicate = (key: string): ITaxonomyItem | undefined =>
      items.find((i) => i.key === key)
    for (const key of keys) {
      const match = predicate(key)
      if (match) {
        out.push({ ...match })
      }
    }
    return out
  }
}

export const extractTaxonomyHuman = (
  input: Record<'human', any[]> | any,
): ITaxonomyHuman[] => {
  const out: ITaxonomyHuman[] = []
  if (isObject(input) === false) {
    const message = `Unexpected input, we expect an object`
    throw new TypeError(message)
  }
  if (Reflect.has(input, 'human')) {
    const maybeArray: unknown = Reflect.get(input, 'human')
    if (Array.isArray(maybeArray) && maybeArray.length > 0) {
      for (const maybe of maybeArray) {
        if (isTaxonomyHuman(maybe)) {
          out.push(maybe)
        }
      }
    }
  }
  return out
}

export const extractFrontMatterTagsAndNormalize = (
  input: INuxtContentResult,
): string[] => {
  const out = []
  const { tags } = input
  if (tags && Array.isArray(tags)) {
    // Normalize tags from the source so we can have articles
    // with same word, different CaSiNg (e.g. Foo and foo) as the same
    const tagsSet = new Set<string>(JSON.parse(JSON.stringify(tags)))
    const items = toTaxonomyItemCollection(tagsSet)
    const after = [...items.map((i) => i.key)]
    out.push(...after)
  }
  return out
}
