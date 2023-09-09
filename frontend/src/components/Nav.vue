<template>
    <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> | 
        <router-link to="/profile" v-if=$store.state.isAuthenticated>Profile | </router-link>
        <router-link to="/register" v-if=!$store.state.isAuthenticated>Register | </router-link>
        <router-link to="/login" v-if=!$store.state.isAuthenticated>Login | </router-link>
        <router-link to="/logout" v-if=$store.state.isAuthenticated>Logout | </router-link>
  </nav>
  </template>
<script>
export default {
  name: 'Nav'
}
</script>