<template>
  <div id="app">
    <div>
      <img src="../../src/assets/crest.svg" width="200">
      <p>
        <dit-button @click.native="handleClick">Press me</dit-button>
      </p>
    </div>
  </div>
</template>

<script>
  import {DitButton} from '../../src/components'

  export default {
    name: 'app',
    components: {
      DitButton
    },
    methods: {
      handleClick() {
        console.log('handle click')
      }
    }
  }
</script>

<style lang="postcss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100vh;
  }
</style>
