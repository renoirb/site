import {
  CreateElement,
  VNode,
  RenderContext,
  FunctionalComponentOptions,
} from 'vue'

export interface Props {
  slug: string
  webArchiveDate?: string
}

const SUPPORTED_PREFIX /*       */ = 'docs.webplatform.org/wiki'
const SUPPORTED_PREFIX_DEST /*  */ = 'webplatform.github.io/docs'

/**
 * Compare Between Before and After the same Link against web.archive.org.
 *
 * webArchiveDate tried for docs.webplatform.org:
 * - 20160421193144
 * - 20150921064612
 */
const AppLinkCompareItem: FunctionalComponentOptions<Props> = {
  name: 'AppLinkCompareItem' /* app-link-compare-item */,
  functional: true,
  props: {
    slug: {
      type: String,
      required: true,
    },
    webArchiveDate: {
      type: String,
      required: false,
      default: '20150327033121',
    },
  },
  render(h: CreateElement, ctx: RenderContext<Props>): VNode[] {
    const out: VNode[] = []
    const slug = ctx.props.slug

    if (!slug.startsWith(SUPPORTED_PREFIX)) {
      return [
        h(
          'span',
          {
            attrs: {
              title: 'This slug is not supported',
            },
          },
          [slug],
        ),
      ]
    }

    const webArchiveDate = ctx.props.webArchiveDate
      ? ctx.props.webArchiveDate
      : '20150327033121'

    const createAnchor = (href: string, textContent: string) =>
      h(
        'a',
        {
          attrs: {
            href,
            rel: 'nofollow',
            target: '_blank',
          },
          class: ['item'],
        },
        [textContent],
      )

    const encodedUri = encodeURIComponent(`https://${slug}`)
    out.push(
      createAnchor(
        `https://web.archive.org/web/${webArchiveDate}/${encodedUri}`,
        slug,
      ),
    )

    out.push(h('span', { class: ['item'] }, [' to ']))

    let toTextContent = slug.replace(SUPPORTED_PREFIX, SUPPORTED_PREFIX_DEST)
    toTextContent = toTextContent.replace(':', '/')
    toTextContent = toTextContent.replace(/[()]/g, '')
    out.push(createAnchor(`https://${toTextContent}`, toTextContent))

    return [h('span', { class: ['app-link-compare-item'] }, [out])]
  },
}

export default AppLinkCompareItem
