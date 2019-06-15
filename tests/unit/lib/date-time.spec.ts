import { extractDateTuple } from '~/lib/date-time'

const fixture: ReadonlyArray<string> = [
  '2013-02-21-conference-comment-evaluer-la-qualite-dun-site-web-selon-les-techniques-dintegration-web-dactualite',
  '2012-11-22-why-would-i-not-use-my-own-framework-and-how-i-sell-usage-of-symfony2-and-other-current-php-5-3-goodies-to-my-client',
  '2012-10-27-my-first-introduction-to-the-hypermedia',
  '2007-06-26-une-boite-qui-traine',
]

const fixtureExpectedOutcome: ReadonlyArray<[number, number, number]> = [
  [2013, 2, 21],
  [2012, 11, 22],
  [2012, 10, 27],
  [2007, 6, 26],
]

describe('extractDateTuple', () => {
  test('Happy-Path', () => {
    fixture.forEach((value, index) => {
      const extracted = extractDateTuple(value)
      expect(extracted).toMatchObject(fixtureExpectedOutcome[index])
    })
  })
})
