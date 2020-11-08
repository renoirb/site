---
locale: en-CA
title: Recover Discourse from a backup, adjust domain name
canonical: https://renoirboulanger.com/blog/2015/11/recover-discourse-backup-change-domain-name/
date: &createdAt '2015-11-20T20:55:06-04:00'
createdAt: *createdAt
keywords:
  - Discourse
  - DNS
  - migration
categories:
  - experiments
tags:
  - procedure
  - operations
  - docker
  - webplatform
coverImage:
  src: ~/assets/content/blog/2015/11/discourse_migration_list_gravatar_images.png
  alt:
    &coverImageAlt Side by side comparison while working on migrating Discourse
    with WICG
  text: *coverImageAlt
preamble:
  text: |
    This was written at the time I was closing loops at the [end of my time with the W3C][leaving-w3c].
    The intent at the time (before WebPlatform project closed was to host *discuss.webplatform.org* what is now known as [W3C’s Web Platform Incubator Community Group (WICG)][wicg-article] and is available as [discourse.wicg.io][wicg]
    [leaving-w3c]: /blog/2015/07/leaving-w3c/ "Leaving W3C"
    [wicg]: https://discourse.wicg.io/
    [wicg-article]: https://www.w3.org/blog/2015/07/wicg/
---

Roughly based on [Move your Discourse instance to a different server][0] post.
But without using the web UI. Because sysadmins prefers terminal.

**IMPORTANT**: Make **SURE** the backup dump was generated from the same
Discourse version the one you'll import it into.

Copy from host backup into shared folder. Imagine you uploaded via SSH in your
host home directory.

```bash
cp ~/snapshot.tar.gz /srv/webplatform/shared/backups/
```

Note that the folder `/srv/webplatform/discuss/shared/standalone/backups/` from
the docker host would end up to be in `/shared/backups/` inside the container.

Enter the VM, make sure enable_restore is run from `discourse` cli utility

```bash
./launcher enter app
discourse enable_restore
```

Find the mounted backup file from within the container

```bash
ll /shared/backups/default/
```

Make sure `/shared/backups/foo.tar.gz` is readable by can read

```bash
chmod o+r /shared/backups/default/foo.tar.gz
discourse restore foo.tar.gz
discourse disable_restore
```

Remap domain name

```bash
discourse remap discourse.specifiction.org discuss.webplatform.org
```

Then, work on user uploads and regenerate assets. That'll make sure ;

```bash
rake uploads:clean_up
rake posts:rebake
```

Refer to

- https://meta.discourse.org/t/change-the-domain-name-or-rename-my-discourse/16098
- **Most helpful post** [Move your Discourse instance to a different server][0]
- https://meta.discourse.org/t/multisite-configuration-with-docker/14084/32, and
  the [referenced NGINX configuration in Discourse GitHub repo][1]
- https://meta.discourse.org/t/multisite-configuration-with-docker/14084/8
- [Work notes on WebPlatform GitHub issue tracker][2]

[0]:
  https://meta.discourse.org/t/move-your-discourse-instance-to-a-different-server/15721
[1]: https://github.com/discourse/discourse/blob/master/config/nginx.sample.conf
[2]: https://github.com/webplatform/ops/issues/152
