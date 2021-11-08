<template>
  <nav
    class="
      navbar navbar-expand-lg navbar-light
      bg-light
      position-fixed
      w-100
      top-0
    "
  >
    <div class="container-fluid">
      <a class="navbar-brand" href="#"
        ><img src="../assets/lexicon.jpg" alt="Lexicon" height="30"
      /></a>
      <button
        class="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fas fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <router-link exact class="nav-link" aria-current="page" to="/"
            >Home</router-link
          >
          <router-link exact class="nav-link" to="/create"
            >Create Post</router-link
          >
          <router-link exact class="nav-link" to="/about">About</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
nav {
  z-index: 100 !important;
}
.router-link-active {
  color: #d60000 !important;
  text-decoration: underline;
}
</style>