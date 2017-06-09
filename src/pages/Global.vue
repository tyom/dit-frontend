<template>
  <container>
    <h1>Global components</h1>
    <example title="Global header">
      <global-header></global-header>
    </example>
  </container>
</template>

<script>
  import {Global} from '../components'

  export default {
    components: {
      ...Global
    }
  }
</script>
