---
title: Migrating WebPlatform.org MediaWiki into Git as Markdown files
locale: en-CA
created: 2015-07-30
updated: 2020-11-18
status: publish
revising: true
categories:
  - projects
tags:
  - archiving
  - open-source
  - operations
  - webplatform
description:
  How to take a full MediaWiki content and edit history into a Git repository
  keeping the history and author attributions into Markdown
coverImage:
  src: ~/assets/content/blog/2015/07/monit_dashboard_201502_status.png
  text: |
    The WebPlatform project was running from a about 20 VMs
    and the availability, in part, managed by Monit.
    At the end of the project, the infrastructure "had to go away"
preamble:
  disable: true
  text: ' '
---
<!-- #TODO Review how to manage images and breaking points under other modes -->

[wpd-stewards]:
  https://web.archive.org/web/20130328132045/http://www.webplatform.org/stewards/
  'WebPlatform Project sponsors'
[wpd-blog-i-am-renoir]:
  https://webplatform.github.io/blog/2013/08/hi-my-name-s-renoir-ill-be-your-devops-for-the-web-platform/
[dont-break-the-web]:
  https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/The_web_and_web_standards#Dont_break_the_web
[wpd-infra-summary]:
  https://webplatform.github.io/docs/WPD/Infrastructure/analysis/2013-Usage_and_future_state/
[wpd-infra-migration-2013]:
  https://webplatform.github.io/docs/WPD/Infrastructure/analysis/2013-Migrating_to_a_new_cloud_provider/
  '2013 Infrastructure project: Migrating to a new provider'
[w3t-systeam]: https://www.w3.org/People/functions/systeam
[gh-mailmap]: https://github.com/webplatform/docs/blob/manual-edits/.mailmap
[wpd-home]: https://webplatform.github.io/ 'WebPlatform Docs Home Page'

On July 1st 2015, _The WebPlatform project_ has been discontinued, by having
[its sponsors][wpd-stewards] retracting from the project.

I was hired by the W3C solely to maintain the WebPlatform project. Without
funding, and no budget at W3C/MIT to transfer me, my contract was going to end.

<!-- #XXX from app-alert-box to rb-notice-box -->
<app-alert-box style="display:flex">
👀 This was written in December 2020 and taken from notes I’ve been sharing around via email.
</app-alert-box>

With me as the only full-time person on the project with knowledge of the
infrastructure, and also as a believer of “[don’t break the
web][dont-break-the-web]”, I wanted to keep everything online.

When [I inherited the project][wpd-blog-i-am-renoir], I [went through migrating
_from one cloud provider to another_][wpd-infra-migration-2013] the full
infrastructure, [it has been running from about 20 Linux
VMs][wpd-infra-summary], worked on a few projects such as an attempt at having
Single-SignOn, and better compatibility tables.

Since the project was being closed, most of what I’ve worked lost their use. The
infrastructure was also going to become a burden.

While planning my last weeks, I’ve agreed with the W3C systems team
"[w3t-systeam][w3t-systeam]" to convert as much as possible as a static site.

The following are notes about the software I’ve written to migrate a WordPress
blog and multiple MediaWiki namespaces into a Git repository.

## Priorities

The priorities were to keep the documentation pages up, preserve the
contribution history and attributions, also keep the blog contents, and have
everything to be served as static HTML hosted on GitHub pages.

I wanted to have this done before [I leave the W3C][leaving-w3c].

Since the [SysTeam][w3t-systeam] would keep control of the `webplatform.org`
domain, they’ve decided to support some redirect from the original domain to
[webplatform.github.io][wpd-home].

Once everything was migrated, we’ve added a note;

> The WebPlatform project, supported by various stewards between 2012 and 2015,
> has been discontinued

<sup>

Source: [webplatform.github.io][wpd-home]

</sup>

## Outcome

The conversion work took the _two last months_.

All links to pages showing the _WebPlatform_ logo from this article is the
result of what I’m describing here, as the migration and all servers were shut
down and decommissioned in 2016.

