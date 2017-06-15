<template>
  <container>
    <h1>Global components</h1>
    <example title="Global header">
      <global-header>
        <template slot="nav">
          <a href="#">Home</a>
          <a href="#">Section</a>
        </template>
      </global-header>
    </example>

    <example title="Phase banner">
      <phase-banner phase="beta">
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
          {url: '/global', title: 'Global Components'},
          {title: 'Breadcrumbs'},
        ]
      }
    },
    components: {
      ...Global
    }
  }
</script>
