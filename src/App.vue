<template>
  <div id="app">
    <div class="tb-error-cmp">

    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
  @import "../node_modules/normalize.css/normalize.css";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
  html, body, #app {
    height: 100%;
  }

  .tb-error-cmp{
    height: 50px;
    width: 100%;
    background-color: forestgreen;
  }
</style>
