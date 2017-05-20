import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import IndexPage from './pages/Index.vue'
import FormElementsPage from './pages/FormElements.vue'
import LayoutPage from './pages/Layout.vue'

import Layout from './components/layout'
import Docs from './components/docs'


Vue.use(VueRouter)
// Globally components
Vue.component('container', Layout.Container)
Vue.component('example', Docs.Example)

const router = new VueRouter({
  mode: 'hash',
  routes: [
    { path: '/', component: IndexPage },
    { path: '/form-elements', component: FormElementsPage },
    { path: '/layout', component: LayoutPage },
    { path: '*', redirect: '/' }
  ]
})

new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
