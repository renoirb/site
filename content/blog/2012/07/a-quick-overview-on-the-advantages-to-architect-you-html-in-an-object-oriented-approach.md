---
locale: en-CA
title: >-
  A quick overview on the advantages to architect you HTML in an "Object
  Oriented" approach
canonical: >-
  https://renoirboulanger.com/blog/2012/07/a-quick-overview-on-the-advantages-to-architect-you-html-in-an-object-oriented-approach/
status: publish
revising: true
created: '2012-07-24'
updated: '2013-03-27'
tags:
  - architecture
  - html
categories:
  - web-integration-review
excerpt: ''
---

I am reading quite a few comments on mailing lists about how they'd like to improve the markup but show what we were doing many years ago. Ahem. When we were <em>NOT yet doing HTML5</em>.

I would like to remind that OOCSS as far as I recall is to use CSS selectors in an Object Oriented approach.

Nicole Sullivan, who coined the term made it pretty clear.

Separate CSS effects and assemble afterward.

Namely, separating:
<ul>
	<li><strong>Structure</strong> and <strong>Skin</strong></li>
	<li><strong>Container</strong> and <strong>Content</strong></li>
</ul>


Just think of things for their use, more than the specifics:
<ul>
	<li>helper link beside input</li>
	<li>placeholder where form buttons are</li>
	<li>Region where there is call to action</li>
	<li>Label is beside input/label over input</li>
	<li>Error message in any case possible</li>
</ul>


With the following requirement:
<ul>
	<li>Same HTML markup</li>
	<li>consistent look</li>
	<li>Easy to add javascript "behaviors"</li>
	<li>Not uslessly (imprisoning) specific (see: <a href="http://www.slideshare.net/stubbornella/our-best-practices-are-killing-us">Our best practices are killing us</a>)</li>
</ul>

All this and more are the benefits of imementing OOCSS

I recommend to have a look at markup libraries such as Twitter bootstrap, <a href="http://addyosmani.github.com/jquery-ui-bootstrap/">jQuery UI Bootstrap</a> (jQuery UI, writing Twitter Bootstrap markup), Kickstrap, Zurb Foundation, Pea.rs, and others. I have a list on my <a href="http://delicious.com/inexisdotnet/css+framework">delicious account tagged as <code>css+framework</code></a>

As an example of this concept, I wrote <a href="/blog/2012/05/snippet-confirm-form-before-submitting-using-twitter-bootstrap-in-a-modal-window">a plugin to create a form confirmation window using only two class names</a>.


<h3>References</h3>
<ul>
	<li><a href="http://www.slideshare.net/stubbornella/object-oriented-css">Nicole Sullivan's slides on Object Oriented CSS</a></li>
	<li><a href="http://www.slideshare.net/nataliedowne/css-systems-presentation">Natalie Downe's CSS Systems</a></li>
	<li>Jonathan Snook's SMACSS Scalable and Modular CSS</li>
</ul>
