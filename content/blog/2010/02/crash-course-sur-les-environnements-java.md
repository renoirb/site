---
locale: fr-CA
title: Crash Course sur les environnements Java
canonical: >-
  https://renoirboulanger.com/blog/2010/02/crash-course-sur-les-environnements-java/
status: publish
revising: true
created: '2010-02-25'
updated: '2013-03-27'
tags:
  - tutoriels
  - vulgarisation
  - web
categories:
  - technologies
excerpt: ''
---

<p>Je suis actuellement en mode "Documentation" et je me suis dit que le web pourrait profiter d'un résumé, en français, du Jargon de l'univers Java.</p>

<p>Je ne suis pas un développeur Java mais j'ai eu a administrer des serveurs pendant 4 ans, et j'en fais encore aujourd'hui. Ce document résume ma compréhension des usages. Si vous avez des suggestions ou vous voulez me corriger, dites-moi le <a href="/blog/2010/02/crash-course-sur-les-environnements-java#comments">dans les commentaires</a> et j'ajusterai mon billet.</p>
<p>&nbsp;</p>

<h3>Les versions</h3>
<p>La majeure différence entre les Java réside dans leur version et ce qui y est distribué avec. La différence majeure réside entre</p>
<ul>
	<li><strong><abbr>JDK</abbr> </strong>(Java Development Kit),</li>
	<li><strong>JRE </strong>(Java Runtime Environement), et finalement il existe aussi la</li>
	<li><strong>JME </strong>(Java Mobile Edition) pour les devices mobile.</li>
</ul>
<p>C’est un peu comme une distribution Windows XP Professionnel ou Windows XP Media Centre.</p>

<p>Il existe plusieurs distributeurs d’environnement Java, notamment : <strong>IBM</strong>, <strong>SUN</strong>, <strong>OpenJdk</strong>. La norme et elles sont toutes basés sur la JVM de SUN Microsystems. <em>L’inventeur </em>de Java.</p>

<p>L’Avantage majeur de Java est le fait qu’il existe des distributions pour toutes les plateformes : Windows, Mac, Linux, Solaris, FreeBSD, etc.</p>
<p>&nbsp;</p>

<h3>Termes fréquemment utilisés</h3>
<ul>
	<li>« <strong>JVM </strong>» (Java Virtual Machine) est en fait l’appellation utilisée pour parler de ce qui est exécuté. Ce qui est ci-haut mentionné exécutent toutes des JVM… avec des classes (<em>jar</em>) différentes.</li>
	<li>« <strong>Jar </strong>» est en fait, grosso-modo, une archive zippée d’un dossier de classe.</li>
	<li>« <strong>Class </strong>» une classe compilée Java.
	</li><li>« Container » est en fait ce qu’on appelle un Serveur applicatif. Bref, un serveur http qui roule les classes Java.</li>
	<li>« <strong>J2EE </strong>» est un accronyme qui peut être vue comme une spécification technique (penser ISO) fournie par SUN pour les standards d’environnement d’exécution (« <em><strong>Container </strong></em>»).</li>
</ul>
<p>&nbsp;</p>

<h3>Serveur Applicatif</h3>
<p>Il en existe plusieurs. La norme avec les logiciels suivant la tendance Open-Source utilisent la version Apache du container J2EE appelé Tomcat. Atlassian utilise Tomcat dans ses version « self hosted » distribués.</p><p>

</p><p>Il en existe d’autres comme Glassfish de Sun Microsystem, WebObjects de Apple, Tomcat de Apache Foundation, JBoss de RedHat, WebSphere de IBM, et bien d’autres.</p><p>
</p><p>&nbsp;</p>

<h3>Une classe</h3>
<p>C'est quoi?.  C'est du code java compilé.</p>
<p>La hiérarchie est faite en fonction du « <em>namespacing </em>» inspiré des standards du DNS. Une classe spécifique Java pour un WebService SOAP pour traduire du français au <em>Klingon</em> pourrait être appelé : i.e. com.renoirboulanger.startrek.klingon.soap.jar.</p>
<p>&nbsp;</p>

<h3>Suggestions</h3>
<p>Je pense avoir fait le tour du sujet. Dites-moi dans <a href="/blog/2010/02/crash-course-sur-les-environnements-java#comments">les commentaires</a> si j'ai oublié quelque chose d'important.</p>
<p>&nbsp;</p>
