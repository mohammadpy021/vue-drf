<template>
    <div class="Login">
      <h1>This is a Login page</h1>
      <button class="btn btn-success" @click="doLogin">Login</button>
    </div>
</template>


<script>
export default {
    name: 'Login',
    methods:
    {
        doLogin() {
            this.$store.commit("login", "toeknvalue")
        } 
    }
    
  }
</script>