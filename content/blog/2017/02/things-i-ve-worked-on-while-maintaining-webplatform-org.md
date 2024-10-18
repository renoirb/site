---
title: Things I’ve worked on in the last two years while maintaining WebPlatform.org
locale: en-CA
created: 2017-02-09
updated: 2023-11-20
canonical: >-
  https://renoirboulanger.com/blog/2017/02/things-i-ve-worked-on-while-maintaining-webplatform-org/
status: publish
revising: true
categories:
  - tranche-de-vie
tags:
  - career
  - webplatform docs
excerpt: >-
  Before starting working on the WebPlatform Project, I knew that I was jumping in a complex
  project that required all my skills all at once.
---

<!--#TODO With Hypothes.is annotations-->

<p>I’ve worked at the W3C for two years. My assignment was on the WebPlatform.org project and my responsibility was to keep everything in order.</p>

<p>While I am archiving things and closing my notes of the last two years I thought I’d share with you from where I started, and what I’ve done.</p>

<h2>How was <em>WebPlatform</em> infrastructure when I started...</h2>

<p><em>WebPlatform</em>.org had been running on about 20 VMs. Until my most recent work to convert everything into static-site generators, It still was using that many virtual servers. More on that later.</p>

<p>When I arrived into the project, every component of the site was in a good shape. I could build any server by booting a from a blank Ubuntu 10.04 LTS with a name that’ll tell the configuration management what to install on the new "minion". <strong><a href="https://ryandlane.com/blog/">Ryan Lane</a></strong>, the person I came to replace, <a href="https://webplatform.github.io/blog/2012/10/building-web-platforms-infrastructure/">did a great job</a>!</p>

<p>This was the first time in my career where I could replace any server using a configuration management tool. I’ve used Puppet, Chef on small projects, but <em>WebPlatform</em>.org was much bigger and was using <a href="https://saltproject.io/">Salt Stack</a>.</p>

<p>It felt great to be assured that almost every piece was replaceable without worrying about individual pieces. But still, to change a password required to dig in folders, edit and cross fingers. It was a cry for improvement.</p>

<p>As for the code WepPlatform was using to serve the community at that time was basically a bunch of open-source projects with a few manual edits here and there. The theme, the configuration, and so on.</p>

<blockquote>
  <p><em>WebPlatform</em>’s Achille’s heel was the deployment server.</p>
</blockquote>

<p>We had backups, but yet, if "deployment" VM would lose its data, I would have also had to guess how each component were put together and rebuild every server. <em>WebPlatform</em>’s Achille’s heel was the deployment server.</p>

<p>Luckily it didn’t happen.</p>

<h2>Highlights</h2>

<h3>1. Software upgrades and "Cloud hop" re-deployments</h3>

<p>During the two years I’ve been on <em>WebPlatform</em>, we’ve been through a full system software upgrade, we were initially running on Ubuntu 10.04 LTS, and 2 "cloud hops" (i.e. re-install everything on another <em>cloud</em>).</p>

<p>Our "cloud-hops" were from initial <a href="https://www.hpcloud.com/">HP Cloud</a> in December 2013 to our very own Open-Stack cluster — a 4 blade server borrowed by our friends at <a href="https://www.dreamhost.com/">DreamHost</a>.</p>

<p>Thanks to my good friend <em>Etienne Lachance</em> who helped <strong>a lot</strong> installing the various components. The <a href="https://docs.openstack.org/">Open-Stack documentation</a> has a lot of rough edges, but we came through it and ran the system without too much issues for a year.</p>

<p>The second "cloud-hop" was between the self-managed Open-Stack cluster into the very beta <a href="https://www.dreamhost.com/cloud/computing/">DreamCompute</a> platform that <em>DreamHost</em> opened up.</p>

<p>All of this to tell that the challenge wasn’t always to keep things up when crisis was happening, but also the work involved in doing maintenance:</p>

<ul>
<li>Make everything refer to resources over SSL/TLS</li>
<li>software upgrades and security patches, </li>
<li>rewrite of every component; blog, wiki, issue tracker, etc, so their configuration are managed and the theme is applied on top of a clean code checkout</li>
</ul>

<p>A lot of <em>creeping dependencies</em> and possible places to break.</p>

<h3>2. Rewrite deployment code to enable us working on a feature without affecting the live site</h3>

<p>Most of the code had <code>https://*.webplatform.org</code> hardcoded manually. Meaning that I couldn’t install a full copy of the site. This made it hard to rework parts of the site without impacting the live site.</p>

<p>Like I was saying, the <a href="https://blog.webplatform.org/2012/10/building-web-platforms-infrastructure/">work that has been done before me was great</a>! Everything was in place and the community was already writing docs! In fact, <em>before start working on WebPlatform, I knew that I was jumping in a complex project that required all my skills all at once</em>. <em>Rewriting deployment code</em> crucially needed time.</p>

<p>That’s what I did while making sure the site was running smoothly.</p>

<p>Not only the code was assembled quickly, but also the most important server, the  "deployment" server, was the only piece that needed work to be also replaceable like the other parts of the system.</p>

<p>The cherry on the sundae is that the configuration management scripts refactor is now public, it allowed me to re-deploy WordPress, MediaWiki, BugGenie, Dabblet, Etherpad, Piwik and others.</p>

<p>With this refactor, I achieved a "sysadmin dream"; I can control the passwords and secret from one file and apply the change to both the service and the appropriate configuration file at the next configuration management system run.</p>

<p>If your happen to manage servers that runs WordPress, MediaWiki, MariaDB, Memcached, ElasticSearch or a set of static HTML files, it shouldn’t be hard to reuse.</p>

