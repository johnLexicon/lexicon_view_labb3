<template>
  <div>
    <h1>Post</h1>
    <PostCard v-if="post" :post="post" />
    <p v-else>Retrieving Post...</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import PostCard from "../components/PostCard";
export default {
  name: "BlogPost",
  components: {
    PostCard,
  },
  data() {
    return {
      post: null,
    };
  },
  computed: {
    ...mapGetters(["getPostById"]),
  },
  created() {
    const postId = this.$route.params.id;
    console.log(postId);
    this.post = this.getPostById(postId);
  },
};
</script>

<style>
</style>