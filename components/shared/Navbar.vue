<template>
    <header class="z-30 w-full px-2 py-4 bg-white sm:px-4">
  <div class="flex items-center justify-between mx-auto max-w-7xl">
    <a href="/" title="Countries Home Page" class="flex items-center">
      <SharedLogo/>
    </a>
    <div class="flex items-center space-x-1">
      <div class="hidden space-x-1 md:inline-flex">
        <!-- <SharedThemeToggle/> -->
      </div>
      <nuxt-link
        to="/countries"
        type="button"
        class="
          inline-flex
          items-center
          justify-center
          w-full
          px-4
          py-2
          text-base
          font-bold
          leading-6
          text-white
          bg-primary-600
          border border-transparent
          rounded-lg
          md:w-auto
          hover:bg-primary-500
          hover:shadow
          focus:outline-none
          focus:ring-2 focus:ring-offset-2 focus:ring-primary-600
        "
      >
        Expore Now
      </nuxt-link>
      <div class="inline-flex md:hidden" x-data="{ open: false }">
        <button class="flex-none px-2 btn btn-link btn-sm" @click="open = true">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-hidden="true"
            class="w-5 h-5"
          >
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
          <span class="sr-only">Open Menu</span>
        </button>
        <div v-if="open" class="absolute top-0 left-0 right-0 z-50 flex flex-col p-2 pb-4 m-2 space-y-3 bg-white rounded shadow" x-show.transition="open" @click="open = false" x-cloak>
          <button class="self-end flex-none px-2 ml-2 btn btn-link btn-icon" @click="open = false">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              aria-hidden="true"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
            <span class="sr-only">Close Menu</span>
          </button>
          <a href="#" class="w-full btn btn-link">Features</a>
          <a href="#" class="w-full btn btn-link">Pricing</a>
          <a href="#" class="w-full btn btn-link">Blog</a>
          <a href="#" class="w-full btn btn-link">Company</a>
          <a href="#" class="w-full btn btn-link">Sign in</a>
        </div>
      </div>
    </div>
  </div>
</header>


</template>
<script>
export default {
    data() {
        return {
            open: false
        }
    }
}
</script>