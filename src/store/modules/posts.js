/* eslint-disable no-param-reassign */
import TubmlrService from '../../services/tumblr';
import route from '../../router';

const posts = {
  state: {
    posts: [],
    loading: false,
  },

  getters: {
    getAllPosts: state => state.posts,
    getLoadingStatus: state => state.loading,
  },

  mutations: {
    setAllPosts: (state, payload) => {
      state.posts = payload;
    },

    setLoadingStatus: (state, payload) => {
      state.loading = payload;
    },
  },

  actions: {
    actionGetPostsByTag: async ({ commit }, payload) => {
      commit('setLoadingStatus', true);
      try {
        const response = await TubmlrService.tagged(payload);
        console.log(response.data.response);
        commit('setAllPosts', response.data.response);
        route.push({ path: 'search_posts', query: { tag: payload } });
      } catch (error) {
        console.log(error);
      }

      commit('setLoadingStatus', false);
    },
  },
};

export default posts;
