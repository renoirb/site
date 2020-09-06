import { Route, RouteRecord } from 'vue-router'

export const typeGuardIsRoute = (maybe: any): maybe is Route => {
  let outcome = false
  if (maybe && maybe.matched && Array.isArray(maybe.matched)) {
    outcome = true
  }
  return outcome
}

export interface IRoutePartial {
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

export const pickMatchedToRoutePartialCollection = (
  route: Route,
): IRoutePartial[] => {
  const {
    params = {} as Route['params'],
    matched = [] as Route['matched'],
  } = route
  const mapper = (r: RouteRecord, index: number): IRoutePartial => {
    const { name, path } = r
    const parts = path.split('/').filter((p) => p !== '')
    let part = parts.slice().pop()
    if (part.startsWith(':')) {
      part = (part || '').replace(/^:/, '')
    } else {
      part = parts[index]
    }
    const urlParts = parts.slice().map((p) => {
      const paramName = p.replace(/^:/, '')
      const value = params[paramName]
      return !value ? paramName : value
    })

    const nameRewritten = parts
      .slice()
      .map((p) => {
        return p.replace(/^:/, '')
      })
      .join('-')

    const crumb = ['', ...urlParts].join('/')
    const nameValue = name || nameRewritten
    const paramValue = params[part] ? params[part] : nameValue
    const out: IRoutePartial = {
      crumb,
      index,
      name: nameValue,
      param: paramValue,
      path,
    }
    return out
  }
  const collection = matched.map(mapper)
  return collection
}
