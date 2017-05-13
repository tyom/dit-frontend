<template>
  <button class="dit-button">
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: 'dit-button',
  }
</script>

<style lang="scss">
  .dit-button {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-appearance: none;
    font-size: 1.1em;
    background-color: #ccc;
    border: 0;
    box-shadow: 0 2px 0 darken(#ccc, 15%);
    cursor: pointer;
    display: inline-block;
    letter-spacing: .01em;
    line-height: 1.25;
    outline: 1px solid transparent;  // keep some button appearance when changing colour settings in browsers
    outline-offset: -1px;  // fixes bug in Safari that outline width on focus is not overwritten, is reset to 0 on focus in govuk_templat
    padding: 10px 20px;
    position: relative;
    text-align: center;
    text-decoration: none;
    width: 100%;
    border-radius: 0;

    @media(min-width: 40em) {
      width: auto;
    }
  }
</style>
