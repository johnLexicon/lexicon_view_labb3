<template>
  <div class="home">
    <h1>Previews</h1>
    <div class="mt-5">
      <PostCard v-for="post in getPosts" :key="post.id" :post="post" />
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
  computed: {
    ...mapGetters(["getPosts"]),
  },
};
</script>
