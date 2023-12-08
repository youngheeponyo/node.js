import { createRouter, createWebHistory } from 'vue-router'
import EmpInsert from '../views/EmpInsert.vue'
import Main from '../views/MainComponent.vue'
import EmpList from '../views/EmpList.vue'
import EmpInfo from '../views/EmpInfo.vue'
import EmpUpdate from '../views/EmpUpdate.vue'
import Form from '../views/EmpFormView.vue'

const routes = [
  {
    path: '/',
    name: 'Main',
    component: Main
  },
  {
    path : '/EmpInsert',
    name : 'EmpInsert',
    component :EmpInsert
  },
  {
    path: '/EmpList',
    name: 'EmpList',
    component: EmpList
  },
  {
    path : '/EmpInfo',
    name : EmpInfo,
    component : EmpInfo
  },
  {
    path : '/EmpUpdate',
    name : 'EmpUpdate',
    component : EmpUpdate
  },
  {
    path : '/Form',
    name : 'Form',
    component : Form
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
