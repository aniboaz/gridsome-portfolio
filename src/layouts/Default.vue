<style lang="css">
.old-light {
  --bg-background-primary: ghostwhite;
  --bg-background-secondary: #f7fafc;
  --bg-background-tertiary: #e2e8f0;
  --bg-background-form: white;
  --text-copy-primary: #2d3748;
  --text-copy-secondary: #4a5568;
  --border-border-color-primary: white;
}

.theme-light .search-highlighted {
  background: var(--bg-background-tertiary);
}

.theme-light .search-hover:hover {
  background: var(--bg-background-primary);
}

.theme-dark .markdown-body {
    color: var(--text-copy-primary);
}

.old-dark {
  --bg-background-primary: #0D2438;
  --bg-background-secondary: #102C44;
  --bg-background-tertiary: #1E3951;
  --bg-background-form: #1a202c;
  --text-copy-primary: #cbd5e0;
  --text-copy-secondary: #e2e8f0;
  --border-border-color-primary:  #1a202c;
}

/* new themes go here*/
.theme-light {

--bg-background-primary: #fff3ce;
--bg-background-secondary: #ffc570;
--bg-background-tertiary: #ffd39c;
--bg-background-form: #ffffff;
--text-copy-primary: #3d00ff;
--text-copy-secondary: #2b1d58;
--border-border-color-primary: #ff7600;
}
.dark-orange {
--bg-background-primary: #ff5522;
--bg-background-secondary: #fc953c;
--bg-background-tertiary: #ffac93;
--bg-background-form: #ffffff;
--text-copy-primary: #4c0066;
--text-copy-secondary: #000000;
--border-border-color-primary: #1a202c;
}
.theme-dark{--bg-background-primary: #19101f;
--bg-background-secondary: #1c1123;
--bg-background-tertiary: #000000;
--bg-background-form: #000000;
--text-copy-primary: #ff8b00;
--text-copy-secondary: #e2e8f0;
--border-border-color-primary: #FFC107;}

/*end-new-themes*/


</style>
<template>
<!--  <div class="spinner" title="Loading..." v-if="loading < 100">Loading...</div> <transition name="fade">
       <progress v-if="loading < 100" class="progress is-small is-link is-radiusless" :value="loading" max="100">{{loading}}%</progress>
     </transition-->


    <div class="content-wrapper bg-background-primary font-sans text-copy-primary leading-normal flex flex-col min-h-screen" :class="theme">
    <header class=" p-2 mt-0 fixed w-full z-10 top-0" :class="isOpen ? 'bg-background-primary': 'bg-transparent'">
      <nav class="container mx-auto flex flex-wrap justify-between items-center py-8">
        <div>
          <!--g-link v-if="theme === 'theme-light'" to="/"><g-image src="../../static/logo.svg" class="w-40" alt="logo" /></g-link>
          <g-link v-else to="/"><g-image src="../../static/logo_dark_mode.svg" class="w-40" alt="logo" /></g-link-->
        </div>
        <div class="block lg:hidden">
          <button @click="toggle" class="flex items-center px-3 py-2 border rounded border-gray-700 hover:text-border-color-primary hover:border-gray-600">
<svg  v-show="isOpen" xmlns="https://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            <svg  class="current-color h-3 w-3 " :class="isOpen ? 'hidden': 'block'" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" fill="gray" /></svg>
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
          <!--li class="mr-8 mb-6 lg:mb-0">
            <a v-if="$route.path === '/'" href="/#projects" v-scroll-to="'#projects'" class="text-copy-primary hover:text-border-color-primary">Projects</a>
            <g-link v-else to="/#projects" class="text-copy-primary hover:text-border-color-primary">Projects</g-link>
          </li-->
          <li class="mr-8 mb-6 lg:mb-0">
            <a v-if="$route.path === '/'" href="/#about" v-scroll-to="'#about'" class="text-copy-primary hover:text-border-color-primary">About</a>
            <g-link v-else to="/#about" class="text-copy-primary hover:text-border-color-primary">About</g-link>
          </li>
          <!--li class="mr-8 mb-6 lg:mb-0">
            <a v-if="$route.path === '/'" href="/#contact" v-scroll-to="'#contact'" class="text-copy-primary hover:text-border-color-primary">Contact</a>
            <g-link v-else to="/#contact" class="text-copy-primary hover:text-border-color-primary">Contact</g-link>
          </li-->
          <li>
            <g-link to="/blog" class="text-copy-primary hover:text-border-color-primary">Blog</g-link>
          </li>
        </ul>
      </nav>
    </header>

    <div class="flex-grow">
      <slot/>
    </div>
    <footer class="bg-background-tertiary">
      <div class="container mx-auto flex flex-col lg:flex-row items-center justify-between py-8">
        <div class="mb-8 lg:mb-0">
          <div>Copyright {{ new Date().getFullYear() }}. All rights reserved.</div>
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
  mounted() {this.loading = 100; console.log("loaded");
    this.theme = localStorage.getItem('theme') || 'theme-light'
  },
  data() {
    return {
      isOpen: false,
      loading: 100,
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
<style lang="css">
     /*spinner thanks to https://projects.lukehaas.me/css-loaders/*/
     .spinner,
     .spinner:before,
     .spinner:after {
       border-radius: 50%;
     }
     .spinner {
       color: #FF9900;
       font-size: 11px;
       text-indent: -99999em;
       margin: 55px auto;
       position: fixed;
       width: 10em;
       height: 10em;
       top: calc((50vh - 10em));
       left: calc((50vw - 10em));
       box-shadow: inset 0 0 0 1em;
       -webkit-transform: translateZ(0);
       -ms-transform: translateZ(0);
       transform: translateZ(0);
     }
     .spinner:before,
     .spinner:after {
       position: absolute;
       content: '';
     }
     .spinner:before {
       width: 5.2em;
       height: 10.2em;
       background: white;
       border-radius: 10.2em 0 0 10.2em;
       top: -0.1em;
       left: -0.1em;
       -webkit-transform-origin: 5.2em 5.1em;
       transform-origin: 5.2em 5.1em;
       -webkit-animation: load2 1.5s infinite ease 1.5s;
       animation: load2 1.5s infinite ease 1.5s;
     }
     .spinner:after {
       width: 5.2em;
       height: 10.2em;
       background: white;
       border-radius: 0 10em 10.2em 0;
       top: -0.1em;
       left: 5.1em;
       -webkit-transform-origin: 0px 5.1em;
       transform-origin: 0px 5.1em;
       -webkit-animation: load2 1.5s infinite ease-in-out;
       animation: load2 1.5s infinite ease-in-out;
     }
     @-webkit-keyframes load2 {
       0% {
         -webkit-transform: rotate(0deg);
         transform: rotate(0deg);
       }
       100% {
         -webkit-transform: rotate(360deg);
         transform: rotate(360deg);
       }
     }
     @keyframes load2 {
       0% {
         -webkit-transform: rotate(0deg);
         transform: rotate(0deg);
       }
       100% {
         -webkit-transform: rotate(360deg);
         transform: rotate(360deg);
       }
     }


.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
   </style>
