import Vue from 'vue'
import App from './App.vue'
// 使用element-ui框架begin
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 使用element-ui框架end
// 导入router begin
import router from '@/router'
Vue.use(ElementUI)
// 导入router end
Vue.config.productionTip = false

new Vue({
  // 挂载
  router,
  render: h => h(App)
}).$mount('#app')

// 11.3初始化项目已完成------下一步该登录页面
