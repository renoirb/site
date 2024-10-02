---
locale: fr-CA
title: Processus de création d'une VM faisant partie d'un parc géré par Salt Stack
canonical: >-
  https://renoirboulanger.com/blog/2014/01/processus-de-creation-dune-vm-faisant-partie-dun-parc-gere-par-salt-stack/
status: publish
revising: true
created: '2014-01-22'
updated: '2015-03-09'
tags:
  - cloud-computing
  - favourites
  - good-practices
  - logiciel-libre
  - salt-stack
categories: []
description: Processus de création d'une VM faisant partie d'un parc Salt stack
excerpt: >-
  Voici une courte procédure décrivant comment je crée une nouvelle machine
  virtuelle et y applique les configurations automatiquement.
---

<p>A mon <a href="/blog/2013/08/i-am-joining-w3c-to-work-on-the-webplatform-project/" title="I am joining the W3C to work on WebPlatform.org!">emploi <em>actuel</em></a> je gère un parc de machines virtuelles (VMs) qui est automatisé par un système de gestion de configuration appelé <strong><a href="http://www.saltstack.com/community/" title="Salt Stack, The Salt Open Source Software Project">Salt Stack</a></strong>.</p>

<blockquote>
  <p><a href="http://www.saltstack.com/community/" title="Salt Stack, The Salt Open Source Software Project">Salt stack</a> est un outil permettant de décrire quel est l’état désiré d’un serveur. Comme d’autres outils avec une utilité similaire, <em>Salt Stack</em> peut être utilisé dans des <em>environnements hétérogènes</em> sous <strong>GNU/Linux</strong>, <strong>Mac OS</strong>, et <strong>Windows</strong>, <strong>FreeBSD</strong>, etc.</p>
</blockquote>

<p>L’environment que nous utilisons est un serveur avec des «blades». Chaque «blade» fournit les services créant un cluster OpenStack. Dans le futur, nous risquons d'avoir plus d'un fournisseur OpenStack. Pour automatiser comme nous l'aimons, nous utilisons grandement la ligne de commande avec le paquet <code>python-novaclient</code>.</p>

<p>Chaque machine virtuelle roule une version <em>LTS</em> («Long Term Support») de Ubuntu.</p>

<blockquote>
  <p>Absolument toutes les configurations sont appliqués via <em>Salt Stack</em>, la seule chose qui est fait manuellement en
  ce moment est de créer la nouvelle instance, et de l'ajouter au «master» de Salt Stack.</p>
</blockquote>

<p>Même là, ça risque de changer lorsque nous aurons déployé <a href="http://www.saltstack.com/salt-cloud/" title="Salt Cloud, a Salt Stack component specialized in helping automating cloud deployment">Salt Cloud</a>.</p>

<h2>Procédure</h2>

<p><strong>Mise à jour Mars 2015</strong>: <em>Un nouvel article sur le même sujet</em> a été écrit (en anglais) et illustre <a href="/blog/2015/03/creating-new-ubuntu-salt-master-terminal-using-cloud-init/" title="Creating a new Ubuntu salt-master from the terminal using Cloud-Init">comment faire une nouvelle VM avec encore moins d’étapes</a></p>

<ol>
<li><p>Boot une nouvelle node avec Nova</p>

<pre><code>joe@master:~$ nova boot --image lucid-minion-template --flavor wpdn.large --key-name renoirb app6
</code></pre></li>
<li><p>Donner un nom en fonction du type de serveur a déployer avec un numéro à la fin. Exemple: <code>app6</code></p>

<p><em>NOTE</em> Dans mon cas, j'ai notamment: app, db, memcached, etc.</p></li>
<li><p>Ajoute l'adresse floating dans <code>/srv/pillar/nodes/init.sls</code> comme les autres</p>

<pre><code>nodes:
  master:
    public:  ####IP PUBLIQUE CACHÉE####
    private: 10.0.0.1

  app1:
    public:  ####IP PUBLIQUE CACHÉE####
    private: 10.0.0.7

  memcache2:
    public:  ####IP PUBLIQUE CACHÉE####
    private: 10.0.0.4

  app5:
    public:  ####IP PUBLIQUE CACHÉE####
    private: 10.0.0.3
</code></pre></li>
<li><p>Prend le fichier <code>/home/ubuntu/runme</code> de n'importe quel autre serveur et colle le dans la nouvelle machine. Puis execute (<code>sudo /bin/bash runme</code>)</p></li>
<li><p>Ajouter une ligne dans le nouveau serveir dans <code>/etc/salt/minion.d/master.conf</code></p>

<pre><code>id: app6
</code></pre>

<p>... Voir les autres nodes</p></li>
<li><p>Restart salt-minion</p>

<pre><code>ubuntu@node6:~$ sudo service salt-minion restart
</code></pre></li>
<li><p>Ajoute la clée au master</p>

<pre><code>joe@master:~$ sudo salt-key -a app6
</code></pre>

<p>... Le '-a foo' est optionnel et tu peux lister Les nodes.</p></li>
<li><p>Run state.highstate</p>

<pre><code>joe@master:~$ sudo salt app6 state.highstate
</code></pre></li>
<li><p>Uploader le code via rsync dans la nouvelle app node, puis re-rouler state.highstate (certains scripts prennent pour aquis que le code est déjà déployé)</p>

<pre><code>joe@master:~$ sudo salt app6 state.sls code.node_app
joe@master:~$ sudo salt app6 state.highstate
</code></pre>

<p>Comme je disais, parfois, le premier <code>state.highstate</code> ne marche pas a cause du code pas déployé.</p></li>
<li><p>Rafraichir les autorisations pour storage</p>

<pre><code>joe@master:~$ sudo salt 'storage*' state.highstate
joe@master:~$ sudo salt 'monitor*' state.highstate
</code></pre></li>
<li><p>Updater le hosts file de quelque nodes</p>

<pre><code>joe@master:~$ sudo salt 'app*' state.sls hosts
joe@master:~$ sudo salt 'db*' state.sls hosts
joe@master:~$ sudo salt 'memcache*' state.sls hosts
</code></pre></li>
</ol>