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
    CREATE_POST: (state, post) => {
      state.posts.push(post);
    },
  },
  actions: {
    fetchPosts: async ({ commit }) => {
      try {
        const response = await axios.get(api);
        commit('FETCH_POSTS', response.data);
      } catch (err) {
        console.log(err);
      }
    },
    createPost: async ({ commit }, payload) => {
      try {
        const response = await axios.post(api, payload);
        commit('CREATE_POST', response.data);
      } catch (err) {
        console.log(err);
      }
    },
  },
  getters: {
    getPosts: (state) => {
      return state.posts;
    },
    getPostById: (state) => (id) => {
      return state.posts.find((post) => post.id === id);
    },
  },
  modules: {},
});
