---
title: Delivery engineering and workspace conventions
keywords: introductory, talk
description: Talk slides about tips on how to improve work by harmonizing developer workspace
template: slides.html
---
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
