<script setup lang="ts">
import { RouterView } from "vue-router"
//components
import Header from "./components/Header.vue"
</script>

<template>
  <Header />

  <RouterView />
</template>

<style>
@import "@/assets/base.css";
input,
textarea,
select {
  @apply outline-none border-2 border-rose-500 caret-rose-500 px-2;
}
</style>
