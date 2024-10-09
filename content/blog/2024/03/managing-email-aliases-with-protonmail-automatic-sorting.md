---
title:
  Managing Email Aliases with ProtonMail and SimpleLogin to sort automatically
  into inbox folders based local part
locale: en-CA
created: 2024-03-03
updated: 2024-03-03
canonical: https://renoirboulanger.com/blog/2024/03/managing-email-aliases-with-protonmail-and-simplelogin-to-sort-automatically-into-inbox-folders-based-local-part/
status: publish
revising: false
categories:
  - projects
tags:
  - on-front-page
  - archiving
keywords:
  - ProtonPass
  - SimpleLogin
  - inbox
  - Sieve mail filtering language rule
description: Protect inbox against spam and phishing and sort automatically
preamble:
  disable: false
  text:
    Streamline your email management with automatic sorting for messages
    received through aliases. Learn how to efficiently organize your inbox for
    your Email aliases without manual intervention.
---

I’ve been using ProtonMail for my email needs for quite some time now. Recently,
I stumbled upon an intriguing feature: the ability to use our own domain names
for email aliases, not just those provided by SimpleLogin and Proton. This
discovery prompted me to make the switch, and I haven’t looked back since.

At first I liked the idea of email aliases but would not consider using anything
and have recovery lost over time because I didn’t own the domain name. Don’t get
me wrong, SimpleLogin aliases are great and their best use-case is for privacy,
to hide your real email. An account alias is a bit different.

Basically, instead of having an email address we pass everywhere. Create an email address specifically for each service, newsletter, product. You can keep your mail address, but the lesser it’s known, the less it’ll receive.

Let’s backtrack a bit. Over the years, we’ve witnessed numerous breaches of
security. Maybe you’re receiving many emails, some trying to pass as a service provider you’ve used, or another person.

For me, I receive a lot. Probably because I’ve used the same address for almost 2 decades already. With 2023’s LastPass breach who had  all their vaults backups copied by attackers,
it was a wake up call for me to review my accounts.

In any case, if you’ve had an email
address for more than a decade, chances are it’s already on multiple lists
floating around the Internet. One effective strategy to combat identity theft is
to adopt strong passwords managed by a reliable password manager. However, when
it comes to safeguarding against identity theft and unsolicited emails (spam),
what else can we do?

Enter the concept of email aliases. By having a different email address for
every service or provider we interact with, we can effectively manage our online
presence and minimize the risk of spam. With services like ProtonMail and
SimpleLogin, creating aliases is quick and easy. This way, if a service or alias
starts receiving spam, we can simply disable it and generate a new one.

As part of my alias strategy, I’ve adopted the Proton Pass format, which allows
for a random component alongside a designated name for the purpose. For example,
`<service>.<something random>@alias.example.org`. To streamline the organization
of these aliases, I’ve developed a Sieve script that automatically sorts
incoming emails into appropriate folders.



```
require "comparator-i;ascii-numeric";
require "envelope";
require "environment";
require "fileinto";
require "include";
require "regex";
require "relational";
require "spamtest";
require "variables";
require "variables";

# BEGIN Copy-Pasta: This is recommended to be included in any custom sieve within Proton
# Generated: Do not run this script on spam messages
if allof (environment :matches "vnd.proton.spam-threshold" "*", spamtest :value "ge" :comparator "i;ascii-numeric" "${1}") {
    return;
}
# END Copy-Pasta

# BEGIN: Pigeon Hole
if address :matches :domain ["to", "cc", "bcc"] "alias.example.org" {
  if address :matches :localpart "to" "*.*" {
    set "local_part" "${1}";
    set :lower "local_part" "${local_part}";
    set "pigeon_hole" "${local_part}";
    # Create the mailbox if it doesn't exist and file the email into it
    # Make sure Boxes folder exists
    fileinto "Boxes";
    fileinto "Boxes/${pigeon_hole}";
    # Proton ^^ doesn’t support `fileinto :create "Foo/Bar"`, instead give a parent, and tentatively try in pigeonhole
  }
}
```

This Sieve script effectively sorts incoming emails based on their alias
pattern. Emails with aliases like `amazon.aws111@alias.example.org` or
`amazon.audible222@alias.example.org` are grouped under the "Box/amazon"
directory, while emails like `ebay.333@alias.example.org` are filed directly
into the "Box" directory.

By automating this organization process, I can maintain a clutter-free inbox and
ensure that important emails are readily accessible.

[lessons-from-lastpass]:
  https://proton.me/blog/lessons-from-lastpass
  'Lessons from LastPass'
