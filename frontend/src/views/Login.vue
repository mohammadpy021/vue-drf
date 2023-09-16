<template>
  <div class="Login">
    <div class="col-lg-3  mx-auto border shadow rounded p-4 mt-3">
      <h1 class="text-center">Login</h1>





      <form @submit.prevent="doLogin">

        <div class="form-group ">
          <label for="username">Username:</label>
          <input type="text" class="form-control" id="username" v-model="username" v-bind:class="{'is-invalid':(usernameE===true), 'is-valid':(usernameE===false)}">
          <span class="invalid-feedback">{{ usernameEM }}</span>
        </div>
        <div class="form-group">
          <label for="pwd">Password:</label>
          <input type="password" class="form-control" id="pwd" v-model="password" v-bind:class="{'is-invalid':(passwordE===true), 'is-valid':(passwordE===false)}">
          <span class="invalid-feedback">{{passwordEM}}</span>
        </div>
        <button type="submit" class="btn btn-success mt-2">Submit</button>
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
import axios from 'axios'
export default {

  name: 'Login',
  data() {
    return {
      username: '',
      password: '',
      usernameE: null,   //Error
      passwordE: null,   //Error   
      usernameEM: null,    //ErrorMessage
      passwordEM: null     //ErrorMessage

    }
  },
  methods:
  {
    doLogin() {
      let access = true
      if (this.username.length < 5) {
        access = false
        this.usernameE = true
        if (this.username.length === 0) {
          this.usernameEM = "Username is required"
        }
        else {
          this.usernameEM = "Username must be atleat 5 characters"
        }
      }
      else {
        this.usernameE = false
        this.usernameEM = ''
      }
      if (this.password.length < 3) {
        access = false
        this.passwordE = true
        if (this.password.length === 0) {
          this.passwordEM = "Password is required"
        }
        else {
          this.passwordEM = "Password must be atleat 3 characters"
        }
      }
      else {
        this.passwordE = false
        this.passwordEM = ''
      }
      // console.log(this.username)
      if (access) {        
        axios                                 // /api/auth/token/login/ //TokenAuthentication
            .post(`/api/auth/jwt/create/ `, {// /api/auth/jwt/create/ // JWT    
                      username: this.username,
                      password: this.password
            })
            .then((response) => {
              let access_token = response.data.access   //JWT
              let refresh_token = response.data.refresh //JWT
              // let auth_token = response.data.auth_token //TokeeAuthentication
              this.$store.commit("login", access_token)
              this.$router.push("/profile")
            })
            .catch((e) => {
              this.passwordE = true
              this.usernameE = true
              // this.usernameEM = e.response.data.non_field_errors //TokenAuthentication
              this.usernameEM = e.response.data.detail
                // console.log(e.response.status)
            })
        // this.$store.commit("login", `${this.username}:${this.password}`)
        // this.$router.push("/profile")
      }
    }
  }
}
</script>