<template>
  <div id="app">
    <Navbar />
    <div class="container mt-4">
      <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import { mapActions } from "vuex";
export default {
  name: "App",
  components: {
    Navbar,
  },
  created() {
    this.fetchPosts();
  },
  methods: {
    ...mapActions(["fetchPosts"]),
  },
};
</script>
