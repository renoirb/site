<template>
  <div class="pages__blog__tag--index">
    <div class="document document--collection">
      <div class="title page-title font-serif text-2xl italic">
        <h1>
          Reviewing <small>({{ count }})</small>
        </h1>
      </div>
      <div class="body">
        <ul>
          <li v-for="content in contents" :key="content.slug">
            <!-- eslint-disable vue/no-v-html vue/no-v-text-v-html-on-component -->
            <NuxtLink
              :to="content.path"
              target="_blank"
              v-html="content.dir + ' ' + content.title"
            />
            &nbsp;
            <small v-if="content.canonical">
              (<a :href="content.canonical" target="_blank">canonical </a>)
            </small>
            <details>
              <summary>
                score {{ content.score }}:
                {{ content.flags.join(' ') }}
              </summary>
              <pre>{{ content }}</pre>
            </details>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import type { MetaInfo } from 'vue-meta'
  import { findExcludingRedirectPredicate } from '~/lib'
  import type { INuxtContentResult } from '~/lib'
  type NuxtContentResult = WithReviewingProps & INuxtContentResult
  interface WithReviewingProps {
    score: string
    flags: string
    caption?: boolean
    caracteresBizzares?: boolean
    gallery?: boolean
    images?: boolean
    migrateImages?: boolean
    migrateLinks?: boolean
  }
  type FlagsString = (m: WithReviewingProps) => string
  export interface Data {
    contents: NuxtContentResult[]
    count: number
  }
  export interface Methods {
    createFlagString: FlagsString
    createSortScoreForFlagThing: (input: string[]) => number
  }
  export interface Computed {}
  export interface Props {}
  const createFlagThing = (arg: WithReviewingProps): string[] => {
    const a = arg.images && arg.images === true ? 'A' : '-'
    const b = arg.gallery && arg.gallery === true ? 'B' : '-'
    const c = arg.caption && arg.caption === true ? 'C' : '-'
    const d =
      arg.caracteresBizzares && arg.caracteresBizzares === true ? 'D' : '-'
    const e = arg.migrateImages && arg.migrateImages === true ? 'E' : '-'
    const f = arg.migrateLinks && arg.migrateLinks === true ? 'F' : '-'
    return [a, b, c, d, e, f]
  }
  const createSortScoreForFlagThing = (input: string[]): number => {
    let score = 0
    input.filter(String).forEach((e) => (e !== '-' && e !== '' ? score++ : 0))
    return score
  }
  /**
   * This is just to make sorting logic readable and explicit.
   *
   * I walked thru all my blog posts, added flags. When a WordPress
   * short code was present. Or image stored somewhere I want to
   * harmonize all at the same place. Or with broken text due to
   * the many database migration and it's just uggly.
   * For each criteria, i've given an attribute name and if it's
   * present and the value is true.
   *
   * Which items to review first.
   *
   * This is therefore to get items with most flags on, and
   * the newest on top before the rest. So I can prioritize
   * revising content for older articles, without images for
   * whenever later and not be a blocker.
   */
  const sortCompareFn = (a: NuxtContentResult, b: NuxtContentResult) => {
    const aProp1 = createSortScoreForFlagThing(createFlagThing(a))
    const bProp1 = createSortScoreForFlagThing(createFlagThing(b))
    if (aProp1 > bProp1) {
      return -1
    } else if (aProp1 < bProp1) {
      return 1
    }
    const aProp2 = a.created.split('T')[0]
    const bProp2 = b.created.split('T')[0]
    if (aProp2 > bProp2) {
      return -1
    } else if (aProp2 < bProp2) {
      return 1
    }
    // a must be equal to b
    return 0
  }
  export default Vue.extend<Data, Methods, Computed, Props>({
    async asyncData({ $content }) {
      const ds = $content('blog', { deep: true })
        .where({ revising: true })
        .without([
          'body',
          'categories',
          'coverImage',
          'description',
          'excerpt',
          'extension',
          'keywords',
          'preamble',
          'tags',
          'toc',
          'waybackMachineSnapshots',
        ])
        .sortBy('created', 'asc')
      const fetched = (await ds.fetch()) as NuxtContentResult[]
      const contents: NuxtContentResult[] = fetched
        .filter((a) => findExcludingRedirectPredicate(a))
        .map((a) => {
          const flags = createFlagThing(a)
          const score = createSortScoreForFlagThing(flags)
          return { ...a, score, flags }
        })
        .sort(sortCompareFn)
      const count = contents.length
      const lines = [
        ...contents.map(({ path, score }: NuxtContentResult) =>
          [path].map((i) => `- [ ]\tscore ${score}\t<${i}>`).join(';'),
        ),
      ].join('\n')
      console.log(lines)
      return {
        contents,
        count,
      }
    },
    data() {
      return {
        contents: [],
        count: 0,
      }
    },
    methods: {
      createFlagString(arg) {
        return createFlagThing(arg).join(' ')
      },
      createSortScoreForFlagThing,
    },
    head() {
      const out: MetaInfo = {
        meta: [{ name: 'robots', content: 'noindex' }],
      }
      return out
    },
  })
</script>
