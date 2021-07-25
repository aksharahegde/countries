<template>
  <div class="flex items-center justify-end md:justify-center mx-4 cursor-pointer">
    <button
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
        text-primary-600
        border border-transparent
        rounded-full
        md:w-auto
        hover:border-primary-500
        focus:outline-none
        focus:ring-2
        focus:ring-offset-2 
        focus:ring-primary-600
      "
      @click="toggleTheme()"
    >
      {{ darkTheme ? 'Dark' : 'Light' }} mode
    </button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      darkTheme: false
    }
  },
  mounted () {
    this.darkTheme = localStorage.theme === 'dark'
    this.toggleTheme(localStorage.theme)
  },
  methods: {
    toggleTheme () {
      localStorage.theme = this.darkTheme ? 'light' : 'dark'
      if (this.darkTheme || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark')
       
      } else {
        document.documentElement.classList.remove('dark')
      }
    }
  }
}
</script>
