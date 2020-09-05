export type IAlertType = 'error' | 'info' | 'warn'

export type IStyleMapAlert = {
  outer: string[]
  heading: string[]
}

export const styleMapAlert = (type: IAlertType): IStyleMapAlert => {
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

    default:
      // eslint-disable-next-line
      const _e: never = type
      break
  }

  const outer = [`bg-${color}-100`, `text-${color}-700`, `border-${color}-400`]
  const heading = [`bg-${color}-400`, `text-${textColor}`]

  return {
    outer,
    heading,
  }
}
