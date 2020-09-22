---
locale: en-CA
cover: ~/assets/content/blog/2012/07/everything-with-php-sauce.png
coverAlt: Everything goes with PHP Sauce
keywords:
  - php
  - framework
  - good
  - post
  - web
  - process
  - people
  - important
  - community
  - code
  - quality
canonical: 'https://renoirboulanger.com/blog/2012/07/choosing-a-framework-how-i-personally-define-what-is-hot-about-them-an-evaluation-process/'
title:
  Choosing a framework, how I personally define what is “hot” about them, an
  evaluation process (part 1)
categories:
  - Web Integration Review
date: &createdAt '2012-07-23'
createdAt: *createdAt
tags:
  - architecture
  - Favourites
  - frameworks
  - php
  - symfony2
  - with-images
---

This post is all about what **I** think should be used to define quality in your
choice of programming framework tool-set. This post is the first one of a
collection of (unknown for now) number of posts.

This week, I had to bring to a team of people what I consider a good PHP
framework and why I am sold. I am aware that I may sound blinded with my choice,
but this post is about explaining my own guidelines about my choice. I work with
them since many years and that made me try many in the PHP ecosystem.

Things can get messy with PHP, that's why we have to be very cautious on how we
structure and consider recommendations from other good programmers.

Since we know that PHP can be a "sauce where everything goes". Structure is
**crucial**. There is many frameworks, many libraries, and to be able to build
solutions that will solve more usefull and important matters, we need to agree
on how to collaborate.

I do not claim to be a guru, I have done stuff and thanks to people I mention
here, I feel I am getting better at the craft and I thought my reflection
process was worth sharing.

### Objective behind this series

This post is **not ** an answer to a [rant][0] or an [answer of a rant from a
rant][1].

Actually, I think that bashing (or flamewars) never really been productive. Not
to forget that ranting on a blog post from [Fabien][2], one of the most
important contributor to the PHP community, about how XXX feature is bad because
of something else not related to the current topic. Is a display of disrespect
on his work and do not bring anything to the table.

On the other hand, this blog post is my echo to many questions I saw on LinkedIn
and discussions I happened to contribute and my own personnal process I use for
_everything_ I try to do my work.

### My own experience

Value of one's word starts with the credentials. So, here's a little bit about
my own personnal experience.

Between 2002-2005 I created my own CMS and CRM that I was calling [Geranium][3].
I did it alone, closed source, and **I was the only one using it**. This is to
illustrate how I had the lesson learned. It was plain, procedural PHP 4, with
lots of include and use of global variables.

I have to say that the most of my experience is about web standards than
programming.

I always been about trying things and learning. Since then, to name a few, I
worked with namely:

- CMSes such as: WordPress, Drupal 5, MODx evolution
- CodeIgniter, Kohana
- Zend Framework 1.09
- symfony 1.1, 1.2, 1.4

But, in my past I worked and had many discussions in either while I was
[organizer][4] at [ConFoo][5], and community events I was hosting [during
devLABs][6] and other kind of events) in clean code architecture and principles.

[PHP has a lot of bad code and tutorials][7] (W3Schools is one of them that pops
right in my mind). If you follow these, please stop right now!

But nowadays, there is good quality tools and efforts to enforce. And, quite
frankly, without the work of _my favourites contributors_, I would probably had
switched to an other language.

Like Fabien Potencier outlined, PHP has a lot of great stuff to offer nowadays.

Bottom line, if you are using old principles, why not start using tool-sets that
actively teaches and promotes improved techniques.

### Warning

Just to put it straight at the beginning. PHP is the language I use since a long
while and I prefer to stick to it for a while as I am perfecting my skills in
software architecture.

I have to say, I am sold to Symfony2\. For the exact reasons of the ones I
explain in this post.

I am personally open to other web technologies and will even give a try to
`Python`, `Ruby` or `Scala` some day. After `Node.js`, of course.

### What I defines a good project library to use

Going to the "real meat" now, shall we.

I think what is important in a programming language framework is the quality of
the contribution, the steps taken to go forward and improve things, and promote
quality. In the PHP world, there is many very competent contributors that
exactly do that. I could name a few, but I would loose the goal of this post.

So what is really important in when you consider building a project.

To my opinion it is:

- Quality of the code contribution
- The community of people around it
- Reference to other work from people from other languages and concepts (not
  stay within your own flock and ignore the rest)
- Well written recommendations of architecture to use
- Guidelines of a way to implement, and more importantly why some other is being
  deprecated
- Clean OOP, namespaces, organization, [Single responsibility][9]
- Enforce typing as much as possible (method signatures anyone?)
- Scaffolding, Database abstraction, Object Relational Mapping, Repositories,
  Validation, etc
- Use of exting automation tools

