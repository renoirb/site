import { SlugInterface, ArticleFactory, ArticleType } from './models'
import { VueRouterLocationInterface } from '~/lib/runtime'

export const csvToSlugCollection = (type: ArticleType) => {
  const factory = new ArticleFactory(type)
  return (recv: string[]): SlugInterface[] => {
    const articles: SlugInterface[] = []
    recv.forEach(slug => {
      const article = factory.create(slug)
      articles.push(article)
    })

    return articles
  }
}

export function routesCollection(
  slugs: SlugInterface[] = []
): VueRouterLocationInterface[] {
  const routes: VueRouterLocationInterface[] = []

  return routes
}
