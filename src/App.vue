<template>
  <div id="app">
    <header>
      <img src="./assets/crest.svg" width="150">
    </header>
    <main>
      <form>
        <h2>Inline <code>form-group</code></h2>
        <form-group label="Search site" inline>
          <dit-input type="text"/>
          <dit-button @click.native="handleClick">Find</dit-button>
        </form-group>

        <h2><code>form-group</code> with <code>dit-select</code></h2>
        <form-group label="Select box">
          <dit-select :options="[{value: 1, label: 'Option #1'}]" initialSelection="1"></dit-select>
        </form-group>
      </form>
    </main>
  </div>
</template>

<script>
  import FormElements from './components'

  export default {
    name: 'app',
    components: {
      ...FormElements
    },
    methods: {
      handleClick() {
        console.log('handle click')
      }
    },
    created() {

    }
  }
</script>

<style lang="scss" scoped>
  $container-padding: 30px;

  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100vh;
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
