---
locale: en-CA
title: >-
  Why would I NOT use my own framework and how I sell usage of Symfony2 and
  other current PHP 5.3+ goodies to my client
canonical: >-
  https://renoirboulanger.com/blog/2012/11/why-would-i-not-use-my-own-framework-and-how-i-sell-usage-of-symfony2-and-other-current-php-5-3-goodies-to-my-client/
status: publish
revising: true
createdAt: '2012-11-22'
updatedAt: '2013-03-27'
tags: []
categories: []
excerpt: ''
---

Sometimes, in a mailing list I am following and in real life. People are sometimes explaining their choices in technology to create an e-commerce site using a CMS ("Content Management system") or their own "homemade" framework. As if there is no good PHP ones out there nowadays.

A CMS is a web application to manage content and when specialized requirements (as in managing other things than pages of content) we have to extend outside of the CMS part. A framework is thus a good friend.

In either case. My opinion is to use the right tool for the right task.

I wrote on the subject because I recently had to defend my technological choice of <a href="http://symfony.com/">Symfony2</a> at my (very-large) client. You can see on these <a title="My answer to people asking whether they should or not use a framework" href="/blog/2012/08/my-answer-to-people-asking-whether-they-should-or-not-use-a-framework-on-their-programming-language/">two</a> <a title="Choosing a framework, how I personally define what is hot about them, an evaluation process (part 1)" href="/blog/2012/07/choosing-a-framework-how-i-personally-define-what-is-hot-about-them-an-evaluation-process">posts</a>.

I tend to believe that everybody who can program can work with a well architectured CMS/framework whatever software architecture patterns it is following. The priority is that we, programmer, fills the client's requirements and use what is existing to make us efficient.

Creating a "just for this project"-"super custom"-framework and saying it is using [a buzzword-compliant] architecture principle, doesn't PROVE IT well made.

Don't get me wrong. It is not that creating a framework is bad. It is quite an educative hobby. Creating a framework requires a lot of work, dedication and ideally a quantity of skilled people to work to improve, review, test and document. A full time job by itself alone.

My feeling is that the client probably did not asked to create a "framework".

My problem is more precisely about using it as production-code for their business application, make them pay for it AND what they explicitly asked for. Should they only pay for the features they asked for?

But if you used a well known, documented, framework with an active community. You can use it as a good selling argument in front of the client. It even reassures them that other people can take on your work.

So a question lingers in my mind. If one has the skillset to create his own framework. Why doesn't he contribute to an existing one?

Personally, all my choices follows the NIH approach. NIH as in "not invented here" see <a href="http://iamproblematic.com/2012/03/07/getting-over-the-not-invented-here-mentality">Derek Strobe's blog post about NIH</a>, a much inspiring read.

The overall idea is that Instead of charging for my time implementing dependency injection, i'll use an existing one.
<h3>Maturity</h3>
Talking about maturity. <a href="https://github.com/symfony/symfony/commit/c3ebdbf9cceddb82cd2089aaef8c7b992e536363">Symfony2</a> is 2 years old already (compared to <a href="https://github.com/zendframework/zf2/commits/release-2.0.0beta5">Zf2</a> few month of age).

If it is not only about maturity. Think that the <a href="https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-0.md">PSR</a> (levels <a href="https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-0.md">0</a>, <a href="https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-1-basic-coding-standard.md">1</a>, <a href="https://github.com/php-fig/fig-standards/blob/master/accepted/PSR-2-coding-style-guide.md">2</a>)  recommendation is written by a group community leaders who decided to standardize the way to structure libraries so they are inter-operable, <a href="http://www.php-fig.org/">PHP FIG</a> was created for this.

I think everything changed since the PHP-FIG group created the PSR* standard and the use of <a href="http://getcomposer.org/doc/01-basic-usage.md">composer</a> to manage dependencies. CMS and other framework projects have to follow the lead, otherwise they may get left behind.
<h3>CMSes</h3>
I have the feeling that someday CMS will be only a GUI, with full edition capability (see <a href="http://jejacks0n.github.com/mercury/">Mercury Editor</a>, or <a href="http://createjs.org/">Createjs</a>) using HTML5's  <a href="http://html5doctor.com/the-contenteditable-attribute/">ContentEditable property</a>. And persisting inside a Storage engine known as "Content Repository".

This trend is also what some calls "<a href="http://bergie.iki.fi/blog/decoupling_content_management/">Decoupled Content Management</a>" (<a href="http://bergie.iki.fi/blog/phpcr/">also explained here</a>), a VERY promising concept that will give some more chances for us to actually re-use code.

The prospect may even make us be able to really create easily semantic-friendly pages. Created by editors. Regarding semantic web, you should look at <a href="http://viejs.org/">"VIE" over here</a>.

The trend is more than mere theory. Many project spawned already. Most notably the <a href="http://cmf.symfony.com/">Symfony-CMF</a>, <a href="http://midgard-project.org/">Midgard</a> and even known CMS-es such as <a href="http://symfony.com/blog/symfony2-meets-drupal-8">Drupal</a> and Joomla are currently re-evaluating their projects and following the trend.
<h3>Dependencies</h3>
A common problem is how can I make sure the project uses proper libraries and a compatible version number.

Many stacks has their own implementations of it. It comes as a simple file stating which version you want, and it takes care of getting the proper version from any configured package we may think of.

The concept is now new and many web development stack has their own implementations. Have a look at <a href="https://npmjs.org/doc/json.html">package.json</a> (for Javascript), <a href="http://gembundler.com/">Bundler</a> (for Ruby).

PHP has it's own now, it's called <a href="http://getcomposer.org/">Composer</a>, here is how you would declare your dependencies:
<pre lang="php">{
   "require": {
       "myown/vendor": "master",
       "external/lib": "3.1.*",
       "external2/template": "master"
   }
 }</pre>
See: <a href="http://getcomposer.org/doc/00-intro.md">Introduction to composer</a> using <a href="http://packagist.org/">Packagist</a>

Add to that any cache management, deployment configuration and <a href="http://developer.yahoo.com/yui/compressor/">other</a> <a href="https://github.com/h5bp/ant-build-script">build libraries</a>, <a href="http://lesscss.org/">compilation</a> and <a href="https://github.com/mishoo/UglifyJS/">protection</a> you may wish to use.
<h3>All in all</h3>
Nowadays. If you are still:
<ul>
	<li>Manually using require_once(...)</li>
	<li>Adding database queries in your view (WordPress? x_X)</li>
	<li>Using loops and query hidden in a ... templating engine (ExpressionEngine "loops" x_X)</li>
</ul>
You may need to see the reference I made in this post.

My argument goes as following, mostly for what my (our) clients pays us for:
<ul>
	<li>Learn and make good use of framework that has a reputation, good architecture, modular, inter-operable with other, in PHP is not a chimera anymore.</li>
	<li>NIH please</li>
	<li>Build functionality for the client who pays you. not maintain the serializer service mechanism... framework do that stuff. client do not care about it</li>
	<li>SOLID principles?</li>
	<li>Scaling? (only one database? what if I need to go deploy on a PaaS solution?)</li>
</ul>