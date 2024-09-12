---
locale: en-CA
title:
  Why We Shouldn’t Use a Backend Language to Manage a Web Application UI State
description:
  The drawbacks of using a backend stack to manage a web application’s UI state
  and the benefits of using modern frontend technologies.
date: &createdAt '2019-11-04T20:55:06-04:00'
createdAt: *createdAt
categories:
  - Research Summary
tags:
  - front-end
  - architecture
  - favourites
---

While discussing with programmers from various backgrounds, I have often
encountered backend developers who want to improve things by taking control of
all aspects of a web application’s UI on the server side, leaving the frontend
developers to "make it prettier". This conversation has happened a few times,
and I have collected an argumentary in my personal wiki about it.

The rationale behind having a solid foundation in programming and serious
tooling for all possible business cases that an application might have to handle
_is a reasonable assumption_. Since the backend team will have to support the
features, why not try to find a way to let frontend developers focus on making
things look good.

However, making a business decision based _solely_ on this reason, _hiring
extensively_ excluding front-end for its impression of being easier, and
_betting_ only on this strategy might be costly.

Because -returning HTML over HTTP- _isn’t the first time_ that question
happened.

This is not the first time this question has come up. For more proof,
[have a look at this page on MDN](https://developer.mozilla.org/en-US/docs/Archive/Web/Server-Side_JavaScript/Walkthrough).

## Context

Ideally, a web application should be fast, respond quickly to interactions, and
display things consistently. This definition should fit any well-behaving and
consistent UI.

Consistency is key. When we’re on an elevator, pushing a floor number leads to
immediate and consistent feedback. The number lights up. In a web browser, the
equivalent feedback would be done by adding a styling class name. As simple a
DOM mutation as possible, leveraging styling what it’s meant to do, and not
bloat the HTMLElement instance too much — As what I observed Backend programmers
into frontend land. An element isn’t necessarily fit to be a view "Controller"
from the days of MVC.

Before modern frontend technologies, clicking a link would involve "navigating"
to another address visible in the address bar, throwing everything that’s loaded,
and having a server completely regenerate HTML and load everything.
Often many parts of the page remained the same as they were. 

In 2004, Google Maps showed that it was possible to use the web browser without
this flow. The idea of changing things without reloading was colloquially
referred to as *AJAX* (Asynchronous JavaScript And XML). Nowadays, we have actual
asynchronous code and coroutines, but the **Asynchronous** was referring to the fact
that the page was loaded, and we want to load more data without throwing
everything.

Making web applications is a craft that many others have extensively documented.
If you look at successful web application maintainers and what they’ve
documented in the last decades, you’ll also see that they did also use a
server-side programming language to regenerate HTML.

## Learn from experience of others

In order to make an informed choice, I wanted to take a few well-made web
applications and see what they’ve learned. Here are a few examples of companies
with a good reputation for their well-made web applications:

- **Google**
- **Facebook**
- **Netflix**
- **Mozilla**
- **Yahoo!** (from back around 2008)

What do they have in common is that they all heavily relied on a backend stack
such as Ruby on Rails, Java or PHP.

## Quality

- Error messages are meaningful, in your preferred language — more than one language
- Labels, content, calendar and numeric notation are all in your preferred
  language
- Everything is aligned and consistent
- Validation rules are enforced consistently from both client and backend
- Have their UI in many human languages (or "locale", e.g. Canadian French),
  measuring system, Date formats, Number formats, etc.
- Information displayed is adapted to your locale, times adjusted for your Time Zone, dates and numbers well formatted too

## Sharing their experience

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
