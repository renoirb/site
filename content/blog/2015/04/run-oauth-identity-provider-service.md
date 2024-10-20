---
title: How to run your own OAuth Identity provider service
locale: en-CA
createdAt: 2015-04-13
updatedAt: 2023-02-18
canonical: https://renoirboulanger.com/blog/2015/04/run-oauth-identity-provider-service/
status: publish
revising: false
categories:
  - experiments
tags:
  - webplatform
  - security
keywords:
  - IdP
  - OAuth
  - Authorization
  - TLS
coverImage:
  src: ~/assets/content/blog/2015/03/Oauth_logo.png
  text: |
    [OAuth logo][oauth], see also [its current **Specification** document][oauth-spec]
    [oauth-spec]: https://oauth.net/2/
    [oauth]: https://oauth.net/
preamble:
  text: |
    All infrastructure related to WebPlatform Docs is shut down since 2016.
    Mentions about SSO and OAuth is still (2020) accessible from the archived [`webplatform.github.io/docs/WPD/Projects/SSO` wiki pages][wpd-projects-sso].
    [wpd-projects-sso]: https://webplatform.github.io/docs/WPD/Projects/SSO/
  figcaption: ' '
excerpt: >-
  Tutorials and explanation on how to be your own OAuth Identity Provider are
  very scarce and I’ve come to achieve this, this is an attempt to outline the
  basics.
---

Generally, we connect our application against a provider so it can share details
about a user. Most of the documentation you'll find online explains how to use
their service, but very few outlines concisely how it is if you want to be your
own provider and share state across applications you also manage.

Documentation would generally allow your third party app to let users use their
information from another site such as [Facebook][0], [GitHub][1], [Twitter][2],
etc.

But what if you wanted to share information across your web applications in a
similar way?

This post is a quick summary of how things works so you can get acquainted with
the basics.

## Whitelist


Big sites aren't generally one big code repository but a set of separate
components. A way to make each component to share your account details is most
possibly by making a difference between their own infrastructure and third
parties.

If your app were to use an external resource such as Google, the process would
end up making Google users to be asked if they really want to share their
information with you. This is why they would get a dialog similar to this.


While its OK to ask confirmation from a user if he wants to share his details
with an external site, in the case of two components from the same site can
share this information transparently.

<app-image src="~/assets/content/blog/2015/02/oauth_tutorial_authorization_sample.png" alt="OAuth confirmation modal with Google logo. Asking: My project is requesting permission to: Manage your calendars, manage your documents." figcaption=" ">

Looking at this OAuth dialog, I can't help but feel a bit uneasy. Sure, it looks clean and official, but I'm noticing how many apps are asking for more access than they seem to need. What bugs me is we can't pick and choose - it's all or nothing. I've got this nagging feeling that companies might use this to grab as much data as they can about us, building detailed profiles along the way. With how quickly this is catching on, it's starting to feel like a ticking time bomb for our personal info. Maybe I'm overthinking it, but something about this just doesn't sit right with me.

</app-image>

If you are your own Identity Provider, you can configure your relying parties as
"whitelisted" so that your accounts system don't display such dialog.

## Becoming your own Identity provider

In the case of [WebPlatform.org][3] we wanted to become our own Identity
provider and found that we could deploy our own fork of _Firefox Accounts_
("FxA") would allow us to do so.

The way its designed is that we have an OAuth protected "profile" endpoint that
holds user details (email, full name, etc) as a "source of truth". Each relying
party (your own wiki, discussion forum, etc) gathers information from and ensure
it has the same information locally.

In order to do so, we have to make a module/plugin for each web application so
we it can query and bootstrap users locally based on the accounts system. We
call those "relying parties".

Once we have relying party adapter in place, a web app will have the ability to
check by itself with the
*accounts server* <!--#TODO-inline-edit-->
to see if there's a session for
the current browsing session. If it has, it'll give either an already generated
OAuth Bearer token, or generate one for the one for the service in question —
the "SSO" behavior.

With the OAuth Bearer token in hand, a relying party (i.e. the
~~**WebPlatform.org** annotation service~~) can go read details from the
"profile" endpoint and then check locally if it already has a user available.

<app-image style="float:unset;" src="~/assets/content/blog/2015/04/2014-12-16-notes-server-SSO.png" alt="WebPlatform Notes A Specification annotation tool" figcaption="The WebPlatform Notes specification annotation tool.">

It was one of the last parts added to the **WebPlatform** project and was
designed to support adding annotations to specifications and to _leverage a
Single-Sign-On_ between other parts of the site.

Unfortunately the project never released the feature to the public before
closing.

But [I’ve made a YouTube video of its integration while I was building
it][wpd-sso-yt]. The [notes about it are available in the archived
wiki][wpd-projects-sso]

</app-image>

If the relying party doesn't have a user, it'll create one.

<app-image style="float:unset;" src="~/assets/content/blog/2015/04/2014-12-16-notes-server-SSO-13.33.38.png" alt="Terminal session issuing HTTP call using cURL" figcaption="With appropriate HTTP headers for current OAuth bearer token, requesting data to a profile server and giving current user’s data.">
</app-image>

Each relying party is responsible to sync its local user and session state based
on what the accounts service gives.

## Seeing in action

Here is a recording I made showing how it looked like;

<iframe width="560" height="560" src="https://www.youtube.com/embed/KKeh9C4SMnw" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

[wpd-sso-yt]: https://youtu.be/KKeh9C4SMnw
[wpd-projects-sso]: https://webplatform.github.io/docs/WPD/Projects/SSO/
[0]: https://developers.facebook.com/docs/facebook-login/v2.3
[1]:
  https://developer.github.com/v3/oauth_authorizations/#create-a-new-authorization
[2]: https://dev.twitter.com/oauth
[3]: /blog/tag/webplatform-docs
