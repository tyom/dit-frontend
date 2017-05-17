<template>
  <input
    type="checkbox"
    class="dit-checkbox"
    :id="$parent.groupId"
    :required="required"
    v-if="type === 'checkbox'"
    v-model="inputValue"
    @change="handleCheckbox"
  >
  <input
    class="form-control"
    :type="type"
    :id="$parent.groupId"
    :required="required"
    v-else
  >
</template>

<script>
  export default {
    computed: {
      inputValue() {
        return this.value
      }
    },
    methods: {
      handleCheckbox() {
        this.$emit('checkbox-toggle', { value: !this.inputValue })
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
      value: Boolean // special prop received from v-model
    }
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

      @media(min-width: 40em) {
        width: auto;
      }
    }
  }

  .dit-checkbox,
  .dit-radio {
    border: 2px solid;
    width: 2.4em;
    height: 2.4em;
    vertical-align: middle;
    position: absolute;
    opacity: 0;
    margin: 0;
    cursor: pointer;

    & {
      & + .form-label {
        cursor: pointer;
        margin-bottom: 0;
        vertical-align: middle;
        position: relative;
        user-select: none;
        padding-left: 2em;
        margin-right: 1.2em;

        &::before,
        &::after {
          content: "";
          box-sizing: border-box;
          position: absolute;
          left: 0;
          top: 0;
          height: 30px;
          width: 30px;
          transition: 200ms;
        }

        &::before {
          border: 2px solid;
          background-color: #fff;
        }

        &::after {
          opacity: 0;
          transform: scale(0);
        }
      }

      &:checked + .form-label::after {
        opacity: 1;
        transform: scale(1);
      }

      &:focus + .form-label::before {
        box-shadow: 0 0 0 3px $outline-colour;
      }
    }
  }

  .dit-checkbox {
    & + .form-label::after {
      content: "✔";
      text-align: center;
      font-size: 24px;
      line-height: 1.4;
    }
  }

  .dit-radio {
    & + .form-label::before {
      border-radius: 100%;
    }

    & + .form-label::after {
      background: #000;
      border-radius: 100%;
      margin: 6px;
      width: 18px;
      height: 18px;
    }
  }
</style>
