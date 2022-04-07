---
title: HTTP Caching basics
date: &createdAt '2022-04-06T20:55:06-04:00'
createdAt: *createdAt
tags:
  - ECMAScript
  - JavaScript
  - HTTP
  - performance
---

There is a way to tell the server you previously received something from it, as
a way to ask if you need to “_download again_”.

If a server sends “`Last-Modified`” in its response header, when you query the
second time, use that value in a `If-Modified-Since` request header the next
time.

The first time, it sends the payload. Whatever it is.

The second time, it can return `304 Not Modified` and nothing. Then, the client,
will just use what it received previously.

The browser natively does this.

For a JavaScript client-side HTTP client (Axios, fetch, ky, …), we have to keep
track of the URL and the `Last-Modified`. When we make another call to a
previously made URL, add the `Last-Modified` value we received and add it as a
`If-Modified-Since` request header. Then the HTTP Client (i.e. `fetch`,
internally) may pick that up too. (To be confirmed exactly how to setup)

## Example

The example shows a file requested. Web servers do add those headers
automatically with them. But a backend service can do that too.

### First request

<app-image style="float:initial;width:100%;" figcaption=" " src="~/assets/content/code-review/http-caching-basics/http-request-step1.png">

The initial request without any argument.

**Notice** the `Last-Modified` response header.

</app-image>

### 2nd request

<app-image  style="float:initial;width:100%;" figcaption="The second request, we add If-Modified-Since." src="~/assets/content/code-review/http-caching-basics/http-request-step2.png">

**Notice it just sends** `304 Not Modified`, no data.

</app-image>

## Server-Side

While for files, web servers do that automatically. For Backend generated
response, its an exercise left to the reader.

It's basically having the server to keep track of “what makes a request unique”,
and store it somewhere for a short period of time. There are software solutions
that you can send data, and add an expiration date, and that entry gets removed
after that time.

That server then while it sends response can track a few properties and store
them at that place and add the `Last-Modified` when it got it. (PS: this is just
the bare minimum, it works. But for a more complete, refer to
[Mark Notthingham’s **Cache docs**](https://www.mnot.net/cache_docs/#VALIDATE))

Say the backend is always called with an `Authorization` header. That its a
`Bearer 1111.2222.3333`. HTTP Server treats requests with `Cookie` and
`Authorization` header as private and don't cache. But on the server that
manages the returning data already validated that, it can do that logic. In the
case of a JWT token, all we can use is the last part of the `111.222.333`. The
signature. And a part of it. That way it's not filling up memory. And the
signature is unique to the rest anyway. (TODO: Double check some more about that
— but thus far wasn't said insecure in the context I'm proposing this)

The things we keep in memory temporarily can be:

- The URL (Just make sure the URL is always the same, including the ?query part)
- The `Authorization` header's (or `Cookie`) snippet of it (because in either
  case, most of that regularily change, but some part of it changes less
  frequently and uniquely identify the person)
- The time it happened

So that when the server sees a request without `If-Modified-Since` (and all rest
validated), store the above, and pass `Last-Modified`.

The complying client will be able to do the same, and pass `If-Modified-Since`
when they request again, including passing their currently applicable
`Authorization` headers anyway.

So the client can notify it saw. The server can say it's the same. Nothing to
download. `304 Not Modified`
