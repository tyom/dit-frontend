<template>
  <router-link to="/" class="logo">
    <crest class="logo__img"></crest>
    <h1 class="logo__text">Department for International Trade</h1>
  </router-link>
</template>

<script>
  import Crest from '../../assets/crest.svg'

  export default {
    components: {
      Crest
    }
  }
</script>

<style lang="scss">
  @import "../settings";

  $breakpoint: 28em;

  .logo {
    display: inline-block;
    color: inherit;
    text-decoration: none;
    outline: none;
    border-left: 3px solid #CF102D;
    padding: 5px 5px 5px 15px;
    margin: -5px;

    @media(min-width: $breakpoint) {
      border: 0;
      padding-left: 5px;
    }

    h1 {
      display: inline-block;
      vertical-align: middle;
      font-weight: 500;
      width: 9em;
      margin: 0;
      font-size: 1.4em;
      line-height: 1.1;
    }
  }

  .logo__img {
    display: inline-block;
    vertical-align: middle;
    width: 60px;
    fill: #fff;
    height: auto;
    margin: 0 10px 10px 0;

    @media(min-width: $breakpoint) {
      display: inline-block;
      border-right: 3px solid #CF102D;
      padding-right: 10px;
      margin: 0 10px 0 0;
    }
  }

</style>
