---
locale: fr-CA
title: >-
  Trying to find templating engine library of markup generating schema.org/RDFa
  content
canonical: >-
  https://renoirboulanger.com/blog/2012/06/trying-to-find-templating-engine-library-of-markup-generating-schema-orgrdfa-content/
status: publish
revising: true
created: '2012-06-29'
updated: '2013-04-10'
tags:
  - symfony2
  - wish-list
categories:
  - tranche-de-vie
excerpt: >-
  Imagine we had a system that provides a serialized and filtered transport
  mechanism of content. Imagine now that we want to get that content, and insert
  it in a nice and pretty website, and where I am at with this. Imagine that
  content could be all semantic, valid, accessible html. Without having to teach
  and manually implementing all the requirements on the rendering part. This is
  my ambition.
---

I am currently working on a project that I am going to publish on github.

It's roughly a library of templating engine macros and blocks to send collections of data (similar to a JSON format) and it builds the HTML favouring HTML+RDFa with abstraction of the CSS schema for implementation using this "framework of things".

My question is mostly if any of you guys had been aware of already made such libraries.
<h3>What I am working on:</h3>
The main idea is to be able to exchange content, take from external source, cache in a "serialized" but text only (readable) way, then generate the html in the shema you want.

If you want to see in detail the big picture I want to attain using what I am searching, I suggest you look on the <a href="/blog/2012/08/project-manifest-content-management-publishing-platform-to-implement-accessibility-semantic-markup-and-ease-web-publishing">project manifest here</a>.
<h3>Where I am at:</h3>
My current implementation is made in <a href="http://twig.sensiolabs.org/doc/templates.html">Twig</a> using Symfony2/Doctrine2 with a WordPress database.

For the moment I have my site <a href="https://renoirboulanger.com/" target="_blank"><strong>beta</strong><span style="font-family: arial, sans-serif; color: #1155cc;">.renoirboulanger.com/</span></a> (not stable yet) which implements partly the first and the third part, you can see the code of the first part in this <a href="https://github.com/renoirb/PSSBlogBundle/tree/develop">github repo branch</a>, you can see how I am architecturing in <a href="https://github.com/renoirb/PSSBlogBundle/wiki">this Wiki page</a>.

So far, for the third part, I have only a few patterns using <em>schema.org/BlogPosting</em> and <em>schema.org/UserComments </em>and I am abstracting the css vocabulary out of it and making sure the templating library is as DRY as possible.

When I will have more than an incomplete BlogPosting+UserComments macros I will open the project on github.
<h3>Your input</h3>
As I said, I am mostly wondering if you have knowledge of any such implementation of set of macros that represents html in micro formats, be it in Python Django templating language, Mustach, Hogan, or anything.

Thanks!