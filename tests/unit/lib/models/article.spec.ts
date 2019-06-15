import {
  dateTupleSlugToPath,
  articleFormatPathHelper,
  ArticleType,
} from '~/lib/models'

const fixture: ReadonlyArray<string> = [
  '2013-02-21-conference-comment-evaluer-la-qualite-dun-site-web-selon-les-techniques-dintegration-web-dactualite',
  '2012-11-22-why-would-i-not-use-my-own-framework-and-how-i-sell-usage-of-symfony2-and-other-current-php-5-3-goodies-to-my-client',
  '2012-10-27-my-first-introduction-to-the-hypermedia',
  '2007-06-26-une-boite-qui-traine',
]

// There must be a way to extract strings using TypeScript ReturnType and other Advanced Types
// But not today.
// https://www.typescriptlang.org/docs/handbook/advanced-types.html
const possibleArticleTypeFixture: ArticleType[] = [
  'archive',
  'project',
  'contribution',
]

const randomlyPickPossibleArticleType = () =>
  possibleArticleTypeFixture[
    Math.floor(Math.random() * possibleArticleTypeFixture.length)
  ]

describe('dateTupleSlugToPath', () => {
  test('Happy-Path', () => {
    const out: string[] = []
    fixture.forEach(value => {
      out.push(dateTupleSlugToPath(value))
    })
    expect(out).toMatchSnapshot()
  })
})

describe('articleFormatPathHelper', () => {
  test('Blog posts', () => {
    const subject: (slug: string) => string = articleFormatPathHelper('post')
    const out: string[] = []
    fixture.forEach(value => {
      out.push(subject(value))
    })
    expect(out).toMatchSnapshot()
  })

  test('Anything else than blog', () => {
    const pick = randomlyPickPossibleArticleType()
    const subject: (slug: string) => string = articleFormatPathHelper(pick)
    const expectations = [
      [
        '2013-02-21-conference-comment-evaluer-la-qualite-dun-site-web',
        `${pick}/2013-02-21-conference-comment-evaluer-la-qualite-dun-site-web`,
      ],
    ]
    expectations.forEach(tuple => {
      const formatted = subject(tuple[0])
      expect(formatted).toBe(tuple[1])
    })
  })
})
