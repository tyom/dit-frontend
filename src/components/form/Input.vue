<template>
  <input :class="inputClassName" :type="type" :id="$parent.groupId" :required="required">
</template>

<script>
  export default {
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
      border: 2px solid;
      padding: 8px;
      width: 100%;
      max-width: 50em;
    }
  }
</style>
