
export const selectedMonthAndYear = (): state => (year: number, month: number): Post[] => {
    const items: Post[] = state.items
    return items.filter(
      item => item.dateTuple[0] === year && item.dateTuple[1] === month,
    )
  },
