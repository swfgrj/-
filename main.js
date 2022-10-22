
// #ifndef VUE3
import Vue from 'vue'
import App from './App'
import store from '@/store/store.js'//导入模块

// main.js
import tabBar from 'components/tabbar/tabbar.vue'
Vue.component('tab-bar',tabBar) //挂载


Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App,
     store//挂载store对象
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
import App from './App.vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif