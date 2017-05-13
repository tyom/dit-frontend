<template>
  <div id="app">
    <img src="./assets/crest.svg" width="200">
    <p>
      <dit-button>Press me</dit-button>
    </p>
  </div>
</template>

<script>
  import DitButton from './components/Button.vue'

  export default {
    name: 'app',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    components: {
      DitButton
    }
  }
</script>

<style lang="postcss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    flex: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
