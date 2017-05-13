<template>
  <select class="dit-select form-control" v-model="initialSelection" :id="$parent.groupId">
    <slot></slot>
    <option v-if="options.length" :value="option.value" v-for="option in options">{{option.label}}</option>
  </select>
</template>

<script>
  export default {
    name: 'dit-select',
    props: {
      options: {
        type: Array,
        default() {
          return []
        }
      },
      initialSelection: {
        type: String,
        default: ''
      }
    }
  }
</script>

<style lang="scss">
  .dit-select {
    box-sizing: border-box;
    border: 2px solid;
    color: inherit;
    font-size: 1em;
    height: 2.4em;
  }
</style>
