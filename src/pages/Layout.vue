<template>
  <container>
    <h1>Layout</h1>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium assumenda autem consequuntur delectus,
      distinctio ducimus excepturi itaque maiores, mollitia numquam omnis perspiciatis provident quas quis quisquam
      repudiandae similique, sit sunt.
    </p>
    <example title="Global header">
      <global-header></global-header>
    </example>
  </container>
</template>

<script>
  import {Layout} from '../components'

  export default {
    components: {
      ...Layout
    }
  }
</script>
