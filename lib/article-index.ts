export const extractThreeFirstNumbers = (line: string): number[] | boolean => {
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

  constructor(readonly indexFile: string) {}

  add(line: string): void {
    const isFirstAdd = this.lines.length < 1
    const hasPaths = /\//.test(line)
    const threeFirstAreNumbers = extractThreeFirstNumbers(line) !== false
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

  findByDate(year: number, month: number = 0): string[] {
    if (this.threeFirstAreNumbers === false) {
      const message = `This method can only be used when the collection has lines with first part containing a date format (e.g. 2019-05-21-Foo)`
      throw new Error(message)
    }
    const lines = [...this.lines].filter(line => {
      const dateTuple = extractThreeFirstNumbers(line)
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
}
