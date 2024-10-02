---
locale: fr-CA
title: >-
  Comment je valide et convertit des documents HTML trop chargés ou provenant de
  Microsoft Word en HTML valide et simplifié
canonical: >-
  https://renoirboulanger.com/blog/2012/08/comment-je-valide-et-convertit-des-documents-html-trop-charges-ou-provenant-de-microsoft-word-en-html-valide-et-simplifie/
status: publish
revising: true
created: '2012-08-30'
updated: '2013-06-11'
tags:
  - integration
  - outils
  - techniques
  - tutoriels
categories:
  - programmation
excerpt: >-
  Cette procédure est faite pour permettre de prendre n'importe quel fichier
  Word ou HTML généré avec beaucoup de tagsoup en en simplifier a sa plus simple
  expression html. Valide.
---

<h3>Description</h3>

<p>Cette procédure est faite optimiser la conversion document word en html, spécialement ceux qui sont généré avec beaucoup de «tagsoup» en en simplifier a sa plus simple expression html. Valide.</p>

<p><strong>Sauter à la <a href="#CommentconvertirunfichierWordversduHTMLsimpleetvalide-Proc%C3%A9dure">Procédure</a></strong></p>

<h4>Exemple</h4>

<h5>Avant</h5>

<pre><code>&lt;h2 class="Standard" dir="ltr" lang="fr-FR" style="margin-top: 0; margin-bottom: 0; text-align: center;" xml:lang="fr-FR"&gt;
  &lt;span lang="en-CA" style="font-weight: bold; font-size: 16.0px;" xml:lang="en-CA"&gt;TERMS AND CONDITIONS OF 1&lt;/span&gt; &lt;span lang="en-CA" style="font-weight: bold; font-size: 16.0px;" xml:lang="en-CA"&gt;‐&lt;/span&gt; &lt;span lang="en-CA" style="font-weight: bold; font-size: 16.0px;" xml:lang="en-CA"&gt;YEAR OR 30&lt;/span&gt; &lt;span lang="en-CA" style="font-weight: bold; font-size: 16.0px;" xml:lang="en-CA"&gt;‐&lt;/span&gt; &lt;span lang="en-CA" style="font-weight: bold; font-size: 16.0px;" xml:lang="en-CA"&gt;DAY ACCESS AND USE&lt;/span&gt;
&lt;/h2&gt;

&lt;span lang="en-CA" style="font-weight: bold; font-size: 16.0px;" xml:lang="en-CA"&gt;OF THE SERVICE BY SUBSCRIBERS&lt;/span&gt; &lt;span lang="en-CA" style="font-weight: bold; font-size: 16.0px;" xml:lang="en-CA"&gt;SECTION 1&lt;/span&gt; &lt;span lang="en-CA" style="font-weight: bold; font-size: 16.0px;" xml:lang="en-CA"&gt;PURPOSE OF THE SERVICE&lt;/span&gt;
</code></pre>

<h5>Après</h5>

<pre><code>&lt;h2&gt;TERMS AND CONDITIONS OF 1 ‐ YEAR OR 30 ‐ DAY ACCESS AND USE&lt;/h2&gt;

&lt;span&gt;OF THE SERVICE BY SUBSCRIBERS SECTION 1 PURPOSE OF THE SERVICE&lt;/span&gt; 
</code></pre>

<p> </p>

<h3>Inspiration et pistes</h3>

<ol>
<li>Convertir de format document en ligne de commandeDe Word2000 vers HTML, voir <strong>UNOCONV</strong> <a class="external-link" href="http://dag.wieers.com/home-made/unoconv/#download" rel="nofollow">http://dag.wieers.com/home-made/unoconv/#download</a></li>
</ol>

<ul>
<li>Utiliser open office en mode "headless" (en le transformant en service) et y envoyer les documents pour conversionVoir: <a class="external-link" href="http://stackoverflow.com/questions/3405687/openoffice-org-using-uno-to-convert-docx-to-html" rel="nofollow">http://stackoverflow.com/questions/3405687/openoffice-org-using-uno-to-convert-docx-to-html</a></li>
</ul>

<p> </p>

<p> </p>

<p> </p>

<h3>Procédure </h3>

<h4>Version abstraite</h4>

<ol>
<li>Utiliser Open Office (ou peu importe) pour exporter le document en HTML</li>
</ol>

<p>*   Purifier via <tt>HTMLTidy</tt>
*   Nettoyer les attributs inutiles avec la classe <tt>htmLawed</tt> </p>

<h3>Use cases</h3>

<h4>Document texte seulement</h4>

<ul>
<li>Pas de formulaire, ni images, etc</li>
<li>Idéal pour un document légal, par exemple.</li>
</ul>

<h3>Étapes concrètes:</h3>

<ol>
<li>A partir du fichier HTML généré <strong>exemple</strong>: Fichier appelé "1.1.2.en.html"</li>
</ol>

<p>*   Extraire le fichier <a href="#">htmLawed.zip</a>
 
    cd ~
    mkdir htmlawed
    mv htmLawed.zip htmlawed/
    cd htmlawed
    unzip htmLawed.zip</p>

<p>Passer au travers de la classe <tt>htmLawed</tt></p>

<pre><code>require('htmLawed.php');
$config = array('safe'=&gt;1,'elements'=&gt;'a,em,strong,p,ul,li,ol,h1,h2,h3,h4,h5,div,tr,td,table','deny_attribute'=&gt;'* -title -href');
$out = htmLawed(file_get_contents('in.html'), $config);
echo $out;
</code></pre>

<p>Rouler le script. Déplacer le fichier a utiliser, puis exécuter le script pour en générer dans out.html</p>

<pre><code>cp ~/1.1.2.en.tidy.html in.html
php cleanup.php &amp;gt; out.html&lt;/pre&gt;
</code></pre>

<p>Rouler Tidy. <strong>Normaliser le fichier "1.1.2.en.html", Nettoyer les balises, minuscules, etc</strong></p>

<pre><code>tidy --drop-font-tags 1 --logical-emphasis 1 --clean 1 --merge-spans 1 --show-body-only 1 --output-xhtml 1 --word-2000 1 --indent "auto" --char-encoding "utf8" --indent-spaces "2" --wrap "90" 1.1.2.en.html &amp;gt; 1.1.2.en.tidy.html
</code></pre>

<p>tada!</p>

<h3>Précautions</h3>

<p>Ordre d'exécution des tâches</p>

<p><strong>Remarque:</strong></p>

<p>J'ai essayé de passer Tidy avant htmLawed et j'ai réalisé que le nettoyage de htmLawed est assez drastique et que Tidy rend le code plus propre. Sans oublier que htmLawed peut générer des balises vides que Tidy va éliminer.</p>

<h3>Références</h3>

<ol>
<li><a class="external-link" href="http://tidy.sourceforge.net/docs/quickref.html">Options Tidy</a></li>
<li>htmLawed Documentation a PHP Html purification Class 

<ol>
<li><a class="external-link" href="http://www.bioinformatics.org/phplabware/internal_utilities/htmLawed/more.htm" rel="nofollow">original documentation</a></li>
<li><a class="external-link" href="http://www.bioinformatics.org/phplabware/internal_utilities/htmLawed/example_settings.htm" rel="nofollow">Example settings</a></li>
</ol></li>
</ol>