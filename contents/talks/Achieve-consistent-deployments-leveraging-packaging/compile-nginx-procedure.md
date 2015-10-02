---
title: Compile NGINX from source and create your own package
template: resume.html
---

# Compile NGINX from source and create your own package

[Download NGINX source](http://nginx.org/en/download.html)

Steps

```
gunzip nginx-1.9.5.tar.gz
tar xf nginx-1.9.5.tar
cd nginx-1.9.5
ll /opt
sudo apt-get -y install build-essential zlib1g-dev libpcre3 libpcre3-dev libbz2-dev libssl-dev tar unzip
cat /vagrant/talk-packages/nginx/configure.sh
# configure
make
sudo
make install
ll /opt/nginx
cd /opt/nginx
```

Test it

```
sbin/nginx -g 'daemon off;'
```

add into location block

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


## Add testing SSL certificates


    apt-get install ssl-cert
    ll /etc/ssl/private
    make-ssl-cert generate-default-snakeoil
    ll /etc/ssl/certs/|grep snake


## Enabling HTTP2


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

## Create a .deb package using FPM

### NGINX package to superseed distribution version

    fpm -s dir -t deb -n nginx-core -v 1.9.5-wpd -m '<hello@renoirboulanger.com>' --description 'Custom build of NGINX with FancyIndex. NGINX is a small, powerful, scalable web/proxy server Nginx ("engine X") is a high-performance web and reverse proxy server created by Igor Sysoev. It can be used both as a standalone web server and as a proxy to reduce the load on back-end HTTP or mail servers.' --replaces nginx-core --vendor 'renoirb@mozilla.org' --url 'http://renoirb.com/talks/Achieve-consistent-deployments-leveraging-packaging' --config-files opt/nginx/conf/nginx.conf opt/nginx/

### Separate configuration package

    fpm -s dir -t deb -n nginx-configs -v 1.9.5-wpd -m '<hello@renoirboulanger.com>' --description 'Configuration files on top of custom built NGINX package' -d 'nginx-core = 1.9.5-wpd' --vendor 'renoirb@mozilla.org' --url 'http://renoirb.com/talks/Achieve-consistent-deployments-leveraging-packaging' --config-files opt/nginx/conf/nginx.conf etc/ opt/

### Install packages

    apt-get install -o Dpkg::Options::="--force-overwrite" -y nginx-configs=1.9.5-wpd

