<template>
  <div class="Login">
    <div class="col-lg-3  mx-auto border shadow rounded p-4 mt-3">
      <h1 class="text-center">Login</h1>
      <form @submit.prevent="doLogin">
        <div class="form-group">
          <label for="username">Username:</label>
          <input type="text" class="form-control" id="username" v-model="username">
        </div>
        <div class="form-group">
          <label for="pwd">Password:</label>
          <input type="password" class="form-control" id="pwd" v-model="password">
        </div>
        <button type="submit" class="btn btn-success mt-2" >Submit</button>
        <!-- <button type="submit" class="btn btn-success mt-2" @click="doLogin">Submit</button> -->
      </form>
    </div>
  </div>
</template>

<style>
/* .Login {
	display: flex;
	flex-direction: column;
	flex-wrap: nowrap;
	justify-content: flex-start;
	align-items: center;
	align-content: stretch;
  box-shadow: 0;
} */
</style>

<script>
export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods:
  {
    doLogin() {
      console.log(this.username)
      console.log(this.password)
      // this.$store.commit("login", "toeknvalue")
      // this.$router.push("/profile")
    }
  }
}
</script>



