import { SlugInterface } from './slug'

export type ArticleType =
  | 'post'
  | 'archive'
  | 'project'
  | 'contribution'
  | 'job-position'

export const extractDateTuple = (line: string): number[] | boolean => {
  const pipeline = String(line)
    .split('-')
    .slice(0, 3)
    .map(n => parseInt(n, 10))

  const threeFirstAreNotNumbers = pipeline
    .map(i => Number.isInteger(i))
    .includes(false)
  const threeFirstAreNumbers = threeFirstAreNotNumbers === false
  if (threeFirstAreNumbers && pipeline.length === 3) {
    return pipeline
  } else {
    return false
  }
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
    return new Article(slug, path)
  }
}

export class Article implements SlugInterface {
  readonly slug: string
  readonly path: string

  constructor(slug: string, path: string) {
    this.path = path
    this.slug = slug
  }
}
