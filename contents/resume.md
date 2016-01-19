---
title: Resumé
template: resume.html
---


<em id="availability">Next availability</em>
:    March 2016

Location
:    <span lang="fr">Montréal, Québec</span>, Canada

Languages
:    *Français* <span lang="fr">langue maternelle</span>
:    *English*  very fluent

Preferred contact method
:    Send an e-mail <em data-email>using *hello* AT my *full name* DOT *com*</em>
:    [**book** an appointment with me](https://freebusy.io/renoirb@gmail.com)
:    [**join-me** in this *appear.in* Video-conference room](https://appear.in/renoirb)

GPG public key
:    [`BC06 4BAD 27BF 89C1`](https://renoirboulanger.com/.well-known/keybase.txt)

Other version of my CV
:    [version française](http://renoirb.com/cv "Resume also available in french")


<section id="summary">

## Summary

Hello! My name is [<span itemprop="givenName" lang="fr">Renoir</span> <span itemprop="familyName" lang="fr">Boulanger</span>](https://renoirboulanger.com/about/) and I’m a <span itemprop="jobTitle">web developer</span> based in <span lang="fr" typeof="PostalAddress"><span itemprop="addressLocality">Montréal</span>, <span itemprop="addressRegion">Québec</span>, <span itemprop="addressCountry">Canada</span></span>.

I have been building Web sites professionally for over  <data value="14">fourteen</data>  years for several design agencies and various types of organizations.

In 2013, [I got a position with the <abbr title="World Wide Web Consortium">W3C</abbr>][w3c-alumni] as a [**Developer Operations** *engineer*][renoirb-webplatform-devops]. This allowed me to shift focus to my favourite hobby; managing Linux servers. I’ve learned a lot about optimization techniques for Web sites under heavy traffic.

You’ll quickly notice with me that I’m fascinated about anything related to Open Web technologies, and how adamant I can be about finding ways to make Web sites run fast, and to deploy them consistently!

  [w3c-alumni]: https://www.w3.org/People/Alumni#Boulanger "Link to W3C Team member Alumni"
  [renoirb-webplatform-devops]: http://bit.ly/renoirb-webplatform-devops "Link to WebPlatform blog post introducing myself"

**Also...**

* Experience working remotely, **in the open** within a **geographically distributed** team
* **Occasional contributor** to **open-source projects** such as MediaWiki and *Mozilla Firefox Accounts*
* Working knowledge of modern "*vanilla*" JavaScript
* **Zend Certified Engineer** PHP 5.3
* Made more than 150 websites between 2002 and 2009
* Maintained two highly visible sites; [WebPlatform.org](http://www.webplatform.org/), and the [World Wide Web’s 25th-anniversary](http://www.webat25.org) site (2014)
* Able to direct my work and proactive in asking for input
* Experience with **cloud IaaS**, **Containers**, and maintenance of **continuous deployment** systems
* Familiar with large-scale system issues and how to scale them


----

</section><section id="experience">

## Professional experience



### Product-Owner/Tech Lead

Duration
:    sept. 2015..feb. 2016 (6 months)

Employer
:    [Mozilla Corporation](http://www.mozilla.org/)

Type
:    *Remote work*, Contract

Location
:    Montreal, Quebec

<details>
<summary>My role was to provide oversight of the development, report on the status and make sure correct people are involved in decision-making and review of the [Web Browser compatibility feature support data](http://browsercompat.herokuapp.com/). The project is intended to be an independent compatibility data source for the web, but the first client will be the well-known [Mozilla Developer Network](http://developer.mozilla.org/) ("MDN") project.
</summary>

#### Responsibilities

* Evaluate project status, make reports
* Organize and chair meetings with stakeholders, developers, etc.
* Maintain project’s product-backlog
* Review code (written in Python)
</details>



### Developer Operations Engineer

Duration
:    aug. 2013..aug. 2015 (2 years)

Employer
:    [<abbr title="World Wide Web Consortium">W3C</abbr>](http://www.w3.org/)/<abbr title="Massachusetts Institute of Technology">MIT</abbr>

Type
:    *Remote work*, Contract

Location
:    Montreal, Quebec

<details>
<summary>My role was to maintain stability, improve features, strengthen the infrastructure of the site, and act as a technical liaison with Open-source communities on the [WebPlatform Docs project](http://www.webplatform.org). The *WebPlatform Docs project* was funded by members of the *W3C*, sponsors were: Adobe, Apple, DreamHost, Fastly, Facebook, Google, Intel, Mozilla, Microsoft, Nokia, and Opera.

Unfortunately the sponsors retracted from the project and the site is maintained on volunteer basis by myself and my former manager.
</summary>

#### Responsibilities

* Evaluate, configure, and maintain server and services
* Analyze, develop, and maintain software running the site
* Manage technical relationships with hosting and related service providers
* Contribute to relevant Open-Source projects and collaborate with their communities
* Help improve developer relationships with the W3C

#### Achievements

* **Convert content and history of MediaWiki into Static site-generator and Git** (2015)

    In order to preserve the contributions made by the community and allow the site to run only from static HTML files, I had to find a way to simplify server setup. To achieve this, I created a conversion system with which I could convert each wiki page into a text file,  preserve history for each save into a Git commit.

   **Code available**, refer to *Work publicly visible* section below.

*  **Infrastructure deployment code** (2015)

   The site relied on a number of Open-Source projects, written in different languages and managed by their own communities. Each component had a set of adjustments to maintain the site "skin". Configuration scripts and code wasn’t originally made to support multiple deployment (e.g. staging, local), but only the live site. I therefore reworked the whole site such that we could clone, apply customizations and configuration on top of each component. So we could rebuild the whole system from scratch, from any domain name, at any time.

   **Code available**, refer to *Work publicly visible* section below.

*  **Self-healing monitoring** (2015)

    The site had *no monitoring*, only a server health dashboard using *Ganglia*. I therefore set deployment code to configigure automatically *Monit* for each service to ensure they remain up, and restart faulty services if they stopped running.

* **Single Sign-On and Firefox Accounts** (2014)

   WebPlatform was using multiple web applications such as WordPress, The BugGenie, MediaWiki, Discourse, and many others. Each section of the site would require to create an account manually. The objective was to set in place a system that takes care of storing user profile and their session state using Mozilla Firefox Accounts.

   **Code available**, refer to *Work publicly visible* section below.

* **Web Browser feature compatibility tables** (2014)

   Participate in making a web crawler to gather compatibility data from [Mozilla’s MDN](http://developer.mozilla.org/) and clean it up to generate new compatibility tables within WebPlatform Docs. The project included a generated HTML cache system to prevent heavy server use caused by the feature.
</details>



### Web developer

Employer
:    [TEKSystems](http://www.teksystems.com/)

Duration
:    jun. 2013..aug. 2013 (2 months)

Type
:    Permanent

Location
:    Montreal, Quebec

<details>
<summary>TEKSystems is a software development agency with offices in the USA, Canada and India. TEKSystems has a number of multi-disciplinary teams where they collaborate with the project sponsor ("client") to make the desired outcome following *Agile* methodologies.

I was a programmer in a team of 8, that had QA, DBA, Business analyst, programmers, and a SCRUM master/Project manager. My role was to program in PHP and JavaScript to add features to their web platform.
</summary>

#### Achievements

* Participated in deployment strategy changes
* Improved parts of an AJAX communication subsystem that handled SSO features
</details>

### Web developer

Employer
:    [Ericsson](http://www.ericsson.com/)

Duration
:    feb. 2012..jun. 2013 (16 months)

Type
:    Contractor

Location
:    Montreal, Quebec

<details>
<summary>Participated in a cloud management web application that could control VMs in multiple geographical data centers, and had to support two cloud provider platform APIs (OpenStack, VMWare).
</summary>

#### Responsibilities

* Design and participate in implementing a Web based provisioning portal
* Design a management abstraction layer proxying request to different vendor platform APIs
* Coach Ericsson employees about the Open Web Platform and current web development methodologies
</details>

### Web developer

Employer
:    *Evocatio Solutions technologiques Inc.* (co-founder)

Duration
:    jan. 2010..feb. 2012 (2 years, 1 month)

Type
:    Permanent

Location
:    Montreal, Quebec

<details>
<summary>Co-founded *Evocatio* with two old friends. Our partnership lasted 2 years and at the peak we had 10 employees in our payroll. My responsibility was to find new projects and lead work related to frontend development.

Unfortunately I can’t outline some client projects due to past non-disclosure agreements.
</summary>

#### Achievements

* Participated in rewriting UDA.ca from .NET into PHP with Symfony 1.x
* Created meaningful relationships that led to important contracts

#### Projects

##### Advisor.ca iPad version, <small>*Rogers Communication*, on-site contract (2010)</small>

Built an "offline first" RSS feed reader. Project was back in 2010, when the Apple iPad just got out and the W3C AppCache manifest was not fully implemented on iOS Safari. The web application was using LocalStorage to store a copy of the articles served through an RSS feed. Views was managed with EJS and could work reasonably well offline with Safari support at that time.

[See it in action](http://dundee.advisor.ca/) (*still online, but unmaintained*)


##### Gift exchange, <small>*RED L’Agence*, partnership promotional interactive game (2010, 2011)</small>

Online christmas gift exchange game that we used during two consecutive years, changing the theme and the rules.

* *2010*: 40 different gifts, 40 participants

   Each participant could pick somebody else’s gift, with a limit of 9 picks. At a given time, participants learns which gift they were assigned. Whether or not they picked it. See this [article on my blog showcasing the 2010 variant](https://renoirboulanger.com/blog/2010/02/realisation-dune-application-dechange-de-cadeau-avec-red-lagence-le-%C2%ABclub-echangiste%C2%BB-2009/) (in French)

* *2011*: «*<span lang="fr">Échange pas très équitable</span>*» (An unfair gift exchange).

   One iPad as the desired gift, hidden in a specific christmas sock (e.g. blue with white dots), four hints, 9 attempts. Winner of "*<span lang="fr">Grenier d'Or</span>*" competition in the Interactive games category.

##### Mailing list manager frontend, <small>*RED L’Agence*, partnership project (2012)</small>

Participated in the development of an e-mail notification system using *symfony 1.2*. The web application allowed *UDA* marketing team to write communication e-mails using a library of HTML e-mail templates that they could reuse.

* Created a log manager to ensure each recipient received the message
* Created a unsubscribe module
* Created the HTML/CSS frontend

##### UDA Web site, <small>*RED L’Agence*, partnership project (2009-2011)</small>

There were two phases. In 2009, and in 2011. The first phase was to rebuild the site, and implement current features from the former version made in .NET C#, and add new features. All of the above was done within a very short time frame.

During the time I was part of the team, we worked on the following:

* Rebuild the member artist database search engine, allowing to find on various criteria: hair color, played music instruments, professional qualifications, etc.

* Public search engine indexing different types of documents: PDF, Word documents, parsed collective agreements, content from the CMS, etc.

* The artist managers can create artist selections and send them to producers

* The artist themselves manages can control what information the public, and other types of users can see from their profile

The version I worked on isn’t online anymore, but you [can still see a few screenshots here (16 images)][uda-mockup]

  [uda-mockup]: https://www.flickr.com/photos/inexisdotnet/6911441858/
</details>


### Web developer

Employer
:    [Groupe Informatique TechSolCom](http://www.techsolcom.ca/)

Duration
:    oct. 2006..aug. 2009 (2 years, 10 months)

Type
:    Permanent

Location
:    Montreal, Quebec

<details>
<summary>My role was to maintain the company corporate image on the web, maintain their Web site, participate in projects run internally. The management also allowed me to use my Linux system-administration skills to maintain the company internal network and inventory.
</summary>

#### Responsibilities

* Participate as frontend developer to assigned projects
* Create frontend pattern libraries (what we called "Web Integration") for assigned projects
* Maintain corporate image on the web for the company and products
* Maintain company internal network and web hosting infrastructure


#### Projects

##### TechSolCom web site

* 2007 site version was <em lang="fr">Géranium CMS</em>
* 2009 site version rebuilt with good care of the [WCAG](http://www.w3.org/WAI/intro/wcag "Web Content Accessibility Guidelines") recommendations

##### Namminik

[Namminik](http://namminik.com/) is a home-inventory application we can use to catalog our belongings. The initial version had both a website and an iPhone application (2008). As of 2012, the Web application had been deprecated and only the [Android](https://play.google.com/store/apps/details?id=com.namminik) and [iOS](https://itunes.apple.com/au/app/namminik/id314220843?mt=8) applications are still maintained (2016).

*Namminik* was my first "Agile" project in my career, we were a team of 4, two programmers, a SCRUM Master, and myself as Product/UX Designer and Frontend developer.

[Screenshots](https://www.flickr.com/photos/inexisdotnet/4094892298/in/album-72157654212253690/) (5 images)


##### Beebox

Beebox was a Continuous Integration system written in Java. It was freely available as a J2EE binary to deploy. The product was used by TechSolCom's clients. Unfortunately we can’t see anything about it online, but [you can see some screenshots][beebox-screenshots] (4 screenshots).

* Web integration using *IBM Rational application* development environment and *IBM WebSphere* portal
* Participated in the creation of a *Struts* tag library
* Participated in the user documentation
* Built the Web site (offline)

  [beebox-screenshots]: https://www.flickr.com/photos/inexisdotnet/4094892662/in/album-72157654212253690/

[Screenshots][beebox-screenshots]


##### Site Finder

Participated in the web based back-office portal providing data to a outlet geo-location tool for iOS, the project was later was adapted for Desjardins as the "Localisateur Desjardins" (2009-2011).


##### Jacob.ca <small>(contract)</small>

* Built a JavaScript AJAX Outlet locator, reading data from XML files
* Built XML schema and XSL stylesheets
* Contact us form, using cross-origin frame communication


##### Téléfilm Canada <small>(contract)</small>

Integrated two web application mockups, creating a theme for the YUI2 markup library. Some [screenshots are available here][telefilm-screenshots] (3 images).

  [telefilm-screenshots]: https://www.flickr.com/photos/inexisdotnet/4095241313/in/album-72157654212253690/


##### System administration

* Managed multiple VMWare ESX and VMware Server servers, and virtual machine instances
* Built a monitoring service using the SNMP protocol, centralized syslog server, and configured a Nagios monitoring service
* Managed and tested **SOA integration** patterns with the company's **IBM WebSphere DataPower** development blade
* Built an SMTP e-mail relay server, using SpamAssassin, and other filtering technologies


#### Tools

    JSF, Struts, Agile, Ant, IBM WebSphere DataPower, Apache Tomcat, JDBC, SNMP, Maven2, WAI WCAG, Balsamiq mockups, XML, XSL, YUI2, Mootools, Debian Linux, RedHat Enterprise Linux, Confluence, Jira, jQuery, MySQL, JSON, WSDL, Subversion, CVS

</details>


### Web developer

Employer
:    [Câble Axion Digitel Inc.](http://www.axion.ca/)

Duration
:    oct. 2005..nov. 2006 (1 year 1 month)

Type
:    Permanent

Location
:    Magog, Quebec

<details>
<summary>Câble Axion is a cable service provider. Their network coverage goes from Montreal South shore, follows the US borders, and go up until the Beauce area.
</summary>

#### Responsibilities

* Maintenance of the company website
* Work with the company’s graphic design agency and integrate from their *Adobe Photoshop* mockups
* Maintenance of the internal *Microsoft Access* support dashboard software
* Answer level 2 tech-support phone calls from customers
</details>



### Web developer

Employer
:    *Inexis solution web Inc.*

Duration
:    feb. 2002..nov. 2006 (4 years, 9 months)

Type
:    Self employed

Location
:    Sherbrooke, Quebec

<details>
<summary>Inexis solution web Inc., was a one-man firm web development service provider to Eastern Townships graphic design agencies.

Services typically included to creating HTML/CSS based on Adobe Photoshop/Illustrator mockups designers were making, creating e-mail templates, and managing hosting services. The company owned a few rack servers and was reselling its hosting service as white label to its clients.
</summary>

#### Achievements


##### Managed sites for well-known local organizations

* *City of Sherbrooke*, «<em lang="fr">Sherbrooke, Ville étudiante</em>» (A city project to invite students to study in Sherbrooke),
* the regional county municipality of the <em lang="fr">Val Saint-François</em>,
* <em lang="fr">Mont Bellevue</em> (a ski resort), and
* <em lang="fr">Hydro-Sherbrooke</em> (local electricity provider)


##### <em lang="fr">Géranium</em>

Inexis was publisher of its own proprietary *Client Relationship Management Solution* (CRM) and *Content Management System* (CMS) called <em lang="fr">Géranium</em>.

The *CRM* distribution was used internally so that I could manage sales and work with 4 partners in the same time. At its peak, the company served more than 60 Web sites with all related services.

The *CMS* distribution had been deployed until 2008. It started as a full featured CMS, and became a static site generator in 2006.

</details>


----


</section><section id="skills">


## Technologies

<table class="table">
<caption>An opinionated and noncomprehensive list of technologies I worked with.</caption>
<tr><td>&nbsp</td><th>Most familiar</th><th>Some experience</th></tr>
<tr>
<th>Programming</th>
<td><ul><li data-xp=5>HTML (DOM, APIs)</li><li data-xp=5>CSS</li><li data-xp=5>LESS</li><li data-xp=5>SASS/Compass</li><li data-xp=4>JavaScript (ECMAScript 2005, Promise, etc.)</li><li data-xp=4>PHP</li><li data-xp=3>MySQL</li><li data-xp=4>Bash scripting</li></ul></td>
<td><ul><li data-xp=2>Varnish VCL</li><li data-xp=1>Python</li><li data-xp=1>Lua</li></ul></td>
</tr><tr>
<th>Frameworks</th>
<td><ul><li data-xp=4>Symfony 2</li><li data-xp=3>symfony 1</li><li data-xp=4>Backbone.js</li><li data-xp=4>Metalsmith</li><li data-xp=4>MediaWiki</li><li data-xp=4>Underscore.js/Lodash</li></ul></td>
<td><ul><li data-xp=3>PHPUnit</li><li data-xp=2>Karma</li><li data-xp=2>Mocha/Chai</li></ul></td>
</tr><tr>
<th>Servers</th>
<td><ul><li data-xp=4>NGINX</li><li data-xp=4>MySQL/MariaDB</li><li data-xp=4>Memcached</li><li data-xp=3>Postfix</li><li data-xp=4>Node.js</li></ul></td>
<td><ul><li data-xp=3>ElasticSearch</li><li data-xp=3>Redis</li><li data-xp=3>Logstash</li><li data-xp=3>Ganglia</li><li data-xp=2><em>Self-hosted OpenStack cluster</em>: Cinder, Swift, Keystone</li></ul></td>
</tr><tr>
<th>Automation</th>
<td><ul><li data-xp=5>Salt Stack</li><li data-xp=4>Monit</li></ul></td>
<td><ul><li data-xp=2>Puppet</li><li data-xp=1>ServerSpec</li><li data-xp=1>Consul</li><li data-xp=1>Etcd</li></ul></td>
</tr><tr>
<th>Tools</th>
<td><ul><li data-xp=5>Git</li><li data-xp=4>Grunt</li><li data-xp=4>Gulp</li><li data-xp=4>Bower</li><li data-xp=3>GNU Make</li><li data-xp=3>GPG</li><li data-xp=4>Docker</li><li data-xp=4>Vagrant</li></ul></td>
<td><ul><li data-xp=2>Babel</li><li data-xp=2>Rollup</li><li data-xp=2>Browserify</li></ul></td>
</tr><tr>
<th>Services</th>
<td><ul><li data-xp=5>Fastly</li><li data-xp=4><em>OpenStack type providers</em>: HPCloud, DreamCompute</li></ul></td>
<td><ul><li data-xp=3>CircleCI</li><li data-xp=3>Travis</li><li data-xp=3>AWS</li></ul></td>
</tr></table>


----


</section><section id="work-samples">


## Work publicly visible

* On [**GitHub**](https://github.com/renoirb?tab=activity)
* On [**Wikimedia foundation**’s Gerrit](https://gerrit.wikimedia.org/r/#/q/owner:%22Renoirb+%253Crenoir%2540w3.org%253E%22,n,z)

### Convert content and history of MediaWiki into Static site-generator and Git

<details>
<summary>Work done while working for the W3C. I wrote an *abstract library "content converter"* and a *MediaWiki converter*  system with which I could convert each wiki page and write contents into a text file. I preserved history for each edit using Git. The conversion takes into account every special URLs MediaWiki allowed (i.e. non ASCII fragments) and generates a rewrite map for NGINX. Last conversion step was to convert last version of each page into Markdown.
</summary>

See the code
:    [*New* WebPlatform Docs content repository](https://github.com/webplatform/docs)
:    [Abstract library "content converter"](https://github.com/webplatform/content-converter)
:    [MediaWiki converter](https://github.com/webplatform/mediawiki-conversion)

#### Requirements

* Make each page into a valid ASCII URL fragment
* Keep any URLs that had invalid URL fragments by keeping 30x redirects
* Preserve edit date, author and content for each pages
* Keep history and possible redirects of deleted pages
* Support edition using GitHub or a local text-editor, in Markdown
* Support compilation into static HTML
</details>


### Infrastructure deployment code

<details>
<summary>Work done while working for the W3C. WebPlatform.org relied on a number of Open-Source projects, written in different languages. Each component had a set of adjustments to maintain the site image.

The objective of this project was to improve [WebPlatform.org](https://www.webplatform.org/) deployment system in order to work with the same code *locally* or *in the cloud* so that I could work on configuration locally and test them in staging prior to deploy changes in production.
</summary>

See the code
:    [Configuration scripts](https://github.com/webplatform/salt-states/)
:    [Workspace](https://github.com/webplatform/ops/)

#### Requirements

* Possibility to run on any Open-Stack cluster and/or Vagrant VMs
* Possibility to change passwords and secrets, apply changes on servers and client configuration files
* Possibility to deploy different stacks; Docker containers, PHP, NGINX, Apache, Node.js, Python, etc.
</details>

### Single Sign-On and Firefox Accounts

<details>
<summary>Work done while working for the W3C. As previously said, WebPlatform.org relied on a number of Open-Source projects, written in different languages. We wanted to simplify authentication, and had to create a way to share session state between different stacks.

In order to allow users to use *one set of credentials* on separate web applications, [I developed a mechanism to implement a Single Sign On][fxa-how] using [Mozilla Firefox Accounts][wpd-fxa-fork]. My work [caught attention of the Accounts team at Mozilla][mozillan-renoirb], but [hasn’t been merged yet][fxa-pr].
</summary>

The objective has been achieved, but isn't in use because we migrated WebPlatform into a static site-generator driven publishing and no longer support any backends.

See in action
:    [YouTube screenast][fxa-wiki-yt]

See the code
:    [GitHub Pull request][fxa-pr]


#### Requirements

* Possibility for a configured web application to get user session and data associated to a shared token from an authoritative server
* Possibility for a configured web application to either use or create a user locally and start a session
* Possibility for a configured web application to drop a local session if authoritative source doesn’t find a valid session
* Implement HTTP calls from relier backend to initiate roundtrip check to authoritative server
* Implement HTTP response from relier backend to confirm status of check
</details>

  [mozillan-renoirb]: https://mozillians.org/en-US/u/renoirb/ "Link to my Mozillan profile"
  [fxa-how]: https://docs.webplatform.org/wiki/WPD:Projects/SSO/How_we_implemented_it
  [fxa-wiki-yt]: https://www.youtube.com/watch?v=rutwd1Z_1TE
  [wpd-fxa-fork]: https://docs.webplatform.org/wiki/WPD:Projects/SSO/Adapt_Firefox_Accounts_for_WebPlatform
  [fxa-pr]: https://github.com/mozilla/fxa-content-server/pull/2637

### RoughDraft.js

<details>
<summary>RoughDraft allows to create HTML documents without any backend — All in the browser!. It makes it possible to create  simple static HTML files with loops, Lorem Ipsum and placeholder images without having to copy paste boilerplate code.
</summary>

See in action
:    [my wedding RSVP web site](https://sweetieandsweetie.com/styleguide/)
:    [my personal web site](https://renoirboulanger.com/styleguide/)


#### Contributions

**Class name sequence generator** ([PR #9](https://github.com/ndreckshage/roughdraft.js/pull/9 "Pull Request"))
:    When creating loops in a case where the pattern has to have predetermined class names. For example, `<ul><li class="foo-alfa" data-draft-repeat="3" data-draft-text="1/w"></li></ul>` would generate a list with three *Lorem Ipsum* words, each list item would be named `foo-alfa`, `foo-bravo`, `foo-charlie`

**Improve offline use support** ([PR #14](https://github.com/ndreckshage/roughdraft.js/pull/14 "Pull Request"))
:    Few additions to speed up load time. Ability to use inline SVG images and instead of using external placeholder image providers.

</details>

### Technical blog posts

* [Add OpenStack instance meta-data into SaltStack grains store](https://renoirboulanger.com/blog/2015/05/add-openstack-instance-meta-data-info-salt-grains/)
* [Run a NodeJS process through forever from within a Docker container](https://renoirboulanger.com/blog/2015/05/run-nodejs-process-forever-within-docker-container/)
* [Make Discourse “long polling” work behind Fastly](https://renoirboulanger.com/blog/2015/05/make-discourse-long-polling-work-behind-fastly/)
* [Create a MariaDB cluster with replication over SSL with Salt Stack](https://renoirboulanger.com/blog/2015/01/create-mariadb-cluster-replication-ssl-salt-stack/)

----

</section><section id="misc">



## Misc.

### Certifications

<img style="float:right" src="https://renoirboulanger.com/wp-content/themes/renoirb/assets/img/zce_logo.jpg" alt="Zend Certified Engineer PHP 5.3" lang="en" width="80" />

**2013**
:   *Zend Certified Engineer PHP 5.3* ([Certification link](https://www.zend.com/en/yellow-pages/ZEND011184))

**2011**
:    *Security clearance* checked by [PWGSC](http://www.tpsgc-pwgsc.gc.ca/comm/index-eng.html "Public Works and Government Services Canada"), required for all federal government providers

**2008**
:    *Accessibilité du web* (WCAG 1) at the *Nazareth & Louis Braille* institute (University of Montreal)

**2007**
:    IBM WebSphere DataPower SOA Appliance


### Involvement

**2013..**
:    W3C’s WebPlatform Docs project contributor

**2011..2013**
:    Member of the board of directors W3Québec

**2010..2012**
:    Weekly local meet-up organizer

**2010**
:    Member of the organization of a Code-Fest during Make Web Not War, organized by Microsoft

**2008..2010**
:    Unit leader, Scouts of Canada


### Publications

* \[Talk\] [Packaging for easier redeployment](http://renoirb.com/talks/Achieve-consistent-deployments-leveraging-packaging/) (2015), DevOps Montréal, Montreal’s PHP Québec meetup
* [**ACM** library](http://www.acm.org/), André Santanchè, (2013), in chapters "Markup architecture", "Events", et "Web Storage" in "[Mobile development using web technologies focusing on games](http://dl.acm.org/citation.cfm?doid=2526188.2528541&preflayout=flat)"
* \[Talk\] [Comment évaluer le niveau de qualité d’un site web selon les techniques d’intégration web d’actualité](https://speakerdeck.com/renoirb/comment-evaluer-la-qualite-dun-site-web-selon-les-techniques-dintegration-web-dactualite), presented during 2013 WebIn, and also at 2013 Web à Québec (WAQ)
* \[Talk\] [How to manage a big scale HTML/CSS project](http://www.slideshare.net/renoirb/how-to-manage-a-big-scale-htmlcss-project), given at Make Web Not War 2011
* [devLAB: Montreal’s latest developer meet-up](http://www.webnotwar.ca/devlab-montreals-latest-developer-meetup/) on Web Not War blog
* Co-written an article about Open source software and the impacts while starting out a business (in french) [Logiciels libres en affaire](http://www.rezopointzero.com/2010/11/24/rien-quune-question-de-gros-bon-sens/)

</section>

<script>
function querySelectorApply(selectorString, closure) {
  Array.prototype.slice.call(document.querySelectorAll(String(selectorString))).forEach(closure);
}
function openAllDetailsElements() {
  querySelectorApply('details', function expandHTMLDetailsElement (HTMLDetailsElement){
    HTMLDetailsElement.setAttribute('open','');
  });
}
window.onload = function resumeOnloadHandler() {
  /*!!window.HTMLDetailsElement*/
  /*!!HTMLDetailsElement && document.querySelectorAll('details')[0].constructor.prototype.constructor === window.HTMLDetailsElement*/
  /*openAllDetails()*/
}</script>
<style>
[data-xp="3"]:after { content: '\00a0\00a0\00a0\00a0\02605'; }
[data-xp="4"]:after { content: '\00a0\00a0\00a0\02605\02605'; }
[data-xp="5"]:after { content: '\00a0\00a0\02605\02605\02605'; }
a[href*="renoirboulanger"]:after { display:none; }
</style>
