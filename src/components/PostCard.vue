<template>
  <!-- Card Wider -->
  <div class="card card-cascade wider shadow-lg mb-4">
    <!-- Card image -->
    <div class="view view-cascade overlay">
      <img
        v-if="post.imgUrl"
        class="card-img-top"
        :src="post.imgUrl"
        alt="Card image cap"
      />
      <router-link
        v-if="addLink"
        :to="{ name: 'BlogPost', params: { id: post._id } }"
      >
        <div class="mask rgba-white-slight"></div>
      </router-link>
    </div>

    <!-- Card content -->
    <div class="card-body card-body-cascade text-center">
      <!-- Title -->
      <h2 class="card-title">
        <strong v-randomTextColor>{{ post.title }}</strong>
      </h2>
      <!-- Text -->
      <p v-if="showAllText" class="card-text">{{ post.body }}</p>
      <p v-else class="card-text">{{ post.body | shorten }}...</p>
      <div class="details">
        <small
          >Author: <i>{{ post.author }}</i></small
        >
        <div
          v-if="post.categories && post.categories.length > 0"
          class="categories"
        >
          <span
            class="badge bg-danger d-inline-block m-3"
            v-for="(category, index) in post.categories"
            :key="index"
            >{{ category }}</span
          >
        </div>
      </div>
    </div>
  </div>
  <!-- Card Wider -->
</template>

<script>
export default {
  name: "PostCard",
  props: {
    post: {
      type: Object,
      required: true,
    },
    addLink: {
      type: Boolean,
      default: false,
    },
    showAllText: Boolean,
  },
  filters: {
    shorten: (value) => {
      return value.substring(0, 400);
    },
  },
  directives: {
    randomTextColor: {
      bind(elem) {
        const r = Math.floor(Math.random() * 200);
        const g = Math.floor(Math.random() * 200);
        const b = Math.floor(Math.random() * 200);
        const color = `rgb(${r}, ${g}, ${b})`;
        elem.style = `color: ${color}`;
      },
    },
  },
};
</script>

<style>
</style>