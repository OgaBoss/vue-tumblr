/* eslint-disable no-param-reassign */
import FireBaseService from '../../services/firebase';

import router from '../../router';

const user = {
  state: {
    user: {
      email: '',
      username: '',
    },
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
        await FireBaseService.register({
          email: payload.email,
          password: payload.password,
        });

        // Save username
        await FireBaseService.updateUserprofile({
          displayName: payload.username,
        });

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
        const response = await FireBaseService.login({
          email: payload.email,
          password: payload.password,
        });
        if (response) {
          commit('setUserData', { email: payload.email, username: response.user.displayName });
          dispatch('actionSetNotificationMessages', ['Login successfull']);
          dispatch('actionSetNotificationType', 'success');
          router.push({ path: '/dashboard' });
        }
      } catch (error) {
        dispatch('actionSetNotificationMessages', [error.message]);
        dispatch('actionSetNotificationType', 'error');
      }
    },
  },
};

export default user;
