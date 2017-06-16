<template>
  <container>
    <h1>Navigation</h1>
    <example title="Horisontal tabs">
      <tabs></tabs>
    </example>
    <example title="Horisontal tabs justified">
      <tabs variant="justified"></tabs>
    </example>
    <example title="Stacked tabs">
      <tabs variant="stacked"></tabs>
    </example>
  </container>
</template>

<script>
  import {Nav} from '../components'

  export default {
    components: {
      ...Nav
    }
  }
</script>
