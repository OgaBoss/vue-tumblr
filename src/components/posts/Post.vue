<template>
  <div>
    <div class="row" v-for="(chunks, key) in postChunks(posts)" :key="key">
      <div class="col s12 m4" v-for="(post, index) in chunks" :key="index">
        <div class="card hoverable">
          <div class="card-image">
            <img src="../../assets/img/prism.png">
            <span class="card-title">{{post.blog.name}}</span>
            <a class="btn-floating halfway-fab-opposite waves-effect waves-light black"><i class="material-icons">star</i></a>
            <PostType :post_type="post.type"></PostType>
          </div>
          <div class="card-content" >
            {{post.blog.description}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PostType from '../common/PostType'
import chunk from 'lodash.chunk';
export default {
  components: {
    PostType,
  },

  computed:{
    posts() {
      return this.$store.getters['getAllPosts']
    }
  },

  methods: {
    postChunks(posts) {
       return chunk(posts, 3)
    }
  }
}
</script>

<style lang="scss" scoped>
  .halfway-fab-opposite {
    position: absolute;
    left: 24px;
    bottom: -20px;
  }

  .card-content{
    max-height: 50px;
    overflow: scroll;
  }
</style>


