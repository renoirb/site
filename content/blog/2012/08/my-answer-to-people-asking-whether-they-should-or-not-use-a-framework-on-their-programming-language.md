---
locale: fr-CA
title: >-
  My answer to People asking whether they should or not use a framework on their
  programming language
canonical: >-
  https://renoirboulanger.com/blog/2012/08/my-answer-to-people-asking-whether-they-should-or-not-use-a-framework-on-their-programming-language/
status: publish
revising: true
created: '2012-08-13'
updated: '2013-03-27'
tags: []
categories: []
excerpt: >-
  On many social networks or in real life, some people still ask whether they
  should use a framework. If you are on a task that is about deploying a
  feature, your main concern, to my opinion, should be the functionnality.
---

I think that whatever we do when it is related to programming, the main objective is that the piece of functionality is to be used.   Unless of what you are doing is a tool for developers, or a programming language.  To my opinion, you should be concentrated in the functionality itself. Wathever the reason of your application, it is to be used. Otherwise it's waste. Isn't it?

This is not because it is NOT a good thing to do.  Just that there is a lot of good framework and libraries out there.  Why diluting the efforts when you could contribute and make something good with your own goodness.

Here is what I answered
<h3>The question</h3>
<strong>Am I the only one not beaing lover of PHP frameworks</strong>, asked in a PHP Developers group on LinkedIn.
<h3>My answer:</h3>
Flame wars. again.

I read an article by <a href="http://iamproblematic.com/getting-over-the-not-invented-here-mentality/">Derek Strobe on his blog, discussing  the Not Invented Here mentality</a> and I actually think the same.

Why not focussing on: getting the best you can get and/or not-reinvent-the-weel.

What is the important, build the developer tool, or build the fatures the client pays us for.

Framework or whatever programmer use, should only help us for at least those two:
<ol>
	<li>Have a standard that you are not the only one to know (documentation, and or can suck. sorry.).</li>
	<li>Do the features the client wants, with the thing that makes you shine most.</li>
	<li>Educate the client for the features, not the tool. You are the expert, that's why they hire us.</li>
</ol>
For me, framework or not. Building a framework for myself, it would suck. I prefer to abide by the framework structure to it's best recommended. And contribute to the documentation (or features) in return.

Using a framework, it's name, version or not use one. It all comes back to the structure the code you have to work with (from either source, legacy, framework, current)

If you have a method with more than 10 lines... it's procedural in a class. Like halloween.

A last thing about: I did my framework, and I still think it's the best.

Nobody will make me really believe that it's better than a more than dozen people contributing to quality and psr-0 compliant classes re-usable libraries.

That's what happened with Symfony 2 for me.

I dare you to to find a fully fledged structure **in PHP** that already implements: AOP, Event listeners, Namespaces (like Java import), Closures, Dependency Injection, and close to the root of the language.

One last thing, if you want to distribute:

You should also look at Composer. A way to <a href="http://nelm.io/blog/2011/12/composer-part-1-what-why/">distribute your package</a>.