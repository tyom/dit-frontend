<template>
  <container>
    <h1>DIT Front-end components</h1>
    <nav>
      <router-link to="/layout">Layout</router-link>
      <router-link to="/global">Global components</router-link>
      <router-link to="/form-elements">Form elements</router-link>
    </nav>
  </container>
</template>

<style lang="scss" scoped>
  @import "../components/settings";

  nav {
    display: flex;
    margin: -10px;

    a {
      display: block;
      font-size: 1.6em;
      padding: 20px;
      text-decoration: none;
      font-weight: 600;
      border: 1px solid #aaa;
      margin: 0 10px;
      color: inherit;

      &:hover {
        background-color: #fff;
      }
    }
  }
</style>
