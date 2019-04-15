import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

// import modules
import UserAuthentication from './modules/user-authentication';
import ErrorStore from './modules/notification';
import Posts from './modules/posts';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    UserAuthentication,
    ErrorStore,
    Posts,
  },
  plugins: [createPersistedState({
    paths: ['UserAuthentication'],
  })],
});

export default store;
