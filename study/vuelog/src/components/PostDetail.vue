<template>
    <div class="item">
        <h5>{{ this.listData[idx].title }}</h5>
        <p>{{ this.listData[idx].content }}</p>
        <hr>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
  name: 'PostDetail',
  props: {
    listData: Array,
  },
    data() {
      return {
          idx: this.$route.params.id
      }
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
</style>
