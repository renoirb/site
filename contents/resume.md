---
title: Resumé
template: resume.html
---

<section id="summary" itemscope itemtype="http://schema.org/Person">

<span id="availability">Next availability</span>
:    March 2016

Online
:    [<i class="icon-linkedin"></i> LinkedIn](https://linkedin.com/in/renoirb "My LinkedIn profile")
:    [<i class="icon-github"></i> GitHub](https://github.com/renoirb "My code on GitHub")

Languages
:    *Français* <span lang="fr">langue maternelle</span>
:    *English*  fluent

Preferred contact method
:    Write me <em foudelapouitte title="Please type this manually"></em>
:    [<i class="icon-calendar"></i> **schedule** an appointment](https://freebusy.io/renoirb@gmail.com)

Job-hunting phone number
:    <tt>438-239-9341</tt> <small>(temporary number, please use e-mail)</small>

PGP public key
:    [<i class="icon-key"></i> <tt title="783E 74CE 1042 6F9F 2E2C  572A BC06 4BAD 27BF 89C1">BC06 4BAD 27BF 89C1</tt>](/files/renoirb.pub)

## Career summary

Hello! My name is [<span itemprop="givenName" lang="fr">Renoir</span>](https://renoirboulanger.com/about/) and I’m a <span itemprop="jobTitle">web developer</span> from <span lang="fr" typeof="PostalAddress"><span itemprop="addressLocality">Montréal</span>, <span itemprop="addressRegion">Québec</span>, <span itemprop="addressCountry">Canada</span></span>. In the recent past, I have been working at for the [<abbr title="World Wide Web Consortium">W3C</abbr>][w3c-alumni] on the [WebPlatform Docs project](http://www.webplatform.org/) and had a short [*Product-Owner* contract for *Mozilla*][mozillan-renoirb]. I have a broad understanding of the Open Web stack and techniques to deploy and build Web sites that scales.

The ideal workplace for me would be for a company or project where most of the members works from home, heavily uses tools to collaborate *asynchronously* with each others so that we can have consistent focus periods. We can’t plan when we’ll be optimal to work solving problem, can we? I care really much about quality of my work, so I hope my future employer does too.

**Career highlights**

* **Occasional contributor** to **open-source projects** such as MediaWiki and *Mozilla Firefox Accounts*
* Working knowledge of modern "*vanilla*" JavaScript
* **Zend Certified Engineer** PHP 5.3
* Built more than 150 websites between 2002 and 2009
* Maintained two highly visible sites; [WebPlatform.org](http://www.webplatform.org/), and the [World Wide Web’s 25th-anniversary](http://www.webat25.org) site (2014)
* Experience working remotely, **in the open** within a **geographically distributed** team
* Experience with **cloud IaaS**, **Containers**, and maintenance of **continuous deployment** systems
* Familiar with large system issues and how to scale them

**Past employers**

<section id="past-employers">

[![W3C](/assets/logos/w3c.svg)](#w3c-2013)[![Mozilla](/assets/logos/mozilla.svg)](#mozilla-2015)[![Ericsson](/assets/logos/ericsson.svg)](#ericsson-2012)

</section>

----


<!-- end of #summary --></section><section id="work-experience">

## Work experience

<section id="mozilla-2015">

### Product-Owner

Employer
:    [Mozilla Corporation](http://www.mozilla.org/)

Duration
:    Sept 2015 &ndash; Feb 2016 (6 months)

Type
:    Contract

Location
:    *Remote work*, Montreal, Quebec

<details><summary>My role was to provide oversight of the development, report on the status and make sure correct people are involved in decision-making and review of the [Web Browser compatibility feature support data](http://browsercompat.herokuapp.com/). The project is intended to be an independent compatibility data source for the web, but the first client will be the well-known [<abbr title="Mozilla Developer Network">MDN</abbr>](http://developer.mozilla.org/) project.</summary>

During my contract I published a few documents, prepared a [project status slide deck](http://renoirb.com/talks/2015-Mozilla-MDN-Browser-Compatibility-Data-Project-vision/) and [a few prototypes](http://renoirb.com/prototypes/2015/browsercompat/)

#### Responsibilities
* Drive the overall project forward, serving as key stakeholder/subject matter expert, and make key decisions on all aspects of v1
* Oversee and report status on all deliverables of the launch version
* Help identify where decisions and resources are needed to launch and report to the business and engineering manager
* Organize and chair meetings with stakeholders, developers, etc.
* Maintain project’s product-backlog
* Review code (written in Python)
</details>


</section><section id="w3c-2013">


### Developer Operations Engineer

Employer
:    [<abbr title="World Wide Web Consortium">W3C</abbr>](http://www.w3.org/)/<abbr title="Massachusetts Institute of Technology">MIT</abbr>

Duration
:    Aug 2013 &ndash; Aug 2015 (2 years)

Type
:    Contract

Location
:    *Remote work*, Montreal, Quebec

<details><summary>My role was to maintain stability, improve features, strengthen the infrastructure of the site, and act as a technical liaison with Open-source communities on the [WebPlatform Docs project](http://www.webplatform.org). The *WebPlatform Docs project* was funded by members of the *W3C*, sponsors were: Adobe, Apple, DreamHost, Fastly, Facebook, Google, Intel, Mozilla, Microsoft, Nokia, and Opera.

Unfortunately the sponsors retracted from the project and the site is maintained on a volunteer basis by myself and my former manager.</summary>

#### Responsibilities
* Evaluate, configure, and maintain server and services
* Analyze, develop, and maintain software running the site
* Manage technical relationships with hosting and related service providers
* Contribute to relevant Open-Source projects and collaborate with their communities
* Help improve developer relationships with the W3C

#### Projects

* **Convert content and history of MediaWiki into Static site-generator and Git** (2015)

    In order to preserve the contributions made by the community and allow the site to run only from static HTML files, I had to find a way to simplify server setup. To achieve this, I created a conversion system with which I could convert each wiki page into a text file,  preserve history for each save into a *git commit*.

    I could successfully rebuild WebPlatform Docs pages, content and history from MediaWiki that was using more than 25 <abbr title="Virtual Machines">VMs</abbr> into one Web server that serves simple static HTML files. Without losing the ability for the community to continue contributing to the documentation.

    *See the code*, refer to [Selected projects](#content-converter) section below.

*  **Infrastructure deployment code** (2015)

    The site relied on a number of Open-Source projects, written in different languages (PHP, Python, etc.) and managed by their own communities. Each component had a set of adjustments to maintain the "look and feel". Each Web application and configuration management scripts wasn’t originally made to support multiple deployment (e.g. staging, local), but only the live site.

    I successfully reworked the whole configuration management system such that we could clone each Web application code, apply their respective customization and configurations systematically. So we could rebuild the whole system from scratch, from any domain name, at any time.

    *See the code*, refer to [Selected projects](#webplatform-ops) section below.

*  **Self-healing monitoring** (2015)

    WebPlatform Docs server infrastructure had *no monitoring*, only a server health dashboard (*Ganglia*). I therefore set deployment code configuring *Monit* automatically for each service and VMs to ensure they remain up, and restart faulty services if they stopped running.

* **Implement Single Sign-On using OAuth2** (2014)

   The site was using multiple web applications such as WordPress, The BugGenie, MediaWiki, Discourse, and many others. Each section of the site would require to create an account manually. The objective was to set in place a system that takes care of storing *user profile data* and their *session state* using Mozilla Firefox Accounts.

   *See the code*, refer to [Selected projects](#webplatform-sso) section below.

* **Web Browser feature compatibility tables** (2014)

   Participate in making a web crawler to *get a local copy* of compatibility data stored within [Mozilla’s MDN](http://developer.mozilla.org/) content pages and clean it up to generate new compatibility tables within WebPlatform Docs. The project included a generated HTML cache system to prevent heavy server use caused by the feature.
</details>


</section><section>


### Software Developer

Employer
:    [TEKSystems](http://www.teksystems.com/)

Duration
:    Jun 2013 &ndash; Aug 2013 (2 months)

Location
:    Montreal, Quebec

<details><summary>TEKSystems is a software development agency with offices in the USA, Canada and India. TEKSystems has a number of multi-disciplinary teams where they collaborate with the project sponsor ("client") to make the desired outcome following *Agile* methodologies.

I was a programmer in a team of 8, that had <abbr title="Quality Assurance analyst">QA</abbr>, <abbr title="Database Administrator">DBA</abbr>, Business analyst, programmers, and a SCRUM master/Project manager.</summary>

#### Achievements
* Participated in deployment strategy changes
* Improved parts of an <abbr title="Asynchronous JavaScript And XML">AJAX</abbr> communication subsystem that handled SSO features
</details>


</section><section id="ericsson-2012">


### Software Developer

Employer
:    [Ericsson](http://www.ericsson.com/)

Duration
:    Feb 2012 &ndash; Jun 2013 (1 year 4 months)

Type
:    Contract

Location
:    Montreal, Quebec

<details><summary>Architect, build and lead a Web-based provisioning portal. The project goal was to create a server on-demand provisioning portal managing cloud computing cluster hosted in data centers geographically dispersed. Essential requirement was that it had to support more than one cloud provider platform such that the portal could initiate VMs on any data centers, on any cloud provider platforms such as OpenStack and VMWare.</summary>

#### Achievements
* Analysis at a few levels; Interface, functional decomposition, non-functional requirements
* Initial observation starting from a few PHP files
* Design a management abstraction layer proxying request supporting different vendor APIs
* Coach Ericsson employees about the Open Web Platform and current web development methodologies
</details>


</section><section>


### Web Developer

Employer
:    *Evocatio Solutions technologiques Inc.*

Duration
:    Jan 2010 &ndash; Feb 2012 (2 years 2 months)

Type
:    Co-Founder

Location
:    Montreal, Quebec

<details><summary>Co-founded *Evocatio* with two old friends. Our partnership lasted 2 years and at the peak we had 10 employees in our payroll, some of our work won prizes in local industry competitions and other projects got deployed in cities around the globe.

The company worked on projects for: Canadian Museum of History, <abbr lang="fr" title="Union des Artistes">UDA</abbr> (French-Canadian Artist union), Astral Media, Equisoft, Rolls-Royce, and Rogers Media.

Unfortunately I can’t outline some projects due to past non-disclosure agreements.</summary>

#### Responsibilities
* Coach graphic designers about making websites with the Open Web Platform
* Participate in software requirements, R&D documentation, and project bids

#### Achievements
* Participated in a major Web site rewrite for [UDA.ca](http://uniondesartistes.com/) from .NET into PHP with Symfony 1.x
* Created meaningful relationships that led to important contracts
* Created complex e-mail delivery systems to handle bounces at the server level and participated in the creation of a Web-based frontend

#### Projects

* **Mailing list manager** <small>(2012)</small>

    Participated in the development of an e-mail notification system using *symfony 1.2*. The web application allowed our clients to write communication e-mails using a library of HTML e-mail templates that they could reuse.

* **UDA Web site** <small>(2009-2012)</small>

    * Search-engine feature of the member artist database search engine («<span lang="fr">Le Bottin des artistes</span>»), allowing to find on various criteria: hair color, played music instruments, professional qualifications, etc.
    * Document search-engine feature which had to support multiple file formats and Web documents
    * An artist manager can create an artist selection portfolio to share with other producers
    * An artist can control what information can be visible publicly

    The version I worked on isn’t online anymore, but you [can still see a few screenshots here (16 images)][uda-mockup]

* **Gift exchange interactive game** <small>(2010-2011)</small>

    Evocatio’s main business partner, <span lang="fr">RED l’Agence</span>, wanted to make an interactive Christmas Holiday wish card with their clients and partners. The game had been run two consecutive years and received prizes of recognition from the local marketing agency community («<span lang="fr">Grenier aux nouvelles</span>»).

    * *2010*: 40 different gifts, 40 participants

        Each participant could pick somebody else’s gift, with a limit of 9 picks. At a given time, participants learn which gift they were assigned. Whether or not they picked it. See this [article on my blog showcasing the 2010 variant](https://renoirboulanger.com/blog/2010/02/realisation-dune-application-dechange-de-cadeau-avec-red-lagence-le-%C2%ABclub-echangiste%C2%BB-2009/) (in French)

    * *2011*: «*<span lang="fr">Échange pas très équitable</span>*» (An unfair gift exchange).

        One iPad, the desired prize, is hidden in a christmas sock (e.g. blue with white dots), the user gets a hint after each attempt. Each participat had a limit of 9 attempts. The game won the "*<span lang="fr">Grenier d'Or</span>*" competition in the Interactive games category.

* **An "Offline-First" news reader in HTML5 for iPad** <small>(2010)</small>

    Objective was to allow site visitors to read articles offline from the iPad during transit periods. Project stated that it only had to support *Apple iPad*. The source site was running WordPress and therefore already had an <abbr title="Really Simple Syndication">RSS</abbr> feed. The site had been built using JavaScript templating library of the time and was assuming the Web browser supported HTML5’s <tt>localStorage</tt> such that upon loading the page, articles were kept locally and displayed. The project was a success, even though AppCache implementation in Safari at that time wasn’t complete.

    [See it in action](http://dundee.advisor.ca/) (*still online, but unmaintained*)
</details>


</section><section>


### Web Integrator &<br/> Linux System Administrator

Employer
:    [Groupe Informatique TechSolCom](http://www.techsolcom.ca/)

Duration
:    Oct 2006 &ndash; Aug 2009 (2 years 10 months)

Location
:    Montreal, Quebec

<details><summary>My role was to maintain the company corporate image on the web, maintain their Web site, participate in projects run internally as a Web developer. My employer also allowed me to use my Linux system-administration skills to maintain the company internal network and inventory.</summary>

#### Responsibilities
* Participate as frontend developer to assigned projects
* Create frontend pattern libraries (what we called "Web Integration" then) for assigned projects
* Maintain corporate image on the web for the company and products
* Maintain company internal network and web hosting infrastructure

#### Projects

* **TechSolCom web site**

    * 2009 site version rebuilt with good care of the [WCAG](http://www.w3.org/WAI/intro/wcag "Web Content Accessibility Guidelines") recommendations <br/> [Screenshots](https://www.flickr.com/photos/inexisdotnet/4093703003/in/album-72157629405397114/) (4 images)

    * 2007 site version was running with <em lang="fr">Géranium CMS</em> <br/> [Screenshots](https://www.flickr.com/photos/inexisdotnet/4096173192/in/album-72157629405397114/) (5 images)

* **Namminik**, an home-inventory Web application <small>(2008)</small>

    [Namminik](http://namminik.com/) can be used to keep a record of your belongings for your insurance. The initial version had both a website and an Apple iPhone iOS application (2008). As of 2012, the Web application had been deprecated and only the [Android](https://play.google.com/store/apps/details?id=com.namminik) and [iOS](https://itunes.apple.com/au/app/namminik/id314220843?mt=8) applications are still maintained (2016).

    *Namminik* was my first "Agile" project in my career, we were a team of 4, two programmers, a SCRUM Master, and myself as Product/UX Designer and Frontend developer.

    [Screenshots](https://www.flickr.com/photos/inexisdotnet/4094892298/in/album-72157654212253690/) (5 images)

* **Beebox/TSCM**, a Continuous Integration Web application for *IBM WebSphere*, *Apache Glassfish* J2EE runtime engines  <small>(2007-2009)</small>

    *Beebox* was a Continuous Integration system written in Java deployed at the National Bank of Canada, <span lang="fr">Téléfilm Canada</span> and other clients. In 2008, Beebox became freely to download, but unfortunately didn’t get attraction from the public and we can’t find anything online about that product.

    * Web integration using *IBM Rational application* development environment and *IBM WebSphere* portal
    * Participated in the creation of a *Struts* tag library
    * Participated in the user documentation

    [Screenshots][beebox-screenshots] (4 images)

* **Site Finder**, a White-Label branch locator iOS application <small>(2009-2011)</small>

    Participated in the Web-based back-office portal providing data to an outlet geo-location tool for iOS, the project was later was adapted for Desjardins as the "Localisateur Desjardins" (2009-2011).

* **Jacob.ca**, a temporary on-site contract <small>(2009)</small>

    * Built a JavaScript AJAX Outlet locator, reading data from XML files
    * Built XML schema and XSL stylesheets
    * Contact us form, using cross-origin frame communication

* **Téléfilm Canada**, a temporary on-site contract <small>(2008)</small>

    Create an HTML/CSS markup library based on Adobe Photoshop files. At the time, there were very few UI frontend frameworks, I used the most robust of the time, Yahoo!’s YUI2 and adapted the framework’s base CSS to match the mockups.

    [Screenshots][telefilm-screenshots] (3 images).

* **System administration**

    * Managed multiple VMWare ESX and VMware Server servers, and virtual machine instances
    * Built a monitoring service using the SNMP protocol, centralized syslog server, and configured a Nagios monitoring service
    * Managed and tested **SOA integration** patterns with the company's **IBM WebSphere DataPower** development blade
    * Built an SMTP e-mail relay server, using SpamAssassin, and other filtering technologies

#### Tools

    JSF, Struts, Agile, Ant, IBM WebSphere DataPower, Apache Tomcat, JDBC, SNMP, Maven2, WAI WCAG, Balsamiq mockups, XML, XSL, YUI2, Mootools, Debian Linux, RedHat Enterprise Linux, Confluence, Jira, jQuery, MySQL, JSON, WSDL, Subversion, CVS
</details>


</section><section>


### Web developer

Employer
:    [Câble Axion Digitel Inc.](http://www.axion.ca/)

Duration
:    Oct 2005 &ndash; Nov 2006 (1 year 1 month)

Location
:    Magog, Quebec

<details><summary>Câble Axion is a cable service provider. Their network coverage goes from Montreal South Shore, follows the US borders, and go up until the Beauce area.</summary>

#### Responsibilities
* Maintenance of the company website
* Work with the company’s graphic design agency and integrate from their *Adobe Photoshop* mockups
* Maintenance of the internal *Microsoft Access* support dashboard software
* Answer level 2 tech-support phone calls from customers
</details>


</section><section>


### Web developer

Employer
:    *Inexis solution web Inc.*

Duration
:    Feb 2002 &ndash; Nov 2006 (4 years 9 months)

Type
:    Self-employed

Location
:    Sherbrooke, Quebec

<details><summary>*Inexis solution web Inc.*, was a one-man web development service provider form I founded to serve graphic design agencies in the region of the Eastern Townships.

Services typically included creating HTML/CSS based on Adobe Photoshop/Illustrator mockup designers were making, creating e-mail templates, and managing hosting services. The company owned a few rack servers and was reselling its hosting service as a white label to its clients.</summary>

#### Achievements

* **Managed sites for well-known local organizations**
  * *City of Sherbrooke*, «<em lang="fr">Sherbrooke, Ville étudiante</em>» (A city project to invite students to study in Sherbrooke),
  * the regional county municipality of the <em lang="fr">Val Saint-François</em>,
  * <em lang="fr">Mont Bellevue</em> (a ski resort), and
  * <em lang="fr">Hydro-Sherbrooke</em> (local electricity provider)

#### Projects

* <strong lang="fr">Géranium</strong> <small>(2002-2008)</small>

    Inexis was publisher of its own proprietary *Client Relationship Management Solution* (CRM) and *Content Management System* (CMS) called <em lang="fr">Géranium</em>.

    The *CRM* distribution was used internally so that I could manage sales and work with 4 partners in the same time. At its peak, the company served more than 60 Web sites with all related services.

    The *CMS* distribution had been deployed until 2008. It started as a full featured CMS, and became a static site generator in 2006.

* **Adapt a Web application to have better printed reports**, temporary on-site contract <small>(2004)</small>

    I have been hired to participate in a project Web application written in *ColdFusion* that had to support printing their reports from a Web browser. At the time, it had to work reasonably well with Microsoft Internet Explorer 5 on PC.
</details>

</section>


----


<!-- end of #work-experience --></section><section id="technologies">

## Technologies

<table class="table table-condensed">
<caption>A cherry-picked list of technologies, organized by proficiency.</caption>
<tr><td>&nbsp</td><th>Most familiar</th><th>Some experience</th></tr>
<tr>
<th>Programming</th>
<td><ul><li data-xp=5><abbr title="Hyper Text Markup Language">HTML</abbr> <small>(<abbr title="Document Object Model">DOM</abbr>, APIs, etc.)</small></li><li data-xp=5><abbr title="Cascading Style Sheets">CSS</abbr></li><li data-xp=5>LESS/SASS/Compass</li><li data-xp=4>PHP</li><li data-xp=4>JavaScript <small>(ECMAScript 2005, Promise, etc.)</small></li><li data-xp=4>Bash scripting</li></ul></td>
<td><ul><li data-xp=2>Varnish VCL</li><li data-xp=1>Python</li><li data-xp=1>Lua</li></ul></td>
</tr><tr>
<th>Frameworks</th>
<td><ul><li data-xp=4>Symfony 2</li><li data-xp=4>Backbone.js</li><li data-xp=4>Metalsmith</li><li data-xp=4>MediaWiki</li></ul></td>
<td><ul><li data-xp=3>PHPUnit</li><li data-xp=2>Karma</li><li data-xp=2>Mocha/Chai</li></ul></td>
</tr><tr>
<th>Servers</th>
<td><ul><li data-xp=5>Node.js</li><li data-xp=4>NGINX</li><li data-xp=4>MySQL/MariaDB</li><li data-xp=4>Memcached</li></ul></td>
<td><ul><li data-xp=3>ElasticSearch</li><li data-xp=3>Redis</li><li data-xp=3>Logstash</li><li data-xp=2><em>Self-hosted OpenStack cluster</em>: Cinder, Swift, Keystone</li></ul></td>
</tr><tr>
<th>Automation</th>
<td><ul><li data-xp=5>Salt Stack</li><li data-xp=4>Monit</li></ul></td>
<td><ul><li data-xp=2>Puppet</li><li data-xp=1>Consul</li><li data-xp=1>Etcd</li></ul></td>
</tr><tr>
<th>Tools</th>
<td><ul><li data-xp=5>Git</li><li data-xp=4>Grunt/Gulp</li><li data-xp=4>Bower</li><li data-xp=4>Docker</li><li data-xp=4>Vagrant</li><li data-xp=3>GNU Make</li></ul></td>
<td><ul><li data-xp=2>Babel</li><li data-xp=2>Rollup</li><li data-xp=2>Browserify</li></ul></td>
</tr><tr>
<th>Services</th>
<td><ul><li data-xp=5>Fastly</li><li data-xp=4><em>OpenStack type providers</em>: HPCloud, DreamCompute</li></ul></td>
<td><ul><li data-xp=4>AWS</li><li data-xp=3>CircleCI</li><li data-xp=3>Travis</li></ul></td>
</tr></table>


----


<!-- end of #technologies --></section><section id="selected-projects">

## Selected projects

* On [**GitHub**](https://github.com/renoirb?tab=activity)
* On [**Wikimedia foundation**’s Gerrit](https://gerrit.wikimedia.org/r/#/q/owner:%22Renoirb+%253Crenoir%2540w3.org%253E%22,n,z)

<section id="content-converter">

### Convert content and history of MediaWiki<br/> into Static site-generator and Git

Project
:    WebPlatform Docs

Sponsor
:    W3C/MIT, Volunteer

See the code
:    [*New* WebPlatform Docs content repository](https://github.com/webplatform/docs)
:    [Abstract library "content converter"](https://github.com/webplatform/content-converter)
:    [MediaWiki converter](https://github.com/webplatform/mediawiki-conversion)

<details><summary>I wrote an *abstract library "content converter"* and a *MediaWiki converter*  system with which I could convert each wiki page and write contents into a text file. I preserved history for each edit using Git. The conversion takes into account every special URL MediaWiki allowed (i.e. non ASCII fragments) and generates a rewrite map for NGINX. Last conversion step was to convert last version of each page into Markdown.</summary>

#### Requirements

* Make each page into a valid ASCII URL fragment
* Keep any URLs that had invalid URL fragments by keeping 30x redirects
* Preserve edit date, author and content for each pages
* Keep history and possible redirects of deleted pages
* Support edition using GitHub or a local text-editor, in Markdown
* Support compilation into static HTML
</details>

</section>
<section id="webplatform-ops">

### Infrastructure deployment code<br/> with Salt Stack

Project
:    WebPlatform Docs

Sponsor
:    W3C/MIT

See the code
:    [Configuration scripts](https://github.com/webplatform/salt-states/)
:    [Workspace](https://github.com/webplatform/ops/)

<details><summary>[WebPlatform.org](https://www.webplatform.org/) relied on a number of Open-Source projects, written in different languages. Each component had a set of adjustments to maintain the site image.

The objective of this project was to improve the deployment system in order to work with the same code *locally* or *in the cloud* so that I could work on configuration locally and test them in staging prior to deploy changes in production.</summary>

#### Requirements
* Possibility to run on any Open-Stack cluster and/or Vagrant VMs
* Possibility to change passwords and secrets, apply changes on servers and client configuration files
* Possibility to deploy different stacks; Docker containers, PHP, NGINX, Apache, Node.js, Python, etc.
</details>

</section>
<section id="webplatform-sso">

### Implement Single Sign-On using OAuth2

Project
:    WebPlatform Docs

Sponsor
:    W3C/MIT

See the code
:    [GitHub Pull request][fxa-pr]

See in action
:    [YouTube screenast][fxa-wiki-yt]

<details><summary>As previously said, *WebPlatform.org* relied on a number of Open-Source projects, written in different languages. We wanted to simplify authentication, and had to create a way to share session state between different stacks.

In order to allow users to use *one set of credentials* on separate web applications, [I developed a mechanism to implement a Single Sign On][fxa-how] using [Mozilla Firefox Accounts][wpd-fxa-fork]. My work [caught attention of the Accounts team at Mozilla][mozillan-renoirb], but [hasn’t been merged yet][fxa-pr].</summary>

The objective has been achieved, but isn't in use because we migrated WebPlatform into a static site-generator driven publishing and no longer support any backends.

#### Requirements
* Possibility for a configured web application to get user session and data associated to a shared token from an authoritative server
* Possibility for a configured web application to either use or create a user locally and start a session
* Possibility for a configured web application to drop a local session if authoritative source doesn’t find a valid session
* Implement HTTP calls from relier backend to initiate roundtrip check to authoritative server
* Implement HTTP response from relier backend to confirm status of check
</details>

</section>
<section id="roughdraft">

### Improve offline use <br/>on a prototyping tool

Project
:    [RoughDraft.js](https://github.com/renoirb/roughdraft.js)

Sponsor
:    Volunteer

See in action
:    [Mockup of my wedding RSVP Web site](https://sweetieandsweetie.com/styleguide/)
:    [Mockup of my Web site](https://renoirboulanger.com/styleguide/)

<details><summary>RoughDraft allows to create HTML documents without any backend — All in the browser!. It makes it possible to create  simple static HTML files with loops, "*Lorem Ipsum*" and placeholder images without having to copy paste boilerplate code.</summary>

#### Contributions

* **Class name sequence generator** ([PR #9](https://github.com/ndreckshage/roughdraft.js/pull/9 "Pull Request"))

    When creating loops in a case where the pattern has to have predetermined class names. For example, `<ul><li class="foo-alfa" data-draft-repeat="3" data-draft-text="1/w"></li></ul>` would generate a list with three *Lorem Ipsum* words, each list item would be named `foo-alfa`, `foo-bravo`, `foo-charlie`

* **Improve offline use support** ([PR #14](https://github.com/ndreckshage/roughdraft.js/pull/14 "Pull Request"))

    Few additions to speed up load time. Ability to use inline SVG images and instead of using external placeholder image providers.
</details>

</section>


----


<!-- end of #selected-projects --></section><section id="publications">

## Publications

### Academic
* [**ACM** library](http://www.acm.org/), André Santanchè, (2013), in chapters "Markup architecture", "Events", et "Web Storage" in "[Mobile development using web technologies focusing on games](http://dl.acm.org/citation.cfm?doid=2526188.2528541&preflayout=flat)"

### Review
* Reviewed [Apache Solr PHP Integration](https://www.packtpub.com/books/content/apache-solr-php-integration) by *Pakt publishing*

### Talks
* [Packaging for easier redeployment](http://renoirb.com/talks/Achieve-consistent-deployments-leveraging-packaging/) (2015), DevOps Montréal, Montreal’s PHP Québec meetup
* [Comment évaluer le niveau de qualité d’un site web selon les techniques d’intégration web d’actualité](https://speakerdeck.com/renoirb/comment-evaluer-la-qualite-dun-site-web-selon-les-techniques-dintegration-web-dactualite), presented during 2013 WebIn, and also at 2013 Web à Québec (WAQ)
* [How to manage a big scale HTML/CSS project](http://www.slideshare.net/renoirb/how-to-manage-a-big-scale-htmlcss-project), given at Make Web Not War 2011

### Technical blog posts
* [Add OpenStack instance meta-data into SaltStack grains store](https://renoirboulanger.com/blog/2015/05/add-openstack-instance-meta-data-info-salt-grains/)
* [Run a NodeJS process through forever from within a Docker container](https://renoirboulanger.com/blog/2015/05/run-nodejs-process-forever-within-docker-container/)
* [Make Discourse “long polling” work behind Fastly](https://renoirboulanger.com/blog/2015/05/make-discourse-long-polling-work-behind-fastly/)
* [Create a MariaDB cluster with replication over SSL with Salt Stack](https://renoirboulanger.com/blog/2015/01/create-mariadb-cluster-replication-ssl-salt-stack/)
</details>

----


<!-- end of #publications --></section><section id="miscellany">

## Miscellany

### Certifications

<img style="float:right" src="https://renoirboulanger.com/wp-content/themes/renoirb/assets/img/zce_logo.jpg" alt="Zend Certified Engineer PHP 5.3" lang="en" width="80" />

**2013**
:   *Zend Certified Engineer PHP 5.3* ([certificate][zce-link])

**2011**
:    *Security clearance* checked by [Public Works and Government Services Canada](http://www.tpsgc-pwgsc.gc.ca/comm/index-eng.html), required for all federal government providers

**2008**
:    *Web Accessibility* (WCAG 1) at the *Nazareth & Louis Braille* institute (University of Montreal)

**2007**
:    IBM WebSphere DataPower SOA Appliance


### Volunteer

**2013..**
:    W3C’s WebPlatform Docs project contributor

**2011 &ndash; 2013**
:    Member of the board of directors W3Québec

**2010 &ndash; 2012**
:    Weekly local meet-up organizer

**2010**
:    Member of the organization of a Code-Fest during [Make Web Not War](http://www.webnotwar.ca/), an event organized by *Microsoft*

**2008 &ndash; 2010**
:    Unit leader, Scouts of Canada


<!-- end of #miscellany --></section>

  [w3c-alumni]: https://www.w3.org/People/Alumni#Boulanger "Link to W3C Team member Alumni"
  [renoirb-webplatform-devops]: https://blog.webplatform.org/2013/08/hi-my-name-s-renoir-ill-be-your-devops-for-the-web-platform/
  [beebox-screenshots]: https://www.flickr.com/photos/inexisdotnet/4094892662/in/album-72157654212253690/
  [telefilm-screenshots]: https://www.flickr.com/photos/inexisdotnet/4095241313/in/album-72157654212253690/
  [mozillan-renoirb]: https://mozillians.org/en-US/u/renoirb/ "Link to my Mozillan profile"
  [fxa-how]: https://docs.webplatform.org/wiki/WPD:Projects/SSO/How_we_implemented_it
  [fxa-wiki-yt]: https://www.youtube.com/watch?v=rutwd1Z_1TE
  [wpd-fxa-fork]: https://docs.webplatform.org/wiki/WPD:Projects/SSO/Adapt_Firefox_Accounts_for_WebPlatform
  [fxa-pr]: https://github.com/mozilla/fxa-content-server/pull/2637
  [uda-mockup]: https://www.flickr.com/photos/inexisdotnet/6911441858/
  [zce-link]: https://www.zend.com/en/yellow-pages/ZEND011184
