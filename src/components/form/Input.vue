<template>
  <input :class="inputClassName" :type="type" :id="$parent.groupId" :required="required">
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
