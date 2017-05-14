<template>
  <div id="app">
    <header>
      <container>
        <router-link to="/">
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

    a {
      display: flex;
      color: inherit;
      text-decoration: none;
    }

    h1 {
      font-weight: 500;
      width: 9em;
      margin: 0;
      line-height: 1.1;
      padding-left: 15px;
      border-left: 3px solid #CF102D;
    }

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
      }

      a.router-link-active {
        background-color: #333;
        color: #fff;
      }
    }
  }

  main {
    padding: $container-padding;
  }

  form {
    width: 600px;
  }
</style>
