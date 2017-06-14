<template>
  <div class="phase-banner">
    <phase-tag :phase="phase"></phase-tag>
    <span class="phase-banner__message">
      <slot></slot>
    </span>
  </div>
</template>

<script>
  import PhaseTag from './PhaseTag.vue'

  export default {
    name: 'phase-banner',
    props: {
      phase: String,
    },
    components: {
      PhaseTag,
    }
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

  .phase-banner__message {
    display: table-cell;
    width: 100%;
  }
</style>
