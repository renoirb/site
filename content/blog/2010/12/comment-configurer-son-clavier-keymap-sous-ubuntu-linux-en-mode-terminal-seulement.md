---
locale: fr-CA
title: >-
  Comment configurer son clavier («keymap») sous Ubuntu Linux en mode terminal
  seulement
canonical: >-
  https://renoirboulanger.com/blog/2010/12/comment-configurer-son-clavier-keymap-sous-ubuntu-linux-en-mode-terminal-seulement/
status: publish
revising: true
gallery: true
caption: true
created: '2010-12-08'
updated: '2023-11-16'
tags: []
categories: []
excerpt: ''
---

<h2>Mise en situation

[caption id="attachment_2407" align="alignright" width="150" caption="Configure console-data"]<a href="https://renoirboulanger.com/wp-content/uploads/2010/12/Configure-console-data.png"><img class="size-thumbnail wp-image-2407 " title="Configure console-data" src="https://renoirboulanger.com/wp-content/uploads/2010/12/Configure-console-data-150x150.png" alt="" width="150" height="150" /></a>[/caption]</h2>

<p>J'était en train de me monter une Machine Virtuelle minimale de développement (j'en parle <a title="Installer une Machine Virtuelle Linux roulant dans VMware Fusion sous Mac OS X" href="https://renoirboulanger.com/blog/2010/07/installer-une-machine-virtuelle-linux-roulant-dans-vmware-fusion-sous-mac-os-x/">ici</a>, <a title="Une VM Linux qui sert au développement PHP 5.3 avec Eclipse – partie 3" href="https://renoirboulanger.com/blog/2009/09/une-vm-linux-qui-sert-au-developpement-php-5-3-avec-eclipse-partie-iii/">ici</a>, <a title="Une VM Linux qui sert au développement PHP 5.3 avec Eclipse – partie 2" href="https://renoirboulanger.com/blog/2009/09/une-vm-linux-qui-sert-au-developpement-php-5-3-avec-eclipse-partie-ii/">ici</a>, <a title="Une VM Linux qui sert au développement PHP 5.3 avec Eclipse – partie I" href="https://renoirboulanger.com/blog/2009/09/une-vm-linux-qui-sert-au-developpement-php-5-3-avec-eclipse-partie-i/">ici</a>, et finalement <a title="Mon espace de travail buntu Linux qui roule et VMWare Server fait rouler la machine de developpement" href="https://renoirboulanger.com/blog/2007/11/mon-espace-de-travail/">ici aussi</a>).</p>

<p>Toujours est-il que mon Mac commence a être vieux et même s'il est maximisé a 3GB de RAM sur un processeur 1.66 Ghz Core Duo et 500GiB d'espace disque, lorsque je roule Eclipse, c'est lourd! Alors je me suis crée une nouvelle machine virtuelle. Par erreur j'ai mis le mauvais clavier. Imagine essayer de faire une commande terminal sans savoir comment trouver tes touches spéciales (vous savez: |,`'").</p>

<p>Je sais pas si vous êtes comme moi. J’aime avoir le bon clavier pour pouvoir bien écrire en français et en anglais. Alors je n'ai pas le choix.</p>

<p>... à moins que j'apprenne le Dvorak (un jour!)
<!--more--></p>

<h2>Ma solution</h2>

<p>J'ai trouvé cet article dans le <a title="LocaleConf  you need to change the language and keyboard configuration, follow these instructions" href="https://help.ubuntu.com/community/LocaleConf">Wiki de Ubuntu Linux qui portait un nom très peu évocateur («LocaleConf»)</a>.</p>

<p>En gros c'est simple, il faut:</p>

<ul>
    <li>console-tools</li>
    <li>console-data</li>
    <li>localeconf</li>
</ul>

<h3>Installer</h3>

<p><code lang="bash">apt-get install console-data console-tools</code>
Puis configurer avec <strong>dpkg-reconfigure</strong></p>

<p><code lang="bash">dpkg-reconfigure console-data</code></p>

<p>J'ai suivi:</p>

<ol>
    <li>«Select keymap from arch list»</li>
    <li>«Qwerty»</li>
    <li>«Canadian»</li>
    <li>«French»</li>
</ol>

<p>[gallery link="file" columns="4"]</p>