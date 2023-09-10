<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/about">About</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/profile" v-if=$store.state.isAuthenticated>Profile </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/add" v-if=$store.state.isAuthenticated>Add post </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/register" v-if=!$store.state.isAuthenticated>Register  </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/login" v-if=!$store.state.isAuthenticated>Login  </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/logout" v-if=$store.state.isAuthenticated>Logout  </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script>
export default {
  name: 'Nav'
}
</script>