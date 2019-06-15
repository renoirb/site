export type FilterTypeFindByDate = (year: number, month?: number) => string[]

export const extractDateTuple = (line: string): number[] | false => {
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

export const extractYears = (items: string[]): number[] => {
  const years = new Set<number>()
  for (const line of items) {
    const dateTuple = extractDateTuple(line)
    years.add(dateTuple[0])
  }

  return [...years].sort()
}

export const extractMonths = (items: string[]) => {
  const list = createFindByDate(items)
  return (year: number): number[] => {
    const months = new Set<number>()
    const subList = list(year)
    for (const line of subList) {
      const dateTuple = extractDateTuple(line)
      months.add(dateTuple[1])
    }

    return [...months].sort()
  }
}

export const createFindByDate = (items: string[]): FilterTypeFindByDate => (
  year: number = 0,
  month: number = 0
): string[] => {
  const lines = [...items].filter(line => {
    const dateTuple = extractDateTuple(line)
    if (dateTuple[0] === year) {
      if (month > 0) {
        if (dateTuple[1] === month) {
          return true
        } else {
          return false
        }
      }
      return true
    }
    return false
  })
  return lines
}
