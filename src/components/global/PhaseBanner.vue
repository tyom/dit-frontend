<template>
  <div class="phase-banner">
    <span class="phase-banner__tag" v-if="tag">{{tag}}</span>
    <span class="phase-banner__message">
      <slot></slot>
    </span>
  </div>
</template>

<script>
  export default {
    name: 'phase-banner',
    props: {
      tag: String,
    },
  }
</script>

<style lang="scss">
  @import "../tools";

  .phase-banner {
    padding-top: 8px;
    padding-bottom: 8px;
    border-bottom: 1px solid #bfc1c3;
    display: table;
    font-size: .9rem;
    line-height: 1.2;
    width: 100%;

    @include media('>tablet') {
      font-size: 1rem;
    }
  }

  .phase-banner__tag {
    background-color: #005ea5;
    color: #fff;
    font-weight: 600;
    padding: .1em .35em 0;
    text-transform: uppercase;
    margin-right: .5em;
    display: inline-block;
    cursor: default;
  }

  .phase-banner__message {
    display: table-cell;
    width: 100%;
  }
</style>
