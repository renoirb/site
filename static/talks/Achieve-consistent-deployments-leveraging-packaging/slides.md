class: first-slide mozilla-branded center
# Achieve *consistent* deployments by leveraging<br/> *packaging*

![Mozilla](images/mdn-logo.png)

.footnote[
 **bit.ly/2015-devopsmtl-packaging** ✪ [@renoirb](https://renoirboulanger.com/) ✪ *DevOps* Montréal ✪ Sept. 2015
]



---
class: webplatform invert-slide-number

# Last two years for me...

.footnote[
 **hint** press "*p*" to see speaker notes.
]

???

- Set of ~20 VMs with configuration management

- Not everything was  systematically source-controlled and automated

- Lots of patched-up code forking original project

- Lots of manual operations; secrets, hosts file, etc.

- But. It was great, *almost* all VMs could be built from scratch

- If Salt Master break ... recreate everything.

- If wiki break ... add another backend, update Fastly.

- If service died, ... aremysitesup.com would tell me ... *NO* monitoring.



---
class: webat25


???

- Had to learn quickly how HTTP caching works

- Could not trust all metrics, under the "fire"



---
class: center spike


![Requests burst during worldwide announcement of Web 25th anniversary, recorded by Piwik](images/webat25_requests_mar_may_2014.png)
--
![Requests between March 9th to 15, recorded by Fastly, the site's CDN](images/webat25-fastly-caching-overview-20140309.png)



---
class: toc

## Contents

1. **Quick theory**
1. Live demo!



---
class: brave-new-world



???

- VMs are cheap

- Code as infrastructure

- Lots of tools



---
## Easy != Simple

> Simplicity is prerequisite for reliability.
>
> — Edsger Dijkstra



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
* Can reproduce any component. Anytime.

--
* As **FAST** as possible

--
* Reduce risk of broken dependencies




---
class: rules

## Rules

--
1. Give yourself tools to work *locally*

--
2. Build from vanilla, Config. Manager sets a "base" system

--
3. *NO* manual operations

--
4. **Don’t** rely on external

--
5. Source control everything

--
6. **Package \*everything\***


---
class: all-the-things center

## Package *ALL THE THINGS* !!1



---
## Deployment flow

--
1. Get code from VCS

--
2. Create runtime environment (e.g. nvm, rvm, virtualenv)

--
3. Initialize dependency managers (e.g. npm, bower, browserify)

--
4. Install web app utilities (e.g. pm2, systemd) + Service watcher (e.g. Monit)

--
5. ...

--
6. Make it a package, upload for HTTP download


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

## Go crazy!

--
```terminal
make init && make deps && make install
```

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
## Do not rely on external!

* Python; [**DevPi**][devpi]
* [Docker registry][docker-registry]
* [NPM][npm-registry]
* [PHP ("Composer")][composer-registry]
* [Ruby Gems][ruby-registry]

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

Links are in the Markdown source at the bottom.

  [basesystem-example]: https://github.com/renoirb/salt-basesystem "Renoir’s basesystem which also acts as a local workbench"
  [devpi]: http://doc.devpi.net/latest/quickstart-pypimirror.html "devpi, an utility to make your own mirror"
  [renoirb]: http://renoirb.com/#is
  [own-apt-repo]: https://help.ubuntu.com/community/Repositories/Personal "Debian reference document on how to make your own APT repository"
  [docker-registry]: https://github.com/docker/docker-registry
  [npm-registry]: https://github.com/mixu/npm_lazy
  [composer-registry]: https://github.com/composer/satis
  [ruby-registry]: http://guides.rubygems.org/run-your-own-gem-server/ "RoR registry. Warning, i’m unsure if there’s something more complete than this one"

See also DevOpsNotes.md

