---
locale: fr-CA
title: >-
  Procédure pour créer un serveur FTP sécurisé SSL forcé avec usager virtuels
  sous Ubuntu Linux avec vsFTPd
canonical: >-
  https://renoirboulanger.com/blog/2010/04/procedure-pour-creer-un-serveur-ftp-securise-ssl-force-avec-usager-virtuels-sous-ubuntu-linux-avec-vsftpd/
status: publish
revising: true
created: '2010-04-30'
updated: '2013-03-29'
tags:
  - linux
  - logiciel-libre
  - securite
  - tutoriels
  - unix
categories: []
excerpt: ''
---

Je ne sais pas si vous êtes comme moi mais je n'aime pas laisser non crypté l'accès a un service qui me demande un mot de passe. Je devait monter un serveur cette semaine qui doit avoir les accès FTP.

J'ai pris l'initiative de sécuriser la machine avec du SSL car je crois qu'aujourd'hui c'est notre devoir de faire ce genre de chose. Ce n'est pas la première fois que je configure un serveur FTP over SSL mais je n'avait jamais pris de notes vraiment à ce jour. Je l'ai fait cette fois-ci!
<h3><a name="ComptesFTPvirtuel%28sansutilisateurlocal%29sousUbuntuavecvsFTPdetcryptoSSL-Cequecetteproc%C3%A9durefait..."></a>Ce que cette procédure fait...</h3>
<ol>
	<li>Pouvoir créer des comptes FTP sans avoir a créer un utilisateur local (donc pas accès shell (SSH)).</li>
	<li>Permet les connections FTP over SSL de façon EXPLICITE sur un port non standard  (cet exemple utilisera le port <tt>6123</tt>)</li>
	<li>Ne permet pas d'utilisateur ni de connexions anonymes</li>
	<li>Bannit les hôtes qui tentent de se connecter (LOGIN FAILED)	via <strong>fail2ban</strong></li>
	<li>Utilise le system PAM interne pour l'authentification</li>
	<li>Ne requiert pas d'usager local (pas de risque de tentative de connection SSH, usager séparés)</li>
	<li>Le serveur FTP roule sur son propre usager</li>
</ol>
<!--more-->
<h3><a name="ComptesFTPvirtuel%28sansutilisateurlocal%29sousUbuntuavecvsFTPdetcryptoSSL-Proc%C3%A9dure"></a>Procédure</h3>
<ol>
	<li>Vérifier quelle version de serveur FTP est installé
<pre lang="bash"># dpkg --list | grep ftp
~
ii  ftp                               0.17-19                      The FTP client
ii  lftp                              3.7.15-1ubuntu2              Sophisticated command-line FTP/HTTP client p
ii  vsftpd                            2.2.0-1ubuntu1               lightweight, efficient FTP server written fo</pre>
<strong>Note</strong> vsftpd est ce qu'on veut. Dans ce cas-ci il est déjà installé (ii).</li>
	<li>Assurer que les prérequis sont installés
<pre lang="bash"># aptitude install vsftpd libpam-pwdfile openssl</pre>
</li>
	<li>Modifier le fichier de config <strong>vsftpd.conf</strong>.
<strong>Note</strong> Modifiez pour ces valeurs (ci-bas) et conservez les autres valeurs par défaut.
<pre lang="bash"># vi /etc/vsftpd.conf
~
anonymous_enable=NO
local_enable=YES
write_enable=YES
local_umask=022
chroot_local_user=YES
ftpd_banner=Un nom Quelconque FTP
nopriv_user=vsftpd

