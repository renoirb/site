---
locale: en-CA
title: Crash course about how DNS works and the things you should know about it
canonical: >-
  https://renoirboulanger.com/blog/2012/08/crash-course-about-how-dns-works-and-the-things-you-should-know-about-it/
status: publish
revising: true
created: '2012-08-01'
updated: '2013-03-27'
tags:
  - tutoriels
  - vulgarisation
  - web
categories:
  - technologies
excerpt: ''
---

I often come with conversations with people and hear them asking how DNS works for hosting their domains. Most of the time, there is plenty of ressources about this. Nevertheless. I felt like I could try to make a nice answer in less than 200 words.

<h2>What is DNS?</h2>
Just to have everybody on equal grounds, here is some describing facts about domain name resolution that drives the World wide web.

<ul>
	<li>Oldest DNS service is the <a href="http://en.wikipedia.org/wiki/Hosts_(file)">"hosts" file</a> listing basically IP address and name</li>
	<li>DNS is all about converting "name" into IP address;</li>
	<li>Registrar is a provider that takes care to register your specification of DNS servers to the <a href="http://en.wikipedia.org/wiki/Root_name_server">ROOT servers</a></li>
</ul>


<h2>Essentials to know about DNS configuration</h2>
Now, the configuration of it. Configuration made of simple flat text files. Format seems cryptic at first but its very straight to the point.

<ul>
	<li>Each file is also called a "zone file"</li>
	<li>A Zone can be created from any DNS server. It is really used ONLY if you specify them at the registrar</li>
	<li>Entries in a zone represent a subdomain (A,CNAME), a configuration (TXT), or other peers (NS) one per line</li>
	<li>Each name must end by a dot. Otherwise it gets to be represented as a subdomain of the current zone file name</li>
</ul>


<h2>Some examples</h2>
Rougly. The A, and CNAME entries are the essentials to know about.

CNAME is an alias to a A

<pre lang="bash">
    domainname.com. IN A 1.1.1.1
    www IN CNAME domainname.com.
    other.domainname.com. IN A 2.2.2.2
</pre>

<h3>Explanations:</h3>
<ul>
	<li>Both names www.domainname.com and domainname.com in the address bar wil get same IP but you only have to change the A entry</li>
	<li>Domain entry always end with a dot. Otherwise (like the case of the "www entry) it gets terminated by the zone name (the SOA (Start Of Authority) declaration) not shown.</li>
	<li>Most important is also the MX and NS entries.  MX is the mail servers and NS the other new DNS servers. Just make sure it follows through</li>
</ul>

Hope this helps clarify