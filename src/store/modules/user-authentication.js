/* eslint-disable no-param-reassign */
import FireBaseService from '../../services/firebase';

import router from '../../router';

const user = {
  state: {
    user: {},
  },

  getters: {
    getUserData: state => state.user,
  },
  mutations: {
    setUserData: (state, payload) => {
      state.user = payload;
    },
  },
  actions: {
    createNewAccount: async ({ dispatch }, payload) => {
      try {
        const response = await FireBaseService.register({
          email: payload.email,
          password: payload.password,
        });
        console.log(response);
        // Create a success notification
        // redirect to login page
        dispatch('actionSetNotificationMessages', ['Account creation successfull']);
        dispatch('actionSetNotificationType', 'success');
        router.push({ path: 'login' });
      } catch (error) {
        dispatch('actionSetNotificationMessages', [error.message]);
        dispatch('actionSetNotificationType', 'error');
      }
    },

    actionLogin: async ({ commit, dispatch }, payload) => {
      try {
        const response = await FireBaseService.login({ email: payload.email, password: payload.password });
        if (response) {
          commit('setUserData', { email: payload.email });
          dispatch('actionSetNotificationMessages', ['Login successfull']);
          dispatch('actionSetNotificationType', 'success');
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};

export default user;