# renoirboulanger.com 2010-04-29 we will force usage on an other port
#connect_from_port_20=YES</pre>
</li>
	<li>Ajouter ou corriger (étaient pas présents lorsque j'ai crée la procédure)
<pre lang="bash"># 2010-04-28 accès usager
virtual_use_local_privs=YES
guest_enable=YES
user_sub_token=$USER
local_root=/home/ibottin/FTP/$USER
hide_ids=YES</pre>
<strong>Note</strong> Ajuster le <tt>local_root</tt> a l'endroit	ou envoyer les fichiers.</li>
	<li>Activer le SSL
<ol>
	<li>Créer le certificat
<pre lang="bash"># cd /etc/ssl
# /usr/bin/openssl req -x509 -nodes -days 365 -newkey rsa:1024 -keyout vsftpd.pem -out vsftpd.pem</pre>
</li>
	<li>Ajouter au <tt>/etc/vsftpd.conf</tt>
<pre lang="bash"># vi /etc/vsftpd.conf
~
# renoirboulanger.com 2010-04-30 SSL configuration
listen_port=6123
ftp_data_port=6122
pasv_min_port=6000
pasv_max_port=6100

ssl_enable=YES
# Allow anonymous users to use secured SSL connections
allow_anon_ssl=YES
# All non-anonymous logins are forced to use a secure SSL connection in order to
# send and receive data on data connections.
force_local_data_ssl=NO
# All non-anonymous logins are forced to use a secure SSL connection in order to send the password.
force_local_logins_ssl=YES
ssl_tlsv1=YES
ssl_sslv2=YES
ssl_sslv3=YES
rsa_cert_file=/etc/ssl/vsftpd.pem</pre>
</li>
</ol>
</li>
	<li><strong>Remplacer</strong> le contenu du fichier <tt>pam.d/vsftpd</tt>
<pre lang="bash"># vi /etc/pam.d/vsftpd
~
auth required pam_pwdfile.so pwdfile /etc/vsftpd.passwd
account required pam_permit.so</pre>
<strong>Note</strong> Il est important de remplacer le reste du fichier par ce contenu ci-haut.</li>
	<li>Modifier permissions sur le fichier .pem
<pre lang="bash"># chown vsftpd /etc/ssl/vsftpd.pem</pre>
</li>
	<li>Redémarrer vsftpd
<pre lang="bash"># /etc/init.d/vsftpd restart</pre>
</li>
	<li>Créer le unix user qui va rouler le démon
<pre lang="bash"># adduser --system --no-create-home --disabled-login -s /usr/sbin/nologin --home /var/ftp vsftpd</pre>
</li>
	<li>Modifier les permissions pour l'utilisateur qui roule vsftpd (ajuster)
<pre lang="bash"># chown -R ftp:ftp /var/ftp/
# chmod -R 740 /var/ftp</pre>
</li>
	<li><strong><a href="/blog/2010/04/procedure-pour-creer-un-serveur-ftp-securise-ssl-force-avec-usager-virtuels-sous-ubuntu-linux-avec-vsftpd#ComptesFTPvirtuel%28sansutilisateurlocal%29sousUbuntuavecvsFTPdetcryptoSSL-AjouterunutilisateurFTP">Ajouter un utilisateur FTP</a></strong></li>
	<li>Ajuster <tt>fail2ban</tt>
<div class="code panel" style="border-width: 1px;">
<div class="codeHeader panelHeader" style="border-bottom-width: 1px;"><strong>Ajuster le bloc [vsftpd]</strong></div>
<pre lang="bash"># vi /etc/fail2ban/jail.conf
~
[vsftpd]

enabled  = true</pre>
<strong>Note</strong> par defaut <tt>enabled</tt> est a false...	il faut l'activer.

</div></li>
	<li>Redémarrer vsftpd
<pre lang="bash"># /etc/init.d/vsftpd restart
 * Stopping FTP server: vsftpd
   ...done.
 * Starting FTP server: vsftpd
   ...done.
# ps aux|grep vsftpd
vsftpd   18771  0.0  0.0  28904  1300 ?        Ss   17:09   0:00 /usr/sbin/vsftpd
vsftpd   18772  0.0  0.0  29100  1608 ?        S    17:09   0:00 /usr/sbin/vsftpd
ftp      18773  0.0  0.0  28928   924 ?        S    17:09   0:00 /usr/sbin/vsftpd
root     18795  0.0  0.0  22628  1712 ?        S    17:14   0:00 /usr/sbin/vsftpd
...</pre>
<strong>Note</strong> les deux premiers <tt>vsftpd</tt> est le résultat attendu</li>
	<li>Nous allons forcer le FTP over SSL sur le port <strong>6122</strong>, pour ça il faut autoriser le Firewall
<pre lang="bash"># iptables -A INPUT -m state --state ESTABLISHED,RELATED
# iptables -A INPUT -m tcp -p tcp --dport 6122 -j ACCEPT
# iptables -A INPUT -m state --state NEW,ESTABLISHED
# iptables -A INPUT -m tcp -p tcp --dport 6123 -j ACCEPT
# iptables -A INPUT -p tcp --dport 6000:6100 -j ACCEPT</pre>
<strong>Source</strong>: <a href="http://my.afterdawn.com/ketola/blog_entry.cfm/1262/vsftpd_ssl_and_iptables">vsftpd SSL and iptables</a></li>
	<li>Sauvegarder le Firewall
<pre lang="bash"># iptables-save &gt; /etc/iptables.rules</pre>
</li>
	<li>Tester de l'extérieur avec un client FTP (Filezilla, etc)

Voir les options suivantes a la connection
<ol>
	<li>port: 6123</li>
	<li>Forcer le SSL</li>
</ol>
</li>
</ol>
<h3><a name="ComptesFTPvirtuel%28sansutilisateurlocal%29sousUbuntuavecvsFTPdetcryptoSSL-AjouterunutilisateurFTP"></a>Ajouter un utilisateur FTP</h3>
On utilise le truc simple de htpasswd pour l'authentification. Pas de gossage :-)
<h3><a name="ComptesFTPvirtuel%28sansutilisateurlocal%29sousUbuntuavecvsFTPdetcryptoSSL-Cr%C3%A9erunnouveaucompte"></a>Créer un nouveau compte</h3>
<ol>
	<li>Créer le <em>premier compte</em>, sinon, <strong>passer	a la directive suivante</strong>! ou Utiliser mon script <a href="/blog/2010/04/procedure-pour-creer-un-serveur-ftp-securise-ssl-force-avec-usager-virtuels-sous-ubuntu-linux-avec-vsftpd#ComptesFTPvirtuel%28sansutilisateurlocal%29sousUbuntuavecvsFTPdetcryptoSSL-Scriptpourcr%C3%A9eruncompteutilisateur">Script pour créer un compte utilisateur</a>
<pre lang="bash"># htpasswd -c /etc/vsftpd.passwd ftpuser
New password:
Re-type new password:
Adding password for user ftpuser</pre>
<strong>Note</strong> l'option <strong><tt>-c</tt></strong> est	pour créer le fichier la première fois.</li>
	<li>Voir les directives de *<a href="/blog/2010/04/procedure-pour-creer-un-serveur-ftp-securise-ssl-force-avec-usager-virtuels-sous-ubuntu-linux-avec-vsftpd#ComptesFTPvirtuel%28sansutilisateurlocal%29sousUbuntuavecvsFTPdetcryptoSSL-Scriptpourcr%C3%A9eruncompteutilisateur">Script pour créer un compte utilisateur</a></li>
</ol>
<h3><a name="ComptesFTPvirtuel%28sansutilisateurlocal%29sousUbuntuavecvsFTPdetcryptoSSL-Ajouteroumodifierunutilisateur"></a><strong>Ajouter ou modifier un utilisateur</strong></h3>
<ol>
	<li>Utiliser le script <strong><tt>evo-vsftpd-user</tt></strong>
<pre lang="bash">$ sudo evo-vsftpd-user foo
Création d'un nouvel usager dans /etc/vsftpd.passwd ...
New password:
Re-type new password:
Adding password for user foo
 ... OK
 * Création du dossier /home/ibottin/FTP/foo ...  OK
 * Changement des permissions du dossier ...  OK
Terminé!</pre>
Voir les directives de <strong><a href="/blog/2010/04/procedure-pour-creer-un-serveur-ftp-securise-ssl-force-avec-usager-virtuels-sous-ubuntu-linux-avec-vsftpd#ComptesFTPvirtuel%28sansutilisateurlocal%29sousUbuntuavecvsFTPdetcryptoSSL-Scriptpourcr%C3%A9eruncompteutilisateur">Script pour créer un compte utilisateur</a></strong></li>
</ol>
<h3><a name="ComptesFTPvirtuel%28sansutilisateurlocal%29sousUbuntuavecvsFTPdetcryptoSSL-Scriptpourcr%C3%A9eruncompteutilisateur"></a>Script pour créer un compte utilisateur</h3>
<ol>
	<li>Créer le fichier
<pre lang="bash"># vi /usr/sbin/evo-vsftpd-user</pre>
</li>
	<li>Coller le contenu
<pre lang="bash">#!/bin/bash
if [ -z $1 ]; then
  echo "Aucun argument usager fourni"
  echo "usage: sudo evo-vsftpd-user foo"
  exit 1;
fi

if [ "$(whoami)" != 'root' ]; then
  echo "Vous n'avez pas les permisions utilisateur requises."
  exit 1;
fi

echo "Création d'un nouvel usager dans /etc/vsftpd.passwd ... "
htpasswd /etc/vsftpd.passwd $1
echo " ... OK "
echo -n " * Création du dossier /home/ibottin/FTP/$1 ... "
mkdir /home/ibottin/FTP/$1
echo " OK"
echo -n " * Changement des permissions du dossier ... "
chown -R ftp:ftp /home/ibottin/FTP/$1
chmod -R 740 /home/ibottin/FTP/$1
echo " OK"
echo "Terminé!"</pre>
</li>
	<li>Rendre exécutable
<pre lang="bash"># chmod +x /usr/sbin/evo-vsftpd-user</pre>
</li>
</ol>
<h3><a name="ComptesFTPvirtuel%28sansutilisateurlocal%29sousUbuntuavecvsFTPdetcryptoSSL-Tester"></a>Tester</h3>
<ol>
	<li>Installer le paquet pour tester
<div class="code panel" style="border-width: 1px;">
<div class="codeContent panelContent">
<pre lang="bash"># aptitude install ftp-ssl</pre>
</div>
</div></li>
	<li>Tester
<pre lang="bash"># ftp-ssl someserver.net 6123
Connected to someserver.net.
220 Un nom Quelconque FTP
Name (someserver.net:renoirboulanger): ftpuser
234 Proceed with negotiation.
[SSL Cipher DES-XXXX-SHA]
331 Please specify the password.
Password:
230 Login successful.
Remote system type is UNIX.
Using binary mode to transfer files.
ftp&gt;</pre>
<strong>Note</strong> [SSL Cipher DES-XXXX-SHA] est ce qu'on attend :-)</li>
</ol>
<h3><a name="ComptesFTPvirtuel%28sansutilisateurlocal%29sousUbuntuavecvsFTPdetcryptoSSL-Pourd%C3%A9boguer"></a>Pour déboguer</h3>
Le feedback est assez difficile a avoir de la part de vsftpd, mais pour en voir plus:
<ol>
	<li>Pour le debug
<pre lang="bash"># vi /etc/vsftpd.conf
~
# for debuging
log_ftp_protocol=YES</pre>
</li>
</ol>
<h3><a name="ComptesFTPvirtuel%28sansutilisateurlocal%29sousUbuntuavecvsFTPdetcryptoSSL-Ressources"></a>Ressources</h3>
<ul>
	<li><a href="http://wjholden.com/vsftpd-help.html">vsftpd help</a></li>
	<li><a href="http://vsftpd.beasts.org/vsftpd_conf.html">vsftpd.conf manpages</a></li>
	<li><a href="http://my.afterdawn.com/ketola/blog_entry.cfm/1262/vsftpd_ssl_and_iptables">vsftpd SSL and iptables</a></li>
	<li><a href="http://www.ubuntututorials.net/installing-vsftpd-using-text-file-for-virtual-users/">Installing vsftpd using text file for virtual users</a></li>
	<li><a href="http://www.cyberciti.biz/tips/configure-vsfptd-secure-connections-via-ssl-tls.html">Vsftpd SSL / TLS FTP Server Configuration</a></li>
</ul>
