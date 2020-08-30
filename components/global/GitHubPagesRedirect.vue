<!--
 |
 | Basically writing dynamically the following;
 | Thanks https://dev.to/steveblue/setup-a-redirect-on-github-pages-1ok7
 |
<!DOCTYPE html>
<meta charset="utf-8">
<title>Redirecting to https://example.com/</title>
<meta http-equiv="refresh" content="0; URL=https://example.com/">
<link rel="canonical" href="https://example.com/">
-->

<script lang="ts">
  import { defineComponent, h, useMeta } from '@nuxtjs/composition-api'
  import { VNode } from 'vue'
  import { isVueRouterLocation, IVueRouterLocation, RE_BASE_URL } from '~/lib'
  interface Props {
    to: IVueRouterLocation
    baseurl: string
  }
  export default defineComponent<Props>({
    name: 'GitHubPagesRedirect',
    head: {},
    props: {
      to: {
        type: Object,
        validator: isVueRouterLocation,
        required: true,
      },
      baseurl: {
        type: String,
        validator: (value: string): boolean => RE_BASE_URL.test(value),
        required: true,
      },
    },
    setup(props) {
      const { link, meta } = useMeta()
      const baseurl = props.baseurl
      const to = props.to.path
      const href = `${baseurl}${to}`
      meta.value.push(
        ...[
          { hid: 'http-equiv', name: 'http-equiv', content: `0; URL=${href}` },
        ],
      )
      link.value.push(...[{ rel: 'canonical', href }])
    },
    render(): VNode {
      return h('div', [
        h(
          'a',
          {
            props: {
              href: this.href,
            },
          },
          [`${this.href}`],
        ),
      ])
    },
  })
</script>
