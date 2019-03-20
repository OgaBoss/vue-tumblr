<template>
  <div id="app">
    <notify></notify>
    <router-view/>
  </div>
</template>

<script>
import Notification from './components/error/Notification';

export default {
  components: {
    'notify': Notification,
  },
};
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
