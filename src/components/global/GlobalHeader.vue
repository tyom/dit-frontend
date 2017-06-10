<template>
  <div class="global-header">
    <container>
      <slot>
        <h1 class="global-header__title">TRADE.GOV.UK</h1>
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
    padding: 8px 0;
    background-color: #0b0c0c;
    color: #eee;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    a:link,
    a:visited {
      color: inherit;
      text-decoration: none;
    }
  }

  .global-header__title {
    margin: 0;
    font-size: 1.8rem;
  }
</style>
