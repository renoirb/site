---
locale: fr-CA
title: A list of quality indicators we could find on an application or web site
canonical: >-
  https://renoirboulanger.com/blog/2012/11/a-list-of-quality-indicators-we-could-find-on-an-application-or-web-site/
status: publish
revising: true
created: '2012-11-11'
updated: '2013-04-01'
tags:
  - architecture
  - software
categories:
  - programmation
excerpt: >-
  I was writing a requirement document for a client project and I wanted to
  outline some key indicators of quality he should expect from the final
  product. I thought of sharing it with you.
---

When we write a project specification document, we write functionnal and non-functionnal and other sections.  As I want to communicate to my peers and sponsors the level of quality, I thought of creating this list of indicators.

<p>&nbsp;</p>
<h2>Web application quality attributes</h2>
<ul>
	<li><strong>Frontend</strong> should adjust to the user browser (tablet, computer, phone) “Responsive” (already partially in place)</li>
	<li><strong>Frontend</strong> URIs should express what they represent for future/possible conversion to REST service endpoint</li>
	<li><strong>Frontend</strong> response time should be as quick as possible using optimization techniques such as assets minification and non-blocking javascript</li>
	<li>Code “<strong>Domain</strong>” (language) should illustrate user intent</li>
	<li><strong>Frontend</strong> to use W3C valid markup following HTML5 recommendations in a “Progressive enhancement” manner;</li>
	<li><strong>Logging</strong> system should declare application state and intents and provide helpful feedback (e.g. "User jshmoe logged in from... Montreal Quebec.")</li>
	<li>Front-end error <strong>message</strong> should be using terms that speaks to the end user</li>
	<li>Error <strong>message</strong> and notices should not break layout</li>
	<li>All <strong>message</strong> and user read text should be without spelling mistakes or bad translation</li>
</ul>

<p>&nbsp;</p>
<h2>Frontend as quick to load as possible</h2>
Among most recommendations and references about common user frustrations is the time a web page loads.

The idea is to basically push to the queue and forget returning a page back as soon as possible.

Other key aspects are graceful degradation of javascript, functional site even with javascript errors.

Most importantly. The portal frontend can be deployed in any number of instances, with only one address, and be completely transparent to the user.

<p>&nbsp;</p>
<h2>Your opinion</h2>
What else should we also include in such a list? I agree that it is not complete as much as a W3C recommendation is. But I believe it is much good in a context of a project outline to explain details you are taking into account while evaluating.


<p>&nbsp;</p>
<h2>Reference</h2>
<ul>
	<li><strong>High available websites with AWS</strong>
<a href="http://www.slideshare.net/AmazonWebServices/highly-available-websites-in-aws">http://www.slideshare.net/AmazonWebServices/highly-available-websites-in-aws</a></li>
	<li><strong>Progressive enhancement</strong>
<a href="http://youtu.be/hdTxeR90_1E">http://youtu.be/hdTxeR90_1E</a></li>
	<li><strong>Front End Engineering Manifesto </strong>
Set of rules on which web application frontend are considered best-practices
<strong><a href="http://f2em.com/">http://f2em.com/</a></strong></li>
	<li><strong>Frontend optimization build toolkit</strong>
<a href="http://yeoman.io/">http://yeoman.io/</a></li>
</ul>