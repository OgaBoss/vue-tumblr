import Vue from 'vue';
import Vuex from 'vuex';

// import modules
import UserAuthentication from './modules/user-authentication';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    UserAuthentication,
  },
});

export default store;
