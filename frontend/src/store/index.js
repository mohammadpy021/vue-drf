import { createStore } from 'vuex'
import axios from 'axios'
export default createStore({
  state: {
    isAuthenticated: false,
    token: ""
  },
  getters: {
  },
  mutations: {
    // onStart(state) {
    //   let token = localStorage.getItem("token")
    //   if (token) {
    //     state.isAuthenticated = true
    //     state.token = token
    //     axios.defaults.headers.common['Authorization'] = "JWT" + " " + token  //For django jwt // "Bearer" or // "Token "
    //   }
    //   else {
    //     state.isAuthenticated = false,
    //       state.token = ''
    //     axios.defaults.headers.common['Authorization'] = ""
    //   }
    // },
    login(state, token) {
      state.isAuthenticated = true
      state.token = token
      localStorage.setItem("token", token)
      axios.defaults.headers.common['Authorization'] = "JWT" + " " + token //For django jwt // "Bearer" or // "Token "
    },
    logout(state) {
      state.isAuthenticated = false,
        state.token = ''
      localStorage.removeItem("token")
      axios.defaults.headers.common['Authorization'] = ""
    }
  },
  actions: {
    onStart(state) {
      let token = localStorage.getItem("token")
      if (token) {
        axios.defaults.headers.common['Authorization'] = "JWT" + " " + token //For django jwt // "Bearer" or // "Token "
        axios
          .get('/api/auth/users/me/')
          .then((response) => {         //if Token is valid
            state.commit('login', token)
          })
          .catch((e) => {
            state.commit('logout')
          })
      }
      else {
        state.commit('logout')
      }
    },
  },
  modules: {
  }
})
