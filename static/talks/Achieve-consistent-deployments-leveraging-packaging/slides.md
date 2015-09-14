class: first-slide mozilla-branded center
# Achieve *consistent* deployments by leveraging<br/> *packaging*

![Mozilla](images/mdn-logo.png)

.footnote[
 **bit.ly/2015-devopsmtl-packaging** ✪ [@renoirb](https://renoirboulanger.com/) ✪ *DevOps* Montréal ✪ Sept. 2015
]

???

- Ask *switch to french*
- Slides available, link at the bottom
- Automation is nice, but how much is it helping you?
- Ever been caught
  - (dependencies) while trying to rebuild service host
  - (dependencies) onto something then *provider asks you to move* all services elsewhere
  - to cross-fingers because you don't remember what magic you did?
- It's all about making things consistent.



---
## Easy != Simple

> Simplicity is prerequisite for reliability.
>
> — Edsger Dijkstra

???

- Think again on how you do things
- Is this component crucial to the infrastructure.
- What if HELL break loose
- How long can I recover from that component?



---
class: webplatform center invert-slide-number
background-image: url(images/webplatform-docsprint-perk.jpg)

# My last two years

.footnote[
 **hint** press "*p*" to see speaker notes.
]

???

**When I arrived**

- ~20 VMs
- If Salt Master break. Doom.
- If service died, ... *only* aremysitesup.com would tell me ... *NO* monitoring
- To change secrets or add servers, had to find the right file and edit manually
- Not *everything* was source-controlled
- Patched-up code forking original project



---
class: webplatform-components invert-text
background-image: url(images/webplatform-components.jpg)

# Lots of moving parts

???

**Wasn't that bad**

- If X break ... add another origin, update Varnish
- *Almost* all VMs could be built from scratch

**The stack**

- Running almost every web technology
-


---
class: center

## Re-build every service from scratch *still* takes *~5 hours!*



---
class: toc

## Contents

1. **Why packaging?**
1. Live demo!



---
class: center middle content-step

# Why packaging?



---
class: brave-new-world
background-image: url(images/Aldous_Huxley_Brave_New_World_cover.jpg)


???

- VMs are cheap

- Code as infrastructure

- Lots of tools




---
## Package management is *borken*

--
* Can’t rely on OS level packages

--
* Version pinning == unreliable

--
* Runtime environments



---
## Goals

--
* Can rebuild any service. *Anytime*.

--
* As **FAST** as possible

--
* Reduce risk of broken dependencies



---
class: ping-pong
background-image: url(images/ping-pong-plates-and-pack-of-gravity.gif)



---
class: rules
background-image: url(images/movie-saw-doll-puppet-on-bike.jpg)

## Rules

--
1. Give yourself tools to **work locally**

--
2. Build from vanilla, set a "*base*" system, ...

--
3. **NO** manual operations

--
5. Source control everything

--
4. **DON'T** rely on external.



---
class: all-the-things center

### Package *ALL THE THINGS* !!1

.footnote[
  ... and make **’em available** to *download through* **HTTP**
]


---
### ... tools to help you not rely on external

* [Python **PyPI** devpi][devpi]
* [Docker distribution][docker-registry]
* [NPM][npm-registry]
* [PHP Composer][composer-registry]
* [Ruby Gems][ruby-registry]
* [Create your own DEB/RPM **jordansissel/fpm**][fpm-repo]



---
## Deployment flow

--
1. Get code from VCS <small>or *prebuilt* package</small>

--
2. Initialize runtime environment <small>(e.g. *virtualenv*)</small>

--
3. Initialize dependency managers <small>(e.g. *npm*)</small>

--
4. Install **utilities** and **monitoring** <small>(e.g. *pm2*, *systemd*, *Monit*)</small>


???

**Containers**

- Steps 2-5 would be launched within `Dockerfile`

- Step 6 End with commit + tag

- If your project has tests (lucky you!) stop everything

- Push to package repository

**Don’t use containers**

- Make it a tarball

- Push to package repository

**Combine**

- Steps 2-3 generates an output directory

- Step 4, tag, make a tarball, use SHA

- Push to package repository



---
class: middle

<blockquote class="twitter-tweet" lang="en"><p lang="und" dir="ltr"><a href="https://twitter.com/hashtag/Sysadmin?src=hash">#Sysadmin</a> <a href="https://twitter.com/hashtag/Truth?src=hash">#Truth</a> <a href="https://twitter.com/hashtag/Backup?src=hash">#Backup</a> <a href="https://twitter.com/hashtag/Unix?src=hash">#Unix</a> <a href="https://twitter.com/hashtag/Linux?src=hash">#Linux</a> <a href="http://t.co/suCT9ME58V">pic.twitter.com/suCT9ME58V</a></p>&mdash; nixCraft (@nixcraft) <a href="https://twitter.com/nixcraft/status/613636528439345152">June 24, 2015</a></blockquote>



---

## Go crazy!

--
```terminal
make init && make deps && make install
```



---
class: middle center
# Not finished yet



---

You need a *basesystem* for ALL nodes, monitoring,
runtime, etc.

* Local **Vagrant Sandbox**
 * Build packages
 * Work on service specific scripts
* Use the same in any environment!

### 1. Give yourself tools to work locally

### 2. Build from vanilla, CM to setup "base" system

.footnote[Try it yourself in Vagrant [renoirb/salt-basesystem][basesystem-example]]

---
### 3. Package everything; think self-contained!

1. Leverage dependency management and env vars (e.g. .npmrc)

2. Be explicit with everything (e.g. npm shrinkwrap)

3. Expose as possible web server to private network





---
### Automate even more w/ Salt Stack

**DISCLAIMER** I’m unsure if Chef/Ansible/Puppet
has equivalent. Hopefully they do :)

