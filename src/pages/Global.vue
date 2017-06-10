<template>
  <container>
    <h1>Global components</h1>
    <example title="Global header">
      <global-header></global-header>
    </example>

    <example title="Phase banner">
      <phase-banner tag="beta">
        This is a new service – your <a href="#">feedback</a> will help us to improve it.
      </phase-banner>
    </example>

    <example title="Breadcrumbs">
      <breadcrumbs :items="breadcrumbs"></breadcrumbs>
    </example>

    <example title="Global footer">
      <global-footer></global-footer>
    </example>
  </container>
</template>

<script>
  import {Global} from '../components'

  export default {
    data() {
      return {
        breadcrumbs: [
          {url: '/', title: 'Home'},
          {url: '/companies/', title: 'Companies'},
          {title: 'Hilton UK Ltd'},
        ]
      }
    },
    components: {
      ...Global
    }
  }
</script>
