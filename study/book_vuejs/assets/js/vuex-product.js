const products = {
  namespaced: true,
  state: {
    detail: {}
  },
  getters: {
    detail: state => state.detail
  },
  mutations: {
    set(state, { detail }) {
      state.detail = detail
    },
    clear(state) {
      state.detail = {}
    }
  },
  actions: {
    load({ commit }, id) {
      asyncFind(id, detail => {
        commit('set', { detail })
      })
    },
    destroy({ commit }) {
      commit('clear')
    }
  }
}

const store = new Vuex.Store({
  modules: {
    products,
    vuexview
  }
})
