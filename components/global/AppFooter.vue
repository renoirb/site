<template>
  <div class="app-footer--component disposition-parent w-full">
    <footer
      style="position: relative"
      class="zone__sandwich__bottom container flex items-center justify-between p-10 mx-auto"
    >
      <dl class="contact items-item disposition-item">
        <dt class="mb-4 font-serif text-2xl">
          <NuxtLink to="/contact" class="underline">Contact</NuxtLink>
        </dt>
        <dd>{{ description }}</dd>
        <dd aria-errormessage="why-fou-de-la-pouitte">
          Send your remarks using
          <em
            data-fou-de-la-pouitte
            title="Please type this manually"
            class="underline"
          >
            <span id="why-fou-de-la-pouitte" class="sr-only">
              An email address written using CSS, apologies for obfuscating
              this.
            </span>
          </em>
        </dd>
        <dd class="underline sr-only">
          <a rel="me" href="https://mastodon.social/@renoirb">
            @renoirb@mastodon.social
          </a>
        </dd>
        <dd class="underline sr-only">
          <a rel="me" href="https://w3c.social/@renoirb">
            @renoirb@w3c.social
          </a>
        </dd>
        <dd class="font-mono">v{{ version }}</dd>
        <app-color-mode />
      </dl>
      <div class="items-item disposition-item">
        <dl lang="fr-CA" class="see-also">
          <dt>Voir aussi&hellip;</dt>
          <dd>
            <NuxtLink to="/ligne-editoriale"> Ligne&nbsp;éditoriale </NuxtLink>
          </dd>
          <dd>
            <NuxtLink to="/projects"> Projets </NuxtLink>
          </dd>
          <dd>
            <NuxtLink to="/glossary" lang="en"> Glossary </NuxtLink>
          </dd>
          <dd>
            <NuxtLink to="/code-review" lang="en">
              Code-Review&nbsp;notes
            </NuxtLink>
          </dd>
        </dl>
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import { IAppIdentity } from '~/lib'
  export interface Data {}
  export interface Methods {}
  export interface Computed {}
  export interface Props extends IAppIdentity {}
  export default Vue.extend<Data, Methods, Computed, Props>({
    name: 'AppFooter' /* app-footer */,
    props: {
      email: {
        type: String,
        required: false,
        default: 'root@localhost',
      },
      name: {
        type: String,
        required: false,
        default: 'My Site',
      },
      description: {
        type: String,
        required: false,
        default: '',
      },
      homepage: {
        type: String,
        required: false,
        default: 'https://github.com/renoirb/site',
      },
      version: {
        type: String,
        required: false,
        default: '1.0.0',
      },
    },
  })
</script>

<style scoped>
  .contact dd {
    @apply text-sm;
  }
  .nuxt-link-active {
    @apply underline;
  }
</style>
