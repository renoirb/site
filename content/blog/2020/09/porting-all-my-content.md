---
title: Porting all my content into a static-site
locale: en-CA
createdAt: 2020-09-10
updatedAt: 2024-10-25
status: publish
revising: false
categories:
  - projects
tags:
  - vuejs
  - nuxt
  - on-front-page
  - migration
  - static-site
keywords:
  - wordpress migration
  - static site generator
  - nuxt content
  - vue.js
  - taxonomy
description:
  A technical journey of migrating a WordPress site to a modern static site
  built with Nuxt and Vue.js, including custom taxonomy handling and bilingual
  support.
coverImage:
  src: ~/assets/content/blog/2024/11/renoirboulanger-com-taxonomy-article.png
  text: Taxonomy system demonstration on the new site
  alt:
    Screenshot demonstrating how the taxonomy module works on a blog post with
    tags and categories
excerpt:
  After a decade, I'm rebuilding my personal site using modern front-end
  technologies. This project combines Vue.js, Nuxt, and custom tooling to
  migrate from WordPress to a static site, while improving content organization
  through a bilingual taxonomy system.
---

<rb-notice-box variant="info" class="my-5">
  <strong slot="header">Actually...</strong>

I started working on it a little bit before
<abbr title="Shortened from Coronavirus disease 2019">COVID-19</abbr> pandemic
and only would work on it 4 years later, around the end of my Full-Time
Parenting period that ended in <time datetime="2024-09">September 2024</time>.

The conversion work will be covered in another article.

</rb-notice-box>

It's been more than ten years that I haven't touched my site and I want to
make-use of my skills working with Vue.js and modern Front End of the last years
back to my own profit.

<!--#TODO Slides-->

So this is going to be a complete port of all my previous content, talk slides,
experiments, posts, Twitter feed, examples, code bits all in a static site.

## Current Status

The site is currently live at
<rb-content-edit type="del" date="2024-10-24"><code>https://renoirb.github.io/site/</code>
and will eventually replace the WordPress installation at
<span slot="comment">It took 4 years before I could finish!</span>
</rb-content-edit> `https://renoirboulanger.com`.

### Integration with Existing Projects

I'm planning to leverage several of my public packages:

- [Monorepo related content][monorepo-related-alpha]
- [My "Particles" monorepo project][monorepo-particles]
- [Archivator][archivator] ([available on NPM][archivator-npmjs]) for managing
  my thousands of browser bookmarks

[monorepo-related-alpha]:
  https://github.com/renoirb/experiments-201908-rush-typescript-just-bili-monorepo
  'TypeScript monorepo using Rush.js, with a few packages, some depending on each other, and tests'
[monorepo-particles]: https://gitlab.com/renoirb/renoirb-particles/
[archivator]: http://www.archivator.site/ 'Archivator project'
[archivator-repo]: https://github.com/renoirb/archivator/tree/v3.x-dev
[archivator-npmjs]: https://www.npmjs.com/package/archivator

## New Features

### Enhanced Code Display

The new site includes improved code block presentation with syntax highlighting
and multiple formats:

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

### Custom Taxonomy System

One of the key improvements is the custom taxonomy system that supports:

- Bilingual tag and category labels
- Hierarchical organization
- Rich descriptions for better content discovery

## Screenshots

<div style="overflow:hidden;clear:both;" class="thumbnails gallery flex flex-row flex-wrap">

<app-image src="~/assets/content/blog/2020/site-design-2020-index.png" alt="Homepage design of the new static site showing the main navigation and content layout" figcaption="New homepage design">
</app-image>

<app-image src="~/assets/content/blog/2020/site-design-2020-search.jpg" alt="Search interface of the new site demonstrating content discovery features" figcaption="Enhanced search functionality">
</app-image>

<app-image src="~/assets/content/blog/2020/site-design-2020-inner.jpg" alt="Article page layout showing typography and content presentation" figcaption="Article page design">
</app-image>

<app-image src="~/assets/content/blog/2024/11/renoirboulanger-com-taxonomy-article.png" alt="Screenshot demonstrating how the taxonomy module works on a blog post: two explanatory bubbles show that the module handles two types of taxonomies in the Markdown front matter - 'tags' which allow multiple values per article (shown here: 'favourites', 'best-practices', 'integration', etc.) and 'category' which is limited to one value per article (shown here: 'portfolio')." figcaption="Taxonomy System Overview">

On the page top, we can see grey pills. They are the links to the taxonomy that
populates the index pages at [/blog/tag](/blog/tag) and
[/blog/category](/blog/category)

</app-image>

<app-image src="~/assets/content/blog/2024/11/renoirboulanger-com-taxonomy-tags.png" alt="Screenshot showing the taxonomy system's bilingual support: on the left, the rendered blog tag page shows links including 'Bonne pratiques', while on the right, the corresponding fr.yaml configuration file demonstrates how tags are defined with a key (e.g. 'best-practices'), display text ('Bonne pratiques'), and description in French. A red arrow highlights how the raw YAML definition connects to the rendered tag link on the website." figcaption="Bilingual Taxonomy Configuration">

This is the list of all tags.

Here is an example of the YAML definition to display more polished labels and
descriptions for a tag. In the example shown, it tells that the French
translation for the tag [/blog/tag/best-practices](/blog/tag/best-practices) be
written as "Bonne pratique".

Notice that, the language is currently only shown in french as there should
eventually be a way for the visitor to chose the language they're most
comfortable with. Probably detect from the browser, since it's there too. It's
planned in [ticket #77](https://github.com/renoirb/site/issues/77).

</app-image>

<app-image src="~/assets/content/blog/2024/11/renoirboulanger-com-taxonomy-tag-index.png" alt="Tag index page showing articles tagged with 'Bonne pratiques', demonstrating the taxonomy system in action" figcaption="Tag Index Page">

This is the list of all articles with the tag
["<span lang="fr">Bonne pratiques</span>"](/blog/tag/best-practices)

We see the same YAML definition shown in the other screen shot.

</app-image>

</div>
