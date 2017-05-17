<template>
  <router-link to="/" class="logo">
    <img src="../../assets/crest.svg" width="100">
    <h1>Department for International Trade</h1>
  </router-link>
</template>

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

    &:focus {
      box-shadow: inset 0 0 0 3px $outline-colour;
    }

    img {
      display: block;
      vertical-align: middle;
      width: 60px;
      margin: 0 10px 10px 0;

      @media(min-width: $breakpoint) {
        display: inline-block;
        border-right: 3px solid #CF102D;
        padding-right: 10px;
        margin: 0 10px 0 0;
      }
    }

    h1 {
      display: inline-block;
      vertical-align: middle;
      font-weight: 500;
      width: 9em;
      margin: 0;
      font-size: 1.4em;
      line-height: 1.1;
      color: #333;
    }
  }
</style>
