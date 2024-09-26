/**
 * Take a multi-line back-tick(ed) string, make it one line.
 */
export const trimText = (stringContents: TemplateStringsArray): string => {
  return stringContents.join(' ').replace(/[\n\s]/g, ' ')
}

let increment = 0

export const sanitizeHtmlTagAttributeExpectingOneWord = (
  input: string,
  maxSuffixLength = 15,
): string => {
  return input
    .toLocaleLowerCase()
    .replace(/[\s\t\n]/g, '-')
    .padEnd(maxSuffixLength, `${increment++}`)
    .substring(0, maxSuffixLength)
}
