<template>
  <nav class="global-nav" v-if="items.length">
    <container>
      <router-link v-for="item in items" :to="item.url" class="global-nav__link" :key="item.url">
        {{item.label}}
      </router-link>
    </container>
  </nav>
</template>

<script>
  export default {
    name: 'global-nav',
    props: {
      items: Array
    }
  }
</script>

<style lang="scss">
  @import "../settings";

  .global-nav {
    background: #555;
    font-size: 1.1em;
    color: #fff;

    .container {
      display: flex;
    }

    a:link,
    a:visited {
      color: inherit;
    }
  }

  .global-nav__link {
    color: #ddd;
    padding: 15px 20px;
    text-decoration: none;
    font-weight: 500;

    &:hover {
      color: #fff;
      background: rgba(#000, .2);
    }

    &:focus {
      position: relative;
      outline: 0;
      box-shadow: 0 0 0 3px $outline-colour;
    }

    &.router-link-active,
    &:active {
      background-color: rgba(#000, .4);
      color: #fff;
    }
  }
</style>
