<template>
  <div class="document document--item">
    <header class="title page-title">
      <h1>Style Guide</h1>
      <em>
        Some hard-coded HTML patternsto make sure PostCSS purging doesn’t remove
        stuff
      </em>
    </header>
    <div class="body">
      <div>
        <h2>very-old-article</h2>
        <div>
          <very-old-article locale="en-UK" date="2014-01-01">
          </very-old-article>
        </div>
      </div>
      <div>
        <h2>Alert info</h2>
        <div>
          <div
            role="alert"
            class="relative my-4 text-yellow-700 bg-yellow-100 border border-yellow-400 rounded"
          >
            <div class="px-2 py-1 font-bold text-black bg-yellow-400">
              Attention: Vieux contenu
            </div>
            <div class="px-2 py-1">Ceci date de 2010.</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
