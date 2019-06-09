import { SlugInterface } from './models'
import { NuxtRouteInterface } from './runtime'

export function csvToSlugCollection(
  stringContents: string = ''
): SlugInterface[] {
  // [].filter(Boolean) removes any empty members
  const lines = (stringContents || '').split('\n').filter(Boolean)
  const items: SlugInterface[] = []
  lines.forEach((slug, index) => {
    // console.log('slug', index, slug)
    const p: SlugInterface = { slug }
    items.push(p)
  })

  return items
}

export function routesCollection(
  slugs: SlugInterface[] = []
): NuxtRouteInterface[] {
  const routes: NuxtRouteInterface[] = []

  return routes
}
