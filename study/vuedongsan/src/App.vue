<template>
    <div class="wrap">
        <ul class="gnb-bx">
            <li v-for="(item, idx) in dataJs.gnbTxt" :key="idx">
                <a href="#none">{{ item }}</a>
            </li>
        </ul>

        <BannerDisc v-if="isShowBannerDisc"/>

        <br>
        <button @click="pirceSort">가격순 정렬</button> &nbsp;
        <button @click="pirceSortOrg">정렬 되돌리기</button>

        <PrdListT1 :data-js="this.dataJs" @modal-open="modalOpen"/>

        <ModalDetail :data-js="this.dataJs" @modal-close="modalClose"/>

    </div>

</template>

<script>
import dataJs from './data'
import BannerDisc from "@/components/BannerDisc.vue";
import PrdListT1 from "@/components/PrdListType1.vue";
import ModalDetail from "@/components/ModalDetail.vue";

export default {
    name: 'App',
    data() {
        return {
            isShowBannerDisc: true,
            dataJs,
            dataJsProdOrg: [...dataJs.products],
        };
    },
    components: {
        BannerDisc,
        PrdListT1,
        ModalDetail,
    },
    mounted() {
        setTimeout(this.hideBanner, 2000)
    },
    methods: {
        modalOpen(val) {
            this.dataJs.modalProdNum = val;
            this.dataJs.isModalOpen = !this.dataJs.isModalOpen;
        },
        modalClose(val) {
            this.dataJs.isModalOpen = val;
        },
        pirceSort() {
            this.dataJs.products.sort(function(a,b){
                return a.price - b.price
            });
        },
        pirceSortOrg() {
            this.dataJs.products = [...this.dataJsProdOrg];
        },
        hideBanner() {
            this.isShowBannerDisc = false;
        },
    }
}

</script>

<style lang="scss">
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.wrap {
    margin:0 auto;
    max-width:768px;
}
li {
    list-style: none;
    display: inline-block;
}

#app {
    padding: 20px;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

.gnb-bx {
    margin-bottom: 15px;

    a {
        display: inline-block;
        padding: 10px;
        color: white;
    }

    border-radius: 10px;
    background: darkslateblue;
}
</style>
