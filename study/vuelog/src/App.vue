<template>
    <div class="wrap">
        <navBar></navBar>



        <router-view :list-data="this.postListData"></router-view>


    </div>
</template>

<script>
import navBar from './components/NavBar.vue'
import postListData from './postListData.js'

export default {
    name: 'App',
    data() {
        return {
            postListData
        }
    },
    components: {
        navBar,
    },
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
</style>
