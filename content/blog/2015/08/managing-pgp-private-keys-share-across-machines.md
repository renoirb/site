---
locale: en-CA
title: Managing my PGP/OpenPGP keys and share across many machines
canonical: https://renoirboulanger.com/blog/2015/08/managing-pgp-private-keys-share-across-machines/
date: &createdAt '2015-08-06T13:44:11-04:00'
createdAt: *createdAt
preamble:
  disable: true
  text: ' '
categories:
  - Organization
tags:
  - vulgarization
  - operations
  - security
  - webplatform
keywords:
  - PGP
  - subkey
  - OpenPGP
---

With [my previous position just finished][0], I'm cleaning up my credential data
I've stored on my computer. While doing so, I needed to update my PGP keys and I
learned something that I'm glad existed.

When you use PGP to encrypt and/or sign your messages, you can only read
messages sent to you from the machine you have the private key. Right?

The obvious solution would be to copy that private key everywhere; You mobile,
servers, laptops.

WRONG!

The problem is that security experts would say that you shouldn't do that unless
you are certain things are "safe". But what is safe anyway, once somebody else,
or a zombie process, accessed your machine, it's possible somebody gained access
to your keys.

OpenPGP has a way to address this issue and it's called "SubKeys". Quoting
[gnupg.org manual][1]

> By default, a DSA master signing key and an ElGamal encryption subkey are
> generated when you create a new keypair. This is convenient, because the roles
> of the two keys are different, (...). The master signing key is used to make
> digital signatures (...). The encryption key is used only for decrypting
> encrypted documents sent to you.

This made me think I should make sure that I create a subkey, backup my main
identity, erase any traces of it from my main computer, then import the new
subkey.

That way, I would only need to use the main key to update the data on key
servers and to edit my keys.

A nice effect of this way of working is that we can revoke a subkey. Since
subkeys, signatures and revocation are part of the public key that you sync with
key on keyservers, you can make the compromised subkey invalid.

The compromised key will be able to decrypt messages sent for that private
subkey, provided the attacker can also gain access to where the messages are
stored, but you won't lose the most important part of the identity system.
You'll be able to create another subkey and keep the same identity.

I hope I got it right. If I'm wrong, don't hesitate to tell me and I'll adjust!

I got to read more about all of this, but I am glad I learned about subkeys.

Here are some notes I found that helped me understand this all better.

- [AlexCabal: Creating the perfect GPG keypair][2]
- [Debian Wiki: Using OpenPGP subkeys][3]
- [GPG quick cheat sheet][4]
- [SuperUser: How to manage GPG keys across multiple systems][5]
- [OpenPGP best practices][6]

[0]: /blog/2015/07/leaving-w3c/
[1]: https://www.gnupg.org/gph/en/manual.html#AEN526
[2]: https://alexcabal.com/creating-the-perfect-gpg-keypair/
[3]: https://wiki.debian.org/Subkeys
[4]: http://irtfweb.ifa.hawaii.edu/~lockhart/gpg/
[5]:
  https://superuser.com/questions/466396/how-to-manage-gpg-keys-across-multiple-systems
[6]: https://help.riseup.net/en/security/message-security/openpgp/best-practices
