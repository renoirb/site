<template>
  <nav class="bg-primary-910 text-white border-b">
    <div class="container px-4 mx-auto">
      <div class="md:justify-between flex items-center py-4">
        <div class="md:hidden w-1/4">
          <svg
            class="w-8 h-8 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              d="M16.4 9H3.6c-.552 0-.6.447-.6 1 0 .553.048 1 .6 1h12.8c.552 0 .6-.447.6-1 0-.553-.048-1-.6-1zm0 4H3.6c-.552 0-.6.447-.6 1 0 .553.048 1 .6 1h12.8c.552 0 .6-.447.6-1 0-.553-.048-1-.6-1zM3.6 7h12.8c.552 0 .6-.447.6-1 0-.553-.048-1-.6-1H3.6c-.552 0-.6.447-.6 1 0 .553.048 1 .6 1z"
            />
          </svg>
        </div>
        <div class="md:w-auto w-1/2 font-medium text-center">
          <nuxt-link to="/">Renoir Boulanger</nuxt-link>
        </div>
        <div class="md:w-auto md:flex hidden w-1/4 ml-2 text-right">
          <div class="navbar-top-right items-center justify-end">
            <nuxt-link
              to="/blog"
              class="hover:opacity-100 px-4 py-2 opacity-75"
            >
              Blog
            </nuxt-link>
            <nuxt-link
              to="/hello"
              class="hover:opacity-100 px-4 py-2 opacity-75"
            >
              About
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
