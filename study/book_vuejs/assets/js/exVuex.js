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
        }
    })
});

