<template>
  <section>
    <TopNavigation></TopNavigation>
    <div class="container">
      <Posts></Posts>
    </div>
  </section>
</template>

<script>
import TopNavigation from '../components/navigation/TopNavigation';
import Posts from '../components/posts/Post';
export default {
  components: {
    TopNavigation,
    Posts,
  }
}
</script>

