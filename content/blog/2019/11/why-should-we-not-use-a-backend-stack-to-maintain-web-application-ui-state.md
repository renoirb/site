---
locale: en-CA
title:
  Why shouldn't we use $backendLanguageName to manage a Web Application UI state
description:
  Why should we avoid using a backend stack and pass HTML strings mingled with
  attempts at handling Web Application state
date: &createdAt '2019-11-04T20:55:06-04:00'
createdAt: *createdAt
categories:
  - Research Summary
tags:
  - front-end
  - architecture
  - favourites
---

While exchanging with other programmers from all horizons I often had backend
developers eventually wanting to make things better by (taking back) controlling
all aspects on the server side and leave the FrontEnd developers to "make it
prettier".

It happened a few times already, sometimes at a conference, other times at a new
company I’ve just joined. This conversation happened often enough that I had
been collecting an argumentary in my personal wiki about it.

The rationale to have a solid foundation in programming and serious tooling for
all possible business cases an application would have to handle _is a reasonable
assumption_. Since the backend team will have to support the features, why not
try finding a way to only let FrontEnd developers "make things prettier".

But making a business decision _only_ with that as a reason, _hire extensively_
and "_bet_" only on that strategy might be costly.

Because this —returning HTML over HTTP— _isn’t the first time_ that question
happened. (If you want one more proof,
[have a look at this page on MDN](https://developer.mozilla.org/en-US/docs/Archive/Web/Server-Side_JavaScript/Walkthrough))

## Context

Ideally, a web application should be loading fast, respond quickly to
interactions, and display things consistently. This definition should fit any
well-behaving and consistent UI.

Consistency is key, when we're on an building's elevator, when we push a floor
number, we expect to have the number light up. It's a behavior we’re used to.
The feedback is immediate, and is consistent.

In a Web Browser, an equivalent feedback would be done by adding a styling class
name.

We would either change URL in the address bar, and have the button be aligned at
the same place and look different.

Before we had modern FrontEnd technologies, clicking a link would involve
"navigating" to another address, throwing everything that was already loaded,
and have a server completely regenerate HTML.

Back around 2004 with Google Maps, Google shown that it was possible to use the
web browser without that flow. The idea of changing things without reloading was
colloquiallly referred to as `AJAX` (Asynchronous JavaScript And XML). Nowadays
we have actual asycnronous code and coroutines, but the _Asynchronous_ was
referring to the fact that the page was loaded, and we want to load more data
without throwing everything.

Making web applications is a craft that many others extensively documented. If
you look at other successful web application maintainers and what they've
documented in the last decades, you’ll also see that they did also use a
server-side programming language to regenerate HTML.

You’ll also see attempts to make an hybrid of the two. Server-Side, then
JavaScript sugar.

And because we want to make things efficient, and have a manageable code base
surface to maintain, eventually some thought: how about writing JavaScript, and
use the same code client and server-side.

## Learn from experience of others

In order to make an informed choice, I wanted to take a few well made web
applications and see what they’ve learned. There’s many articles and talks about
that subject.

I’ve limited to companies who has a good reputation for their well-made web
applications.

- **Google**
- **Facebook**
- **Netflix**
- **Mozilla**
- **Yahoo!** (from back in 2005)

_Yahoo!_ from back in 2005 was among the most visible (from my own
recollection).

What do they have in common is that they all heavily relied on a backend stack
such as Ruby on Rails, Java or PHP.

JavaScript always had been the way of updating elements in the web browser, they
were all making the backend language to conditionally return JavaScript based on
backend logic.

Sometimes the logic was written at least twice. One in the server-side stack,
and partially validated in JavaScript.

And they’re relying more and more on letting the UI interactions to be client
side.

### Quality

- Error messages are meaningful, in your preferred language

- Labels, content, calendar and numeric notation are all in your preferred
  language

- Everything is aligned and consistent

- Validation rules are enforced consistently from both client and backend

- Have their UI in many human languages (or "locale", e.g. Canadian French),
  measuring system, Date formats, Number formats, etc.

### Sharing their experience

- **2009**
  [How Flickr did "feature flag" for Web Application](http://code.flickr.net/2009/12/02/flipping-out/)
  (Blog post, by _Flickr_, before it got purchased by Yahoo!, was regularly seen
  as a very well made Web Application. Also, the founder of Flickr is now
  co-founder of _Slack_)
- **2010**
  [Use Ruby On Rails to write maintainable UI](https://vimeo.com/15772341)
  (Talk, by _37 Signals_, Basecamp)
- **2011**
  [How GitHub uses GitHub to build software](https://zachholman.com/talk/how-github-uses-github-to-build-github/)
  (Talk slides)
- **2014**
  [Hacker Way: Rethinking Web App Development at Facebook](https://www.youtube.com/watch?v=nYkdrAPrdcw)
  (Talk, by _Facebook_)

<!--


---

The backend team has to be productive, so the FrontEnd.

---

What we are trying to achieve is to **deliver the most value to the business** by
letting the team **focus on its features** and delegate "_infrastructure code_" by
well maintained solutions.

The ideal set of tools should make everyone happy, the _Product Owners_ is happy by
seeing developers discussing about use-cases.
Team leads are happy because they can spend more time making other developers efficient.
Developers are happy because they can get help from the team lead, and can quickly find the authoritative piece of logic to re-use.

There are other ideals (see [The Unicorn Project, the **5 ideals**](https://www.infoq.com/articles/unicorn-project/)), they’re mostly caused by the culture.

In order to achieve this, we need to have the support from management and
product to trust the development team to deliver on the needs of the business.

Sometimes, technical solutions are made by comittee and politics. The people who made
decisions may or may not have any experience with the available solutions.

Politics and concensus is good, as good as avoiding to change important aspects
of the stack making the members of the teams in need to learn another new thing.

For this, we have to have confidence in the toolchain. The ideal scenario is the
last amount of dependencies, where each item doesn’t overlap each other. That
each solution is actively maintained by an active community, with an healthy
test suite, and is used by many other business applications.

---

Products that has such qualities must have shared their experience, and are
typically created by teams, their teams may sometimes be bigger, but there has
to be a way we could also achieve this level of quality

- Fast
- Easy to use (e.g. UI works like advertized, consistently)

Also, they’re the least likely to show broken page layout, escaped or unescaped
HTML strings where we expect text, or strange looking text for accented words.
e.g. brisÃ©es ("brisées" with unicode decoding badly handled)

---


## It’s how it was done before

In fact, it's been done like this for many years because managing how to
validate and persist data and how to give feedback to a user is complex;

To achieve this we sometimes have to write code for those tasks at many layers;

- In the Web Browser
- Just before persisting in the Database (i.e. before saving, are we sure we
  have all the info the way we want it to be saved, with the right format)
- Just before serving it to the user (i.e. should this user get that piece of
  info

To do this, we historically would write validation rules and objects that
handles relationships. Generating a form in HTML would be an extension of using
the aforementionned code.

Each "state" requires a full page load (i.e. navigate to another URL) and a full
Web Browser Request Response cycle.

Modern Web Application feels fast.Because they only communicate data.

Here are a few projects that had been done in the past to maintain renowned Web
Applications without JavaScript.

It's a valid idea, it was in fact done in the past at Google and Facebook, two
companies that contributes A LOT to the "Making Websites" (and Web Applications)
Open-Source tooling projects.

-->

## Maintainability

To make things maintainable, we might want to be able to see the same vocabulary
between the layers of the stack.

Before, writing JavaScript involved writing logic mingled with different ways to
either detect a feature or in a syntax that was supported. The code we were
writing was closely tied to the platform it would run on, and we would have to
manually detect if a feature was available or not.

When we were doing, we would also need to copy paste logic around in different
module loader systems so we could re-use between _Node.js_ server-side, and
_Microsoft Internet Explorer_, and _Google Chrome_.

It was tedious, and confusing.

Over the years, the language evolved at a more regular pace (Thanks ECMA TC-39),
and more and more tooling has been published so we have more than a set of
compromises
[The Good Parts](https://www.oreilly.com/library/view/javascript-the-good/9780596517748/)

Since 2015, ECMA released **ES6** (a.k.a. **ECMASCript 2015**), and in 2020
[Node.js 14 shipped with native ESM modules support](https://nodejs.medium.com/announcing-core-node-js-support-for-ecmascript-modules-c5d6dc29b663)
so we can write and load our code exactly the same way on both _modern web
browsers_ and _Node.js_.

Most of the progress made towards achieving maintainability are possible because
of tools like [Jest](https://jestjs.io/), [AVA](avajs.dev), builders like
[esbuild](https://github.com/evanw/esbuild), [Rollup](https://rollupjs.org/) and
[Babel](https://babeljs.io/), and [WebPack](https://webpack.js.org/) to allow us
to split code for different runtime targets (e.g. Client-Side, Server-Side, for
a specific browser, etc.)

With all this progress on the platform side, we have all the prerequisite to
make building a business application maintainable by:

- Maintaining the least amount of code (i.e. most of the code is our app
  business logic, and less boilerplate)

- Avoiding to having to write same logic more than once between stacks

- Avoiding to having to looping and stitching long strings of hopefully valid
  HTML, with many switch-case or if conditional blocks

- Systematically load code when needed, instead of everything at first load

- Allowing to use the same business logic, on tablet, phones, desktop app
  (Electron).

- Maintaining less markup and styling and truly achieve _Responsive_ AND
  _Adaptative UI_

## Can it ever be a good idea?

Writing Server-Side ONLY code (i.e. Java/PHP/Erlang/Scala/Python/Go/Rust/Ruby)
to manage HTML UI is not a bad idea in itself.

If you can have a service over HTTP that returns self-contained HTML markup,
that can be made compatible to be loaded onto a host page with conventions for
CSS and JavaScript.

Injecting such partial could then take the style of the host page, and respond
to events as soon as it’s injected.

The idea isn’t new, it's been done many times.

Before we wouldn’t deal with JavaScript, only HTML patterns where the classNames
and other HTML attributes would be as expected by the host JavaScript code.

A modern twist is called Micro-Frontends that pushed the boundary further.

### Open-Source UI specialized projects

#### Unrelated to JavaScript

- **HHVM** (_Facebook_, back around 2011) Rewrite of PHP, called Hip-Hop VM

  - [**Hack**](https://www.facebook.com/notes/facebook-engineering/the-hiphop-virtual-machine/10150415177928920/Hack):
    Extended PHP Language for Strict typing as part of HHVM parsing engine
  - **XHP**: Extended PHP Language for supporting XML notation within language
    (i.e. NOT as strings) for data model validation, and reduce cross-site
    attack vectors (better input filtering, harder to pass JavaScript code
    through unintended places)

#### Another syntax, into JavaScript

- **CoffeeScript**

- **ReasonML**

- [**Clojure**](https://clojure.org/) LISP syntax, running inside a Java VM,
  receive server-rendered HTML

- **Elixir**

- **Flow** (_Facbook_) where we add comments in JavaScript files, and declare
  typings, and provides tooling to validate code based on hints. We have to
  adjust the parser to make `*.js` files to support otherwise syntax.

  - React is written using _Flow_, so was Vue.js v2 before its v3 rewrite in
    _TypeScript_

- **TypeScript** (_Microsoft_) A Superset of ECMAScript. Write code in `*.ts`
  files, modern ECMAScript plus notations for typings. The typings notations are
  similar to Flow’s, but at least they’re in files with their own extension.

  - [Vue.js v3 is completely rewritten](https://github.com/vuejs/vue-next) in
    TypeScript

#### Another language, manage server-side and JavaScript client-side

- [**Dart**](https://dart.dev/web) (_Google_) and
  [Flutter](https://api.flutter.dev/index.html) Write strictly typed code,
  compiles to JavaScript

- [**GWT**](https://en.wikipedia.org/wiki/Google_Web_Toolkit) (_Google_, circa
  2002, when they created GMail) Write Java compatible code, return consistent
  HTML

  - See
    [an example of a Date Picker](http://samples.gwtproject.org/samples/Showcase/Showcase.html#!CwDatePicker)

- [**Vaadin**](https://vaadin.com/)
  - See
    [an example of a Date Picker](https://vaadin.com/components/vaadin-date-picker/java-examples)

#### JavaScript

Generating UI in JavaScript only had been done in the past too

- [**YUI**](https://yui.github.io/yui2/docs/yui_2.9.0_full/) (Yahoo!, 2005).
  This one was among the first JavaScript heavy UI libraries that managed
  completely HTML and state.

  - See an
    [example of a Date Picker](https://yui.github.io/yui2/docs/yui_2.9.0_full/calendar/index.html)

- [**Ext.js**](https://docs.sencha.com/extjs/4.0.0/)

  - See an
    [example of a Date Picker](https://docs.sencha.com/extjs/4.0.0/#!/api/Ext.form.field.Date)

- [**Backbone.js**](https://backbonejs.org/), with or without
  [Marionette.js](https://marionettejs.com/)

- [**Ember.js**](https://emberjs.com/) which brought on a cool innovation of [a
  fully speced navigatable data API with `{JSON:API}`][jsonapi-spec] with
  [ember-data _JSONAPISerializer_](https://api.emberjs.com/ember-data/release/classes/JSONAPISerializer)

While looking those projects, and others you might find on the web, you will
notice is that most of those projects are less and less popular, and the
companies sponsoring them now would talk about frameworks such as Vue.js,
Svelte, React with their new [_Fiber_][react-fiber] internals, or Angular with
[_Ivy_][angular-ivy].

As it’s been observed in 2019 after a few years into the evolution of React,
Angular.js being deprecated by Angular to full usage of TypeScript, RxJS, NgRX,
etc. we see less and less non ECMAScript/JavaScript frameworks.

[jsonapi-spec]: https://jsonapi.org/
[angular-ivy]:
  https://blog.angular.io/a-plan-for-version-8-0-and-ivy-b3318dfc19f7
  'A plan for version 8.0 and Ivy'
[react-fiber]: https://github.com/acdlite/react-fiber-architecture

## Nowadays

Nowdays, with the craze of 'micro-services', most companies typically consumes
their APIs in some format and handles their UI in JavaScript

[angular-zonejs]:
  https://github.com/angular/angular/tree/master/packages/zone.js
  'Implements Zones for JavaScript, inspired by Dart.'
[angular]: https://angular.io/
[angular-js]:
  https://angularjs.org/
  'Angular.js, the initial implementation of Angular'
[polymer]: https://www.polymer-project.org/
[web-components-mdn]:
  https://developer.mozilla.org/en-US/docs/Web/Web_Components
[web-components-org]: https://www.webcomponents.org/
[graphql-home]: https://graphql.org/
[graphql-spec]: http://spec.graphql.org/ 'GraphQL Specicification'

- **Google**

  - [**Angular.js**][angular-js], since 2012, and is also getting phased out for
    [_Angular_][angular]
  - [**Angular**][angular] a rewrite in TypeScript with heavy use of RxJS, NgRX
    and other leveraging other utilities such as [Zone.js][angular-zonejs].
    Which is a port from Dart for handling updating parts of the UI.
  - [**Polymer**][polymer] to maintain HTML CustomElements (a.k.a. [_Web
    Component_][web-components-mdn]), they're using it internally namely for
    Google Chrome UI

- **Mozilla**

  - [**Brick**](https://github.com/mozbrick/brick) (archived since 2014) "(...)
    a collection of UI components designed for the easy and quick building of
    web application UIs. Brick components are built using the [Web Components
    standard][web-components-mdn] to allow developers to describe the UI of
    their app using the HTML syntax they already know."

- **Facebook**

  - **React.js**
  - **React's JSX** syntax is heavily inspired by their previous HHVM/XHP work
  - https://www.facebook.com/notes/facebook-engineering/xhp-a-new-way-to-write-php/294003943919/
  - https://reactjs.org/docs/introducing-jsx.html
  - [**GraphQL**][graphql-home], a [fully specified][graphql-spec] syntax for
    describing how to request and retrieve from an HTTP API
  - [More open source projects by _Facebook_](https://opensource.facebook.com/)

- **LinkedIn** (Microsoft)

  - Contributors to Ember.js
  - Probably among the contributors to [`{JSON:API}`][jsonapi-spec]
  - [More open source projects by _LinkedIn_](https://engineering.linkedin.com/blog/topic/open-source)

- **Netflix**
  - Contributors to Ember.js
  - Probably among the contributors to [`{JSON:API}`][jsonapi-spec]
  - Created [**Falcor**](https://netflix.github.io/falcor/) and seem to have
    switched to [GraphQL][graphql-home] too
    ([Our learnings from adopting GraphQL](https://netflixtechblog.com/our-learnings-from-adopting-graphql-f099de39ae5f))
    "(...) _We also considered Falcor as a possible solution since it has
    delivered great results at Netflix in many core use cases and has a ton of
    usage, but a robust GraphQL ecosystem and powerful third party tooling made
    GraphQL the better option for our use case_"
  - See also
    [_GraphQL vs. Falcor_](https://blog.apollographql.com/graphql-vs-falcor-4f1e9cbf7504)
  - [More open source projects by _Netflix_](https://netflix.github.io/)

## Requirements

### Technical requirements

- Describe UI components (a list of inputs, with how to validate, and what data
  to use)
- Describe what View to show for a given UI (User-Agent) Router
- Describe how to get data and how to walk through it to get a result
- Ability progressively roll-out code feature based on what's configured for a
  given deployment (or client), and what's currently available

### Quality indicators

- Has unit-tests and a community for all layers: UI Components, Data Abstraction
  Layer, Data Access Layer, etc.
- Is actively maintained
- Has documentation and tutorials available that covers our usage-scenarios
- We can write isomorphic code (i.e. write code once, and can be run with same
  result from both Client and Server-Side)
- We can toggle off expensive parts of application and the UI follows

### Objectives

- Maintaining a Web Application with Domain Specific data, we're not an Open
  Source project maintenance team (i.e. use what's there, not write our own.)
- Write a piece of logic once, favorize code re-use
- Write piece of code with testing in isolation easily accessible beside the
  code
- We can consistently render UI, without too much boilerplate code and LEAST
  possible vectors where to do the same thing differently

## Isomorphism?

How do you tell if what's picked actually _is_ "isomorphic".

- _Nuxt.js_ (and React’s _Next.js_) allows telling in an accessible way what UI
  to show for an URL, and that if we do a "full page reload", the HTML sent to
  the Web Browser is fully rendered, yet if we change page, only what's changed
  gets updated
- _Axios_ (or another HTTP Client) allows us to tell `GET /foo/bar` and
  regardless of where the code is run (Client or Server-Side), configuration
  variations will already be taken into account
- Koa supports modern JavaScript as run time (including asynchronous code), its
  newer code-base simplify importing our "modern code" -- less boilerplate and
  tweaks and will look the same as how we'll use in Nuxt/Vue code

## But Why can't we use a Backend to Generate UI?

Because, in the end, once we’ve received the initial HTML payload, any actions
will be needed to be made visible in the UI.

Those changes to be visible will inevitably be written using JavaScript.

Solving the problem of affecting UI in a Web Browser is still a very active
subject, and there are many ideologies.

A trend seem to be clear, having a backend language write HTML strings and
whisfully stick jQuery scripts together is no longer viable.

It is now frowned upon, because it makes it hard to maintain.

If you re-consider, modern JavaScript with React,Vue.js,Angular,Svelte is an
iteration after what’s been known as (in no particular order):

[historical-jquery-dom-mess]:
  https://www.youtube.com/watch?v=dgI52y27O_I
  'John Resig the DOM is a mess'
[historical-progressive-enhancement]:
  http://www.hesketh.com/progressive_enhancement_and_the_future_of_web_design.html
  'by Nick Finck and Steve Champeon'

- [_Progressive Enhancement_](/glossary/progressive-enhancement) and/or
  _Graceful Degradation_
- _Object-Oriented CSS_
- _Mobile Design_
- _Responsive Design_
- _Reactive Programming_
- _Progressive Web Applications_

Continuing on what's been elaborated earlier in this document;

We can.

After-all, an HTML form, when we click "submit" button, WILL ALWAYS work.

Showing images, link, and so on are natively supported since the beginning of
the Web.

There is a thing we call
["JavaScript fatigue"](https://hackernoon.com/how-it-feels-to-learn-javascript-in-2016-d3a717dd577f)
([\[2\]](https://dev.to/winduptoy/a-javascript-free-frontend-2d3e]))

But nowadays, the argumentary is typically about how it becomes quickly
cluttered.

Which is very different than back in 2015 (before ECMAScript 5), when JavaScript
ecosystem was too brittle.
