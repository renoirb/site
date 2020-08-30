<script lang="ts">
  import { VNode } from 'vue'
  import { defineComponent } from '@nuxtjs/composition-api'
  import GitHubPagesRedirect from '@/components/global/GitHubPagesRedirect'
  import { createPageRedirectAsyncData } from '~/lib'
  const redirects: [RegExp, string, true?][] = [
    [/^\/cv$/i, '/resume'],
    [/^\/cv\/detailed$/i, '/resume/detailed'],
  ]

  const asyncData = createPageRedirectAsyncData(redirects)

  export default defineComponent({
    layout: 'naked',
    asyncData,
    render(h): VNode {
      const to = this.to
      const baseUrl = this.baseUrl
      return h(GitHubPagesRedirect, {
        props: {
          to,
          baseurl: baseUrl,
        },
      })
    },
  })
</script>
