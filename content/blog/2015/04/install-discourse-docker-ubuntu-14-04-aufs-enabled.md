---
title: Install Discourse and Docker on Ubuntu 14.04 with aufs enabled
locale: en-CA
createdAt: 2015-04-02
updatedAt: 2023-02-18
canonical: 'https://renoirboulanger.com/blog/2015/04/install-discourse-docker-ubuntu-14-04-aufs-enabled/'
status: publish
revising: true
categories:
  - projects
tags:
  - standardization
  - salt-stack
  - procedure
keywords:
  - docker
  - discourse
  - aufs
  - ubuntu
  - makefile
excerpt: >-
  I needed to install a set of VMs to run apps within Docker containers. In the
  case of Discourse, docker requires you to use aufs instead of devicemapper.
---

While working to run [Discourse][0] on [Docker][1] I was getting numerous errors
about a mount problem related to device mapper.

If you are using Ubuntu 14.04 LTS, want to solve the problem with aufs, and use
Salt Stack to control your VMs, here's how I did it.

After digging [for][2] [some][3] time, I found others who had also problems to
run Discourse in Docker, and that we had to use "aufs".

I had no idea that we could use different mount subsystems in Docker.

So I had to read some more on we can find out if we have `aufs` (whatever this
is), and that we can tell whether or not Docker is configured to use it.

The [issue docker/docker\#10161][4] had proven very helpful to figure out what
was my problem. I never thought I could tell Docker to use another device mapper
engine anyway. In the end, all you can do is to add a `-s foo` and it can change
the Storage engine.

Turns out that `aufs` is a Kernel module, and that latest Ubuntu 14.04 has it
[but not in the default kernel package][5]. You have to make sure that
`linux-image-extra-virtual` and `aufs-tools` are installed.

Documentation and notes recommends to download and [run a shell script][6] to
install Docker instead of using the distribution packages. But I refuse to
follow this advice because I already manage via Salt stack every components of
the infrastructure. I just needed to put the right pieces together.

Since those changes are specific to Discourse I didn't wanted to make a pull
request to [**saltstack-formulas/docker-formula**][7] right away, i'd need to
[follow Salt formula conventions][8] and add more logic for my PR to be usable
by other server runtime too. Not something I had in my plans today.

## Procedure

On the salt master, make sure you have the following:

1. Add `saltstack-formulas/docker-forumla` in your gitfs entries

```yaml
# /etc/salt/master.d/gitfs.conf
fileserver_backend:
  - roots
  - git

gitfs_remotes:
  - https://github.com/saltstack-formulas/docker-formula.git
```

2. Ensure you have `docker` in your base top file

```yaml
# /srv/salt/top.sls
base:
  'backend-discourse*':
    - discourse
```

3. Create add those lines in `/srv/salt/discourse/init.sls`

```yaml
# https://github.com/saltstack-formulas/docker-formula
{% set kernelrelease = salt['grains.get']('kernelrelease') -%}
{%- set dir = '/srv/webplatform/discourse' -%}

include:
  - docker

/etc/default/docker:
  file.managed:
    - contents: |
        # Docker Upstart and SysVinit configuration file
        #
        # Managed by Salt Stack, at {{ source }}. Do NOT edit manually!
        # Docker dependencies: Refer to the script at https://get.docker.com/
        # Available cli options: http://docs.docker.com/reference/commandline/cli/
        DOCKER_OPTS="--dns 8.8.8.8 -s aufs"
    - watch_in:
      - service: docker-service
    - require:
      - pkg: lxc-docker
      - pkg: linux-kernel-deps

linux-kernel-deps:
  pkg.installed:
    - pkgs:
      - linux-image-extra-{{ kernelrelease }}
      - aufs-tools
  cmd.run:
    - name: modprobe aufs
    - unless: modinfo aufs > /dev/null 2>&1

clone-discourse:
  pkg.installed:
    - name: git
  git.latest:
    - name: https://github.com/discourse/discourse_docker.git
    - user: ubuntu
    - target: {{ dir }}
    - unless: test -f {{ dir }}/containers/app.yml
    - require:
      - file: {{ dir }}
      - pkg: git
  file.directory:
    - name: {{ dir }}
    - user: ubuntu
    - group: ubuntu
    - recurse:
      - user
      - group
```

4. Restart your salt master service, sync everything and run highstate

```bash
service salt-master restart
salt \* saltutil.sync_all
salt \* service.restart salt-minion
salt discourse-backend\* state.highstate
```

5. Go to the VM and run the installer

Note that as long as there is no `/srv/webplatform/discourse/containers/app.yml`
the states will update the git [repository to the latest version][9]. In my
projects, I make sure that salt also generates a configuration file with my
current environment details (e.g. DNS, Salt master, Redis, SMTP relay, Postgres'
private IP addresses).

[0]: https://www.discourse.org/
[1]: https://www.docker.com/
[2]: https://meta.discourse.org/t/docker-error-on-bootstrap/13657/9
[3]:
  https://meta.discourse.org/t/ubuntu-updates-intefere-with-docker-and-aufs/25039
[4]: https://github.com/docker/docker/issues/10161
[5]: https://github.com/docker/docker/pull/10860
[6]: https://get.docker.com/
[7]: https://github.com/saltstack-formulas/docker-formula
[8]:
  https://docs.saltstack.com/en/latest/topics/development/conventions/formulas.html
[9]: https://github.com/discourse/discourse_docker
