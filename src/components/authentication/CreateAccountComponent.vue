<template>
  <div class="tb-login">
    <form @submit.prevent="">
      <div class="tb-form_fields">
        <input type="email" name="email"  placeholder="email"/>
      </div>
      <div class="tb-form_fields">
        <input type="text" name="username"  placeholder="username"/>
      </div>
      <div class="tb-form_fields">
        <input type="text" name="password" placeholder="password"/>
      </div>
      <div class="tb-form_fields">
        <button type="button">Create</button>
      </div>
      <router-link to="/auth/login" tag="a">Login</router-link>
    </form>
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
  .tb-login {
    text-align: center;
  }

  input {
    border: 1px solid gray ;
    height: 35px;
    width: 400px;
    outline: none;
    padding-left: 10px;
    border-bottom: 0 solid grey;
  }

  button {
    height: 35px;
    width: 413px;
    background-color: #2196F3;
    border: 0;
    outline: none;
    cursor: pointer;
    color: #fff;
  }
</style>

