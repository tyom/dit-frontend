<template>
  <div class="breadcrumbs">
    <ol class="breadcrumbs__list">
      <li class="breadcrumbs__item" v-for="item in items" v-if="item.title">
        <a :href="item.url" v-if="item.url">{{item.title}}</a>
        <template v-else>{{item.title}}</template>
      </li>
    </ol>
  </div>
</template>

<script>
  export default {
    props: {
      items: Array,
    }
  }
</script>

<style lang="scss">
  @import "../settings";

  .breadcrumbs {
    a:link,
    a:visited {
      color: $text-colour;
    }
  }

  .breadcrumbs__list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .breadcrumbs__item {
    display: inline-block;
    vertical-align: top;
    white-space: nowrap;
    max-width: 20em;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #888;

    &:not(:first-child)::before {
      content: "›";
      display: inline-block;
      vertical-align: top;
      height: 1em;
      font-size: 1.4em;
      line-height: 1;
      margin: -1px 6px 0;
      color: #ccc;
    }
  }
</style>
