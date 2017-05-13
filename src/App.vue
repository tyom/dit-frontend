<template>
  <div id="app">
    <header>
      <img src="./assets/crest.svg" width="150">
    </header>
    <main>
      <example>
        <h2 slot="title">
          Buttons
        </h2>
        <form-group>
          <dit-button :disabled="buttonsDisabled" variant="primary">Primary</dit-button>
          <dit-button :disabled="buttonsDisabled">Standard</dit-button>
          <dit-button :disabled="buttonsDisabled" variant="warning">Warning</dit-button>
        </form-group>
        <p>
          <dit-button @click.native="handleDisabledButtons" size="small">
            {{nextButtonStatus}} buttons
          </dit-button>
        </p>
      </example>

      <example>
        <h2 slot="title">
          Inline <code>form-group</code>
        </h2>
        <form-group label="Search site" inline>
          <dit-input type="text"/>
          <dit-button @click.native="handleClick">Find</dit-button>
        </form-group>
      </example>

      <example>
        <h2 slot="title">
          <code>form-group</code> with <code>dit-select</code>
        </h2>
        <form-group label="Select box">
          <dit-select :options="[{value: 1, label: 'Option #1'}]" initialSelection="1"></dit-select>
        </form-group>
      </example>
    </main>
  </div>
</template>

<script>
  import { FormElements } from './components'
  import { Example } from './components/docs'

  export default {
    name: 'app',
    components: {
      ...FormElements,
      Example
    },
    data() {
      return {
        buttonsDisabled: false
      }
    },
    computed: {
      nextButtonStatus() {
        return this.buttonsDisabled ? 'Enable' : 'Disable'
      }
    },
    methods: {
      handleClick() {
        console.log('handle click')
      },
      handleDisabledButtons() {
        this.buttonsDisabled = !this.buttonsDisabled
      }
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
    max-width: 960px;
  }

  form {
    width: 600px;
  }
</style>
