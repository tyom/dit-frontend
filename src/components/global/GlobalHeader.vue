<template>
  <div class="global-header">
    <container>
      <div class="global-header__site-logo">
        <slot>
          <h1 class="global-header__site-title">
            <router-link :to="titleLink">
              <crest class="global-header__crest" v-if="crest"></crest>
              <span>{{title}}</span>
            </router-link>
            <phase-tag :phase="phase" v-if="phase"></phase-tag>
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
  import Crest from '../../assets/crest.svg'

  export default {
    name: 'global-header',
    props: {
      crest: {
        type: Boolean,
        default: true,
      },
      phase: {
        type: [String, Boolean],
        default: 'alpha',
      },
      title: {
        type: String,
        default: 'TRADE.GOV.UK',
      },
      titleLink: {
        type: String,
        default: '/',
      }
    },
    components: {
      Container,
      PhaseTag,
      Crest,
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

  .global-header__crest {
    margin-right: 8px;
    width: 36px;
    vertical-align: top;
  }

  .global-header__site-logo {
    margin: 0;
    font-size: 1.8rem;
    display: flex;
  }

  .global-header__site-title {
    margin: 0;
    font-size: inherit;

    a {
      display: flex;
      align-items: center;
      float: left;
      margin-left: -8px;
      line-height: 1;
      padding: 0 8px;

      span {
        border-bottom: 1px solid transparent;
        margin-bottom: -1px;
        transition: 100ms;
      }

      &:hover span {
        border-color: #fff;
      }
    }

    .phase-tag {
      float: left;
      margin-top: 5px;
      margin-left: 8px;
    }
  }

  .global-header__nav {
    font-weight: bold;
    border-top: 1px solid rgba(#fff, .3);
    padding-top: 5px;
    margin: 5px -20px 0;
    white-space: nowrap;

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
      a.router-link-exact-active {
        color: lighten($govuk-blue, 20);
      }
    }

  }
</style>
