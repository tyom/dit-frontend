<template>
  <container>
    <h1>Form elements</h1>
    <example>
      <h2 slot="title">
        Buttons
      </h2>
      <form-group>
        <dit-button :disabled="buttonsDisabled" variant="primary">Primary</dit-button>
        <dit-button :disabled="buttonsDisabled">Standard</dit-button>
        <dit-button :disabled="buttonsDisabled" variant="warning">Warning</dit-button>
      </form-group>
      <form-group label="Disabled state" variant="checkbox">
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
      <form-group label="Select box" optional>
        <dit-select :options="[{value: 1, label: 'Option #1'}]" initialSelection="1"></dit-select>
      </form-group>
      <form-group label="Select box" hasError hint="Some helpful text">
        <dit-select :options="[{value: 1, label: 'Option #1'}]" initialSelection="1"></dit-select>
      </form-group>
    </example>
  </container>
</template>

<script>
  import { FormElements } from '../components'

  export default {
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
    },
    components: {
      ...FormElements
    }
  }
</script>
