import { NuxtOptions } from '@nuxt/types'
import type { INuxtContentResult, IBaseNuxtContentResult } from './model'

type INuxtContentParser = Record<
  'toJSON',
  (raw: string) => IBaseNuxtContentResult
>

/**
 * Bookmarks:
 * - https://github.com/nuxt/content/blob/%40nuxt/content%401.8.0/packages/content/lib/database.js#L22-L25
 */
export interface INuxtContentDatabase {
  markdown: INuxtContentParser
  yaml: INuxtContentParser
  csv: INuxtContentParser
}

type NuxtOptionsHooks = NuxtOptions['hooks']

/**
 * Bookmarks:
 * - https://content.nuxtjs.org/advanced/#contentfilebeforeinsert
 */
export interface INuxtOptionsHooks extends NuxtOptionsHooks {
  'content:file:beforeInsert': (
    document: INuxtContentResult,
    database: INuxtContentDatabase,
  ) => void
}

export interface INuxtContentParsedTreeChild {
  type: string | 'element'
  tag: string | 'p' | 'nuxt-link' | 'li'
  props: Record<string, string>
}

export interface INuxtContentParsedTreeTextNode {
  type: 'text'
  value: string
}

export type INuxtContentParsedTreeChidren = (
  | INuxtContentParsedTreeTextNode
  | INuxtContentParsedTreeChild
)[]

/**
 * What Nuxt content internally uses when transforming files.
 */
export interface INuxtContentParsedTreeRoot {
  type: 'root'
  children: INuxtContentParsedTreeChidren
}

export interface INuxtContentParsedDocument {
  body: INuxtContentParsedTreeRoot
}
