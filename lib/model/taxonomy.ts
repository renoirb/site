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
  // Replace spaces into --
  internal = internal.replace(/\s+/g, '--')
  // When more than 3 "-", into --
  internal = internal.replace(/-{3,}/g, '--')
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
