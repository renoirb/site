---
title: Create a MariaDB cluster with replication over SSL with Salt Stack
locale: en-CA
created: 2015-01-28
updated: 2015-02-03
canonical: 'https://renoirboulanger.com/blog/2015/01/create-mariadb-cluster-replication-ssl-salt-stack/'
status: publish
revising: false
categories:
  - projects
tags:
  - linux
  - techniques
  - Salt Stack
  - cloud-computing
keywords:
  - replication
  - database-server
  - cluster
  - configuration
  - mysql
  - MariaDB
description: Create a MariaDB cluster with replication over SSL with Salt Stack
excerpt: >-
  Some notes on how I created our updated MariaDB database cluster with
  replication.
preamble:
  text: |
    The following might still work if all software versions are still available in the exact versions ranges they were when initially published.
    Part of this article was written while maintaining WebPlatform’s Infrastructure maintenance. Mostly [in *WPD/Infrastructure/procedures/* **Replacing a VM**](https://webplatform.github.io/docs/WPD/Infrastructure/procedures/Replacing_a_VM/), and [*WPD/Infrastructure/procedures/* **Managing  MariaDB replication**](https://webplatform.github.io/docs/WPD/Infrastructure/procedures/Managing_MySQL_replication/)
---

While reworking WebPlatform infrastructure I had to rebuild a new database
cluster.

The objective of the cluster is to have more than one database server so that
our web applications can make reads on any node in the cluster.

While the system has replication, and I can send reads on any nodes on the
cluster. There is a flaw in it too, any nodes can _also_ make writes; nothing is
blocking it.

My plan is to change this so that it would be OK to send writes to anybody in
the cluster. There is now something called "Galera" that would allow me that.
But that's outside of the scope of this article.

In the current configuration, I'm purposefully not fixing it because my
configuration management makes sure only the current master. So in this setup, I
decided that the VM that gets writes has a specific mention of "masterdb" in the
hostname.

That way, its easy to see and it gives me the ability to change master at
anytime if an emergency requires me to.

## Changing MariaDB replication master

Changing master could be done in the following order:

- Lock writes on masterdb databases
- Wait replication to catch up
- On secondary database servers; remove replication configuration
- Tell all web apps to use new database master
- Remove database lock
- Setup new replication configuration to use new master

Thanks to the fact that I manage **everything** through configruation management
--including the web app configuration files-- its only a matter of applying the
states everywhere in the cluster. That makes it fairly easy to do such an heavy
move, even under stress.

This post will be updated once I have completed the multi writes setup.

## Procedure

### Assumptions

The rest of this article will assume the following:

1. You are running VMs on OpenStack, and do have credentials to make API calls
   to it
2. You have a Salt master already running
3. Your salt master has at least `python-novaclient` (`nova` commands) available
   on it
4. You have your Open Stack credentials already loaded in your salt master's
   `/etc/profile.d/` so you can use `nova` directly

### From the salt-master, initiate a few VMs to use for your database cluster

1. Before booting, ensure you have the following details in your OpenStack
   cluster and salt master;

- You have a SSH key in your OpenStack cluster. Mine is called
  "renoirb-production" and my salt master user has the private key preinstalled
- You have a `userdata.txt` file that has settings that points to your salt
  master

  ```bash
  cat /srv/opsconfigs/userdata.txt
  ```

  <!-- #XXX from app-alert-box to rb-notice-box -->
  <app-alert-box title="While migrating this article...">

  I've noticed that this `userdata.txt` file I've initially written for this
  article has then been part of [WebPlatform’s "ops" repository][wpd-ops-salt]
  from which I was (2015) using to work locally. In this repo, there was the
  [`salt-master/salt-userdata.yml`][salt-userdata].

  </app-alert-box>

  ```yaml
  #cloud-config
  manage_etc_hosts: false # Has to be set to false for everybody. Otherwise we need a DNS
  manage-resolv-conf: false
  locale: en_US.UTF-8
  timezone: America/New_York
  package_upgrade: true
  package_update: true
  package_reboot_if_required: true

  #
  # This is run at EVERY boot, good to ensure things are at the right place
  # IMPORTANT, make sure that `10.10.10.22` is a valid local DNS server.
  bootcmd:
    - grep -q -e 'nameserver' /etc/resolvconf/resolv.conf.d/head || printf
      "nameserver 10.10.10.22\n" >> /etc/resolvconf/resolv.conf.d/head
    - grep -q -e 'wpdn' /etc/resolvconf/resolv.conf.d/base || printf "search
      production.wpdn\ndomain production.wpdn\nnameserver 8.8.8.8" >
      /etc/resolvconf/resolv.conf.d/base
    - grep -q -e 'wpdn' /etc/resolv.conf || resolvconf -u

  runcmd:
    - sed -i "s/127.0.0.1 localhost/127.0.1.1 $(hostname).production.wpdn
      $(hostname)\n127.0.0.1 localhost/" /etc/hosts
    - apt-get install software-properties-common python-software-properties
    - add-apt-repository -y ppa:saltstack/salt
    - apt-get update
    - apt-get -y upgrade
    - apt-get -y autoremove

  packages:
    - salt-minion
    - salt-common
  # vim: et ts=2 sw=2 ft=yaml syntax=yaml
  ```

2. Create two `db`-type VMs

   ```bash
   nova boot \
        --image Ubuntu-14.04-Trusty \
        --user-data /srv/opsconfigs/userdata.txt \
        --key_name renoirb-production \
        --flavor lightspeed \
        --security-groups default \
        db1-masterdb

    nova boot \
         --image Ubuntu-14.04-Trusty \
         --user-data /srv/opsconfigs/userdata.txt \
         --key_name renoirb-production \
         --flavor supersonic \
         --security-groups default \
         db2
   ```

3. Accept them to the salt

   ```bash
   salt-key -y -a db1-masterdb
   salt-key -y -a db2
   ```

As an aside. Imagine you want to run dependencies automatically once a VM is
part of your salt-master. For example, adding its private IP address in a local
_Redis_ or _Etcd_ live configuration object. One could create a [Salt
"_Reactor_"][0] and make [sure the data is refreshed. This gist is a good
starting point][1] 4. Wait the VM build to finish and get their private IP
addresses

4. Wait the VM build to finish and get their private IP addresses

   ```bash
   nova list | grep db

     | ... | db1-masterdb | ACTIVE  | Running     | private-network=10.10.10.73 |
     | ... | db2          | ACTIVE  | Running     | private-network=10.10.10.74 |
   ```

   <app-image style="float:unset;" src="~/assets/content/blog/2015/05/webplatform-openstack-cluster-2014-10-06.png" alt="OpenStack nova command" figcaption=" " alt="Terminal screen">
   Command output when issuing `nova list`
   </app-image>

5. Add them to the pillars. Note that the part of the name "masterdb" is what
   Salt states uses to know which one will get the writes to. Note that in the
   end, the web apps configs will use the private IP address. Its quicker to
   generate pages if the backend doesn't need to make name resolution each time
   it makes database queries. This is why we have to reflect the pillars. Ensure
   the following structure exists in the file.

   <app-alert-box title="While migrating this article...">

   The following file is now **GitHub.com/WebPlatform/salt-pillar** project,
   [and looked like this][salt-pillar-infra]

   </app-alert-box>

   ```yaml
   # Edit /srv/pillar/infra/init.sls at the following blocks
   infra:
     hosts_entries:
       masterdb: 10.10.10.73
   ```

6. Refer to the right IP address in the configuration file with a similar salt
   `pillar.get` reference ([config template][blog-config-jinja], [state to write
   config template to filesystem][blog-config-state]).

```yaml
/srv/webplatform/blog/wp-config.php:
  file.managed:
    - source: salt://code/files/blog/wp-config.php.jinja
    - template: jinja
    - user: www-data
    - group: www-data
    - context:
        db_creds: {{ salt['pillar.get']('accounts:wiki:db') }}
        masterdb_ip: {{ salt['pillar.get']('infra:hosts_entries:masterdb') }}
    - require:
      - cmd: rsync-blog
```

... and the `wp-config.php.jinja`

```php
<?php
## Managed by Salt Stack, please DO NOT TOUCH, or ALL CHANGES WILL be LOST!
## source {{ source }}
define('DB_CHARSET',  "utf8");
define('DB_COLLATE',  "");
define('DB_HOST',     "{{ masterdb_ip|default('127.0.0.1')    }}");
define('DB_NAME',     "{{ db_creds.database|default('wpblog') }}");
define('DB_USER',     "{{ db_creds.username|default('root')   }}");
define('DB_PASSWORD', "{{ db_creds.password|default('')       }}");
```

7. Refresh the pillars, rebuild the salt master `state.highstate`, and test it
   out.

   ```bash
   salt-call saltutil.sync_all
   salt salt state.highstate

   salt-call pillar.get infra:hosts_entries:masterdb
   > local:
   >   10.10.10.73
   ```

8. Make sure the VMs has the same version of salt as you do

   ```bash
    salt-call test.version
    > local:
    >     2014.7.0

    salt db\* test.version
    > db2:
    >     2014.7.0
    > db1-masterdb:
    >     2014.7.0
   ```

9. Kick the VMs installation

   ```bash
   salt db\* state.highstate
   ```

10. Highstate takes a while to run, but once you are done, you should be able to
    work with them with the remaining of this tutorial

```bash
salt -G 'roles:db' mysql.version
> db2:
>     10.1.2-MariaDB-1~trusty-wsrep-log
> db1-masterdb:
>     10.1.2-MariaDB-1~trusty-wsrep-log
```

Each db-type VM MySQL/MariaDB/Percona server will have a _different_ database
maintenance users defined in `/etc/mysql/debian.cnf`.

Make sure you don't overwrite them unless you import everything all at once,
including the users and their grants. 11. Check that each db VMs has their SSL
certificate generated by Salt

11. Check that each db VMs has their SSL certificate generated by Salt

```bash
salt -G 'roles:db' cmd.run 'ls /etc/mysql | grep pem'
> db2:
>     ca-cert.pem
>     ca-key.pem
>     client-cert.pem
>     client-key.pem
>     client-req.pem
>     server-cert.pem
>     server-key.pem
>     server-req.pem
> db1-masterdb:
>     ca-cert.pem
>     ca-key.pem
>     client-cert.pem
>     client-key.pem
>     client-req.pem
>     server-cert.pem
>     server-key.pem
>     server-req.pem
```

Each file is a certificate so they can use to make replication through SSL.

### Now on each database server;

1. Connect to both db nodes using the salt as a Jump Host

   ```bash
   ssh masterdb.production.wpdn
   ssh db2.production.wpdn
   ```

2. Get to the MySQL/MariaDB/Percona prompt on each VMs.

If you are used with terminal screens that allows to keep sessions running even
if you get disconnected, that would be ideal. We never know if the connection
hangs.

On WebPlatform system we do have `screen` but `tmux` can do too.

    mysql

3. Check if SSL is enabled on both MySQL/MariaDB/Percona servers

   ```
   > MariaDB [(none)]> SHOW VARIABLES like '%ssl%';
   > +---------------+----------------------------+
   > | Variable_name | Value                      |
   > +---------------+----------------------------+
   > | have_openssl  | YES                        |
   > | have_ssl      | YES                        |
   > | ssl_ca        | /etc/mysql/ca-cert.pem     |
   > | ssl_capath    |                            |
   > | ssl_cert      | /etc/mysql/server-cert.pem |
   > | ssl_cipher    | DHE-RSA-AES256-SHA         |
   > | ssl_crl       |                            |
   > | ssl_crlpath   |                            |
   > | ssl_key       | /etc/mysql/server-key.pem  |
   > +---------------+----------------------------+
   ```

4. Generate SSL certificates for MySQL/MariaDB/Percona server, see [this
   gist][2] on how to do it.
5. Places to double check; To see which config keys sets what's shown in the
   previous screen, take a look in the VMs `/etc/mysql/conf.d/` folders with
   similar entries.

- `bind-address` is what allows us to communicate between servers, before MySQL
  5.5 we had `skip-networking` but now only a `bind-address` is sufficient. Make
  sure that your security groups allows only local network connections though.
- `server_id` MUST be with a different number for each nodes. Make sure no
  server has the same number.

  ```ini
  [mysqld]
  bind-address = 0.0.0.0
  log-basename=mariadbrepl
  log-bin
  binlog-format=row
  server_id=1
  ssl
  ssl-cipher=DHE-RSA-AES256-SHA
  ssl-ca=/etc/mysql/ca-cert.pem
  ssl-cert=/etc/mysql/server-cert.pem
  ssl-key=/etc/mysql/server-key.pem
  [client]
  ssl
  ssl-cert=/etc/mysql/client-cert.pem
  ssl-key=/etc/mysql/client-key.pem
  ```

6.  **From the database master** (a.k.a "masterdb"), Get the replication log
    position; We'll need the `File` and `Position` values to setup the
    replication node.

    ```
    MariaDB [(none)]> show master status;
    > +------------------------+----------+--------------+------------------+
    > | File                   | Position | Binlog_Do_DB | Binlog_Ignore_DB |
    > +------------------------+----------+--------------+------------------+
    > | mariadbrepl-bin.000002 |      644 |              |                  |
    > +------------------------+----------+--------------+------------------+
    ```

7.  Configure the `masterdb` to accept replication users. **From the salt
    master**

```bash
salt -G 'roles:masterdb' mysql.user_create replication_user '%' foobarbaz
```

NOTE: My salt states script creates a grain in `/etc/salt/grains` with the
following data;

```yaml
roles:
  - masterdb
```

Alternatively, you could call the VM `db1-masterdb`, use a [small python script
that'll parse the information for you and make it a **grain**
automatically][3]. 8. **Back to the masterdb VM**, check if the user exists,
ensure SSL is required

```
MariaDB [(none)]> show grants for 'replication_user';
> +---------------------------------------------------------------------------------------+
> | Grants for replication_user@%                                                         |
> +---------------------------------------------------------------------------------------+
> | GRANT REPLICATION SLAVE ON *.* TO 'replication_user'@'%' IDENTIFIED BY PASSWORD '...' |
> +---------------------------------------------------------------------------------------+

MariaDB [(none)]> GRANT REPLICATION SLAVE ON *.* TO 'replication_user'@'%.local.wpdn' REQUIRE SSL;
MariaDB [(none)]> GRANT USAGE ON *.* TO 'replication_user'@'%' REQUIRE SSL;

MariaDB [(none)]> SELECT User,Host,Repl_slave_priv,Repl_client_priv,ssl_type,ssl_cipher from mysql.user where User = 'replication_user';
> +------------------+--------------+-----------------+------------------+----------+
> | User             | Host         | Repl_slave_priv | Repl_client_priv | ssl_type |
> +------------------+--------------+-----------------+------------------+----------+
> | replication_user | %.local.wpdn | Y               | N                | ANY      |
> +------------------+--------------+-----------------+------------------+----------+
```

9. On the secondary db VM, in mysql prompt, setup the initial `CHANGE MASTER`
   statement;

   ```
   CHANGE MASTER TO
     MASTER_HOST='masterdb.local.wpdn',
     MASTER_USER='replication_user',
     MASTER_PASSWORD='foobarbaz',
     MASTER_PORT=3306,
     MASTER_LOG_FILE='mariadbrepl-bin.000002',
     MASTER_LOG_POS=644,
     MASTER_CONNECT_RETRY=10,
     MASTER_SSL=1,
     MASTER_SSL_CA='/etc/mysql/ca-cert.pem',
     MASTER_SSL_CERT='/etc/mysql/client-cert.pem',
     MASTER_SSL_KEY='/etc/mysql/client-key.pem';
   ```

### Checking if it worked

From one of the secondary servers, look for success indicators:

- `Seconds_Behind_Master` says **0**,
- `Slave_IO_State` says **Waiting for master to send event**

  ```
  MariaDB [wpstats]> show slave status\G
  *************************** 1. row ***************************
                 Slave_IO_State: Waiting for master to send event
                    Master_Host: masterdb.local.wpdn
                    Master_User: replication_user
                    Master_Port: 3306
                  Connect_Retry: 10
                Master_Log_File: mariadbrepl-bin.000066
            Read_Master_Log_Pos: 19382112
                 Relay_Log_File: mariadbrepl-relay-bin.000203
                  Relay_Log_Pos: 19382405
          Relay_Master_Log_File: mariadbrepl-bin.000066
               Slave_IO_Running: Yes
              Slave_SQL_Running: Yes
                Replicate_Do_DB:
            Replicate_Ignore_DB:
             Replicate_Do_Table:
         Replicate_Ignore_Table:
        Replicate_Wild_Do_Table:
    Replicate_Wild_Ignore_Table:
                     Last_Errno: 0
                     Last_Error:
                   Skip_Counter: 0
            Exec_Master_Log_Pos: 19382112
                Relay_Log_Space: 19382757
                Until_Condition: None
                 Until_Log_File:
                  Until_Log_Pos: 0
             Master_SSL_Allowed: Yes
             Master_SSL_CA_File: /etc/mysql/ca-cert.pem
             Master_SSL_CA_Path:
                Master_SSL_Cert: /etc/mysql/client-cert.pem
              Master_SSL_Cipher:
                 Master_SSL_Key: /etc/mysql/client-key.pem
          Seconds_Behind_Master: 0
  Master_SSL_Verify_Server_Cert: No
                  Last_IO_Errno: 0
                  Last_IO_Error:
                 Last_SQL_Errno: 0
                 Last_SQL_Error:
    Replicate_Ignore_Server_Ids:
               Master_Server_Id: 1
                 Master_SSL_Crl: /etc/mysql/ca-cert.pem
             Master_SSL_Crlpath:
                     Using_Gtid: No
                    Gtid_IO_Pos:
        Replicate_Do_Domain_Ids:
    Replicate_Ignore_Domain_Ids:
  1 row in set (0.00 sec)
  ```

### Managing users

In the end, since replication is active, you can add users to your system and
all nodes will get the privileges.

The way I work is that I can use Salt stack states to add privileges in my
states (more details soon) or I can use a few salt commands from my salt master
and send them to the database `masterdb` VM.

```
salt -G 'roles:masterdb' mysql.db_create 'accounts_oauth' 'utf8' 'utf8_general_ci'
salt -G 'roles:masterdb' mysql.user_create 'accounts' '%' 'barfoo'
salt -G 'roles:masterdb' mysql.grant_add 'ALL PRIVILEGES' 'accounts_oauth.*' 'accounts' ‘%’
```

### References

- http://dev.mysql.com/doc/refman/5.7/en/replication-solutions-ssl.html
- https://mariadb.com/kb/en/mariadb/documentation/managing-mariadb/replication/standard-replication/setting-up-replication/

[0]: https://docs.saltstack.com/en/latest/topics/reactor/
[1]: https://gist.github.com/WebPlatformDocs/563cb12326b92b22a452
[2]: https://gist.github.com/WebPlatformDocs/dee3c76a88b3c44da564
[3]: https://gist.github.com/renoirb/b2e0222ad52e5d453298
[4]: /cdn-cgi/l/email-protection
[blog-config-jinja]:
  https://github.com/webplatform/salt-states/blob/20150608/code/files/blog/local.php.jinja
  'code/files/blog/local.php.jinja on GitHub.com/webplatform/salt-states as of 2015-06-08'
[blog-config-state]:
  https://github.com/webplatform/salt-states/blob/20150608/code/blog.sls#L48-L55
  'code/blog.sls on GitHub.com/webplatform/salt-states as of 2015-06-08'
[salt-userdata]:
  https://github.com/webplatform/ops/blob/f6e0390a/salt-master/salt-userdata.yml
  'salt-master/salt-userdata.yml on GitHub.com/webplatform/ops as of 2015-06-08'
[salt-pillar-infra]:
  https://github.com/webplatform/salt-pillar/tree/3d718578/infra
  'infra/* on GitHub.com/webplatform/salt-pillar as of 2015-06-08'
[wpd-ops-salt]:
  https://github.com/webplatform/ops/blob/f6e0390a/salt-master
  'salt-master/* on GitHub.com/webplatform/ops as of 2015-06-08'
[wpd-infra-replacing-vm]:
  https://webplatform.github.io/docs/WPD/Infrastructure/procedures/Replacing_a_VM/
  'WebPlatform Docs WPD/Infrastructure/ Replacing a VM'
[wpd-infra-managing-mysql-replication]:
  https://webplatform.github.io/docs/WPD/Infrastructure/procedures/Managing_MySQL_replication/
  'WebPlatform Docs WPD/Infrastructure/ Managing MySQL replication'
