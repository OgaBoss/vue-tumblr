const notification = {
  state: {
    messages: [],
    type: 'error',
  },

  getters: {
    getNotificationMessages: state => state.messages,
    getNotificationType: state => state.type,
  },

  mutations: {
    setNotificationMessages: (state, payload) => {
      payload.forEach((message) => {
        state.messages.push(message);
      });
    },

    setNotificationType: (state, payload) => {
      state.type = payload;
    },

  },

  actions: {
    actionSetNotificationMessages: ({ commit }, payload) => {
      console.log(payload);
      commit('setNotificationMessages', payload);
    },

    actionSetNotificationType: ({ commit }, payload) => {
      commit('setNotificationType', payload);
    },
  },
};

export default notification;
