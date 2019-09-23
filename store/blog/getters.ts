import { BlogGetters, Post } from './types'

export const getters: BlogGetters = {
  currentlySelected: state => {
    const items: Post[] = state.items
    const selected: string = state.selected
    const foundItem = items.find(item => item.slug === selected)
    if (foundItem) {
      return foundItem
    } else {
      return { slug: '' } as Post
    }
  },

  selectedMonthAndYear: state => (year: number, month: number): Post[] => {
    const items: Post[] = state.items
    return items.filter(
      item => item.dateTuple[0] === year && item.dateTuple[1] === month,
    )
  },
}

export default getters
