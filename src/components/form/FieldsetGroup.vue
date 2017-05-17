<template>
  <fieldset :class="groupClassName">
    <legend v-if="legend">{{legend}}</legend>
    <p class="form-hint" v-if="hint">{{hint}}</p>
    <slot></slot>
  </fieldset>
</template>

<script>
  import DitInput from './Input.vue'

  export default {
    name: 'fieldset-group',
    props: {
      hint: String,
      legend: String,
      hasError: Boolean,
    },
    computed: {
      groupClassName() {
        return {
          'fieldset-group': true,
          'has-error': this.hasError
        }
      }
    }
  }
</script>

<style lang="scss">
  .fieldset-group {
    margin: 30px 0;
  }
</style>
