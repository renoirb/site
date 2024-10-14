import { strict as assert } from 'assert'
import { isObject } from '../../runtime'
import { abbreviatize } from '../abbreviations'
import type {
  INuxtContentParsedDocument,
  VueNodeType,
  VueRenderTree,
  VueRenderTreeNonRoot,
  VueNodeTag,
} from '../../types'
import type { INuxtContentDatabase } from './parser'
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
  /**
   * Responsive images srcset alternate images
   *
   * List of image location and size
   *
   * @example
   * ```
   * IMG_0325-225x300.jpg 225w
   * ```
   */
  srcset?: string[]
  /**
   * Responsive images size attribute
   *
   * @example
   * ```
   * (max-width: 225px) 100vw, 225px
   * ```
   */
  sizes?: string
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
  document: IFrontMatterInnerDocument,
  database: INuxtContentDatabase,
): Promise<INuxtContentParsedDocument> => {
  let body: INuxtContentParsedDocument
  if (isObject(document) === false) {
    const message = `Unexpected input, we expect an object`
    throw new TypeError(message)
  }
  let errorSuffix = ''
  if (isFrontMatterInnerDocument(document)) {
    try {
      /**
       * Make all text with abbreviations to be wrapped into
       * appropriate abbr tag.
       */
      const textContent = abbreviatize(document.text)
      /**
       * Taking on what markdown.toJSON returns
       * https://github.com/nuxt/content/blob/%40nuxt/content%401.10.0/packages/content/parsers/markdown/index.js#L95
       */
      const parsed = await database.markdown.toJSON(textContent)
      if (parsed && 'body' in parsed) {
        body = parsed as INuxtContentParsedDocument
        return body
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


export const getVueNodeTag = (node: VueRenderTreeNonRoot): VueNodeTag => {
  if (getVueNodeType(node) === 'element' && 'tag' in node) {
    const { tag } = node
    return tag
  }
  const message = `Unexpected input, only VueRenderTreeNonRoot of type 'element' has a tag property`
  throw new Error(message)
}

export const getVueNodeType = (node: VueRenderTree): VueNodeType | '' => {
  const { type = '' } = node
  return type
}

export const isVueNodeWithChildren = (input: object): input is { children: VueRenderTreeNonRoot[] } => {
  if (input && 'children' in input && Array.isArray(input.children)) {
    return true
  }
  return false
}

export const getVueNodeChildren = (body): VueRenderTreeNonRoot[] => {
  if (isVueNodeWithChildren(body)) {
    const { children = [] } = body
    return children
  }
  return []
}
