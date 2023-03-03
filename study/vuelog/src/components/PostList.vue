<template>
    <ul class="list">
        <li v-for="(item, idx) in this.listData" :key="idx">
            <div class="item">
                <router-link :to="{name:'detail', params:{id:idx}}">
                <h5>{{item.title }}</h5>
                </router-link>
            </div>

        </li>
    </ul>
</template>

<script>
export default {
  name: 'PostList',
  props: {
    listData: Array
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.list {
    li {
        list-style: none;
        .item {
            text-align:left;
        }
    }
}
</style>
