---
locale: en-CA
title: >-
  Confirm form before submitting using Twitter Bootstrap in a Modal window
  [Snippet]
canonical: >-
  https://renoirboulanger.com/blog/2012/05/snippet-confirm-form-before-submitting-using-twitter-bootstrap-in-a-modal-window/
status: publish
revising: true
migrateLinks: false
migrateImages: true
gallery: true
caption: false
created: '2012-05-28'
updated: '2023-11-16'
tags:
  - favourites
  - patterns
  - twitter-bootstrap
categories:
  - programmation
excerpt: ''
---

<p><a href="https://renoirb.github.io/site-assets/assets/content/blog/2012/05/confirm-modal.jpg" rel="lightbox[20120606]"><img src="https://renoirb.github.io/site-assets/assets/content/blog/2012/05/confirm-modal-300x205.jpg" alt="" title="Transform any Bootstrap form to use a confirmation window" width="300" height="205" class="alignright size-medium wp-image-2569" border="0" style="border:0" /></a></p>

<h3>Idea</h3>

<p>Have you ever wanted to create a way to confirm input before actually submitting the form. Automatically.</p>

<p>My snippet's goal is exactly for that purpose. The idea is that it reads the form inputs and labels, and generates a modal window (like a lightbox) and asks confirmation. This project is a contribution I do to <a href="https://github.com/twitter/bootstrap">Twitter Bootstrap</a> and <a href="https://github.com/renoirb/jquery-bootstrap-scripting">jQuery-bootstrap-scripting ("dialog2")</a> to add on any form using Twitter Bootstrap form markup convention the capability to create a confirmation modal window.</p>

<p>The concept is that some forms needs to have some confirmation and requires more than "are you sure", but also what you are submitting.</p>

<h3>How it works</h3>

<p>When the pages load, it executes in this order the following:</p>

<ul>
    <li>Whether there is a <tt>form[data-behavior=confirm]</tt>, and modify the form default submit button to replace it with a link (idea being that if there is no javascript enabled, you can still submit!)</li>
    <li>on a Click action on the newly created <tt>a.confirm-toggle</tt>, it fires up some html manipulation and creates a modal window using <a href="http://nikku.github.com/jquery-bootstrap-scripting/#">jQuery Bootstrap Scriptin's <strong>Dialog2</strong> plugin</a></li>
</ul>

<h3>Word of advice</h3>

