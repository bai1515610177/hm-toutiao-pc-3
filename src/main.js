import Vue from 'vue'
import App from './App.vue'
// 使用element-ui框架begin
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 导入router begin
import router from '@/router'
// 挂载axios
import axios from '@/api'
Vue.prototype.$http = axios
Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  // 挂载
  router,
  render: h => h(App)
}).$mount('#app')

// 11.3初始化项目已完成------下一步该登录页面
// 11.4下一步整体校验