The source of the site was generated from
[webplatform/generator-docs][converted-static-site-generator], and we’ve created
[webplatform/webplatform.github.io](https://github.com/webplatform/webplatform.github.io/)
to host the site on GitHub pages. Eventualy, the W3C SysTeam set the repository
as read-only.

There were other things that we’ve initially planned, but couldn’t (see
[Requirements we couldn’t meet](/blog/2015/07/migrating-webplatform-org-mediawiki-into-git-history-and-into-markdown-files#requirements-we-couldnt-meet)):

Here is what I could migrate

<div style="font-size:small" class="table-parent table-auto">

<!--

Find deleted files:

  git log --diff-filter=D --summary > deleted.txt
  g!/delete mode/d

-->

| From                               | To                                  | Repository                                   | Comment                                                                                                                                                               | Commits | Documents | Deleted |
| ---------------------------------- | ----------------------------------- | -------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- | --------- | ------- |
| `docs.webplatform.org/wiki/*`      | `webplatform.github.io/docs/*`      | [webplatform/docs][converted-docs]           | The main docs pages                                                                                                                                                   | 37,000  | 4,675     | 418     |
| `docs.webplatform.org/wiki/Meta:*` | `webplatform.github.io/docs/Meta/*` | [webplatform/docs-meta][converted-docs-meta] | Archived content that needed to be moved during initial mass imports.                                                                                                 | 300     | 58        | 170     |
| `docs.webplatform.org/wiki/WPD:*`  | `webplatform.github.io/docs/WPD/*`  | [webplatform/docs-wpd][converted-docs-wpd]   | Community and notes section. Example [/wiki/WPD:Infrastructure][ex-wpd-internetarchive] into [/docs/WPD/Infrastructure][ex-wpd-gh-pages] ([source][ex-wpd-gh-source]) | 5,700   | 358       | 323     |
| `blog.webplatform.org`             | `webplatform.github.io/blog/*`      | [webplatform/blog][converted-blog]           | The blog content                                                                                                                                                      | 2       | 53        | N/A     |

</div>

[leaving-w3c]: /blog/2015/07/leaving-w3c/
[converted-static-site-generator]: https://github.com/webplatform/generator-docs
[nginx-rewrite-map]:
  https://github.com/webplatform/generator-docs/blob/master/config/nginx/maps/main.map
[converted-blog]: https://github.com/webplatform/blog
[converted-page]: https://webplatform.github.io/docs/css/properties/position/
[converted-docs]: https://github.com/webplatform/docs 'What was under /wiki/...'
[converted-docs-wpd]:
  https://github.com/webplatform/docs-wpd
  'What was under /wiki/WPD:...'
[converted-docs-meta]:
  https://github.com/webplatform/docs-meta
  'What was under /wiki/Meta:...'
[ex-wpd-internetarchive]:
  https://web.archive.org/web/20160722084044/https://docs.webplatform.org/wiki/WPD:Infrastructure
[ex-wpd-gh-pages]: https://webplatform.github.io/docs/WPD/Infrastructure/
[ex-wpd-gh-source]:
  https://github.com/webplatform/docs-wpd/blob/manual-edits/Infrastructure/index.md

## Migration

<app-alert-box style="display:flex">

👀 During this migration project, I was hoping to find a way to take any web
page, from any CMS, and get a full copy (including images) of it into Markdown.
There was none. In 2017, I’ve created
[_Archivator_](https://github.com/renoirb/archivator)
([npm](https://www.npmjs.com/package/archivator)) to help with such work.
Instead of using the last step described here, anyone could use _Archivator_ to
retrieve a copy of their web pages.

</app-alert-box>

While building the solution, a few requirements emerged, they’re listed in
[Requirements](/blog/2015/07/migrating-webplatform-org-mediawiki-into-git-history-and-into-markdown-files#requirements)

### Blog

For migrating the [blog][converted-blog], it was made manually, I’ve just
converted the HTML into Markdown using Pandoc.

### MediaWiki

For migrating MediaWiki, the proces was a bit more complex.

<app-alert-box title="Want to migrate your own MediaWiki?">

🤲🏼 If you’re looking for an HowTo to migrate your own MediaWiki installation,
[the procedure is written in ➡️ **webplatform/mediawiki-conversion**’s README](https://github.com/webplatform/mediawiki-conversion#use)

</app-alert-box>

To migrate, we needed an history of each pages, from creation to the last edit.

With MediaWiki, we have [**Manual:DumpBackup.php**][mw-dumpbackup], that creates
an XML file ("_MediaWiki XML dump_") of all history of all pages. One per
[namespace][mw-namespaces], for WebPlatform Docs’ wikis, we had:
[`/wiki/Meta:*`][converted-docs-meta], [`/wiki/WPD:*`][converted-docs-wpd],
[`/wiki/*`][converted-docs].

A big part of processing and converting history is about the data model so we
could read from one format and use the data model as data-source for conversion.

For this, I’ve created [webplatform/content-converter][content-converter], an
abstract library specialized for data manipulation to help "_Transform CMS
content from a format into another_ \[format\]". It’s written in PHP, and might
still work even though it hasn’t been touched since 2015.

[webplatform/content-converter][content-converter] takes care of manipulating
data for:

- Date of contribution and author information

  Content management systems like _MediaWiki_ has a way to tell the user and
  date of an edition.

- Take each edit contents as they were

  Do not change any of the contents for each edits, even though they are in a
  format understood by the original engine, here being _MediaWiki_.

To convert each page history edit into **Git commits**, I’ve created
[webplatform/mediawiki-conversion][mediawiki-conversion].

This is the utility that takes care of making the conversion [see comments made
here][mediawiki-conversion-steps].

1. _Handle deleted pages_

   For each edit create a git revisions commit until the final file delete. At
   the end of that step, the Git repository should have an history, but no
   aparent files. At this step, we can also use the entries and make a redirect
   map.

1. _Handle pages that weren’t deleted in history_

   Do the same as above. At this step, we should have a repository with text
   files where each file has exactly the same content as the source history. So
   we can add them on top of the deleted pages following the same process as
   above. We can also use those as a list of current pages we’ll want to be
   converted into Markdown.

1. _Convert content_

   For all pages _that weren’t deleted in history_. Query _MediaWiki_ API to
   retrieve the full HTML, including [Transclusions][mw-transclusion] pass it to
   Pandoc, so we get it converted into Markdown. Commit the rewritten file
   contents with Markdown.

By design [webplatform/mediawiki-conversion][mediawiki-conversion] allows to
re-run the 3rd step so we could always get all edits until we
[_Lock the database_ (i.e. cut-off)](https://www.mediawiki.org/wiki/Manual:Lock_the_database)
so we could keep the production site active until a cut-off date.

[content-converter]:
  https://github.com/webplatform/content-converter
  'Transform CMS content from a format into another'
[mediawiki-conversion]:
  https://github.com/webplatform/mediawiki-conversion
  'Export MediaWiki wiki pages and history into a git repository'
[mediawiki-conversion-steps]:
  https://github.com/webplatform/mediawiki-conversion/blob/master/src/WebPlatform/Importer/Commands/RunCommand.php#L48
  'Comments describing mediawiki-conversion'
[mw-dumpbackup]:
  https://www.mediawiki.org/wiki/Manual:DumpBackup.php
  'dumpBackup.php file creates an XML dump for export or backup. XML dumps contain the content of the wiki'
[mw-transclusion]: https://www.mediawiki.org/wiki/Transclusion
[mw-namespaces]: https://www.mediawiki.org/wiki/Help:Namespaces

<!--
#### MediaWiki and special characters

I wasn’t certain GitHub pages would, so normalized their names to be valid ASCII
strings.

The migration process allowed building up an [NGINX rewrite
map][nginx-rewrite-map] for all those possibilities.

For example, the original URL
[/wiki/css/functions/translate()][ex-css-function-internetarchive],
notice the `()` part in the URL would be URLEncoded as `%28%29`, and I didn't
want such characters in the file names. Is now accessible as
[/docs/css/functions/translate][ex-css-function-gh-pages].

The conversion was successful, and we could reproduce (from the earlier example)
[css/functions/translate][ex-css-function-gh-pages]’s
[into Markdown][ex-css-function-gh-source] and maintain its
[page history][ex-css-function-gh-history].

[ex-css-function-internetarchive]:
  https://web.archive.org/web/20160421193144/https://docs.webplatform.org/wiki/css/functions/translate()
[ex-css-function-gh-pages]:
  https://webplatform.github.io/docs/css/functions/translate
[ex-css-function-gh-source]:
  https://github.com/webplatform/docs/blob/master/css/functions/translate/index.md
[ex-css-function-gh-history]:
  https://github.com/webplatform/docs/commits/master/css/functions/translate/index.md
-->

## Requirements

Along with what's described in the
[Migration steps](/blog/2015/07/migrating-webplatform-org-mediawiki-into-git-history-and-into-markdown-files#migration-steps),
we wanted also to ensure we properly support the following.

1. Keep author attributions but have them anonymized

   We didn’t want to leak all contributor’s accounts email addresses to be
   published without their consent. So, I’ve setup a [`.mailmap` so that
   contributors could add a PR to advertize publicly on GitHub][gh-mailmap].

1. Keep code examples in Markdown so we can colourize them

1. Golden standard pages should look the same

   The "Golden Standard" pages were ones we were regularly referring to see how
   they would look and see if things are broken.

   Also, since we were removing infrastructure, we should see features that were
   enabled at the time of _Web.Archive.org_ snapshot, but would be omitted in
   the _Static version_ (i.e. `webplatform.github.io`)

   - _Compatibility data_ was removed
   - _Contents_ on the right should be removed
   - _Overview table_ should look different
   - On _static version_ code blocks should be more colorized differently (it's
     using a different process)

   Examples:

   - <app-link-compare-item slug="docs.webplatform.org/wiki/css/properties/border-radius"></app-link-compare-item>
   - <app-link-compare-item slug="docs.webplatform.org/wiki/css/properties/display"></app-link-compare-item>
   - <app-link-compare-item slug="docs.webplatform.org/wiki/javascript/functions"  web-archive-date="20140626071828"></app-link-compare-item>
   - <app-link-compare-item slug="docs.webplatform.org/wiki/javascript/Array/filter"></app-link-compare-item>
   - <app-link-compare-item slug="docs.webplatform.org/wiki/javascript/Date"></app-link-compare-item>
   - <app-link-compare-item slug="docs.webplatform.org/wiki/Beginners/html"  web-archive-date="20150513130014"></app-link-compare-item>
   - <app-link-compare-item slug="docs.webplatform.org/wiki/tutorials/canvas_notearsgame"  web-archive-date="20150513130014"></app-link-compare-item>
   - <app-link-compare-item slug="docs.webplatform.org/wiki/tutorials/svg_clipping_and_masking"  web-archive-date="20150905205843"></app-link-compare-item>

1. Support MediaWiki special URL patterns

   MediaWiki is pretty relax about what it allows in its URLs.

   Since we’re migrating into a filesystem, we wanted to have only valid
   filesystem file names and decided to normalize all paths into ASCII
   characters.

   For example, the [Namespaces][mw-namespaces] (e.g. `/wiki/WPD:*`) adds a
   column character, that would be URLEncoded into `%3A`

   There were many other discrepancies like:

   - Case insensitivity — Because some URLs in pages were not in the same casing
   - Supporting spaces — Sometimes with underscore "`_`", other times with `%20`
   - Normalize
     [URL Path](https://developer.mozilla.org/en-US/docs/Web/API/URL/pathname)
     ([spec](https://url.spec.whatwg.org/#concept-url-path)) (e.g. anything that
     would be URLEncoded such as `()!@:`)

1. _Support MediaWiki special URL patterns_: A page in another language should
   be migrated

   - <app-link-compare-item slug="docs.webplatform.org/wiki/Main_Page/ja" web-archive-date="20160613060459"></app-link-compare-item>
   - <app-link-compare-item slug="docs.webplatform.org/wiki/Main_Page/ko"></app-link-compare-item>

1. _Support MediaWiki special URL patterns_: A Page with `()` in URL should be
   normalized

   - <app-link-compare-item slug="docs.webplatform.org/wiki/css/functions/translate()"></app-link-compare-item>
   - <app-link-compare-item slug="docs.webplatform.org/wiki/svg/properties/animVal_(SVGAnimatedPreserveAspectRatio)"></app-link-compare-item>
   - <app-link-compare-item slug="docs.webplatform.org/wiki/svg/properties/cx_(SVGRadialGradientElement)"></app-link-compare-item>

1. _Support MediaWiki special URL patterns_: Pages within WPD namespace should
   be migrated

   - <app-link-compare-item slug="docs.webplatform.org/wiki/WPD:Infrastructure/Monitoring/Monit"></app-link-compare-item>
   - <app-link-compare-item slug="docs.webplatform.org/wiki/WPD:Infrastructure/analysis/2013-Migrating_to_a_new_cloud_provider"></app-link-compare-item>

   The image comes from `/WPD/assets/` which means the image is hosted in the
   [webplatform/docs-wpd][converted-docs-wpd] in the assets/ folder.

1. _Support MediaWiki special URL patterns_: Pages in Meta namespace should be
   migrated

   - <app-link-compare-item slug="docs.webplatform.org/wiki/Meta:HTML/Elements/style"></app-link-compare-item>
   - <app-link-compare-item slug="docs.webplatform.org/wiki/Meta:web_platform_wednesday"></app-link-compare-item>
   - <app-link-compare-item slug="docs.webplatform.org/wiki/Meta:Editors_Guide"></app-link-compare-item>

### Requirements we couldn’t meet

<!--

SNIPPET: Ensure ALL assets uploads are displayed properly

```
[].forEach.call(document.querySelectorAll('img'),function(img){
  if ('src' in img) {
    var src = img.src;
    src = src.replace('static.webplatform.org', 'webplatform.github.io/docs-assets');
    img.src=src;
  }
});
```
-->

1. Ensure ALL assets uploads are displayed properly

   Before, we would use GlusterFS to store images for MediaWiki. There has been
   work made to store on `static.webplatform.org`, all the pages uses the link,
   but the SysTeam decided not to keep the redirects.

   Now that the site is archived, I’m unsure this can be fixed.

   If you want to see them, add this bookmarklet to your bookmarks bar
   <a style="text-decoration:none;display:inline-block;padding: 1px 6px;color: #fff;background: #32a0eb;-webkit-border-radius: 4px;-moz-border-radius: 4px;border-radius: 4px;" href="javascript:(function()%7B%5B%5D.forEach.call(document.querySelectorAll('img')%2Cfunction(img)%7Bif%20('src'%20in%20img)%20%7Bsrc%20%3D%20img.src%3Bsrc%20%3D%20src.replace('static.webplatform.org'%2C%20'webplatform.github.io%2Fdocs-assets')%3Bimg.src%3Dsrc%3B%7D%7D)%7D)()">WebPlatform.github.io
   Show images</a>

   The project http://webplatform.github.io/docs-assets/ was meant to be used as
   an origin for `static.webplatform.org`

   **Should we want to fix the issue**, we could setup an HTTP redirect from
   `static.webplatform.org` to `webplatform.github.io/docs-assets/`

   The following (should be) the same file;

   - https://static.webplatform.org/f/f1/htmlstructure1.jpg
   - https://github.com/webplatform/docs-assets/blob/gh-pages/f/f1/htmlstructure1.jpg
   - https://webplatform.github.io/docs-assets/f/f1/htmlstructure1.jpg

1. Make sure page links _with different casing_ are redirected properly

   For example the page for "`Internet_and_Web`" is sometimes linked with
   different casing, e.g. at "`Internet_and_Web/The_History_of_the_Web`" or
   "`internet_and_web/The_History_of_the_Web`", it is migrated once;
   <app-link-compare-item slug="docs.webplatform.org/wiki/concepts/Internet_and_Web/The_History_of_the_Web"></app-link-compare-item>

   Some page has links to with different casing "`internet_and_web`", we can see
   from
   <app-link-compare-item slug="docs.webplatform.org/wiki/concepts"></app-link-compare-item>

   MediaWiki would redirect, but on GitHub pages, nothing has been put in place
   for those. If we wanted to support, we could have used the same entries used
   to create [NGINX rewrite rules][nginx-rewrite-map], and add empty HTML pages
   like GitHub pages would. In the case of WebPlatform project, it's been
   decided to leave as-is.

1. Enforce all redirects from `*.webplatform.org` to properly redirect to
   `webplatform.github.io`.

   This migration process supported creating [NGINX rewrite
   rules][nginx-rewrite-map], I’m unsure if they’ve been used.

---

## Screenshots

<div style="overflow:hidden;clear:both;" class="thumbnails gallery">
<app-image figcaption=" " src="~/assets/content/blog/2015/07/mediawiki-history-to-git-conversion.png">

[WebPlatform/mediawiki-conversion][mediawiki-conversion] is made to run in 3
steps, here we see it running at the 3rd step. Where we would take the latest
version, get the HTML version from the MediaWiki API, and pass to Pandoc to get
Markdown.

</app-image>
<app-image figcaption=" " src="~/assets/content/blog/2015/07/mediawiki-history-to-git-output.png">

Making sure during development that the conversion was effectively the same

</app-image>
<app-image figcaption=" " src="~/assets/content/blog/2015/07/docs-page-history-github.png">

We can see directly on GitHub.com the converted page's Git history

</app-image>
<app-image figcaption=" " src="~/assets/content/blog/2015/07/docs-page-markdown.png">

We can see directly on GitHub.com the converted Markdown contents.

</app-image>
<app-image figcaption=" " src="~/assets/content/blog/2015/07/docs-page-view-syntaxhighlight.png">

The final output should support code blocks with

</app-image>
<app-image figcaption=" " src="~/assets/content/blog/2015/07/mediawiki-history-to-git-log.png" alt="MediaWiki history converted into Git Commits">

The end result is that for each _MediaWiki XML dump_ can be converted into text
files where each edits are made as Git commits keeping author and date of edit.

</app-image>
<app-image figcaption=" " src="~/assets/content/blog/2015/07/docs-page-history-onsite.png">

**Not implemented** Screenshot of an experiment to display the page's Git
history calling GitHub API. There is no trace of this to my recollection, and It
was effectively the first time I used Vue.js.

</app-image>
</div>

<!--
## Needs to be done

- https://github.com/webplatform/ops/issues/41
- https://github.com/webplatform/mediawiki-conversion/issues/16
- https://github.com/webplatform/mediawiki-conversion/issues/12 (parts of it,
  TBD)
- https://github.com/webplatform/mediawiki-conversion/issues/13


## Random pages to compare

- [docs.webplatform.org/wiki/html/attributes/cellPadding](https://web.archive.org/web/20160421193144/https://docs.webplatform.org/wiki/html/attributes/cellPadding)
  to https://webplatform.github.io/docs/html/attributes/cellPadding
- [docs.webplatform.org/wiki/css/properties/writing-mode](https://web.archive.org/web/20160421193144/https://docs.webplatform.org/wiki/css/properties/writing-mode)
  to https://webplatform.github.io/docs/css/properties/writing-mode
- [docs.webplatform.org/wiki/apis/quota_management/StorageQuota](https://web.archive.org/web/20160421193144/https://docs.webplatform.org/wiki/apis/quota_management/StorageQuota)
  to https://webplatform.github.io/docs/apis/quota_management/StorageQuota/
- [docs.webplatform.org/wiki/css/properties/border-radius](https://web.archive.org/web/20160421193144/https://docs.webplatform.org/wiki/css/properties/border-radius)
  to https://webplatform.github.io/docs/css/properties/border-radius/
- [docs.webplatform.org/wiki/Beginners/html](https://web.archive.org/web/20160421193144/https://docs.webplatform.org/wiki/Beginners/html)
  to https://webplatform.github.io/docs/Beginners/html/
- [docs.webplatform.org/wiki/Beginners/es](https://web.archive.org/web/20160421193144/https://docs.webplatform.org/wiki/Beginners/es]
  to https://webplatform.github.io/docs/Beginners/es.html
- [docs.webplatform.org/wiki/javascript/Math/round](https://web.archive.org/web/20160421193144/https://docs.webplatform.org/wiki/javascript/Math/round)
  to https://webplatform.github.io/docs/javascript/Math/round/
- [docs.webplatform.org/wiki/svg/tutorials/smarter_svg_filters](https://web.archive.org/web/20160421193144/https://docs.webplatform.org/wiki/svg/tutorials/smarter_svg_filters)
  to https://webplatform.github.io/docs/svg/tutorials/smarter_svg_filters
- [/docs.webplatform.org/wiki/tutorials/css_transforms](https://web.archive.org/web/20160421193144/https://docs.webplatform.org/wiki/tutorials/css_transforms)
  to https://webplatform.github.io/docs/tutorials/css_transforms
- [docs.webplatform.org/wiki/css/properties/perspective-origin](https://web.archive.org/web/20160421193144/https://docs.webplatform.org/wiki/css/properties/perspective-origin)
  to https://webplatform.github.io/docs/css/properties/perspective-origin
- [docs.webplatform.org/wiki/svg/tutorials/smarter_svg_overview](https://web.archive.org/web/20160421193144/https://docs.webplatform.org/wiki/svg/tutorials/smarter_svg_overview)
  to https://webplatform.github.io/docs/svg/tutorials/smarter_svg_overview

[wpd-ops-ticket-177]: https://github.com/webplatform/ops/issues/177
[gist-useful-mw-sql-queries]:
  https://gist.github.com/renoirb/048eaee1d6aec3afa2e7
  'MediaWiki useful queries'

-->
