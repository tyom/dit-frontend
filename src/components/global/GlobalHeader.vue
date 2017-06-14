<template>
  <div class="global-header">
    <container>
      <div class="global-header__site-title">
        <slot>
          <h1>
            TRADE.GOV.UK
            <phase-tag phase="alpha"></phase-tag>
          </h1>
        </slot>
      </div>
      <nav class="global-header__nav" v-if="$slots.nav">
        <slot name="nav"></slot>
      </nav>
    </container>
  </div>
</template>

<script>
  import Container from '../layout/Container.vue'
  import PhaseTag from './PhaseTag.vue'

  export default {
    name: 'global-header',
    components: {
      Container,
      PhaseTag,
    }
  }
</script>

<style lang="scss">
  @import "../tools";
  @import "../settings";

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

    @include media('>phone') {
      > .container {
        display: flex;
        justify-content: space-between;
      }
    }
  }

  .global-header__site-title {
    margin: 0;
    font-size: 1.8rem;

    h1 {
      margin: 0;
      font-size: inherit;

      a {
        display: inline-block;
        line-height: 1;
      }

      span {
        font-weight: 400;
      }

      .phase-tag {
        top: -3px;
        font-weight: 600;
        margin-left: 5px;
      }
    }
  }

  .global-header__nav {
    font-weight: bold;
    border-top: 1px solid rgba(#fff, .3);
    padding-top: 5px;
    margin: 5px -20px 0;

    a:link {
      display: block;
      padding: 5px 20px;
      transition: none;

      &:hover {
        text-decoration: underline;
      }
    }

    @include media('>phone') {
      display: flex;
      align-items: center;
      border: 0;
      margin: 0;
      padding: 0;

      a:link,
      a:visited {
        display: inline-block;
        margin-left: 20px;
        padding: 0;

        &:focus {
          background-color: $outline-colour;
          color: #000;
        }
      }

      a.is-selected,
      a.router-link-active {
        color: #1d8feb;
      }
    }

  }
</style>
