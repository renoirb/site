---
locale: fr-CA
title: Comment dire à Apache le mime-type d'un document Office 2007
canonical: >-
  https://renoirboulanger.com/blog/2010/04/comment-dire-a-apache-le-mime-type-dun-document-office-2007/
status: publish
revising: true
created: '2010-04-21'
updated: '2013-03-27'
tags:
  - linux
  - securite
  - unix
  - web
categories:
  - tranche-de-vie
excerpt: ''
---

J'ai entendu parler de certains Problèmes avec les documents <strong>.docx</strong> qui son considérés comme étant des fichiers zip. J'ai pensé partager avec vous comment j'ai réparé la situation.

Il est possible que le serveur apache ne considère pas les fichiers doc sur le serveur comme étant des fichiers office. Normalement un navigateur téléchargera le fichier et ouvrira avec le programme qu'il considère comme étant le bon.

A moins que l'ordinateur du visiteur ait pas de bonne association de fichier, dans ce cas, on peut rien y faire.

Pour aider, on peut annoncer au serveur web les associations MIME.

Le problème avec cette méthode qui ne sert presque a rien, c'est que ça ne changera rien si
<ol>
	<li>Le visiteur n'a pas de bonne association sur son système d'exploitation</li>
	<li>Le visiteur n'a pas Microsoft Office 2007 ou Open Office</li>
</ol>
<!--more-->
<h3>Procédure</h3>

Copier-coller ce bloc dans un ou encore dans l'un ou l'autre:
<ul>
	<li>le <tt>.htaccess</tt> du site qui contient les fichiers a télécharger, exemple: <tt>public_html/</tt></li>
	<li>le <tt>&lt;VirtualHost/&gt;</tt> dans le <tt>&lt;Directory&gt;</tt> associé.</li>
</ul>

<pre lang="htaccess">AddType application/vnd.ms-word.document.macroEnabled.12 .docm
AddType application/vnd.openxmlformats-officedocument.wordprocessingml.document docx
AddType application/vnd.openxmlformats-officedocument.wordprocessingml.template dotx
AddType application/vnd.ms-powerpoint.template.macroEnabled.12 potm
AddType application/vnd.openxmlformats-officedocument.presentationml.template potx
AddType application/vnd.ms-powerpoint.addin.macroEnabled.12 ppam
AddType application/vnd.ms-powerpoint.slideshow.macroEnabled.12 ppsm
AddType application/vnd.openxmlformats-officedocument.presentationml.slideshow ppsx
AddType application/vnd.ms-powerpoint.presentation.macroEnabled.12 pptm
AddType application/vnd.openxmlformats-officedocument.presentationml.presentation pptx
AddType application/vnd.ms-excel.addin.macroEnabled.12 xlam
AddType application/vnd.ms-excel.sheet.binary.macroEnabled.12 xlsb
AddType application/vnd.ms-excel.sheet.macroEnabled.12 xlsm
AddType application/vnd.openxmlformats-officedocument.spreadsheetml.sheet xlsx
AddType application/vnd.ms-excel.template.macroEnabled.12 xltm
AddType application/vnd.openxmlformats-officedocument.spreadsheetml.template xltx</pre>
<strong>source:</strong><a href="http://www.webdeveloper.com/forum/showthread.php?t=162526">Webdeveloper.com</a>