A part from that, [I opened a community Wiki answer on stack overflow][10] with
the following:

Make sure what you use has, a way to:

- send to the log (Monolog is a good one)
- parse text only config (YAML is a good one)
- logic-less templating, with some convention (`Mustach`, [Twig][11], NOT Smarty
  (please))
- dependencies definition manifests (Composer is the way to go, very similar to
  `package.json` that NodeJs offers)
- define common "service" instantiation mechanism ([DependencyInjection][12],
  [Phemto][13] are some)
- abstracted way to load libraries ([ClassLoader][14] component is a good one.
  You know, no hardcoded `require_once`)
- Localization management (see [Symfony2/Twig documentation][15])
- abstract database calls without hardcoding database vendor specific
  (Doctrine2, Propel)
- Unit testing structure, usage and conventions (PHP Unit, Behat, Mink)
- Database code doesn't use "`mysql`" and istead uses `mysqli`
- Code generation mechanisms (also known as "Scaffolding"), see: [Bob][16], and
  the ones built in Doctrine2 and Symfony2
- Code generation based on functionnal requirement description, see [(Ruby's)
  Cucumber][17]/[RSpec][18], in PHP it's called [Behat][19]
- Database object class is as most possible vanilla (doesn't extend ORM's)

And all of that distinct functionality packages that you can mix and match
aligned with what is not to be deprecated and the [latest php features][20]

### That's all for now

I could go on and on with a list. Stay tuned for my next post about my analysis
on what I think great about those next generation PHP framework and tools. And
most importantly, **WHAT** make's them attention worthy.

### Reference

#### Some good guidelines

- [PHP The Right Way][21] ([contribute with a pull request here][22])
- [PHP Framework Interop Group][23]'s PSR recommendation reference

#### My favorites contributors

This is my list of favourites contributors I look for when I read documentation
and projects.

As it happens, I had the chance to meet them during my two last years as
organizer of the ConFoo conference.

- [Fabien Potencier][2], [Symfony framework][24] creator, and SensioLabs founder
- Doctrine2's cookbook on [CodeFirst approach][25], [Object entity mapping and
  inheritance (aka. Inheritance mapping), and the others.][26]
- [Tobias Schlitt][27]. Be sure to read [his definition of a framework][28] it
  is quite exhaustive.
- [Jonathan H. Wage][29], creator of the best database abstraction layer,
  **Doctrine**
- Sebastian Bergmann and his peers at [thePHP.cc][30]
- [Christophe Coevoet][31]
- [Johanes Schmitt][32]
- [Jordi Boggiano][33], and a big thanks for Composer
- People at [Liip, their blog and projects][34] is very informative
- People at [KnpLabs, their contributions, Behat, and other projects][35] are
  also very informative

[0]: http://www.codinghorror.com/blog/2012/06/the-php-singularity.html
[1]:
  http://fabien.potencier.org/article/64/php-is-much-better-than-you-think#comments
[2]: http://fabien.potencier.org/
[3]: /blog/tag/geranium
[4]: /blog/2010/09/lancement-de-lannee-2011-pour-la-conference-confoo
[5]: http://confoo.ca/en/
[6]: /blog/tag/devlab
[7]: https://www.w3schools.com/php/default.asp
[9]: https://en.wikipedia.org/wiki/Single_responsibility_principle
[10]:
  https://stackoverflow.com/questions/9467828/which-one-to-go-yii-or-symfony/11621120#answer-11621120
[11]: http://twig.sensiolabs.org/
[12]:
  https://symfony.com/doc/current/components/dependency_injection/introduction.html
[13]: http://phemto.sourceforge.net/
[14]: https://symfony.com/doc/current/components/class_loader.html
[15]: https://symfony.com/doc/current/book/translation.html
[16]: https://github.com/daylerees/laravel-bob
[17]: http://cukes.info/
[18]: http://rspec.info/
[19]: http://behat.org/
[20]: http://www.php.net/manual/en/migration54.changes.php
[21]: http://www.phptherightway.com/
[22]: https://github.com/codeguy/php-the-right-way
[23]: http://www.php-fig.org/
[24]: https://symfony.com/
[25]: http://www.doctrine-project.org/en/latest/tutorials/getting-started.html
[26]:
  http://docs.doctrine-project.org/en/latest/reference/inheritance-mapping.html
[27]: http://schlitt.info/opensource/blog.html
[28]: http://schlitt.info/opensource/blog/0709_defining_a_framework.html
[29]: http://www.jwage.com/
[30]: https://thephp.cc/portfolio
[31]: https://github.com/stof
[32]: https://github.com/schmittjoh
[33]: http://nelm.io/jordi
[34]: http://rocketlab.liip.ch/
[35]: http://knplabs.com/
