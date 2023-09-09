<template>
    <div class="Logout">
      <h1>This is a Logout page</h1>
      <button type="button" class="btn btn-danger" @click="doLogout">Logout</button>
    </div>
</template>


<script>
export default {
    name: 'Logout',
    methods:{
        doLogout() {
        this.$store.commit("logout")
        this.$router.push("/")
        } 
    }
  }
</script>