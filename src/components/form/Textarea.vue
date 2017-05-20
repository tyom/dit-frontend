<template>
  <textarea
    :class="textareaClassName"
    :id="$parent.groupId"
    @scroll="handleExpand"
    @keydown="handleShrink"
    :style="{height: this.scrollHeight}"
  ></textarea>
</template>

<script>
  export default {
    name: 'dit-textarea',
    data() {
      return {
        scrollHeight: null
      }
    },
    computed: {
      textareaClassName() {
        return {
          'form-control': true,
          [`form-control--${this.variant}`]: this.variant
        }
      }
    },
    props: {
      variant: String,
      autosize: {
        type: Boolean,
        default: true,
      }
    },
    methods: {
      handleExpand(e) {
        if (!this.autosize) return
        this.scrollHeight = `${e.target.scrollHeight}px`
      },
      handleShrink(e) {
        if (!this.autosize) return
        if (e.key === 'Backspace') {
          this.scrollHeight = 'auto'
        }
      }
    },
  }
</script>

<style lang="scss">
  @import "../settings";

  textarea.form-control {
    min-height: 6em;
    max-height: 50vh;
  }
</style>
