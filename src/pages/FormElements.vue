<template>
  <container>

    <h1>Form elements</h1>

    <example>
      <h2 slot="title">
        Buttons
      </h2>
      <form-group>
        <dit-button :disabled="buttonsDisabled" variant="primary" @click.native="handleClick('primary')">Primary</dit-button>
        <dit-button :disabled="buttonsDisabled" @click.native="handleClick('standard')">Standard</dit-button>
        <dit-button :disabled="buttonsDisabled" variant="warning" @click.native="handleClick('warning')">Warning</dit-button>
      </form-group>
      <p v-if="buttonClicked">
        <strong>{{buttonClicked}}</strong> button clicked
      </p>
      <menu slot="toolbar">
        <checkbox label="Disabled state" v-model="buttonsDisabled"/>
      </menu>
    </example>

    <example>
      <h2 slot="title">
        Inline <code>form-group</code>
      </h2>
      <form-group label="Find user" :hasError="formGroupHasErrors" inline>
        <dit-input type="text"/>
        <dit-button>Search</dit-button>
      </form-group>
      <form-group label="Amount" :hasError="formGroupHasErrors" hint="In GBP" inline>
        <dit-input type="number"/>
        <dit-button>Convert</dit-button>
      </form-group>
      <menu slot="toolbar">
        <checkbox label="Error state" v-model="formGroupHasErrors"/>
      </menu>
    </example>

    <example>
      <h2 slot="title">
        <code>form-group</code> with <code>dit-select</code>
      </h2>
      <form-group label="Select box" optional>
        <dit-select
          :options="[{value: 1, label: 'Option #1'}, {value: 2, label: 'Option #2'}]"
          initialSelection="1"
        ></dit-select>
      </form-group>
      <form-group label="Select box" hint="Some helpful text" :hasError="selectsHaveErrors">
        <dit-select
          :options="[{value: 1, label: 'Option #1'}]"
          initialSelection="1"
        ></dit-select>
      </form-group>
      <menu slot="toolbar">
        <checkbox label="Error state" v-model="selectsHaveErrors"/>
      </menu>
    </example>

    <example>
      <h2 slot="title">
        <code>radio-group</code> with <code>radio-button</code>
      </h2>
      <fieldset-group legend="Are you sure?" hint="Think carefully.">
        <radio-button value="y" label="Yes" name="test" inline/>
        <radio-button value="n" label="No" name="test" inline/>
      </fieldset-group>
    </example>

  </container>
</template>

<script>
  import { FormElements } from '../components'

  export default {
    data() {
      return {
        buttonsDisabled: false,
        formGroupHasErrors: false,
        selectsHaveErrors: true,
        buttonClicked: null,
      }
    },
    computed: {
      nextButtonStatus() {
        return this.buttonsDisabled ? 'Enable' : 'Disable'
      }
    },
    methods: {
      handleClick(type) {
        this.buttonClicked = type
      },
    },
    components: {
      ...FormElements
    },
  }
</script>
