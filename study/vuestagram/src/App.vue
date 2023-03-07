<template>
    <div class="header">
        <ul class="header-button-left">
            <li @click="this.currentTabIdx--">Cancel</li>
        </ul>
        <ul class="header-button-right">
            <li v-if="this.currentTabIdx == 1" @click="this.currentTabIdx++">Next</li>
            <li v-if="this.currentTabIdx == 2" @click="publish">발행</li>
        </ul>
        <img src="./assets/logo.png" class="logo"/>
    </div>

    <h5>{{ $store.state.name }} / {{ $store.state.age }}</h5>
    <button @click="$store.commit('changeName')">이름변경</button> /
    <button @click="$store.commit('increAge', 10)">나이증가</button>

    <p>{{ $store.state.moreData }} </p>
    <button @click="$store.dispatch('getMoreData')">더보기</button>

    <p>{{ now() }}</p>
    <p>{{ this.nowBx }}</p>
    <button @click=" now()">현재시간</button>
    <p>{{ this.now2 }}</p>

    <p>{{ mstMoreData }}</p>

    <Container :post-db="this.postDb"
               :current-tab-idx="this.currentTabIdx"
               :temp-file-url="this.tempFileUrl"
               @write="this.writedText = $event"/>

    <button @click="postMore">게시물 더보기</button>

    <div class="footer">
        <ul class="footer-button-plus">
            <input type="file" id="file" class="inputfile" @change="changeFiles"/>
            <label for="file" class="input-plus">+</label>
        </ul>
    </div>

    <div class="tab-bx">
        <div v-if="this.currentTabIdx == 0">내용0</div>
        <div v-if="this.currentTabIdx == 1">내용1</div>
        <div v-if="this.currentTabIdx == 2">내용2</div>
        <button :class="{'actOn':this.currentTabIdx == 0}" @click="this.currentTabIdx = 0">버튼0</button>
        <button :class="{'actOn':this.currentTabIdx == 1}" @click="this.currentTabIdx = 1">버튼1</button>
        <button :class="{'actOn':this.currentTabIdx == 2}" @click="this.currentTabIdx = 2">버튼2</button>
    </div>
</template>

<script>
import Container from './components/Container.vue'
import postDb from './postDb.js'
import axios from 'axios'
import {mapState} from 'vuex'

export default {
    name: 'App',
    components: {
        Container
    },
    data(){
        return {
            postDb,
            currentTabIdx: 0,
            tempFileUrl: '',
            writedText:'',
            applytFilter: '',
            nowBx: 0,
        }
    },
    mounted() {
        this.emitter.on('gApplyFilter', (filterName)=>{
            this.applytFilter = filterName;
        })
    },
    computed: {
        strName() {
            return this.$store.state.name
        },
        strAge() {
            return this.$store.state.age
        },
        ...mapState(['name', 'age', 'moreData']),
        ...mapState({mstName : 'name', mstAge : 'age', mstMoreData: 'moreData'}),
        now2() {
            return new Date()
        },

    },
    methods: {
        now() {
            this.nowBx = new Date()
        },
        postMore() {
            axios.get('https://codingapple1.github.io/vue/more0.json')
                .then((res)=>{
                    console.log(res)
                    this.postDb.push(res.data)
                })
                .catch((err)=>{
                    console.log(err)
                });
        },
        changeFiles(e) {
            let tempFiles = e.target.files
            console.log(tempFiles[0])
            this.tempFileUrl = URL.createObjectURL(tempFiles[0])
            this.currentTabIdx++;
        },
        publish() {
            const writedPost = {
                name: "Kim Hyun",
                userImage: "https://placeimg.com/100/100/arch",
                postImage: this.tempFileUrl,
                likes: 36,
                date: "May 15",
                liked: false,
                content: this.writedText,
                filter: this.applytFilter
            };
            this.postDb.unshift(writedPost);
            this.currentTabIdx = 0;
        }
    }
}
</script>

<style>
body {
    margin: 0;
}

ul {
    padding: 5px;
    list-style-type: none;
}

.logo {
    width: 22px;
    margin: auto;
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    top: 13px;
}

.header {
    width: 100%;
    height: 40px;
    background-color: white;
    padding-bottom: 8px;
    position: sticky;
    top: 0;
}

.header-button-left {
    color: skyblue;
    float: left;
    width: 50px;
    padding-left: 20px;
    cursor: pointer;
    margin-top: 10px;
}

.header-button-right {
    color: skyblue;
    float: right;
    width: 50px;
    cursor: pointer;
    margin-top: 10px;
}

.footer {
    width: 100%;
    position: sticky;
    bottom: 0;
    padding-bottom: 10px;
    background-color: white;
}

.footer-button-plus {
    width: 80px;
    margin: auto;
    text-align: center;
    cursor: pointer;
    font-size: 24px;
    padding-top: 12px;
}

.sample-box {
    width: 100%;
    height: 600px;
    background-color: bisque;
}

.inputfile {
    display: none;
}

.input-plus {
    cursor: pointer;
}

#app {
    box-sizing: border-box;
    font-family: "consolas";
    margin-top: 60px;
    width: 100%;
    max-width: 460px;
    margin: auto;
    position: relative;
    border-right: 1px solid #eee;
    border-left: 1px solid #eee;
}
</style>
