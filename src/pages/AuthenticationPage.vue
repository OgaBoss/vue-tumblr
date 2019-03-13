<template>
  <div class="authentication">
    <div class="tb-bkg"></div>
    <div class="forms">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
	export default {
		data() {
			return {};
		},
	};
</script>

<style lang="scss" scoped>
  .authentication {
    height: 100%;
    display: flex;
    flex-flow: row nowrap;

    .tb-bkg {
      visibility: hidden;
    }

    @media only screen and (min-width: 650px) {
      .tb-bkg {
        flex: 0 0 50%;
        visibility: visible;
        background-image: url("../assets/img/prism.png");
      }
    }

    .forms {
      flex: 0 0 100%;
      background-color: #fafafa;
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
    }

    @media only screen and (min-width: 650px) {
      .forms {
        flex: 0 0 50%;
      }
    }

    .tb-views {
      display: flex;
      flex-flow: column nowrap;
      justify-content: center;
    }
  }
</style>
