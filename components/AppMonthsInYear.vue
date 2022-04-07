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
  import Vue, { PropOptions } from 'vue'
  import { getMonthNames, IMonthNames, isValidYear } from '~/lib'
  export interface Props {
    year: string
    currentMonth: string
  }
  export interface Methods {}
  export interface Computed {}
  export interface Data {
    months: IMonthNames
  }
  export default Vue.extend<Data, Methods, Computed, Props>({
    props: {
      year: {
        type: String,
        default: () => String(new Date().getFullYear()),
        validate: (year: string): boolean => isValidYear(year),
      } as PropOptions<string>,
      currentMonth: {
        type: String,
        default: '01',
      },
    },
    data() {
      const locale = 'fr-CA'
      const months = getMonthNames(locale)
      return {
        locale,
        months: [...months],
      }
    },
  })
</script>
