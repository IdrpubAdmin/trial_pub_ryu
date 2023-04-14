<template>
    <div>
        <h1 class="title-sec font-bold text-3xl text-my-color">Link List</h1>
        <ul>
            <li>
                <NuxtLink to="./api/toastUi">toastUi</NuxtLink>
            </li>
        </ul>
        <div class="bg-yellow-200 text-point">{{ userStore.user }}</div>
    </div>
</template>

<script setup lang="ts">
import { useUserStore } from "~/stores/user";

const userStore = useUserStore();
</script>
