<template>
    <section class="w-full px-6 pb-12 antialiased bg-white">
        <div class="mx-auto max-w-7xl">
            <ul id="countries" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <HomeCard
                    v-for="(country, index) in filteredData"
                    :key="index"
                    :item="country"
                />
            </ul>
        </div>
    </section>
</template>
<script>
export default {
    async fetch() {
        const { data } = await this.$store.dispatch('fetchCountries')
        console.log({data});
        this.$store.commit('UPDATE_CONTRIES', data);
    },
    computed: {
        filteredData() {
            return this.$store.getters['countries']
        }
    }
}
</script>
