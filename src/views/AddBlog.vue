<script lang="ts" setup>
import { reactive, ref, toRefs } from "vue"
import router from "@/router"
import type { Blog } from "../types"
// store
import { blogData } from "../stores/mainData"

const appStore = blogData()

const submitted = ref(false)
const blog = reactive<Blog>({
  title: "",
  content: "",
  categories: [],
  author: "",
  linkName: "",
})
const authors = ref<string[]>([
  "Hamid bloorin",
  "Abolfazl jalildoost",
  "parsa Nadali",
])

const submit = () => {
  if (!blog.title) console.log("sorry")
  submitted.value = true
  blog.linkName = blog.title.replace(/ /g, "_")
  appStore.pushBlog(blog)
  router.push({ name: "home" })
}
</script>

<template>
  <div class="add-blog my-5 mx-auto max-w-500px">
    <h2 class="text-center text-3xl my-5 dark:text-gray-200">Add a new blog</h2>
    <form v-if="!submitted" class="px-10 md:px-0">
      <p class="mt-10 mb-1 dark:text-gray-200">title :</p>
      <input
        type="text"
        v-model="blog.title"
        class="w-full block p-2 dark:(bg-dark-900 text-gray-200)"
      />

      <p class="mt-10 mb-1 dark:text-gray-200">body :</p>
      <textarea
        v-model="blog.content"
        cols="30"
        rows="10"
        class="w-full px-2 dark:(bg-dark-900 text-gray-200)"
      ></textarea>

      <p class="mt-5 dark:text-gray-200">categories :</p>
      <div id="checkboxes" class="flex space-y-2 flex-col mt-2 mb-7">
        <div class="flex space-x-2 items-center">
          <label class="dark:text-gray-200">video games</label>
          <input
            v-model="blog.categories"
            type="checkbox"
            value="video games"
            class="dark:bg-dark-900 dark:text-gray-200"
          />
        </div>
        <div class="flex space-x-2 items-center">
          <label class="dark:text-gray-200">eating</label>
          <input
            v-model="blog.categories"
            type="checkbox"
            value="eating"
            class="dark:bg-dark-900"
          />
        </div>
        <div class="flex space-x-2 items-center">
          <label class="dark:text-gray-200">football</label>
          <input
            v-model="blog.categories"
            type="checkbox"
            value="football"
            class="dark:bg-dark-900"
          />
        </div>
      </div>
      <p class="dark:text-gray-200">author :</p>
      <select v-model="blog.author" class="dark:bg-dark-900">
        <option
          v-for="author of authors"
          :key="author"
          class="dark:text-gray-200 dark:(bg-dark-900  text-gray-200)"
        >
          {{ author }}
        </option>
      </select>
      <br /><br />
      <button
        @click.prevent="submit"
        class="rounded px-4 py-1 bg-rose-500 text-white hover:bg-rose-600 dark:text-gray-200"
      >
        Add blog
      </button>
    </form>
    <h2 v-if="submitted" class="dark:text-gray-200">
      You successfully added a new blog
    </h2>
    <div
      class="preview py-3 px-5 border border-dotted border-gray-400 my-8 mx-0"
    >
      <h2 class="text-xl mb-5 dark:text-gray-200">preview Blog</h2>
      <p class="mb-5 dark:text-gray-200">blog title : {{ blog.title }}</p>
      <p class="dark:text-gray-200">blog body :</p>
      <p class="mb-5 dark:text-gray-200">{{ blog.content }}</p>
      <p class="dark:text-gray-200">blog categories :</p>
      <ul class="mb-5 list-circle pl-5">
        <li
          v-for="category of blog.categories"
          :key="category"
          class="dark:text-gray-200"
        >
          {{ category }}
        </li>
      </ul>
      <p class="dark:text-gray-200">blog author : {{ blog.author }}</p>
    </div>
  </div>
</template>

<style>
.add-blog * {
  box-sizing: border-box;
}
</style>
