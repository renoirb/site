---
title: Insert ESM Module as custom script tag with contents with Nuxt v2
locale: en-CA
createdAt: 2024-10-25
updatedAt: 2024-10-25
status: publish
categories:
  - snippet
tags:
  - nuxt
  - configuration
  - javascript
  - esm
keywords:
  - nuxt-content
  - vue-head
  - nuxt v2
  - load client side
  - custom scripts
  - esm modules
  - web components
description: >-
  Learn how to properly inject custom ECMAScript modules into your Nuxt v2
  application during build time, with full control over script contents and
  build variables.
excerpt: >-
  Need to inject custom ESM modules into your Nuxt v2 pages? This guide shows
  how to properly add client-side ECMAScript modules during build time, going
  beyond simple static file loading. Perfect for integrating Web Components or
  other external modules while maintaining full control over script contents and
  build variables.
---

Say you want to have Nuxt properly handle client-side only ECMAScript as part of
the build, and allow to inject your own build variables. Something more than
simply have a script tag load a JavaScript file from the `static/` folder.

<rb-notice-box variant="warn" class="my-5">
<strong slot="header">This is for Nuxt v2</strong>

I know that in 2024, Nuxt and Vue went through major version bumps.

As of <time datetime="2024-10-24">today</time> still, the documentation is
available on a different domain name:

For Nuxt v2, the domain name is `v2.nuxt.com`: https://v2.nuxt.com/docs/

</rb-notice-box>

But I had this project started in 2020 before COVID and all the stress we went through,
and after that I had my parental leave. <!--#TODO-Add-New-Article: parental leave -->

That said, I wanted to add new ideas to my 2020 code base. Essentially working around
Nuxt builder (WebPack) by wrangling things differently.

It's possible.

## Desired outcome

Say for example I wanted to have the following as part of every page to have a
script tag like the following:

```html
<script type="module" defer>
  //
  // Anything you might want. That's just something I've done.
  //
  import { registerCustomElement } from 'https://renoirb.com/esm-modules/element-utils.mjs'
  import NoticeBoxElement from 'https://renoirb.com/esm-modules/notice-box-element.mjs'
  registerCustomElement(window, 'rb-notice-box', NoticeBoxElement)
</script>
```

In my case, it was to load Web Components outside of Nuxt build.

Caution though, we can't do much more than this. We can't have dynamic variables
from that code block because Nuxt Build and the compiler will probably try to
grab it, so we can instert things, but it has to be passed as a string.

### Why I wanted to do this?

That's something I had to do, and may have to return to to get where I want to
go with this web site.
Since I had to delete the code, I’ve made this to keep it somewhere.

My plan for this site is to have the least amount of code as possible in this
repository. This repository already doesn't contain the Images assets, it helps
to save space and I can control where the images gets loaded. I'd like this site
to only contain the logic for routes, the content, and everything else packaged
and tested. I want t stretch this as far as I can get.

That said, In [Nuxt v2 docs][rtfm-nuxt-v2-configuration-head]

Basically, In some situation you might want to have the client-side JavaScript
to contain variables from during the `nuxt build` as part of the

## Following the documentation trail

For this, we have to read up [Nuxt API at nuxt.config.ts head
configuration][rtfm-nuxt-v2-configuration-head], the example are a bit too
simplistic.

```js
export default {
  head: {
    titleTemplate: '%s - My Site',
    meta: [
      // ...
    ],
    link: [
      // But what's the format??
    ],
  },
}
```

But for script, we have to look at [Nuxt meta module][rtfm-nuxt-v2-meta-config]
that's using [Vue Meta][rtfm-vue-meta-docs-source], but unfortunately it's the
source we have to dig into.

Quoting [**VueMeta** Nuxt module documentation at
"script"][rtfm-nuxt-v2-meta-config]

> Each item in the array maps to a newly-created <script> element, where object
> properties map to attributes.
>
> ```js
> {
>   // But in Nuxt, that's called "head"
>   metaInfo: {
>     script: [
>       // Neat! But that's not quite it.
>       { src: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.js', async: true, defer: true }
>     ],
>   }
> }
> ```
>
> ```js
> <script
>   src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"
>   async
>   defer
> ></script>
> ```

But that's not what I wanted.

What I want is

```js
<script type="module">// Do things here!</script>
```

## End Result

### Configuration

Here are the changes I've made on my `nuxt.config.ts`.

```js
import { NuxtConfig } from '@nuxt/types'

// ...

const THE_SCRIPT_CONTENTS_STATIC_STRING = `
import { registerCustomElement } from 'https://renoirb.com/esm-modules/element-utils.mjs'
import NoticeBoxElement from 'https://renoirb.com/esm-modules/notice-box-element.mjs'
registerCustomElement(window, 'rb-notice-box', NoticeBoxElement)
`

const main: NuxtConfig = {
  head: {
    // ...
    script: [
      // ...
      {
        type: 'module',
        vmid: 'load-esm-modules-separately-please',
        body: true,
        defer: true,
        innerHTML: THE_SCRIPT_CONTENTS_STATIC_STRING,
      }
    ],
    __dangerouslyDisableSanitizers: [
      /* YOLO. Plus, I don't want WebPack to inline and mangle what's here. */ 'script',
    ],
  },
}

export default main
```

[rtfm-nuxt-v2-configuration-head]: https://nuxtjs.org/api/configuration-head
[rtfm-nuxt-v2-meta-config]: https://vue-meta.nuxtjs.org/api/#script
[rtfm-vue-meta-docs-source]: https://github.com/nuxt/vue-meta/tree/v2.4.0/docs
