<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
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
          <router-link class="nav-link active" aria-current="page" to="/"
            >Home</router-link
          >
          <router-link class="nav-link" to="/create">Create Post</router-link>
          <router-link class="nav-link" to="/about">About</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style>
</style>