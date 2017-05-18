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
  @import "../settings";

  .radio-button {
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .radio-button--inline {
    display: inline-block;
  }

  .dit-radio {
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
        border-radius: 100%;
      }

      &::after {
        opacity: 0;
        transform: scale(0);
        background: #000;
        border-radius: 100%;
        margin: 6px;
        width: 18px;
        height: 18px;
      }
    }

    &:checked + .form-label::after {
      opacity: 1;
      transform: scale(1);
    }

    &:focus + .form-label::before {
      box-shadow: 0 0 0 1px rgba(#fff, .8), 0 0 0 3px $outline-colour;
    }
  }
</style>
