export type IAlertType = 'error' | 'info' | 'warn'

export type IStyleMapAlert = {
  outer: string[]
  heading: string[]
}

export type IColorTextColor = Record<'color' | 'textColor', string>

export const styleMapAlert = (
  type: IAlertType,
  andRestForHackishPostCssThing = false,
): IStyleMapAlert => {
  // rel=#MakePurgeCSSNotPurgeThisPlease
  // Idea is to have inventory of all possible permutations
  // so that PurgeCSS won't purge them in the component
  const allTypes = new Set(['info', 'warn', 'error'])
  allTypes.delete(type)

  const outer = []
  const heading = []

  const outerTokens = (cfg: IColorTextColor): string[] => [
    `bg-${cfg.color}-200`,
    `text-${cfg.color}-800`,
    `border-${cfg.color}-400`,
  ]
  const headingTokens = (cfg: IColorTextColor): string[] => [
    `bg-${cfg.color}-400`,
    `text-${cfg.textColor}`,
  ]

  const pickColor = (type): IColorTextColor => {
    let color = 'yellow'
    // Think about contrast for textColor
    let textColor = 'black'
    switch (type) {
      case 'info':
        color = 'blue'
        textColor = 'white'
        break

      case 'warn':
        color = 'yellow'
        break

      case 'error':
        color = 'red'
        textColor = 'white'
        break
    }

    return { color, textColor }
  }

  outer.push(...outerTokens(pickColor(type)))
  heading.push(...headingTokens(pickColor(type)))

  if (andRestForHackishPostCssThing) {
    for (const other of [...allTypes]) {
      outer.push(...outerTokens(pickColor(other)))
      heading.push(...headingTokens(pickColor(other)))
    }
  }

  return {
    outer,
    heading,
  }
}
