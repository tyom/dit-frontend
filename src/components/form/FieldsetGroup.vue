<template>
  <fieldset :class="groupClassName">
    <legend class="fieldset-group__legend" v-if="legend">{{legend}}</legend>
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
      variant: String,
    },
    computed: {
      groupClassName() {
        return {
          'fieldset-group': true,
          'has-error': this.hasError,
          'fieldset-group--plain': this.variant === 'plain',
        }
      }
    }
  }
</script>

<style lang="scss">
  .fieldset-group {
    margin: 30px -20px;
    max-width: 50em;
    border: 1px solid #ccc;
    padding: 10px 20px;
    border-radius: 5px;

    > .form-group:first-of-type {
      margin-top: 10px;
    }

    > .form-group:last-of-type {
      margin-bottom: 10px;
    }
  }

  .fieldset-group__legend {
    font-size: 1.2em;
    padding: 0 10px;
    margin: 0 -10px;
    font-weight: 500;
    display: table;
  }

  .fieldset-group--plain {
    padding: 0;
    margin-left: 0;
    margin-right: 0;
    border: 0;
  }
</style>
