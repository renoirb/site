import {
  NuxtOptionsHooks,
  INuxtContentParsedTreeRoot,
  IDocumentMeta,
} from '../model/content'

export const nuxtContentHooks: NuxtOptionsHooks = {
  'content:file:beforeInsert': async (document, database) => {
    if ('meta' in document) {
      const parseMeta = async (
        input: IDocumentMeta,
      ): Promise<INuxtContentParsedTreeRoot> => {
        if (input.markdown) {
          const body: unknown = await database.markdown.toJSON(input.markdown)
          return body as INuxtContentParsedTreeRoot
        }
        const message = `There is no content to parse`
        throw new Error(message)
      }
      if (document.meta && Array.isArray(document.meta)) {
        for (const meta of document.meta) {
          try {
            const body = await parseMeta(meta)
            Object.assign(meta, { body })
          } catch (_) {
            // Nothing to do
          }
        }
      }
    }
  },
}
