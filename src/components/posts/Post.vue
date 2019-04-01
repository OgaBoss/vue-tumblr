<template>
  <div class="row">
    <div class="col s12 m4">
      <div class="card hoverable">
        <div class="card-image">
          <img src="../../assets/img/prism.png">
          <span class="card-title">Card Title</span>
          <a class="btn-floating halfway-fab-opposite waves-effect waves-light black"><i class="material-icons">star</i></a>
          <PostType :post_type="'video'"></PostType>
        </div>
        <div class="card-content" >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PostType from '../common/PostType'
export default {
  components: {
    PostType,
  }
}
</script>

<style lang="scss" scoped>
  .halfway-fab-opposite {
    position: absolute;
    left: 24px;
    bottom: -20px;
  }
</style>


