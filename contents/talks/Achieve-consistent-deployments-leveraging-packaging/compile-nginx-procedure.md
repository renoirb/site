---
title: Compile NGINX from source and create your own package
template: resume.html
---

# Compile NGINX from source and create your own package

This is the procedure I wrote while preparing my [recent talk about **packaging**](index.html).

You can use it as a reference on how to create your own package and superseed the ones from your server environment.


## Procedure

* [Download NGINX source](http://nginx.org/en/download.html)

Get modules you want to use;

```
git clone https://github.com/openresty/headers-more-nginx-module.git
git clone https://github.com/giom/nginx_accept_language_module.git
git clone https://github.com/aperezdc/ngx-fancyindex.git nginx-fancyindex
```

* https://github.com/openresty/memc-nginx-module/releases
* https://github.com/openresty/lua-nginx-module/releases

Uncompress NGINX package, and prepare for compilation

```
gunzip nginx-1.9.5.tar.gz
tar xf nginx-1.9.5.tar
cd nginx-1.9.5
ll /opt
sudo apt-get -y install build-essential zlib1g-dev libpcre3 libpcre3-dev libbz2-dev libssl-dev tar unzip
sudo apt-get -y install lua5.1 liblua5.1-0 liblua5.1-0-dev
```

Run `./configure` with the following options:


    ./configure --prefix=/opt/nginx \
                --with-cc-opt="-DNGX_LUA_USE_ASSERT -DNGX_LUA_ABORT_AT_PANIC" \
                --with-ipv6 \
                --with-http_ssl_module \
                --with-http_v2_module \
                --with-http_realip_module \
                --with-http_gunzip_module \
                --with-http_gzip_static_module \
                --with-http_auth_request_module \
                --add-module=../headers-more-nginx-module \
                --add-module=../nginx_accept_language_module \
                --add-module=../nginx-fancyindex \
                --add-module=../lua-nginx-module-0.9.16 \
                --add-module=../memc-nginx-module-0.16

Make, make install

```
make
sudo -s
make install
ll /opt/nginx
cd /opt/nginx
```

Test it

```
sbin/nginx -g 'daemon off;'
```

add into `location` block

```
vi conf/nginx.conf

    fancyindex on;
    fancyindex_css_href "/_internal/fancy.css";
    fancyindex_footer   "/_internal/footer.html";
    fancyindex_header   "/_internal/header.html";
```

Add your own HTML/CSS for FancyIndex

```
mkdir -p /opt/nginx/html/_internal/
ll ~/talk/internal
cp  ~/_internal/* /opt/nginx/html/_internal/
```

Test it out

```
mkdir -p html/foo/bar
vi html/foo/bar/somefile.txt
sbin/nginx -g 'daemon off;'
```

Create your init script

```
# file: /etc/init/nginx.conf
description "nginx - small, powerful, scalable web/proxy server"

start on filesystem and static-network-up
stop on runlevel [016]

expect fork
respawn

# NGINX already sets uid to nobody
chdir /opt/nginx

pre-start script
  [ -x /opt/nginx/sbin/nginx ] || { stop; exit 0; }
  /opt/nginx/sbin/nginx -q -t -g 'daemon on; master_process on;' || { stop; exit 0; }
end script

exec /opt/nginx/sbin/nginx -g 'daemon on; master_process on;'

pre-stop exec /opt/nginx/sbin/nginx -s quit
```


### Add testing SSL certificates

    apt-get install ssl-cert
    ll /etc/ssl/private
    make-ssl-cert generate-default-snakeoil
    ll /etc/ssl/certs/|grep snake


### Enable HTTP/2.0?

This server block would enable both FancyIndex module and the use of the shiny new HTTP/2.0 module available in NGINX 1.9.5.


    # Copy of a vhost, make sure listen and ssl_* are there as it is.
    server {
        listen      443 default_server ssl http2;
        listen      [::]:443 default_server ssl http2;
        server_name _;
        include     common.conf;
        charset     utf-8;
        try_files   $uri $uri/ =404;
        location / {
            fancyindex          on;
            fancyindex_css_href "/_internal/fancy.css";
            fancyindex_footer   "/_internal/footer.html";
            fancyindex_header   "/_internal/header.html";
        }
        ssl                 on;
        ssl_certificate     /etc/ssl/certs/ssl-cert-snakeoil.pem;
        ssl_certificate_key /etc/ssl/private/ssl-cert-snakeoil.key;
    }

### Create a .deb package using FPM

Create the base package to superseed distribution version.

    fpm -s dir -t deb -n nginx-core -v 1.9.5-wpd \
        -m 'Renoir Boulanger <hello@renoirboulanger.com>' \
        --description 'Custom build of NGINX with FancyIndex, HTTP/2.0, OpenResty Memcached module, Lua, SSL, gzip_static, gunzip, headers_more, realip, accept_language modules enabled' \
        --replaces nginx-core \
        --vendor 'hello@renoirboulanger.com' \
        -d lua5.1 -d liblua5.1-0 \
        --url 'http://renoirb.com/talks/Achieve-consistent-deployments-leveraging-packaging/compile-nginx-procedure.html' \
        opt/nginx

Separate configuration package

    fpm -s dir -t deb -n nginx-configs -v 1.9.5-wpd \
        -m '<hello@renoirboulanger.com>' \
        --description 'Configuration files on top of custom built NGINX package' \
        -d 'nginx-core = 1.9.5-wpd' --vendor 'renoirb@mozilla.org' \
        --url 'http://renoirb.com/talks/Achieve-consistent-deployments-leveraging-packaging' \
        --config-files opt/nginx/conf/nginx.conf \
        etc/ opt/

Try it out!

    apt-get install -o Dpkg::Options::="--force-overwrite" -y nginx-configs=1.9.5-wpd


# Reference

* [nginx source](http://nginx.org/en/download.html)
* [build debian squeeze](https://www.howtoforge.com/building-nginx-from-source-on-debian-squeeze)
* [nginx 3rd party modules](http://wiki.nginx.org/3rdPartyModules)
* [Enable HTTP/2.0 in NGINX](https://ma.ttias.be/enable-http2-in-nginx/)
* [nginx.com Install and Compile-time options](https://www.nginx.com/resources/wiki/start/topics/tutorials/installoptions/)
* [Use NGINX with Memcached](http://blog.octo.com/en/http-caching-with-nginx-and-memcached/)
  * [nginx memc module](https://github.com/openresty/memc-nginx-module)

## NGINX and Lua

* [Scripting NGINX with Lua talk slides](http://www.londonlua.org/scripting_nginx_with_lua/slides.html)
* [Embed LUA within NGINX with OpenResty](https://github.com/openresty/lua-nginx-module#installation)
* [nginx lua documentation](https://www.nginx.com/resources/wiki/modules/lua/)


## Maybe someday

Things I didn't know but might be very powerful.

* [Embed JavaScript scripting within NGINX with SpiderMonkey](https://github.com/peter-leonov/ngx_http_js_module#readme)

