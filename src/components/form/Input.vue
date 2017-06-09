<template>
  <input
    :class="inputClassName"
    :type="type"
    :id="$parent.groupId"
    :required="required"
    @input="updateValue($event.target.value)"
  >
</template>

<script>
  export default {
    name: 'dit-input',
    computed: {
      inputClassName() {
        return {
          'form-control': true,
          [`form-control--${this.variant}`]: this.variant
        }
      }
    },
    props: {
      type: {
        type: String,
        default: 'text'
      },
      required: {
        type: Boolean
      },
      variant: String,
    },
    methods: {
      updateValue(value) {
        this.$emit('input', value)
      }
    },
  }
</script>

<style lang="scss">
  @import "../settings";

  .form-control {
    &[type="text"],
    &[type="number"],
    &[type="password"] {
      width: 100%;
    }
  }
</style>
