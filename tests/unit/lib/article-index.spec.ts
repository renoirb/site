import { ArticleIndex } from '~/lib/article-index'

const fixture: ReadonlyArray<string> = [
  '2013-02-21-conference-comment-evaluer-la-qualite-dun-site-web-selon-les-techniques-dintegration-web-dactualite.md',
  '2012-11-22-why-would-i-not-use-my-own-framework-and-how-i-sell-usage-of-symfony2-and-other-current-php-5-3-goodies-to-my-client.md',
  '2012-10-27-my-first-introduction-to-the-hypermedia.md',
  '2007-06-26-une-boite-qui-traine.md',
  '2009-09-14-je-prefere-le-pingouin-design-cool-de-tee-shirt.md',
]

const fixtureWithPaths: ReadonlyArray<string> = [
  'anything-here-goes/2013/02/21/conference-comment-evaluer-la-qualite-dun-site-web-selon-les-techniques-dintegration-web-dactualite',
  'anything-here-goes/2012/11/22/why-would-i-not-use-my-own-framework-and-how-i-sell-usage-of-symfony2-and-other-current-php-5-3-goodies-to-my-client',
  'anything-here-goes/2012/10/27/my-first-introduction-to-the-hypermedia',
  'anything-here-goes/2007/06/26/une-boite-qui-traine',
  'anything-here-goes/2009/09/14/je-prefere-le-pingouin-design-cool-de-tee-shirt',
]

describe('ArticleIndex', () => {
  describe('constructor', () => {
    test('Happy-Path', () => {
      const path = 'blog/index.csv'
      const subject = new ArticleIndex(path)
      expect(subject).toHaveProperty('indexFile', path)
    })
  })

  describe('add', () => {
    test('Snapshot when hasPaths is false', () => {
      const subject = new ArticleIndex('bogus')
      fixture.forEach(l => subject.add(l))
      expect(subject).toMatchSnapshot()
    })

    test('Snapshot when hasPaths is true', () => {
      const subject = new ArticleIndex('bogus')
      fixtureWithPaths.forEach(l => subject.add(l))
      expect(subject).toMatchSnapshot()
    })

    test('add enforce consistency when hasPaths is false', () => {
      const subject = new ArticleIndex('bogus')
      // add lines with no slash in them
      // e.g. 2009-09-14-je-prefere-le-pingouin-design-cool-de-tee-shirt.md
      fixture.forEach(l => subject.add(l))
      expect(() => {
        subject.add('foo/bar/baz/buzz')
      }).toThrowError()
    })

    test('add enforce consistency when hasPaths is true', () => {
      const subject = new ArticleIndex('bogus')
      // add lines WITH a slash in them
      fixtureWithPaths.forEach(l => subject.add(l))
      expect(() => {
        subject.add('foo-bar-baz-buzz')
      }).toThrowError()
      expect(() => {
        subject.add(
          '2009-09-14-je-prefere-le-pingouin-design-cool-de-tee-shirt'
        )
      }).toThrowError()
    })

    test('add enforce consistency when threeFirstAreNumbers is true', () => {
      const subject = new ArticleIndex('bogus')
      // add lines with no slash in them
      // e.g. 2009-09-14-je-prefere-le-pingouin-design-cool-de-tee-shirt.md
      fixture.forEach(l => subject.add(l))
      expect(() => {
        subject.add('foo-bar-baz-buzz')
      }).toThrowError()
      // And we cannot mix with using slashes too
      expect(() => {
        subject.add('foo/bar/buzz')
      }).toThrowError()
    })

    test('add enforce consistency when threeFirstAreNumbers is false', () => {
      const subject = new ArticleIndex('bogus')
      subject.add('foo-bar')
      subject.add('baz-buzz')
      expect(() => {
        subject.add('2009-09-14-foo-bar-baz-buzz')
      }).toThrowError()
      // And we cannot mix with using slashes too
      expect(() => {
        subject.add('foo/bar/buzz')
      }).toThrowError()
      // findByDate should not work
      expect(() => {
        subject.findByDate(2019)
      }).toThrowError()
    })
  })

  describe('getLines', () => {
    test('Snapshot when hasPaths is false', () => {
      const subject = new ArticleIndex('bogus')
      fixture.forEach(l => subject.add(l))
      expect(subject.getLines()).toMatchSnapshot()
    })
  })

  describe('findByDate', () => {
    test('Happy-Path', () => {
      const subject = new ArticleIndex('bogus')
      fixture.forEach(l => subject.add(l))
      let found = subject.findByDate(2007)
      expect(found).toEqual(
        expect.arrayContaining(['2007-06-26-une-boite-qui-traine.md'])
      )
      expect(found).toHaveLength(1)
      found = subject.findByDate(2012, 11)
      expect(found).toEqual(
        expect.arrayContaining([
          '2012-11-22-why-would-i-not-use-my-own-framework-and-how-i-sell-usage-of-symfony2-and-other-current-php-5-3-goodies-to-my-client.md',
        ])
      )
      expect(found).toHaveLength(1)
      expect(subject.getLines()).toHaveLength(fixture.length)
    })
  })
})

describe('getYears', () => {
  let subject: ArticleIndex = new ArticleIndex()
  subject.setLines([...fixture])
  let years: number[] = subject.getYears()

  for (const year of years) {
    test(`Looping for findByDate(${year})`, () => {
      const items = subject.findByDate(year)
      expect(items).toMatchSnapshot()
    })
  }

  test('Happy-Path', () => {
    subject = new ArticleIndex()
    subject.setLines([...fixture])
    years = subject.getYears()
    expect(years).toMatchObject([2007, 2009, 2012, 2013])
    expect(years).toMatchSnapshot()
  })
})
