<template>
  <div id="app">
    <global-header>
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

<style lang="scss" scoped>
  @import "./components/settings";

  $container-padding: 30px;

  #app {
    min-height: 100vh;
    font-size: 18px;
    background-color: #eee;
  }

  header {
    padding: $container-padding;
    background-color: #ccc;
  }

  main {
    padding: $container-padding;
  }

  form {
    width: 600px;
  }
</style>
