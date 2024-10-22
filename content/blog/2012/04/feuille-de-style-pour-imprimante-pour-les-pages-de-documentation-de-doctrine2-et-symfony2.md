---
locale: fr-CA
title: >-
  Feuille de style pour imprimante pour les pages de documentation de Doctrine2
  et Symfony2
canonical: >-
  https://renoirboulanger.com/blog/2012/04/feuille-de-style-pour-imprimante-pour-les-pages-de-documentation-de-doctrine2-et-symfony2/
status: publish
revising: true
created: '2012-04-07'
updated: '2023-11-16'
tags: []
categories: []
excerpt: ''
---

<p><a href="https://renoirb.github.io/site-assets/assets/content/blog/2012/04/Screenshot-at-2012-04-07-200750-d.png"><img class="alignright size-thumbnail wp-image-2552" title="View of the document for print after applying my @media print css" src="https://renoirb.github.io/site-assets/assets/content/blog/2012/04/Screenshot-at-2012-04-07-200750-d-150x150.png" alt="" width="150" height="150" /></a>Je suis  en train d'étudier activement <a href="http://symfony.com/">Symfony2</a> et <a href="http://doctrine-project.org/">Doctrine2</a> car j'ai fait le saut du coté développement applicatif a temps plein.</p>

<p>Mon apprentissage va très bien et j'ai appris beaucoup sur les meilleurs pratiques et je ne me vois plus dutout faire de php sans le Dependency Injection, les pratiques de namespacing et fonctions lambda de PHP 5.3.</p>

<p>Alors, pour étudier, j'ai décidé d'imprimer les pages de la documentation. Malheureusement il y a beaucoup de perte d'espace pour du contenu de navigation et temporel qui se ramasse dans mes PDF.</p>

<p>J'ai converti en PDF plus de cent documents, puis, finalement j'ai repassé les imprimer en ajustant certaines règles CSS.</p>

<p>Je partage ici le CSS que j'ai élaboré pour pouvoir imprimer les documents sans avoir de perte d'espace pour le lecteur tablette.</p>

<h2>Comment utiliser</h2>

<p>Pour appliquer mon impression, j'ai simplement crée ces blocs CSS, puis inséré ces derniers dans chaque document via l'inspecteur de Google Chrome, puis imprimé.</p>

<p>J'ai aussi contacté les auteurss des sites respectifs pour leur proposer d'y insérer mes règles.</p>

<p>Je pense ne pas être le seul a avoir eu besoin d'imprimer leur documentation.</p>

<p>f</p>

<h2>Documentation <em>Doctrine2</em></h2>

<p>Je me suis basé sur les <a href="http://docs.doctrine-project.org/projects/doctrine-orm/en/latest/index.html">pages de cette section</a>.</p>

<p>J'ai aussi ajusté le fait que les blocs de configuration alternatifs (yml, php, xml) soient tous visible. En imprimé si on veut comparer la syntaxe, on n'a pas javascript pour activer les tabs.</p>

<pre lang="css">@media print {
  #footer,
  .footer_popout,
  #nav.cls,
  #content .sphinxsidebar,
  #content .related,
  body a[href~="github"] {
     display:none !important;
  }
  #content .bodywrapper {
      margin:0;
  }
  #content .bodywrapper .body {
      max-width:initial;
  }
  #content {
      font-size:120%;
  }
  #content div.body h1,
  #content div.body h2,
  #content div.body h3,
  #content div.body h4,
  #content div.body h5,
  #content div.body h6 {
      background:none;
  }
}</pre>

<h2>Documentation <em>Symfony2</em></h2>

<p>Sur toutes les <a href="http://symfony.com/doc/current/book/index.html">sous pages de la documentation</a>.</p>

<pre lang="css">@media print {
  #content_wrapper .box_download.clear_fix,
  #content_wrapper .main_menu.clear_fix,
  #content_wrapper .main_content .column_01,
  #content_wrapper .main_content .column_02 .navigation,
  #content_wrapper .box_relative_content,
  #content_wrapper .footer .box_menu_footer.clear_fix,
  #content_wrapper .footer h2 img,
  #sln {
      display:none !important;
  }
  #content_wrapper .main_content .column_02 {
      width: 100%;
      padding:0;
      font-size:120%;
  }
  #content_wrapper .footer {
      background-color: #FFF;
  }
  #content_wrapper .footer h2 {
      color: #444;
  }
  #content_wrapper .footer h2:before {
      content: "Symfony";
  }
  #content_wrapper .highlight-jinja {
      font-weight:bold;
      font-size:130%;
      width: 100% !important;
  }
  #content_wrapper .highlight-jinja .hilight {
      background:none;
      border:1px solid #444;
  }
  #content_wrapper .highlight-jinja .hilight:before {
      content: "Code block";
  }
  #content_wrapper .configuration-block.jsactive.clearfix {

  }
  #content_wrapper .configuration-block.jsactive ul {
        height:initial !important;
  }
  #content_wrapper .configuration-block.jsactive ul.simple {
        overflow:hidden;
        height:initial !important;
  }
  #content_wrapper div.jsactive div div,
  #content_wrapper div.jsactive div {
        position: relative !important;
  }
  #content_wrapper .configuration-block.jsactive ul.simple li {
        float: none;
  }
  #content_wrapper .configuration-block.jsactive ul.simple li &gt; div{
        display: block !important;
        width: 100% !important;
  }
}</pre>
