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
        <h2>Alert warn</h2>
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
        <!-- -->
        <h2>Alert info</h2>
        <div>
          <div
            role="alert"
            class="relative my-4 text-blue-700 bg-blue-100 border border-blue-400 rounded"
          >
            <div class="px-2 py-1 font-bold text-black bg-blue-400">
              Attention: Vieux contenu
            </div>
            <div class="px-2 py-1">Ceci date de 2010.</div>
          </div>
        </div>
        <!-- -->
      </div>
    </div>
  </div>
</template>
