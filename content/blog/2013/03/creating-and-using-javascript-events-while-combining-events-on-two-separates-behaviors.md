---
locale: en-CA
title: >-
  Creating and using Javascript events while combining events on two separates
  behaviors
canonical: >-
  https://renoirboulanger.com/blog/2013/03/creating-and-using-javascript-events-while-combining-events-on-two-separates-behaviors/
status: publish
revising: true
created: '2013-03-29'
updated: '2013-04-01'
categories:
  - programmation
tags:
  - integration
  - javascript
  - techniques
description: Creating and using Javascript events while combining events
excerpt: >-
  This is an article I wrote on my new project "HTML and CSS The Right way". I
  wrote it when I discovered something that chocked me: Did you know that the
  ‘click’ event is only a string and you can create any event name you may want?
  Here is an experimentation example.
---

I discovered something that chocked me: Did you know that the ‘click’ event is only a string and you can create any event name you may want? Here is an experimentation example.

During web development, it often happens you want to attach events handler on something in your page. A common usage could be you want to flip a plus sign to a minus sign when you click on a button.
<pre><code>&lt;a href="/some/url/324" class="flip-icon" data-target="#generated-324"&gt;&lt;i class="icon-plus"&gt;&lt;/i&gt;&lt;/a&gt;</code></pre>
Later in a script you may be compelled to do something similar to the following (assuming you are using jQuery):
<pre>$(document).ready(function(){
// Rest of the document in document.ready
// DO NOT USE AS-IS, SEE LAST EXAMPLE

    $('.flip-icon.).click(function(event){
        event.preventDefault();
        var clicked = $(this);
        var flipElement = clicked.find('i');
        if (flipElement.hasClass('icon-plus')) {
            flipElement.removeClass('icon-plus').addClass('icon-minus');
        } else {
            flipElement.removeClass('icon-minus').addClass('icon-plus');
        }
    });
});</pre>
But what happens if you want to add other events such as, for example, <em>activating an accordion</em>. You may end up with duplicating events and get some collisions.

<em>Did you know that the ‘click’ event is only a string and you can create any event name you may want?</em>

To describe what I am refering to, I have a add an other behavior that will also, in part, require the previous example.

Imagine we have an accordion managed already grabbing the element’s <code>a[data-target]</code> click event handler.
<pre>$(document).ready(function(){
// Rest of the document in document.ready
// DO NOT USE AS-IS, SEE LAST EXAMPLE

    $('a[data-target]').click(function(event){
        // do the accordion stuff
    });
});</pre>
But, what if for some reason, our page has to reload some sections and our event handler managing the <code>a[data-target]</code> click gets lost

Instead, of creating a click specific event handler (what if we want to change) and be potentially lost with the element to attach event onto.

You can use <a href="http://api.jquery.com/on/">jQuery’s <code>on</code> method</a> and attach an event to the <code>&lt;body&gt;</code>, a safe element that every document has.

Things to note about the <code>on</code> method:
<ul>
	<li>First parameter is an event name, can be ANYTHING (yes, you read it), space separated</li>
	<li>Second element is on what to listen, can be null</li>
	<li>a <code>Function</code> object to handle the event</li>
</ul>
Also, there is nice thing about bubbling.

When an event happens, the event crawls the DOM up to the body (called ‘catch’) then gets back to the triggerer element (called ‘bubbling’) and firing in that order all event handlers.

Knowing all of this now, instead of attaching a single event type handler to a specific element, let’s take advantage of our new knowledge.
<pre>'use strict';
$(document).ready(function(){
// Rest of your document

    // Look at the 'flip-my-icon-event', we just made-up that one. See below.
    $('body').on('click flip-my-icon-event', '.flip-icon', function(){
/* Look here     *************************                                       */
        // Let's put it also in a self-executing anonymous, to isolate scope
        (function(triggered){

            // Same as earlier.
            var clicked = $(this);
            var flipElement = clicked.find('i');
            if (flipElement.hasClass('icon-plus')) {
                flipElement.removeClass('icon-plus').addClass('icon-minus');
            } else {
                flipElement.removeClass('icon-minus').addClass('icon-plus');
            }
            // End same as earlier

        })($(this)); // this fires the self-executing.
    });

    $('body').on('click', 'a[data-target]', function(event){
        event.preventDefault();

        // do the accordion stuff
        var collapsible = $($(this).attr('data-target'));
        if (typeof collapsible.attr('data-collapsible') === 'undefined')  {
            collapsible
                .collapse()
                .attr('data-collapsible', 'applied')
                .on('show', function(){
                    jQuery(this).parent().removeClass('is-hidden');
                })
                .on('hide', function(){
                    jQuery(this).parent().addClass('is-hidden');
                });
        // End do the accordion stuff

        jQuery(this).trigger('click').trigger('flip-my-icon-event');
/* Look here                         *******************************        */
        }
    });
});</pre>
The following works, because of the following trigger html pattern, as from the begining:
<pre><code>&lt;a href="/some/url/324" class="flip-icon" data-target="#generated-324"&gt;&lt;i class="icon-plus"&gt;&lt;/i&gt;&lt;/a&gt;</code></pre>
And of the following:
<ul>
	<li>We have an icon for <code>.icon-plus</code> and <code>.icon-minus</code> class names</li>
	<li>The <code>a[data-target]</code> attribute has ALSO a <code>.flip-icon</code> class name</li>
	<li>The <code>a[data-target]</code> triggers our made-up <code>flip-my-icon-event</code> event to an element that also matches (see the two ‘look here’ comments)</li>
</ul>
<em>References</em>
<ul>
	<li><a href="https://webplatform.github.io/docs/tutorials/events_in_javascript"><strong>WPD</strong> Events in Javascript (WebPlatform.org)</a></li>
	<li><a href="https://github.com/jquery/jquery/blob/master/src/event.js#L206">jQuery <code>trigger</code> method</a> from the jQuery source</li>
	<li><a href="https://github.com/jquery/jquery/blob/master/src/event.js#L715">jQuery <code>on</code> method</a> from the jQuery source</li>
	<li><a href="http://api.jquery.com/on/">jQuery documentation <code>on</code> method</a> * <strong>Note</strong> direct events handlers such as <code>live</code>, or <code>delegate</code> are considered deprecated (as of jQuery 1.7) <a href="http://api.jquery.com/delegate/">see delegate API</a> and <a href="http://api.jquery.com/live/">live API</a> notes.</li>
</ul>
