import { createRouter, createWebHistory } from 'vue-router'
import EmpList from '../views/EmpList.vue'

const routes = [
  {
    path: '/',
    name: 'EmpList',
    component: EmpList
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
