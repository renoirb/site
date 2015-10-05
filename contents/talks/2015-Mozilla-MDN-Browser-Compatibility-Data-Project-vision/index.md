---
title: Browser Compatibility Data Project vision
keywords: Mozilla, MDN, BrowserCompat, Compatibility Data
description: Visual support to illustrate how we’re building the next-generation compatibility data service
template: slides.html
notes: |
  Make sure no indentation nor spaces are added below, otherwise Markdown processor will add HTML breaks
---
<header id="masthead"><div class="container"><div id="tabzilla"><a href="https://www.mozilla.org/">Mozilla</a></div></div></header>
<style>
@import url("slides.css");
</style>
<script>
document.addEventListener('talk', function(e){
    var list = document.querySelector('.toc-items ul');
    e.detail.data.chapters.forEach(function(listEl){
        var aElemTemplate  = document.createElement('a')
          , liElemTemplate = document.createElement('li');
        aElemTemplate.setAttribute('href', '#' + listEl[0]);
        aElemTemplate.innerHTML = listEl[1];
        liElemTemplate.appendChild(aElemTemplate);
        list.appendChild(liElemTemplate);
    });
});
</script>
