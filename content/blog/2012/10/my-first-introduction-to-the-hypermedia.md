---
locale: en-CA
title: Introduction to the Hypermedia
canonical: >-
  https://renoirboulanger.com/blog/2012/10/my-first-introduction-to-the-hypermedia/
status: publish
revising: true
migrateCode: true
migrateLinks: true
created: '2012-10-27'
updated: '2023-11-16'
tags:
  - architecture
  - web
categories:
  - technologies
excerpt: >-
  At work, I had a conversation about implementing SOAP with an other service,
  It struck me that they did not talk about REST. Mostly in today's distributed
  systems, you may want to think twice about how to implement for the future.
  This is some thoughts I had on the matter
---

<p>I was reading around about how to architect in a scalable fashion a web service. You know, the concept of remote procedure call?</p>

<p>At work, I had a conversation about implementing SOAP with an other service, It struck me that they did not talk about REST. Mostly in today's distributed system, you may want to think twice about if there is something newer that solves better than a solution designed 20 years ago... there must be things learned</p>

<p>So, I wrote this small introduction to what is REST, and the Hypermedia.</p>

<p>Beware, I am not an expert, just a curious that found a nice video and some links about it and trying to learn and apply it properly.</p>

<p>Actually, I heard it for the first time from <a href="http://www.bizcoder.com/">Darrell Miller</a> in an impressive presentation that blew my mind. Unfortunately I did not pursue up until a few months ago.</p>

<p>Now, I am at a state where I am starting a project and we have to talk to many nodes, I would like to take this opportunity of starting from scratch and use it's concepts. I am anxious on how it is going to look like.</p>

<p>As for the difference this post started for; I discussed with my colleagues, I compiled these two descriptions with code example in PHP to illustrate.</p>

<!--more-->

<h3>SOAP</h3>

<p>SOAP is an object's method call to a remote server as if it was a local object.</p>

<pre><code class="php">$o = new SoapClient('https://some.host/wsdl');
$clients = $o-&gt;getClients();
</code></pre>

<p>What you get at the  is an understandable array, or text, or object coming from the web service.</p>

<p>Regardless of the other application SOAP server is in the same language as the client (PHP in this case).</p>

<p>This may seem nice, it has a few limitations on the regard of what you can do out of it.</p>

<p>&nbsp;</p>

<h3>REST</h3>

<p>In contrast to SOAP, a REST call, you actually use HTTP to request things and use it's content and headers to work your logic.</p>

<p>Situation is that most implementations only do a GET to a URL and that is all. A situation where most implementations do not fulfill all the power of it, again. This is the reason why the RESTafarians (passionate about REST) decided to change the name of it's usages.</p>

<p>A nice way to explain the lacks of use of it's potential through the popular implementation goes from <a href=" http://www.youtube.com/watch?v=g4sqydY3hHU&amp;feature=BFa&amp;list=PLr4f8f5Q9NTmnV4KxjPaE1bgMMoaZbIOt">Designing Hypermedia APIs presentation by Steve Klabnik</a>.</p>

<p>&nbsp;</p>

<h3>Hypermedia</h3>

<p>In comparison to REST, Hypermedia it is basically going like the following.</p>

<p>Popupar REST implementation would only care of sending a request and work with the received data, Hypermedia on the other hand, is like using what we receive and "browse" the content, follow links, submit forms to end up with the objective.</p>

<p>So, as an example:</p>

<pre><code class="php">use Guzzle\Http\Client;

$client = new Client('https://some.host/api/v1');
$request = $client-&gt;get('user/42348972389/profile/picture');
$request-&gt;setAuth('myusername', 'mypassword');
$image = $request-&gt;send();
</code></pre>

<p>With this example, you could get the RAW image file stream directly.</p>

<h3>Libraries</h3>

<p>Using Symfony2 in my projects all of this made me think about how to implement it, I stumbled on <strong><a href="http://guzzlephp.org/">Guzzle</a></strong> and <strong><a href="https://github.com/kriswallsmith/Buzz">BUZZ</a></strong>, two PHP 5.3 libraries, which I could use. What I appreciate with Guzzle is the pattern around it's usage.</p>

<p>As a side note, if you want to see an <a title="How I managed to make work Guzzle REST client library under Symfony 2.0.x as a bundle" href="https://renoirboulanger.com/blog/2012/07/how-i-managed-to-make-work-guzzle-rest-client-library-under-symfony-2-0-x-as-a-bundle-snipet">applied example of a REST call using Guzzle, you can see this post I created explaining my attempts</a>. I did not work with that since then, I hope to get back to it soon.</p>

<p>&nbsp;</p>

<h3>More to read</h3>

<p>I am a padawan on the subject, but I have a few recommendations to read, here they are:</p>

<ul>
    <li><a href=" http://www.youtube.com/watch?v=g4sqydY3hHU&amp;feature=BFa&amp;list=PLr4f8f5Q9NTmnV4KxjPaE1bgMMoaZbIOt">The introductory video that started it all for me, by Steve Klabnik</a></li>
    <li><a href="http://designinghypermediaapis.com/">Designing Hypermedia APIs, by Steve Klabnik</a></li>
    <li><a href="http://www.aaronheld.com/post/practical-hypermedia ">Practical Hypermedia by Aaron Held</a></li>
    <li><a href="http://herbjorn.wordpress.com/2010/11/19/rest-versus-soap-for-the-public-cloud/">REST versus SOAP</a></li>
    <li><a href="http://www.bizcoder.com/index.php/2012/03/07/hypermedia-client-maturity-model/">Hypermedia Client Maturity Level by Darrell Miller</a></li>
    <li><a href="http://deepfriedbytes.com/podcast/episode-90-going-through-the-7-r-rsquo-s-of-hypermedia-with-darrel-miller/">Darrell Miller: Going through the 7 R's of Hypermedia</a> (podcast recording)</li>
</ul>
