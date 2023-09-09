<template>
    <div class="Register">
      <div class="col-lg-3  mx-auto border shadow rounded p-4 mt-3">
        <h1 class="text-center">Register</h1>
  
  
  
  
  
        <form @submit.prevent="doRegister">
  
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
          <div class="form-group">
            <label for="pwd">Repeat password:</label>
            <input type="password" class="form-control" id="pwd" v-model="password2" v-bind:class="{'is-invalid':(password2E===true), 'is-valid':(password2E===false)}">
            <span class="invalid-feedback">{{password2EM}}</span>
          </div>
          <button type="submit" class="btn btn-success mt-2">Submit</button>
          <!-- <button type="submit" class="btn btn-success mt-2" @click="doRegister">Submit</button> -->
        </form>
      </div>
    </div>
  </template>
  
  <style>
  /* .Register {
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
    name: 'Register',
    data() {
      return {
        username: '',
        password: '',
        password2: '',
        usernameE: null,         //Error
        passwordE: null,         //Error   
        password2E: null,        //Error   
        usernameEM: null,        //ErrorMessage
        passwordEM: null,        //ErrorMessage
        password2EM: null        //ErrorMessage
  
      }
    },
    methods:
    {
      doRegister() {
        let access = true
        if (this.username.length < 5) {
          access = false
          this.usernameE = true
          if (this.username.length === 0) {
            this.usernameEM = "Username is required"
          }
          else {
            this.usernameEM = "Username must be at least 5 characters"
          }
        }
        else {
          this.usernameE = false
          this.usernameEM = ''
        }
        if (this.password.length < 6) {
          access = false
          this.passwordE = true
          if (this.password.length === 0) {
            this.passwordEM = "Password is required"
          }
          else {
            this.passwordEM = "Password must be at least 6 characters"
          }
        }
        else {
          this.passwordE = false
          this.passwordEM = ''
        }
        if (this.password2.length < 6) {
          access = false
          this.password2E = true
          if (this.password2.length === 0) {
            this.password2EM = "Repeat password  is required"
          }
          else {
            this.password2EM = "Repeat password  must be at least 6 characters"
          }
        }
        else if(this.password !== this.password2 ){
            access = false
            this.passwordE = true
            this.password2E = true
            this.password2EM = "Password and repeat-password aren't same"
        }
        else {
          this.password2E = false
          this.password2E = false
          this.password2EM = ''
        
        }
        // console.log(this.username)
        if (access) {
          this.$store.commit("login", `${this.username}:${this.password}`)
          this.$router.push("/profile")
        }
      }
    }
  }
  </script>
  
  
  
  