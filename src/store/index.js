import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const api = 'http://localhost:3000/posts';

export default new Vuex.Store({
  state: {
    posts: [],
  },
  mutations: {
    FETCH_POSTS: (state, posts) => {
      state.posts = posts;
    },
  },
  actions: {
    fetchPosts: async ({ commit }) => {
      try {
        const result = await axios.get(api);
        commit('FETCH_POSTS', result.data);
      } catch (err) {
        console.log(err);
      }
    },
  },
  modules: {},
});
