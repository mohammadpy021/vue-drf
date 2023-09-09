import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProfileView from '../views/ProfileView.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Logout from '../views/Logout.vue'
import store from '../store'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {//second way
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: ProfileView,
    meta: { loginRequired: true },
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: { loginRidirect: true },
  },
  {
    path: '/logout',
    name: 'logout',
    component: Logout,
    meta: { loginRequired: true },
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
    meta: { loginRidirect: true },
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to, from) => {
  if (to.meta.loginRequired && !store.state.isAuthenticated) {

    return {
      path: '/login',
    }
  }
  else if(to.meta.loginRidirect && store.state.isAuthenticated){
    return {
      path: '/profile',
    }
  }
})

export default router
