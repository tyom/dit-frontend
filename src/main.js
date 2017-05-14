import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import Index from './pages/Index.vue'
import FormElements from './pages/FormElements.vue'
import Layout from './pages/Layout.vue'

import { Container } from './components/layout'
import { Example } from './components/docs'

Vue.use(VueRouter)
// Globally components
Vue.component('container', Container)
Vue.component('example', Example)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Index },
    { path: '/form-elements', component: FormElements },
    { path: '/layout', component: Layout }
  ]
})

new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
