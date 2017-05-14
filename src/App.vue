<template>
  <div id="app">
    <header>
      <img src="./assets/crest.svg" width="100">
      <h1>Department for International Trade</h1>
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
        <form-group label="Disabled" variant="checkbox">
          <dit-input type="checkbox" v-model="buttonsDisabled" @checkbox-toggle="buttonsCheckbox"/>
        </form-group>
        <form-group label="Are you sure?" variant="radio" hint="Think carefully.">
          <dit-input type="radio" v-model="buttonsDisabled" name="test" id="test1"/>
          <label class="form-label" for="test1">Yes</label>
          <dit-input type="radio" v-model="buttonsDisabled" name="test" id="test2"/>
          <label class="form-label" for="test2">No</label>
        </form-group>
      </example>

      <example>
        <h2 slot="title">
          Inline <code>form-group</code>
        </h2>
        <form-group label="Find user" inline>
          <dit-input type="text"/>
          <dit-button @click.native="handleClick">Search</dit-button>
        </form-group>
        <form-group label="Amount" inline hint="In GBP">
          <dit-input type="number"/>
          <dit-button @click.native="handleClick">Convert</dit-button>
        </form-group>
      </example>

      <example>
        <h2 slot="title">
          <code>form-group</code> with <code>dit-select</code>
        </h2>
        <form-group label="Select box">
          <dit-select :options="[{value: 1, label: 'Option #1'}]" initialSelection="1"></dit-select>
        </form-group>
        <form-group label="Select box" hasError hint="Some helpful text">
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
        console.log('button click')
      },
      buttonsCheckbox(event) {
        this.buttonsDisabled = event.value
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
    display: flex;

    h1 {
      font-weight: 500;
      width: 9em;
      margin: 0;
      line-height: 1.1;
      padding-left: 15px;
      border-left: 3px solid #CF102D;
    }
  }

  main {
    padding: $container-padding;
    max-width: 960px;
  }

  form {
    width: 600px;
  }
</style>
