<template>
    <div class="modal-wrap" v-if="dataJs.isModalOpen">
        <div class="modal-bx">
            <button class="close-btn" @click="modalClose">Ⅹ</button>
            <h4 class="modal-tit">상세보기</h4>
            <div class="modal-con">
                <div class="thumnail">
                    <img :src="require('../assets/images/' + dataJs.products[dataJs.modalProdNum].imgUrl)" alt="">
                </div>
                <p class="con-tit">{{ dataJs.products[dataJs.modalProdNum].name }}</p>
                <p class="con-price">{{ dataJs.products[dataJs.modalProdNum].price }} 만원</p>
                <p>
                    <input type="number" v-model.number="this.inputMonth">
                    <span class="error-bx" v-if="this.isErrorBx">{{ this.errorMsg}}</span>
                </p>
                <p>{{this.inputMonth}} 개월 선택함 : {{ this.inputMonth * dataJs.products[dataJs.modalProdNum].price}} 만원</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ModalDetail',
    props: {
        dataJs: Object
    },
    data() {
        return {
            isErrorBx:false,
            errorMsg:'',
            inputMonth: 1,
        }
    },
    watch : {
        inputMonth(e) {
            if(e >= 12){
                this.isErrorBx = true;
                this.inputMonth = 12;
                this.errorMsg = '12이하로 입력하세요';
            } else {
                this.isErrorBx = false;
                this.errorMsg = '';
            }
      }
    },
    methods: {
        modalClose() {
            this.$emit('modal-close', false);
        },
        chckInputPrice(e) {
            console.log(e.target.value)
            // this.inputPrice = val;
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.modal-wrap {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, .6);

    .modal-bx {
        position: relative;
        padding: 20px;
        width: 80%;
        display: block;
        height: auto;
        background: #fff;

        .modal-tit {
            padding-bottom: 10px;
            font-size: 20px;
        }

        .modal-con {
            padding: 20px auto;
            min-height: 200px;
            text-align: left;

            .thumnail {
                margin-bottom:20px;
                img {
                    width: 100%;
                }
            }
            .con-tit {
                font-weight:bold;
                font-size:20px;
            }
        }
    }

    .close-btn {
        position: absolute;
        top: 10px;
        right: 10px;
        padding: 7px 10px;
        background: #fff;
        border: 0;
        cursor: pointer;
    }
}
</style>
