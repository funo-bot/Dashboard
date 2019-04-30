import Dashboard from '@/components/Dashboard.vue'
import Login from '@/components/Login.vue'
import Oauth from '@/components/Oauth.vue'
import VueRouter from 'vue-router'

export const routes = [
  { path: '/dashboard', component: Dashboard },
  { path: '/login', component: Login },
  { path: '/oauth', component: Oauth },
]

export const router = new VueRouter({
  routes, // short for `routes: routes`
  mode: 'history',
})
