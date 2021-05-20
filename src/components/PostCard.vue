<template>
  <!-- Card Wider -->
  <div class="card card-cascade wider shadow-lg mb-4">
    <!-- Card image -->
    <div class="view view-cascade overlay">
      <img class="card-img-top" :src="post.imgUrl" alt="Card image cap" />
      <router-link :to="{ name: 'BlogPost', params: { id: post.id } }">
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