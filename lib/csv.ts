import { SlugInterface, ArticleFactory, ArticleType } from './models'
import { NuxtRouteInterface } from './runtime'

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
): NuxtRouteInterface[] {
  const routes: NuxtRouteInterface[] = []

  return routes
}
