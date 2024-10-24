---
locale: en-CA
title: >-
  How to implement a CollectionType Form field with AJAX "add new" embedded form
  with re-usable markup using Symfony2 and Twitter Bootstrap
canonical: >-
  https://renoirboulanger.com/blog/2012/06/how-to-implement-a-collectiontype-form-field-with-ajax-add-new-embedded-form-with-re-usable-markup-using-symfony2-and-twitter-bootstrap/
status: publish
revising: true
created: '2012-06-21'
updated: '2013-03-31'
tags:
  - jquery
  - symfony2
categories:
  - programmation
excerpt: >-
  I had to create a relationship with two entities in a project. I am using
  Twitter Bootstrap markup in my Symfony2 project. This is my notes about how I
  implemented a re-usable form field that adds dynamic input text using jQuery.
  This post is an echo on my original Answer attempt on StackOverflow.
---

<p>I wanted to create a re-usable piece of code that makes me able to "add new" input field and makes the relationship with the other entity.</p>

<p>I did only find some very specific (and not re-usable) examples, so I gave my try on <a href="http://stackoverflow.com/questions/10233807/collection-field-type-not-creating-form-elements/11122471#11122471">this question</a>. Hope you find it usefull.</p>

<p>Here is how I did it, in some generic manner.</p>

<p>In generic, I mean, Any <code>collection</code> that I add to the form just need to follow the <strong>Form template</strong> loop (in a macro, for example) and that's all!</p>

<h2>Using which convention</h2>

<ul>
<li>HTML is from Twitter Bootstrap 2.0.x</li>
<li>Javascript code is already in a $(document).ready();</li>
<li><a href="http://symfony.com/doc/current/reference/forms/types/collection.html#reference-form-types-by-reference" rel="nofollow">Following Symfony 2.0.x tutorial</a></li>
<li>Using <a href="https://github.com/phiamo/MopaBootstrapBundle" rel="nofollow">MopaBootstrapBundle</a></li>
</ul>

<h2>Form Type class</h2>


<h2>The form template</h2>

<p>Trick here is that I would have had used the original <code>{{ form_widget(form }}</code> but I needed to add some specific to the view form and I could not make it shorter.</p>

<p>And I tried to <a href="http://symfony.com/doc/current/cookbook/form/form_customization.html#how-to-customize-an-individual-field" rel="nofollow">edit only the targeted field</a> and <a href="https://github.com/symfony/symfony/issues/2663" rel="nofollow">found out it was a bit complex</a></p>



<h3>My notes on Snipt.net</h3>
I created a Snipt to use on my <strong>Sublime Text 2</strong> editor installation. In case you want to use it:
<script type="text/javascript" src="https://snipt.net/embed/5716b31707575970136b819e6923905b/"></script>

<h3>References</h3>
I wrote a complete answer, hoping to add some value on <em>StackOverflow</em>, here is some other paths I read about it.

<ul>
	<li><a href="http://stackoverflow.com/questions/10233807/collection-field-type-not-creating-form-elements/11122471#11122471">My Answer to the question that triggered my research on <strong>StackOverflow</strong></a></li>
	<li><a href="https://github.com/beberlei/AcmePizzaBundle">AcmePizzaBundle</a>, very helpful!</li>
	<li><a href="http://symfony.com/doc/current/reference/forms/types/collection.html#reference-form-types-by-reference"><em>Symfony2</em> Reference</a></li>
</ul><ul></ul>