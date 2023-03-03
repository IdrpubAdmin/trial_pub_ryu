<template>
    <div class="filter-item"
         :class="filters"
         :style="{backgroundImage:`url(${this.tempFileUrl})`}"></div>
</template>

<script>
export default {
    name: 'FilterBx',
    props: {
        tempFileUrl: String,
        filters: Array
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.filter-item {
    width: 100px;
    height: 100px;
    margin: 10px 10px 10px auto;
    padding: 8px;
    display: inline-block;
    color: white;
    background-size: cover;
    background-position: center;
}
</style>
