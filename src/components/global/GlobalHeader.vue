<template>
  <div class="global-header">
    <container>
      <slot>
        <h1>TRADE.GOV.UK</h1>
      </slot>
    </container>
  </div>
</template>

<script>
  import Container from '../layout/Container.vue'

  export default {
    name: 'global-header',
    components: {
      Container
    }
  }
</script>

<style lang="scss">
  .global-header {
    padding: 8px 16px;
    background-color: #0b0c0c;
    color: #eee;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    h1 {
      margin: 0;
    }
  }
</style>
