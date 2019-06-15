import { extractDateTuple } from '~/lib/date-time'
import { SlugInterface } from './slug'

export type ArticleType =
  | 'post'
  | 'archive'
  | 'project'
  | 'contribution'
  | 'job-position'

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

  readonly slug: string
  readonly path: string

  title: string = ''

  content: string = ''

  readonly dateTuple: number[] | false

  constructor(slug: string, path: string) {
    this.path = path
    this.slug = slug
    this.dateTuple = extractDateTuple(slug)
  }
}
