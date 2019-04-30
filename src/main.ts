import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import { router } from './router'
import { socket } from './utils/socket'

if (!socket.connected) socket.connect() // Removes import if this isn't here

Vue.config.productionTip = false

Vue.use(VueRouter)

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
