<template>
  <div :class="groupClassName">
    <template v-if="variant === 'checkbox'">
      <slot></slot>
      <group-label v-if="label">{{label}}</group-label>
    </template>
    <template v-else-if="variant === 'radio'">
      <fieldset>
        <legend>{{label}}</legend>
        <p class="form-hint" v-if="hint">{{hint}}</p>
        <slot></slot>
      </fieldset>
    </template>
    <template v-else>
      <group-label v-if="label">{{label}}</group-label>
      <p class="form-hint" v-if="hint">{{hint}}</p>
      <slot></slot>
    </template>
  </div>
</template>

<script>
  import { kebabCase } from 'lodash'

  export default {
    name: 'form-group',
    props: {
      label: String,
      hint: String,
      inline: Boolean,
      hasError: Boolean,
      variant: String
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
    },
    components: {
      GroupLabel: {
        template: `
          <label class="form-label" :for="$parent.groupId">
            <slot></slot>
          </label>
        `
      }
    }
  }
</script>

<style lang="scss">
  .form-group {
    margin: 30px 0;
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
