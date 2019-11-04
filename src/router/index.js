// 引入vue-router
import VueRouter from 'vue-router'
// 使用
import Vue from 'vue'
// 登录
import Login from '@/views/login'
Vue.use(VueRouter)
// 实例化
const router = new VueRouter({
  routes: [
    // 登录
    {
      path: '/login',
      component: Login
    }
  ]
})
// 导出
export default router
