---
title: Porting all my content into a static-site
locale: en-CA
createdAt: 2020-09-10
updatedAt: 2020-09-10
status: publish
revising: false
categories:
  - projects
tags:
  - vuejs
  - nuxt
  - on-front-page
---


<rb-notice-box variant="info" class="my-5">
  <strong slot="header">Actually...</strong>

I started working on it a little bit before
<abbr title="Shortened from Coronavirus disease 2019">COVID-19</abbr>
pandemic and only would work on it 4 years later, around the end of my Full-Time Parenting period.

</rb-notice-box>


It’s been more than ten years that I haven't touched my site and I want to
make-use of my skills working with Vue.js and modern Front End of the last years
back to my own profit.

<!--#TODO Slides-->

So this is going to be a complete port of all my previous content, talk slides,
experiments, posts, Twitter feed, examples, code bits all in a static site.

It's still work in progress, at the moment `https://renoirb.github.io/site/` is
the live version of my site that'll replace what’s at
`https://renoirboulanger.com` running with WordPress.

I should piggy-back using my own public packages such as my [Monorepo related
content][monorepo-related-alpha], [my "_Particles_" monorepo
project][monorepo-particles], along with archiving my thousands of web browser
tabs by leveraging my [Archivator][archivator] ([_archivator_ package on
NPM][archivator-npmjs]).

This is just something I've jotted down quickly so that It explains what's this
for.

Keep in touch!

## Features

### Code blocks

At last, a way to display code that I'm happy with, it'll look like this

<code-group>
  <code-block label="application/json" active>

```http
GET /hello
Accept: application/json

HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8
Date: Fri, 16 Sep 2005 19:22:04 GMT
Vary: Accept

{
  "body": "Hello!"
}
```

  </code-block>
  <code-block label="plain/text">

```http
GET /hello
Accept: plain/text

HTTP/1.1 200 OK
Content-Type: plain/text; charset=utf-8
Date: Fri, 16 Sep 2005 19:22:04 GMT
Vary: Accept

Hello!
```

  </code-block>
</code-group>

[monorepo-related-alpha]:
  https://github.com/renoirb/experiments-201908-rush-typescript-just-bili-monorepo
  'TypeScript monorepo using Rush.js, with a few packages, some depending on each other, and tests'
[monorepo-particles]:
  https://gitlab.com/renoirb/renoirb-particles/
  'Renoir’s particles'
[archivator]: http://www.archivator.site/ 'Archivator project'
[archivator-repo]: https://github.com/renoirb/archivator/tree/v3.x-dev
[archivator-npmjs]: https://www.npmjs.com/package/archivator
