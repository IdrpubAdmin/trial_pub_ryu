 Vue.directive('focus3', {
     inserted: function(el){
         el.value='tmep';
         el.focus();
     },
     bind: function (el, binding) {
         console.log('v-example bind')
     },
     inserted: function (el, binding) {
         console.log('v-example inserted')
     },
     update: function (el, binding) {
         console.log('v-example update')
     },
     componentUpdated: function (el, binding) {
         console.log('v-example componentUpdated')
     },
     unbind: function (el, binding) {
         console.log('v-example unbind')
     }
 })
 
var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue.js!',
        list: ['사과', '바나나', '딸기'],
        show: 1,
        message2: {
            value: 'Hello Vue.js!',
        },
        num: 1,
        count: 0,
        isChild: true,
        isActive: true,
        textColor: 'red',
        bgColor: 'lightgray',
        radius: 50,
        list2: [
            { id: 1, name: '슬라임', hp: 100 },
            { id: 2, name: '고블린', hp: 200 },
            { id: 3, name: '드래곤', hp: 500 }
        ],
        monsterClass: {
            child: true,
            'is-weeks': true,
        },
        monsterName: "키메라",
        monsterList: [],
        show2: 1,
        chckval: true,
        width: 800,
        height: 600,

        order: false,
        // 입력 양식에 출력할 데이터
        budget: 3000,
        // 출력할 개수
        limit: 2,
        // 데이터 리스트
        list3: [
            { id: 1, name: '사과', price: 1000 },
            { id: 2, name: '바나나', price: 2000 },
            { id: 3, name: '딸기', price: 4000 },
            { id: 4, name: '오렌지', price: 3000 },
            { id: 5, name: '메론', price: 5000 }
        ],
        list4: [],
        current: '',
        topics: [
            { value: 'vue', name: 'Vue.js' },
            { value: 'jQuery', name: 'jQuery' }
        ],
        price2: 19800,
        video1: false,
        video2: false,
        video3: false,
        list5: [],
    },
    computed: {
        halfWidth: function() {
            return this.width / 2
        },
        halfHeight: function() {
            return this.height / 2
        },
        // 'width×height'의 중심 좌표 객체 리턴하기
        halfPoint: function() {
            return {
                x: this.halfWidth,
                y: this.halfHeight
            }
        },
        computedData: function () {
            return Math.random()
        },

        // budget 아래의 리스트를 리턴하는 산출 속성
        matched: function () {
            return this.list3.filter(function (el) {
                return el.price <= this.budget
            }, this)
        },
        sorted: function() {
            return _.orderBy(this.matched, 'price', this.order ? 'desc' : 'asc')
        },
        // matched로 리턴한 데이터를 limit 조건을 걸어 리턴하는 산출 속성
        limited: function () {
            // return this.matched.slice(0, this.limit)
            return this.sorted.slice(0, this.limit)
        },
    },
    methods: {
        handleClick: function(event){
            console.log(event)
            alert(event.target) // [object HTML Button Element]
        },
        increment: function(){
            this.count += 1
            console.log("//vue method this ")
            console.log(this)
            setTimeout(function(){
                console.log("//callback method this ")
                console.log(this)}
            )
        },
        increment2: () => {
            console.log("//화살표 함수 this scope ")
            console.log(this)
        },
        increment3(){
            console.log("//단축 함수 this scope ")
            console.log(this)
        },
        // 추가 버튼을 클릭할 때의 핸들러
        doAdd: function () {
            // 리스트 내부에서 가장 큰 ID 추출하기
            var max = this.list2.reduce(function (a, b) {
                return a > b.id ? a : b.id
            }, 0)
            // 새로운 몬스터를 리스트에 추가하기
            this.list2.push({
                id: max + 1, // 현재 최대 ID에 1을 더해서 유니크 ID로 사용하기
                name: this.monsterName, // 현재 입력 양식의 값
                hp: 500
            })
        },
        doAttack: function (index) {
            this.list2[index].hp -= 10 // HP 감소시키기
        },
        doRemove: function (index) {
            // 전달받은 인덱스 위치에서 한 개만큼 제거하기
            this.list2.splice(index, 1)
        },
        handleClick2() {
            var count = this.$refs.tempCount
            console.log(count)
            if (count) {
                count.innerText = parseInt(count.innerText, 10) + 1
            }
        },
        handleClick3: function(e) {
            console.log(e)
            console.log(e.currentTarget)
        },
        handleInput: function(e){
            console.log(e)
            console.log(e.currentTarget)
            console.log(e.target)
            console.log(e.target.value)
            this.message = e.target.value
        },
        methodsData: function () {
            return Math.random()
        },
    },
    filters: {
        localeNum: function (val) {
            return val.toLocaleString()
        },
        round: function (val) {
            return Math.round(val * 100) / 100
        },
        // 도 단위를 라디안 단위로 변환하는 필터
        radian: function (val) {
            return val * Math.PI / 180
        }
    },
    directives: {
        focus2: {
            // 연결되어 있는 요소가 DOM에 추가될 때
            inserted: function (el) {
                el.focus() // 요소에 초점을 맞춤
            }
        },
        video(el, binding){
            if(binding.value !== binding.oldValue){
                // console.log("binding.value : " + binding.value)
                // console.log("binding.oldValue : " + binding.oldValue)
                binding.value ? el.play() : el.pause()
            }
        },
    },
    watch: {
        list2: {
            handler: function (newVal, oldVal) {
                // list가 변경될 때 하고 싶은 처리
                console.log('list2 변경 됨')
                console.log(newVal)
                console.log(oldVal)
                // console.log(newVal + "/" + oldVal)
            },
            deep: true,
            immediate: false
        },
        current: function (val) {
            console.log(val)
            // 깃허브 API에서 토픽 리포지토리 검색하기
            axios.get('https://api.github.com/search/repositories', {
                params: {
                    q: 'topic:' + val
                }
            }).then(function (response) {
                this.list4 = response.data.items
                console.log(this.list4)
            }.bind(this))
        },
        list5: function () {
            // 이렇게 해서는 변경 후 ul 태그의 높이를 추출할 수 없음
            console.log('기본 출력:', this.$refs.list5.offsetHeight)
            // nextTick을 사용하면 할 수 있어요!
            this.$nextTick(function () {
                console.log('nextTick:', this.$refs.list5.offsetHeight)
            })
        }
    },
    created: function () {
        axios.get('assets/js/monsterList.json').then(function (response) {
            // 데이터를 읽어 들였다면 list에 할당하기
            this.monsterList = response.data
        }.bind(this)).catch(function (e) {
            console.error(e)
        })
    },
})