---
title:
  Managing Email Aliases with ProtonMail and SimpleLogin to sort automatically
  into inbox folders based local part
locale: en-CA
date: &createdAt '2024-03-03T20:55:06-04:00'
createdAt: *createdAt
preamble:
  disable: true
  text: ' '
categories:
  - Organisation
tags:
  - favourites
---

I've been using ProtonMail for my email needs for quite some time now. Recently,
I stumbled upon an intriguing feature: the ability to use our own domain names
for email aliases, not just those provided by SimpleLogin and Proton. This
discovery prompted me to make the switch, and I haven't looked back since.

At first I liked the idea of email aliases but would not consider using anything
and have recovery lost over time because I didn't own the domain name. Don’t get
me wrong, SimpleLogin aliases are great and their best use-case is for privacy,
to hide your real email. An account alias is a bit different.

Let's backtrack a bit. Over the years, we've witnessed numerous breaches of
security. With LastPass’ getting all their vaults backups copied by attackers,
it was a wake up call for me to review my accounts. If you've had an email
address for more than a decade, chances are it's already on multiple lists
floating around the internet. One effective strategy to combat identity theft is
to adopt strong passwords managed by a reliable password manager. However, when
it comes to safeguarding against identity theft and unsolicited emails (spam),
what else can we do?

Enter the concept of email aliases. By having a different email address for
every service or provider we interact with, we can effectively manage our online
presence and minimize the risk of spam. With services like ProtonMail and
SimpleLogin, creating aliases is quick and easy. This way, if a service or alias
starts receiving spam, we can simply disable it and generate a new one.

As part of my alias strategy, I've adopted the Proton Pass format, which allows
for a random component alongside a designated name for the purpose. For example,
`<service>.<something random>@alias.example.org`. To streamline the organization
of these aliases, I've developed a Sieve script that automatically sorts
incoming emails into appropriate folders.

```sieve
require ["include", "environment", "variables", "relational", "comparator-i;ascii-numeric", "spamtest"];

require "envelope";
require "fileinto";
require "variables";
require "regex";

# Copy-Pasta BEGIN
# This is recommended to be included in any custom sieve within Proton
# Generated: Do not run this script on spam messages
if allof (environment :matches "vnd.proton.spam-threshold" "*", spamtest :value "ge" :comparator "i;ascii-numeric" "${1}") {
    return;
}
# Copy-Pasta END

if address :matches :domain ["to", "cc", "bcc"] "alias.example.org" {
  if address :matches :localpart "to" "*.*" {
    # Make sure label Caught-by-sieve-alias exists
    fileinto "Caught-by-sieve-alias";
    set "local_part" "${1}";
    set :lower "local_part" "${local_part}";
    set "pigeon_hole" "${local_part}";
    # Create the mailbox if it doesn't exist and file the email into it
    # Make sure folder Boxes exists
    fileinto "Boxes";
    # Proton doesn’t support fileinto :create, instead give a parent, and tentatively try in pigeonhole
    fileinto "Boxes/${pigeon_hole}";
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
