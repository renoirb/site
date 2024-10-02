---
locale: en-CA
title: >-
  Project manifest: Content management publishing platform to implement
  Accessibility, Semantic markup, and ease web publishing
canonical: >-
  https://renoirboulanger.com/blog/2012/08/project-manifest-content-management-publishing-platform-to-implement-accessibility-semantic-markup-and-ease-web-publishing/
status: publish
revising: true
created: '2012-08-10'
updated: '2013-04-10'
tags: []
categories: []
excerpt: >-
  Have you ever imagined you could take content from a trusted and usable
  content management system and be able to convert in in the HTML format you
  want for your redesign. That's what I am seeking for, for years. Numbers of
  time I rewrote site content and reimplemented in a different CMS (even my own,
  back then). How about tackling with the core of the problem... in a fashion
  that ANY programming language could take from. That's my current ambition,
  here is my status about it.
---

This is my own manifest on how I think today's CMS should be architectured. I need to find a proper name on the idea and/or possibly join one of the project that exists. If you understand french, I created the <a href="/blog/2012/08/nouveau-projet-refonte-de-mon-site-en-conservant-wordpress-comme-back-office-mais-symfony2doctrine2twig-pour-generer-les-vues">equivalent post on that page</a>.

Layers:
<ol>
	<li><strong>Data extraction</strong> layer, takes from...  xml, rss, github, wordpress database, drupal database, REST service and pass to layer 2</li>
	<li><strong>Data filtering, normalization and serialization</strong>. Providing adapters for normalization, caching, and expose a gateway for third layer</li>
	<li><strong>Content transportation</strong> layer of normalized/serialized content transport mechanism</li>
	<li>(<em>need to coin term here</em>)  "Container"  providing:
<ol>
	<li>Placeholders for content coming from layer 3</li>
	<li>Automated creation of HTML blocks and patterns following semantic markup and accessibility principles</li>
	<li>Logicless templating for easy usage for integrators who do not need to learn programming</li>
</ol>
</li>
</ol>
<h3>Advantages on that approach</h3>
I truly think that with such mechanism, we could <a href="/blog/2012/06/trying-to-find-templating-engine-library-of-markup-generating-schema-orgrdfa-content">adapt content in a semantic manner</a> and be able to abstract content edition, theme.

Much is here to say about it. I am leaving this as it is now and I'll update relations and ideas as I spend time on it. <a href="http://forrst.me/renoirb">Contact me</a> if you have questions.