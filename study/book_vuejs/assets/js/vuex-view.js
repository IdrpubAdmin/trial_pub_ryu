const vuexview = {
  namespaced: true,
  state: {
    loading: false
  },
  mutations: {
    start(state) {
      // console.log("loading start")
      state.loading = true
    },
    end(state) {
      // console.log("loading end")
      state.loading = false
    }
  }
}