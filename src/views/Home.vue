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
      <PostCard
        v-for="post in filteredPosts"
        :key="post.id"
        :post="post"
        :showAllText="false"
        :addLink="true"
      />
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
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
  computed: {
    ...mapGetters(["getPosts"]),
    filteredPosts() {
      const filteredPosts = this.getPosts.filter((p) =>
        p.title.toLowerCase().match(this.search.toLowerCase())
      );
      return filteredPosts;
    },
  },
};
</script>
