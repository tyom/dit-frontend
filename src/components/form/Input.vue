<template>
  <input class="form-control" :id="$parent.groupId">
</template>

<style lang="scss">
  .form-control[type="text"],
  .form-control[type="number"],
  .form-control[type="password"] {
    border: 2px solid;
    padding: 8px;
    width: 100%;

    @media(min-width: 40em) {
      width: auto;
    }
  }
</style>
