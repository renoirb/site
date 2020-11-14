---
locale: en-CA
canonical: 'https://renoirboulanger.com/blog/2015/02/install-php5-memcached-pecl-extension-support-igbinary/'
title: Install PHP5 Memcached PECL extension and have it support igbinary
date: &createdAt '2015-02-18T20:46:45-04:00'
createdAt: *createdAt
coverImage:
  src: ~/assets/images/logos/php-igbinary.png
  text: |
    > [Igbinary][igbinary-github] is a drop in replacement for the standard *PHP serializer*.
    > Instead of the time and space consuming textual representation used by PHP’s serialize, *igbinary* stores PHP data structures in a compact binary form.
    [igbinary-github]: https://github.com/igbinary/igbinary
categories:
  - Organization
tags:
  - Linux
  - Salt Stack
  - Cloud Computing
keywords:
  - Memcached
  - PECL
  - Ubuntu
  - dpkg
  - PHP5
  - php-fpm
---

I was trying to figure out why my PHP setup would never have both `igbinary` to
be used to serialize sessions in Memcached using current Memcached PECL
extension.

<app-image style="float:unset;" src="~/assets/content/blog/2015/02/sessions_memcached_before2.png" alt="OpenStack Cloud-Init dialog">
Session handlers shows memcached
</app-image>
<app-image style="float:unset;" src="~/assets/content/blog/2015/02/sessions_memcached_before.png" alt="OpenStack Cloud-Init dialog">
*igbinary* support no?
</app-image>

After some research I found a procedure in an answer on StackOverflow.

But it didn't solve my main requirement: **Since I do automated deployment, I
MUST be able to move packages around**. Since all my VMs are using the same
distribution and that I already have my own _apt_ repo, I could just add _one
more_ deb file.

My objective was then now to package it for deployment. To do this, I discovered
[Jordan Sissel's project called **fpm**][0] which stands for "_Freaking Package
Manager_" (sic)

My target deployment runs on Ubuntu 14.04 LTS and I want it to replace upstream
`php5-memcached` package as a simple _.deb_ file.

## Build from PECL source

_NOTE_ The following was run on an Ubuntu 14.04 VM with [@rynop's procedure][1].

1. Setting the machine up to make a package.

```bash

```

2. Follow steps from the procedure. Those were taken from the _[Original
   procedure][1]_, just before issuing `./configure`.

```bash

```

3. I realized that under Ubuntu 14.04 we also needed to _disable Memcached SASL_
   so I had to do it differently

```bash
./configure --enable-memcached-igbinary --disable-memcached-sasl
```

## Make a .deb package

1. Install [jordansissel/fpm][0]. Ideally this should be done on a machine or VM
   image you're OK building things on and you can re-use.

```bash
apt-get install -y ruby-dev gcc

# Install fpm gem globally.
gem install fpm
```

2. Check the package contents you want to replace and let's replicate for our
   own purposes.

```bash
dpkg --list | grep php5-memcached
find /var/cache/apt -type f -name '*php5-memcached*'
dpkg -c /var/cache/apt/archives/php5-memcached_2.1.0-6build1_amd64.deb
```

3. I figured out in the output that I only needed a few folders,
   `etc/php5/mods-available/` and `usr/lib/php5/foo`, so I created them
   manually.

```bash
mkdir -p etc/php5/mods-available/

# Adjust memcached.ini to suit your tastes, then prepare it for packaging
cp memcached.ini etc/php5/mods-available/

# Make sure the usr/lib/php5/foo path matches in
# the result of `dpkg -c` you issued

mkdir -p usr/lib/php5/20121212/
cp modules/memcached.so usr/lib/php5/20121212/
```

4. Magic will happen

```bash
fpm -s dir \
    -t deb \
    -n php5-memcached \
    -v 2.2.0-wpd \
    -m '<your@email.org>' \
    --description 'PHP 5.5 PECL igbinary + memcached support' \
    -d libmemcached10 \
    etc/ usr/
```

I could have used `--replaces REPLACES` in [`fpm` options][3], but when I did
this package, I didn't know which syntax to use. Its an optional argument
anyway.

5. Test if the package works

```bash
dpkg -i /srv/webplatform/apt/php5-memcached_2.2.0-wpd_amd64.deb

  (Reading database ... 118781 files and directories currently installed.)
  Preparing to unpack .../php5-memcached_2.2.0-wpd_amd64.deb ...
  Unpacking php5-memcached (2.2.0-wpd) over (2.1.0-6build1) ...
  Setting up php5-memcached (2.2.0-wpd) ...
```

Success!

6. Look at the phpinfo

<app-image style="float:unset;" src="~/assets/content/blog/2015/02/sessions_memcached_after.png" alt="OpenStack Cloud-Init dialog">
Ater: registered session handlers
</app-image>

## Update your private apt repository (or create one)

1. Then, in your own apt repository (if you do have one) here's how I rebuild
   the index. If you only have a handful of packages, it can simply be a folder
   with a bunch of deb files.

```bash
mkdir -p /srv/apt
cp php5-memcached_2.2.0-wpd_amd64.deb /srv/apt
cd  /srv/apt
apt-get install -y dpkg-dev
dpkg-scanpackages . /dev/null | gzip -9c > Packages.gz
echo 'deb file:/srv/apt ./' > /etc/apt/sources.list.d/foo.list
```

If you want something more scalable than a directory with a bunch of `.deb` and
a `Package.gz` that you rsync around, there are other procedures available
online.

Done!

[0]: https://github.com/jordansissel/fpm
[1]:
  https://stackoverflow.com/questions/24407095/error-when-installing-pecl-memcached/28597188#answer-24892703
[2]: /cdn-cgi/l/email-protection
[3]: https://github.com/jordansissel/fpm/wiki
