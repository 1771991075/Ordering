import Vue from 'vue'
import App from './App.vue'
import App1 from './App1.vue'
import router from './router'
import store from './store'
import axios from 'axios'
// 把axios 导入到vue全局变量中
Vue.prototype.axios = axios

// 引入element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

// 是否开启控制台配置
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App1)
}).$mount('#app')
