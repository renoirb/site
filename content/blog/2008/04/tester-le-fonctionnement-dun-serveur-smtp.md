---
locale: fr-CA
keywords:
  - smtp
  - exim
  - email
canonical: 'https://renoirboulanger.com/blog/2008/04/tester-le-fonctionnement-dun-serveur-smtp/'
title: Tester le fonctionnement d’un serveur SMTP
date: '2008-04-19T16:07:45-04:00'
categories:
  - Tranche de vie
tags:
  - linux
  - procedure
---

### Vérifier si le Firewall bloque certains services

Idéalement il faut faire ces tests d'un autre ordinateur que celui qu'on veut
vérifier.

Ainsi on voit si les services sont fonctionnels en tant que tel, et si le
firewall  
ne les bloquent pas.

Quelques ports à tester, qui donnent une réponse

| Nom du service | Port TCP |
| -------------- | -------- |
| POP            | 101      |
| IMAP           | 143      |
| SMTP           | 25       |
| FTP            | 21       |

```terminal
nc web1.renoirboulanger.com
110 +OK POP3 Welcome to vm-pop3d 1.1.7f-DA-2
[^c]

nc web1.renoirboulanger.com 143
* OK [CAPABILITY IMAP4REV1 LITERAL+ SASL-IR LOGIN-REFERRALS AUTH=LOGIN]
web1.renoirboulanger.com IMAP4rev1 2004.357 at Tue, 26 Feb 2008 11:08:17 -0500 (EST)
[^c]

nc web1.renoirboulanger.com 25 220 web1.renoirboulanger.com ESMTP Exim 4.66 Tue, 26 Feb 2008 11:11:10 -0500
[^c]

nc web1.renoirboulanger.com 21
220 ProFTPD 1.3.1rc2 Server ready.
[^c]
```

Note: la note \[^c\] implique qu'on peut faire Ctrl+c pour quitter plus
rapidement  
de l'attente

## Tester le serveur courriel

### Créer un compte de test

Permet d'éviter de remplir le compte courriel d'un client.

- Créer un compte dans [DirectAdmin][0], "[Show all Users][1]", _username_, "  
  [E-Mail Accounts][2]"

### Test envoi local vers virtual_local avec exim

Avant de tester avec une application (remote en shell, ou GMail par exemple)
On  
devrait tester en local

Ensuite... via une application locale à Gmail **Cas de nos courriels
renoirboulanger**,  
voir "Test envoi local vers une machine remote avec exim" ci-haut.

Le serveur de mon exemple possède Exim comme serveur de transport de courrier
(SMTP).

L'avantage d'utiliser `exim -v -odf` c'est qu'on sait en shell le output  
et on sait les messages directement

```terminal
exim -v -odf test@renoirboulanger.com         [enter]
Subject: Test lundi am 5 local a virtuallocal [enter]
Message body                                  [enter]
.                                             [enter]
LOG: MAIN
  <= renoirb@web1.renoirboulanger.com U=renoirb P=local S=390 T="Test lundi am 5 local a virtuallocal"
delivering 1JSZkp-0001JH-8H
LOG: MAIN
  => support <support@renoirboulanger.com> F=<renoirb@web1.renoirboulanger.com> R=virtual_user T=virtual_localdelivery S=571
LOG: MAIN
  Completed
```

Note: La ligne "**Subject:**" je note généralement un titre explicatif  
du genre "Test lundi am 5 local a virtuallocal" qui donne une idée de quels
tests  
qui passent.

Le output des 7 dernières lignes est une réponse expectée si tout va bien.

#### Les commandes via exim

- **`exim -v -odf [[email protected]][3]`**

C'est les options qui permettent d'utiliser une instance de Exim pour tester
(**odf**)  
puis de permettre la (v)erbosité

- **`Subject: LE SUJET`**

Il faut entrer `Subject:` Pour annoncer qu'on ajoute au header le sujet,  
on pourrait meme ajouter un header comme on veut.

- **Écrire le message**

Le prompt condidere que si on commence pas par une commande qui termine par
":",  
est considéré comme du **data** pour le courriel en tant que tel (aka.  
Le ).

- Terminer par "."
- Voilà!

### Vérifier le log d'envoi SMTP

Utile pour chaque tentative... voir où le message và!

