<template>
  <section id="is" class="about" itemscope itemtype="http://schema.org/Person">
    <b class="pull-left" style="display: block">
      <img width="150" alt itemprop="image" src="@/assets/images/avatar.jpg" />
    </b>
    <p>Hello!</p>
    <p>
      My name’s
      <a href="https://renoirboulanger.com/about/">
        <span itemprop="givenName">Renoir</span>
        <span itemprop="familyName">Boulanger</span>
      </a>
      and in my spare time I enjoy reading about systems engineering and also to
      contribute to open-source projects.
    </p>
    <p>
      I have been building websites for over
      <data value="18">eighteen</data> years and had been filling different
      roles such as <em>Front-End</em> and <em>Back-End</em> development, but
      also to <em>manage cloud clusters</em> and <em>orchestration systems</em>.
    </p>
    <p>
      You can get my resume from my website in either
      <a href="/resume/detailed">detailed version</a>, or
      <a href="/resume">short format</a>. There is also an
      <a href="/cv" title="C.V. de Renoir Boulanger en français">
        outdated version in French that’s available
      </a>
      <span lang="fr"> (SVP, Utilisez la version anglaise!) </span>. If you want
      to get in touch with me <em>for a position</em>, please make sure to see
      if the opportunity wouldn’t conflict with my current project. You can find
      my renewal date at the
      <a href="/resume#availability"><em>top</em> of my resumé </a>.
    </p>
    <p>
      You may also find me on
      <a href="https://twitter.com/renoirb" title="@renoirb on Twitter">
        Twitter
      </a>
      ,
      <a href="https://github.com/renoirb" title="@renoirb on GitHub">
        GitHub
      </a>
      or through my personal site
      <a href="https://renoirboulanger.com/"> renoirboulanger.com </a>
      .
    </p>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  layout: 'blank',
})
</script>

<style lang="scss" scoped>
@import './style.scss';
</style>
