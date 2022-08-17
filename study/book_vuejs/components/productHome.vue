<template>
  <div class="product" v-if="item" key="product">
    <h1>상품 정보</h1>
    <p>이 페이지는 ID.{{ $route.params.id }}의 상세를 출력합니다.</p>
    <dl class="product-table">
      <dt>상품 이름</dt>
      <dd>{{ item.name }}</dd>
      <dt>가격</dt>
      <dd>{{ item.price }}원</dd>
      <dt>상품 설명</dt>
      <dd>{{ item.content }}</dd>
    </dl>
  </div>
  <div v-else key="loading">{{ $route.params.id }} 상품 정보를 읽어 들이고 있습니다...</div>
</template>

<script>
module.exports = {
  props: {
    id: Number
  },
  data() {
    return {
      item: null
    }
  },

  watch: {
    id: {
      handler(id) {
        asyncFind(Number(this.$route.params.id), item => {
          this.item = item
        })
      },
      immediate: true
    }
  }
}
</script>