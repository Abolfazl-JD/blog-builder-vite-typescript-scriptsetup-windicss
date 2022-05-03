<script setup lang="ts">
import { RouterLink } from "vue-router"
import { useDark, useToggle } from "@vueuse/core"
import { ref } from "vue"

const isDark = useDark()
const toggleThemeMode = useToggle(isDark)

const showResponsiveMenu = ref(false)
</script>

<template>
  <header>
    <nav
      class="w-full bg-blue-500 py-2 px-4 md:pr-10 border-b border-b-blue-400"
    >
      <div class="flex justify-between items-center">
        <h1 class="text-white font-bold text-3xl cursor-pointer" @click="">
          𝔅𝔩𝔬𝔤 𝔟𝔲𝔦𝔩𝔡𝔢𝔯
        </h1>
        <div class="nav-control flex items-center space-x-10">
          <ul class="flex text-white space-x-10 items-center hidden md:block">
            <RouterLink to="/add-blog">Add blog</RouterLink>
            <RouterLink to="/">Show blogs</RouterLink>
          </ul>
          <div class="theme-switcher" @click="toggleThemeMode()">
            <transition mode="out-in" name="theme-switch">
              <svg
                v-if="isDark"
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8 text-yellow-400 cursor-pointer"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                  clip-rule="evenodd"
                />
              </svg>
              <svg
                v-else
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8 text-yellow-200 cursor-pointer"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
                />
              </svg>
            </transition>
          </div>
          <svg
            @click="showResponsiveMenu = !showResponsiveMenu"
            xmlns="http://www.w3.org/2000/svg"
            class="h-8 w-8 text-white md:hidden cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
      </div>
    </nav>
    <ul
      class="w-full bg-blue-700 flex flex-col px-4 text-white transition-all ease duration-200 md:hidden"
      :class="showResponsiveMenu ? 'h-20 py-2' : 'h-0 overflow-hidden'"
    >
      <RouterLink class="border-b border-b-blue-600 pb-2" to="/add-blog"
        >Add blog</RouterLink
      >
      <RouterLink class="pt-2" to="/">Show blogs</RouterLink>
    </ul>
  </header>
</template>

<style>
@media (min-width: 765px) {
  header ul a {
    color: inherit;
    text-decoration: none;
  }

  header ul a {
    background: linear-gradient(to right, transparent, transparent),
      linear-gradient(to right, #fff, #fff, #fff);
    background-size: 100% 3px, 0 3px;
    background-position: 100% 100%, 0 100%;
    background-repeat: no-repeat;
    transition: background-size 400ms;
    padding-bottom: 5px;
  }

  header ul a:hover,
  header ul a.router-link-active {
    background-size: 0 3px, 100% 3px;
  }
}

.theme-switch-enter-from {
  opacity: 0;
  transform: translateX(-10px);
}

.theme-switch-enter-active,
.theme-switch-leave-active {
  transition: all 0.1s ease;
}

.theme-switch-leave-to {
  opacity: 0;
  transform: translateX(10px);
}
</style>
