---
locale: en-CA
title: >-
  How I managed to make work Guzzle REST client library under Symfony 2.0.x as a
  bundle [Snipet]
canonical: >-
  https://renoirboulanger.com/blog/2012/07/how-i-managed-to-make-work-guzzle-rest-client-library-under-symfony-2-0-x-as-a-bundle-snipet/
status: publish
revising: true
created: '2012-07-11'
updated: '2013-03-29'
tags:
  - php
  - symfony2
categories:
  - programmation
excerpt: >-
  I spent a few days reading and re-reading the Guzzle PHP REST Client library
  to use at it's best posssible. It took me more time than I wished, but thanks
  to them, I understood more of the Symfony2 EventDispatcher mechanism. Here I
  publish the Gist that I am going to use to import to my project at work. Use
  for your own good.
---

<strong>Warning</strong> This is not a cut and paste solution. But some notes I want to share on how I did and what I'd like to cover and remember when I will continue working with that aspect on my current projects.

The problem i had was mostly that i had to see where to mix-and-match things between this wonderful library and Symfony2. I discovered after searching here that it's not that complicated, you just need to get through the learning curve of reading the code AND the documentation.

I am posting here the hilight of what I have been struggling with and will re-read soon about how to use it and implement in into Symfony2.


<h3>Things I wished I understood faster</h3>
<ul>
	<li>How to inject the configuration from symfony without hardcoding paths in my Managers/Controllers</li>
	<li>Why do the XML configuration file has nodes like <code>&lt;client&gt;</code> in the main project file, but it's not what triggers the <tt>Command</tt>. <strong>Answer</strong>: Use <tt>ServiceDescription::factory($xmlFileFullPath)</tt> from the Client class. Yes, it has <tt>&lt;client&gt;</tt> nodes... NO, they are not the same as in the client definition file xml (guzzleclients.xml).</li>
	<li>How to extend a <tt>DynamicCommand</tt> from the ServiceDescription</li>
</ul>



<h3>The Gist</h3>
<script src="https://gist.github.com/3074476.js"></script>



<h3>Improvement paths</h3>
Actually, now that I went through all this, A simple yaml annotation with a simple service definition with <tt>@MyBlogBundle/Resources/config/serviceDescription.clientName.xml</tt> could had done the job.