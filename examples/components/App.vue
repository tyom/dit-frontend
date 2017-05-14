<template>
  <div id="app">
    <div>
      <img src="../../src/assets/crest.svg" width="200">
      <h1>Example of using single file Vue components</h1>
      <p>
        <dit-button @click.native="handleClick">Press me</dit-button>
      </p>
    </div>
  </div>
</template>

<script>
  import {FormElements} from '../../dist/components.build'

  export default {
    name: 'app',
    components: {
      ...FormElements
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
