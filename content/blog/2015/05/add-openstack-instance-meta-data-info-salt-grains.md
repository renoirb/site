---
title: Add OpenStack instance meta-data info in your salt grains
locale: en-CA
created: 2015-05-22
updated: 2023-11-17
canonical: https://renoirboulanger.com/blog/2015/05/add-openstack-instance-meta-data-info-salt-grains/
status: publish
revising: false
categories:
  - snippet
tags:
  - linux
  - operations
  - salt-stack
  - cloud-computing
  - open-source
keywords:
  - Ansible
  - Infrastructure as Code
preamble:
  text: |
    It is possible the code shown here no longer works.
    This was written at the time before VMWare aquired SaltStack and maybe
    code shown uses parts of Salt Stack that no longer exists.
coverImage:
  src: ~/assets/content/blog/2015/05/webplatform-openstack-cluster-2014-10-06.png
  alt: A terminal window showing Open Stack nova client output
  text: |
    Open Stack NOVA client is leveraging an internal HTTP API to display data we can
    consume from the CLI.
    The present article shows how to add data from OpenStack into Salt Stack.
excerpt: >-
  Ever wanted to target salt states based on data only the underlying OpenStack
  cluster knows. Here’s how I did it.
---

During a work session on my salt-states for WebPlatform.org I wanted to shape be
able to query the OpenStack cluster meta-data so that I can adjust more
efficiently my salt configuration.

What are grains? Grains are structured data that describes what a minion has
such as which version of GNU/Linux its running, what are the network adapters,
etc.

The following is a Python script that adds data in Salt Stack' internal database
called grains.

I have to confess that I didn't write the script but adapted it to work within
an OpenStack cluster. More precisely on DreamHost's DreamCompute cluster. The
original script came from [saltstack/salt-contrib][0] and the original file was
[ec2_info.py][1] to read data from EC2.

The [original script][1] wasn't getting any data in the cluster. Most likely due
to API changes and that EC2 API exposes dynamic meta-data that the
DreamCompute/OpenStack cluster don't.

<rb-notice-box variant="info" class="my-5">
<strong slot="header">Script source</strong>

The article’s source script is available on GitHub as a Python script we can
insert into SaltStack as a grain

- [github.com/webplatform/salt-states][dreamcompute-grain-webplatform-gh]

</rb-notice-box>

In the end, I edited the file to make it work on DreamCompute and also truncated
some data that the grains subsystem already has.

My original objective was to get a list of `security-groups` the VM was
assigned. Unfortunately the API doesn't give that information yet. Hopefully
I'll find a way to get that information some day.

## Get OpenStack instance detail using Salt

Locally

```bash
salt-call grains.get dreamcompute:uuid
```

```yaml
local:
    10a4f390-7c55-4dd3-0000-a00000000000
```

Or for another machine

```bash
salt app1 grains.get dreamcompute:uuid
```

```yaml
app1:
    510f5f24-217b-4fd2-0000-f00000000000
```

What size did we create a particular VM?

```bash
salt app1 grains.get dreamcompute:instance_type
```

```yaml
app1:
    lightspeed
```

## What data you can get

Here is a sample of the grain data that will be added to every salt minion you
manage.

You might notice that some data will be repeated such as the 'hostname', but the
rest can be very useful if you want to use the data within your configuration
manag

```yaml
dreamcompute:
    ----------
    availability_zone:
        iad-1
    block_device_mapping:
        ----------
        ami:
            vda
        ebs0:
            /dev/vdb
        ebs1:
            vda
        root:
            /dev/vda
    hostname:
        salt.novalocal
    instance_action:
        none
    instance_id:
        i-00000000
    instance_type:
        lightspeed
    launch_index:
        0
    local_ipv4:
        10.10.10.11
    name:
        salt
    network_config:
        ----------
        content_path:
            /content/0000
        name:
            network_config
    placement:
        ----------
        availability_zone:
            iad-1
    public_ipv4:
        203.0.113.11
    public_keys:
        ----------
        someuser:
            ssh-rsa ...an rsa public key... someuser-comment@example.org
    ramdisk_id:
        None
    reservation_id:
        r-33333333
    security-groups:
        None
    uuid:
        10a4f390-7c55-4dd3-0000-a00000000000
```

## What does the script do?

The script basically scrapes OpenStack meta-data service and serializes into
saltstack grains system the data it gets.

