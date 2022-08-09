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
    },
    created: function () {
        axios.get('assets/js/monsterList.json').then(function (response) {
            // 데이터를 읽어 들였다면 list에 할당하기
            this.monsterList = response.data
        }.bind(this)).catch(function (e) {
            console.error(e)
        })
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
    }
})