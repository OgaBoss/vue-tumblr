<template>
  <div class="tb-login">
    <form @submit.prevent="login()">
      <div class="tb-form_fields">
        <input type="email" name="email" v-model="form.email"  placeholder="email"/>
      </div>
      <div class="tb-form_fields">
        <input type="text" name="password" v-model="form.password" placeholder="password"/>
      </div>
      <div class="tb-form_fields">
        <button>Login</button>
      </div>
      <router-link to="/auth/create-account" tag="a">Create account</router-link>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: '',
        password: '',
      }
    };
  },

  methods: {
    login() {
      this.$store.dispatch('actionLogin', this.form)
    }
  }
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
