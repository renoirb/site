import type { INuxtContentResult } from '../model'
import { toTaxonomyItemCollection } from './taxonomy'

export const extractFrontMatterTagsAndNormalize = (
  taxonomyPredicateKey: string,
  input: INuxtContentResult,
): string[] => {
  const out = []
  const collection: false | string[] =
    taxonomyPredicateKey in input ? input[taxonomyPredicateKey] : false
  if (collection && Array.isArray(collection)) {
    // Normalize tags from the source so we can have articles
    // with same word, different CaSiNg (e.g. Foo and foo) as the same
    const itemsSet = new Set<string>(JSON.parse(JSON.stringify(collection)))
    const items = toTaxonomyItemCollection(itemsSet)
    const after = [...items.map((i) => i.key)]
    out.push(...after)
  }
  return out
}
