---
title: Answers I gave for an article  about the impacts of Heartbleed
locale: en-CA
created: 2014-07-04
updated: 2014-07-04
canonical: https://renoirboulanger.com/blog/2014/07/article-impacts-of-heartbleed/
status: publish
revising: true
migrateLinks: true
migrateImages: true
categories:
  - technologies
tags:
  - favourites
  - published
  - securite
coverImage:
  src: ~/assets/content/blog/2014/07/heartbleed-247x300.png
  alt: Hand drawn shape of a heart on white background
  text: >-
    Logo representing [Heartbleed][wikipedia-heartbleed]. Awareness and media
    coverage of Heartbleed was unusually high for a software bug. **CVE**:
    [CVE-2014-0160][CVE] [CVE]:
    https://cve.mitre.org/cgi-bin/cvename.cgi?name=cve-2014-0160
    [wikipedia-heartbleed]: https://en.wikipedia.org/wiki/Heartbleed
webarchiveSnapshots:
  - key: saltstack
    orig: https://saltproject.io/
  - key: new-at-webplatform
    orig: https://webplatform.github.io/blog/2013/08/hi-my-name-s-renoir-ill-be-your-devops-for-the-web-platform/
  - key: w3c-staff-me
    orig: https://www.w3.org/staff/alumni/#renoir-boulanger
  - key: doug-schepers
    orig: https://www.w3.org/staff/alumni/#doug-schepers
  - key: dell-techpageone
    orig: http://techpageone.dell.com/technology/protecting-against-cyber-warfare/
    snapshots:
      - https://web.archive.org/web/20140708174445/http://techpageone.dell.com/technology/protecting-against-cyber-warfare/
description: Answers I gave for an article about the impacts of Heartbleed
excerpt: >-
  Heartbleed was a tremendous threat because it hit at the epicenter of the
  Internet infrastructure and proven true every sysadmin worst nightmare. We
  heard about Heartbleed for a while. Some time ago, I had been asked to answer
  a few questions for an article for Dell.com Tech Page One blog, the following
  is the answers I gave.
---

Last spring, I had been invited to answer questions for an article about
Heartbleed. It was an invitation extended by my friends at
[SaltStack][saltstack]. Since I use extensively automated deployment techniques
with Salt Stack, they thought i'd have things to say.

<!--#TODO-inline-edit SaltStack now bought by VMWare that got bought by Broadcom is now Salt Project -->
<!--#TODO-inline-edit WebPlatform is now finished, link to post about it -->

I accepted to answer the questions on my personal time as the [DevOps lead of
**WebPlatform.org**][new-at-webplatform], rather than directly as a [*W3C* team
member][w3c-staff-me]. And that, even though I had big help from my manager, [Doug
Schepers][doug-schepers], and a few colleagues from the team. Their help was
much useful to review and add stats to my arguments.

The article has been published on [Dell.com's Tech Page One
blog][dell-techpageone] but only quotes a few pieces of my original
contribution. Here is the full answers I gave to the questions.

### What made Heartbleed such a tremendous threat?

It hit more than the epicenter of our whole Internet infrastructure, it proven
true every sysadmin worst nightmare and on top of that, it impacted everybody.

<abbr>OpenSSL</abbr> is so widely used (estimated 2/3 of the web) that many
organizations were impacted. This vulnerability has been introduced as a
programming mistake for about 2 years. What gives the chills is that since the
person who is exploiting the fail do not need to be the "man in the middle" nor
need to gain terminal access to the servers, there are no traces left behind. We
therefore had no idea how much it was used and by who.

It's important to remember that the attacker couldn't know what data he would
get either, or if he would get anything interesting at all. And if the "good
guys" didn't know about heartbleed for so long, probably not many "bad guys"
did, either.

In consequence, the world had to make a major effort to update a lot of software
and people to replace many passwords, but the major impact is probably more
psychological: we don't know what was stolen and we don't know if there is
another "heartbleed" hidden in our servers.

On the bright side, the old advice we give to end users: change your password
often, is still valid. This was a nuisance, for sure, but at least heartbleed
didn't change anything there.

