<template>
  <nav>
    <div class="nav-wrapper">
      <router-link to="dashboard" class="brand-logo">tumblrr</router-link>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><a href="#">Dami</a></li>
        <li><a href="#">Posts</a></li>
        <li><a href="#">Wishlist</a></li>
      </ul>
      <div class="fixed-action-btn">
        <a class="btn-floating btn-large">
          <i class="large material-icons">add</i>
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
  nav {
    background-color: #1e88e5;
    margin-bottom: 25px;

    .brand-logo {
      padding-left: 20px;
    }

    .btn-floating {
      background-color: #1e88e5;
    }
  }
</style>


