import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import firstpage from '../components/firstpage.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Login },
  { path: '/login', component: Login },
  { path: '/firstpage', component: firstpage }
]

const router = new VueRouter({
  routes
})

export default router
