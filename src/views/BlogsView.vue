<script setup lang="ts">
import { computed, ref } from "vue"
import { blogData } from "../stores/mainData"
import type { Blog } from "../types"
const appStore = blogData()

const searchedBlog = ref("")
const filteredBlogs = computed<Blog[]>(() =>
  appStore.blogs.filter((blog) =>
    blog.title
      .toLocaleLowerCase()
      .includes(searchedBlog.value.toLocaleLowerCase())
  )
)

const cutContent = (paragraph: string) => paragraph.slice(0, 200) + " . . ."
</script>

<template>
  <main class="blogs-view mx-auto my-0 max-w-800px mt-14">
    <input
      autofocus
      v-model="searchedBlog"
      type="search"
      class="w-full h-10 outline-none border-2 border-rose-500 caret-rose-500 px-2 dark:bg-dark-900"
    />
    <transition mode="out-in" name="fade">
      <transition-group tag="div" v-if="filteredBlogs.length" name="blog-group">
        <div
          class="single-blog p-5 my-20 mx-0 box-border bg-white border-2 border-rose-500 dark:bg-dark-900"
          v-for="blog of filteredBlogs"
          :key="blog.title"
        >
          <div class="flex justify-between items-center">
            <router-link
              class="text-4xl dark:text-gray-200"
              :to="{ name: 'single-blog', params: { linkName: blog.linkName } }"
              >{{ blog.title }}</router-link
            >
            <svg
              @click="appStore.delteItem(blog.title)"
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 cursor-pointer dark:text-gray-300"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                clip-rule="evenodd"
              />
            </svg>
          </div>
          <p class="mt-5 dark:text-gray-300">{{ cutContent(blog.content) }}</p>
        </div>
      </transition-group>
      <h3 v-else class="text-gray-800 mt-10 text-center">
        No such a blog was found
      </h3>
    </transition>
  </main>
</template>

<style>
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

.fade-enter-active,
.fade-leave-active,
.blog-group-leave-active,
.blog-group-enter-active,
.blog-group-move {
  transition: 0.3s ease all;
}

.blog-group-enter-from,
.blog-group-leave-to {
  transform: translateX(100px);
  opacity: 0;
}

.blog-group-leave-active {
  position: absolute;
}
</style>
