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
    createNewAccount: async ({ commit }, payload) => {
      try {
        let response = await FireBaseService.register({ email: payload.email, password: payload.password });
        console.log(response);
      } catch (error) {
        console.log(error)
      }
    },
  },
};

export default user;
