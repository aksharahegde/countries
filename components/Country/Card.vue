<template>
  <li
    class="
      relative
      rounded-lg
      shadow-lg
      border border-gray-200
      dark:border-gray-400
      overflow-hidden
      hover:shadow-lg
      group
      bg-white
    "
  >
    <img
      class="object-cover object-center w-full h-56 border-b"
      :src="item.flag"
      :alt="item.name"
    />

    <div class="px-6 pt-4 pb-8">
      <h1 class="text-xl font-semibold text-gray-800 dark:text-white">
        {{ item.name }}
      </h1>

      <p class="py-2 text-gray-700 dark:text-gray-400">
        {{ item.altSpellings.join(', ')}}
      </p>

      <div class="flex items-center mt-4 text-gray-700 dark:text-gray-200">
        <svg
          class="w-6 h-6 fill-current"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M14 11H10V13H14V11Z" />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7 5V4C7 2.89545 7.89539 2 9 2H15C16.1046 2 17 2.89545 17 4V5H20C21.6569 5 23 6.34314 23 8V18C23 19.6569 21.6569 21 20 21H4C2.34314 21 1 19.6569 1 18V8C1 6.34314 2.34314 5 4 5H7ZM9 4H15V5H9V4ZM4 7C3.44775 7 3 7.44769 3 8V14H21V8C21 7.44769 20.5522 7 20 7H4ZM3 18V16H21V18C21 18.5523 20.5522 19 20 19H4C3.44775 19 3 18.5523 3 18Z"
          />
        </svg>

        <div class="text-sm text-gray-500 mx-2">Capital</div>
        <h1 class="px-2 text-sm">{{ item.capital }}</h1>
      </div>

      <div class="flex items-center mt-4 text-gray-700 dark:text-gray-200">
        <svg
          class="w-6 h-6 fill-current"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16.2721 10.2721C16.2721 12.4813 14.4813 14.2721 12.2721 14.2721C10.063 14.2721 8.27214 12.4813 8.27214 10.2721C8.27214 8.063 10.063 6.27214 12.2721 6.27214C14.4813 6.27214 16.2721 8.063 16.2721 10.2721ZM14.2721 10.2721C14.2721 11.3767 13.3767 12.2721 12.2721 12.2721C11.1676 12.2721 10.2721 11.3767 10.2721 10.2721C10.2721 9.16757 11.1676 8.27214 12.2721 8.27214C13.3767 8.27214 14.2721 9.16757 14.2721 10.2721Z"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5.79417 16.5183C2.19424 13.0909 2.05438 7.3941 5.48178 3.79418C8.90918 0.194258 14.6059 0.0543983 18.2059 3.48179C21.8058 6.90919 21.9457 12.606 18.5183 16.2059L12.3124 22.7241L5.79417 16.5183ZM17.0698 14.8268L12.243 19.8965L7.17324 15.0698C4.3733 12.404 4.26452 7.9732 6.93028 5.17326C9.59603 2.37332 14.0268 2.26454 16.8268 4.93029C19.6267 7.59604 19.7355 12.0269 17.0698 14.8268Z"
          />
        </svg>
        <div class="text-sm text-gray-500 mx-2">Region</div>
        <h1 class="px-2 text-sm">{{ item.region }}</h1>
      </div>

      <div class="flex items-center my-4 text-gray-700 dark:text-gray-200">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
        <div class="text-sm text-gray-500 mx-2">Currency</div>
        <h1 class="px-2 text-sm" v-if="item.currencies.length">
            {{ item.currencies[0].name }} ({{ item.currencies[0].symbol }})
        </h1>
      </div>
      <div class="absolute bottom-0 w-full flex items-center justify-end py-2 px-6">
          <nuxt-link :to="{ name: 'countries-slug', params: { slug: item.name } }" class="text-center py-2 px-4 text-primary-700 backdrop-filter backdrop-blur-lg bg-opacity-60 transition duration-500 ease-in-out hover:border-r-4 hover:border-primary-500  font-bold text-lg">Learn more</nuxt-link>
      </div>
    </div>
  </li>
</template>
<script>
export default {
    props: {
        item: {
            type: Object,
            required: true
        }
    }
}
</script>
