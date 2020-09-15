import { Route, RouteRecord } from 'vue-router'

export const typeGuardIsRoute = (maybe: any): maybe is Route => {
  let outcome = false
  if (maybe && maybe.matched && Array.isArray(maybe.matched)) {
    outcome = true
  }
  return outcome
}

export interface IRouteCrumb {
  /**
   * The filled path from root up to this item
   * e.g. "/blog/2020/08/some-article-slug"
   */
  crumb: string
  index: number
  /**
   * Original RouteRecord name value
   */
  name: RouteRecord['name']
  /**
   * Value of the current part of the URL
   * Say, it's the last part from "/blog/2020/08/some-article-slug",
   * we'd have "some-article-slug"
   */
  param: string
  /**
   * Original RouteRecord path value
   */
  path: RouteRecord['path']
}

/**
 * Navigation at the top of the site
 */
export interface IAppHeaderNavItems {
  label: string
  to: string
}

/**
 * Extract from Vue-Router collection of
 * parts of URL for a bread-crumb.
 *
 * Partially inspired by a question on StackOverflow, but
 * found after having written this.
 *
 * Notice that in order for this to work, it expects
 * all files to exist.
 *
 * e.g. for path "/blog/:year/:month/:slug"
 *
 * There has to be the following files:
 * - pages/blog.vue
 * - pages/blog/index.vue
 * - pages/blog/_year.vue
 * - pages/blog/_year/index.vue
 * - pages/blog/_year/_month.vue
 * - pages/blog/_year/_month/index.vue
 * - pages/blog/_year/_month/_slug.vue
 * - pages/blog/_year/_month/_slug/index.vue
 *
 * Which may feel cumbersome, but doesn't need to be a full page
 * component. Besides, it's useful for inserting parts of pages
 * that are common per where you are on the app.
 *
 * Bookmarks:
 * - https://stackoverflow.com/a/57689774
 */
export const routeToCrumbs = (route: Route): IRouteCrumb[] => {
  const {
    params = {} as Route['params'],
    matched = [] as Route['matched'],
  } = route

  const mapper = (r: RouteRecord, index: number): IRouteCrumb => {
    const { name, path } = r
    const parts = path.split('/')
    let part = parts.slice().pop()
    if (part.startsWith(':')) {
      part = (part || '').replace(/^:/, '')
    } else {
      part = parts[index]
    }
    const urlParts = parts.slice().map((p) => {
      let value = p
      if (p.startsWith(':')) {
        const paramName = p.replace(/^:/, '')
        value = params[paramName]
      }
      return value
    })

    const nameRewritten = parts.slice().map((p) => {
      return p.replace(/^:/, '')
    })

    const crumb = urlParts.join('/')
    const nameValue = name || nameRewritten[nameRewritten.length - 1]
    const paramValue = params[part] ? params[part] : nameValue
    const out: IRouteCrumb = {
      crumb,
      index,
      name: nameValue,
      param: paramValue,
      path,
    }
    return out
  }
  const collection = matched.map(mapper)
  collection.pop()
  return collection
}
