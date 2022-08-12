var bus = new Vue({
    data: {
        count: 2
    }
})

Vue.component('comp-child', {
    // 템플릿에서 val 사용하기
    template: '<p>{{ val }}</p>',
    // 받을 속성 이름 지정하기
    props: ['val']
})

Vue.component('comp-child2', {
    template: '<li>{{ name }} HP.{{ hp }}\<button v-on:click="doAttack(idx)">공격하기</button><button v-on:click="doPlusCount">카운트증가</button></li>',
    props: ['name', 'hp', 'idx'],
    methods: {
        doAttack: function () {
            // 공격하기
            //this.hp -= 10 // -> [Vue warn] error!
            this.$emit('do-attack', this.idx, 10)

        },
        doPlusCount: function(){
            bus.$emit('bus-event')
        }
    }
})

Vue.component('component-b', {
    template: '<p>bus: {{ bus.count }}</p>',
    computed: {
        // bus 데이터를 산출 속성으로 사용하기
        bus: function () {
            return bus.$data
        }
    },
    created: function () {
        bus.$on('bus-event', function () {
            this.count++
        })
    },
})

Vue.component('comp-child3', {
    template: '<div>...</div>',
    created: function () {
        // 자신의 처리
        this.$on('open', function () {
            console.log('무언가 처리하기')
        })
    }
})

Vue.component('my-calendar', {
    template: '<div class="my-calendar">{{ value }}</div>',
    props: {
        value: String,
    },
    created: function () {
        this.$emit('input', '2018-12-21')
    },
})

Vue.component('my-calendar2', {
    template: '<div class="my-calendar">{{ current }}</div>',
    model: {
        // 현재 값을 value가 아니라 current로 할당하고 싶은 경우
        prop: 'current',
        // 이벤트를 change로 사용하고 싶은 경우
        event: 'change'
    },
    // props에서 설정하기
    props: {
        current: String
    },
    created: function () {
        this.$emit('change', '2050-05-01')
    },
})

Vue.component('my-component', {
    template: '<div class="my-component">\
  <p>이름.{{ name }} HP.{{ hp }}</p>\
  <p>이름 <input v-model="localName"></p>\
  <p>HP <input size="5" v-model.number="localHp"></p>\
  </div>',
    props: {
        name: String,
        hp: Number
    },
    computed: {
        // 산출 속성의 세터와 게터를 통해 v-model 사용하기
        localName: {
            get: function () {
                return this.name
            },
            set: function (val) {
                this.$emit('update:name', val)
            }
        },
        localHp: {
            get: function () {
                return this.hp
            },
            set: function (val) {
                this.$emit('update:hp', val)
            }
        }
    }
})

Vue.component('functional-component', {
    functional: true,
    render: function (createElement, context) {
        return createElement('div', context.props.message)
    },
    props: {
        message: {
            type: String,
            default: '함수형 컴포넌트',
        }
    }
})

// 컴포넌트A
Vue.component('my-component-a', {
    template: '<div class="my-component-a">component A</div>'
})
// 컴포넌트B
Vue.component('my-component-b', {
    template: '<div class="my-component-b">component B</div>'
})

var mixinType = {
    created: function () {
        this.hello()
    },
    methods: {
        hello: function () {
            console.log('hello from mixin!!!!!!!')
        }
    }
}
Vue.component('my-component-c', {
    mixins: [mixinType], // 믹스인 등록
    template: '<p>MyComponentC</p>'
})
Vue.component('my-component-d', {
    mixins: [mixinType], // 믹스인 등록
    template: '<p>MyComponentD</p>'
})

// 메시지 목록 전용 컴포넌트
Vue.component('comp-board', {
    template: '<div>Message Board</div>',
})
// 입력 양식 전용 컴포넌트
Vue.component('comp-form', {
    template: '<div>Form<textarea v-model="message"></textarea></div>',
    data: function () {
        return {
            message: ''
        }
    }
})
Vue.component('my-circle', {
    template: '<circle cx="80" cy="75" r="50" v-bind:fill="fill"/>',
    props: {
        fill: String
    }
})
var app = new Vue({
    el: '#app',
    data: {
        valueA: '자식AAA',
        valueB: '자식BBB',
        list: [
            { id: 1, name: '슬라임', hp: 100 },
            { id: 2, name: '고블린', hp: 200 },
            { id: 3, name: '드래곤', hp: 500 }
        ],
        date: '0000-00-00',
        date2: '0000-00-00',
        name: '슬라임',
        hp: 100,
        // 컴포넌트 리스트
        componentTypes: ['my-component-a', 'my-component-b'],
        // 렌더링할 컴포넌트를 선택하는 index
        current: 0,
        current2: 'comp-board', // 동적으로 변경하기
        show: true,
        show2: true,
        show3: true,
        count: 0,
        order: false,
        list2: [
            { id: 1, name: '사과', price: 1000 },
            { id: 2, name: '바나나', price: 2000 },
            { id: 3, name: '딸기', price: 3000 }
        ],
        list3: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        toggle: false
    },
    computed: {
        component: function () {
            console.log(this.current)
            // current와 일치하는 index 컴포넌트 사용하기
            return this.componentTypes[this.current]
            // `return current ? 'my-component-b' : 'my-component-a'`를 사용해도 괜찮습니다.
        },
        sortedList: function () {
            // Lodash의 orderBy 메서드 사용하기
            return _.orderBy(this.list2, 'price', this.order ? 'desc' : 'asc')
        },
        fill: function () {
            return this.toggle ? 'lightpink' : 'skyblue'
        }
    },
    methods: {
        rootDoAttack: function(idx, val){
            this.list[idx].hp -= val
        },
        handleClick: function () {
            // 자식 컴포넌트의 이벤트 실행하기
            this.$refs.child.$emit('open')
        },
        doShuffle: function () {
            this.list3 = _.shuffle(this.list3)
        },
        doAdd: function() {
            var newNumber = Math.max.apply(null, this.list3) + 1
            var index = Math.floor(Math.random() * (this.list3.length + 1))
            this.list3.splice(index, 0, newNumber)
        },
        doRemove: function (index) {
            this.list3.splice(index, 1)
        },
        // Enter
        beforeEnter: function (el) {
            console.log('before-enter')
        },
        enter: function (el, done) {
            console.log('enter')
            setTimeout(done, 1000)
        },
        afterEnter: function (el) {
            console.log('after-enter')
        },
        enterCancelled: function (el) {
            console.log('enter-cancelled')
        },
        // Leave
        beforeLeave: function (el) {
            console.log('before-leave')
        },
        leave: function (el, done) {
            console.log('leave')
            setTimeout(done, 1000)
        },
        afterLeave: function (el) {
            console.log('after-leave')
        },
        // v-show와 함께 사용하는 경우에만 leaveCancelled를 사용할 수 있습니다.
        leaveCancelled: function (el) {
            console.log('leave-cancelled')
        },
        beforeLeave2: function (el) {
            var style = window.getComputedStyle(el)
            el.style.left = el.offsetLeft - parseFloat(style.marginLeft, 10) + 'px'
            el.style.top = el.offsetTop - parseFloat(style.marginTop, 10) + 'px'
        }
    },
    filters: {

    },
    directives: {

    },
    watch: {

    },
    components: {
        'comp-child4': httpVueLoader('./components/comp-child4.vue'),
    },
    created: function () {

    },
})