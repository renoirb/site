import { isObject } from '../../runtime'
import { abbreviatize } from '../abbreviations'
import type {
  INuxtContentParsedDocument,
  INuxtContentDatabase,
  INuxtOptionsHooks,
} from './parser'
import type { INuxtContentResult } from './model'

export interface IFrontMatterInnerDocument {
  /**
   * Markdown contents that will be parsed by Nuxt Content
   * and be used inside the slot contents.
   */
  text: string
}

export interface IFrontMatterInnerDocumentParsed
  extends IFrontMatterInnerDocument {
  /**
   * Following Nuxt Content's rendering pattern.
   * What's in markdown property transformed for rendering
   */
  document: INuxtContentParsedDocument | null
}

export const parseMarkdownText = async (
  database: INuxtContentDatabase,
  input: IFrontMatterInnerDocument,
): Promise<INuxtContentParsedDocument> => {
  let out: INuxtContentParsedDocument
  if (isObject(input) === false) {
    const message = `Unexpected input, we expect an object`
    throw new TypeError(message)
  }
  let errorSuffix = ''
  if (input.text) {
    try {
      /**
       * Make all text with abbreviations to be wrapped into
       * appropriate abbr tag.
       */
      const textContent = abbreviatize(input.text)
      /**
       * Taking on what markdown.toJSON returns
       * https://github.com/nuxt/content/blob/%40nuxt/content%401.10.0/packages/content/parsers/markdown/index.js#L95
       */
      const parsed = await database.markdown.toJSON(textContent)
      if (parsed && 'body' in parsed) {
        out = parsed as INuxtContentParsedDocument
        return out
      }
    } catch (e) {
      errorSuffix += String(e)
    }
  }
  const message = `There is no content to parse` + errorSuffix
  throw new Error(message)
}

export const isFrontMatterInnerDocument = (
  input: any,
): input is IFrontMatterInnerDocument => {
  let out: boolean = false
  if ('text' in input) {
    out = true
  }
  return out
}

export const extractFrontMatterInnerDocument = (
  input: INuxtContentResult,
  key: string,
): IFrontMatterInnerDocument | null => {
  let out: null | IFrontMatterInnerDocument = null
  if (isObject(input) === false) {
    const message = `Unexpected input, we expect an object`
    throw new TypeError(message)
  }
  if (key in input) {
    if (isFrontMatterInnerDocument(input[key])) {
      out = input[key]
    }
  }
  return out
}

export const nuxtContentHooks: INuxtOptionsHooks = {
  'content:file:beforeInsert': async (document, database) => {
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
