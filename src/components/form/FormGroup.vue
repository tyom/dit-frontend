<template>
  <div :class="groupClassName">
    <label class="form-label" :for="groupId" v-if="label">{{label}}</label>
    <slot></slot>
  </div>
</template>

<script>
  import {kebabCase} from 'lodash'

  export default {
    name: 'form-group',
    props: {
      label: String,
      inline: Boolean
    },
    computed: {
      groupId() {
        return kebabCase(this.label) + '-' + this._uid
      },
      groupClassName() {
        return {
          'form-group': true,
          'form-group--inline': this.inline
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
      width: auto;
    }

    .form-label {
      margin-right: 10px;
    }
  }

  .form-label {
    margin-bottom: 10px;
    font-size: 1.1em;
    display: inline-block;
    font-weight: 600;
  }
</style>
