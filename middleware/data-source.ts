import { Context } from '@nuxt/vue-app'

import {
  postFetchService,
  Post,
  DATA_SOURCE_NAMES,
  DataSourceType,
} from '~/lib/models'

export type monthAndYearFunctionType = (
  items: Post[],
) => (year?: string, month?: string) => Post[]

const createFilteringHelper: monthAndYearFunctionType = (items: Post[]) => (
  year?: string,
  month?: string,
): Post[] => {
  const pickedYear: number | false = year ? parseInt(year, 10) : false
  const pickedMonth: number | false = month ? parseInt(month, 10) : false
  const filtered = items.filter(item => {
    const matchYear = item.dateTuple[0] === pickedYear
    const matchMonth = item.dateTuple[1] === pickedMonth
    if (matchMonth && matchYear) {
      return true
    } else if (matchYear) {
      return true
    }

    return false
  })
  return filtered
}

const getDataSourceNameFromContext = (ctx: Context): string | null => {
  // path = /blog/2019/06/foo-bar
  const { path } = ctx.route
  // We want 'blog', from `['', 'blog', '2019', '06', 'foo-bar']`
  const name = path.split('/')[1]

  return name
}

export default async (ctx: Context) => {
  const name: string | null = getDataSourceNameFromContext(ctx)
  const isDataSource = name && name in DATA_SOURCE_NAMES ? name : false
  const posts: Post[] = []
  if (isDataSource) {
    const [, , year, month, day, slug] = ctx.route.path.split('/')
    // Do not fill store as long as we are not at a month
    if (!month) {
      const fetchPosts = postFetchService(ctx.$axios)
      const items = await fetchPosts()
      const filteringHelper = createFilteringHelper(items)
      const subset = filteringHelper(year, month)
      posts.push(...subset)

      console.log(`middleware/data-source, dataSource is ${name}`, {
        year,
        month,
        day,
        slug,
        posts,
      })
    }
  }

  console.log('middleware/data-source', ctx)
}
