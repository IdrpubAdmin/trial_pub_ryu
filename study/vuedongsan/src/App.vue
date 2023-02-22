<template>
    <div class="modal-bx">
        <div class="modal-bg">
            <h4 class="modal-tit">모달 제목</h4>
            <div class="modal-con">
                모달 내용
            </div>
        </div>
    </div>
    <ul class="gnb-bx">
        <li v-for="(item, idx) in gnbTxt" :key="idx">
            <a href="#none">{{item}}</a>
        </li>
    </ul>
    <ul class="prd-list">
        <li class="prd-list" v-for="(item, idx) in this.products" :key="idx">
            <div class="thumnail">
                <img :src="require('./assets/images/' + item.imgUrl)" alt="">
            </div>
            <div class="tit">
                <h4>{{ item.name }}</h4>
                <p>{{ item.price }}만원</p>
            </div>
            <div class="desc">
                <button @click="incrReport(item)">허위매물신고</button>
                <span>신고수 : {{ item.cntReport}}</span>
            </div>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'App',
    data(){
        return {
            gnbTxt: ['Home', 'Shop', 'About'],
            products : [
                {name : '역삼동원룸',price: 9000, cntReport: 0, imgUrl:'room0.jpg'},
                {name : '천호동원룸',price: 9000, cntReport: 1, imgUrl:'room1.jpg'},
                {name : '마포구원룸',price: 9000, cntReport: 0, imgUrl:'room2.jpg'},
            ]
        };
    },
    components: {
    },
    methods: {
        incrReport(obj) {
            obj.cntReport++;
        }
    }
}
</script>

<style lang="scss">
* {
    margin:0;
    padding:0;
    box-sizing: border-box;
}
li {
    list-style:none;
    display:inline-block;
}
#app {
    padding:20px;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
.gnb-bx {

    a {
        display:inline-block;
        padding:10px;
        color:white;
    }
    border-radius:10px;
    background:darkslateblue;
}
.prd-list {
    li {
        padding:15px 10px;
        width:100%;
        border-top:1px solid #ccc;
        &:first-child {
            border-top:0;
        }
    }
    .thumnail,
    .tit,
    .desc {
        float:left;
        width:100%;
    }
    .thumnail {
        img {
            width:100%;
        }
    }
    .tit {
        h4 {
            float:left;
        }
        p {
            float:right;
        }
    }
    .desc {
        button {
            float:left;
        }
        span {
             float:right;
        }
    }
}
.modal-bx {
    width:100%;
    height:100%;
    background:rgba(0,0,0,.6)
}
</style>
