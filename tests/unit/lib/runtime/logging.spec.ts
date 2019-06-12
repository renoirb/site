import { isLogLevel, LogLevel, ensureValidLogLevel } from '~/lib/runtime'

describe('ensureValidLogLevel', () => {
  test('random things fallsback to info', () => {
    const items: any[] = [
      Number.POSITIVE_INFINITY,
      Number.EPSILON,
      Math.PI,
      'whatever',
      57244234,
      false,
      'info',
    ]
    for (const item of items) {
      const run = ensureValidLogLevel(item)
      expect(run).toBe('info' as LogLevel)
    }
  })

  test('isLogLevel', () => {
    const items: Array<[any, boolean]> = [
      ['info', true],
      ['debug', true],
      ['DEBUG', false],
      ['    ', false],
      [57244234, false],
    ]
    for (const [item, expected] of items) {
      const run = isLogLevel(item)
      expect(run).toBe(expected)
    }
  })
})
