import { createRouter, createWebHistory } from 'vue-router'
import UserList from '../views/UserList.vue'
import selectUser from '../views/selectUser.vue'
import UserInsert from '../views/UserInsert.vue'
import UserUpdate from '../views/UserUpdate.vue'

const routes = [
  {
    path: '/',
    name: 'UserList',
    component: UserList
  },
  {
    path : '/selectUser',
    name : 'selectUser',
    component : selectUser
  },
  {
    path : '/UserInsert',
    name : 'UserInsert',
    component : UserInsert
  },
  {
    path : '/UserUpdate',
    name : 'UserUpdate',
    component : UserUpdate
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
