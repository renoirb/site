---
locale: en-CA
title: Who else is using feature flipping thing on their web applications?
canonical: >-
  https://renoirboulanger.com/blog/2013/04/who-else-is-using-that-feature-flipping-thing-on-their-web-applications/
status: publish
revising: true
created: '2013-04-09'
updated: '2013-04-09'
tags:
  - best-practices
  - development
  - techniques
  - workflows
categories: []
excerpt: >-
  Heard about a web application concept that can be described as: enabling or
  disabling live on the web? That's called "feature flipping". Here is my essay
  about how to describe and use.
---

<p>I am currently reading and collecting ideas on how to present and propose an implementation in my projects.</p>

<p>I want to use:</p>

<ul>
<li>Continuous integration</li>
<li>Automated builds</li>
<li>Feature flipping</li>
</ul>

<p>And make all of this quick and easy for anybody in the team.</p>

<h2>Feature flipping</h2>

<p>This is fairly new to me, but I like the idea. The concept is that the code declares in their own components which features they are contributing to.</p>

<p>This way, we can then totally hide it from sight from the users.</p>

<h2>Source control branching</h2>

<p>I am currently searching and preparing to introduce to my client ways to work with a few elements in our project.</p>

<p>The idea is that instead of managing a complex branch scheme, and skim to the essential.</p>

<p>A trend was to use GitFlow, then, the project grows, developers do not have all the time to manage everything, and things get out of hands.</p>

<p>It may then look like something similar to that:</p>

<p><img src="/wp-content/uploads/2013/04/complex-branching-strategy-can-be-harmful.png" alt="Quoting a slide from Zach Holman about branching" /></p>

<p>It doesn't seem bad in the first place, but even though Git gives an easy way to do so, if you want to adapt quickly, it can bring overhead.</p>

<p>At least, that's what <a href="http://code.flickr.net/2009/12/02/flipping-out/">Flikr</a>, <a href="http://zachholman.com/talk/how-github-uses-github-to-build-github/">Github</a>, <a href="http://nosql.mypopescu.com/post/407159447/cassandra-twitter-an-interview-with-ryan-king">Twitter</a>, Facebook (so I heard) does.</p>

<p>I'll keep you posted on what I find on the idea soon-ish.</p>

<h2>References</h2>

<ul>
<li><a href="http://www.infoq.com/presentations/Feature-Bits"><em>Eric Sowa</em> and <em>Rob Loh</em> presentation on <em>infoQ</em></a> (the most complete!)</li>
<li><a href="http://martinfowler.com/bliki/FeatureToggle.html">Martin Fowler, on Feature toggle</a></li>
<li><a href="http://webdevnights.github.io/feature-flipping/#/first"><em>Mal Curtis</em> presentation at <em>Auckland Web Dev Nights</em></a></li>
<li><a href="http://code.flickr.net/2009/12/02/flipping-out/">Flickr</a></li>
<li><a href="http://blog.octo.com/feature-flipping/">Benoit Lafontaine (in french)</a></li>
<li><a href="http://99designs.com/tech-blog/blog/2012/03/01/feature-flipping/">Chris Campbell</a></li>
<li><a href="http://blogresearch.smalsrech.be/?p=3900">Smals Research (in french)</a></li>
</ul>