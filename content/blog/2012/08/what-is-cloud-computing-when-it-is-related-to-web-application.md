---
locale: fr-CA
title: What is Cloud computing when it is related to web application
canonical: >-
  https://renoirboulanger.com/blog/2012/08/what-is-cloud-computing-when-it-is-related-to-web-application/
status: publish
revising: true
createdAt: '2012-08-15'
updatedAt: '2013-03-27'
tags:
  - architecture
  - best-practices
  - cloud-computing
  - software
  - techniques
categories:
  - tranche-de-vie
excerpt: >-
  Some guidelines on what is Cloud Computing related to the scaling point of
  view. This is the continuity of the thread about a shopping cart and payment
  gateway commerce site using a CMS. The conversation persisted on what to do
  and look for cloud hosting.
---

During the discussion, the contributor persisted on knowing what would be considered and thresholds to use some kind of push-button-scaling.

Knowing his context, <a href="/blog/2012/08/some-steps-you-can-look-for-if-you-feel-your-web-application-is-slow">a unzipped install CMS with a buch of plugins</a> I felt the urge to explain that there is not always need to get a bigger server capacity. Here is an overview of what I mean when I talk about cloud computing and continuous integration.

<h3>The E-Mail</h3>

Let's talk about cloud! 

I mean in the web application hosting realm. Not the storage (Google Drive, Dropbox) or software as a service (Salesforce, Basecamp).

<h4>Let's talk about a use case before and my own experience.</h4>

My former company <a href="https://web.archive.org/web/20110808064111/http://evo.cat.io/" rel="nofollow">Evocatio Solutions technologiques</a> manage a pretty large site at the domain <a href="https://uda.ca/">uda.ca</a>.

<h3>The use-case on my recent experience</h3>
This is a complete business management web application that manages an union who represents french speaking artists in north america (mostly residents of Canada).  We built a complete web application that manages many aspects an artist needs to represent themselves and be found. A big part of it is a 140 tables worth of artist description listing details as small a hair length and types of musical instruments to voice tones. It also manages renewal, communication with agencies, portfolios, and management of contracts with managers and more.

Not to forget the very heavy databases queries we generate to search, for example: &lt;example&gt;An <em>asian woman</em> with <em>white hair</em> playing <em>yuku lélé</em> who can <em>pilot helicopter</em> AND ride <em>motorcycle</em> ...&lt;/example&gt;

Yes. Database queries get very big, very quickly. Not only in the search engine I described, but through all the features.

That, to my opinion, is heavy. Also considering that that Artist's Union has several thousand members.

This information is on top of my head, please do not take this into real numbers, I did not look the latest deployment needs.  But for the server side, it only uses a simple Virtual machine with 4Gb of RAM give or take.

That is my point about expanding hosting without optimizing stuff around.

<h3>What your web application has to consider then</h3>

Amazon and other Cloud service is about mostly about automated server deployment.

But the powerful offering of "scale tour application" with computing cubes that automatically scales requires more than just nodes.

It requires the code (here again) to support:
<ul>
	<li>multiple databases hosts and types support (Cassandra, Solr, MySQL) specialized for the type of data to store</li>
	<li>User upload files replication</li>
	<li>Database/Keystore (CouchDB, Mongo)</li>
</ul>

All spanable on multiple hosts by a mere change of one configuration file.

The code itself should:
<ul>
	<li>Be deployable by a simple phing/ant/nant task</li>
	<li>Hosted on a NAS mount that you could create an other machine and use when time of computing need happens</li>
</ul>

All this (for some parts)  is what is called <a href="http://agile.dzone.com/articles/digg-using-continuous">Continuous integration</a> (<a href="http://en.wikipedia.org/wiki/Continuous_integration">Wikipedia</a>) some <a href="http://stackoverflow.com/questions/425692/what-is-your-preferred-php-deployment-strategy" title="Reference on some good deployment strategies">deployment strategies</a> (<a href="http://stackoverflow.com/questions/2180460/setting-up-a-deployment-build-ci-cycle-for-php-projects" title="Other relevant StackOverflow thread">also here</a> and <a href="http://erichogue.ca/2011/05/php/continuous-integration-in-php/" title="Blog post and presentation about Continous Integration by EricHogue">this blog post too</a>), and most of the time. It's not just the continuity and automation that matters, but the underlying deployment mechanism can be provided by third parties, like <a href="http://www.iamproblematic.com/why-i-like-heroku/" title="Blog post about what is nice about Heroku">Heroku</a> and many others.
