<template>
  <div id="app">
    <header>
      <container>
        <router-link to="/" class="logo">
          <img src="./assets/crest.svg" width="100">
          <h1>Department for International Trade</h1>
        </router-link>
      </container>
      <nav>
        <container>
          <router-link to="/layout">Layout</router-link>
          <router-link to="/form-elements">Form elements</router-link>
        </container>
      </nav>
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<style lang="scss" scoped>
  @import "./components/settings";

  $container-padding: 30px;

  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #eee;
    min-height: 100vh;
  }

  header {
    padding: $container-padding;
    background-color: #ccc;

    nav {
      background: #555;
      margin: $container-padding (-$container-padding) (-$container-padding);
      font-size: 1.3em;

      .container {
        display: flex;
      }

      a {
        color: #ddd;
        padding: 15px 20px;
        text-decoration: none;
        font-weight: 500;
        margin-right: 1px;

        &:hover {
          color: #fff;
          background: #454545;
        }

        &:focus {
          position: relative;
          outline: 0;
          box-shadow: 0 0 0 3px $outline-colour;
        }
      }

      a.router-link-active {
        background-color: #333;
        color: #fff;
      }
    }
  }

  .logo {
    display: inline-block;
    color: inherit;
    padding: 10px;
    margin: -10px;
    text-decoration: none;
    outline: none;

    &:focus {
      box-shadow: inset 0 0 0 3px $outline-colour;
    }

    img {
      display: inline-block;
      vertical-align: middle;
    }

    h1 {
      display: inline-block;
      vertical-align: middle;
      font-weight: 500;
      width: 9em;
      margin: 0 0 0 10px;
      line-height: 1.1;
      padding-left: 15px;
      border-left: 3px solid #CF102D;
    }
  }

  main {
    padding: $container-padding;
  }

  form {
    width: 600px;
  }
</style>
