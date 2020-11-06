import {
  extractFrontMatterInnerDocument,
  parseMarkdownText,
} from '../model/content'
import { extractFrontMatterTagsAndNormalize } from '../model'
import type { INuxtOptionsHooks } from '../model/content'

export const nuxtContentHooks: INuxtOptionsHooks = {
  'content:file:beforeInsert': async (document, database) => {
    // Normalize tags from the source so we can have articles
    // with same word, different CaSiNg (e.g. Foo and foo) as the same
    const tags = extractFrontMatterTagsAndNormalize('tags', document)
    Object.assign(document, { tags })
    const categories = extractFrontMatterTagsAndNormalize(
      'categories',
      document,
    )
    Object.assign(document, { categories })
    const preamble = extractFrontMatterInnerDocument(document, 'preamble')
    if (preamble) {
      try {
        const parsedDocument = await parseMarkdownText(database, preamble)
        Object.assign(document.preamble, { document: parsedDocument })
      } catch (_) {
        // Nothing to do
      }
    }
  },
}
