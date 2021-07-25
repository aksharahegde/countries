<template>
  <div v-if="country" class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
    <SharedBreadcrumb/>

    <!-- <div class="grid gap-5 row-gap-8 lg:grid-cols-2"> -->
    <div class="flex flex-wrap-reverse md:flex-nowrap md:flex-row space-x-0 md:space-x-6 py-4 items-center">
      <div class="flex flex-col justify-center w-full md:w-1/2">
        <div class="max-w-xl mb-6">
          <h2 class="max-w-lg mb-2 font-sans text-3xl font-bold tracking-tight text-primary-700 sm:text-4xl sm:leading-none">
           {{ country.name }}
          </h2>
        </div>
        <div class="grid gap-5 row-gap-8 sm:grid-cols-2">
          <div class="bg-white border-l-4 shadow-sm border-primary-400">
            <div class="h-full p-5 border border-l-0 rounded-r">
              <h6 class="mb-2 font-semibold leading-5 flex items-center">
                <span>Names</span>
              </h6>
              <ul class="text-sm text-gray-900">
                <li class="py-1 mb-2 flex flex-col justify-center">
                  <div class="text-sm text-gray-500">Native Name</div>
                  <h1 class="text-sm ">{{ country.nativeName }}</h1>
                </li>
                <li class="py-1 mb-2 flex flex-col justify-center">
                  <div class="text-sm text-gray-500">Alternate Spellings</div>
                  <h1 class="text-sm ">{{ country.altSpellings.join(', ') }}</h1>
                </li>
                <li class="py-1 mb-2 flex flex-col justify-center">
                  <div class="text-sm text-gray-500">Alpha2 Code</div>
                  <h1 class="text-sm ">{{ country.alpha2Code }}</h1>
                </li>
                <li class="py-1 mb-2 flex flex-col justify-center">
                  <div class="text-sm text-gray-500">Alpha3 Code</div>
                  <h1 class="text-sm ">{{ country.alpha3Code }}</h1>
                </li>
              </ul>
            </div>
          </div>
          <div class="bg-white border-l-4 shadow-sm border-primary-400">
            <div class="h-full p-5 border border-l-0 rounded-r">
              <h6 class="mb-2 font-semibold leading-5">
                Translations
              </h6>
              <ul class="text-sm text-gray-900">
                <li
                  v-for="(value, name) in country.translations"
                  :key="name"
                  class="py-1 flex items-center space-x-3"
                >
                  <div class="text-sm text-gray-500 w-1/4">{{name}}</div>
                  <h1 class="text-sm ">{{ value }}</h1>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="flex items-center h-full">
        <img class="object-cover w-full h-56 rounded shadow-lg sm:h-96 mb-6 md:mb-0" :src="country.flag" alt="" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  layout: 'default',
  data() {
    return {
      country: null,
    }
  },
  async fetch() {
    console.log('this.$route.params.slug', this.$route.params.slug)
    const { data } = await this.$store.dispatch(
      'fetchCountryByName',
      this.$route.params.slug
    )
    console.log({ data })
    this.country = data && data.length ? data[0] : null
  },
})
</script>
