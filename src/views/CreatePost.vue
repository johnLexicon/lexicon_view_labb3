<template>
  <div class="createPost">
    <h2 class="mb-5">Add New Post</h2>
    <!-- Default form contact -->
    <form class="border border-light mb-5" @submit.prevent="sendPost">
      <!-- Title -->
      <div class="form-group mb-4">
        <label class="fw-bold fs-5 text-muted" for="title">Title</label>
        <input
          type="text"
          id="title"
          class="form-control rounded-2"
          placeholder="Title..."
          v-model="post.title"
        />
        <span class="small text-muted">Required</span>
      </div>
      <!-- Authors -->
      <div class="form-group mb-4">
        <label for="author" class="fw-bold fs-5 text-muted">Author</label>
        <select
          id="author"
          v-model="post.author"
          class="form-select"
          aria-label="Default select example"
        >
          <option v-for="(author, index) in authors" :key="index">
            {{ author }}
          </option>
        </select>
      </div>
      <!-- Image Url -->
      <div class="form-group mb-5">
        <label class="fw-bold fs-5 text-muted" for="imageUrl">Image Url</label>
        <input
          type="text"
          id="imageUrl"
          class="form-control rounded-2"
          placeholder="Image Url"
          v-model="post.imgUrl"
        />
      </div>

      <!-- Content -->
      <div class="form-group mb-5">
        <label class="fw-bold fs-5 text-muted" for="content">Content</label>
        <textarea
          class="form-control rounded-2"
          id="content"
          rows="3"
          placeholder="Blog Content..."
          v-model="post.body"
        ></textarea>
        <span class="small text-muted">Required, at least 50 characters</span>
      </div>

      <!-- Categories -->
      <div class="fw-bold fs-5 text-muted">Categories</div>
      <div id="categories" ref="categories" class="btn-group mb-5" role="group">
        <button
          @click="handleChosenCategory($event, 'food')"
          type="button"
          class="btn btn-success"
        >
          Food
        </button>
        <button
          @click="handleChosenCategory($event, 'travel')"
          type="button"
          class="btn btn-success"
        >
          Travel
        </button>
        <button
          @click="handleChosenCategory($event, 'politics')"
          type="button"
          class="btn btn-success"
        >
          Politics
        </button>
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

    <h2 class="mb-5">Preview Blog</h2>
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
        author: "Unknown",
        body: "",
        imgUrl: null,
        categories: [],
      },
      authors: ["Unknown", "Author 1", "Author 2", "Author 3"],
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
  watch: {
    "post.categories": function () {
      const elems = this.$refs.categories.childNodes;
      elems.forEach((elem) => {
        let buttonName = elem.textContent.trim().toLowerCase();
        if (this.post.categories.includes(buttonName)) {
          elem.classList.add("btn-danger");
          elem.classList.remove("btn-success");
        } else {
          elem.classList.remove("btn-danger");
          elem.classList.add("btn-success");
        }
      });
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
      this.post = { title: "", body: "", imgUrl: null, categories: [] };
    },
    handleChosenCategory({ target }, category) {
      if (this.post.categories.includes(category)) {
        this.post.categories = this.post.categories.filter(
          (c) => c !== category
        );
      } else {
        this.post.categories.push(category);
      }
    },
  },
};
</script>

<style>
</style>