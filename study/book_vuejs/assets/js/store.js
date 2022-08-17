const myModule = {
  namespaced: true,
  state() {
    return {
      entries: []
    }
  },
  mutations: {
    set(state, payload) {
      state.entries = payload
    }
  },
  actions: {
    load({ commit }, file) {
      axios.get(file).then(response => {
        commit('set', response.data)
      })
    }
  }
}

const moduleA = {
  namespaced: true,
  state: {
    count: 1
  },
  getters: {
    test(state, getters, rootState, rootGetters) {
      // 자기 자신의 item 게터 사용: getters['moduleA/item']
      getters.item
      // 루트의 user 게터 사용
      rootGetters.user

      return [getters.item, rootGetters.user]
    },
    item() { return 'getter: moduleA/item' },
  },
  mutations: {
    updateModule(state) {
      state.count += 100
    }
  },
  actions: {
    test({ dispatch, commit, getters, rootGetters }) {
      // 자시 자신의 update 디스패치하기
      dispatch('updateModuleLog')
      // 루트의 updateModule 디스패치하기
      dispatch('updateModuleLog', null, { root: true })
      // 루트의 updateModule 커밋하기
      commit('updateModuleLog', null, { root: true })
      // 루트에 등록되어 있는 moduleB의 updateModule 커밋하기
      commit('moduleB/updateModuleLog', null, { root: true })
    },
    updateModuleLog() { console.log('moduleA action: moduleA/updateModuleLog') },
  }
}
const moduleB = {
  namespaced: true,
  state: {
    count: 2
  },
  mutations: {
    updateModule(state) {
      state.count += 200

    },
    updateModuleLog() {
      console.log('moduleB action: moduleB/updateModuleLog')
    }
  }
}

// 스토어 만들기
const store = new Vuex.Store({
  state: {
    count: 0,
    b:2,
    message: "초기 메세지",
    list: [
      { id: 1, name: '사과', price: 1000 },
      { id: 2, name: '바나나', price: 2000 },
      { id: 3, name: '딸기', price: 3000 }
    ],
    mutationTypeVal:"울룰루",
  },
  mutations: {
    // Count up하는 뮤테이션 등록하기
    increment(state) {
      state.count++
    },
    increment2: state => { state.count += 2 },
    mutationType(state, payload) {
      state.mutationTypeVal = payload
    },
    setMessage(state, payload) {
      state.message = payload.message
    },
    updateModuleLog() { console.log('store mutation: updateModuleLog') },

  },
  actions: {
    actionType({ commit }, payload) {
      // 액션 내부에서 커밋하기
      commit('mutationType', payload)
    },
    doUpdate({commit}, message) {
      commit('setMessage', {
        message
      })
    },
    updateModuleLog() { console.log('store action: updateModuleLog') }
  },
  getters: {
    //단순하게 상태 리턴하기
    count2(state, getters, rootState, rootGetter) {
      return state.count
    },
    // 리스트 요소들의price 속성을 기반으로 최댓값을 찾아 리턴하기
    max(state){
      return state.list.reduce((a,b) => {
        return a > b.price ? a : b.price
      }, 0)
    },
    // 매개 변수를 포함하는 게터
    // list에서 id가 일치하는 요소 리턴하기
    item(state) {
      // 화살표 함수 사용하기
      return id => state.list.find(el => el.id === id)
    },
    // 다른 게터를 사용할 수도 있음
    name(state, getters) {
      return id => getters.item(id).name
    },
    message(state) {
      return state.message
    },
    user() { return 'getter: user' }
  },
  modules: {
    moduleA,
    moduleB,
    moduleC: myModule,
    moduleD: myModule
  }
})

// 어떤 것이 호출되었는지 로그로 확인해 보기
store.dispatch('moduleA/test')
console.log(store.getters['moduleA/test'])

store.dispatch('moduleC/load', 'assets/js/c.json')
store.dispatch('moduleD/load', 'assets/js/d.json')

const unwatch = store.watch(
  (state, getters) => {
    return state.count // 감시하고 싶은 데이터를 리턴
  },
  (newVal, oldVal) => {
    // 처리
  }
)

// 커밋에 훅
store.subscribe((mutation, state) => {
  console.log('*************')
  console.log(mutation.type)
  console.log(mutation.payload)
  console.log('*************')
})
// 디스패치에 훅
store.subscribeAction((action, state) => {
  console.log(action.type)
  console.log(action.payload)
})