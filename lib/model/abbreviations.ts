export type IAbbreviatize = (prose: string) => string

const ABBREVIATION = [
  'css',
  'dns',
  'http',
  'js',
  'json',
  'json5',
  'php',
  'sass',
  'scss',
  'vim',
  'wiki',
  'xml',
  'yaml',
  'html',
  'js',
] as const

export type IDefinedAbbreviation = typeof ABBREVIATION[number]

export const DEFINED_ABBREVIATION = new Set(ABBREVIATION)

export const hasDefinedAbbreviation = (
  abbr: string,
): abbr is IDefinedAbbreviation => {
  return DEFINED_ABBREVIATION.has(abbr as any)
}

/**
 * Abbreviaton and accronyms should be set from one place
 * and rewritten correctly from one place.
 * Even if text isn't having it right.
 * @TODO A Good place to store authoritative WoRd CasInG should be here.
 */
const ABBREVIATION_TEXT = new Map<IDefinedAbbreviation, string>([
  ['css', 'Cascading Style Sheet'],
  ['dns', 'Domain Name Service (network Name resolution)'],
  ['http', 'Hyper Text Transfer Protocol'],
  ['js', 'JavaScript'],
  ['json', 'JavaScript Object Notation'],
  ['json5', 'JavaScript Object Notation version 5'],
  ['php', 'Hypertext Pre Pprocessor'],
  ['sass', 'Syntactically Awesome Stylesheets'],
  ['vim', 'Vi IMproved'],
  ['xml', 'eXtensible Markup Language'],
  ['yaml', 'YAML Ain’t Markup Language'],
  ['html', 'Hyper Text Markup Language'],
  ['js', 'JavaScript'],
])

const createAbbreviateHtmlTagString: IAbbreviatize = (key: string): string => {
  const out = key
  const definition: string | undefined = ABBREVIATION_TEXT.get(key as any)
  if (definition) {
    const abbr = String(key).toLocaleUpperCase()
    return `<abbr lang="en" title="${definition}">${abbr}</abbr>`
  }
  return out
}

/**
 * @TODO Make this as VNode instead.
 * Also, this might be a bit too heavy.
 */
export const abbreviatize: IAbbreviatize = (text: string): string => {
  let out = text
  const tokenized = text.split(' ')
  const matches = tokenized
    .filter((token) => hasDefinedAbbreviation(token.toLowerCase()))
    .map((token) => String(token).toLowerCase())
  if (matches.length > 0) {
    for (let i = 0; i < tokenized.length; i++) {
      const token = String(tokenized[i]).toLowerCase()
      if (hasDefinedAbbreviation(token)) {
        /**
         * @TODO Let's leverage VNode[].
         * Also, this only replaces the first instance.
         * That'll do for now.
         * It's just to have something in place to start from.
         */
        const replaced = createAbbreviateHtmlTagString(token)
        tokenized[i] = replaced
      }
    }
    out = tokenized.join(' ')
  }
  return out
}
