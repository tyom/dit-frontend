<template>
  <div id="app">
    <global-header :crest="false">
      <logo></logo>
    </global-header>
    <global-nav :items="globalNavItems"></global-nav>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
  import GlobalNav from './components/docs/GlobalNav.vue'
  import Logo from './components/docs/Logo.vue'
  import {Layout, Global} from './components'

  export default {
    data() {
      return {
        globalNavItems: [
          { url: '/layout', label: 'Layout' },
          { url: '/global', label: 'Global components' },
          { url: '/nav', label: 'Navigation' },
          { url: '/form-elements', label: 'Form elements' },
        ]
      }
    },
    components: {
      ...Layout,
      ...Global,
      GlobalNav,
      Logo,
    }
  }
</script>

<style lang="scss">
  @import "./components/settings";
  @import "./components/tools";

  html {
    background-color: #eee;
  }

  #app {
    min-height: 100vh;
    font-size: 18px;

    > main {
      padding-bottom: 20px;
    }
  }
</style>
