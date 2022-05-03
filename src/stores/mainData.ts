import { defineStore } from "pinia"
import { useStorage } from "@vueuse/core"
import type { Blog } from "../types"

export const blogData = defineStore({
  id: "blog-data",

  state: () => ({
    blogs: useStorage<Blog[]>("blogs", []),
  }),

  actions: {
    pushBlog(newBlog: Blog) {
      this.blogs.push({ ...newBlog })
    },

    delteItem(blogTitle: string) {
      this.blogs = this.blogs.filter((blog) => blog.title !== blogTitle)
    },
  },
})