Once push of the package/container is finished;
Use Salt’s `state.event` system!

* Use native:
 * emmit a command `salt-call state.event 'foo/bar/bazz/package/uploaded'` from minion
* Use salt-api:
 * expose hook to launch triggers on salt master
 * anything can make HTTP requests to trigger events!


---
##  How to deploy Python

Compile your own Python environment packaged
with pip and virtualenv

> DO NOT **CHANGE** internal Python!!1


.footnotes[*CAUTION* The following hasn’t been fully tested yet.]






---
### 1. Use pre packaged python compiled from source

```terminal
python -V
> Python 2.7.6

sudo dpkg -i /vagrant/clones/python_2.7.9-wpd_amd64.deb

/opt/python2.7.9/bin/virtualenv /vagrant/sandboxes/myenv
> New python executable in /vagrant/sandboxes/myenv/bin/python
> Installing setuptools, pip...done.
```




---
### 2. Use that new Python to setup your environment

```terminal
cd /vagrant/sandboxes/myenv/
source bin/activate

python -V
> Python 2.7.9

pip list
> pip (6.1.1)
> setuptools (15.0)
```

Then you can run your dependency manager.


---
### 3. Do not rely on external resource

... rely on your own [PyPi mirror w/ **DevPi**][devpi]

Promise is that it acts as a repository which fetches
dependencies it doesn’t have and keeps them for you.









---
### 4. Get your code, bootrap build process

```terminal
git clone ...
make
```









---
# Live Demo Time!

.footnote[Try it yourself in Vagrant [renoirb/salt-basesystem][basesystem-example]]



---
## www.webplatform.org

```terminal
vagrant up
vagrant ssh
cd /var
ls | grep www
sudo salt-call state.sls vagrantsandbox.homepage
```



---

<blockquote class="twitter-tweet" lang="en"><p lang="en" dir="ltr">announcing `npm install linux -g` - installs tiny linux on Yosemite in under a minute <a href="https://t.co/rjVMyjzePs">https://t.co/rjVMyjzePs</a> <a href="http://t.co/wnsFHXCS8b">pic.twitter.com/wnsFHXCS8b</a></p>&mdash; maxwell ogden (@denormalize) <a href="https://twitter.com/denormalize/status/642043310173913088">10 Septembre 2015</a></blockquote>



---
### Use FPM to install Python package, convert as deb

Would be great if the following worked. But it doesnt :(

```terminal
fpm -s python -t deb devpi-server
```

Problem with Python is that dependencies are generally bound to the OS packages. There are alternatives
and solutions but I couldn’t make better example so far.







---
### Use FPM to build your own Twemproxy .deb

What’s wrong with this?

    add-apt-repository -y ppa:twemproxy/stable

Look how they do it, replicate.








---
Look for the source

```terminal
dpkg -c apt/nutcracker_0.3.0-1_amd64.deb
> ./usr/
> ./usr/share/
> ./usr/share/doc/
> ./usr/share/doc/nutcracker/
> ./usr/share/doc/nutcracker/README.md
> ./usr/share/doc/nutcracker/ChangeLog
> ./usr/share/doc/nutcracker/LICENSE
> ./usr/local/
> ./usr/local/sbin/
> ./usr/local/sbin/nutcracker
...
```

---
### Building your own apt repository


Assuming you are on the web server and you expose
at `http://foo.com/apt`, let’s refresh
the `Packages.gz` index.

```terminal
cd apt/
dpkg-scanpackages . /dev/null | gzip -9c > Packages.gz
```

Refer to [Create a local private apt repository][own-apt-repo](https://help.ubuntu.com/community/Repositories/Personal)



---
# Links

Links are [available here](links.html).

  [basesystem-example]: https://github.com/renoirb/salt-basesystem "Renoir’s basesystem which also acts as a local workbench"
  [devpi]: http://doc.devpi.net/latest/quickstart-pypimirror.html "devpi, an utility to make your own mirror"
  [renoirb]: http://renoirb.com/#is
  [own-apt-repo]: https://help.ubuntu.com/community/Repositories/Personal "Debian reference document on how to make your own APT repository"
  [docker-registry]: https://github.com/docker/distribution
  [npm-registry]: https://github.com/mixu/npm_lazy
  [composer-registry]: https://github.com/composer/satis
  [ruby-registry]: http://guides.rubygems.org/run-your-own-gem-server/ "RoR registry. Warning, i’m unsure if there’s something more complete than this one"
  [fpm-repo]: https://github.com/jordansissel/fpm

See also DevOpsNotes.md

