import { strict as assert } from 'assert'
import { isObject } from '../runtime'

/**
 * Structure content to help organization.
 *
 * Use this data structure for tagging/categorizing
 * content, articles, pages, projects, ideas.
 */
export interface ITaxonomy {
  /**
   * The taxonomy identifier, MUST be valid ascii characters
   * for an URL.
   */
  key: string
}

/**
 * Human readable definition for the current ITaxonomy.
 */
export interface ITaxonomyHuman extends ITaxonomy {
  /**
   * Taxonomy may have different translation
   * which locale is this translation.
   */
  locale: string
  /**
   * Text to display for that taxonomy item.
   */
  text: string
  /**
   * If there would be a view describing the purpose
   * of the taxonomy item, this should be the text describing it.
   */
  description?: string
}

export interface ITaxonomyItem extends ITaxonomy {
  /**
   * Human readable textContent
   */
  human?: ITaxonomyHuman
}

export interface ITaxonomyAggregate {
  /**
   * Taxonomy type.
   */
  readonly type: string
  /**
   * Available for this object.
   */
  items: ITaxonomyItem[]
}

export interface ITaxonomyHumanLink extends Partial<ITaxonomyHuman> {
  text: string
}

/**
 * Normalize and ascii(ze) a string of text.
 *
 * Steps:
 * - lowercase
 * - convert accented character to non accented.
 * - replace spaces to two dashes
 * - maximum of two consecutive dash
 */
export const toTaxonomyKey = (
  input: string,
  locale: string = 'fr-CA',
): string => {
  let internal = String(input).toLocaleLowerCase(locale)
  // Remove accents
  internal = internal.normalize('NFD').replace(/[\u0300-\u036F]/g, '')
  // Replace spaces into -
  internal = internal.replace(/\s+/g, '-')
  // When more than 3 "-", into -
  internal = internal.replace(/-{3,}/g, '-')
  // Remove trailing dashes
  internal = internal.replace(/-+$/g, '')
  // Remove dashes at begining
  internal = internal.replace(/^-+/g, '')
  return internal
}

export const toTaxonomyItemCollection = (
  keys: string[] | Set<string>,
  locale: string = 'fr-CA',
): ITaxonomyItem[] => {
  const out: ITaxonomyItem[] = []
  const items: string[] = [...keys]
  for (const k of items) {
    const key = toTaxonomyKey(k, locale)
    const item: ITaxonomyItem = {
      key,
    }
    out.push(item)
  }
  return out
}

export const toTaxonomyHumanLink = (
  taxonomy: ITaxonomyItem,
): ITaxonomyHumanLink => {
  const out: ITaxonomyHumanLink = {
    key: taxonomy.key,
    text: taxonomy.key,
  }
  if (taxonomy.human) {
    if (taxonomy.human.text) {
      out.text = taxonomy.human.text
    }
    if (taxonomy.human.description) {
      out.description = taxonomy.human.description
    }
  }
  return out
}

export type IToTaxonomyHumanLink = typeof toTaxonomyHumanLink

export const isTaxonomyItem = (input: any): input is ITaxonomyItem => {
  let out: boolean = false
  if ('key' in input) {
    out = true
  }
  return out
}

export const assertsTaxonomyItem = (
  input: any,
): asserts input is ITaxonomyItem => {
  if (isObject(input) === false) {
    const message = `Unexpected input, we expect an object`
    throw new TypeError(message)
  }
  assert.equal(isTaxonomyItem(input), true, `Is not a ITaxonomyItem`)
}

export const isTaxonomyHuman = (input: any): input is ITaxonomyHuman => {
  let out: boolean = false
  if (isObject(input)) {
    const mustKeys = ['key', 'text']
    const tests: boolean[] = []
    for (const key of mustKeys) {
      tests.push(key in input)
    }
    if (tests.includes(false) === false) {
      out = true
    }
  }
  return out
}

export const assertsTaxonomyHuman = (
  input: any,
): asserts input is ITaxonomyHuman => {
  if (isObject(input) === false) {
    const message = `Unexpected input, we expect an object`
    throw new TypeError(message)
  }
  assert.equal(isTaxonomyHuman(input), true, `Is not a ITaxonomyHuman`)
}

export type ITaxonomyFilterPredicate = (keys: string[]) => ITaxonomyItem[]

export type ITaxonomyHumanLookup = (key: string) => ITaxonomyHuman | undefined

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
