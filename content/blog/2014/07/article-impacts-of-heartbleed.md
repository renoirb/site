---
locale: en-CA
title: Answers I gave for an article  about the impacts of Heartbleed
canonical: https://renoirboulanger.com/blog/2014/07/article-impacts-of-heartbleed/
status: publish
revising: true
images: true
created: '2014-07-04'
updated: '2014-07-04'
tags:
  - favourites
  - published
  - securite
categories:
  - technologies
excerpt: >-
  Heartbleed was a tremendous threat because it hit at the epicenter of the
  Internet infrastructure and proven true every sysadmin worst nightmare. We
  heard about Heartbleed for a while. Some time ago, I had been asked to answer
  a few questions for an article for Dell.com Tech Page One blog, the following
  is the answers I gave.
description: Answers I gave for an article about the impacts of Heartbleed
---

<p>Last spring, I had been invited to answer questions for an article about Heartbleed. It was an invitation extended by my friends at <a href="http://www.saltstack.com/">SaltStack</a>. Since I use extensively automated deployment techniques with Salt Stack, they thought i’d have things to say.</p>

<p>I accepted to answer the questions on my personal time as the DevOps lead of <a href="http://www.webplatform.org/">WebPlatform.org</a>, rather than directly as a <a href="http://www.w3.org/People/">W3C</a> team member. And that, even though I had big help from my manager, <a href="http://www.w3.org/People/#schepers">Doug Schepers</a>, and a few colleagues from the team. Their help was much useful to review and add stats to my arguments.</p>

<p>The article has been published on <a href="http://techpageone.dell.com/technology/protecting-against-cyber-warfare/">Dell.com's Tech Page One blog</a> but only quotes a few pieces of my original contribution. Here is the full answers I gave to the questions.</p>

<h3>What made Heartbleed such a tremendous threat?</h3>

<p>It hit more than the epicenter of our whole Internet infrastructure, it proven true every sysadmin worst nightmare and on top of that, it impacted everybody.</p>

<p>OpenSSL is so widely used (estimated 2/3 of the web) that many organizations were impacted. This vulnerability has been introduced as a programming mistake for about 2 years. What gives the chills is that since the person who is exploiting the fail do not need to be the "man in the middle" nor need to gain terminal access to the servers, there are no traces left behind.  We therefore had no idea how much it was used and by who.</p>

<p>It’s important to remember that the attacker couldn’t know what data he would get either, or if he would get anything interesting at all. And if the "good guys" didn’t know about heartbleed for so long, probably not many "bad guys" did, either.</p>

<p>In consequence, the world had to make a major effort to update a lot of software and people to replace many passwords, but the major impact is probably more psychological: we don't know what was stolen and we don't know if there is another "heartbleed" hidden in our servers.</p>

<p>On the bright side, the old advice we give to end users: change your password often, is still valid. This was a nuisance, for sure, but at least heartbleed didn't change anything there.</p>

<h3>Is there anything about the current computing landscape that made the threat greater than it might have been in the past?</h3>

<p>The time it takes to gather infrormation through such vulnerability and the set of tools available today has increased dramatically.  Ther are network port scanners, for instance, that can report with high 90-percent accuracy in less than 10 minutes.</p>

<p>When attackers gets insight of a vulnerability, its not hard to get the information they are searching for. In the case of heartbleed, it was as simple as searching for machines listening on TCP port 443 and keep a
list of servers using a given version of OpenSSL that is known to have the mistake. Not something hard to do at all for the attackers.</p>

<p>Todays' computing landscape has better tools, but so the tools to crack them. A better solution is to strenghten the infrastructure and educate end users. Otherwise, the chain will remain as strong as its weakest link.</p>

<p>If there is a thing that our society should do more is to continue teaching sane privacy techniques such as strong and varied passwords.</p>

<p>Hopefully we’ll get to a point where companies would rely on "harder to gain" information than you mother maiden name or your date of birth.</p>

<h3>What were the most important things that companies needed to do in the face of Heartbleed?</h3>

<p>Companies that doesn’t maintain adequate server management techniques and tools had a lot of (manual) things to do.</p>

<p>The priority was to upgrade to the patched version all affected parts of the infrastructure, ensure that all system that stores passwords gets new passwords as soon as possible.</p>

<p>Of course, the issue had to be fixed as quickly as possible, and without interrupting the services... or belating deliverables that they were already working on.</p>

<p>Therefore, one of the most appreciated thing a system admin has is a way to manage his fleed of servers remotely. In the old days, we only had SSH —hopefully that one doesn’t have its own "heartbleed" problem too— but we now have tools to execute remotely such as Ansible and Salt stack that can help us quickly get the an accurate picture of the whole infrastructure.</p>

<h3>Could a Heartbleed-level/style hack happen again?</h3>

<p>Before heartbleed, I was an optimistic person. Besides giving chills to everybody, what heartbleed did is a loud "wake up" call.</p>

<p>It is only a matter of time before we learn something else to arise. Computer security is still based on "hard enough to crack" secrets and an accepted set of annoyances. This is where education and better automation tools are of great help. It’d ease the justification of existence, maintenance, and deployment of such measures to everybody.</p>

<h3>How can companies best protect themselves and their customers moving forward?</h3>

<p>Education, and automation; in that order. Its better to have a good answer —ideally quickly— than a quick wrong answer.</p>

<p>I hope to see training about security practices more often. Its not the lack of training that is the problem, but the people to take time to learn the techniques. Organizations such as the OWASP, —a group who teaches common security mistakes to web developers— is educating security vulnerabilities.</p>

<p>There are dozens of other potential oops. One of the most common type of security breach is what we call "SQL injection". That’s yet another programming mistake that sends user input directly to the database server without filtering.</p>

<p><img src="/wp-content/uploads/2014/07/exploits_of_a_mom.png" alt="img" title="XKCD #327: Exploits of a mom" /></p>

<p>In the case of Heartbleed, it was a similar kind of programming error. A way to achieve peace of mind includes among others; Testing, proof techniques, "sandboxing" (protected memory), making software Open Source all helps to catch those errors.</p>

<p>While its still a hard problem to find the errors in all that code, using those techniques has the merit to have more than a limited set of eyes on the code.</p>

<p>But all security can be completely overcome by a small human mistake answering private information to the wrong person. Education about how to validate and detect the real collaborator to the potential thief is another challenge in itself.</p>

<p>Many people are talking about it for ages. The recent events makes their teachings more relevant than ever.</p>

<h3>Credits</h3>

<p>Heartbleed graphic: Codenomicon
Comic strip: <a href="http://xkcd.com/327/">XKCD #327</a></p>