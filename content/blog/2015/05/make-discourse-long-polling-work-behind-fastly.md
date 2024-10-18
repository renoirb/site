---
title: Make Discourse “long polling” work behind Fastly or Varnish
locale: en-CA
created: 2015-05-03
updated: 2023-02-18
canonical: >-
  https://renoirboulanger.com/blog/2015/05/make-discourse-long-polling-work-behind-fastly/
status: publish
revising: true
categories:
  - projects
tags:
  - linux
  - operations
  - webplatform
  - cloud-computing
keywords:
  - Discourse
  - Docker
  - Fastly
  - Long Polling behind Varnish
  - Varnish
excerpt: >-
  In the Discourse forums, if you’ve seen something saying that you have to
  provide a different origin to make long polling work, maybe you didn’t
  understand what you have to do. Here are the details of why and how to do it
  correctly.
coverImage:
  src: ~/assets/content/blog/2015/11/discourse_migration_list_gravatar_images.png
  text: |
    Side by side comparison while working on migrating Discourse
    with WICG
preamble:
  text: |
    It is possible the code shown here no longer works.
    Maybe the code shown here uses parts of Discourse that no longer exists.
---

While working on deploying Discourse, [I've came across a statement that took
time for me to understand][0]. Discourse has a subsystem that's similar to
WebSocket and Server Sent events which takes care to automatically update the
page asynchronously. Note that this post [is canonical version of my answer][1].

The confusing part was;

> [@sam][2] To server "long polling" requests from a different domain, set the
> Site Setting long polling base url to the origin server. For example, if your
> CDN is pulling from "`http://example.org`" be sure to plug in
> `http://example.org/` into the site setting. If you don't your site will be
> broken.

This post is about clarifying why and how to work around this particular
problem.

The confusing part is that if "`http://example.org/`". If you are behind Fastly,
you have to use a CNAME entry and then you have to have a sub domain name and
not the top level.

**Background:** In DNS, a top level domain name (i.e. "example.org") can _only_
have `A` records. Since Fastly requires we use a `CNAME` entry, we have no
choice but to use a sub domain name.

Let's say that we will then use "`http://discourse.example.org/`" to serve our
Discourse forum so we can use Fastly.

Now there's this thing called "long polling" which is basically an `OPTION` HTTP
request with a long time before returning anything. If we use the Fastly or
Varnish address, as Discourse would by default, Varnish will time out and "long
polling" won't work.

**More background:** Varnish has this option to bypass in known contexts through
`vcl_pipe` which is roughly a raw TCP socket. But Fastly doesn't offer it
[because of the _size_ of their setup][3].

## Proposed setup

Let's enable long polling and expose our site under Fastly. We'll need two
names, one pointing to Fastly's and the other to the IP addresses we give within
the service dashboard.

1. **discourse.example.org** that's our desired Discourse site domain name
2. **discoursepolling.example.org** (pick any name) that we'll configure in
   Discourse to access directly to our public facing frontend web server

In my case, I generally have many web apps running that are only accessible from
my internal network. I refer to them as "upstream"; the same term NGINX uses in
their config. Since this number of web apps you would host on a site can
fluctuate, you might still want the number public IP address to remain stable.
That's why I setup a NGINX server in front that proxies to internal web app
server. I refer to them as "frontends".

Let's say you have two public facing frontends running NGINX.

Those would be the ones you setup in Fastly like this.

<app-image style="float:unset;" src="~/assets/content/blog/2015/04/discuss-fastly-origins.png" figcaption=" ">

Fastly service configuration, at Hosts tab

</app-image>

Here we see two _Backends_ in Fastly pannel at `Configure -> Hosts`.

Notice that in this example i'm using `443` port because my backends are
configured to communicate between Fastly and my frontends through TLS. But you
don't need to.

Quoting again @sam;

> [@sam][2] To server "long polling" requests from a different domain, set the
> Site Setting long polling base url to the origin server.

Really means here is that we would have to put one of those IP addresses in
Discourse settings.

What I'd recommend is to create a list of `A` entries for all your frontends.

In the end we need three things:

1. What's the public name that Fastly will serve
2. Which IPs are the frontends
3. Which hostname we want to use for long polling and we'll add it to our
   VirtualHost

The zone file would look like this;

```dns-zone-file
# The public facing URL
discourse.example.org.  IN CNAME global.prod.fastly.net.

# The list of IP addresses you’d give to Fastly as origins/backends
frontends.example.org.  IN A 8.8.8.113
frontends.example.org.  IN A 8.8.8.115

# The long polling URL entry
discoursepolling.example.org.  IN CNAME frontends.example.org.
```

That way you can setup the "long polling base url" correctly without setting a
single point of failure.

<app-image style="float:unset;" src="~/assets/content/blog/2015/05/discourse-polling-ui.png" figcaption="In Discourse admin, adjust long polling base url setting">
</app-image>

Then, we can go in Discourse admin zone and adjust the "long polling base url"
to our other domain name.

```nginx
# /etc/nginx/sites-enabled/10-discourse
# Let’s redirect to SSL, in case somebody tries to access the direct IP with
# host header.
server {
    listen      80;
    server_name discoursepolling.example.org discourse.example.org;
    include     common_params;
    return      301 https://$server_name$request_uri;
}
server {
    listen      443 ssl;
    server_name discoursepolling.example.org discourse.example.org;
    # Rest of NGINX server block
    # Also, I would make a condition if we are in discoursepolling but not
    # under using anything specific to polling.
    # #TODO; find paths specific to polling
}
```

To see if it works; look at your web browser developer tool "Network inspector"
for `/poll` calls on `discoursepolling.example.org`, and see if you have
`200 OK` status code.

<app-image style="float:unset;" src="~/assets/content/blog/2015/05/discourse-polling.png" figcaption="Use your web browser developer tools and inspect network traffic to see if requests made to discoursepolling worked">

Note that this screenshot is showing `webplatform.org` but that's beside the
point i'm trying to illustrate.

</app-image>

Hope this helped.

[0]:
  https://meta.discourse.org/t/full-site-cdn-acceleration-for-discourse/21467/4
[1]: https://meta.discourse.org/t/full-site-cdn-acceleration-for-discourse/21467
[2]:
  https://meta.discourse.org/t/full-site-cdn-acceleration-for-discourse/21467/1
[3]: https://community.fastly.com/t/vcl-pipe-heads-up/163
