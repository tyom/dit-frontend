<template>
  <div :class="buttonClassName" v-if="label">
    <input type="radio" class="dit-radio" :name="name" :value="value" :id="buttonId">
    <label class="form-label" :for="buttonId">{{label}}</label>
  </div>
</template>

<script>
  import kebabCase from 'lodash/kebabCase'
  import DitInput from './Input.vue'

  export default {
    name: 'radio-button',
    props: {
      label: String,
      name: String,
      value: String,
      inline: Boolean,
    },
    components: {
      DitInput
    },
    computed: {
      buttonId() {
        return kebabCase(this.label) + '-' + this._uid
      },
      buttonClassName() {
        return {
          'radio-button': true,
          'radio-button--inline': this.inline
        }
      }
    }
  }
</script>

<style lang="scss">
  .radio-button {
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .radio-button--inline {
    display: inline-block;
  }
</style>
