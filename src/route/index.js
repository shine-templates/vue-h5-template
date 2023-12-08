import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/home/index.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { title: '模板首页' },
  },
  {
    path: '/setting',
    name: 'Setting',
    meta: { title: '关于' },
    component: () => import('@/views/setting/index.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