[OpenStack's meta-data service][3] is similar to what you'd get from AWS, but
doesn't expose exactly the same data. This is why I had to adapt the original
script.

To get data from an instance you simply (really!) need to make an HTTP call to
an [internal IP address that OpenStack nova][3] answers. (that’s what the IPv4
address starting by `169.` is)

For example, from an AWS/OpenStack VM, you can know the instance hostname by
doing

```bash
curl http://169.254.169.254/latest/meta-data/hostname

salt.novalocal
```

To know what the script calls, [you can add a line at `_call_aws(url)`
method][dreamcompute-grain-webplatform-commit] ([lines 32-34](https://github.com/webplatform/salt-states/commit/821ca803#diff-6eea2056af3e939361a559b84665c1d97fc9e062f7b7f79910567fc688881056R32-R34)), like so;

```diff
diff --git a/_grains/dreamcompute.py b/_grains/dreamcompute.py
index 682235d..c3af659 100644
--- a/_grains/dreamcompute.py
+++ b/_grains/dreamcompute.py
@@ -25,6 +25,7 @@ def _call_aws(url):

     """
     conn = httplib.HTTPConnection("169.254.169.254", 80, timeout=1)
+    LOG.info('API call to ' + url )
     conn.request('GET', url)
     return conn.getresponse()
```

When you `saltutil.sync_all` (i.e. refresh grains and other data), the log will
tell you which endpoints it queried.

In my case they were:

```shellsession
[INFO    ] API call to /openstack/2012-08-10/meta_data.json
[INFO    ] API call to /latest/meta-data/
[INFO    ] API call to /latest/meta-data/block-device-mapping/
[INFO    ] API call to /latest/meta-data/block-device-mapping/ami
[INFO    ] API call to /latest/meta-data/block-device-mapping/ebs0
[INFO    ] API call to /latest/meta-data/block-device-mapping/ebs1
[INFO    ] API call to /latest/meta-data/block-device-mapping/root
[INFO    ] API call to /latest/meta-data/hostname
[INFO    ] API call to /latest/meta-data/instance-action
[INFO    ] API call to /latest/meta-data/instance-id
[INFO    ] API call to /latest/meta-data/instance-type
[INFO    ] API call to /latest/meta-data/local-ipv4
[INFO    ] API call to /latest/meta-data/placement/
[INFO    ] API call to /latest/meta-data/placement/availability-zone
[INFO    ] API call to /latest/meta-data/public-ipv4
[INFO    ] API call to /latest/meta-data/ramdisk-id
[INFO    ] API call to /latest/meta-data/reservation-id
[INFO    ] API call to /latest/meta-data/security-groups
[INFO    ] API call to /openstack/2012-08-10/meta_data.json
[INFO    ] API call to /latest/meta-data/
[INFO    ] API call to /latest/meta-data/block-device-mapping/
[INFO    ] API call to /latest/meta-data/block-device-mapping/ami
[INFO    ] API call to /latest/meta-data/block-device-mapping/ebs0
[INFO    ] API call to /latest/meta-data/block-device-mapping/ebs1
[INFO    ] API call to /latest/meta-data/block-device-mapping/root
[INFO    ] API call to /latest/meta-data/hostname
[INFO    ] API call to /latest/meta-data/instance-action
[INFO    ] API call to /latest/meta-data/instance-id
[INFO    ] API call to /latest/meta-data/instance-type
[INFO    ] API call to /latest/meta-data/local-ipv4
[INFO    ] API call to /latest/meta-data/placement/
[INFO    ] API call to /latest/meta-data/placement/availability-zone
[INFO    ] API call to /latest/meta-data/public-ipv4
[INFO    ] API call to /latest/meta-data/ramdisk-id
[INFO    ] API call to /latest/meta-data/reservation-id
[INFO    ] API call to /latest/meta-data/security-groups
```

Its quite heavy.

Hopefully the script respects HTTP headers and don't bypass `304 Not Modified`
responses. Otherwise it'll add load to nova. Maybe I should check that
(note-to-self).

## Install

You can add this feature by adding a file in your salt states repository in the
`_grains/` folder. The file can have any name ending by `.py`.

You can grab the grain python code [in this gist][4].

<!--#TODO-Display-Or-Migrate-Gists-->
<!--script lazy src="https://gist.github.com/WebPlatformDocs/6b26b67321fe15870aa0.js"></script-->

[0]: https://github.com/saltstack/salt-contrib
[1]: https://github.com/saltstack/salt-contrib/blob/master/grains/ec2_info.py
[3]:
  http://docs.openstack.org/admin-guide-cloud/content/section_metadata-service.html
[4]:
  https://gist.github.com/WebPlatformDocs/6b26b67321fe15870aa0
  'Gist where you can add openstack meta-data in your grains'
[dreamcompute-grain-webplatform-gh]:
  https://github.com/webplatform/salt-states/blob/master/_grains/dreamcompute.py
[dreamcompute-grain-webplatform-commit]:
  https://github.com/webplatform/salt-states/commit/821ca803#diff-6eea2056af3e939361a559b84665c1d97fc9e062f7b7f79910567fc688881056R33
