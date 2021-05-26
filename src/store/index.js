import Vue from 'vue';
import Vuex from 'vuex';
import { dataService } from '../shared/dataService';

Vue.use(Vuex);

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
        const posts = await dataService.getAllPosts();
        commit('FETCH_POSTS', posts);
      } catch (err) {
        console.log(err);
      }
    },
    createPost: async ({ commit }, payload) => {
      try {
        const addedPost = await dataService.addPost(payload);
        commit('CREATE_POST', addedPost);
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
      return state.posts.find((post) => post._id === id);
    },
  },
  modules: {},
});