### Is there anything about the current computing landscape that made the threat greater than it might have been in the past?

The time it takes to gather infrormation through such vulnerability and the set
of tools available today has increased dramatically. Ther are network port
scanners, for instance, that can report with high 90-percent accuracy in less
than 10 minutes.

When attackers gets insight of a vulnerability, its not hard to get the
information they are searching for. In the case of heartbleed, it was as simple
as searching for machines listening on TCP port 443 and keep a list of servers
using a given version of OpenSSL that is known to have the mistake. Not
something hard to do at all for the attackers.

Todays' computing landscape has better tools, but so the tools to crack them. A
better solution is to strenghten the infrastructure and educate end users.
Otherwise, the chain will remain as strong as its weakest link.

If there is a thing that our society should do more is to continue teaching sane
privacy techniques such as strong and varied passwords.

Hopefully we'll get to a point where companies would rely on "harder to gain"
information than you mother maiden name or your date of birth.

### What were the most important things that companies needed to do in the face of Heartbleed?

Companies that doesn't maintain adequate server management techniques and tools
had a lot of (manual) things to do.

The priority was to upgrade to the patched version all affected parts of the
infrastructure, ensure that all system that stores passwords gets new passwords
as soon as possible.

Of course, the issue had to be fixed as quickly as possible, and without
interrupting the services... or belating deliverables that they were already
working on.

Therefore, one of the most appreciated thing a system admin has is a way to
manage his fleed of servers remotely. In the old days, we only had
<abbr title="Secure Shell or Secure Socket Shell">SSH</abb> —hopefully that one
doesn't have its own "heartbleed" problem too— but we now have tools to execute
remotely such as Ansible and Salt stack that can help us quickly get the an
accurate picture of the whole infrastructure.

### Could a Heartbleed-level/style hack happen again?

Before heartbleed, I was an optimistic person. Besides giving chills to
everybody, what heartbleed did is a loud "wake up" call.

It is only a matter of time before we learn something else to arise. Computer
security is still based on "hard enough to crack" secrets and an accepted set of
annoyances. This is where education and better automation tools are of great
help. It'd ease the justification of existence, maintenance, and deployment of
such measures to everybody.

### How can companies best protect themselves and their customers moving forward?

Education, and automation; in that order. Its better to have a good answer
—ideally quickly— than a quick wrong answer.

I hope to see training about security practices more often. Its not the lack of
training that is the problem, but the people to take time to learn the
techniques. Organizations such as the OWASP, —a group who teaches common
security mistakes to web developers— is educating security vulnerabilities.

There are dozens of other potential oops. One of the most common type of
security breach is what we call "SQL injection". That's yet another programming
mistake that sends user input directly to the database server without filtering.

<app-image src="~/assets/content/blog/2014/07/exploits_of_a_mom.png" figcaption=" ">

Credits: [**XKCD #327**: Exploits of a mom](https://xkcd.com/327/)

</app-image>

In the case of Heartbleed, it was a similar kind of programming error. A way to
achieve peace of mind includes among others; Testing, proof techniques,
"sandboxing" (protected memory), making software Open Source all helps to catch
those errors.

While its still a hard problem to find the errors in all that code, using those
techniques has the merit to have more than a limited set of eyes on the code.

But all security can be completely overcome by a small human mistake answering
private information to the wrong person. Education about how to validate and
detect the real collaborator to the potential thief is another challenge in
itself.

Many people are talking about it for ages. The recent events makes their
teachings more relevant than ever.

[saltstack]: https://saltproject.io/
[new-at-webplatform]:
  https://webplatform.github.io/blog/2013/08/hi-my-name-s-renoir-ill-be-your-devops-for-the-web-platform/
[w3c-staff-me]: https://www.w3.org/staff/alumni/#renoir-boulanger
[doug-schepers]: https://www.w3.org/staff/alumni/#doug-schepers
[dell-techpageone]:
  https://web.archive.org/web/20140708174445/http://techpageone.dell.com/technology/protecting-against-cyber-warfare/
