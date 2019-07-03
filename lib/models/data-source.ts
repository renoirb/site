/**
 * Discriminated Union using Array.
 * (i.e. what you see below)
 *
 * Thank you so much:
 * - https://github.com/Microsoft/TypeScript/pull/29510
 * - https://stackoverflow.com/a/45486495
 */

/**
 * List of data-sources
 * For example, we'll have:
 * - blog
 * - projects
 * - contributions
 * - bookmarks
 *
 * Where each of them have their specific routing schemes.
 */
const POSSIBLE_DATA_SOURCES = [
  'blog',
  'project',
  'contribution',
  'bookmark',
] as const

type DataSourceTuple = typeof POSSIBLE_DATA_SOURCES

/**
 * DataSourceType is a name to tell how to fetch content from which data source.
 * Maybe they're stored in an index in blog/index.csv, or elsewhere.
 */
export type DataSourceType = DataSourceTuple[number] // union type

/**
 * Array of DataSourceType names
 */
export const DATA_SOURCE_NAMES = Object.freeze(POSSIBLE_DATA_SOURCES.slice())
