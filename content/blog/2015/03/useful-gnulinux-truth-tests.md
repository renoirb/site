---
title: A few useful GNU/Linux truth tests while creating salt states
locale: en-CA
created: 2015-03-10
updated: 2023-02-18
canonical: 'https://renoirboulanger.com/blog/2015/03/useful-gnulinux-truth-tests/'
status: publish
revising: true
categories:
  - techniques
tags:
  - linux
  - salt-stack
  - cloud-computing
  - procedures
keywords:
  - GNU
  - usermod
excerpt: >-
  A common task while writing server configuration management manifests is to
  make sure that some enforcements are run in specific situations.
---

Nothing amazing here, just that in some situations I want to run commands in
salt stack only in some situations that should be enforced.

Those tests are written within Salt stack states and YAML, but the test are
plain GNU/Linux `tests`.

## Add group additional membership to user

```yaml
usermod -a -G amavis clamav:
  cmd.run:
    - unless: 'grep "^amavis" /etc/group | grep -q -e clamav'
```

A similar alternate could also be

```yaml
usermod -a -G amavis clamav:
  cmd.run:
    - unless: grep -q -e '^amavis.*clamav$' /etc/group
```

## Change ownership on a folder **only if** its not what we expect

```yaml
{% for es_folder in [
      '/usr/share/elasticsearch/data',
      '/var/lib/elasticsearch'
] %}
chown -R app-user:app-user {{ es_folder }}:
  cmd.run:
    - onlyif: "test `stat -c %G {{ es_folder }}` != app-user"
{% endfor %}
```