```terminal
sudo tail -f /var/log/exim/mainlog
 2008-02-25 12:02:16 1JSZkp-0001JH-8H <= renoirb@web1.renoirboulanger.com U=renoirb P=local S=356 T="Test lundi am 5 local a virtuallocal" from <renoirb@web1.renoirboulanger.com> for test@renoirboulanger.com
 2008-02-25 12:02:16 1JSZkp-0001JH-8H => test <test@renoirboulanger.com> F=<renoirb@web1.renoirboulanger.com> R=virtual_user T=virtual_localdelivery S=390
 2008-02-25 12:02:16 1JSZkp-0001JH-8H Completed
```

### Tester réception IMAP

Généralement dans [https://web1.renoirboulanger.com/webmail/][4] (vérifie le
processus IMAP)  
on peut aller accéder au compte créé dans "Créer un compte de test courriel".

### Vérifier le log impad

```terminal
sudo tail -f /var/log/maillog
   Feb 25 12:01:14 web1 imapd[19532]: imap service init from 127.0.0.1
   Feb 25 12:01:14 web1 imapd[19532]: Login user=test@renoirboulanger.com host=web1 [127.0.0.1]
   Feb 25 12:01:14 web1 imapd[19532]: Logout user=test@renoirboulanger.com host=web1 [127.0.0.1]
```

Note: Rappel le `/var/log/maillog` donne le output des login IMAP(imapd),  
POP (vm-pop3d) et SpamAssasin (spamd)

### Vérifier POP en telnet

On peut lancer le test à partir de n'importe quel type de client telnet.

Pour s'assurer que le mail server répond sur le bon, on peut aussi lancer la
requete  
telnet sur le domaine du mail exchange (MX) du client.

```terminal
telnet mail.renoirboulanger.com 110                 [enter]
Trying 66.46.177.182...
Connected to mail.renoirboulanger.com (66.46.177.182).
Escape character is '^]'.
+OK POP3 Welcome to vm-pop3d 1.1.7f-DA-2
user test@renoirboulanger.com                         [Entrer "user (username)", enter]
+OK
pass GMkRZaKQ                                         [Entrer "pass (mot de passe)", enter]
+OK opened mailbox for test
list                                                  [Pour lister les messages "list", enter]
+OK
1 780
2 488
3 494
.
retr 3                                                [Pour obtenir un message, "retr (numero du message)", enter]
+OK 494 octets
Return-path: <renoirb@web1.renoirboulanger.com>
Envelope-to: test@renoirboulanger.com
Delivery-date: Mon, 25 Feb 2008 12:02:16 -0500
Received: from renoirb by web1.renoirboulanger.com with local (Exim 4.66)
        (envelope-from <renoirb@web1.renoirboulanger.com>)
        id 1JTgiM-00057L-SW
        for test@renoirboulanger.com; Mon, 25 Feb 2008 12:02:16 -0500
Subject: Test lundi am 5 local a virtuallocal
Message-Id: <1JSZkp-0001JH-8H@web1.renoirboulanger.com>
From: renoirb@web1.renoirboulanger.com
Date: Mon, 25 Feb 2008 12:02:16 -0500

Message body

.
quit                                                  [Finalement, "quit", enter]
+OK
Connection closed by foreign host.
```

### Vérifier le log pop3d

Si tout va bien en telnet, pourquoi ne pas tester pour être sûr!?

```terminal
sudo tail -f /var/log/maillog
   Feb 25 12:13:18 web1 vm-pop3d[20764]: User 'test@renoirboulanger.com' logged in from 69.159.235.26, nmsgs=3
   Feb 25 12:13:22 web1 vm-pop3d[20764]: bytes: domain renoirboulanger.com 491 bytes
   Feb 25 12:13:23 web1 vm-pop3d[20764]: Session ended for user: 'test@renoirboulanger.com' from 69.159.235.26, nmsgs=3, ndel=0
```

Note: Rappel le `/var/log/maillog` donne le output des login IMAP(imapd),  
POP (vm-pop3d) et SpamAssasin (spamd)

### Test envoi remote vers virtual_local avec telnet

Au lieu d'avoir un programme comme mail installé sur une station Linux, on
peut  
simplement utiliser telnet avec ces commandes

