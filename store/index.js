import { urls } from '~/constants'

export const state = () => ({
    countries: []
})

export const mutations = {
    UPDATE_CONTRIES(state, flag) {
      state.countries = flag;
    },
}

export const getters = {
    countries(state) {
        return state.countries
    }
}

export const actions = {
    async fetchCountries() {
        return await this.$axios.get(urls.all);
    }
}
