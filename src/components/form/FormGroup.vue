<template>
  <div :class="groupClassName">
    <label class="form-label" :for="groupId" v-if="label">{{label}}</label>
    <p class="form-hint" v-if="hint">{{hint}}</p>
    <slot></slot>
  </div>
</template>

<script>
  import {kebabCase} from 'lodash'

  export default {
    name: 'form-group',
    props: {
      label: String,
      hint: String,
      inline: Boolean,
      hasError: Boolean
    },
    computed: {
      groupId() {
        return kebabCase(this.label) + '-' + this._uid
      },
      groupClassName() {
        return {
          'form-group': true,
          'form-group--inline': this.inline,
          'has-error': this.hasError
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .form-group {
    margin: 20px 0;
  }

  .form-group--inline {
    .form-control {
      display: inline-block;
    }

    @media(min-width: 40em) {
      .form-label {
        margin-right: 10px;
        margin-bottom: 0;
      }

      .form-hint {
        margin-top: 5px;
      }
    }
  }

  .form-label {
    margin-bottom: 10px;
    font-size: 1.2em;
    display: inline-block;
    font-weight: 600;
  }

  .form-hint {
    color: #6f777b;
    margin: -5px 0 10px;
  }

  .form-group.has-error {
    .form-label {
      color: #b10e1e;
    }

    .form-control {
      border-color: #b10e1e;
    }
  }
</style>
