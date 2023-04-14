<template>
    <div>
        <h1>Toast UI</h1>
        <tui-grid ref="GridTable" :data="data" :columns="columns"> </tui-grid>
    </div>
</template>

<script setup lang="ts">
// eslint-disable-next-line import/named
import { TuiGridElement } from "vue3-tui-grid";
import { OptColumn, OptRow } from "tui-grid/types/options";
import { onMounted, ref } from "vue";
const data = ref<OptRow[]>([
    {
        id: "10012",
        city: "Seoul",
        country: "South Korea"
    },
    {
        id: "10013",
        city: "Tokyo",
        country: "Japan"
    },
    {
        id: "10014",
        city: "London",
        country: "England"
    },
    {
        id: "10015",
        city: "Ljubljana",
        country: "Slovenia"
    },
    {
        id: "10016",
        city: "Reykjavik",
        country: "Iceland"
    }
]);
const columns = ref<OptColumn[]>([
    {
        header: "ID",
        name: "id"
    },
    {
        header: "CITY",
        name: "city",
        editor: "text"
    },
    {
        header: "COUNTRY",
        name: "country"
    }
]);
const GridTable = ref<TuiGridElement>();
onMounted(() => {
    const grid = GridTable.value;
    grid?.applyTheme("striped");
    grid?.setLanguage("ko");
    const instance = grid?.gridInstance;
    instance.setWidth(500);
    grid.invoke("setWidth", 500);
});
</script>