<p>If you want to use my work, you can fork <a href="https://github.com/webplatform/salt-states">webplatform/salt-states</a> and <a href="https://github.com/webplatform/salt-pillar">webplatform/salt-pillar</a> and use the same code as me to run our "deployment" server (now called "salt") for your own site.</p>

<p>All you need is an empty VM called "salt", install the two repositories plus one containing secrets, and you should be good to go.</p>

<p>The installation of the "deployment" VM is a bit more complex than two git-clone, you can refer to the <strong>salt-master/</strong> folder in <a href="https://github.com/webplatform/ops">webplatform/ops</a> and use the <strong>vagrant-workbench/</strong> to have your own local copy using Vagrant and Virtual Box — more on this later.</p>

<p><strong>NOTE</strong> You might need the <strong>secrets</strong> repository, I will eventually publish an empty shell so people won’t need to reverse engineer.</p>

<h3>3. Refactor deployment strategy to help scale web applications regardless of their programming languages</h3>

<p>Setup conventions in deployment strategy so I could run RubyOnRails, NodeJS, Python, PHP and static files without much change in how to to deploy them.</p>

<p>That one was about harmonizing how things are deployed so I could handle separation of concerns when exposing on the web. You can <a href="https://github.com/webplatform/ops/issues/115#issuecomment-95629216">see my monologue on the subject</a>.</p>

<h3>4. Create script to create deployment server from a blank VM, with local Vagrant workspace</h3>

<p>Create a local workspace so I can work on server deployment scripts on my local machine, build and destroy VMs to ensure all runs smoothly in the cloud.</p>

<p>Most of the time I was maintaining scripts <a href="https://github.com/webplatform/salt-states">webplatform/salt-states</a>, <a href="https://github.com/webplatform/salt-pillar">webplatform/salt-pillar</a> on a VM called <em>deployment.webplatform.org</em> (now called <em>salt.webplatform.org</em>) on production. With the work I did with the <a href="https://github.com/webplatform/salt-states">salt-states</a>, I could build a complete mirror of the whole site as <em>webplatformstaging.org</em>. But yet, I needed to use servers exposed to the public.</p>

<p>With my work on <a href="https://github.com/webplatform/ops">webplatform/ops</a>, I could run two or three VMs in VirtualBox and run quick tests prior to run them. I wished I had this when I started.</p>

<p>The <strong>salt-master/</strong> folder in <a href="https://github.com/webplatform/ops">webplatform/ops</a> are the scripts I wrote to achieve #1 but now aren’t limited to where you run them.</p>

<p>The <strong>vagrant-workbench/</strong> folder in <a href="https://github.com/webplatform/ops">webplatform/ops</a> is a VirtualBox and Vagrant script to create a "salt" master from which I could run locally.</p>

<p>The vagrant-minions/ folder is basically one YAML file where I describe nodes I need to bring up and Vagrant does the rest of the job for me.</p>

<p>At the end of a <code>vagrant up elastic0</code> I would see on my local vagrant-workbench VM’s salt-master a salt minion called "elastic0" ready to be managed locally.</p>

<h3>5. Implement SSO proof of concept using Mozilla Firefox Accounts</h3>

<p>Design and implement a prototype to achieve SSO for web apps without using SAML, Kerberos, or *LDAP.</p>

<p>I created a small javascript file that bootstraps the local web application to sync session state with a "source of truth".</p>

<p>It goes like that;</p>

<ol>
<li>Check if a session exists through a hidden iframe to accounts...</li>
<li>If a session exists, check if local web app has same data

<ul>
<li>If not the same data, destroy the local session</li>
<li>If has no session, attempt to start a session

<ul>
<li>If no user exists locally, create one, then start a session</li>
</ul></li>
</ul></li>
</ol>

<p>I had something running in two separate MediaWiki installations and I have recorded a screencast showing it<a href="https://www.youtube.com/watch?v=rutwd1Z_1TE">6</a>.</p>

<p>Basically the JavaScript client <a href="https://github.com/webplatform/www.webplatform.org/blob/master/src/files/assets/js/sso.js">webplatform/www.webplatform.org/....sso.js</a> requires the local web application (<a href="https://github.com/webplatform/mediawiki-fxa-sso/blob/webplatform-sso/includes/WebPlatformAuthHooks.php#L82">around here in the code</a>) to receive requests from it, communicate through its backend to "source of truth"  ("profile.accounts.webplatform.org") and return an HTTP return code (401, 400, 204) to confirm what happened.</p>

<p>I’ve made all this to have our Wiki, Issue tracker, Blog, and Annotation system to prevent users to have different username passwords to sync, but I lacked time to have it all working and the project died. Other priorities came up.</p>

<p>Luckily for me, that work got Mozilla Firefox Accounts team interested to invite me over to spend a week with them and it was great!</p>

<p>I have hopes to eventually publish a PHP module out of what I’ve done so I could prevent this to be wasted.</p>

<h3>6. Provide infrastructure for WebAt25 and work with Ian</h3>

<p>That was great! I enjoyed collaborating with an external provider and make something useful elsewhere at W3C.</p>

<h3>7. Compatibility data on <em>WebPlatform</em></h3>

<p>I had the chance to spend time with Doug and work out all the tiny details to create a schema to store data we could crawl from MDN.</p>

<p>I’ve worked on a system to keep a copy into Memcached of the generated HTML. This helped a lot on page render time.</p>

<p>Now that the site is going into static site generator, this is going to go to waste :(</p>

<h3>6. Convert all of MediaWiki and WordPress content into a static site generator.</h3>

<p>Hopefully with this in place we’ll be able to shut down everything of <em>WebPlatform</em>, except a simple web server serving HTML files.</p>
