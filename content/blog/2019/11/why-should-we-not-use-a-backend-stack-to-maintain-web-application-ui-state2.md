---
title:
  Why We Shouldn't Use a Backend Language to Manage a Web Application UI State
description:
  The drawbacks of using a backend stack to manage a web application's UI state
  and the benefits of using modern frontend technologies.
date: 2019-11-04T20:55:06-04:00
categories:
  - Research Summary
tags:
  - front-end
  - architecture
  - favourites
---

Have you ever encountered backend developers who wanted to take control of all
aspects of a web application's UI on the server side, leaving the frontend
developers to "make it prettier"? This idea is based on the assumption that a
solid foundation in programming and serious tooling for all possible business
cases is reasonable. However, making a business decision based solely on this
assumption and hiring extensively to implement it may be costly.

Returning HTML over HTTP, as a way to manage a web application's UI state, is
not a new concept. In the past, clicking a link in a web browser would involve
"navigating" to another address, throwing everything that was already loaded,
and having a server completely regenerate HTML. However, modern frontend
technologies allow for a more efficient and manageable approach.

A well-behaving and consistent UI should load fast, respond quickly to
interactions, and display things consistently. This is achieved through
consistency in feedback, such as having a button look different when pushed. In
a web browser, this feedback is often given by adding a styling class name.

Before modern frontend technologies, web applications relied on server-side
programming languages to regenerate HTML. However, this approach can lead to
inefficiencies and a larger codebase to maintain.

Many well-made web applications, such as those from Google, Facebook, Netflix,
Mozilla, and Yahoo!, have relied heavily on a backend stack such as Ruby on
Rails, Java, or PHP. JavaScript has been used to update elements in the web
browser, with the backend language conditionally returning JavaScript based on
backend logic.

Using the same code client and server-side can help make things more efficient
and the codebase more manageable. However, it is important to consider the
quality of the user experience, including error messages, labels, content,
validation rules, and language support.

Many successful web application maintainers have documented their experiences,
and it is important to learn from them. Writing JavaScript has become more
maintainable with the evolution of the language and the availability of tools
like Jest, AVA, builders like esbuild, Rollup, and Babel, and WebPack.

Writing server-side only code to manage HTML UI is not a bad idea in itself, but
it is important to consider the benefits of using modern frontend technologies
for a more efficient and maintainable approach.
