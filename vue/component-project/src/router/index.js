import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DataBinding from '../views/DataBinding.vue'
import ListBinding from '../views/ListBinding.vue'
import IfBinding from '../views/IfBinding.vue'
import OnEvent from '../views/OnEvent.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/dataBinding',
    name: 'dataBinding',
    component: DataBinding
  },
  {
    path: '/ListBinding',
    name: 'ListBinding',
    component: ListBinding
  },
  {
    path: '/IfBinding',
    name: 'IfBinding',
    component : IfBinding
  },
  {
    path: '/OnEvent',
    name: 'OnEvent',
    component : OnEvent
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
