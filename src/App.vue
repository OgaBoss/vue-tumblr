<template>
  <div id="app">
    <error-cmp></error-cmp>
    <router-view/>
  </div>
</template>

<script>
import ErrorComponent from './components/error/ErrorComponent'
export default {
  components: {
    'error-cmp': ErrorComponent
  },
}
</script>


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

  ul {
    margin: 0
  }
</style>
