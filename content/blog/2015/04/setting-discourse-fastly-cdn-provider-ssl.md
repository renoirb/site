---
title: Setting up Discourse with Fastly as a CDN provider and TLS
locale: en-CA
created: 2015-04-29
updated: 2023-02-18
canonical: https://renoirboulanger.com/blog/2015/04/setting-discourse-fastly-cdn-provider-ssl/
status: publish
revising: true
caption: false
caracteresBizzares: false
gallery: false
migrateCode: true
migrateImages: true
migrateLinks: false
categories:
  - projects
tags:
  - operations
  - cloud-computing
  - webplatform
  - Linux
  - caching
  - varnish
keywords:
  - Discourse
  - Docker
  - Fastly
  - TLS
  - NGINX
  - Varnish
preamble:
  text: |
    It is possible the code shown here no longer works.
    Maybe the code shown here uses parts of Discourse that no longer exists.
coverImage:
  src: ~/assets/content/blog/2015/11/discourse_migration_list_gravatar_images.png
  text: |
    Side by side comparison while working on migrating Discourse
    with WICG
excerpt: >-
  Here’s how I setup a Discourse web application so that I can scale it by
  adding more Docker instances while keeping a low number of exposed web servers
description: >-
  Allow horizontal scaling by separating internal app servers from exposed
  frontend web servers
title_alternate: Enable a CDN for your Discourse
---

The following is a copy of what I published in a question on
[_meta.discourse.org_ about "**Enable a CDN for your Discourse**"][0] while
working on _discuss.webplatform.org_.

## Setup detail

Our setup uses [Fastly][1], and leverage [their SSL feature][2]. Note that in
order for you to use SSL too, you'll have to contact them to have it onto your
account.

<!--#TODO-inline-edit-->
**SEE ALSO** this [post about _Make Discourse "long polling" work behind
Fastly_][3]. This step is **required** and is a logical next step to this
procedure.

In summary;

- SSL between _users_ and _Fastly_
- SSL between _Fastly_ and "_frontend_" servers. (That's the IP we put into
  Fastly hosts configuration, and are also refered to as "origins" or "backends"
  in CDN-speak)
- Docker Discourse instance ("_upstream_") which listens only on private network
  and port (e.g. _10.10.10.3:8000_)
- More than two publicly exposed web servers ("_frontend_"), with SSL, that we
  use as "_backends_" in _Fastly_
- _frontend_ server running NGINX with an [_upstream_ block][4] proxying
  internal _upstream_ web servers that the Discourse Docker provides.
- We use NGINX's `keepalive` HTTP header in the frontend to make sure we
  minimize connections

Using this method, if we need to scale, we only need add more internal
_Discourse Docker instances_, we can add more NGINX upstream entries.

Note that I recommend to use direct private IP addresses instead of internal
names. It removes complexity and the need to rewrite `Hosts:` HTTP headers.

## Steps

Everything is the same as basic Fastly configuration, refer to [setup your
domain][5].

Here are the differences;

1. Setup your domain name with the CNAME Fastly will provide you ([you will have
   to contact them for your account though][2]), ours is like that ;

   ```dns-zone-file
   discuss.webplatform.org. IN CNAME webplatform.map.fastly.net.
   ```

2. In Fastly pannel at `Configure -> Hosts`, we tell which publicly available
   _frontends_ IPs

Notice we use port `443`, [so SSL is between _Fastly_ and our _frontends_][6].
Also, you **can** setup _Shielding_ (which is how you activate the CDN behavior
within Fastly) by enabling it on only one. I typically set it on the one I call
"first".

<app-image style="float:unset;" src="~/assets/content/blog/2015/04/discuss-fastly-origins.png" figcaption="Fastly service configuration, at Hosts tab">
</app-image>

3. In Fastly pannel `Configure -> Settings -> Request Settings`; we make sure we
   forward `X-Forwarded-For` header. You **DONT** need this; you can remove it.

<app-image style="float:unset;" src="~/assets/content/blog/2015/04/discuss-fastly-XFF.png" figcaption="Fastly service configuration, at Settings tab">
</app-image>

4. Frontend NGINX server has a block similar to this.

In our case, we use [Salt Stack][7] as the configuration management system, it
basically generates the Virtual Hosts for us as using [Salt reactor][8] system.
Every time a Docker instance would become available, the configuration will be
rewritten using this template.

- `{{ upstream_port }}` would be at `8000` in this example
- `{{ upstreams }}` would be an array of current internal Docker instances, e.g.
  `['10.10.10.3','10.10.10.4']`
- `{{ tld }}` would be _webplatform.org_ in production, but can be anything else
  we need in other deployment, it gives great flexibility.
- Notice the use of `discoursepolling` alongside the `discourse` subdomain name.
  Refer to [this post about _Make Discourse "long polling" work behind
  Fastly_][3] to understand its purpose

```nginx
upstream upstream_discourse {
{%- for b in upstreams %}
    server    {{ b }}:{{ upstream_port }};
{%- endfor %}
    keepalive 16;
}

server {
    listen      443 ssl;
    server_name discoursepolling.{{ tld }} discourse.{{ tld }};

    root    /var/www/html;
    include common_params;
    include ssl_params;

    ssl                 on;
    ssl_certificate     /etc/ssl/2015/discuss.pem;
    ssl_certificate_key /etc/ssl/2015/201503.key;

    # Use internal Docker runner instance exposed port
    location / {
        proxy_pass             http://upstream_discourse;
        include                proxy_params;
        proxy_intercept_errors on;

        # Backend keepalive
        # ref: http://nginx.org/en/docs/http/ngx_http_upstream_module.html#keepalive
        proxy_http_version 1.1;
        proxy_set_header Connection "";
    }
}
```

Note that I removed the `include proxy_params;` line. If you have lines similar
to `proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;`, you don't
need them (!)

[0]:
  https://meta.discourse.org/t/enable-a-cdn-for-your-discourse/14857/26?u=renoirb
[1]: https://www.fastly.com/
[2]: https://docs.fastly.com/guides/ssl/which-ssl-options-are-available
[3]: /blog/2015/05/make-discourse-long-polling-work-behind-fastly/
[4]: https://nginx.org/en/docs/http/ngx_http_upstream_module.html
[5]:
  https://docs.fastly.com/guides/getting-started/sign-up-and-create-your-first-service
[6]:
  https://docs.fastly.com/guides/ssl/can-i-use-ssl-to-communicate-to-my-backend-servers
[7]: https://saltstack.com/community/
[8]: https://docs.saltstack.com/en/latest/topics/reactor/
