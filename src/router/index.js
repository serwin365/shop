import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Firstpage from '../components/firstpage.vue'
import People from '../FIRST/people.vue'
import Index from '../FIRST/index.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', component: Login },
  { path: '/login', component: Login },
  { path: '/firstpage', component: Firstpage, children: [{ path: 'people', component: People }, { path: 'index', component: Index }] }
]

const router = new VueRouter({
  routes
})

export default router
