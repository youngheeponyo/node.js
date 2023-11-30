import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView   //어떤 컴포넌트를 불러올건지 정함
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.(prefetch기능을 제한)
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')  //지연로딩..바로 실행되는게 아니라 호출되면 안에 소스들을 다운로드함
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
