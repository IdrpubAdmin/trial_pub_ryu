<template>
  <div class="banner-disc">
      <h4>지금 결제하면 20% 할인</h4>
  </div>
</template>

<script>
export default {
  name: 'BannerDisc',
    props: {
        dataJs: Object
    },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.banner-disc {
    padding:30px;
    width:100%;
    font-size: 1rem;
    background:#eee;
    border:1px solid #ccc;
    border-radius:5px;
}
</style>
