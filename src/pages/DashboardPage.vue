<template>
  <section>
    <TopNavigation></TopNavigation>
    <Search></Search>
  </section>
</template>

<script>
import TopNavigation from '../components/navigation/TopNavigation';
import Search from '../components/search/Search'
export default {
  components: {
    TopNavigation,
    Search,
  } 
}
</script>

<style lang="scss" scoped>
  section {
    height: 100%;
  }
</style>


