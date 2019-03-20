/* eslint-disable no-param-reassign */
import FireBaseService from '../../services/firebase';

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
    createNewAccount: async ({ commit, dispatch }, payload) => {
      try {
        const response = await FireBaseService.register({
          email: payload.email,
          password: payload.password,
        });
        console.log(response);
        // Create a success notification
        // redirect to login page
      } catch (error) {
        dispatch('actionSetNotificationMessages', [error.message]);
        dispatch('actionSetNotificationType', 'error');
      }
    },
  },
};

export default user;
