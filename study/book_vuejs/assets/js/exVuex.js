console.log("store.count : " + store.state.count )
store.commit('increment')
console.log("after store.count : " + store.state.count )

var app = new Vue({
    el: '#app',
    mixins: _pageMixins,
    data: {
        localCount: 2
    },
    store,
    computed: Vuex.mapState({
        // state의 state.count를 반영
        /*
        cnt: function(state){
            return state.count;
        }
        */
        cnt: state=>state.count,
        // state => state.count와 동일하다
        countAlias: 'count',
        another: 'b',
        // 두 값을 더한 것을 출력
        countPlusLocalState(state){
            return state.count + this.localCount
        },
        gettersCount(){
            return store.getters.count2
        },
        gettersMax(){
            return store.getters.max
        },
        gettersItem(){
            return this.$store.getters.item(2)
        },
        gettersName(){
            return this.$store.getters.name(1)
        },
    }),
    methods: {
        callMutationType(){
            this.$store.commit('mutationType', { id:1, name:'딸기' })
        },
        callActionType(){
            this.$store.dispatch('actionType', { id:3, name:'수박' })
        },
        doUpdate(event) {
            // input의 값을 기반으로 디스패치하기
            this.$store.dispatch('doUpdate', event.target.value)
        }
    }
});

