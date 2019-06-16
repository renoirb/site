import { extractDateTuple } from '~/lib/date-time'
import { SlugInterface, DateTupleSlug } from './slug'

export type ArticleType =
  | 'post'
  | 'archive'
  | 'project'
  | 'contribution'
  | 'job-position'

export const dateTupleSlugToString = (dto: DateTupleSlug): string | null => {
  const keys: string[] = ['year', 'month', 'day', 'slug']
  const out: string[] = []
  for (const key of keys) {
    if (dto[key]) {
      out.push(String(dto[key]).padStart(2, '0'))
    }
  }

  if (out.length !== keys.length) {
    return null
  }

  return out.join('-')
}

export const dateTupleSlugToPath = (slug: string): string => {
  let slugCopy: string = `${slug}`
  const dateTuple = extractDateTuple(slug)
  if (Array.isArray(dateTuple)) {
    slugCopy = dateTuple.join('/')
    slugCopy += '/'
    slugCopy += String(slug)
      .split('-')
      .slice(dateTuple.length)
      .join('-')
  }

  return slugCopy
}

export const articleFormatPathHelper = (type: ArticleType) => {
  let prefix: string = ''
  switch (type) {
    case 'post':
      prefix += 'blog'
      break
    default:
      prefix += `${type}`
      break
  }

  const slugHasMarkdownExtensionRegEx = /\.md$/i

  return (slug: string): string => {
    let slugCopy: string = `${slug}`
    if (type === 'post') {
      slugCopy = dateTupleSlugToPath(slug)
    }

    if (slugHasMarkdownExtensionRegEx.test(slug)) {
      slugCopy = slugCopy.replace(slugHasMarkdownExtensionRegEx, '')
    }

    return `${prefix}/${slugCopy}`
  }
}

export class ArticleFactory {
  private formatPath: (slug: string) => string

  constructor(private readonly type: ArticleType) {
    this.type = type
    this.formatPath = articleFormatPathHelper(type)
  }

  create(slug: string): Article {
    const path = this.formatPath(slug)
    const out: Article = new Article(slug, path)
    out.type = this.type
    return out
  }
}

export class Article implements SlugInterface {
  type: ArticleType = 'post'

  title: string = ''

  content: string = ''

  readonly dateTuple: number[] | false

  constructor(readonly slug: string, readonly path: string) {
    this.path = path
    this.slug = slug
    this.dateTuple = extractDateTuple(slug)
  }
}

export interface ArticleContentStorePayload {
  readonly content: string
  readonly slug: string
  readonly title: string
}

export interface ArticleMetadataStorePayload {
  readonly slug: string
  readonly [key: string]: string[] | boolean | string | number
}
