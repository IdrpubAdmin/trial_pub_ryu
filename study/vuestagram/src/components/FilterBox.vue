<template>
    <div class="filter-item"
         :class="filters"
         :style="{backgroundImage:`url(${this.tempFileUrl})`}"
         @click="applyFilter(filters)">
        <slot name="filterName" :data-from-slot=this.dataFromSlot></slot>
    </div>
</template>

<script>
export default {
    name: 'FilterBx',
    props: {
        tempFileUrl: String,
        filters: Array,
    },
    data() {
        return {
            dataFromSlot: 'this is data from Slot',
        }
    },
    methods: {
        applyFilter(filterName) {
            this.emitter.emit('gApplyFilter',filterName)
        }
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
