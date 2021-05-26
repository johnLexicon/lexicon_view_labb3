<template>
  <div class="home">
    <h1>Previews</h1>
    <input
      v-model="search"
      class="form-control"
      type="text"
      placeholder="Search by title"
    />
    <div class="mt-5">
      <h3 v-if="!postsAvailable">Loading posts</h3>
      <PostCard
        v-else
        v-for="post in filteredPosts"
        :key="post._id"
        :post="post"
        :showAllText="false"
        :addLink="true"
      />
    </div>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import PostCard from "../components/PostCard";
export default {
  name: "Home",
  components: {
    PostCard,
  },
  data() {
    return {
      search: "",
    };
  },
  created() {
    this.fetchPosts();
  },
  methods: {
    ...mapActions(["fetchPosts"]),
  },
  computed: {
    ...mapGetters(["getPosts", "postsAvailable"]),
    filteredPosts() {
      const filteredPosts = this.getPosts.filter((p) =>
        p.title.toLowerCase().match(this.search.toLowerCase())
      );
      return filteredPosts;
    },
  },
};
</script>
