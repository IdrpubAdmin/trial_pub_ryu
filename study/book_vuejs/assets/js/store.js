// 스토어 만들기
const store = new Vuex.Store({
  state: {
    count: 0,
    b:2
  },
  mutations: {
    // Count up하는 뮤테이션 등록하기
    increment(state) {
      state.count++
    }
  }
})