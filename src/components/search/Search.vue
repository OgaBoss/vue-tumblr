<template>
  <div class="container">
    <div class="row valign-wrapper">
    <form class="col s12" v-on:submit.prevent>
      <div class="row">
        <div class="input-field col s12">
          <input v-model="tag" id="tag" type="text" class="validate" @keyup.enter="search">
          <label class='active' for="tag">
            Searh for anything
            <hollow-dots-spinner
              :animation-duration="1000"
              :dot-size="15"
              :dots-num="3"
              color="#ff1d5e"
              v-if="loading"
            />
          </label>
          <span class="helper-text" data-error="wrong" data-success="right">
            Type in anything to search for e.g football, food, etc...
          </span>
          <span v-if="validate && tag === ''" class="helper-text red-text">Please provide a tag to search for.</span>
        </div>
      </div>
    </form>
  </div>
  </div>
</template>

<script>
import { HollowDotsSpinner } from 'epic-spinners'
export default {
  components: {
    HollowDotsSpinner,
  },
  computed: {
    loading() {
      return this.$store.getters.getLoadingStatus;
    }
  },
  data() {
    return {
      tag: '',
      validate: false
    }
  },
  methods: {
    search() {
      if(this.tag === '') {
        this.validate = true;
      } else {
        this.$store.dispatch('actionGetPostsByTag', this.tag);
      }
    }
  }
}
</script>


<style lang="scss" scoped>
  .container {
    height: 100%;
    > .row {
      height: 100%;
    }
  }
</style>
