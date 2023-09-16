<template>
  <div class="profile">
    <h1>This is a Profile page</h1>
    <div class="alert alert-success">
        hello {{ username }}
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'ProfileView',
  data() {
    return {
      username: "",
    }
  },
  mounted() {                          //after completely page loaded 
    axios
    .get('/api/auth/users/me/')
      .then((response) => {
        this.username = response.data.username
      })
      .catch((e) => {
        // console.log(e.response.data)
        this.$store.commit("logout")
        this.$router.push("/login")
      })
  },
}
</script>