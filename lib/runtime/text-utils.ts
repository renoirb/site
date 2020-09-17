/**
 * Take a multi-line back-tick(ed) string, make it one line.
 */
export const trimText = (stringContents: TemplateStringsArray): string => {
  return stringContents.join(' ').replace(/[\n\s]/g, ' ')
}
