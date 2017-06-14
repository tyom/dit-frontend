<template>
  <span class="phase-tag" v-if="phase">{{phase}}</span>
</template>

<script>
  export default {
    props: {
      phase: String,
    }
  }
</script>

<style lang="scss">
  .phase-tag {
    position: relative;
    background-color: #005ea5;
    color: #fff;
    font-weight: 600;
    font-size: .95rem;
    padding: .1em .35em 0;
    text-transform: uppercase;
    margin-right: .5em;
    display: inline-block;
    cursor: default;
  }
</style>
