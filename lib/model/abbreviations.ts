export type IAbbreviatize = (prose: string) => string

const ABBREVIATION = [
  '(e.g.',
  '(i.e.',
  '(n.d.l.r.',
  'ar',
  'css',
  'dns',
  'gnome',
  'html',
  'http',
  'i18n',
  'js',
  'json',
  'json5',
  'l10n',
  'mdn',
  'mysql',
  'php',
  'sass',
  'ssl',
  'smtp',
  'sql',
  'tpac',
  'vim',
  'w3c',
  'xml',
  'yaml',
] as const

export type IAbbreviationName = typeof ABBREVIATION[number]

export const ABBREVIATION_NAMES = new Set(ABBREVIATION)

export const hasDefinedAbbreviation = (
  input: string,
): input is IAbbreviationName => {
  return ABBREVIATION_NAMES.has(input as any)
}

export const assertsDefinedAbbreviation = (
  input: string,
): asserts input is IAbbreviationName => {
  if (!hasDefinedAbbreviation(input)) {
    const valid = ABBREVIATION.join(', ')
    const message = `Invalid abbreviation ${input}, we only have: ${valid}`
    throw new Error(message)
  }
}

/**
 * Abbreviaton and accronyms should be set from one place
 * and rewritten correctly from one place.
 * Even if text isn't having it right.
 * @TODO A Good place to store authoritative WoRd CasInG should be here.
 */
const ABBREVIATION_TEXT = new Map<IAbbreviationName, string>([
  ['(e.g.', 'For example'],
  ['(i.e.', 'In essence'],
  ['(n.d.l.r.', 'Editor’s note'],
  ['ar', 'Augumented Reality'],
  ['css', 'Cascading Style Sheet'],
  ['dns', 'Domain Name Service (network Name resolution)'],
  [
    'gnome',
    'GNU/Linux XOrg Desktop environment, initially an accronym for GNU Network Object Model Environment.',
  ],
  ['html', 'Hyper Text Markup Language'],
  ['http', 'Hyper Text Transfer Protocol'],
  ['i18n', 'Internationalization'],
  ['l10n', 'Localization'],
  ['js', 'JavaScript'],
  ['json', 'JavaScript Object Notation'],
  ['json5', 'JavaScript Object Notation version 5'],
  ['mdn', 'Mozilla Developer Network'],
  ['mysql', 'MySQL a Structured Query Language product now owned by Oracle'],
  ['php', 'Hypertext Pre Pprocessor'],
  ['tpac', 'W3C’s (World Wide Web’s) Technical Plenary meetings'],
  ['sass', 'Syntactically Awesome Stylesheets'],
  [
    'ssl',
    'SSL as Secure Sockets Layer, which is the colloquial term used to refer to what is now called Transport Layer Security (TLS)',
  ],
  ['smtp', 'E-Mail relay transport protocol; Simple Mail Transfer Protocol'],
  ['sql', 'Structured Query Language'],
  ['vim', 'Vi IMproved'],
  [
    'w3c',
    'World Wide Web Consortium, an international community where Member organizations, a full-time staff, and the public work together to develop Web standards.',
  ],
  ['xml', 'eXtensible Markup Language'],
  ['yaml', 'YAML Ain’t Markup Language'],
])

const createAbbreviateHtmlTagString: IAbbreviatize = (key: string): string => {
  let out = key
  const k = String(key).toLowerCase() as IAbbreviationName
  const definition: string | undefined = ABBREVIATION_TEXT.get(k)
  if (definition) {
    let abbr = key
    if (key.startsWith('(')) {
      abbr = abbr.replace('(', '')
    }
    let html = `<abbr lang="en" title="${definition}">${abbr}</abbr>`
    if (key.startsWith('(')) {
      html = '(' + html
    }
    out = html
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
        const replaced = createAbbreviateHtmlTagString(tokenized[i])
        tokenized[i] = replaced
      }
    }
    out = tokenized.join(' ')
  }
  return out
}
