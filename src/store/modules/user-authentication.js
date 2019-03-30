/* eslint-disable no-param-reassign */
import firebase from 'firebase';
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
          commit('setUserData', { email: payload.email });
          dispatch('actionSetNotificationMessages', ['Login successfull']);
          dispatch('actionSetNotificationType', 'success');
        }
      } catch (error) {
        dispatch('actionSetNotificationMessages', [error.message]);
        dispatch('actionSetNotificationType', 'error');
      }
    },
  },
};

export default user;
