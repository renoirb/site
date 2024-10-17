import { strict as assert } from 'assert'
import type { contentFunc } from '@nuxt/content'
import { abbreviatize } from '../..'
import type {
  INuxtContentParsedDocument,
  VueNodeType,
  VueRenderTree,
  VueRenderTreeNonRoot,
  VueNodeTag,
} from '../../types'

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


export const createNuxtContentParsedDocument = async (
  input: { text: string } | undefined,
  $content: contentFunc,
): Promise<INuxtContentParsedDocument> => {
  let md = ''
  if (input && Reflect.has(input, 'text')) {
    md = input.text
  }
  await Promise.resolve()
  /**
   * Make all text with abbreviations to be wrapped into
   * appropriate abbr tag.
   */
  md = abbreviatize(md)
  /**
   * Taking on what markdown.toJSON returns
   * https://github.com/nuxt/content/blob/%40nuxt/content%401.10.0/packages/content/parsers/markdown/index.js#L95
   */
  const out = await $content?.database?.markdown?.toJSON(md)
  return out as INuxtContentParsedDocument
}

export const isFrontMatterInnerDocument = (
  input: unknown,
): input is IFrontMatterInnerDocument => {
  let out: boolean = false
  if (input && Reflect.has(input, 'text')) {
    out = true
  }
  return out
}

export const assertsFrontMatterInnerDocument: (input: unknown) => asserts input is IFrontMatterInnerDocument = (
  input,
) => {
  const expectedMessage = `We expected to receive an IFrontMatterInnerDocument`
  assert.equal(isFrontMatterInnerDocument(input), true, expectedMessage)
}

export const isFrontMatterCoverImageInnerDocument = (
  input: unknown,
): input is IFrontMatterCoverImageInnerDocument => {
  let out: boolean = false
  if (isFrontMatterInnerDocument(input) && Reflect.has(input, 'src')) {
    out = true
  }
  return out
}

export const assertsFrontMatterCoverImageInnerDocument: (input: unknown) => asserts input is IFrontMatterInnerDocument = (
  input,
) => {
  const expectedMessage = `We expected to receive an IFrontMatterCoverImageInnerDocument`
  assert.equal(
    isFrontMatterCoverImageInnerDocument(input),
    true,
    expectedMessage,
  )
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
