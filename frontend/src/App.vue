<script>
// @ is an alias to /src
import Nav from '@/components/Nav.vue'

export default {
  name: 'app',
  components: {
    Nav
  },
  mounted(){                          //after completely page loading 
    this.$store.commit("onStart");
  },
  watch:{
    $route(){                         //by chaning route this will happen,(no page refreshing we need)
      this.$store.commit("onStart");
    }
  }
}
</script>
<!-- <script setup>
import Nav from '@/components/Nav.vue'
</script> -->

<template>
    <!-- <router-link to="/profile">Profile</router-link> -->
    {{ $store.state }} 
    
    <Nav />


  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>