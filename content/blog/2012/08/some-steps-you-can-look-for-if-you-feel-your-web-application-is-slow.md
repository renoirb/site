---
locale: en-CA
title: Some steps you can look for if you feel your web application is slow
canonical: >-
  https://renoirboulanger.com/blog/2012/08/some-steps-you-can-look-for-if-you-feel-your-web-application-is-slow/
status: publish
revising: true
createdAt: '2012-08-15'
updatedAt: '2013-03-27'
tags:
  - architecture
  - best-practices
  - software
  - vulgarisation
categories:
  - tranche-de-vie
excerpt: >-
  A peer asked for opinion about things to consider to use cloud computing
  services. I assumed then that he meant that he wishes to use what some vendors
  sells as "flip the switch" scaling.
---

It all started by a discussion thread in a mailing list. A guy who developed a shopping cart and payment gateway using a CMS.

My first reflex, before thinking of scaling the server I thought I should give some pointers on things that can hog the site, before going to think to scaling solutions.

That was all before <a href="/blog/2012/08/what-is-cloud-computing-when-it-is-related-to-web-application">continuing talking on the cloud that I answered later that I answered later <strong>on that blog post</strong></a>.

The thread started as follows:
<blockquote>&gt; (...) I have a Magento modified into a e-commerce site (...) that
&gt; me and my client feels slow, my client has asked about Amazon hosting. They
&gt; do everything else, CDN, the works, shouldn't their hosting
&gt; be superior?
&gt;
&gt; What would be worth for a test drive, I'd say, if you think
&gt; your site's performance issues can be addressed by
&gt; throwing CPU, memory, storage, etc (...)</blockquote>

<h3>My answer</h3>
I doubt that you need bigger hosting for a e-commerce site.

Not for the "first  thing to improve performance" action point though.
<p>Unless your site has to provide (real) HEAVY traffic. Non stop.</p>
<p>It is most likely something somewhere down the execution of the web application that requires to be looked at.</p>

<h3>Performance slowing factors</h3>

<p>Some common explanations for slow execution time could be basically due because of one or many of the following:</p>

<ol>
	<li>Network latendy</li>
	<li>Process communication problem (connection, zombie process, etc)</li>
	<li>Application architecture</li>
	<li>Hardware/Software performance</li>
</ol>

<p>Now talking about application architecture.  This one can be a real <em>can of worms</em>!</p>
<p><strong>Some Application architecture bottlenecks</strong></p>
<p>I currently seriously doubt the order here should matter. But this is the ones that pop into my mind at first.</p>
<ol>
	<li>Web service/database queries/files access across network ... packetloss could also be a cause</li>
	<li>Database queries processing that could require some well picked indexes</li>
	<li>Heavy queries and frequent read write or some sleep() hidden here and there to wait other result set</li>
	<li>No http/view caching</li>
	<li>No code caching/precompiled code at all (can be config, whatever that can be pre-compiled and served into basic arrays of calculated data frequently used)</li>
	<li>No memcached/keystore service</li>
	<li>No read-only data store</li>
</ol>


<h3>An analogy</h3>
<p>So. To my opinion, if you are using a "unpack to install" web based software such as WordPress, then add plusings without testing and looking if all of them works well together.</p>
<p>You are likely to be trying to make a <strong>Cheetah kitten</strong> into a <strong>humanoid Android</strong>.</p>
<p>As in,  you can install a lot of metal patches. Doesn't mean it will have a full AI system and be self sustainable.</p>
<p>That is to illustrate, what it is lie, you should look to alternatives. At least with something closer to a droid :)</p>

<h3>Seriously enough.</h3>
<p>My professionnal recommendation would be to work with each "application architecture buttolenecks" proposal list before "going cloud"</p>