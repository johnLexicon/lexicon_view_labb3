<template>
  <div class="createPost">
    <h1>Add New Post</h1>
    <!-- Default form contact -->
    <form
      class="text-center border border-light p-5"
      @submit.prevent="sendPost"
    >
      <p class="h4 mb-4">Blog Post</p>

      <!-- Title -->
      <input
        type="text"
        id="title"
        class="form-control mb-4 rounded-2"
        placeholder="Title..."
        v-model="post.title"
      />

      <!-- Image Url -->
      <input
        type="text"
        id="imageUrl"
        class="form-control mb-4 rounded-2"
        placeholder="Image Url"
        v-model="post.imgUrl"
      />

      <!-- Content -->
      <div class="form-group">
        <textarea
          class="form-control rounded-2 mb-4"
          id="content"
          rows="3"
          placeholder="Blog Content..."
          v-model="post.body"
        ></textarea>
      </div>

      <!-- Send button -->
      <button
        :disabled="!isValid"
        class="btn btn-danger btn-block"
        type="submit"
      >
        Send
      </button>
    </form>
    <!-- Default form contact -->

    <h2>Preview Blog</h2>
    <PostCard v-if="showPreview" :post="post" :showAllText="true" />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import PostCard from "../components/PostCard";
export default {
  name: "CreatePost",
  components: {
    PostCard,
  },
  data() {
    return {
      post: {
        title: "",
        body: "",
        imgUrl: null,
      },
    };
  },
  computed: {
    showPreview() {
      return this.post.title || this.post.imgUrl || this.post.body;
    },
    isValid() {
      return this.post.title.length > 1 && this.post.body.length >= 50;
    },
  },
  methods: {
    ...mapActions(["createPost"]),
    sendPost() {
      if (!this.isValid) {
        return;
      }
      const postToCreate = { ...this.post };
      this.createPost(postToCreate);
      this.post = { title: "", body: "", imgUrl: null };
    },
  },
};
</script>

<style>
</style>