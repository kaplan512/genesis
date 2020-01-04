import Vue from 'vue'
import VueRouter from 'vue-router'
import Table from '../views/TableVue.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'table',
    component: Table
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
