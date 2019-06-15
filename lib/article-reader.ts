import yaml from 'js-yaml'

export const extractFrontMatter = (textContents: string): [any, number] => {
  const lines: string[] = textContents.split('\n')
  let firstContentLine: number = 0
  let hasFoundSecond = false
  const fm: string[] = lines.filter((line, index) => {
    if (/^---$/.test(line) && index > 1) {
      hasFoundSecond = true
      firstContentLine = index + 1
    }
    return hasFoundSecond === false
  })

  const extracted = yaml.safeLoad(fm.join('\n'))

  return [extracted, firstContentLine]
}

export const extractMarkdown = (
  textContents: string,
  firstLine: number
): string => {
  const lines: string[] = textContents.split('\n')
  const out: string[] = lines.filter((line, index) => {
    return index > firstLine
  })

  return out.join('\n')
}
