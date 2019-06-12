import { csvToSlugCollection } from '~/lib/csv'
import { SlugInterface } from '~/lib/models/slug'

const fixture: string[] = [
  '2013-02-21-conference-comment-evaluer-la-qualite-dun-site-web-selon-les-techniques-dintegration-web-dactualite',
  '2012-11-22-why-would-i-not-use-my-own-framework-and-how-i-sell-usage-of-symfony2-and-other-current-php-5-3-goodies-to-my-client',
  '2012-10-27-my-first-introduction-to-the-hypermedia',
  '2007-06-26-une-boite-qui-traine',
]

const fixtureExpectedOutcome: ReadonlyArray<SlugInterface> = [
  {
    slug:
      '2013-02-21-conference-comment-evaluer-la-qualite-dun-site-web-selon-les-techniques-dintegration-web-dactualite',
  },
  {
    slug:
      '2012-11-22-why-would-i-not-use-my-own-framework-and-how-i-sell-usage-of-symfony2-and-other-current-php-5-3-goodies-to-my-client',
  },
  { slug: '2012-10-27-my-first-introduction-to-the-hypermedia' },
  { slug: '2007-06-26-une-boite-qui-traine' },
]

describe('csvToSlugCollection', () => {
  test('Happy-Path', () => {
    const extracted = csvToSlugCollection('post')(fixture)
    expect(extracted).toMatchObject(fixtureExpectedOutcome)
    fixtureExpectedOutcome.forEach((value, index) =>
      expect(extracted[index]).toMatchObject(value)
    )
    expect(extracted).toMatchSnapshot()
  })
})
