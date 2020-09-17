<script lang="ts">
  import { VNode } from 'vue'
  import { Route } from 'vue-router'
  import { defineComponent } from '@nuxtjs/composition-api'
  import { routeToCrumbs, typeGuardIsRoute } from '~/lib'

  export interface Props {
    route: Route
  }
  export interface Data {}
  export interface Computed {}
  export default defineComponent<Props, Data, Computed>({
    name: 'AppBreadCrumb' /* app-bread-crumb */,
    props: {
      route: {
        type: Object,
        validator: typeGuardIsRoute,
        required: true,
        default: () => ({}),
      },
    },
    render(h): VNode {
      const items: VNode[] = []
      const crumbs = routeToCrumbs(this.route)
      if (crumbs.length > 1) {
        items.push(
          ...crumbs.map((p) => {
            return h(
              'li',
              {
                class: 'flex items-center',
              },
              [
                h(
                  'nuxt-link',
                  {
                    props: {
                      to: { path: p.crumb },
                    },
                  },
                  p.param,
                ),
              ],
            )
          }),
        )
      }

      return h(
        'nav',
        {
          class: 'breadcrumb',
        },
        [
          h(
            'ol',
            {
              class: 'list-none p-0 inline-flex',
            },
            items,
          ),
        ],
      )
    },
  })
</script>

<style scoped>
  .breadcrumb {
    @apply font-serif italic;
  }
  .breadcrumb a:hover {
    @apply underline;
  }
  .breadcrumb li + li::before {
    display: inline-block;
    padding-right: 0.2rem;
    padding-left: 0.2rem;
    content: '/';
  }
</style>
