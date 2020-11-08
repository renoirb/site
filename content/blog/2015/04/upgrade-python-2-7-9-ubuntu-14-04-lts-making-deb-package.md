---
locale: en-CA
title:
  Upgrade to Python 2.7.9 on Ubuntu 14.04 LTS, and make your own .deb package
  for deployment
canonical: https://renoirboulanger.com/blog/2015/04/upgrade-python-2-7-9-ubuntu-14-04-lts-making-deb-package/
date: &createdAt '2015-04-05T15:42:38-04:00'
createdAt: *createdAt
categories:
  - Organization
tags:
  - webplatform
  - operations
  - best-practices
keywords:
  - Python
  - ubuntu
---

I had this post hanging in my drafts on how I attempted to install a valid
Python 2.7.9 runtime environment on Ubuntu 14.04 and make my own .deb package
for easy re-deployment.

**IMPORTANT** This procedure isn't complete as I had to shift focus elsewhere. I
might rework this article to adjust what's missing.

While I understand that Ubuntu 14.04 [will][0] [remain][1] using _Python 2.7.6_
internally, applications we run can be configured to use another python
environment. Its what virtualenv is all about after all, isn't it.

This post attempts to install, and make an installable _.deb_ package of
**Python 2.7.9** and is meant to be used by web applications without touching
the system's python runtime.

## Why not replacing internal Python version?

The reason is simple. If you replace internal Python version, other softwares
within the OS will have broken dependencies.

I realized this while I wanted to upgrade the version and breaking an hard
dependency I have on Salt Stack. Since many components within a given Ubuntu
version relies on Python, it could break anything else. This is why I stopped
working on the idea of replacing internally, but instead to configure VirtualEnv
to use another version instead.

If you see procedures that shows you to replace telling you to use
`update-alternatives` to replace python, don't do it! Go instead learn how to
run your own Python version in VirtualEnv.

## Procedure

1. Install build dependencies

Those were the ones I ran last before a successful build on **Ubuntu 14.04
LTS**, if you aren't using the same distribution, you might get a different
list.

```bash
apt-get install -y gcc-multilib g++-multilib libffi-dev libffi6 libffi6-dbg python-crypto python-mox3 python-pil python-ply libssl-dev zlib1g-dev libbz2-dev libexpat1-dev libbluetooth-dev libgdbm-dev dpkg-dev quilt autotools-dev libreadline-dev libtinfo-dev libncursesw5-dev tk-dev blt-dev libssl-dev zlib1g-dev libbz2-dev libexpat1-dev libbluetooth-dev libsqlite3-dev libgpm2 mime-support netbase net-tools bzip2
```

2. Get Python sources and compile

```bash
wget https://www.python.org/ftp/python/2.7.9/Python-2.7.9.tgz
tar xfz Python-2.7.9.tgz
cd Python-2.7.9/
./configure --prefix /usr/local/lib/python2.7.9 --enable-ipv6
make
make install
```

3. Test if the version works

```bash
/usr/local/lib/python2.7.9/bin/python -V

Python 2.7.9
```

4. Then prepare package through FPM

```bash
apt-get install -y ruby-dev gcc gem install fpm ...
```

Its basically about creating a .deb based on your new runtime setup. You can do
that by using [fpm][2] ("Fabulous Package Manager"), I am [using this technique
in a post I published recently about installing a PHP library][3].

## Incomplete scratchpad

But that's as far as my notes goes for now. Sorry about that.

### Setuptools

As per recommended in [Setuptools instructions][4], we can run `easy_install`
through a `wget`, like so;

```bash
wget https://bootstrap.pypa.io/ez_setup.py -O - | /usr/local/lib/python2.7.9/bin/python

  /usr/local/lib/python2.7.9/bin/easy_install pip
  /usr/local/lib/python2.7.9/bin/pip install virtualenv

```

Then, create symbolic links

```bash
ln -s /usr/local/lib/python2.7.9/bin/easy_install /usr/bin/easy_install
ln -s /usr/local/lib/python2.7.9/bin/pip /usr/bin/pip
```

You can try if it worked

```bash
pip list

  pip (6.0.8)
  setuptools (14.3)
  virtualenv (12.0.7)
```

## Resources

- http://davebehnke.com/python-pyenv-ubuntu.html
- https://github.com/yyuu/pyenv
- https://www.python.org/downloads/release/python-279/
- http://aboutsimon.com/2012/04/16/building-a-python-deb-in-a-bootstrapped-ubuntu-chroot-with-fpm/
- http://serverfault.com/questions/669859/how-can-i-upgrade-python-to-2-7-9-on-ubuntu-14-4
- http://askubuntu.com/questions/101591/how-do-i-install-python-2-7-2-on-ubuntu
- https://wiki.debian.org/Debootstrap
- http://www.stylesen.org/python\_27\_debian\_squeeze\_60

[0]:
  https://askubuntu.com/questions/559036/when-will-the-python-2-7-9-upgrades-be-available-from-apt-get-for-14-04lts#answer-560159
[1]:
  https://serverfault.com/questions/669859/how-can-i-upgrade-python-to-2-7-9-on-ubuntu-14-4
[2]: https://github.com/jordansissel/fpm
[3]:
  https://renoirboulanger.com/blog/2015/02/install-php5-memcached-pecl-extension-support-igbinary/
[4]: https://pypi.python.org/pypi/setuptools#unix-wget
