import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  // 一级路由布局容器
  {
    path: '/',
    component: () => import(/* webpackChunkName: "Layout" */ '@/views/Layout'),
    children: [
      // 首页路由
      { path: '/', component: () => import(/* webpackChunkName: "Home" */'@/views/home') },
      // 分类导航一级路由
      { path: '/category/:id', component: () => import('@/views/category') },
      // 分类导航二级路由
      { path: '/category/sub/:id', component: () => import('@/views/category/sub') }
    ]
  }
]

const router = createRouter({
  // 使用 hash路由模式
  history: createWebHashHistory(),
  routes
})

export default router
