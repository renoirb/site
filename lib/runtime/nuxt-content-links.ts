import type { INuxtContentResult, INuxtContentBodyType, VueNodeTag } from '..'
import { getVueNodeChildren, getVueNodeType, getVueNodeTag } from '../model'

export const extractVueTreeLinks = (document: INuxtContentResult): string[] => {
  // Cannot use Set() because that's only for one page here. And we'll have to merge them all.
  const links: string[] = []
  const nodeOfThisLevel = (node) => {
    let type: INuxtContentBodyType | '' = ''
    let tag: VueNodeTag | '' = ''
    try {
      type = getVueNodeType(node)
      if (type === 'element') {
        tag = getVueNodeTag(node)
        if (tag === 'a') {
          const props = node && 'props' in node && node.props
          if (props && 'href' in props && props.href) {
            if (props.href.startsWith('http') === true) {
              links.push(props.href)
            }
          }
        }
      }
    } catch (e) {
      console.log('extractVueTreeLinks error', e)
    }
  }
  getVueNodeChildren(document && 'body' in document && document.body).forEach(
    (node) => {
      nodeOfThisLevel(node)
      // #TODO, I'll spend time later making this recursive
      if (getVueNodeType(node) === 'element' && 'children' in node) {
        getVueNodeChildren(node).forEach((child) => {
          nodeOfThisLevel(child)
          if (getVueNodeType(node) === 'element' && 'children' in node) {
            getVueNodeChildren(node).forEach((child) => {
              nodeOfThisLevel(child)
            })
          }
        })
      }
    },
  )

  return links
}
