<template>
    <div class="Logout">
      <h1>This is a Logout page</h1>
      <button type="button" class="btn btn-danger" @click="doLogout">Logout</button>
    </div>
</template>


<script>
import axios from 'axios'
export default {
    name: 'Logout',
    methods:{
        doLogout() {
          axios.post('/api/auth/token/logout/')
            .then((response) => { // only for Token Based Authentication
              this.$store.commit("logout")
              this.$router.push("/login")
            })
            .catch((e) => { // if Token Based Authentication is not used (EX: jwt is used)
                this.$store.commit("logout")
                this.$router.push("/login")
            })
         
        // this.$store.commit("logout")
        // this.$router.push("/")
        } 
    }
  }
</script>