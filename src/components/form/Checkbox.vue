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
  @import "../settings";

  .checkbox {
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .checkbox--inline {
    display: inline-block;
  }

  .dit-checkbox {
    border: 2px solid;
    width: 2.4em;
    height: 2.4em;
    vertical-align: middle;
    position: absolute;
    opacity: 0;
    margin: 0;
    cursor: pointer;

    & + .form-label {
      cursor: pointer;
      margin-bottom: 0;
      display: table;
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
      box-shadow: 0 0 0 1px rgba(#fff, .8), 0 0 0 3px $outline-colour;
    }

    & + .form-label::after {
      content: "✔";
      text-align: center;
      font-size: 24px;
      line-height: 1.4;
    }
  }
</style>
