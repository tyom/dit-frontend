<template>
  <input class="form-control" :id="$parent.groupId">
</template>

<style lang="scss">
  .form-control[type="text"] {
    border: 2px solid;
    padding: 8px;
    width: 100%;
    margin-bottom: 10px;

    @media(min-width: 40em) {
      width: auto;
      margin-bottom: 0;
    }
  }
</style>
