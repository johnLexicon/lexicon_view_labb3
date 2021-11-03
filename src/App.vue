<template>
  <div id="app">
    <Navbar />
    <div class="container-fluid container-sm mt-4">
      <transition name="route-animation">
        <router-view />
      </transition>
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>
<style>
.route-animation-enter-active {
  animation-name: entering;
  animation-duration: 4s;
  opacity: 0;
}

@keyframes entering {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
