import {
  extractFrontMatterInnerDocument,
  parseMarkdownText,
} from '../model/content'
import {
  extractFrontMatterTagsAndNormalize,
  isFrontMatterCoverImageInnerDocument,
  isFrontMatterInnerDocument,
} from '../model'
import type {
  IFrontMatterCoverImageInnerDocument,
  IFrontMatterInnerDocument,
  INuxtOptionsHooks,
} from '../model/content'

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
    Reflect.set(document, 'categories', categories)
    // ------------------------------------------------------------------------
    let preamble: IFrontMatterInnerDocument | null = null
    const preambleMaybe = extractFrontMatterInnerDocument(document, 'preamble')
    if (preambleMaybe) {
      const parsedDocument = await parseMarkdownText(database, preambleMaybe)
      const merging = Object.assign(document.preamble, {
        document: parsedDocument,
      })
      if (isFrontMatterInnerDocument(merging)) {
        preamble = merging
      }
    }
    Reflect.set(document, 'preamble', preamble)
    // ------------------------------------------------------------------------
    let coverImage: IFrontMatterCoverImageInnerDocument | null = null
    const coverImageMaybe = extractFrontMatterInnerDocument(
      document,
      'coverImage',
    )
    if (coverImageMaybe) {
      const parsedDocument = await parseMarkdownText(database, coverImageMaybe)
      const merging = Object.assign(document.coverImage, {
        document: parsedDocument,
      })
      if (isFrontMatterCoverImageInnerDocument(merging)) {
        coverImage = merging
      }
    }
    Reflect.set(document, 'coverImage', coverImage)
    // ------------------------------------------------------------------------
  },
}
