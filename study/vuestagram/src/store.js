import {createStore} from 'vuex'
import axios from 'axios'

const store = createStore({
  state() {
    return {
      name: 'Kim',
      age: 20,
      moreData: {}
    }
  },
  mutations: {
    changeName(state) {
      state.name = 'park'
    },
    increAge(state, payload) {
      state.age += payload
    },
    updateMoreData(state, payload) {
      state.moreData = payload
    }
  },
  actions: {
    getMoreData(context) {
      axios.get('https://codingapple1.github.io/vue/more0.json')
        .then((res)=>{
          console.log(res)
          context.commit('updateMoreData', res.data)
        })
        .catch((err)=>{
          console.log(err)
        });
    }
  },

})

export default store;