<p>I have to warn you though.  The solution is not yet complete.  It works well with <code>input[type=text]</code> and some <code>select</code>. But I need to add more field types as time goes. That's why I created this <a href="http://jsfiddle.net/renoirb/xNCNb/16/">Fiddle</a> to give room for improvement. Feel free to collaborate. When the solution will be strong enough, i'll contribute it to both projects in their respective syntax (<code>dialog2</code> doesnt initialize the same way as Bootstrap's <code>modal()</code></p>

<p><strong>Known limitations</strong></p>

<ul>
  <li>Works only with <code>select</code> and <code>input[type=text]</code>, and breaks bad with <code>radio</code> and <code>checkbox</code></li>
  <li>Works only with ONE form in the page, for now.</li>¨
</ul>

<h3>The code</h3>

<p>You can play with this <a href="http://jsfiddle.net/renoirb/xNCNb/16/">Fiddle</a> in the meantime i make it ready-er</p>
<!--#TODO-Import-Code-From-External-->

<h4>The javascript</h4>

<pre lang="javascript">

    /**
     * Use form's content into a confirmation modal
     *
     * Using: http://nikku.github.com/jquery-bootstrap-scripting/
     * Requires: Twitter Bootstrap, dialog2
     *
     * @author: Renoir Boulanger
     */
    if ($('form[data-behavior=confirm]').length >= 1) {

        console.log('run.js: document ready : Applying confirmation, ' + $('form[data-behavior=confirm]').length + ' times');

        $('form[data-behavior=confirm] select').click(function() {
            var dataValue = $(this).find(':selected').text();
            $(this).attr('data-value', dataValue);

            // Debug console
            console.log('Adding data-value at: ' + dataValue);
        });

        $('form[data-behavior=confirm] .confirm-toggle').replaceWith('<input id="confirm-submit" type="submit" class="is-hidden"/>' + '<a href="#" class="confirm-toggle btn btn-primary">Continue</a>');

        /**
         *  Since we know javascript is executed so far, lets handle it with the confirmation.
         *
         *  That way, no javascript-enabled browsing user will be able to use the form. #progressiveEnhancement
         *
         *  Do the work.
         */
        $('form[data-behavior=confirm] .confirm-toggle').click(function(event) {
            event.preventDefault();

            // Get form content
            var form = $('form[data-behavior=confirm]').clone().attr('id', 'cloned'); //.appendTo('body');
            var i = 0;
            form.find(':input:not([type=hidden])').each(function() {
                var field = $(this);


                if (field.is('select')) {
                    fieldValue = $(this).attr('data-value');
                    if (fieldValue === undefined) {
                        fieldValue = field.find(':selected').html();

                        // Debug console
                        console.log('fieldValue was undefined, setting to : ' + fieldValue);
                    }

                    // Debug console
                    console.log('fieldValue is : ' + fieldValue);
                } else {
                    fieldValue = field.val();
                }

                // Remove undefined field (they are useless)
                if (fieldValue === '') {
                    field.parent().parent().addClass('empty-field-resolved');
                }

                // Debug console
                console.log('Field ' + i + ' :' + fieldValue + ' for #' + field.attr('id'));

                // Wrap fieldValue in a tag, Tested in IE7!!
                field.after($('<span class="value">' + fieldValue + '</span>'));

                // Remove the field itself, we only want to see the resulting
                field.remove();

                i++;
            });

            // Work stuff out for modal window, copying content, and building modal into the DOM
            var decorate = $("<div id=\"modal-placeholder\"><div class=\"modal-builder\"></div></div>");
            var buildup = decorate.find(".modal-builder").html(form);

            buildup.appendTo('body');

            // Debug console
            console.log('Appending #modal-placeholder in body, ready to call dialog2()');

            // Remove not needed anymore stuff
            $('.modal-builder .help-block, .modal-builder .input-append, .modal-builder .form-actions').remove();

            $('.modal-builder').dialog2({
                title: "Are you sure?",
                id: "confirm-modal",
                modalClass: "modal-wide fade in",
                closeOnOverlayClick: false,
                closeOnEscape: false,
                initialLoadText: "Loading in progress...",
                buttons: {
                    Confirm: {
                        primary: true,
                        click: function() {
                            // Debug
                            console.log('Inside dialog2() clicked Confirm');

                            $('#confirm-submit').click();
                        }
                    },
                    "Forgot something": {
                        click: function() {
                            // Debug
                            console.log('Inside dialog2() clicked cancel');

                            $(this).dialog2("close");
                            $('.modal').remove();
                            return false;
                        }
                    }
                }
            });
            // Do my own cleanup. Remove potentially bogus nodes
            $('#modal-placeholder, .modal-header .close, .control-group.empty-field-resolved').remove();
        });
    }

</pre>
<!--#TODO-Improve-Code-Blocks-->

<h4>The CSS</h4>

<p>Minimally...</p>

<pre lang="css">.modal-wide {
  overflow:visible;
  width: 650px;
}

.modal-builder .control-label {
      padding:0 !important;
      font-weight:bold;
}

 /* In case you use a span.required-star
  * with title="required field", I don't want to
  * have them in modal
  **/
.modal-builder  .required-star {
    display:none;
}

.modal-builder .hide-in-confirm {
  display:none !important;
}</pre>

<p>Tell me in the comments if you want the LESS block I created</p>

<h3>The Form</h3>

<p>Always using Twitter Bootstrap markup, A form minimally needs</p>

<p>What is <strong>really required here</strong> is</p>

<ul>
    <li>Form tag has <tt>data-behavior="confirm"</tt> attribute</li>
    <li>Form submit button has at least the class name <tt>confirm-toggle</tt></li>
</ul>

<p>Just use any combination of <a href="http://twitter.github.com/bootstrap/base-css.html#forms">Twitter Bootstrap <strong>Form</strong> patterns</a></p>

<pre lang="html"><form class="form-horizontal" method="post">
<fieldset>
<div class="control-group hidden-in-confirm">
<!-- This block will be hidden -->
            <label class="control-label" for="input01">Text input</label>
<div class="controls">
<input id="input01" class="input-xlarge" type="text" />

In addition to freeform text, any HTML5 text-based input appears like so.</div>
</div>
<!-- ... the form ... -->
<div class="form-actions">
            <button class="btn">Cancel</button>
<input class="btn btn-primary confirm-toggle" type="submit" value="Continue" /></div></fieldset>
</form></pre>

<h3>Possible enhancements paths</h3>

<p>My solution fit for what I needed. <em>A two parameters to add confirm in a modal</em> using the project's markup. Sadly I read after doing it that there is some plugins I could have considered such as the <a href="http://docs.jquery.com/Plugins%3aForms">Form plugin</a></p>

<p>.</p>

<h3>End word</h3>

<p>I am going to prepare this post and propose a pull request to the <em>jQuery Bootstrap Scripting</em> AND <em>Bootstrap</em> project in a day  or two.</p>

<h3>Ressources</h3>

<ul>
    <li>http://nikku.github.com/jquery-bootstrap-scripting/#</li>
    <li>http://twitter.github.com/bootstrap/base-css.html#forms</li>
</ul>
