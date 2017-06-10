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

      &:hover {
        text-decoration: none;
      }
    }
  }

  .breadcrumbs__list {
    list-style: none;
    padding: 0;
    margin: -2px 0;
    white-space: nowrap;
  }

  .breadcrumbs__item {
    display: inline-block;
    vertical-align: top;
    max-width: 20em;
    padding: 2px;
    margin-right: -4px;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #888;

    &:not(:first-child)::before {
      content: "›";
      display: inline-block;
      vertical-align: top;
      height: 1em;
      font-size: 1.5em;
      line-height: 1;
      margin: -2px 8px 0;
      color: #ccc;
    }
  }
</style>
