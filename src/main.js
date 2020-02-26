import Vue from 'vue'
import App from './App.vue'
import router from './router'
import elementUI from 'element-ui' // 引入ui库  elementUi
import 'element-ui/lib/theme-chalk/index.css'
import vRegion from 'v-region';

Vue.use(vRegion);
Vue.config.productionTip = false
Vue.use(elementUI)  // 使用elementUi库

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
