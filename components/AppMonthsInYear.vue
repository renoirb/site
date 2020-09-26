<template>
  <div class="taxonomy">
    <ol class="taxonomy-items flex flex-wrap text-center list-none">
      <li
        v-for="[monthNumber, monthName] in months"
        :key="monthName"
        class="is-hoverizable w-auto px-2 py-1 mb-2 mr-2"
        :class="{
          'taxonomy-items-active': currentMonth && currentMonth === monthNumber,
        }"
      >
        <NuxtLink
          :to="{
            path: `/blog/${year}/${monthNumber}`,
          }"
        >
          <time :datetime="`${year}-${monthNumber}`" :lang="locale">
            {{ monthName }}
          </time>
        </NuxtLink>
      </li>
    </ol>
  </div>
</template>

<script lang="ts">
  import { defineComponent, ref } from '@nuxtjs/composition-api'
  import { getMonthNames, IMonthNames, isValidYear } from '~/lib'
  export interface Props {
    year: string
    currentMonth: string
  }
  export interface Data {
    months: IMonthNames
  }
  export interface Computed {}
  export default defineComponent<Props, Data, Computed>({
    props: {
      year: {
        type: String,
        default: () => String(new Date().getFullYear()),
        validate: isValidYear,
      },
      currentMonth: {
        type: String,
        default: '01',
      },
    },
    setup() {
      const locale = ref('fr-CA')
      const months = getMonthNames(locale.value)
      return {
        months,
        locale,
      }
    },
  })
</script>
