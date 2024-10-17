---
title: Creating a new Ubuntu Salt master from the terminal using Cloud-Init
locale: en-CA
created: 2015-03-09
updated: 2023-02-18
canonical: 'https://renoirboulanger.com/blog/2015/03/creating-new-ubuntu-salt-master-terminal-using-cloud-init/'
status: publish
revising: true
categories:
  - projects
tags:
  - operations
  - linux
  - salt-stack
  - cloud-computing
keywords:
  - GNU
  - OpenStack
  - Cloud Init
excerpt: >-
  Cloud-Init is made in a way that it handles distribution specific package
  installation details automatically. With it, you can create a new salt master
  in a few commands.
coverImage:
  src: ~/assets/content/blog/2015/03/openstack-cloudinit-screenshot.jpg
  text: |
    [Open Stack Cloud-Init](https://cloudinit.readthedocs.io/en/latest/) documentation.
description: Creating new Salt master in a few commands with Cloud-Init
---

If you run on Virtual Machines on a provider that runs OpenStack you can also
leverage a component that’s made to automatically install softwares at creation
time. With this, you can any new node in your cluster, including the salt-master
in a few terminal commands.

Before starting out, you need to make sure your cloud provider runs Open Stack
and has [Cloud-Init][0] enabled. To check it out, look in the "Launch instance"
dialog to create a new VM a tab titled "Post-Creation", it might just simply
work.

<app-image style="float:unset;" src="~/assets/content/blog/2015/03/openstack-cloudinit-launchinstance-dialog.png" alt="OpenStack Cloud-Init dialog">
</app-image>

[Cloud-Init][0] is basically reading a manifest that declares what’s the
specifics of the new VM and is part of the conversion from the initial image
OpenStack into the specific instance you will be using. You can follow those
[two][1] [articles][2] that describes well how _Cloud-Init_ works.

> [Cloud-Init][0] is made in a way that it handles distribution specific
> package installation details automatically.

The following is specific to an _Ubuntu server_ VM, but you might need to adjust
the package names to match your current server distribution as those tools are
getting more and more popular in the industry.

Before testing out on a new VM, you could also check from an existing instance
and ask through an HTTP request what was the current instance’ post-creation
script using cURL.

Note that the IP address you see below is a virtual interface provided by
OpenStack but can be navigated through HTTP, try it out like this;

```bash
curl http://169.254.169.254/openstack/

  2012-08-10
  2013-04-04
  2013-10-17
```

If you see a similar output, you can ask what was the post-creation
configuration ("userdata") it used at creation time. You can dig the tree,
here’s how you can find it in an OpenStack (CURRENT VERSION NICKNAME) cluster.

For instance, my a salt master would have the following configuration;

```bash
curl http://169.254.169.254/openstack/2013-10-17/user_data

  #cloud-config
  manage_etc_hosts: false
  manage-resolv-conf: false
  locale: en_US.UTF-8
  timezone: America/New_York
  package_upgrade: true
  package_update: true
  package_reboot_if_required: true

  ssh_import_id: [saltstack]
  apt_sources:
    - source: "ppa:saltstack/salt"

  packages:
    - salt-minion
    - salt-common
    - salt-master
    - python-software-properties
    - software-properties-common
    - python-novaclient
```

To boot an instance from the terminal, you can use the "nova" command like this;

```bash
nova boot \
     --image Ubuntu-14.04-Trusty \
     --user-data /srv/cloudconfig.yml \
     --key_name keyname \
     --flavor subsonic \
     --security-groups default \
     salt
```

This assumes that you have the following available in your OpenStack dashboard:

1. An SSH public key called "keyname" in your tenant
2. A flavor called "subsonic" that has a predefined configuration of vCPU, vRAM,
   etc.
3. A security group called "default", you could use more than one by separating
   them by comas; e.g. default,foo,bar
4. A text file in `/srv/cloudconfig.yml` in YAML format that holds your
   [Cloud-Init][0] (a.k.a. "userdata") configuration.
5. You have your nova configuration available (look in your cloud provider
   dashboard "Download OpenStack RC File" link in "Access & Security" and "API
   access") and available in your server’s `/etc/profile.d/` profile folder.
6. You have "`python-novaclient`" (or its equivalent) installed

To test it out yourself, you could use the block I gave earlier and create a
file in `/srv/cloudconfig.yml` and give the the _nova_ command a try.

In this case, you might want to call the new VM "salt" as the default Salt stack
configuration will try to communicate to it to make it its salt master. In this
case, it’ll be itself.

The creation of the salt master could also contain a few git repositories to be
cloned at the salt master creation time making your salt master as easily
replaceable as any other components in your "cloud".

A set of sample scripts I use to create a new salt master off of a few
[git repositories can be found in the following Gist][3]

## Read more

The following articles was found to be describing in more detail what I
introduced in this article.

- [Easily automate The provisioning of your DigitalOcean Droplets][1]. Don’t be
  fooled by the name, the article is actually describing _Cloud-Init_
- [An introduction to cloud-config scripting][2]

[0]:
  https://cloudinit.readthedocs.org/en/latest/
  'Cloud-Init reference documentation pages'
[1]:
  https://www.digitalocean.com/community/tutorials/an-introduction-to-cloud-config-scripting
  'Easily automate The provisioning of your DigitalOcean Droplets ... using Cloud-Init'
[2]:
  https://www.digitalocean.com/community/tutorials/an-introduction-to-cloud-config-scripting
  'An introduction to cloud-config scripting'
[3]: https://gist.github.com/WebPlatformDocs/01c09df78f05612c281f
