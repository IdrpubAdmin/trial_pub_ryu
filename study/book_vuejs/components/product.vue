<template>
  <div class="product">
    <h1>{{ detail.name }}</h1>
    <nav class="nav">
      <router-link :to="{ name: 'product-home', params: { id: Number(detail.id) }}" exact>상품 상세</router-link>
      <router-link :to="{ name: 'product-review', params: { id: Number(detail.id) } }">리뷰</router-link>
    </nav>

    <!-- 여기에 자식이 들어감 -->
    <transition name="view">
      <router-view />
    </transition>

    <loading-overlay></loading-overlay>
      
  </div>
</template>

<script>
module.exports = {
  props: {
    id: Number
  },
  computed: Vuex.mapGetters('products', ['detail']),
  watch: {
    id: {
      handler() {
        this.$store.dispatch('products/load', Number(this.$route.params.id))
      },
      immediate: true
    }
  },
  beforeDestroy() {
    // 부모를 이동할 때 상품 상세 데이터 제거하기
    this.$store.dispatch('products/destroy')
  },
  components: {
    'loading-overlay': httpVueLoader('./LoadingOverlay.vue')
  }
}
</script>

<style>
.view-enter-active, .view-leave-active {
  transition: opacity 1.5s;
}

.view-leave-active {
  position: absolute;
}

.view-enter, .view-leave-to {
  opacity: 0;
}
</style>