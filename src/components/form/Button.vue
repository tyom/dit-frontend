<template>
  <button :class="buttonClassName">
    <slot></slot>
  </button>
</template>

<script>
  export default {
    name: 'dit-button',
    computed: {
      buttonClassName() {
        return {
          'dit-button': true,
          [`dit-button--${this.variant}`]: this.variant,
          [`dit-button--${this.size}`]: this.size
        }
      }
    },
    props: {
      variant: String,
      size: String
    }
  }
</script>

<style lang="scss">
  @import "../settings";

  @mixin buttonColour($colour: $light-grey) {
    background-color: mix($colour, #000, 100%);
    box-shadow: 0 2px 0 mix($colour, #000, 75%);

    &:hover:not(:disabled) {
      background-color: mix($colour, #000, 85%);
      box-shadow: 0 2px 0 mix($colour, #000, 60%);
    }

    &:active:not(:disabled) {
      background-color: mix($colour, #000, 50%);
      box-shadow: inset 0 2px 0 mix($colour, #000, 30%);
      color: #fff;
    }
  }

  .dit-button {
    @include buttonColour;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-appearance: none;
    font-size: 1.1em;
    border: 0;
    cursor: pointer;
    display: inline-block;
    letter-spacing: .01em;
    line-height: 1.25;
    outline: 1px solid transparent;  // keep some button appearance when changing colour settings in browsers
    outline-offset: -1px;  // fixes bug in Safari that outline width on focus is not overwritten, is reset to 0 on focus in govuk_templat
    padding: 8px 20px;
    position: relative;
    text-align: center;
    text-decoration: none;
    width: 100%;
    border-radius: 0;

    @media(min-width: 40em) {
      width: auto;
    }

    &:focus:not(:disabled) {
      outline: 0;
      box-shadow: 0 0 0 1px #fff, 0 0 0 3px $outline-colour;
    }

    &[disabled] {
      cursor: default;
      opacity: .5;
    }

    * + & {
      margin-top: 10px;

      @media(min-width: 40em) {
        margin-top: 0;
      }
    }
  }

  .dit-button--warning {
    @include buttonColour(#ef9998);
    color: mix(#ef9998, #000, 20%);
  }

  .dit-button--primary {
    @include buttonColour(#00823b);
    color: #fff;
  }

  .dit-button--small {
    font-size: .9em;
    padding: 5px 12px;
    width: auto;
  }
</style>
