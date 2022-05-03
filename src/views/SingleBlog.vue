<script lang="ts" setup>
import { onMounted, ref } from "vue"
import { useRoute } from "vue-router"
// types
import type { Blog } from "../types"
// stores
import { blogData } from "../stores/mainData"
// components
import NotFound from "@/components/NotFound.vue"

const appStore = blogData()

const route = useRoute()
const blogLinkName = route.params.linkName
const singleBlog = ref<Blog | null>(null)

onMounted(() => {
  singleBlog.value = appStore.blogs.filter(
    (blog) => blog.linkName === blogLinkName
  )[0]
})
</script>

<template>
  <div v-if="singleBlog" class="max-w-1000px mx-auto mt-20">
    <h2 class="text-2xl mb-5 dark:text-gray-200">{{ singleBlog.title }}</h2>
    <p class="text-gray-700 mb-5 dark:text-gray-200">
      {{ singleBlog.content }}
    </p>
    <ul class="list-square text-gray-700 pl-5">
      <li
        v-for="category of singleBlog.categories"
        :key="category"
        class="dark:text-gray-200"
      >
        {{ category }}
      </li>
    </ul>
    <p class="text-gray-700 mt-5 dark:text-gray-200">
      author : {{ singleBlog.author }}
    </p>
  </div>
  <NotFound v-else />
</template>
