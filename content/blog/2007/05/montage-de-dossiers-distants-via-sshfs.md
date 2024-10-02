---
locale: fr-CA
title: Montage de dossiers distants via sshfs
canonical: >-
  https://renoirboulanger.com/blog/2007/05/montage-de-dossiers-distants-via-sshfs/
status: publish
revising: true
created: '2007-05-31'
updated: '2013-03-27'
tags:
  - linux
  - tutoriels
categories:
  - tranche-de-vie
excerpt: ''
---

J'ai souvent vanté les mérites du SSHFS mais je n'ai jamais réellement expliqué le concept du partage à -la-windows... mais sécuritaire!

Attention aux non initiés en linux... c'est un howto très technique!

<!--more-->
Le concept est simple. Un dossier de mount points sur diverses machines dans le local en linux. Disons que votre dossier <tt>~</tt> est dans <tt>/home/username</tt>, ajoutez vos serveurs, par exemple, dans un dossier "Drives".

<pre lang="bash">$ mkdir ~/Drives</pre>

Ajoutez y tout vos hosts que vous voulez... Je ne prendrai pas d'exemple réel étant donné qu'on a pas nécessairement tous les même droits partout sur les machines et vm. Personnellement, je l'ai fait sur les serveurs web1 et web2 deux serveurs redondants d'hébergement de services web. J'ai donc créé <tt>~/Drives/web1</tt> et <tt>~/Drives/web2</tt>
<pre lang="bash">
$ mkdir ~/Drives/web1
$ mkdir ~/Drives/web2</pre>
Dans mon exemple, sur ces deux machines j'ai mon propre usager et j'ai ajouté mon login dans le <tt>~/.ssh/authorized_keys</tt> de mon homedir. Si vous avez pas ça, faites vous le en suivant le howto ici: <a href="/login-ssh-sans-mot-de-passe" title="SSH sans mot de passe">login ssh sans mot de passe</a>. Vous pourrez tester en faisant <tt>$ ssh hostname</tt> il devrait se loguer tout seul. Si vous ne faites pas cela, vous serez oubligé d'entrer vos mots de passes de TOUTES vos machines... A chaque login.

Pour continuer, on doit aussi installer le paquetage sshfs
<pre lang="bash">$ sudo apt-get install sshfs</pre>
Pour avoir le droit de monter les hôtes en sshfs, vous devez vous autoriser l'exécution du mount sinon vous êtes condamné a entrer le mot de passe root a chaque login. Vous pouvez aller via: <tt>System-&gt;Administration-&gt;Users and Groups</tt> Puis ajoutez dans <tt>Manage groups</tt> (ou quelque chose qui parle de ça) puis trouvez le groupe <tt>fuse</tt> puis dans <tt>Properties</tt> ajoutez votre propre login qui est probablement non coché.

Aussi:
Une manière alternative de s'ajouter le droit fuse, serait de faire en shell
<pre lang="bash">$ sudo usermod -G fuse username</pre>

Finalement... l'auto exécution.

Il faut aller dans <tt>System-&gt;Préférences-&gt;Sessions</tt> puis ajouter un <tt>Startup programs</tt> avec la commande suivante:

<pre lang="bash">
$ sshfs REMOTE_USERNAME@REMOTE_HOSTNAME:/FULL/REMOTE/PATH/ /FULL/LOCAL/MOUNTED/PATH/Drives/web1/ -o reconnect
</pre>
Vous devinerez comment écrire correctement la commande en l'appliquant a vos besoins.

Oubliez pas de faire sauvegarder votre session GNOME, <tt>ALT+F2</tt> puis tapez <tt>gnome-session-save</tt> puis enter.

Déloguez vous et reloguez vous. En naviguant dans votre homedir, dans le dossier <tt>~/Drives/</tt> vous avez maintenant vos homedirectories sur toutes vos machines distantes... localement!

<strong class="strong">Considérations</strong>
Je tiens pour acquis certains détails dans ce document
<ul>
	<li>Une <tt>$</tt> devant une commande dans un bloc de code indique que l'on exécute la commande en tant que son user local</li>
	<li>Un <tt>#</tt> indique, quant a lui qu'on est en root, on pourrait aussi bien le faire <pre lang="bash">$ sudo [commande]</pre></li>
	<li>Le caractère <tt>~</tt> est un caractère shortcut au lieu de mentionner <em>/home/username</em></li>
	<li>Le howto utilise Ubuntu pour l'installation mais le nom du paquetage reste le meme soit <em>fusermount</em> ou <em>sshfs</em></li>
	<li>La commande <tt>ALT+F2</tt> est un raccourci clavier pour faire exécuter une commande, on pourrait trouver RUN dans le menu aussi.</li>
</ul>
<h3>Références</h3>
<ul>
	<li>Mon expérience... et un peu de;</li>
	<li><span class="nobr"><a href="http://ubuntu.wordpress.com/2005/10/28/how-to-mount-a-remote-ssh-filesystem-using-sshfs/" rel="nofollow">http://ubuntu.wordpress.com/2005/10/28/how-to-mount-a-remote-ssh-filesystem-using-sshfs/<sup><img src="/images/icons/linkext7.gif" class="rendericon" align="absmiddle" border="0" height="7" width="7" /></sup></a></span></li>
</ul>