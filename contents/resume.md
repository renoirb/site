---
title: Resumé
template: resume.html
---

* **Next availability** around Feb. 2016
* **Home** Montréal, Québec, Canada
* [Curriculum vitæe aussi disponible en français](http://renoirb.com/cv "Resume also available in french")
* Native french speaker, fluent in English
* To reach me, please use *hello* AT my *full name* DOT *com*
* You can also [use this calendar tool](https://calendly.com/renoirb) to have a chat with me
* [`BC06 4BAD 27BF 89C1`](https://renoirboulanger.com/.well-known/keybase.txt)


<section id="summary">


## Summary

Hello! My name is Renoir Boulanger and I have been the lead DevOps on [WebPlatform.org](https://www.webplatform.org/) for the past two years.  My experience ranges from frontend, backend, to server deployment and automation for over thirteen years.

On my spare time I enjoy reading about systems engineering and also to contribute to open-source projects.

Prior to shift my focus on operations and performance, I’ve worked with several design agencies in the province of Québec making their PSDs look exactly the same in every browsers.

* **Currently under contract for the W3C**, the international web standards organization
* **Contributor** to a number of **open-source** projects including *Mozilla Firefox Accounts*
* Maintained notably WebPlatform.org, the Web’s 25th anniversary site webat25.org (2014), the French Canadian artist union [«Union des Artistes»](https://uda.ca/) (2009), and the [City of Sherbrooke](http://www.ville.sherbrooke.qc.ca/) (2005)
* Built more than 150 web sites between 2002 and 2009
* **Zend Certified Engineer** PHP 5.3
* Experience with **cloud IaaS**, **Containers**, and maintenance of **continuous deployment** systems
* Experience working in the open within a geographically distributed team
* Able to direct my own work and pro-active in asking for input
* Familiar with issues in large-scale systems


</section><section id="skills">


## Skills

<table class="table">
<tr><th>Programming</th><td><ul><li>HTML, CSS</li><li>PHP</li></ul></td><td><ul><li>JavaScript</li><li>Varnish VCL</li></ul></td></tr>
<tr><th>Frameworks</th><td><ul><li>Symfony 2</li><li>Backbone.js</li></ul></td><td>&nbsp;</td></tr>
<tr><th>Virtualization</th><td><ul><li>Docker</li><li>Vagrant</li></ul></td><td><ul><li>Open-Stack</li></ul></td></tr>
<tr><th>Servers</th><td><ul><li>NGINX</li><li>MySQL/MariaDB</li><li>ElasticSearch</li></ul></td><td><ul><li>Memcached</li><li>Postfix</li><li>NodeJS</li></ul></td></tr>
<tr><th>Automation</th><td><ul><li>Salt Stack</li><li>Docker Compose</li></ul></td><td><ul><li>Monit</li></ul></td></tr>
</table>


</section><section id="work-samples">


## Work samples

### Elsewhere

* [**GitHub**](https://github.com/renoirb?tab=activity)
* [**Wikimedia**](https://gerrit.wikimedia.org/r/#/q/owner:%22Renoirb+%253Crenoir%2540w3.org%253E%22,n,z)

### WebPlatform infrastructure deployment code

The objective of this project was to improve [WebPlatform.org](https://www.webplatform.org/) deployment code in order to work with the same code *locally* or *in the cloud*. While the original deployment scripts was well done, it was taking into account only one possible deployment, and wasn’t managing configuration secrets.

* Deployment scripts are published at [**webplatform/salt-states**](https://github.com/webplatform/salt-states/)
* Main deployment server installation scripts are published in [**webplatform/ops**](https://github.com/webplatform/ops/)


### Single Sign-On and Firefox Accounts

In order to allow users to use multiple separate web applications without the need to sign-in more than once, [I developed a mechanism to implement a Single Sign On][fxa-how] using [Mozilla Firefox Accounts][wpd-fxa-fork].

To create the feature, I wrote a JavaScript initializer and designed an HTTP Web Application state communication mechanism. The JavaScript initializer is designed in a way to make request to the local web application and ensure state consistency.

The initial server-side implementation was done within MediaWiki. The next step is to create an separate module that handles communication with Firefox Accounts and exposes a small API to let each relying web application to handle their users and sessions locally. My work [caught attention of the Accounts team at Mozilla][mozillan-renoirb].

While the project hasn’t been completed yet, I plan to publish a WordPress plugin, a simplified MediaWiki extension, and maybe a Python module.

* View [the feature in action in this **YouTube screenast**][fxa-wiki-yt]
* Review the proposed [PR sent back upstream][fxa-pr]

  [mozillan-renoirb]: https://mozillians.org/en-US/u/renoirb/ "Link to my Mozillan profile"
  [fxa-how]: https://docs.webplatform.org/wiki/WPD:Projects/SSO/How_we_implemented_it
  [fxa-wiki-yt]: https://www.youtube.com/watch?v=rutwd1Z_1TE
  [wpd-fxa-fork]: https://docs.webplatform.org/wiki/WPD:Projects/SSO/Adapt_Firefox_Accounts_for_WebPlatform
  [fxa-pr]: https://github.com/mozilla/fxa-content-server/pull/2637


### Contributions to *RoughDraft.js*

One of the pain points I experienced in my *web integrator* was about coordination between the frontend and the backend code. Typically, one would create a set of HTML files with a lot of cruft code such as loops, *Lorem Ipsum* text, and sample data.

RoughDraft allows to create HTML documents without backend. It only requires to load jQuery along with RoughDraft, and add to the HTML specific data attributes, so it can create loops, sample text, and blank images automatically.

My contributions to this project was the following;

* **Class name sequence generator** (see [PR #9](https://github.com/ndreckshage/roughdraft.js/pull/9 "Pull Request"))

   When creating loops in a case where the pattern has to have predetermined class names. For example, `<ul><li class="foo-alfa" data-draft-repeat="3" data-draft-text="1/w"></li></ul>` would generate a list with three *Lorem Ipsum* words, each list item would be named `foo-alfa`, `foo-bravo`, `foo-charlie`

* **Improve offline use support** (see [PR #14](https://github.com/ndreckshage/roughdraft.js/pull/14 "Pull Request"))

* **See in action** on [my wedding RSVP site](https://sweetieandsweetie.com/styleguide/), and [my personal site](https://renoirboulanger.com/styleguide/).


### Technical blog posts

* [Add OpenStack instance meta-data into SaltStack grains store](https://renoirboulanger.com/blog/2015/05/add-openstack-instance-meta-data-info-salt-grains/)
* [Run a NodeJS process through forever from within a Docker container](https://renoirboulanger.com/blog/2015/05/run-nodejs-process-forever-within-docker-container/)
* [Make Discourse “long polling” work behind Fastly](https://renoirboulanger.com/blog/2015/05/make-discourse-long-polling-work-behind-fastly/)
* [Create a MariaDB cluster with replication over SSL with Salt Stack](https://renoirboulanger.com/blog/2015/01/create-mariadb-cluster-replication-ssl-salt-stack/)


</section><section id="experience">

## Work experience

<div class="experience-block">

### Developer Operations Engineer <small>**W3C/MIT**, *aug 2013 - current*</small>

Montreal, Quebec

The main part of my work on [WebPlatform.org](http://webplatform.org) was to maintain site stability, improve features, strengthen the infrastructure, act as a technical liaison with Open-source communities, and contribute to the success of the site.

One key achievement has been to migrate the site code base to become a systematic deployment run so we could rebuild the whole system from scratch at any time.

During that time, my responsibilities also included to:

* Evaluate, configure, and maintain server and services for WebPlatform.org

* Analyze, develop, and maintain software required for the operations of WebPlatform.org

* Manage technical relationships with hosting and related service providers

* Contribute to relevant open­source projects and collaborate with their communities

* Help improve W3C and WebPlatform relationship with developers


#### Achievements

* Created a web browser feature compatibility table generator.

   The project included a generated HTML cache system to prevent heavy server use caused by the feature. If the source data file would be updated, the cached version would be invalidated.

*  Improved Infrastructure deployment code

   The objective was to allow more than one deployment (e.g. staging, local) and set in place a system that applies credentials in both servers and web application configuration files automatically.

* Single Sign-On (Proof of Concept)

   WebPlatform was using multiple web applications such as WordPress, The BugGenie, MediaWiki, Discourse, and many others. Each section of the site would require to create an account manually. The objective was to set in place a system that takes care of storing user profile and their session state.

#### Tools

Salt Stack, Vagrant, Grunt, MediaWiki, Hypothes.is, Git, Gerrit, NGINX, Varnish, Fastly, NodeJS, ElasticSearch, BackboneJS, Firefox Accounts

</div><div class="experience-block">

### JavaScript developer <small>**TEKsystems**, *jun 2013 - aug 2013*</small>

Montreal, Quebec

Develop JavaScript modules for an existing web application managing user accounts for a private client.

* Set in place processes and improved existing code to improve quality and automate migration into the client’s infrastructure
* Built a few modules: AJAX communication layer, API communication management layer with an existing ODAF layer.

</div><div class="experience-block">

### Web developer <small>**Ericsson**, *feb 2012 - jun 2013* (consultant)</small>

Montreal Québec

Participated in a cloud management web application that could control VMs in multiple geographical data centres, and supports both Open-Stack and VMWare cloud providers.

* Designed an HTTP API, leveraging Doctrine 2 models and Symfony EventDispatcher
* Coached Ericsson employees about the web platform, and web development techniques
* Designed application *domain model* to represent in code the core functionality
* Written deployment scripts, and managed multiple versions (e.g. Staging, Production)


#### Tools

Symfony2, Doctrine 2, Git, Sublime Text 2, LESS, Twitter Bootstrap, NodeJS, Puppet, Vagrant, jQuery, UnderscoreJS, Chef


</div><div class="experience-block">



### Web developer, co-founder <small>**Evocatio Solutions technologiques Inc.**, *jan 2010&nbsp;-&nbsp;feb 2012*</small>

Montréal, Québec

I was one of the co-founders. My responsibility was to find new projects and lead work related to frontend development.

Unfortunately I cannot outline some projects and clients due to non disclosure contracts.

#### Amigo <small>*Astral Media*, on-site contract (2010)</small>

Built a SharePoint 2010 frontend web application to allow *Astral Media* to keep track of contract leads.

View [screenshot](https://flic.kr/p/bKt7o4).


#### Advisor.ca iPad version <small>*Rogers Communication*, on-site contract (2010)</small>

Built an offline first RSS feed reader. Project was back in 2010, when the Apple iPad just got out and the W3C AppCache manifest was not fully implemented on iOS Safari. The web application was using LocalStorage to store a copy of the articles served through an RSS feed. Views was managed with EJS and could work reasonably well offline with Safari support at that time.

[See it in action](http://dundee.advisor.ca/) (*still online, but unmaintained*)


#### Gift exchange <small>*RED L’Agence*, partnership promotional interactive game (2010, 2011)</small>

Online christmas gift exchange game that we used during two consecutive years, changing the theme and the rules.

* *2010*: 40 different gifts, 40 participants.

   Each person had only 9 picks. See my [blog article showcasing the 2010 variant](https://renoirboulanger.com/blog/2010/02/realisation-dune-application-dechange-de-cadeau-avec-red-lagence-le-%C2%ABclub-echangiste%C2%BB-2009/) (in french)

* *2011*: «*Échange pas très équitable*».

   Winner of "*Grenier d'Or*" in the Interactive game category. One iPad, hidden in a specific christmas sock, four hints, 9 attempts.



#### Capital Magazine  <small>*Rogers Communication*, on-site contract (2010)</small>

Web version of the *Canadian Capital* Magazine made with WordPress. The site is currently offline.


#### Buro de post <small>*RED L’Agence*, partnership product (2012)</small>

Participated in the development of an e-mail notification system using *symfony 1.2*. The web application allowed *UDA* marketing team to write communication emails using a library of HTML email templates that they could reuse.

* Created a log manager to ensure each recipient received the message
* Created a unsubscribe module
* Created the HTML/CSS frontend


#### UDA Web site <small>*RED L’Agence*, partnership work (2009-2011)</small>

There were two phases. In 2009, and in 2011. The first phase was to rebuild the site, and implement current features from the former version made in .NET C#, and add new features. All of the above was done within a very short time frame.

During the time I was part of the team, we worked on the following:

* Rebuild the member artist database search engine, allowing to find on various criteria: hair color, played music instrument, professional qualifications, etc.

* Public search engine indexing different type of documents: PDF, Word documents, parsed collective agreements, content from the CMS, etc.

* The artist managers can create artist selections and send them to producers

* The artist themselves manages can control what information the public, and other types of users can see from their profile

The version I worked on isn’t online anymore, but you [can still see a few screenshots here (16 images)][uda-mockup]

  [uda-mockup]: https://www.flickr.com/photos/inexisdotnet/6911441858/

#### Tools

Git, Balsamiq mockups, Adobe Photoshop, SMACSS, OOCSS, Twitter Bootstrap, Apache Solr, JavaScript, PHP, symfony 1.x, Atlassian Jira, Atlassian Confluence, Netbeans, VirtualBox, Compass, SASS, SCSS


</div><div class="experience-block">


### Web developer <small>**Groupe Informatique TechSolCom Inc.**,  *oct 2006 - aug 2009*</small>

Montréal, Québec

#### Tasks

* Maintain TechSolCom's corporate image (2006-2009)

* Work with the User Experience Group focussing on web integration and content accessibility


#### Projects

##### TechSolCom web site

* Built the 2007 version using Geranium CMS

* 2009 version was rebuilt with good care of the [WCAG](http://www.w3.org/WAI/intro/wcag "Web Content Accessibility Guidelines") recommendations


##### Namminik

First "Agile" project, acting as front end developer and interaction designer.

Built a home inventory web application with JSF and YUI components.

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


#### System administration

* Managed multiple VMWare ESX and VMware Server servers, and virtual machine instances

* Built a monitoring service using the SNMP protocol, centralized syslog server, and configured a Nagios monitoring service

* Managed and tested **SOA integration** patterns with the company's provided **IBM WebSphere DataPower** blade

* Built an SMTP e-mail relay server, using SpamAssassin, and other filtering technologies


#### Consulting

##### Jacob.ca

* Built a JavaScript AJAX Outlet locator, reading data from XML files

* Built XML schema and XSL stylesheets

* Contact us form, using cross-origin frame communication


##### Téléfilm Canada

Integrated two web application mockups, creating a theme for the YUI2 markup library. Some [screenshots are available here][telefilm-screenshots] (3 images).

  [telefilm-screenshots]: https://www.flickr.com/photos/inexisdotnet/4095241313/in/album-72157654212253690/


#### Tools

JSF, Struts, Agile, Ant, IBM WebSphere DataPower, Apache Tomcat, JDBC, SNMP, Maven2, Adobe Photoshop, WAI WCAG, Balsamiq mockups, XML, XSL, YUI2, Mootools, Debian Linux, RedHat Enterprise Linux, Confluence, Jira, jQuery, MySQL, JSON, WSDL, Subversion, CVS


</div><div class="experience-block">

### Web developer <small>**Câble Axion Digitel Inc.**,  *oct 2005 - nov 2006*</small>

Magog, Québec

Câble Axion is a cable service provider. Their network coverage goes from Montreal South shore, follows the US borders, and go up until the Beauce area.


#### Corporate website

* Web integration from the Photoshop mockups
* Web development using PHP and MySQL on a custom made CMS


##### Microsoft Access database

* Automated report and support request generation, using Windows's clip-board to paste in an e-mail to the dispatcher
* Time sheet and intervention report views


</div><div class="experience-block">


### Web developer <small>**Inexis solution web Inc.**, *feb 2002 - nov 2006* (Self employed)</small>

Sherbrooke, Québec

Inexis solution web Inc., was a web development service provider. The company worked many graphic design agencies around the Eastern Townships region.

* Web integration based on the provided Photoshop mockups

* Managed multiple PHPList instances and created HTML e-mail templates

* Managed sites such as: City of Sherbrooke, the project "Sherbrooke, Ville étudiante", the regional county municipality of the Val Saint-François, Mont Bellevue, Hydro-Sherbrooke


#### Web applications

##### Géranium

Géranium was a proprietary web based content management, and client relationship management system that Inexis Solution web built.

* Static site generator with wiki syntax parser

* Built an archive builder module, generating static HTML files, and zipping the original file being replaced

* Client Relationship management module


#### Consulting

##### Callio Technologies

Build printable reporting views that had to work with standards compliant AND Internet Explorer 6 within a *Macromedia ColdFusion* web application.


##### Evolubiz

Participated in a few of their OSCommerce modules and also upgraded their internal server infrastructure



#### Tools

CVS, Subversion, MySQL, Adobe Photoshop, CSS, HTML, Red Hat Linux 9

</div><div class="experience-block">
</section>


------------------------------------



## Misc.

### Certifications <img style="float:right" src="//renoirboulanger.com/wp-content/themes/renoirb/assets/img/zce_logo.jpg" alt="Zend Certified Engineer PHP 5.3" lang="en" width="80" />

* **2013** *Zend Certified Engineer PHP 5.3* ([Certification link](https://www.zend.com/en/yellow-pages/ZEND011184))

* **2011** *Security clearance* checked by [PWGSC](http://www.tpsgc-pwgsc.gc.ca/comm/index-eng.html "Public Works and Government Services Canada"), required for all federal government providers

* **2008** *Accessibilité du web* (WCAG 1) at the *Nazareth & Louis Braille* institute (University of Montreal)

* **2007** IBM WebSphere DataPower SOA Appliance



### Involvement

* **2011-2013**, Member of the board of directors W3Québec

* **2010-2012**, weekly meet-up with "devLAB Montreal"

* **2010**, Member of the organization of the Code-Fest zone during Make Web Not War, organized by Microsoft

* **2008-2010**, Unit leader, Scouts Canada



### Published

* André Santanchè, (2013), in chapters "Markup architecture", "Events", et "Web Storage" in "[Mobile development using web technologies focusing on games](http://dl.acm.org/citation.cfm?doid=2526188.2528541&preflayout=flat)". [ACM](http://www.acm.org/) library

* Talk (in french) [Comment évaluer le niveau de qualité d’un site web selon les techniques d’intégration web d’actualité](https://speakerdeck.com/renoirb/comment-evaluer-la-qualite-dun-site-web-selon-les-techniques-dintegration-web-dactualite), presented during 2013 WebIn, and also at 2013 Web à Québec (WAQ)

* Talk [How to manage a big scale HTML/CSS project](http://www.slideshare.net/renoirb/how-to-manage-a-big-scale-htmlcss-project), given at Make Web Not War 2011

* [devLAB: Montreal’s latest developer meet-up](http://www.webnotwar.ca/devlab-montreals-latest-developer-meetup/) on Web Not War blog

* Co-written an article about Open source software and the impacts while starting out a business (in french) [Logiciels libres en affaire](http://www.rezopointzero.com/2010/11/24/rien-quune-question-de-gros-bon-sens/)

