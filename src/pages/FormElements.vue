<template>
  <container>

    <h1>Form elements</h1>

    <example>
      <h2 slot="title">
        Buttons
      </h2>
      <form-group>
        <dit-button :disabled="buttonsDisabled" variant="primary" @click.native="handleButtonsClick('primary')">Primary</dit-button>
        <dit-button :disabled="buttonsDisabled" @click.native="handleButtonsClick('standard')">Standard</dit-button>
        <dit-button :disabled="buttonsDisabled" variant="warning" @click.native="handleButtonsClick('warning')">Warning</dit-button>
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

    <example>
      <h2 slot="title">
        Sample form
      </h2>
      <form>
        <form-group label="Name">
          <dit-input name="name"/>
        </form-group>
        <form-group label="Description" hint="Text box will grow or shrink as required">
          <dit-textarea></dit-textarea>
        </form-group>
        <form-group label="Trading name" optional>
          <dit-input name="trading-name"/>
        </form-group>
        <fieldset-group legend="Primary address">
          <form-group label="Postcode">
            <dit-input name="postcode" variant="short"/>
            <dit-button type="button" @click.native="showPrimaryAddress = !showPrimaryAddress">Find UK address</dit-button>
          </form-group>
          <form-group label="Select an address from the drop down" v-if="showPrimaryAddress">
            <dit-select>
              <option value="">Please select your address</option>
            </dit-select>
          </form-group>
        </fieldset-group>
        <fieldset-group legend="Is this an HQ?">
          <radio-button value="false" label="Not a headquarters" name="is-hq"/>
          <radio-button value="ehq" label="European headquarters" name="is-hq"/>
          <radio-button value="ghq" label="Global headquarters" name="is-hq"/>
          <radio-button value="ukhq" label="UK headquarters" name="is-hq"/>
        </fieldset-group>
        <form-group label="Sector">
          <dit-select>
            <option value="">ICT</option>
          </dit-select>
        </form-group>
        <form-group label="Website" optional>
          <dit-input name="website"/>
        </form-group>
      </form>
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
        showPrimaryAddress: false,
      }
    },
    computed: {
      nextButtonStatus() {
        return this.buttonsDisabled ? 'Enable' : 'Disable'
      }
    },
    methods: {
      handleButtonsClick(type) {
        this.buttonClicked = type
      },
    },
    components: {
      ...FormElements
    },
  }
</script>
