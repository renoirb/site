import { SlugInterface, NuxtRouteInterface } from './models'

export function csvToSlugCollection(
  stringContents: string = ''
): SlugInterface[] {
  const lines = (stringContents || '').split('\n')
  const items: SlugInterface[] = []
  lines.forEach(slug => {
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
