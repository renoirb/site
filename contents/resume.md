---
title: Resume
template: base.html
---

## <span style="font-size:0.8em;">WEB DEVELOPER & OPERATIONS ENGINEER</span>

*Note*: [Version française aussi disponible](/cv)

### Availability

Not available at the moment. Expected renewal date: August 2015


## Summary

* ***Currently under contract for the W3C***, the international web standards organization chartering the web
* Maintained notably WebPlatform.org, the Web’s 25th anniversary site webat25.org (2014), the French Canadian artist union [«Union des Artistes»](https://uda.ca/) (2009), and the [City of Sherbrooke](http://www.ville.sherbrooke.qc.ca/) (2005)
* **Zend Certified Engineer** PHP 5.3
* **14 years of professional experience** in web development
* Experience with **cloud IaaS**, **Containers**, and maintenance of **continuous deployment** systems
* Experience in participating/releasing/deploying software as part of an open source community
* Experience working in the open and within a distributed team
* Very good knowledge of modern web development techniques and tooling: CSS Preprocessors, Quality tools, etc.
* Built more than 150 web sites between 2002 and 2009
* Bilingual (english, french)


### Strengths

* Optimistic, **quick learner**
* **HTML Markup architecture**
* **Good knowledge of JavaScript**, synchronous and asynchronous, both in node.js and client-side



### Tools and languages

#### Current daily tools

* NGINX, Varnish
* Salt Stack
* Elastic Search
* Vagrant, Docker, Open Stack, Docker Compose
* BackboneJS, Underscore, Grunt, Bower, Gulp


#### Most experienced with

* PHP, HTML, CSS, Git
* MySQL/MariaDB and replication
* Frameworks: Symfony2, BackboneJS


#### Also worked with

* HHVM
* Puppet
* PHP frameworks: symfony 1.x, Zend Framework, Kohana
* CMS: MediaWiki, Drupal, MODx
* Microsoft Access, Microsoft SharePoint
* Phabricator
* Apache Solr


#### Want to see my code?

Look at [my GitHub profile](https://github.com/renoirb?tab=activity).


##### Salt-Stack deployment scripts and workspace

I’ve reworked [WebPlatform.org](https://www.webplatform.org/) server infrastructure code and created a local workspace using Vagrant and VirtualBox.

You can review all **Salt-Stack configuration** states in [the **webplatform/salt-states** GitHub repository](https://github.com/webplatform/salt-states/), the Vagrant workspace is [available in the **webplatform/ops** repository](https://github.com/webplatform/ops/).


##### WebPlatform Accounts

[Forked and deployed *Mozilla Firefox Accounts*][wpd-fxa-fork] to provide decoupled Identity service for WebPlatform.org.

WebPlatform uses multiple separate web applications such as WordPress, MediaWiki, an annotation system written in Python and a few others.

The objective of *WebPlatform Accounts* was to provide an Identity Provider system as a *source of truth* for other web applications to gather information about a user and his/her session and synchronize locally its state.

You can see [**How we implemented** in WebPlatform Docs wiki][fxa-how], there had been two clients developed, one for [an annotation system][wpd-notes] and
the W3C has [one of their specs using it][w3c-notes-spec].

Proof of concept was made for MediaWiki in PHP, you can [see it in action from this YouTube video][fxa-wiki-yt].

See some code:

* [FxA content server][gh-fxa-content]
* [FxA auth server][gh-fxa-auth]
* [FxA profile server][gh-fxa-profile] (note; we are using the profile server as the "source of truth")

  [fxa-how]: https://docs.webplatform.org/wiki/WPD:Projects/SSO/How_we_implemented_it
  [wpd-notes]: https://notes.webplatform.org/stream
  [w3c-notes-spec]: http://www.w3.org/TR/annotation-model/
  [fxa-wiki-yt]: https://www.youtube.com/watch?v=rutwd1Z_1TE
  [wpd-fxa-fork]: https://docs.webplatform.org/wiki/WPD:Projects/SSO/Adapt_Firefox_Accounts_for_WebPlatform
  [gh-fxa-content]: https://github.com/webplatform/fxa-content-server/compare/master...webplatform:webplatform-customizations
  [gh-fxa-auth]: https://github.com/webplatform/fxa-auth-server/compare/master...webplatform:webplatform-customizations
  [gh-fxa-profile]: https://github.com/mozilla/fxa-profile-server/compare/master...webplatform:webplatform-customizations


##### Billing system <small>PHP coding sandbox</small>

Generate bill with lines of items that can either be non-taxable, and taxable. It should support compound taxes in some situations such as for imported goods.

* Separation of concerns between web-framework, and domain modelling
* Unit tests
* Object oriented

[*GitHub repository*](https://github.com/renoirb/testing-sandbox)

##### RoughDraft.js

> \[A tool to\] quickly create and prototype a full interactive HTML mock-up without duplicating markup, server-side loops/code, or having to source sample content. Its made in a way such that you can focus on HTML/CSS without the need for a backend, or an Internet connection.

**Contributions:**

* class name sequence generator. Assuming an element is part of a loop, if you add an attribute with a value that contains the string "alfa" (e.g. `<em class="foo-alfa" data-draft-repeat="3">foo</em>`) it would generate subsequent nodes with expectable class names (e.g. `foo-alfa`, `foo-bravo`, `foo-charlie`) for the same HTML tree siblings
* Improved code to allow offline use

*GitHub pull requests*; [#9](https://github.com/ndreckshage/roughdraft.js/pull/9), [#14](https://github.com/ndreckshage/roughdraft.js/pull/14)

**See in action**

You can see it in action for two personal projects I worked on; [my wedding RSVP site](https://sweetieandsweetie.com/styleguide/), and [my personal site](https://renoirboulanger.com/styleguide/).



------------------------------------



## Work experience

### Developer Operations engineer <small>**W3C**, *aug 2013 - current*</small>

Montreal, Quebec

The main part of my work at the [WebPlatform.org](http://webplatform.org) is to maintain site stability, improve the site features, strengthen the site hosting and deployment infrastructure, act as a technical liaison with Open-source communities, and contribute to the success of the site.

#### Tools

Salt Stack, Vagrant, Grunt, MediaWiki, Git, NodeJS, ElasticSearch, BackboneJS, Firefox Accounts

### JavaScript developer <small>**TEKsystems**, *jun 2013 - aoug 2013*</small>

Montreal, Quebec

Develop JavaScript modules for an existing web application managing user accounts for a client.

* Set in place processes and improved existing code to improve quality and automate migration into the client’s infrastructure
* Built a few modules: AJAX communication layer, API communication management layer with an existing ODAF layer.


### Web developer <small>**Ericsson**, *feb 2012 - jun 2013* (consultant)</small>

Montréal Québec

Participated in creating a provisioning web application portal communicating with web service endpoints, in various geographical locations.

The application had to manage: different time-zones, e-mail notifications. It also had to provide an harmonized experience with same service but different providers by creating an abstraction layer, and process the requests.

* Created a preliminary API w/ Symfony 2.1
* Coach Ericsson employees about the web platform, web development techniques and related established standards
* **Domain Modelling**, mapping use-cases into Software architecture reflecting it
* Server environment levels management; user acceptation, production, testing
* Database/Model migrations


#### Tools

Symfony2, Doctrine 2, Git, Sublime Text 2, LESS, Twitter Bootstrap, NodeJS, Puppet, Vagrant, jQuery, UnderscoreJS, Chef




### Web developer, co-founder <small>**Evocatio Solutions technologiques Inc.**, *jan 2010&nbsp;-&nbsp;feb 2012*</small>

Montréal, Québec

I was one of the founders of Evocatio and I had been part of the two first years. For some projects, we a team of ten developers.

Unfortunately I cannot outline some projects and clients due to non disclosure contracts.

Here is a list of deliverables I had to work sorted by theme:

#### Tasks

* Ensure projects are using W3C recommendations
* Front end development on various games and web applications
* Modular HTML/CSS markup library elaboration


#### Projects

My contribution to the following projects also includes web integration.

##### Amigo

Built a distinct front end component communicating with Microsoft SharePoint 2010. The application was a simple form input system using SharePoint's tracker feature. It was made with Visual Studio and Visual Basic .NET


##### Advisor mobile version for iPad

Mobile web application targeted to the iPad giving Advisor.ca readers the ability to read the article while offline.

* Made using HTML5 and localStorage, and also CSS3 transitions and effects
* Created an article serialization module reading from the site's RSS feeds

[See it in action](http://dundee.advisor.ca/)


##### Gift exchange web application

Online christmas gift exchange game that we used during two consecutive years, changing the theme and the rules.

* *2010*: 40 different gifts, 40 participants. Each person had only 9 picks. See my [blog article showcasing the 2010 variant](https://renoirboulanger.com/blog/2010/02/realisation-dune-application-dechange-de-cadeau-avec-red-lagence-le-%C2%ABclub-echangiste%C2%BB-2009/) (in french)
* *2011*: «*Échange pas très équitable*»; Winner of "*Grenier d'Or*" in the Interactive game category. One iPad, hidden in a specific christmas sock, four hints, 9 attempts.



##### Capital Magazine

Web version of the *Canadian Capital Magazine* using WordPress. The site is currently offline.


##### Buro de post

A mass e-mail notification system built using symfony 1.2 meant to send newsletters to the UDA members.

* System software analysis involving: Syslog, Postfix, unsubscribing, tracking, and how to manage e-mail «bounces»



##### UDA website refactor

There were two phases. In 2009, and in 2011. The first phase was to rebuild the site, and implement current features from the former version made in .NET C#, and add new features. All of the above was done within a very short time frame.

During the time I was part of the team, we worked on the following:

* Rebuild the member artist database search engine, allowing to find on various criteria: hair color, played music instrument, professional qualifications, etc.
* Public search engine indexing different type of documents: PDF, Word documents, parsed collective agreements, content from the CMS, etc.
* The artist managers can create artist selections and send them to producers
* The artist manages what the public, the managers, and the other artists can see on their profile

The version I worked on isn’t online anymore, but you [can still see a few screenshots here (16 images)][uda-mockup]

  [uda-mockup]: https://www.flickr.com/photos/inexisdotnet/6911441858/

#### Tools

Git, Balsamiq mockups, Adobe Photoshop, SMACSS, OOCSS, Twitter Bootstrap, Apache Solr, JavaScript, PHP, symfony 1.x, Atlassian Jira, Atlassian Confluence, Netbeans, VirtualBox, Compass, SASS, SCSS




### Web developer <small>**Groupe Informatique TechSolCom Inc.**,  *oct 2006 - aug 2009*</small>

Montréal, Québec

#### Tasks

* Maintain TechSolCom's corporate image (2006-2009)
* Work with the User Experience Group focussing on web integration and content accessibility
* Participate in various projects as a developer and manage their branding:
 * Namminik (2008)
 * TSCM, then rebranded as Beebox (2007,2009)
 * Some facebook games


#### Projects

##### TechSolCom web site

* Built the 2007 version using Geranium CMS
* 2009 version was rebuilt with good care of the [WCAG](http://www.w3.org/WAI/intro/wcag "Web Content Accessibility Guidelines") recommendations


##### Namminik Project

First "Agile" project, acting as front end developer and interaction designer.

Built a home inventory web application with JSF and some YUI components.


##### Beebox

Beebox was a Continuous Integration system written in Java. It was freely available as a J2EE binary to deploy. The product was used by TechSolCom's clients. Unfortunately we can’t see anything about it online, but [you can see some screenshots][beebox-screenshots] (4 screenshots).

* Web integration using *IBM Rational application* development environment and *IBM WebSphere* portal
* Participated in the creation of a *Struts* tag library
* Participated in the user documentation
* Built the Web site (offline)


  [beebox-screenshots]: https://www.flickr.com/photos/inexisdotnet/4094892662/in/album-72157654212253690/


##### Site Finder

Participated in the web based back-office portal providing data to a outlet geo-location tool for iOS, the project was later was adapted for Desjardins as the "Localisateur Desjardins" (2009-2011).


#### System administration

* Managed multiple VMWare ESX and VMware Server servers, and virtual machine instances
* Built a monitoring service using the SNMP protocol, centralized syslog server, and configured a Nagios monitoring service
* Managed and tested **SOA integration** patterns with the company's provided **IBM WebSphere DataPower** blade
* Built an SMTP e-mail relay server, using SpamAssassin, and other filtering technologies


#### Consulting

##### Jacob.ca

* Store locator utility
* Built XML schemas and XSL stylesheets and JavaScript clients
* Contact us form communicating to a cross-origin site endpoint


##### Téléfilm Canada

Integrated two web application mockups, creating a theme for the YUI2 markup library. Some [screenshots are available here][telefilm-screenshots] (3 images).

  [telefilm-screenshots]: https://www.flickr.com/photos/inexisdotnet/4095241313/in/album-72157654212253690/


#### Tools

JSF, Struts, Agile, Ant, IBM WebSphere DataPower, Apache Tomcat, JDBC, SNMP, Maven2, Adobe Photoshop, WAI WCAG, Balsamiq mockups, XML, XSL, YUI2, Mootools, Debian Linux, RedHat Enterprise Linux, Confluence, Jira, jQuery, MySQL, JSON, WSDL, Subversion, CVS



### Web developer <small>**Câble Axion Digitel Inc.**,  *oct 2005 - nov 2006*</small>

Magog, Québec

Câble Axion is a cable service provider. Their network coverage goes from Montreal South shore, follows the US borders, and go up until the Beauce area.


#### Projects

##### Corporate website

* Web integration from the Photoshop mockups
* Web development using PHP and MySQL on a custom made CMS (forking from *Geranium CMS*)


##### Microsoft Access database

* Automated report and support request generation, using Windows's clip-board to paste in an e-mail to the dispatcher
* Time sheet and intervention report views



#### Tools

SVN, MySQL, Adobe Photoshop, Microsoft Access



### Web developer <small>**Inexis solution web Inc.**, *feb 2003 - nov 2006* (Self employed)</small>

Sherbrooke, Québec

Inexis solution web Inc., was a web development service provider. The company was working with many graphic design agencies around the Eastern Townships region allowing them to offer web development packages without having to hire the resources themselves.

* Web integration based on the provided Photoshop mockups
* Managed multiple PHPList instances, and created HTML e-mail templates
* Managed sites such as: City of Sherbrooke, the project "Sherbrooke, Ville étudiante", the regional county municipality of the Val Saint-François, Mont Bellevue, Hydro-Sherbrooke


#### Web applications

##### Géranium

Geranium was a web based content management and client relationship management system that Inexis Solution web was building.

* A custom made, proprietary, Content Management System made in PHP 4 and MySQL
* Built a wiki syntax parser
* Built an archive builder module, generating static HTML files, and zipping the original file being replaced
* Client Relationship management module


#### Consulting

##### Callio Technologies

Build printable reporting views that had to work with standards compliant AND Internet Explorer 6 within a *Macromedia ColdFusion* web application.


##### Evolubiz

Participated in a few of their OSCommerce modules and also upgraded their internal server infrastructure



#### Tools

CVS, Subversion, MySQL, Adobe Photoshop, CSS, HTML, Red Hat Linux 9

------------------------------------



## Misc.

### Certifications <img style="float:right" src="//renoirboulanger.com/wp-content/themes/renoirb/assets/img/zce_logo.jpg" alt="Zend Certified Engineer PHP 5.3" lang="en" width="80" />

* **2013** *Zend Certified Engineer PHP 5.3* ([Certification link](https://www.zend.com/en/yellow-pages/ZEND011184))
* **2011** *Security clearance* checked by [PWGSC](http://www.tpsgc-pwgsc.gc.ca/comm/index-eng.html "Public Works and Government Services Canada"), required for all federal government providers
* **2008** *Accessibilité du web* (WCAG 1) at the *Nazareth & Louis Braille* institute (University of Montreal)
* *2007* IBM WebSphere DataPower SOA Appliance



### Involvement

* *2011-2013*, Member of the board of directors W3Québec
* *2010-2012*, weekly meet-up with "devLAB Montreal"
* *2010*, Member of the organization of the Code-Fest zone during Make Web Not War, organized by Microsoft
* *2008-2010*, Unit leader, Scouts Canada



### Published

* André Santanchè, (2013), in chapters "Markup architecture", "Events", et "Web Storage" in "[Mobile development using web technologies focusing on games](http://dl.acm.org/citation.cfm?doid=2526188.2528541&preflayout=flat)". [ACM](http://www.acm.org/) library
* Talk (in french) [Comment évaluer le niveau de qualité d’un site web selon les techniques d’intégration web d’actualité](https://speakerdeck.com/renoirb/comment-evaluer-la-qualite-dun-site-web-selon-les-techniques-dintegration-web-dactualite), presented during 2013 WebIn, and also at 2013 Web à Québec (WAQ)
* Talk [How to manage a big scale HTML/CSS project](http://www.slideshare.net/renoirb/how-to-manage-a-big-scale-htmlcss-project), given at Make Web Not War 2011
* [devLAB: Montreal’s latest developer meet-up](http://www.webnotwar.ca/devlab-montreals-latest-developer-meetup/) on Web Not War blog
* Co-written an article about Open source software and the impacts while starting out a business (in french) [Logiciels libres en affaire](http://www.rezopointzero.com/2010/11/24/rien-quune-question-de-gros-bon-sens/)

