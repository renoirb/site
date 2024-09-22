import { strict as assert } from 'assert'
import { isObject } from '../../runtime'
import { abbreviatize } from '../abbreviations'
import type { INuxtContentParsedDocument, INuxtContentDatabase } from './parser'
import type { INuxtContentResult } from './model'

export interface IFrontMatterInnerDocument {
  /**
   * Markdown contents that will be parsed by Nuxt Content
   * and be used inside the slot contents.
   */
  text: string
  /**
   * Display a date for the note
   */
  date?: string
}

export interface IFrontMatterPreambleInnerDocument {
  /**
   * This article should age well enough so that
   * we do not need to add an "aged article" preamble
   * when the article is more than 5 years from the day
   * the static site has been generated.
   */
  disable?: true
}

export interface IFrontMatterCoverImageInnerDocument
  extends IFrontMatterInnerDocument {
  src: string
  alt?: string
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
  if (input && 'text' in input) {
    out = true
  }
  return out
}

export const assertsFrontMatterInnerDocument = (
  input: any,
): asserts input is IFrontMatterInnerDocument => {
  const expectedMessage = `We expected to receive an IFrontMatterInnerDocument`
  assert.equal(isFrontMatterInnerDocument(input), true, expectedMessage)
}

export const isFrontMatterCoverImageInnerDocument = (
  input: any,
): input is IFrontMatterCoverImageInnerDocument => {
  let out: boolean = false
  if (input && 'text' in input && 'src' in input) {
    out = true
  }
  return out
}

export const assertsFrontMatterCoverImageInnerDocument = (
  input: any,
): asserts input is IFrontMatterCoverImageInnerDocument => {
  const expectedMessage = `We expected to receive an IFrontMatterCoverImageInnerDocument`
  assert.equal(
    isFrontMatterCoverImageInnerDocument(input),
    true,
    expectedMessage,
  )
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
