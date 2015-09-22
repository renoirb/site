background-image: url(images/webat25_browser.png)



---
class: webat25
background-image: url(images/google-doodle-webat25-browser.png)

???

- Had to learn quickly how HTTP caching works

- Could not trust all metrics, under the "fire"



---
class: center spike


![Requests burst during worldwide announcement of Web 25th anniversary, recorded by Piwik](images/webat25_requests_mar_may_2014.png)
--
![Requests between March 9th to 15, recorded by Fastly, the site's CDN](images/webat25-fastly-caching-overview-20140309.png)




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
