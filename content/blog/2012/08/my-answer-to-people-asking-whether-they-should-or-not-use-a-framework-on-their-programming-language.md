---
locale: fr-CA
title: >-
  My answer to People asking whether they should or not use a framework on their
  programming language
canonical: >-
  https://renoirboulanger.com/blog/2012/08/my-answer-to-people-asking-whether-they-should-or-not-use-a-framework-on-their-programming-language/
status: publish
revising: true
createdAt: '2012-08-13'
updatedAt: '2013-03-27'
tags: []
categories: []
webarchiveSnapshots:
- key: ds-nih
  orig: http://iamproblematic.com/getting-over-the-not-invented-here-mentality/
  snapshots:
  - https://web.archive.org/web/20120415125801/http://iamproblematic.com:80/getting-over-the-not-invented-here-mentality/
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

I read an article by **Derek Strobe** on [his blog, discussing the **Not Invented Here**][ds-nih] mentality (the blog is no longer online) and I actually think the same.


<!--#TODO-inline-edit Renoir de 2024-->
<rb-notice-box variant="info" class="my-5">
  <span slot="header">

[Renoir from <time datetime="2024-10">2024</time>](/blog/2024/10/refonte-majeure-de-mon-site-web)

  </span>

The link to **Derek Strobe**’s blog is no longer available, and [WebArchive link only retrieves partial][ds-nih]. But I also did write about it in a few articles too.

</rb-notice-box>

<!--#TODO-app-twitter-quote but for another blog post-->
<!--#TODO-inline-edit-->
<!--

/blog/2012/07/choosing-a-framework-how-i-personally-define-what-is-hot-about-them-an-evaluation-process
/blog/2012/11/why-would-i-not-use-my-own-framework-and-how-i-sell-usage-of-symfony2-and-other-current-php-5-3-goodies-to-my-client

Derek seem to have moved to: https://cv.stobbe.dev/

Derek’s article excerpt
[[
Mar 07 2012

I’ve gotta be honest: for a long, long time, I was a Do It Yourself kind of guy. Not the, like, installing a new toilet in the bathroom or putting up sheetrock kind of DIY; I was the kind of DIY where, when I built a website, every component I used had to be written by me. There were a few reasons for it, not the least of which were my own hubris, and fear of the learning curve when acquiring ninja skills with new software.

Thankfully, I’m better now. I still like to write things that already exist elsewhere, just for the experience, but I leave the mission critical stuff to people who make it their jobs to write software libraries. In learning to bite the bullet (or RTFM, as the case may be), I’ve made a few discoveries. If you’re a DIY person too, then pay attention: this is for you. Here are a few reasons to leave behind the mentality that says “If I [or my company] didn’t write it, it’s not worth using”:
1. You’re in the business of writing application logic, not software libraries

Unless it’s you are actually getting paid to write an ORM or a logger or a request dispatcher or whatever, or unless you have the free time on your schedule and the passion to write one of those in your spare time, then you’re wasting your time. I said “time” three times in one sentence, because that’s pretty much what it amounts to. Every minute you spend writing a half-baked authentication system or what-have-you is a minute you could be spending developing features. You know, features? The things that will (hopefully) actually make you money? No? Oh well. That brings me to my second point…
2. Yours probably sucks

No offense, man. I’m sure that you’re a coding wizard and everything, but you are most likely working under deadline, just like the rest of us. The client or your boss or the devil or whomever you answer to for your productivity has expectations. Remember those features we talked about in the first point? That’s what they want to see, and you know it. They don’t really care about the user authentication system you wrote (“big deal, every site has one of those”), or the logger you so cleverly scripted that will shoot you an email every time someone farts too loud and the server goes down for the fifth time today. They want to see features, the cool flashy stuff that they can wow their golf buddies with.

The point of that outburst was that, because the people in charge of signing your pay checks want to see cool features, you don’t have the time you need to spend on writing stuff that’s not mission critical if you’re rolling your own. Check out this Stack Overflow post called “The Definitive Guide to Forms based Website Authentication.” It currently has eight sections, just about the best practices for providing users a way to log in to your website (extra credit if you read through it and figure out how many points your banking institution’s website is violating). Do you really have all that time to burn making sure you get it right, when you really need to be finishing up the feature that lets the CEO simultaneously turn this month’s sales numbers into a PDF and email it out to all those golf buddies we were talking about earlier so he can brag about profit margins all the way through the back nine? Didn’t think so.
3. Knowledge is power

Unless you’re absolutely, positively, deliriously happy with your job (and maybe even then), you’re probably not going to be at the same place for the rest of your life. Things happen. And having skills in industry-standard technology (whether it’s a framework, a collection of libraries, or whatever) looks a lot better on a resume than vague references to a bunch of projects that you’re too ashamed to showcase because you spent all your time and energy in the wrong places.

I could keep going, but those are the Big Ones. That’s not to say that there’s never a time or a place where writing your own solution is a good idea, but at least take it into consideration.
]]

-->

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

[ds-nih]: https://web.archive.org/web/20120415125801/http://iamproblematic.com:80/getting-over-the-not-invented-here-mentality/
