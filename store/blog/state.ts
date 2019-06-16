import { BlogState } from './types'

export const state = (): BlogState => ({
  selected: '' /* '2005-09-16-first-post' */,
  items: [
    /* {slug: '2005-09-16-first-post', published: true, title: 'Premier billet', locale: 'fr-CA'} */
  ],
})

export default state
