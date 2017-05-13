<template>
  <section class="dit-example">
    <header v-if="$slots.title" class="dit-example__header">
      <slot name="title"></slot>
    </header>
    <div class="dit-example__preview">
      <slot></slot>
    </div>
  </section>
</template>

<script>
  export default {
    created() {
      console.log(this.$slots)
    }
  }
</script>

<style lang="scss">
  .dit-example {
    border: 1px solid #ccc;
    background-color: #eee;

    & + & {
      margin-top: 30px;
    }
  }

  .dit-example__header {
    padding: 20px;

    h2 {
      margin: 0;
    }
  }

  .dit-example__preview {
    background-color: #fff;
    padding: 20px;
  }
</style>
