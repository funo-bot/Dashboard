import VueRouter, { Route, RouteConfig } from 'vue-router'

import Guilds from '@/components/Guilds.vue'
import Guild from '@/components/Guild.vue'

import Login from '@/components/Login.vue'
import Oauth from '@/components/Oauth.vue'

import { socket } from '@/utils/socket'

export const routes: RouteConfig[] = [
  { name: 'login', path: '/login', component: Login },
  { name: 'oauth', path: '/oauth', component: Oauth },

  { name: 'guilds', path: '/guilds', component: Guilds },
  { name: 'guild', path: '/guilds/:id', component: Guild, props: true },
]

export const router = new VueRouter({
  routes, // short for `routes: routes`
  mode: 'history',
})

function dash() {
  return router.push({ name: 'dashboard' })
}

function login(to: Route, next: () => void) {
  if (['login', 'oauth'].includes(to.name || '')) return next()

  return router.push({ name: 'login' })
}

router.beforeEach((to, from, next) => {
  if (!to.name) return router.push({ name: 'guilds' })

  const loginPage = ['login', 'oauth'].includes(to.name || '')
  const authData = localStorage.getItem('user')

  if (!authData) return login(to, next)

  const auth = JSON.parse(authData)

  if (
    !auth.createdAt || typeof auth.createdAt !== 'number' ||
    auth.createdAt + (auth.expires_in * 1000) <= Date.now()
  ) return login(to, next)

  socket.emit('login', auth.access_token)

  if (loginPage) return dash()

  next()
})
