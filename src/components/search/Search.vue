<template>
  <div class="container">
    <div class="row valign-wrapper">
    <form class="col s12">
      <div class="row">
        <div class="input-field col s12">
          <input id="tag" type="text" class="validate">
          <label for="tag">Searh for anything</label>
          <span class="helper-text" data-error="wrong" data-success="right">Type in anything to search for e.g football, food, etc...</span>
        </div>
      </div>
    </form>
  </div>
  </div>
</template>

<style lang="scss" scoped>
  .container {
    height: 100%;
    > .row {
      height: 100%;
    }
  }
</style>
