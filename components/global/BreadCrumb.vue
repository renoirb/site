<script lang="ts">
  import { VNode } from 'vue'
  import { Route } from 'vue-router'
  import { defineComponent } from '@nuxtjs/composition-api'
  import {
    IRoutePartial,
    pickMatchedToRoutePartialCollection,
    typeGuardIsRoute,
  } from '~/lib'

  export interface Props {
    route: Route
  }
  export interface Data {}
  export interface Computed {
    parts: IRoutePartial[]
  }
  export default defineComponent<Props, Data, Computed>({
    layout: 'bread-crumb',
    props: {
      route: {
        type: Object,
        validator: typeGuardIsRoute,
        required: true,
      },
    },
    computed: {
      parts(): IRoutePartial[] {
        const parts = pickMatchedToRoutePartialCollection(this.route)
        return parts
      },
    },
    render(h): VNode {
      const items: VNode[] = []
      items.push(
        ...this.parts.map((p) => {
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
  .breadcrumb li + li::before {
    display: inline-block;
    padding-right: 0.5rem;
    padding-left: 0.5rem;
    content: '/';
    @apply text-purple-500;
  }
</style>
