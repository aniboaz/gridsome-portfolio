<template>
  <div class="content-wrapper bg-background-primary font-sans text-copy-primary leading-normal flex flex-col min-h-screen" :class="theme">
    <header class=" p-2 mt-0 fixed w-full z-10 top-0">
      <nav class="container mx-auto flex flex-wrap justify-between items-center py-8">
        <div>
          <g-link v-if="theme === 'theme-light'" to="/"><g-image src="../../static/logo.svg" class="w-40" alt="logo" /></g-link>
          <g-link v-else to="/"><g-image src="../../static/logo_dark_mode.svg" class="w-40" alt="logo" /></g-link>
        </div>
        <div class="block lg:hidden">
          <button @click="toggle" class="flex items-center px-3 py-2 border rounded border-gray-500 hover:text-gray-600 hover:border-gray-600">
<svg  v-show="isOpen" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            <svg  class="current-color h-3 w-3 " :class="isOpen ? 'block': 'hidden'" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" fill="gray" /></svg>
          </button>
        </div>
        <ul
          class="uppercase tracking-wide font-bold w-full block flex-grow lg:flex lg:flex-initial lg:w-auto items-center mt-8 lg:mt-0"
          :class="isOpen ? 'block': 'hidden'"
        >
          <li class="mr-8 mb-6 lg:mb-0">
            <search-input />
          </li>
          <li class="mr-8 mb-6 lg:mb-0">
            <theme-switcher :theme="theme" @themeChanged="updateTheme" />
          </li>
          <li class="mr-8 mb-6 lg:mb-0">
            <a v-if="$route.path === '/'" href="/#projects" v-scroll-to="'#projects'" class="text-copy-primary hover:text-gray-600">Projects</a>
            <g-link v-else to="/#projects" class="text-copy-primary hover:text-gray-600">Projects</g-link>
          </li>
          <li class="mr-8 mb-6 lg:mb-0">
            <a v-if="$route.path === '/'" href="/#about" v-scroll-to="'#about'" class="text-copy-primary hover:text-gray-600">About</a>
            <g-link v-else to="/#about" class="text-copy-primary hover:text-gray-600">About</g-link>
          </li>
          <li class="mr-8 mb-6 lg:mb-0">
            <a v-if="$route.path === '/'" href="/#contact" v-scroll-to="'#contact'" class="text-copy-primary hover:text-gray-600">Contact</a>
            <g-link v-else to="/#contact" class="text-copy-primary hover:text-gray-600">Contact</g-link>
          </li>
          <li>
            <g-link to="/blog" class="text-copy-primary hover:text-gray-600">Blog</g-link>
          </li>
        </ul>
      </nav>
    </header>

    <div class="flex-grow">
      <slot/>
    </div>
    <footer class="bg-green-700 text-white">
      <div class="container mx-auto flex flex-col lg:flex-row items-center justify-between py-8">
        <div class="mb-8 lg:mb-0">
          <div>Copyright 2019. All rights reserved.</div>
          <div>
            <a href="rss.xml" class="text-white hover:text-gray-400 font-normal">RSS Feed</a> |
            <a href="sitemap.xml" class="text-white hover:text-gray-400 font-normal">Sitemap</a>
          </div>
        </div>
        <ul class="flex items-center">
          <li class="mr-8">
            <a href="mailto:me@example.com" class="text-white hover:text-gray-400">
              <svg width="25" height="20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 0h20A2.5 2.5 0 0 1 25 2.5v15a2.5 2.5 0 0 1-2.5 2.5h-20A2.5 2.5 0 0 1 0 17.5v-15C0 1.125 1.125 0 2.5 0zm20 4.225V2.5h-20v1.725l10 5 10-5zm0 2.8l-9.438 4.713a1.25 1.25 0 0 1-1.124 0L2.5 7.025V17.5h20V7.025z" fill-rule="nonzero"/></svg>
            </a>
          </li>

        </ul>
      </div>
    </footer>


</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>

<script>
import SearchInput from '../components/SearchInput'
import ThemeSwitcher from '../components/ThemeSwitcher'

export default {
  components: {
    SearchInput,
    ThemeSwitcher
  },
  mounted() {
    this.theme = localStorage.getItem('theme') || 'theme-light'
  },
  data() {
    return {
      isOpen: false,
      theme: '',
    }
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen
    },
    updateTheme(theme) {
      this.theme = theme
    }
  }
}
</script>

<style src="../main.css" />
