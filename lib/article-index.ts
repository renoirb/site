import { extractDateTuple } from './models/article'

export type FilterTypeFindByDate = (year: number, month?: number) => string[]

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

export class ArticleIndex {
  private lines: string[] = []

  /**
   * True if we have collection of lines that contains a path separator.
   *
   * If at the first add, the line had a path separator,
   * any other add will only work if they also contain a path separator.
   */
  private hasPaths: boolean = false

  /**
   * True if we have a collection of lines where the first characters contains a date.
   *
   * Only format that toggles this to true is if a line starts by a YYYY-MM-DD format
   * e.g. 2019-05-22-Foo-bar.
   *
   * Otherwise set to false.
   */
  private threeFirstAreNumbers: boolean = false

  constructor(readonly indexFile: string = '') {}

  setLines(lines: string[]): void {
    lines.forEach(line => this.add(line))
  }

  add(line: string): void {
    const isFirstAdd = this.lines.length < 1
    const hasPaths = /\//.test(line)
    const threeFirstAreNumbers = extractDateTuple(line) !== false
    if (isFirstAdd) {
      this.hasPaths = hasPaths
      this.threeFirstAreNumbers = threeFirstAreNumbers
    } else {
      let message = `Lines can only be with one format possible, we expected the line `
      if (hasPaths !== this.hasPaths) {
        if (this.hasPaths) {
          message += 'TO CONTAIN a path separator (e.g. /).'
        } else {
          message += 'NOT to contain a path separator.'
        }
        throw new Error(message)
      }
      if (threeFirstAreNumbers !== this.threeFirstAreNumbers) {
        if (this.threeFirstAreNumbers) {
          message += 'TO HAVE the three first parts to contain numbers.'
        } else {
          message += 'NOT to have numbers at the three first parts.'
        }
        throw new Error(message)
      }
    }
    if (!Array.prototype.includes.call(this.lines, line)) {
      this.lines.push(line)
    }
  }

  getLines(): string[] {
    return [...this.lines]
  }

  getYears(): number[] {
    return extractYears(this.lines)
  }

  getMontsFor(year: number): number[] {
    return extractMonths(this.lines)(year)
  }

  findByDate(year: number = 0, month: number = 0): string[] {
    if (this.threeFirstAreNumbers === false) {
      const message = `This method can only be used when the collection has lines with first part containing a date format (e.g. 2019-05-21-Foo)`
      throw new Error(message)
    }
    return createFindByDate(this.lines)(year, month)
  }
}
