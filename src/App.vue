<template>
  <div id="app">
    <Navbar />
    <div class="margin-top container-fluid container-sm">
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
.margin-top {
  margin-top: 90px;
}
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
