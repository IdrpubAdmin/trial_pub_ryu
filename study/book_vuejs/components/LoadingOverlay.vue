<template>
  <transition name="loading">
    <div class="loading" v-if="loading">Loading</div>
  </transition>
</template>

<script>
module.exports = {
  computed: {
    loading() {
      return this.$store.state.vuexview.loading
      // return true
    }
  }
}
</script>

<style>
.loading {
  position:fixed;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background:red;
}
.loading-enter-active {
  transition: all 1.25s;
}
.loading-leave-active {
  transition: all 1.5s ease 0.5s; /* 라우터 뷰가 종료된 후 */
}
</style>