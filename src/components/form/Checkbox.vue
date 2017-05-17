<template>
  <div :class="checkboxClassName" v-if="label">
    <input
      type="checkbox"
      class="dit-checkbox"
      :name="name"
      :checked="value"
      :id="checkboxId"
      @change="updateValue($event.target.checked)"
    >
    <label class="form-label" :for="checkboxId">{{label}}</label>
  </div>
</template>

<script>
  import kebabCase from 'lodash/kebabCase'
  import DitInput from './Input.vue'

  export default {
    name: 'checkbox',
    props: {
      label: String,
      name: String,
      value: Boolean,
      inline: Boolean,
      change: Function,
    },
    computed: {
      checkboxId() {
        return kebabCase(this.label) + '-' + this._uid
      },
      checkboxClassName() {
        return {
          'checkbox': true,
          'checkbox--inline': this.inline
        }
      }
    },
    methods: {
      updateValue(value) {
        this.$emit('input', value)
      }
    }
  }
</script>

<style lang="scss">
  .checkbox {
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .checkbox--inline {
    display: inline-block;
  }
</style>