```terminal
telnet web1.renoirboulanger.com 25
   Trying 66.46.177.182...
   Connected to web1.renoirboulanger.com.
   Escape character is '^]'.
   220 web1.renoirboulanger.com ESMTP Exim 4.66 Fri, 22 Feb 2008 10:42:44 -0500
helo renoirboulanger.com
   250 web1.renoirboulanger.com Hello mtrlpq02-1168108314.sdsl.bell.ca [69.159.235.26]
mail from: lunique@renoirboulanger.com
   250 OK
rcpt to: renoir.boulanger@renoirboulanger.com
   250 Accepted
   data
   354 Enter message, ending with "." on a line by itself
Subject: Test courriel 7
Via tsc-webmestre-dev dans le bureau de renoirboulanger vers web1 qui va rediriger à gmail directement!
.
   250 OK id=1JSa3U-0003TM-Tv
quit
   221 web1.renoirboulanger.com closing connection
   Connection closed by foreign host.
```

Note: les codes 250, 354, 220 sont des numeros de messages voir:
[http://email.about.com/cs/standards/a/smtp_error_code_2.htm][5]

J'ai mis trois espaces devant la réponse reçue.

#### Les commandes telnet envoi smtp

- **telnet `ADRESSE.MAILSERVER.COM`**
- ... Trying et connected signifient qu'il a essayé et réussi

220 web1.renoirboulanger.com ESMTP Exim 4.66 Fri, 22 Feb 2008 10:42:44 -0500

Signifie 220 (c'est le code du message) que web1 utilise Exim 4.66.... et
qu'on  
est le 22 Feb... C'est ok!

- **`helo domaine.du.helo.renoirboulanger.com`**

Faut entrer "`helo`" puis le domaine de l'envoyant

helo est un standard pour savoir quel est le hostname qui envoit le courriel  
[\#Description de HELO][6]

- **`mail from: [[email protected]][3]`**

Faut entrer "`mail from:`" puis l'adresse de l'envoyant

Ce qui permet de dire le From: field

- **`rcpt to: [[email protected]][3]`**

Faut entrer "`rcpt to:`" puis l'adresse du recipient

C'est le recipient.

- **`data`**

Annonce au MTA (le serveur SMTP) qu'il va envoyer des données textes

- **`Subject: LE SUJET`**

Faut au minimum entrer "`Subject:`" car c'est ce que le serveur attend.

- Écrire le message, tout simplement
- **Terminer** par un dernier \[procedures:**Enter**\] et  
  laisser un poin "**.**"

Ensuite, le message SMTP \#`354` annonce que l'on peut écrire notre courriel  
a volonté... jusqu'a ce qu'on ajoute une ligne vide avec uniquement un "."
(qui  
annonce la fin du message)

- Voilà!

### Test envoi local vers une machine remote avec exim

Permet de savoir si l'envoi local vers un remote fonctionne bien

Il s'agit de l'exemple typique d'un email local envoyé vers Gmail par exemple.

```terminal
exim -v -odf sysadmin@renoirboulanger.com
Subject: Test lundi am 4 local to remote
Message correct pour voir de l'usager joe sur web1 vers sysadmin hsu at renoirboulanger
.
LOG: MAIN
  <= joe@web1.renoirboulanger.com U=joe P=local S=437 T="Test lundi am 4 local to remote"
delivering 1JSZmM-0001LR-S8
Connecting to ASPMX.L.GOOGLE.COM [72.14.205.27]:25 ... connected
  SMTP<< 220 mx.google.com ESMTP z21si1091485qbc.21
  SMTP>> EHLO web1.renoirboulanger.com
  SMTP<< 250-mx.google.com at your service, [66.46.177.182]
         250-SIZE 28311552
         250-8BITMIME
         250 ENHANCEDSTATUSCODES
  SMTP>> MAIL FROM:<joe@web1.renoirboulanger.com> SIZE=1470
  SMTP<< 250 2.1.0 OK
  SMTP>> RCPT TO:<a@test.com>
  SMTP<< 250 2.1.5 OK
  SMTP>> DATA
  SMTP<< 354 Go ahead
  SMTP>> writing message and terminating "."
  SMTP<< 250 2.0.0 OK 1203693994 z21si1091485qbc.21
  SMTP>> QUIT
LOG: MAIN
  => sysadmin@renoirboulanger.com F=<joe@web1.renoirboulanger.com> R=lookuphost T=remote_smtp S=450 H=ASPMX.L.GOOGLE.COM [72.14.205.27] C="250 2.0.0 OK 1203693994 z21si1091485qbc.21"
LOG: MAIN
  Completed
```

Note: C'est quoi EHLO ou HELO? voir "Description du HELO"

## Tester mail remote vers mailserver pour voir le bon fonctionnement de SpamAssassin

Le but de ce test est de s'assurer que le service de spam antivirus est lancé,
il  
faut s'assurer que le service "SpamAssassin" est activé dans la config du
client  
dans le pannel, et qu'on envoie le test en remote.

### Envoi courriel via une machine remote via mail

Sert a s'assurer que l'envoi d'un courriel remote (application ou en shell)
fonctionne  
bien de l'extérieur.

```terminal
mail test@test.com
Subject: Test lundi am 6 remote to virtuallocal
Message body, with random content
.
```

### Regarder le log spamd

Permet de savoir si le message envoyé dans le test "Envoi courriel via une
machine remote via mail" à  
bien passé

```terminal
tail -f /var/log/maillog
...
1.   Feb 26 11:31:54 web1 spamd[3160]: prefork: child states: II
2.   Feb 26 11:32:15 web1 spamd[817]: spamd: connection from web1 [127.0.0.1] at port 56256
3.   Feb 26 11:32:15 web1 spamd[817]: spamd: setuid to renoirb succeeded
4.   Feb 26 11:32:15 web1 spamd[817]: spamd: processing message <000801c87894$66546900$c07bcf52@adminhotel> for renoirb:501
5.   Feb 26 11:32:19 web1 spamd[817]: spamd: identified spam (7.0/5.0) for renoirb:501 in 4.1 seconds, 1602 bytes.
6.   Feb 26 11:32:19 web1 spamd[817]: spamd: result: Y 6 - HTML_MESSAGE,RAZOR2_CF_RANGE_51_100,RAZOR2_CF_RANGE_E4_51_100,RAZOR2_CF_RANGE_E8_51_100,RAZOR2_CHECK,RDNS_NONE,URIBL_JP_SURBL scantime=4.1,size=1602,user=renoirb,uid=501,required_score=5.0,rhost=web1,raddr=127.0.0.1,rport=56256,mid=<000801c87894$66546900$c07bcf52@adminhotel>,autolearn=no
...
```

Voici ce que le spamscanner a fait...

- Ligne 4: Il process le message pour le user
- Ligne 5: Donne le resultat, (soit **identified spam** ou **clean message**)  
  avec la note entre parenthèses (note reçue / note maximale)
- Ligne 6: Le résultat Y=C'est un spam... N=Le message est propre... puis la
  valeur  
  des tests coulés (HTML_MESSAGE,RAZOR2_CF_RANGE_51_100,...)

Note: Rappel le `/var/log/maillog` donne le output des login IMAP(imapd),  
POP (vm-pop3d) et SpamAssasin (spamd)

## Tester SpamAssassin

Pour savoir comment SpamAssassin (aka. SA) traite le spam, on peut lancer
quelques  
commandes comme celles ci.

#### SA avec tests Razor2 sur un sample spam

```
spamassassin -t -D razor2 < /usr/share/sample-nonspam.txt

... plusieurs lignes ...

[19464] dbg: razor2: razor2 is available, version 2.82
 Razor-Log: read_file: 16 items read from /etc/mail/spamassassin/.razor/razor-agent.conf
 Razor-Log: Found razorhome: /etc/mail/spamassassin/.razor
Feb 28 10:48:38.385733 check[19464]: [ 2] [bootup] Logging initiated LogDebugLevel=9 to stdout
Feb 28 10:48:38.386209 check[19464]: [ 5] computed razorhome=/etc/mail/spamassassin/.razor, conf=/etc/mail/spamassassin/.razor/razor-agent.conf, ident=/etc/mail/spamassassin/.razor/identity-ruKDx1iKgh
Feb 28 10:48:38.386500 check[19464]: [ 8] Client supported_engines: 4 8
Feb 28 10:48:38.386960 check[19464]: [ 8]  prep_mail done: mail 1 headers=293, mime0=616
Feb 28 10:48:38.387312 check[19464]: [ 5] read_file: 1 items read from /etc/mail/spamassassin/.razor/servers.discovery.lst

... inclusions des config modulaires ...

Feb 28 10:48:38.405171 check[19464]: [ 5] read_file: 23 items read from /etc/mail/spamassassin/.razor/server.joy.cloudmark.com.conf
Feb 28 10:48:38.405460 check[19464]: [ 5] 162877 seconds before closest server discovery
Feb 28 10:48:38.405729 check[19464]: [ 6] c301.cloudmark.com is a Catalogue Server srl 5382; computed min_cf=21, Server se: 3BC8
Feb 28 10:48:38.405995 check[19464]: [ 8] Computed supported_engines: 4 8
Feb 28 10:48:38.406217 check[19464]: [ 8] Using next closest server c301.cloudmark.com:2703, cached info srl 5382
Feb 28 10:48:38.406432 check[19464]: [ 8] mail 1 has no subject
Feb 28 10:48:38.406840 check[19464]: [ 6] preproc: mail 1.0 went from 616 bytes to 503
Feb 28 10:48:38.407064 check[19464]: [ 6] computing sigs for mail 1.0, len 503
Feb 28 10:48:38.408529 check[19464]: [ 6] Engine (8) didn't produce a signature for mail 1.0
Feb 28 10:48:38.408827 check[19464]: [ 6] skipping whitelist file (empty?): /etc/mail/spamassassin/.razor/razor-whitelist
Feb 28 10:48:38.409055 check[19464]: [ 5] Connecting to c301.cloudmark.com ...
Feb 28 10:48:38.440917 check[19464]: [ 8] Connection established
Feb 28 10:48:38.441071 check[19464]: [ 4] c301.cloudmark.com >> 36 server greeting: sn=C&srl=5403&a=1&a=cg&ep4=7542-10
Feb 28 10:48:38.441476 check[19464]: [ 4] c301.cloudmark.com << 25
Feb 28 10:48:38.441548 check[19464]: [ 6] cn=razor-agents&cv=2.82
Feb 28 10:48:38.441813 check[19464]: [ 4] c301.cloudmark.com << 14
Feb 28 10:48:38.441873 check[19464]: [ 6] a=g&pm=state
Feb 28 10:48:38.463790 check[19464]: [ 4] c301.cloudmark.com >> 264
Feb 28 10:48:38.463875 check[19464]: [ 6] response to sent.2
...
[19464] dbg: razor2: part=0 engine=4 contested=0 confidence=100
[19464] dbg: razor2: results: spam? 1
[19464] dbg: razor2: results: engine 8, highest cf score: 0
[19464] dbg: razor2: results: engine 4, highest cf score: 100
[19464] info: rules: meta test HS_PHARMA_1 has dependency 'HS_SUBJ_ONLINE_PHARMACEUTICAL' with a zero score
Received: from localhost by web1.renoirboulanger.com
        with SpamAssassin (version 3.2.0);
        Thu, 28 Feb 2008 10:48:41 -0500
From: Sender <sender@example.net>
To: Recipient <recipient@example.net>
Subject: *****SPAM***** Test spam mail (GTUBE)
Date: Wed, 23 Jul 2003 23:30:00 +0200
Message-Id: <GTUBE1.1010101@example.net>
X-Spam-Flag: YES
X-Spam-Checker-Version: SpamAssassin 3.2.0 (2007-05-01) on web1.renoirboulanger.com
X-Spam-Level: **************************************************
X-Spam-Status: Yes, score=1002.6 required=5.0 tests=AWL,GTUBE,NO_RECEIVED,
        NO_RELAYS,RAZOR2_CF_RANGE_51_100,RAZOR2_CF_RANGE_E4_51_100,RAZOR2_CHECK
        autolearn=no version=3.2.0
MIME-Version: 1.0
Content-Type: multipart/mixed; boundary="----------=_47C6D7D9.CD6EF8C3"

This is a multi-part message in MIME format.

------------=_47C6D7D9.CD6EF8C3
...Le courriel en tant que tel
```

Note: Il existe trois fichiers de tests: `/usr/share/sample-spam.txt` (test  
email sample spam), `/usr/share/sample-nonspam.txt` (sample email correct),  
et `/usr/share/sample-virus.txt` (pour voir si l'antivirus est ok)

## Tester les relais SMTP

Notez que j'ai pas sous la main d'adresse courriel ou serveur connu comme
spammeur  
sur notre réseau ce qui est très bien.

Alors si votre test donne pas un résultat similaire... on a un problème de spam!

#### avec exim -bh

Avec la commande `exim -bh IP-ADDRESS EMAIL-ADDRESS` on peut savoir comment  
le courriel passe, s'il est accepté.

```
exim -bh 69.159.235.26 renoirb@gmail.com

**** SMTP testing session as if from host 69.159.235.26
**** but without any ident (RFC 1413) callback.
**** This is not for real!

>>> host in hosts_connection_nolog? no (option unset)
>>> host in host_lookup? yes (matched "*")
>>> looking up host name for 69.159.235.26
>>> IP address lookup yielded mtrlpq02-1168108314.sdsl.bell.ca
>>> gethostbyname looked up these IP addresses:
>>>   name=mtrlpq02-1168108314.sdsl.bell.ca address=69.159.235.26
>>> checking addresses for mtrlpq02-1168108314.sdsl.bell.ca
>>>   69.159.235.26 OK
>>> host in host_reject_connection? no (option unset)
>>> host in sender_unqualified_hosts? no (option unset)
>>> host in recipient_unqualified_hosts? no (option unset)
>>> host in helo_verify_hosts? no (option unset)
>>> host in helo_try_verify_hosts? no (option unset)
>>> host in helo_accept_junk_hosts? no (option unset)
220 web1.renoirboulanger.com ESMTP Exim 4.66 Thu, 28 Feb 2008 11:02:19 -0500
```

Exemple de test fonctionnel (On remarque le message `220 hostname ESMTP...`.  
Faire \[^c\] pour sortir.

#### Avec exim_checkaccess

Une autre version existe qui sort moins de output

```terminal
exim_checkaccess 69.159.235.26 contribs@renoirboulanger.com
Accepted
```

## Statistiques

Il existe, a ma mémoire, actuellement, un outil qui permet de savoir
l'Activité  
du serveur. Il est dans un crontab. Voici la commande.

```terminal
eximstats /var/log/exim/mainlog

Exim statistics from 2008-02-24 04:02:35 to 2008-02-28 11:11:24

Grand total summary
-------------------
                                                                  At least one address
  TOTAL               Volume   Messages Addresses     Hosts      Delayed       Failed
  Received             100MB       6049                2029       2  0.0%     37  0.6%
  Delivered            101MB       6174      6336        17
  Rejects                         45232               21772

Deliveries by transport
-----------------------
                      Volume    Messages
  :blackhole:           12MB        2232
  address_file         660KB          64
  remote_smtp          600KB          89
  spamcheck             46MB        2966
  virtual_localdelivery    42MB         823

Messages received per hour (each dot is 7 messages)
---------------------------------------------------

... un tableau par points (.) qui donne une idée de grandeur de la quantité de courriel ...

Time spent on the queue: all messages
-------------------------------------

...

Time spent on the queue: messages with at least one remote delivery
-------------------------------------------------------------------

...

Relayed messages
----------------

...

Top 50 mail rejection reasons by message count
----------------------------------------------

...

Top 50 sending hosts by message count
-------------------------------------

...

Top 50 sending hosts by volume
------------------------------

...

Top 50 local senders by message count
-------------------------------------

...

Top 50 local senders by volume
------------------------------

...

Top 50 host destinations by message count
-----------------------------------------
...

```

Très utile!

## Vulgarisation

### Description du HELO

Source: [http://email.about.com/cs/standards/a/smtp.htm][7] (modifié)

Une discussion SMTP commence soit par **EHLO** (ou **HELO**).  
Qui, en gros, annonce que le serveur de courrier possède quelques features
améliorés  
comparé aux premières générations de serveur smtp.

(...)

...But to use later additions to SMTP that have brought about two flavors of
the  
later HELO command (SMTP command generally consist of four characters).

(...)

EHLO, being the more recent one makes the server advertise all the additional
features  
(such as delivery status notification or the ability to transport messages
that  
contain other than the safe ASCII characters) it supports.

(...)

Not every server will allow this greeting, but it is required to accept a
plain  
HELO which naturally assumes that no additional features are present.

(...)

**Both HELO (et EHLO) commands do require the client to specify its domain**
after  
the \*\*LO, however.

## Références

- Tester avec telnet

[http://www.netadmintools.com/part276.html][8]

- Réferences du protocole SMTP

[http://email.about.com/cs/standards/a/smtp.htm][7]

- Definition messages d'erreur SMTP

[http://email.about.com/cs/standards/a/smtp_error_code.htm][9]

[0]: https://web1.renoirboulanger.com:2222/
[1]: https://web1.renoirboulanger.com:2222/CMD_ALL_USER_SHOW
[2]: https://web1.renoirboulanger.com:2222/CMD_EMAIL_POP
[3]: /cdn-cgi/l/email-protection
[4]: https://web1.renoirboulanger.com/webmail/
[5]: http://email.about.com/cs/standards/a/smtp_error_code_2.htm
[6]: #Testerlebonfonctionnementduserveurdecourriel-DescriptiondeHELO
[7]: http://email.about.com/cs/standards/a/smtp.htm
[8]: http://www.netadmintools.com/part276.html
[9]: http://email.about.com/cs/standards/a/smtp_error_code.htm
