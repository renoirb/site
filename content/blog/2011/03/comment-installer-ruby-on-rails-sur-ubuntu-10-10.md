---
locale: fr-CA
title: Comment installer Ruby on Rails sur Ubuntu 10.10
canonical: >-
  https://renoirboulanger.com/blog/2011/03/comment-installer-ruby-on-rails-sur-ubuntu-10-10/
status: publish
revising: true
created: '2011-03-25'
updated: '2013-03-27'
tags: []
categories: []
excerpt: >-
  Voici comment j'ai fait pour installer Ruby on Rails version 1.9.2p180 a
  partir de RVM avec Gem 1.6.2 sur ma station de travail Ubuntu 10.10
---

<!-- {EAV_BLOG_VER:54e8acfbc162ab6e} -->
<p>Une note rapide de comment j'ai installé Ruby
<h3>Procédure</h3><h3>
<ul>
  <li>Créer le dossier de travail et y exécuter le script d'installation RVM
    <pre lang="bash">
mkdir -p ~/work/ruby-install
cd ~/work/ruby-install
bash < <( curl http://rvm.beginrescueend.com/releases/rvm-install-head )
</pre></pre></li>
  <li>Ajouter au <strong><tt>.bashrc</tt></strong>
    <pre lang="bash">
[[ -s "$HOME/.rvm/src/rvm/scripts/rvm" ]] && . "$HOME/.rvm/src/rvm/scripts/rvm"
</pre></li>
  <li>Execute <strong><tt>rvm</tt></strong> and specify the version you want to use
<pre lang="bash">
.rvm/bin/rvm install 1.9.2
</pre></li>
  <li>Will return: 
<pre lang="bash">Installing Ruby from source to: ~/.rvm/rubies/ruby-1.9.2-p180, this may take a while depending on your cpu(s)...</pre></li>
  <li>Set the lastely installed rvm as the default    <pre lang="bash">
rvm --default 1.9.2
</pre></li>
  <li>Verify the version of Ruby    <pre lang="bash">
 ruby -v
ruby 1.9.2p180 (2011-02-18 revision 30909) [x86_64-linux]
</pre></li>
  <li>Verify the version of Gem    <pre lang="bash">
gem -v
1.6.2
</pre></li>
</ul>


</h3><h3>Source</h3>
<ul>
  <li><a href="http://www.giantflyingsaucer.com/blog/?p=179">http://www.giantflyingsaucer.com/</a></li>
  <li><a href="http://www.productionscale.com/home/2010/10/19/using-rvm-on-ubuntu-1010.html">"<span lang="en">Using RVM on Ubuntu 10.10</span>", écrit le 19 Octobre, 2010 sur ProductionScale</a></li>
</ul></p>