---
title: Talk reference links
template: resume.html
---

# [Talk](index.html) reference links

* [basesystem example][basesystem-example]
* [*devpi*: PyPI server and packaging/testing/release tool][devpi]
* [Ubuntu community wiki **Creating a Personal Repository**][own-apt-repo]
* [Create your own *Docker registry*][docker-registry]
* [Create your own *NPM registry*][npm-registry]
* [Create your own *Composer/Packagist registry*][composer-registry]
* [Create your own *Gem registry*][ruby-registry]
* [jordansissel/fpm][fpm-repo]


## Packaging for easier redeployment *talk notes*

This is the Gist that contains notes and references I used to prepare the talk.

All of the commands I issued during the talk were run from a Vagrant sandbox using
[my "basesystem" salt formula](https://github.com/renoirb/salt-basesystem) as a workstation.



## References

### Blog posts I published in relation to the topic

* [**Install *igbinary* Memcached PECL PHP installation support**](https://renoirboulanger.com/blog/2015/02/install-php5-memcached-pecl-extension-support-igbinary/)
* [**Install Python 2.7.9 within Ubuntu 14.04 LTS**](https://renoirboulanger.com/blog/2015/04/upgrade-python-2-7-9-ubuntu-14-04-lts-making-deb-package/)
* [Install Discourse Docker runner in Ubuntu 14.04 LTS with *aufs*](https://renoirboulanger.com/blog/2015/04/install-discourse-docker-ubuntu-14-04-aufs-enabled/)
* [Creating a new Ubuntu 14.04 server instance on OpenStack using Cloud-Init](https://renoirboulanger.com/blog/2015/03/creating-new-ubuntu-salt-master-terminal-using-cloud-init/)
* [Create a MariaDB cluster under Ubuntu 14.04 with replication over TLS using SaltStack](https://renoirboulanger.com/blog/2015/01/create-mariadb-cluster-replication-ssl-salt-stack/)



#### Gists

1. [Bootstrapping a salt master by pulling git repositories](https://gist.github.com/WebPlatformDocs/01c09df78f05612c281f)
2. [Use SaltStack to install WordPress plugins using either git or zip](https://gist.github.com/renoirb/1b42edac44c723185c9d)
3. [Generate automaticallly SaltStack server roles grain based on its name](https://gist.github.com/renoirb/b2e0222ad52e5d453298)



### Useful talks

* [Python deployments](https://hynek.me/talks/python-deployments/)
* [NixOS](https://nixos.org/), see [PyCon 2015 talk by Domen Kozar](https://www.youtube.com/watch?v=W8A2bOKPtJU)



### Projects

* [*renoirb* "basesystem" salt formula](https://github.com/renoirb/salt-basesystem)
* [Twemproxy (a.k.a. Nutcracker)](https://blog.twitter.com/2012/twemproxy) ([github](https://github.com/twitter/twemproxy))
* [Aptly](http://www.aptly.info/) ([salt formula](https://github.com/saltstack-formulas/aptly-formula)), [*Andrey Smirnov’s* talk slides](http://www.slideshare.net/Smirnov.Andrey/aptly-debian-repository-management-tool)
* [FPM ("Fabulous Package Manager")](https://github.com/jordansissel/fpm)
* [DevPi; Running a PyPi mirror](http://doc.devpi.net/latest/quickstart-pypimirror.html)
* [SysDig](http://www.sysdig.org/)


----


  [basesystem-example]: https://github.com/renoirb/salt-basesystem "Renoir’s basesystem which also acts as a local workbench"
  [devpi]: http://doc.devpi.net/latest/quickstart-pypimirror.html "devpi, an utility to make your own mirror"
  [renoirb]: http://renoirb.com/#is
  [own-apt-repo]: https://help.ubuntu.com/community/Repositories/Personal "Debian reference document on how to make your own APT repository"
  [docker-registry]: https://github.com/docker/distribution
  [npm-registry]: https://github.com/mixu/npm_lazy
  [composer-registry]: https://github.com/composer/satis
  [ruby-registry]: http://guides.rubygems.org/run-your-own-gem-server/ "RoR registry. Warning, i’m unsure if there’s something more complete than this one"
  [fpm-repo]: https://github.com/jordansissel/fpm
  [forbes-common-devops-bottlenecks]: http://www.forbes.com/sites/mikekavis/2014/12/18/11-common-devops-bottlenecks "11 Common DevOps Bottlenecks"
