<template>
  <div class="document document--item">
    <header class="title page-title">
      <h1>Kitchen Sink</h1>
      <em>
        Some hard-coded HTML patterns to make sure PostCSS purging doesn’t
        remove stuff
      </em>
    </header>
    <div class="body">
      <div>
        <div
          data-alert-type="info"
          role="alert"
          class="disposition-parent app-alert-box mb-5 text-blue-800 bg-blue-200 border-blue-400"
        >
          <header class="disposition-item">Alert of type: info</header>
          <!---->
          info
        </div>
        <div
          data-alert-type="error"
          role="alert"
          class="disposition-parent app-alert-box mb-5 text-red-800 bg-red-200 border-red-400"
        >
          <header class="disposition-item">Alert of type: error</header>
          <!---->
          error
        </div>
        <div
          data-alert-type="warn"
          role="alert"
          class="disposition-parent app-alert-box mb-5 text-yellow-800 bg-yellow-200 border-yellow-400"
        >
          <header class="disposition-item">Alert of type: warn</header>
          <!---->
          warn
        </div>
      </div>
    </div>
  </div>
</template>
