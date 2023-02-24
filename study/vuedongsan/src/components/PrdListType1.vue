<template>
    <ul class="prd-list">
        <li class="prd-list" v-for="(item, idx) in dataJs.products" :key="idx">
            <div class="thumnail">
                <img :src="require('../assets/images/' + item.imgUrl)" alt="">
            </div>
            <div class="tit">
                <h4 @click="modalOpen(idx)">{{ item.name }}</h4>
                <p>{{ item.price }} 만원</p>
            </div>
            <div class="desc">
                <button @click="incrReport(item)">허위매물신고</button>
                <span>신고수 : {{ item.cntReport }}</span>
            </div>
        </li>
    </ul>
</template>

<script>
export default {
  name: 'PrdList',
  props: {
      dataJs: Object
  },
    methods: {
        incrReport(obj) {
            obj.cntReport++;
        },
        modalOpen(idx) {
            this.$emit('modal-open', idx);
        },
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.prd-list {
    li {
        padding: 15px 0;
        width: 100%;
        border-top: 1px solid #ccc;

        &:first-child {
            border-top: 0;
        }
    }

    .thumnail,
    .tit,
    .desc {
        float: left;
        width: 100%;
    }

    .thumnail {
        img {
            width: 100%;
        }
    }

    .tit {
        h4 {
            padding:5px 0;
            float: left;
            cursor: pointer;
            font-size:18px;
        }

        p {
            float: right;
            line-height:35px;
        }
    }

    .desc {
        button {
            float: left;
            cursor: pointer;
            padding:5px;
            background:#fff;
            border:1px solid #999;
            border-radius:5px;
        }

        span {
            float: right;
        }
    }
}
</style>
