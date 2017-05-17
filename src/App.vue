<template>
  <div id="app">
    <header>
      <container>
        <logo></logo>
      </container>
    </header>
    <global-nav :items="globalNavItems"></global-nav>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
  import GlobalNav from './components/docs/GlobalNav.vue'
  import Logo from './components/docs/Logo.vue'

  export default {
    data() {
      return {
        globalNavItems: [
          { url: '/layout', label: 'Layout' },
          { url: '/form-elements', label: 'Form elements' },
        ]
      }
    },
    components: {
      GlobalNav,
      Logo,
    }
  }
</script>

<style lang="scss" scoped>
  @import "./components/settings";

  $container-padding: 30px;

  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #eee;
    min-height: 100vh;
    font-size: 18px;
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
