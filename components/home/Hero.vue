<template>
  <section class="w-full px-6 pb-12 antialiased bg-white">
    <div class="mx-auto max-w-7xl">
      <div
        class="
          container
          max-w-lg
          px-4
          py-32
          mx-auto
          text-left
          md:max-w-none
          md:text-center
        "
      >
        <HomeGlobe/>
        <h1
          class="
            text-5xl
            font-extrabold
            leading-10
            tracking-tight
            text-left text-gray-900
            md:text-center
            sm:leading-none
            md:text-6xl
            lg:text-7xl
            mt-4
          "
        >
          <span class="inline md:block">Countries</span>
          <span
            class="
              relative
              mt-2
              text-transparent
              bg-clip-text bg-gradient-to-br
              from-primary-600
              to-primary-500
              md:inline-block
            "
            >
            On our planet
            </span>
        </h1>
        <div
          class="
            mx-auto
            mt-5
            text-gray-500
            md:mt-12
            md:max-w-lg
            md:text-center
            lg:text-lg
          "
        >
          Information about countries include name, full name, code, list of codes, currency, language, capital city, calling code, region, bloc and more!
        </div>
        <div class="flex flex-col items-center mt-12 text-center">
          <span class="relative inline-flex w-full md:w-auto">
            <a
              href="#countries"
              type="button"
              class="
                inline-flex
                items-center
                justify-center
                w-full
                px-8
                py-4
                text-base
                font-bold
                leading-6
                text-white
                bg-primary-600
                border border-transparent
                rounded-full
                md:w-auto
                hover:bg-primary-500
                focus:outline-none
                focus:ring-2 focus:ring-offset-2 focus:ring-primary-600
              "
            >
              Expore Now
            </a>
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
