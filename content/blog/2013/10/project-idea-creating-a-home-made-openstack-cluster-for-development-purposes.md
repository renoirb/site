---
locale: en-CA
title: 'Project idea: Creating a home made OpenStack cluster for development purposes'
canonical: >-
  https://renoirboulanger.com/blog/2013/10/project-idea-creating-a-home-made-openstack-cluster-for-development-purposes/
status: publish
revising: true
created: '2013-10-24'
updated: '2014-02-04'
tags:
  - cloud-computing
  - development
  - favourites
  - linux
  - salt-stack
categories:
  - projets
coverImage:
  src: ~/assets/content/blog/2013/10/computercloud-218x300.jpg
  srcset:
  -  ~/assets/content/blog/2013/10/computercloud-218x300.jpg 218w
  -  ~/assets/content/blog/2013/10/computercloud.jpg 462w
  sizes: '(max-width: 218px) 100vw, 218px'
  alt: Decorative image of a laptop floating in front of a cloudy sky.
description: >-
  The idea of the project is to give an alternate life to a mostly unused
  laptops a second life.
excerpt: >-
  At work, I use an OpenStack environment and a few Salt states to manage a set
  of virtual machines. I'd like to give another life to two old laptops that
  spend most of their time shut down, but without changing or using their local
  hard drives.
---

<p>Think about it. How about using spare computers to create a homemade OpenStack cluster for development.</p>

<p>We can do that from our cloud provider, or create a separate project or even use Wikimedia's OpenStack infrastructure allowance for the project.</p>

<p>With such setup, one could work locally with his Salt stack (or Puppet, or Ansible) deployment schemes, try them, trash <abbr>VMs</abbr>, rebuild.</p>

<p>The beauty of it would be that it could be made in a fashion that would not even modify the computer running the VMs. The cluster member running OpenStack hypervisor would be installed seeded through net boot. Not booting from the network would revert the computer back as if it never been used.</p>

<p>Here is what I think would require to make this happen.</p>

<h3>Limitations</h3>

<ul>
<li>Not use Computer/Laptop local hard drive</li>
<li>Rely only on net boot</li>
</ul>

<h3>Material</h3>

<ul>
<li>1..n Computers/laptop supporting netboot</li>
<li>1 Storage device supporting one or more storage protocol (<abbr>nfs</abbr>, samba, <abbr>sshfs</abbr>)</li>
</ul>

<h3>Hardware requirements</h3>

<ul>
<li>1 <abbr>VM</abbr> providing tftp, dhcp, dns to serve as net boot server that should run outide of the cluster ("Networking node")</li>
<li>1 <abbr>VM</abbr> image of OpenStack controller ("OpS controller")</li>
<li>1 LiveCD+persistent image with OpenStack preinstalled, configured to use storage device credentials as it's root filesystem ("OpS Hypervisor")</li>
</ul>

<h3>Distribution choice factors</h3>

<ul>
<li>Networking node can be the smallest Linux possible, on a RaspberryPI, or a modified Router or Network Attached storage device?</li>
<li>OpS Hypervisor to be among the supported OpenStack distributions (I think a Ubuntu precise 12.04 <abbr>LTS</abbr> or a variant such as Puppy Linux might work too)</li>
</ul>

<h3>To be continued...</h3>

<p>I will keep you posted whenever possible on the outcome of my research.</p>

<p>Did you ever do this in your infra. Leave a comment.</p>
